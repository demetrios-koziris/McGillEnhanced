
window.debugMode = false;
if(window.debugMode){console.log("McGill Enhanced Debug mode is ON");}

url = window.location.href;

var loadMessage = "McGill Enhanced is loading ratings for this professor&#13Please hover mouse off then back on to refresh this tooltip";

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
                overall: -1,
                helpfulness: -1,
                clarity: -1,
                easiness: -1
            }

            rating.overall = $(profURLHTML).find(".grade").html();
            rating.helpfulness = $(profURLHTML).find(".rating:eq(0)").html();
            rating.clarity = $(profURLHTML).find(".rating:eq(1)").html();
            rating.easiness = $(profURLHTML).find(".rating:eq(2)").html();
            //rating.number = div.getElementsByClassName("rating-count")[1].innerHTML.match(/([0-9]+) Student Ratings/)[1];

            firstName = $(profURLHTML).find(".pfname").html();
            if (firstName != undefined) {
                firstName = firstName.trim();
            }
            lastName = $(profURLHTML).find(".plname").html();
            if (lastName != undefined) {
                lastName = lastName.trim();
            }


            tooltipContent = "<b>" + firstName + " " + lastName + "</b>"
                + "<br><b>" + rating.overall + "&nbsp Overall Quality</b>"
                + "<br>" + rating.helpfulness + "&nbsp Helpfulness"
                + "<br>" + rating.clarity + "&nbsp Clarity"
                + "<br>" + rating.easiness + "&nbsp Easiness<b>"
            //+ "&#13Ratings: " + rating.number

            if (rating.overall === undefined) {
                if (res == 0) {
                    tooltipContent = "Instructor not found.";
                }
                else if (res = 2) {
                    tooltipContent = "Multiple Instructors found<br>Please click to see results";
                }
            }
            else {//if (part < 0)
                //check holly dressel in ENVR 400 and Sung Chul Noh in MGCR 222 at https://www.mcgill.ca/study/2012-2013/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-civil-engineering
                var div = document.createElement('div');
                div.innerHTML = profURLHTML;
                if (div.getElementsByClassName("rating-count")[0] === undefined) {
                    tooltipContent = "This instructor has no ratings<br>Click to be the first to rate";
                }
                else {
                    numOfRatings = div.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1]
                    //console.log(profURLHTML.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1]);
                    tooltipContent += "<br>From " + numOfRatings + " rating" + (numOfRatings > 1 ? "s" : "");
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
                //color: "#303030",
                fontSize: ".9em",
                backgroundColor: "#C5C5C5",
                borderRadius: "8px",
                border: "2px solid "
            }
        });
        window.profState = undefined;
    }

}


urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
urlYearW = urlYearF+1;
urlYears = urlYearF + "-" + urlYearW;
sysYear = new Date().getFullYear();
isNewStyle = document.getElementsByClassName("transition").length > 0;

//Course name regex
regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;

