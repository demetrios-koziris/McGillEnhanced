'use strict';

var q = require('q');
var _ = require('lodash');

var CONSTANTS = require('./lib/CONSTANTS.js');
var Request = require('./lib/request-util');
var Parser = require('./lib/parser');
var utils = require('./lib/utils');

function login(user) {
  var deferred = q.defer();

  var url = CONSTANTS.URLS.login;
  var jar = Request.jar('TESTID=set'); // required for login.
  var form = {
    sid:  user.username,
    PIN:  user.password
  };

  function retry(jar, retry_count) {
    retry_count = retry_count;
    return Request.post(url, jar, form)
    .then(function(response) {
      var cookie_string = response.jar.getCookieString(CONSTANTS.BASE_URL + '/');
      var contains_sessid = cookie_string.indexOf('SESSID=') !== -1;
      if (contains_sessid) {
        deferred.resolve(response);
      } else {
        if (retry_count < CONSTANTS.MAX_RETRY_COUNT) {
          retry(response.jar, retry_count + 1);
        } else {
          deferred.reject(new Error('could not login'));
        }
      }
    });
  }

  retry(jar, 1);

  return deferred.promise;
}

function promiseTranscript() {
  return function(response) {
    var deferred = q.defer();

    var url = CONSTANTS.URLS.transcript;
    var jar = response.jar;

    Request.get(url, jar)
    .then(function(response) {
      if (utils.isLoggedIn(response.body)) {
        deferred.resolve(response);
      } else {
        deferred.reject(new Error('got 404'));
      }
    });

    return deferred.promise;
  };
}

