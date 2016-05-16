
window.debugMode = false;
if(window.debugMode){console.log("McGill Enhanced Debug mode is ON");}

url = window.location.href;

//var loadMessage = "McGill Enhanced is loading ratings for this professor&#13Please hover mouse off then back on to refresh this tooltip";
var loadMessage = "McGill Enhanced is loading ratings!";

function getProfUrl(first, last, general, part) {
    var profURL = "http://www.ratemyprofessors.com/search.jsp?query=mcgill " + first + " " + last;
    if (general) {
        profURL = "http://www.ratemyprofessors.com/search.jsp?query=mcgill " + last;
    }

    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
        try {
            var profURL = data.url;
            var profURLHTML = data.responseXML;

            var div = document.createElement('div');
            div.innerHTML = profURLHTML;

            if (div.getElementsByClassName("result-count")[1].innerHTML.match(/Your search didn't return any results/) != null) {
                if (general) {
                    getProfContent(first, last, profURL, part, 0);
                }
                else {
                    profURL = getProfUrl(first, last, true, part);
                }
            }
            else if (div.getElementsByClassName("result-count")[1].innerHTML.match(/.*Showing 1-1 of 1 result.*/) != null) {
                var profURLId = profURLHTML.match(/(ShowRatings.jsp.tid.[0-9]+)"/)[1];
                profURL = "http://www.ratemyprofessors.com/" + profURLId;
                getProfContent(first, last, profURL, part, 1);
            }
            else {
                getProfContent(first, last, profURL, part, 2);
            }
        }
        catch(err) {
            console.log(first + " " + last + " " + part + " " + err);
        }
    });
}


function getProfContent(first, last, profURL, part, res) {
    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
        try {
            var profURL = data.url;
            var profURLHTML = data.responseXML;

            //var div = document.createElement('div');
            //div.innerHTML = profURLHTML;
            var rating = {
                overall: $(profURLHTML).find(".grade").html(),
                helpfulness: -1,
                clarity: -1,
                easiness: -1,
                grade: -1,
                hotness: -1
            }
            

            if (rating.overall === undefined) {
                if (res == 0) {
                    tooltipContent = "Instructor not found.";
                }
                else if (res = 2) {
                    tooltipContent = "Multiple Instructors found<br>Please click to see results";
                }
            }
            else {//if (part < 0)
                //check holly dressel in ENVR400(13-14) and Sung Chul Noh in MGCR 222 at https://www.mcgill.ca/study/2012-2013/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-civil-engineering

                var div = document.createElement('div');
                div.innerHTML = profURLHTML;
                if (div.getElementsByClassName("rating-count")[0] === undefined) {
                    tooltipContent = "This instructor has no ratings<br>Click to be the first to rate";
                }
                else {

                    rating.helpfulness = $(profURLHTML).find(".rating:eq(0)").html();
                    rating.clarity = $(profURLHTML).find(".rating:eq(1)").html();
                    rating.easiness = $(profURLHTML).find(".rating:eq(2)").html();
                    rating.grade = $(profURLHTML).find(".grade:eq(1)").html();

                    rating.hotness = $(profURLHTML).find(".grade:eq(2)").html();
                    if (rating.hotness != undefined) {
                        rating.hotness = rating.hotness.match(/chilis\/(.+)\-chili\.png/)[1];
                    }
                    
                    firstName = $(profURLHTML).find(".pfname").html();
                    if (firstName != undefined) {
                        firstName = firstName.trim();
                    }
                    lastName = $(profURLHTML).find(".plname").html();
                    if (lastName != undefined) {
                        lastName = lastName.trim();
                    }

                    //console.log(firstName + " " + rating.grade + " " + rating.hotness);

                    tooltipContent = "<b>" + firstName + " " + lastName + "</b>"
                    + "<br><b>" + rating.overall + "&nbsp Overall Quality</b>"
                    + "<br>" + rating.helpfulness + "&nbsp Helpfulness"
                    + "<br>" + rating.clarity + "&nbsp Clarity"
                    + "<br>" + rating.easiness + "&nbsp Easiness"


                    numOfRatings = div.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1]
                    //console.log(profURLHTML.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1]);
                    tooltipContent += "<br><b>From " + numOfRatings + " student rating" + (numOfRatings > 1 ? "s" : "") + "</b>"
                                    + "<br>Rater Ave Grade: " + rating.grade + "&nbsp"
                                    + "<br>Prof Hotness: " + rating.hotness.toUpperCase() + "&nbsp"
                }
            }
            makeProfSection(first, last, profURL, part, tooltipContent);
        }
        catch(err) {
            console.log(first + " " + last + " " + part)
            console.log(err);
        }
    });
}