if (url.match(/.+study.+courses.+[-]+/) != null) {

    window.profState = "";
    if(window.debugMode){console.log(window.profState);}

    courseName = url.match(/courses\/([A-Za-z]{4}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Replace Course names with links to course overview page
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    newContentElement = document.getElementById(isNewStyle ? "content" : "content-area");
    newContent = newContentElement.innerHTML;
    newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
    newContentElement.innerHTML = newContent;





    newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;

    //Modification of Instructor content
    allInst = [];
    instM = "</p>";
    regF = /Instructors:\s+(.+)\(Fall.+<.p>/;
    instF = newContent.match(regF);
    if (instF != null) {
        instFN = instF[1];
        instFA = instFN.split(", ");
        instM += "<p>Instructors (Fall): ";
        for (f=0; f<instFA.length; f++) {
            instFA[f] = instFA[f].trim();
            allInst.push(instFA[f]);
            search = "mcgill " + instFA[f].match(/([^\s]+)\s.+/)[1] + " " + instFA[f].match(/.+\s([^\s]+)/)[1];
            //search = search.replace(/-/, " ");
            instM += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + instFA[f] +"</a>, ");
        }
        instM += "</p>";
        regW = /Instructors:.+\)(.+)\(W.+<.p>/;
    }
    else {
        regW = /Instructors:\s+(.+)\(Winter.+<.p>/;
    }
    instW = newContent.match(regW);
    if (instW != null) {
        instWN = instW[1];
        instWA = instWN.split(", ");
        instM += "<p>Instructors (Winter): ";
        for (w = 0; w < instWA.length; w++) {
            instWA[w] = instWA[w].trim();
            allInst.push(instWA[w]);
            search = "mcgill " + instWA[w].match(/([^\s]+)\s.+/)[1] + " " + instWA[w].match(/.+\s([^\s]+)/)[1];
            //search = search.replace(/-/, " ");
            instM += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\" title=\"" + loadMessage + "\">"+ instWA[w] +"</a>, ");
        }
        instM += "</p>";
    }
    regS = /Instructors:.+\).+\(.+\)(.+)\(.+<.p>/;
    instS = newContent.match(regS);
    if (instS != null) {
        instSN = instS[1];
        instSA = instSN.split(", ");
        instM += "<p>Instructors (Summer): ";
        for (s = 0; s < instSA.length; s++) {
            instSA[s] = instSA[s].trim();
            allInst.push(instSA[s]);
            search = "mcgill " + instSA[s].match(/([^\s]+)\s.+/)[1] + " " + instSA[s].match(/.+\s([^\s]+)/)[1];
            //search = search.replace(/-/, " ");
            instM += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\" target=\"_blank\" title=\"" + loadMessage + "\">"+ instSA[s] +"</a>, ");
        }
        instM += "</p>";
    }
    if (instF == null && instW == null) {
        instM += "<p>Instructors: There are no professors associated with this course for the " + urlYears + " academic year.</p>";
    }
    //replace instructor content by modified instructor content
    newContent = newContent.replace(/Instructors:.+<.p>/, instM);
    //add "&" before last inst if there are more than one for the semester
    newContent = newContent.replace(/<.a>,\s([^,\)]{2,300})<.a>,\s<.p>/g, "</a>, and " + "$1" + "</a></p>");
    //take the commas off the end of the last inst listed for the semester
    newContent = newContent.replace(/<.a>,\s<.p>/g, "</a></p>");



    //change prof link urls from ratemyprof query urls to their found ratemyprof url with tooltip
    if (allInst.length > 0) {
        var allInst = allInst.filter(function(elem, pos) {
            return allInst.indexOf(elem) == pos;
        });

        profStateObject = {
            total: allInst.length,
            done: 0
        };
        window.profState = profStateObject;
        if(window.debugMode){console.log(window.profState);}

        for (a=0; a< allInst.length; a++) {
            allInst[a] = allInst[a].trim();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var profName = allInst[a].split(" ");
            getProfUrl(profName[0], profName[profName.length-1], false, -1);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    }

    document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML = newContent;





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
        vsbFall: { url: "https://vsb.mcgill.ca/vsb/criteria.jsp?session_" + urlYearF + "09=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, valid: false},
        vsbWinter: { url: "https://vsb.mcgill.ca/vsb/criteria.jsp?session_" + urlYearW + "01=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, valid: false},
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

        
        
    if (allInst.length > 0) {

        var profCourses = document.createElement('div');
        profCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(profCourses);

        var profCoursesTitle = document.createElement('div');
        profCoursesTitle.className = "view-header";
        profCoursesTitle.innerHTML = "<i>View Related Courses by Professor</i>";
        profCourses.appendChild(profCoursesTitle);

        for (p = 0; p < allInst.length; p++) {
            prof = allInst[p].replace(/\s/g, "%20");
            //https://www.mcgill.ca/study/2016-2017/courses/search?search_api_views_fulltext=thomas&sort_by=field_subject_code
            //url = "https://www.mcgill.ca/study/" + urlYears + "/search/apachesolr_search/\"" + prof + "\"?filters=type%3Acatalog";
            profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + prof;

            var profCoursesLinkDiv = document.createElement('div');
            profCoursesLinkDiv.className = p==allInst.length-1 ? "views-row views-row-last" : "views-row";
            profCourses.appendChild(profCoursesLinkDiv);

            var profCoursesLink = document.createElement('a');
            profCoursesLink.setAttribute("href", profCoursesURL);
            profCoursesLink.innerHTML = allInst[p];
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
            insertSidebar(sidebar);
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

            if (data.responseXML.match(/is no longer available in this system/) == null) {
                window.ME_data.vsbFall.valid = true
            }
            if (window.ME_data.total == window.ME_data.done) {
                insertSidebar(sidebar);
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

            if (data.responseXML.match(/is no longer available in this system/) == null && data.responseXML.match(/is only available in the/) == null) {
                window.ME_data.vsbWinter.valid = true
            }
            if (window.ME_data.total == window.ME_data.done) {
                insertSidebar(sidebar);
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








function insertSidebar (sidebar) {


    
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