function promiseCourses(selection) {
  return function(response) {
    // this is a hack cause I have no clue what the fuck is going on with
    // McGill's post data on that form. Somehow they duplicate keys, put dummy
    // somewhere, some random %25s, ...  I'm not sure but I think I have to
    // write the damn thing by hand and in order.  sooo... This is my not so
    // elegant solution but it works and I'm happy :) If you can refactor it,
    // feel free :)
    function formUrlEncode(options) {
      // options keys : dep, number, season, year
      var season = utils.fmtSeason(options.season);

      var request_body = [
        "term_in=" + (options.year || '2015') + season,
        "&sel_subj=dummy",
        "&sel_day=dummy",
        "&sel_schd=dummy",
        "&sel_insm=dummy",
        "&sel_camp=dummy",
        "&sel_levl=dummy",
        "&sel_sess=dummy",
        "&sel_instr=dummy",
        "&sel_ptrm=dummy",
        "&sel_attr=dummy",
        "&sel_subj=" + (options.dep || 'COMP').toUpperCase(),
        "&sel_crse=" + (options.number || ''),
        "&sel_title=",
        "&sel_schd=%25",
        "&sel_from_cred=",
        "&sel_to_cred=",
        "&sel_levl=%25",
        "&sel_ptrm=%25",
        "&sel_instr=%25",
        "&sel_attr=%25",
        "&begin_hh=0",
        "&begin_mi=0",
        "&begin_ap=a",
        "&end_hh=0",
        "&end_mi=0",
        "&end_ap=a"
      ].join('');
      return request_body;
    }

    var deferred = q.defer();

    var url = CONSTANTS.URLS.select_courses;
    var jar = response.jar;
    var form = formUrlEncode(selection || {});

    Request.post(url, jar, form)
    .then(

    // success callback
    function(response) {
      if (utils.isLoggedIn(response.body)) {
        deferred.resolve(response);
      } else {
        deferred.reject(new Error('couldnt resolve course selection'));
      }
    },

    // error callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };
}

function promiseRegisteredCourses(options) {
  return function(response) {
    var deferred = q.defer();

    var url = CONSTANTS.URLS.registered_courses;
    var jar = response.jar;
    var form = {
      term_in: (options.year || '2015') + utils.fmtSeason(options.season)
    };

    Request.post(url, jar, form)
    .then(

    // success callback
    function(response) {
      if (utils.isLoggedIn(response.body)) {
        deferred.resolve(response);
      } else {
        deferred.reject(new Error('couldnt get list of registered_courses'));
      }
    },

    // error callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };
}

function promiseAddOrDropCourse(drop_flag, selection) {
  return function(response) {
    // I appologize for the mess below. It has to be like this because
    // McGill programmers, somehow, tought it was a good idea to
    // include duplicate keys in their POST requests. You read me
    // well. Duplicate keys. In a POST request...
    function formUrlEncode(options) {
      // options keys : dep, number, season, year
      // season matches WSF for winter summer fall
      var season = utils.fmtSeason(options.season);

      var head = [
        "term_in=" + (options.year || '2015') + season,

        // these are necessary otherwise post doesnt work... (wtf)
        "&RSTS_IN=DUMMY",
        "&assoc_term_in=DUMMY",
        "&CRN_IN=DUMMY",
        "&start_date_in=DUMMY",
        "&end_date_in=DUMMY",
        "&SUBJ=DUMMY",
        "&CRSE=DUMMY",
        "&SEC=DUMMY",
        "&LEVL=DUMMY",
        "&CRED=DUMMY",
        "&GMOD=DUMMY",
        "&TITLE=DUMMY",
        "&MESG=DUMMY",
        "&REG_BTN=DUMMY",
        "&MESG=DUMMY",
      ].join('');

      if (!(options.crn instanceof Array)) {
        options.crn = [options.crn];
      }

      var request_body_for_adding = '', request_body_for_dropping = '';
      _.forEach(options.crn, function(crn) {
        request_body_for_adding += [
          "&RSTS_IN=RW",
          "&CRN_IN=" + crn,
          "&assoc_term_in=",
          "&start_date_in=",
          "&end_date_in=",
          "&regs_row=0", // for dropping make this 10, for adding, make this 0
        ].join('');

        request_body_for_dropping += [
          "&RSTS_IN=DW",
          "&assoc_term_in=" + (options.year || '2015') + season,
          "&CRN_IN=" + crn,
          "&start_date_in=",
          "&end_date_in=",
          "&regs_row=10", // for dropping make this 10, for adding, make this 0
        ].join('');
      });

      var tail = [
        "&wait_row=0",
        "&add_row=10",
        "&REG_BTN=Submit+Changes",
      ].join('');

      return [
        head,
        (drop_flag ? request_body_for_dropping : request_body_for_adding),
        tail
      ].join('');
    }

    var deferred = q.defer();

    var url = CONSTANTS.URLS.add_courses;
    var jar = response.jar;
    var form = formUrlEncode(selection || {});

    Request.post(url, jar, form)
    .then(

    // success callback
    function(response) {
      if (utils.isLoggedIn(response.body)) {
        deferred.resolve(response);
      } else {
        deferred.reject(new Error('Either couldnt login, or 404, or 400 bad request'));
      }
    },

    // error callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };
}

function promiseAddCourses(selection) {
  return promiseAddOrDropCourse(false, selection);
}

function promiseDropCourses(selection) {
  return promiseAddOrDropCourse(true, selection);
}

var Minerva = function(u, p) {
  this.username = u || process.env.MG_USER;
  this.password = p || process.env.MG_PASS;
};

Minerva.prototype = {

  // for testing and backward compatibility
  login: function() {
    return login(this);
  },

  getTranscript: function() {
    var deferred = q.defer();

    login(this)
    .then(promiseTranscript())
    .then(

    // success callback
    function(response) {
      var html = response.body;
      if (!utils.isLoggedIn(html)) {
        deferred.reject(new Error('404'));
      } else {
        deferred.resolve(Parser.parseTranscript(html));
      }
    },

    // failure callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  },

  getCourses: function(selection) {
    var deferred = q.defer();

    login(this)
    .then(promiseCourses(selection))
    .then(

    // success callback
    function(response) {
      deferred.resolve(Parser.parseCourses(response.body));
    },

    // failure callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  },

  getRegisteredCourses: function(options) {
    var deferred = q.defer();

    login(this)
    .then(promiseRegisteredCourses(options))
    .then(

    // success callback
    function(response) {
      deferred.resolve(Parser.parseRegisteredCourses(response.body));
    },

    // error callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  },

  addCourses: function(options) {
    var deferred = q.defer();

    login(this)
    .then(promiseAddCourses(options))
    .then(

    // success callback
    function(response) {
      var courses = Parser.parseRegisteredCourses(response.body);
      var error = _.find(courses, 'ErrorMsg');
      if (error) {
        deferred.reject(new Error(error.ErrorMsg));
      } else {
        deferred.resolve(courses);
      }
    },

    // error callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  },

  dropCourses: function(options) {
    var deferred = q.defer();

    login(this)
    .then(promiseDropCourses(options))
    .then(

    // success callback
    function(response) {
      var courses = Parser.parseRegisteredCourses(response.body);
      var error = _.find(courses, 'ErrorMsg');
      if (error) {
        deferred.reject(new Error(error.ErrorMsg));
      } else {
        deferred.resolve(courses);
      }
    },

    // error callback
    function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  },
};


module.exports = Minerva;