function makeProfSection(first, last, profURL, part, tooltipContent) {
    profStateObject = window.profState;
    profStateObject.done++
    window.profState = profStateObject;
    if(window.debugMode){console.log(window.profState);}

    if (part < 0) {
        newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;
        var instFilter = new RegExp("www.ratemyprofessors.com.search.jsp.query=mcgill " + first + " " + last + "\"", 'g');
        newContent = newContent.replace(instFilter, profURL.split("://")[1] + "\" class=\"hasProfTip\"  title=\"" + tooltipContent + "\"");

        document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML = newContent;
    }
    else {
        catalogName = "catalog-instructorsMod" + part;
        newCatalog = document.getElementsByClassName(catalogName)[0].innerHTML;
        var instFilter = new RegExp("www.ratemyprofessors.com.search.jsp.query=mcgill " + first + " " + last + "\"", 'g');
        newCatalog = newCatalog.replace(instFilter, profURL.split("://")[1] + "\" title=\"" + tooltipContent + "\"");

        document.getElementsByClassName(catalogName)[0].innerHTML = newCatalog;
    }

    if (profStateObject.done == profStateObject.total) {
        if(window.debugMode){console.log("Ready for tooltipsy");}
        $(".hasProfTip").tooltipsy({
            css: {
                fontFamily: "CartoGothicStdBook",
                padding: "10px",
                //maxWidth: "140px",
                color: (isNewStyle ? "#444444" : "#2C566D"),
                fontSize: ".9em",
                backgroundColor: (isNewStyle ? "#C5C5C5" : "#F4F5ED"),
                borderRadius: "8px",
                border: "2px solid "
            }
        });
        window.profState = undefined;
    }

}

if (url.match(/.+vsb.mcgill.ca.+/) == null) {

    urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
    urlYearW = urlYearF+1;
    urlYears = urlYearF + "-" + urlYearW;
    sysYear = new Date().getFullYear();
    isNewStyle = document.getElementsByClassName("transition").length > 0;

}


//Course name regex
regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;

