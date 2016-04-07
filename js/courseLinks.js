
//Mercury course evaluation handling
//if (url.match(/.+horizon.mcgill.ca\/pban1\/bzskmcer.p_display_form/) != null)
//{
//    if (top.name != "MainMinervaWin") {
//        console.log(top.name);
//        courseEvalParams = JSON.parse(top.name);
//
//        if (courseEvalParams.autoSubmit) {
//            document.getElementById('subj_id').value="" + courseEvalParams.courseSubject;
//            document.getElementById('crse_id').value="" + courseEvalParams.courseNumber;
//            top.name = "MainMinervaWin";
//            document.forms["search_form"].submit();
//        }
//    }
//}
//else {
//    top.name = "";

    url = window.location.href;

    urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
    urlYearW = urlYearF+1;
    urlYears = urlYearF + "-" + urlYearW;
    sysYear = new Date().getFullYear();
    isNewStyle = document.getElementsByClassName("transition").length > 0;

    //Course name regex
    regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;

    if (url.match(/.+study.+courses.+[-]+/) != null) {

        courseName = url.match(/courses\/([A-Za-z]{4}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Replace Course names with links to course overview page
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        newContentElement = document.getElementById(isNewStyle ? "content" : "content-area");
        newContent = newContentElement.innerHTML;
        newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
        newContentElement.innerHTML = newContent;





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
        console.log(courseTermsCodes);


        //make sidebar take up same width as in old style
        if (isNewStyle) {
            document.getElementById("inner-container").style.width = "100%";
            document.getElementById("main-column").style.width = "620px"
            if (urlYearF >= 2016) {
                document.getElementById("sidebar-column").style.width = "280px";
                document.getElementById("block-views-catalog-program-block-1").style.width = "260px";
            }
        }


        var sidebar = document.createElement('div');
        sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");
        sidebar.style.width = "280px";
        sidebar.style.border = "0px";
        sidebar.style.marginBottom = "10px";

        var courseEval = document.createElement('div');
        courseEval.style.margin = "10px 0px";
        sidebar.appendChild(courseEval);

        var courseEvalTitle = document.createElement('h4');
        courseEvalTitle.innerHTML = "View Mercury Evaluations";
        courseEval.appendChild(courseEvalTitle);

        courseEvalParams = {
            courseSubject: courseName.split("-")[0],
            courseNumber: courseName.split("-")[1],
            autoSubmit: true
        };
        courseEvalParamsString = JSON.stringify(courseEvalParams);

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
        courseEvalButton.setAttribute("name", "");
        courseEvalButton.setAttribute("value", courseEvalParams.courseSubject + " " + courseEvalParams.courseNumber + " Course Evaluations");
        courseEvalButton.style.width="100%";
        courseEvalButton.style.padding="7px";
        courseEvalButton.style.margin="2% 0%";
        courseEvalForm.appendChild(courseEvalButton);

        if (courseTermsCodes.length > 0) {

            var courseReg = document.createElement('div');
            courseReg.style.margin = "10px 0px";
            sidebar.appendChild(courseReg);

            var courseRegTitle = document.createElement('h4');
            courseRegTitle.innerHTML = "View Minerva Registration";
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
                courseRegButton.setAttribute("name", "SUB_BTN");
                courseRegButton.setAttribute("value", "Register " + courseTermsCodes[i].name);
                courseRegButton.style.width="100%";
                courseRegButton.style.padding="7px";
                courseRegButton.style.margin="2% 0%";
                courseRegForm.appendChild(courseRegButton);

            }
        }



        var deptCourses = document.createElement('div');
        deptCourses.style.margin = "10px 0px";
        sidebar.appendChild(deptCourses);

        var deptCoursesTitle = document.createElement('h4');
        deptCoursesTitle.innerHTML = "View Related Courses by Subject";
        deptCourses.appendChild(deptCoursesTitle);

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

        for (d = 0; d<deps.length; d++)
        {
            deptCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search?" + (isNewStyle ? "f[0]=field_subject_code%3A" : "filters=ss_subject%3A") + deps[d];

            console.log(deptCoursesURL);

            //var deptCoursesForm = document.createElement('form');
            //deptCoursesForm.setAttribute("action", deptCoursesURL);
            //deptCourses.appendChild(deptCoursesForm);
            //
            //var deptCoursesButton = document.createElement('input');
            //deptCoursesButton.setAttribute("type", "submit");
            //deptCoursesButton.setAttribute("value", urlYears+ " " + deps[d] + " Courses");
            //deptCoursesButton.style.width="100%";
            //deptCoursesButton.style.padding="7px";
            //deptCoursesButton.style.margin="2% 0%";
            //deptCoursesForm.appendChild(deptCoursesButton);

            var deptCoursesLink = document.createElement('input');
            deptCoursesLink.setAttribute("type", "button");
            deptCoursesLink.setAttribute("value", deps[d] + " Courses");
            deptCoursesLink.setAttribute("onclick", "location.href='" + deptCoursesURL + "';");
            deptCoursesLink.style.width="100%";
            deptCoursesLink.style.padding="7px";
            deptCoursesLink.style.margin="2% 0%";
            deptCourses.appendChild(deptCoursesLink);

        }



        //insert enhanced sidebar
        var container = document.getElementById(isNewStyle ? "inner-container" : "container");
        if (document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar") != null) {
            container.insertBefore(sidebar, document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar"));
        }
        else {
            if (isNewStyle) {
                container.appendChild(sidebar);
            }
            else {
                document.getElementById("center-column").style.width = "620px";
                container.insertBefore(sidebar, document.getElementById("footer"));
            }

        }


        //main center area long enough to keep sidebar pushed to the right (test ACCT 352)
        console.log(document.getElementById(isNewStyle ? "main-column" : "center-column").style.minHeight = "500px");



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





//}


