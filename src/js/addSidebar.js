/*
McGill Enhanced is a chrome extension that improves the functionality and navigability of McGill.ca
Copyright (C) 2016 Demetrios Koziris

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

A copy of the GNU General Public License is provided in the LICENSE.txt file along with this program.  
The GNU General Public License can also be found at <http://www.gnu.org/licenses/>.
*/

//jshint esversion: 6


function makeSidebarContent() {

    // fix layout bug on mcgill site for some newStyle pages (2009-2010 & 2011-2012)
    if (isNewStyle) {
        document.getElementById("inner-container").style.width = '100%';
    }

    const urlCourseName = url.match(/courses\/([A-Za-z]{3,4}[0-9]{0,1}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();
    const courseSubject = urlCourseName.split("-")[0];
    const courseNumber = urlCourseName.split("-")[1];
    const courseName = courseSubject + courseNumber;
    const courseNameSpaced = courseSubject + " " + courseNumber;

    const recordingURLdata = generateRecordingURLs()[courseName];
    const wikinotesURLdata = generateWikinotesURLs()[courseName];
    const docuumURLdata = generateDocuumURLs()[courseName];
    const csusURLdata = generateCSUSURLs()[courseName];

    const courseTerms = document.getElementsByClassName("catalog-terms")[0].innerHTML;
    const courseTermsCodes = [];
    if (courseTerms.match(/Fall/)) {
        courseTermsCodes.push( {name: "Fall " + urlYearF,  code: urlYearF + "09"} );
    }
    if (courseTerms.match(/Winter/)) {
        courseTermsCodes.push( {name: "Winter " + urlYearW,  code: urlYearW + "01"} );
    }
    if (courseTerms.match(/Summer/)) {
        courseTermsCodes.push( {name: "Summer " + urlYearW,  code: urlYearW + "05"} );
    }
    logForDebug(courseTermsCodes);

    const newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;
    const courses = newContent.match(/[A-Z]{3,4}[0-9]{0,1}\s[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1}/g);
    const depsDup = [courseSubject];
    if (courses) {
        for (let c=0; c<courses.length; c++) {
            depsDup.push(courses[c].split(" ")[0]);
        }
    }
    logForDebug(depsDup);
    const deps = depsDup.filter(function(elem, pos) {
        return depsDup.indexOf(elem) === pos;
    });

    const vsbData = {
        vsbFall: { 
            url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearF + "09=1&code_number=" + courseSubject + "+" + courseNumber, 
            valid: false
        },
        vsbWinter: { 
            url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearW + "01=1&code_number=" + courseSubject + "+" + courseNumber, 
            valid: false
        },
        done: 0,
        total: (urlYearF >= sysYear-1 ? 2 : 0),
        codeReady: false
    };
    logForDebug(vsbData);



    const sidebar = document.createElement('div');
    sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");
    sidebar.style.minWidth = "280px";
    sidebar.style.border = "0px";

    const formsBlock = document.createElement('div');    
    formsBlock.style.marginBottom = (isNewStyle ? "10px" : "0px");
    formsBlock.style.padding = "10px 0px";
    sidebar.appendChild(formsBlock);

    validateExternalLinks(vsbData, formsBlock);
    

    //SIDEBAR SECTION: COURSE REVIEWS
    const courseEval = document.createElement('div');
    courseEval.style.margin = "0px 0px 8px 0px";
    courseEval.appendChild(generateSidebarSectionTitle("Course Reviews"));
    formsBlock.appendChild(courseEval);

    if (docuumURLdata) { 
        const docuumURL = "http://www.docuum.com/McGill/review/read_course/" + docuumURLdata;
        const docuumButtonString = "View Docuum Course Reviews";
        const docuumForm = document.createElement('a');
        // docuumForm.setAttribute("action", docuumURL);
        docuumForm.setAttribute("href", docuumURL);
        docuumForm.appendChild(generateFormButton("#56AFE5", docuumButtonString));
        courseEval.appendChild(docuumForm); 
    }

    const mercuryURL = 'https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form?form_mode=ar&subj_tab_in='+courseSubject+'&crse_in='+courseNumber;
    const mercuryButtonString = "View Mercury Course Evaluations";
    const mercuryForm = document.createElement('a');
    mercuryForm.setAttribute("href", mercuryURL);
    // mercuryForm.setAttribute("method", "POST");
    mercuryForm.setAttribute("title", "Must be already signed into Minerva!");
    // mercuryForm.setAttribute("name", "search_form");
    // mercuryForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"\">";
    // mercuryForm.innerHTML += "<input type=\"hidden\" name=\"subj_tab_in\" value=\"" + courseSubject + "\">";
    // mercuryForm.innerHTML += "<input type=\"hidden\" name=\"crse_in\" value=\"" + courseNumber + "\">";
    // mercuryForm.innerHTML += "<input type=\"hidden\" name=\"title_in\" value=\"\">";
    // mercuryForm.innerHTML += "<input type=\"hidden\" name=\"inst_tab_in\" value=\"\">";
    // mercuryForm.innerHTML += "<input type=\"hidden\" name=\"form_mode\" value=\"ar\">";
    mercuryForm.appendChild(generateFormButton("#E54944", mercuryButtonString));
    courseEval.appendChild(mercuryForm);

    
    if (recordingURLdata) {

        //SIDEBAR SECTION: LECTURE RECORDINGS
        const recordings = document.createElement('div');
        recordings.style.margin = "0px 0px 8px 0px";
        recordings.appendChild(generateSidebarSectionTitle("Lecture Recordings"));
        formsBlock.appendChild(recordings);

        if (urlYearF in recordingURLdata) {
            const yearRecordingURLs = recordingURLdata[urlYearF];

            for (let r = 0; r < yearRecordingURLs.length; r++) {
                const recordingsButtonString = "View " + yearRecordingURLs[r].semester + " " + yearRecordingURLs[r].year + " Sec " + yearRecordingURLs[r].section + " Lectures";
                const recordingsForm = document.createElement('a');
                recordingsForm.setAttribute("href", yearRecordingURLs[r].url);
                // recordingsForm.setAttribute("method", "POST");
                recordingsForm.appendChild(generateFormButton("#E54944", recordingsButtonString));    
                recordings.appendChild(recordingsForm);
            }
        }
        else {
            const years = Object.keys(recordingURLdata);
            const maxYear = Math.max.apply(Math, years);
            const maxYearURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, maxYear+"-"+(maxYear+1));
            const recordingsButtonString = "View " + maxYear + "-" + (maxYear+1) + " for the latest Lectures";
            const recordingsForm = document.createElement('a');
            recordingsForm.setAttribute("href", maxYearURL);
            recordingsForm.appendChild(generateFormButton("#E54944", recordingsButtonString));
            recordings.appendChild(recordingsForm);
        }

    }  


    if (courseTermsCodes.length > 0) {

        //SIDEBAR SECTION: MINERVA REGISTRATION
        const courseReg = document.createElement('div');
        courseReg.style.margin = "0px 0px 8px 0px";
        courseReg.appendChild(generateSidebarSectionTitle("Minerva Registration"));
        formsBlock.appendChild(courseReg);

        for (let i = 0; i < courseTermsCodes.length; i++) {

            let courseRegURL = "https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced?";
            courseRegURL += "rsts=dummy&";
            courseRegURL += "crn=dummy&";
            courseRegURL += "term_in=" + courseTermsCodes[i].code + "&";
            courseRegURL += "sel_subj=dummy&";
            courseRegURL += "sel_day=dummy&";
            courseRegURL += "sel_schd=dummy&";
            courseRegURL += "sel_insm=dummy&";
            courseRegURL += "sel_camp=dummy&";
            courseRegURL += "sel_levl=dummy&";
            courseRegURL += "sel_sess=dummy&";
            courseRegURL += "sel_instr=dummy&";
            courseRegURL += "sel_ptrm=dummy&";
            courseRegURL += "sel_attr=dummy&";
            courseRegURL += "sel_subj=" + courseSubject + "&";
            courseRegURL += "sel_coll=&";
            courseRegURL += "sel_crse=" + courseNumber + "&";
            courseRegURL += "sel_title=&";
            courseRegURL += "sel_schd=&";
            courseRegURL += "sel_from_cred=&";
            courseRegURL += "sel_to_cred=&";
            courseRegURL += "sel_levl=&";
            courseRegURL += "sel_ptrm=%25&";
            courseRegURL += "sel_instr=%25&";
            courseRegURL += "sel_attr=%25&";
            courseRegURL += "begin_hh=0&";
            courseRegURL += "begin_mi=0&";
            courseRegURL += "begin_ap=a&";
            courseRegURL += "end_hh=0&";
            courseRegURL += "end_mi=0&";
            courseRegURL += "end_ap=a&";
            courseRegURL += "path=1&";
            courseRegURL += "SUB_BTN=&";

            const courseRegButtonString = "View " + courseTermsCodes[i].name + " Registration";
            const courseRegForm = document.createElement('a');
            courseRegForm.setAttribute("href", courseRegURL);
            // courseRegForm.setAttribute("method", "POST");
            courseRegForm.setAttribute("title", "Must be already signed into Minerva!");
            // courseRegForm.setAttribute("onsubmit", "return checkSubmit();");

            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"rsts\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"crn\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"" + courseTermsCodes[i].code + "\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_day\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_schd\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_insm\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_camp\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_levl\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_sess\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_instr\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_ptrm\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_attr\" value=\"dummy\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"" + courseSubject + "\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_coll\" value=\"\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_crse\" value=\"" + courseNumber + "\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_title\" value=\"\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_schd\" value=\"\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_from_cred\" value=\"\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_to_cred\" value=\"\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_levl\" value=\"\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_ptrm\" value=\"%\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_instr\" value=\"%\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_attr\" value=\"%\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_hh\" value=\"0\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_mi\" value=\"0\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_ap\" value=\"a\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_hh\" value=\"0\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_mi\" value=\"0\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_ap\" value=\"a\">";
            // courseRegForm.innerHTML += "<input type=\"hidden\" name=\"path\" value=\"1\">";

            const courseRegButton = generateFormButton("#E54944", courseRegButtonString);
            courseRegButton.setAttribute("name", "SUB_BTN");
            courseRegForm.appendChild(courseRegButton);
            courseReg.appendChild(courseRegForm);           
        }
    }


    if (csusURLdata || docuumURLdata || wikinotesURLdata) {

        //SIDEBAR SECTION: OTHER RESOURCES
        const other = document.createElement('div');
        other.style.margin = "0px 0px 8px 0px";
        other.appendChild(generateSidebarSectionTitle("Other resources"));
        formsBlock.appendChild(other);
    
        if (csusURLdata) {
            const csusURL = "https://mcgill-csus.github.io/compmajorguide.html#" + csusURLdata;
            const csusButtonString = "View " + courseNameSpaced + " in the CSUS Guide";
            const csusForm = document.createElement('a');
            csusForm.setAttribute("href", csusURL);
            csusForm.appendChild(generateFormButton("#FFFFFF", csusButtonString));
            other.appendChild(csusForm);
        }

        if (docuumURLdata) {
            const docuumURL = "http://www.docuum.com/McGill/document/view_class/" + docuumURLdata;
            const docuumButtonString = "View " + courseNameSpaced + " on Docuum";
            const docuumForm = document.createElement('a');
            docuumForm.setAttribute("href", docuumURL);
            docuumForm.appendChild(generateFormButton("#56AFE5", docuumButtonString));
            other.appendChild(docuumForm);
        }

        if (wikinotesURLdata) {
            const wikinotesURL = "https://www.wikinotes.ca/" + wikinotesURLdata;
            const wikinotesButtonString = "View " + courseNameSpaced + " on Wikinotes";
            const wikinotesForm = document.createElement('a');
            wikinotesForm.setAttribute("href", wikinotesURL);
            wikinotesForm.appendChild(generateFormButton("#FFFFFF", wikinotesButtonString));
            other.appendChild(wikinotesForm);
        }
    }


    const sidebarBlock = document.createElement('div');
    sidebarBlock.className = "block";
    // sidebarBlock.style.padding = "12px 10px";
    sidebarBlock.style.minWidth = "260px";
    if (isNewStyle) {
        sidebarBlock.style.border = "1px solid #eee";
        sidebarBlock.style.marginBottom = "16px";
    }
    sidebar.appendChild(sidebarBlock);

    const sidebarBlockTitle = document.createElement('h3');
    sidebarBlockTitle.innerHTML = "Related Courses";
    sidebarBlockTitle.style.maxWidth = "100%";
    sidebarBlockTitle.style.padding = "12px 10px";
    if (isNewStyle) {
        sidebarBlockTitle.style.background = "#DBDBDB";
    }
    sidebarBlock.appendChild(sidebarBlockTitle);


    if (deps.length > 0) {

        const deptCourses = document.createElement('div');
        deptCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(deptCourses);

        const deptCoursesTitle = document.createElement('div');
        deptCoursesTitle.className = "view-header";
        deptCoursesTitle.innerHTML = "<i>View Related Courses by Subject</i>";
        deptCourses.appendChild(deptCoursesTitle);

        for (let d = 0; d<deps.length; d++)
        {
            const deptCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search?" + (isNewStyle ? "f[0]=field_subject_code%3A" : "filters=ss_subject%3A") + deps[d];

            const deptCoursesLinkDiv = document.createElement('div');
            deptCoursesLinkDiv.className = (d === deps.length-1 ? "views-row views-row-last" : "views-row");
            deptCourses.appendChild(deptCoursesLinkDiv);

            const deptCoursesLink = document.createElement('a');
            deptCoursesLink.setAttribute("href", deptCoursesURL);
            deptCoursesLink.innerHTML = deps[d] + " Courses";
            deptCoursesLinkDiv.appendChild(deptCoursesLink);
        }
    }

    const profKeys = Object.keys(profs);
    if (profKeys.length > 0) {

        const profCourses = document.createElement('div');
        profCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(profCourses);

        const profCoursesTitle = document.createElement('div');
        profCoursesTitle.className = "view-header";
        profCoursesTitle.innerHTML = "<i>View Related Courses by Professor</i>";
        profCourses.appendChild(profCoursesTitle);

        for (let p = 0; p < profKeys.length; p++) {
            let profFullName = profs[profKeys[p]].fullName;
            let profURLName = profFullName.replace(/\&nbsp/g, " ").replace(/\&\#8209/g, "-");
            let profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + profURLName;
            //profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?f[0]=instructors%3A" : "/") + profURLName;

            const profCoursesLinkDiv = document.createElement('div');
            profCoursesLinkDiv.className = (p === profKeys.length-1 ? "views-row views-row-last" : "views-row");
            profCourses.appendChild(profCoursesLinkDiv);

            const profCoursesLink = document.createElement('a');
            profCoursesLink.setAttribute("href", profCoursesURL);
            profCoursesLink.innerHTML = profFullName;
            profCoursesLinkDiv.appendChild(profCoursesLink);
        }
    }


    if (document.getElementsByClassName("view-catalog-program").length > 0) {

        const sidebarBlock = document.createElement('div');
        sidebarBlock.className = "block";
        // sidebarBlock.style.padding = "12px 10px";
        sidebarBlock.style.minWidth = "260px";
        if (isNewStyle) {
            sidebarBlock.style.border = "1px solid #eee";
            sidebarBlock.style.marginBottom = "16px";
        }
        sidebar.appendChild(sidebarBlock);

        const sidebarBlockTitle = document.createElement('h3');
        sidebarBlockTitle.innerHTML = "Related Programs";
        sidebarBlockTitle.style.maxWidth = "100%";
        sidebarBlockTitle.style.padding = "12px 10px";
        if (isNewStyle) {
            sidebarBlockTitle.style.background = "#DBDBDB";
        }
        sidebarBlock.appendChild(sidebarBlockTitle);

        const relatedPrograms = document.getElementsByClassName("view-catalog-program")[0];
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(relatedPrograms);
    }

    //insert enhanced sidebar
    const container = document.getElementById(isNewStyle ? "inner-container" : "container");
    if (document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar")) {
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


    vsbData.codeReady = true;

    if (vsbData.total === vsbData.done && vsbData.codeReady === true) {
        addVerifiedLinks(vsbData, formsBlock);
    }

}


function validateExternalLinks(vsbData, formsBlock) {

    if (urlYearF >= sysYear-1) {
        validateVSBLink(vsbData, vsbData.vsbFall, formsBlock);
        validateVSBLink(vsbData, vsbData.vsbWinter, formsBlock);
    }
}


function validateVSBLink(vsbData, linkData, formsBlock) { 

    const xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: linkData.url
    };
    chrome.runtime.sendMessage(xmlRequestInfo, generateValidateVSBLinkCallback(vsbData, linkData, formsBlock));
}


function generateValidateVSBLinkCallback(vsbData, linkData, formsBlock) {
    return function(data) {
        vsbData.done++;
        logForDebug(vsbData);

        if (data.responseXML != "error") {

            const htmlParser = new DOMParser();
            const htmlDoc = htmlParser.parseFromString(data.responseXML, "text/html");
            if (htmlDoc.getElementsByClassName("warningNoteGood").length > 0) {
                linkData.valid = true;
            }
        }

        if (vsbData.total === vsbData.done && vsbData.codeReady === true) {
            addVerifiedLinks(vsbData, formsBlock);
        }  
    };
}


function addVerifiedLinks(vsbData, formsBlock) {

    if (vsbData.vsbFall.valid || vsbData.vsbWinter.valid) {
        const vsb = document.createElement('div');
        vsb.style.margin = "0px 0px 8px 0px";
        vsb.appendChild(generateSidebarSectionTitle("Visual Schedule Builder"));
        formsBlock.appendChild(vsb);

        if (vsbData.vsbFall.valid) {

            const vsbFallForm = document.createElement('a');
            vsbFallForm.setAttribute("href", vsbData.vsbFall.url);
            // vsbFallForm.setAttribute("method", "POST");
            vsb.appendChild(vsbFallForm);

            const vsbFallButtonValue = "View on VSB Fall " + urlYearF;
            const vsbFallButton = generateFormButton("#7173F6", vsbFallButtonValue);
            vsbFallForm.appendChild(vsbFallButton);
        }

        if (vsbData.vsbWinter.valid) {

            const vsbWinterForm = document.createElement('a');
            vsbWinterForm.setAttribute("href", vsbData.vsbWinter.url);
            // vsbWinterForm.setAttribute("method", "POST");
            vsb.appendChild(vsbWinterForm);

            const vsbWinterButtonValue = "View on VSB Winter " + urlYearW;
            const vsbWinterButton = generateFormButton("#7173F6", vsbWinterButtonValue);
            vsbWinterForm.appendChild(vsbWinterButton);
        }
    }
}

// https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced?rsts=dummy&crn=dummy&term_in=201609&sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_insm=dummy&sel_camp=dummy&sel_levl=dummy&sel_sess=dummy&sel_instr=dummy&sel_ptrm=dummy&sel_attr=dummy&sel_subj=COMP&sel_coll=&sel_crse=250&sel_title=&sel_schd=&sel_from_cred=&sel_to_cred=&sel_levl=&sel_ptrm=%&sel_instr=%&sel_attr=%&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&path=1&SUB_BTN=test&
// https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced?rsts=dummy&crn=dummy&term_in=201409&sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_insm=dummy&sel_camp=dummy&sel_levl=dummy&sel_sess=dummy&sel_instr=dummy&sel_ptrm=dummy&sel_attr=dummy&sel_subj=COMP&sel_coll=&sel_crse=250&sel_title=&sel_schd=&sel_from_cred=&sel_to_cred=&sel_levl=&sel_ptrm=%25&sel_instr=%25&sel_attr=%25&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&path=1&SUB_BTN=View+Fall+2014+Registration

// <a href="#" onclick="$(this).closest('form').submit()">Submit Link</a>

// <form id="test" action="http://www.docuum.com/McGill/review/read_course/01362"></form>
// <a href="" onclick="document.getElementById('test').submit()" onmouseover="this.style.background=&quot;-webkit-linear-gradient(left, #56AFE5, #C5C5C5)&quot;" onmouseout="this.style.background=&quot;#C5C5C5&quot;" value="View Docuum Course Reviews" style="background: rgb(197, 197, 197); width: 100%; height: 32px; margin: 4px 0px; border: 1px solid rgb(91, 91, 90); box-shadow: none;">View Docuum Course Reviews</a>


// <form id="test" action="http://www.docuum.com/McGill/review/read_course/01362"></form>
// <a href="#" onclick="document.getElementById('test').submit()" onmouseover="this.style.background=&quot;-webkit-linear-gradient(left, #56AFE5, #C5C5C5)&quot;" onmouseout="this.style.background=&quot;#C5C5C5&quot;" value="View Docuum Course Reviews" style="background: rgb(197, 197, 197); width: 100%; height: 32px; margin: 4px 0px; border: 1px solid rgb(91, 91, 90); box-shadow: none;">View Docuum Course Reviews</a>

// <a href="http://www.docuum.com/McGill/review/read_course/01362">
// <button 
// onmouseover="this.style.background=&quot;-webkit-linear-gradient(left, #56AFE5, #C5C5C5)&quot;" 
// onmouseout="this.style.background=&quot;#C5C5C5&quot;" 
// class="form-submit" 
// style="background: rgb(197, 197, 197); width: 100%; height: 32px; margin: 4px 0px; border: 1px solid rgb(91, 91, 90); box-shadow: none; font-size: 14.4px; font-family: CartoGothicStdBook, Helvetica, &quot;Helvetica Neue&quot;, Arial, &quot;sans serif&quot;;">
// View Docuum Course Reviews
// </button></a>


function generateFormButton(onColor, buttonValue) {
    const formButton = document.createElement('button');
    // const formButton = document.createElement('input');
    formButton.setAttribute('type', 'submit');
    formButton.setAttribute('onmouseover', 'this.style.background="' + (isNewStyle ? '-webkit-linear-gradient(left, ' + onColor + ', #C5C5C5)' : '#ECF3FF') + '"');
    formButton.setAttribute('onmouseout', 'this.style.background="' + (isNewStyle ? '#C5C5C5' : '#F4F5ED') + '"');
    // formButton.setAttribute('value', buttonValue);
    formButton.className = 'form-submit';
    formButton.style.background = (isNewStyle ? '#C5C5C5' : '#F4F5ED');
    formButton.style.width = '100%';
    formButton.style.height = '32px';
    formButton.style.margin = '4px 0px';

    formButton.style.fontFamily = 'CartoGothicStdBook, Helvetica, "Helvetica Neue", Arial, "sans serif"';
    formButton.innerHTML = buttonValue;
    if (isNewStyle) {
        formButton.style.fontSize = '14.4px';
        formButton.style.border = '1px solid #5B5B5A';
        formButton.style.WebkitBoxShadow  = 'none';
        formButton.style.boxShadow = 'none';
    }   
    return formButton;
}


function generateSidebarSectionTitle(titleString) {
    const sidebarSectionTitle = document.createElement(isNewStyle ? "h3" : "h4");
    sidebarSectionTitle.innerHTML = titleString;
    sidebarSectionTitle.style.margin = "0px";
    sidebarSectionTitle.style.fontSize = "1.1em";
    return sidebarSectionTitle;
}