if (url.match(/.+study.+courses.+[-]+/) != null) {

    window.profState = "";
    if(window.debugMode){console.log(window.profState);}

    courseName = url.match(/courses\/([A-Za-z]{4}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();

    

    profs = [];
    profsF = [];
    profsW = [];
    profsS = [];

    profsSource = document.getElementsByClassName("catalog-instructors")[0].innerHTML;
    profsSource = profsSource.split("Instructors:")[1];
    newProfsHTML = ""

    profsSourceF = profsSource.split("(Fall)");
    if (profsSourceF.length > 1) {
        profsF = profsSourceF[0].split(",");
        newProfsHTML += "<p>Instructors (Fall): "
        for (p=0; p<profsF.length; p++) {
            profsF[p] = profsF[p].trim();
            profs.push(profsF[p]);
            search = "mcgill " + profsF[p].match(/([^\s]+)\s.+/)[1] + " " + profsF[p].match(/.+\s([^\s]+)/)[1];
            newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + profsF[p].replace(/ /g, "&nbsp") +"</a>");
            if (p <= profsF.length-2) {
                newProfsHTML += ", "
            }
            if (p == profsF.length-2) {
                newProfsHTML += "and "
            }
        }
        newProfsHTML += "</p>"
        if(window.debugMode){console.log(profsF);}
        profsSource = profsSourceF[1]
    }

    profsSourceW = profsSource.split("(Winter)");
    if (profsSourceW.length > 1) {
        profsW = profsSourceW[0].split(",");
        newProfsHTML += "<p>Instructors (Winter): "
        for (p=0; p<profsW.length; p++) {
            profsW[p] = profsW[p].trim();
            profs.push(profsW[p]);
            search = "mcgill " + profsW[p].match(/([^\s]+)\s.+/)[1] + " " + profsW[p].match(/.+\s([^\s]+)/)[1];
            newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + profsW[p].replace(/ /g, "&nbsp") +"</a>");
            if (p <= profsW.length-2) {
                newProfsHTML += ", "
            }
            if (p == profsW.length-2) {
                newProfsHTML += "and "
            }
        }
        newProfsHTML += "</p>"
        if(window.debugMode){console.log(profsW);}
        profsSource = profsSourceW[1]
    }

    profsSourceS = profsSource.split("(Summer)");
    if (profsSourceS.length > 1) {
        profsS = profsSourceS[0].split(",");
        newProfsHTML += "<p>Instructors (Summer): "
        for (p=0; p<profsS.length; p++) {
            profsS[p] = profsS[p].trim();
            profs.push(profsS[p]);
            search = "mcgill " + profsS[p].match(/([^\s]+)\s.+/)[1] + " " + profsS[p].match(/.+\s([^\s]+)/)[1];
            newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + profsS[p].replace(/ /g, "&nbsp") +"</a>");
            if (p <= profsS.length-2) {
                newProfsHTML += ", "
            }
            if (p == profsS.length-2) {
                newProfsHTML += "and "
            }
        }
        newProfsHTML += "</p>"
        if(window.debugMode){console.log(profsS);}
        profsSource = profsSourceS[1]
    }

    document.getElementsByClassName("catalog-instructors")[0].innerHTML = newProfsHTML

    if (profs.length > 0) {
        var profs = profs.filter(function(elem, pos) {
            return profs.indexOf(elem) == pos;
        });
        if(window.debugMode){console.log(profs)}

        profStateObject = {
            total: profs.length,
            done: 0
        };
        window.profState = profStateObject;
        if(window.debugMode){console.log(window.profState);}

        for (a=0; a< profs.length; a++) {
            var profName = profs[a].split(" ");
            getProfUrl(profName[0], profName[profName.length-1], false, -1);
        }
    }




    newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;



    courseTerms = document.getElementsByClassName("catalog-terms")[0].innerHTML;
    courseTermsCodes = [];
    if (courseTerms.match(/Fall/) != null) {
        courseTermsCodes.push( {name: "Fall " + urlYearF,  code: urlYearF + "09"} );
    }
    if (courseTerms.match(/Winter/) != null) {
        courseTermsCodes.push( {name: "Winter " + urlYearW,  code: urlYearW + "01"} );
    }
    if (courseTerms.match(/Summer/) != null) {
        courseTermsCodes.push( {name: "Summer " + urlYearW,  code: urlYearW + "05"} );
    }
    if(window.debugMode){console.log(courseTermsCodes);}



    courseEvalParams = {
        courseSubject: courseName.split("-")[0],
        courseNumber: courseName.split("-")[1],
        autoSubmit: true
    };
    courseEvalParamsString = courseEvalParams;


    urlDep = url.match(/.+([A-Za-z]{4})-[0-9]{3}/)[1].toUpperCase();
    courses = newContent.match(/[A-Z]{4}\s[0-9]{3}/g);
    depsDup = [urlDep];
    if (courses != null)
    {
        for (c=0; c<courses.length; c++)
        {
            depsDup.push(courses[c].match(/([A-Z]{4})\s[0-9]{3}/)[1]);
        }
    }
    var deps = depsDup.filter(function(elem, pos) {
        return depsDup.indexOf(elem) == pos;
    });


    window.ME_data = {
        docuum: { url: "http://www.docuum.com/McGill/" + courseEvalParams.courseSubject + "/" + courseEvalParams.courseNumber, valid: false},
        vsbFall: { url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearF + "09=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, valid: false},
        vsbWinter: { url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearW + "01=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, valid: false},
        done: 0,
        total: (urlYearF >= sysYear-1 ? 3 : 1)
    }
    if(window.debugMode){console.log(window.ME_data);}



    document.getElementsByTagName("body")[0].style.lineHeight = "1.125em";

    var sidebar = document.createElement('div');
    sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");
    sidebar.style.minWidth = "280px";
    sidebar.style.border = "0px";


    


    var formsBlock = document.createElement('div');
    formsBlock.id = "formsBlock";
    formsBlock.style.marginBottom = (isNewStyle ? "10px" : "0px");
    formsBlock.style.padding = "10px 0px";
    sidebar.appendChild(formsBlock);

    var courseEval = document.createElement('div');
    courseEval.style.margin = "0px 0px 8px 0px";
    formsBlock.appendChild(courseEval);

    var courseEvalTitle = document.createElement(isNewStyle ? "h3" : "h4");
    courseEvalTitle.innerHTML = "Mercury Evaluations";
    courseEvalTitle.style.margin = "0px";
    courseEval.appendChild(courseEvalTitle);

    var courseEvalForm = document.createElement('form');
    courseEvalForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form");
    courseEvalForm.setAttribute("method", "POST");
    courseEvalForm.setAttribute("name", "search_form");
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"subj_tab_in\" value=\"" + courseEvalParams.courseSubject + "\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"crse_in\" value=\"" + courseEvalParams.courseNumber + "\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"title_in\" value=\"\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"inst_tab_in\" value=\"\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"form_mode\" value=\"ar\">";
    courseEval.appendChild(courseEvalForm);

    var courseEvalButton = document.createElement('input');
    courseEvalButton.setAttribute("type", "submit");
    courseEvalButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
    courseEvalButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
    courseEvalButton.setAttribute("name", "");
    courseEvalButton.setAttribute("value", "View " + courseEvalParams.courseSubject + " " + courseEvalParams.courseNumber + " Evaluations");
    courseEvalButton.className = "form-submit";
    courseEvalButton.style.width="100%";
    courseEvalButton.style.height="35px";
    courseEvalButton.style.margin="4px 0px";
    if (isNewStyle) {
        courseEvalButton.style.border = "1px solid #5B5B5A";
        courseEvalButton.style.WebkitBoxShadow  = "none";
        courseEvalButton.style.boxShadow = "none";
    }
    courseEvalForm.appendChild(courseEvalButton);


    if (courseTermsCodes.length > 0) {

        //formsBlock.appendChild(document.createElement("br"));

        var courseReg = document.createElement('div');
        courseReg.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(courseReg);

        var courseRegTitle = document.createElement(isNewStyle ? "h3" : "h4");
        courseRegTitle.innerHTML = "Minerva Registration";
        courseRegTitle.style.margin = "0px";
        courseReg.appendChild(courseRegTitle);

        for (var i = 0; i < courseTermsCodes.length; i++) {

            var courseRegForm = document.createElement('form');
            courseRegForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced");
            courseRegForm.setAttribute("method", "POST");
            courseRegForm.setAttribute("onsubmit", "return checkSubmit();");
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"rsts\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"crn\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"" + courseTermsCodes[i].code + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_day\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_schd\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_insm\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_camp\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_levl\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_sess\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_instr\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_ptrm\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_attr\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"" + courseEvalParams.courseSubject + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_coll\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_crse\" value=\"" + courseEvalParams.courseNumber + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_title\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_schd\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_from_cred\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_to_cred\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_levl\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_ptrm\" value=\"%\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_instr\" value=\"%\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_attr\" value=\"%\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_hh\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_mi\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_ap\" value=\"a\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_hh\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_mi\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_ap\" value=\"a\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"path\" value=\"1\">";
            courseReg.appendChild(courseRegForm);

            var courseRegButton = document.createElement('input');
            courseRegButton.setAttribute("type", "submit");
            courseRegButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            courseRegButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            courseRegButton.setAttribute("name", "SUB_BTN");
            courseRegButton.setAttribute("value", "View " + courseTermsCodes[i].name + " Registration");
            courseRegButton.className = "form-submit";
            courseRegButton.style.width="100%";
            courseRegButton.style.height="35px";
            courseRegButton.style.margin="4px 0px";
            if (isNewStyle) {
                courseRegButton.style.border = "1px solid #5B5B5A";
                courseRegButton.style.WebkitBoxShadow  = "none";
                courseRegButton.style.boxShadow = "none";
            }
            courseRegForm.appendChild(courseRegButton);

        }
    }


    var sidebarBlock = document.createElement('div');
    sidebarBlock.className = "block";
    sidebarBlock.style.padding = "16px 10px";
    sidebarBlock.style.minWidth = "260px";
    if (isNewStyle) {
        sidebarBlock.style.border = "1px solid #eee";
        sidebarBlock.style.marginBottom = "16px";
    }
    sidebar.appendChild(sidebarBlock);

    var sidebarBlockTitle = document.createElement('h3');
    sidebarBlockTitle.innerHTML = "Related Courses"
    sidebarBlockTitle.style.maxWidth = "100%";
    if (isNewStyle) {
        sidebarBlockTitle.style.background = "#DBDBDB";
    }
    sidebarBlock.appendChild(sidebarBlockTitle);


    if (deps.length > 0) {

        var deptCourses = document.createElement('div');
        deptCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(deptCourses);

        var deptCoursesTitle = document.createElement('div');
        deptCoursesTitle.className = "view-header";
        deptCoursesTitle.innerHTML = "<i>View Related Courses by Subject</i>";
        deptCourses.appendChild(deptCoursesTitle);

        for (d = 0; d<deps.length; d++)
        {
            deptCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search?" + (isNewStyle ? "f[0]=field_subject_code%3A" : "filters=ss_subject%3A") + deps[d];

            var deptCoursesLinkDiv = document.createElement('div');
            deptCoursesLinkDiv.className = d==deps.length-1 ? "views-row views-row-last" : "views-row";
            deptCourses.appendChild(deptCoursesLinkDiv);

            var deptCoursesLink = document.createElement('a');
            deptCoursesLink.setAttribute("href", deptCoursesURL);
            deptCoursesLink.innerHTML = deps[d] + " Courses";
            deptCoursesLinkDiv.appendChild(deptCoursesLink);
        }
    }

        
        
    if (profs.length > 0) {

        var profCourses = document.createElement('div');
        profCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(profCourses);

        var profCoursesTitle = document.createElement('div');
        profCoursesTitle.className = "view-header";
        profCoursesTitle.innerHTML = "<i>View Related Courses by Professor</i>";
        profCourses.appendChild(profCoursesTitle);

        for (p = 0; p < profs.length; p++) {
            prof = profs[p].replace(/\s/g, "%20");
            //https://www.mcgill.ca/study/2016-2017/courses/search?search_api_views_fulltext=thomas&sort_by=field_subject_code
            //url = "https://www.mcgill.ca/study/" + urlYears + "/search/apachesolr_search/\"" + prof + "\"?filters=type%3Acatalog";
            profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + prof;

            var profCoursesLinkDiv = document.createElement('div');
            profCoursesLinkDiv.className = p==profs.length-1 ? "views-row views-row-last" : "views-row";
            profCourses.appendChild(profCoursesLinkDiv);

            var profCoursesLink = document.createElement('a');
            profCoursesLink.setAttribute("href", profCoursesURL);
            profCoursesLink.innerHTML = profs[p];
            profCoursesLinkDiv.appendChild(profCoursesLink);
        }
    }


    if (document.getElementsByClassName("view-catalog-program").length > 0) {

        var sidebarBlock = document.createElement('div');
        sidebarBlock.className = "block";
        sidebarBlock.style.padding = "16px 10px";
        sidebarBlock.style.minWidth = "260px";
        if (isNewStyle) {
            sidebarBlock.style.border = "1px solid #eee";
            sidebarBlock.style.marginBottom = "16px";
        }
        sidebar.appendChild(sidebarBlock);

        var sidebarBlockTitle = document.createElement('h3');
        sidebarBlockTitle.innerHTML = "Related Programs"
        sidebarBlockTitle.style.maxWidth = "100%";
        if (isNewStyle) {
            sidebarBlockTitle.style.background = "#DBDBDB";
        }
        sidebarBlock.appendChild(sidebarBlockTitle);

        relatedPrograms = document.getElementsByClassName("view-catalog-program")[0];
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(relatedPrograms);
    }

        //insert enhanced sidebar
    var container = document.getElementById(isNewStyle ? "inner-container" : "container");
    if (document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar") != null) {
        document.createElement("div").appendChild(document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar"));
    }
    if (isNewStyle) {
        document.getElementById("main-column").style.maxWidth = "620px";
        document.getElementById("main-column").style.float = "left"; //check comp 553
        container.appendChild(sidebar);
    }
    else {
        document.getElementById("center-column").style.width = "620px";
        container.insertBefore(sidebar, document.getElementById("footer"));
    }

    
    


    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: window.ME_data.docuum.url
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {

        window.ME_data.done++;
        if(window.debugMode){console.log(window.ME_data);}

        var htmlElement = document.createElement('div');
        htmlElement.innerHTML = data.responseXML

        if (data.responseXML.match(/something went wrong/) == null) {
            window.ME_data.docuum.valid = true
        }
        if (window.ME_data.total == window.ME_data.done) {
            addVerifiedLinks(sidebar);
        }
        
    });


    if (urlYearF >= sysYear-1) {

        var xmlRequestInfo = {
            method: 'GET',
            action: 'xhttp',
            url: window.ME_data.vsbFall.url
        }
        chrome.runtime.sendMessage(xmlRequestInfo, function(data) {

            window.ME_data.done++;
            if(window.debugMode){console.log(window.ME_data);}

            var htmlElement = document.createElement('div');
            htmlElement.innerHTML = data.responseXML

            if (htmlElement.getElementsByClassName("warningNoteBad").length > 0) {
                window.ME_data.vsbFall.valid = true
            }
            if (window.ME_data.total == window.ME_data.done) {
                addVerifiedLinks(sidebar);
            }
            
        });

        var xmlRequestInfo = {
            method: 'GET',
            action: 'xhttp',
            url: window.ME_data.vsbWinter.url
        }
        chrome.runtime.sendMessage(xmlRequestInfo, function(data) {

            window.ME_data.done++;
            if(window.debugMode){console.log(window.ME_data);}

            var htmlElement = document.createElement('div');
            htmlElement.innerHTML = data.responseXML

            if (htmlElement.getElementsByClassName("warningNoteBad").length > 0) {
                window.ME_data.vsbWinter.valid = true
            }
            if (window.ME_data.total == window.ME_data.done) {
                addVerifiedLinks(sidebar);
            }
            
        });
    }


}
else {

    //Replace Course names with links to course overview page
    cns = document.getElementsByClassName("program-course-description-inner");
    for (cn = 0; cn<cns.length; cn++)
    {
        newContent = document.getElementsByClassName("program-course-description-inner")[cn].innerHTML
        newContent = newContent.replace(/<li>(.+)<.li>/g, "<p>$1</p>");
        newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
        document.getElementsByClassName("program-course-description-inner")[cn].innerHTML = newContent;
    }
}



function addVerifiedLinks (sidebar) {
    
    if (ME_data.vsbFall.valid || ME_data.vsbWinter.valid) {
        //console.log(xmlRequestInfo);
        var vsb = document.createElement('div');
        vsb.style.margin = "0px 0px 8px 0px";
        //vsb.id = "vsb";
        formsBlock.appendChild(vsb);

        var vsbTitle = document.createElement(isNewStyle ? "h3" : "h4");
        vsbTitle.innerHTML = "Visual Schedule Builder";
        vsbTitle.style.margin = "0px";
        vsb.appendChild(vsbTitle);

        if (ME_data.vsbFall.valid) {
            var vsbFallForm = document.createElement('form');
            vsbFallForm.setAttribute("action", ME_data.vsbFall.url);
            vsbFallForm.setAttribute("method", "POST");
            vsb.appendChild(vsbFallForm);

            var vsbFallButton = document.createElement('input');
            vsbFallButton.setAttribute("type", "submit");
            vsbFallButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            vsbFallButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            vsbFallButton.setAttribute("value", "View on VSB Fall " + urlYearF);
            vsbFallButton.className = "form-submit";
            vsbFallButton.style.width="100%";
            vsbFallButton.style.height="35px";
            vsbFallButton.style.margin="4px 0px";
            if (isNewStyle) {
                vsbFallButton.style.border = "1px solid #5B5B5A";
                vsbFallButton.style.WebkitBoxShadow  = "none";
                vsbFallButton.style.boxShadow = "none";
            }
            vsbFallForm.appendChild(vsbFallButton);
        }
        if (ME_data.vsbWinter.valid) {
            var vsbWinterForm = document.createElement('form');
            vsbWinterForm.setAttribute("action", ME_data.vsbWinter.url);
            vsbWinterForm.setAttribute("method", "POST");
            vsb.appendChild(vsbWinterForm);

            var vsbWinterButton = document.createElement('input');
            vsbWinterButton.setAttribute("type", "submit");
            vsbWinterButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            vsbWinterButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            vsbWinterButton.setAttribute("value", "View on VSB Winter " + urlYearW);
            vsbWinterButton.className = "form-submit";
            vsbWinterButton.style.width="100%";
            vsbWinterButton.style.height="35px";
            vsbWinterButton.style.margin="4px 0px";
            if (isNewStyle) {
                vsbWinterButton.style.border = "1px solid #5B5B5A";
                vsbWinterButton.style.WebkitBoxShadow  = "none";
                vsbWinterButton.style.boxShadow = "none";
            }
            vsbWinterForm.appendChild(vsbWinterButton);
        }
    }

    if (ME_data.docuum.valid) {
        //console.log(xmlRequestInfo);
        var docuum = document.createElement('div');
        docuum.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(docuum);

        var docuumTitle = document.createElement(isNewStyle ? "h3" : "h4");
        docuumTitle.innerHTML = "Other resources";
        docuumTitle.style.margin = "0px";
        docuum.appendChild(docuumTitle);

        var docuumForm = document.createElement('form');
        docuumForm.setAttribute("action", ME_data.docuum.url);
        docuumForm.setAttribute("method", "POST");
        docuum.appendChild(docuumForm);

        var docuumButton = document.createElement('input');
        docuumButton.setAttribute("type", "submit");
        docuumButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
        docuumButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
        docuumButton.setAttribute("value", "View " + courseEvalParams.courseSubject + " " + courseEvalParams.courseNumber + " on Docuum");
        docuumButton.className = "form-submit";
        docuumButton.style.width="100%";
        docuumButton.style.height="35px";
        docuumButton.style.margin="4px 0px";
        if (isNewStyle) {
            docuumButton.style.border = "1px solid #5B5B5A";
            docuumButton.style.WebkitBoxShadow  = "none";
            docuumButton.style.boxShadow = "none";
        }
        docuumForm.appendChild(docuumButton);
    }
    
}