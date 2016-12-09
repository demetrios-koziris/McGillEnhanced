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
        courseTermsCodes.push( {
            name: "Fall " + urlYearF,  
            code: urlYearF + "09",
            vsbURL: "https://vsb.mcgill.ca/vsb/criteria.jsp?term=" + urlYearF + "09&course_0_0=" + courseSubject + "-" + courseNumber + "&ca_0_0=&bbs="
        } );
    }
    if (courseTerms.match(/Winter/)) {
        courseTermsCodes.push( {
            name: "Winter " + urlYearW,  
            code: urlYearW + "01",
            vsbURL: "https://vsb.mcgill.ca/vsb/criteria.jsp?term=" + urlYearW + "01&course_0_0=" + courseSubject + "-" + courseNumber + "&ca_0_0=&bbs="
        } );
    }
    if (courseTerms.match(/Summer/)) {
        courseTermsCodes.push( {
            name: "Summer " + urlYearW,  
            code: urlYearW + "05"
        } );
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


    const sidebar = document.createElement('div');
    sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");
    sidebar.style.minWidth = "280px";
    sidebar.style.border = "0px";

    const formsBlock = document.createElement('div');    
    formsBlock.style.marginBottom = (isNewStyle ? "10px" : "0px");
    formsBlock.style.padding = "10px 0px";
    sidebar.appendChild(formsBlock);

    // validateExternalLinks(vsbData, formsBlock);
    

    //SIDEBAR SECTION: COURSE REVIEWS
    const courseEval = generateSidebarSection("Course Reviews");
    formsBlock.appendChild(courseEval);

    if (docuumURLdata) { 
        const docuumURL = "http://www.docuum.com/McGill/review/read_course/" + docuumURLdata;
        const docuumButtonString = "View Docuum Course Reviews";
        courseEval.appendChild(generateSidebarLink(docuumURL, "#56AFE5", docuumButtonString));
    }

    const mercuryURL = 'https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form?form_mode=ar&subj_tab_in='+courseSubject+'&crse_in='+courseNumber;
    const mercuryButtonString = "View Mercury Course Evaluations";
    courseEval.appendChild(generateSidebarLink(mercuryURL, "#E54944", mercuryButtonString, "Must be already signed into Minerva!"));

    
    if (recordingURLdata) {

        //SIDEBAR SECTION: LECTURE RECORDINGS
        const recordings = generateSidebarSection("Lecture Recordings");
        formsBlock.appendChild(recordings);

        if (urlYearF in recordingURLdata) {
            const yearRecordingURLs = recordingURLdata[urlYearF];
            for (let r = 0; r < yearRecordingURLs.length; r++) {
                const recordingsButtonString = "View " + yearRecordingURLs[r].semester + " " + yearRecordingURLs[r].year + " Sec " + yearRecordingURLs[r].section + " Lectures";
                recordings.appendChild(generateSidebarLink(yearRecordingURLs[r].url, "#E54944", recordingsButtonString));
            }
        }
        else {
            const maxYear = Math.max.apply(Math, Object.keys(recordingURLdata));
            const maxYearURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, maxYear+"-"+(maxYear+1));
            const recordingsButtonString = "View " + maxYear + "-" + (maxYear+1) + " for the latest Lectures";
            recordings.appendChild(generateSidebarLink(maxYearURL, "#E54944", recordingsButtonString));
        }
    }  


    if (courseTermsCodes.length > 0) {

        //SIDEBAR SECTION: MINERVA REGISTRATION
        const courseReg = generateSidebarSection("Minerva Registration");
        formsBlock.appendChild(courseReg);

        for (let i = 0; i < courseTermsCodes.length; i++) {
            const courseRegURL = "https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced?rsts=dummy&crn=dummy&term_in=" + courseTermsCodes[i].code + "&sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_insm=dummy&sel_camp=dummy&sel_levl=dummy&sel_sess=dummy&sel_instr=dummy&sel_ptrm=dummy&sel_attr=dummy&sel_subj=" + courseSubject + "&sel_coll=&sel_crse=" + courseNumber + "&sel_title=&sel_schd=&sel_from_cred=&sel_to_cred=&sel_levl=&sel_ptrm=%25&sel_instr=%25&sel_attr=%25&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&path=1&SUB_BTN=&";
            const courseRegButtonString = "View " + courseTermsCodes[i].name + " Registration";
            courseReg.appendChild(generateSidebarLink(courseRegURL, "#E54944", courseRegButtonString, 'Must be already signed into Minerva!'));       
        }
    }


    if (csusURLdata || docuumURLdata || wikinotesURLdata) {

        //SIDEBAR SECTION: OTHER RESOURCES
        const other = generateSidebarSection("Other Resources");
        formsBlock.appendChild(other);
    
        if (csusURLdata) {
            const csusURL = "https://mcgill-csus.github.io/compmajorguide.html#" + csusURLdata;
            const csusButtonString = "View " + courseNameSpaced + " in the CSUS Guide";
            other.appendChild(generateSidebarLink(csusURL, "#FFFFFF", csusButtonString));
        }
        if (docuumURLdata) {
            const docuumURL = "http://www.docuum.com/McGill/document/view_class/" + docuumURLdata;
            const docuumButtonString = "View " + courseNameSpaced + " on Docuum";
            other.appendChild(generateSidebarLink(docuumURL, "#56AFE5", docuumButtonString));
        }
        if (wikinotesURLdata) {
            const wikinotesURL = "https://www.wikinotes.ca/" + wikinotesURLdata;
            const wikinotesButtonString = "View " + courseNameSpaced + " on Wikinotes";
            other.appendChild(generateSidebarLink(wikinotesURL, "#FFFFFF", wikinotesButtonString));
        }
    }


    if (urlYearF >= sysYear-1 && courseTermsCodes.length > 0) {

        //SIDEBAR SECTION: VISUAL SCHEDULE BUILDER
        const vsb = generateSidebarSection("Visual Schedule Builder");
        formsBlock.appendChild(vsb);

        for (let i = 0; i < courseTermsCodes.length; i++) {
            const term = courseTermsCodes[i];
            if (term.vsbURL) {
                const vsbButtonValue = "View on VSB " + term.name;
                const vsbLink = generateSidebarLink(term.vsbURL, "#7173F6", vsbButtonValue);
                vsb.appendChild(vsbLink);
            } 
        }
    }




    //SIDEBAR RELATED COURSES AND RELATED PROGRAMS BLOCKS

    const sidebarBlock = generateSidebarBlock("Related Courses");
    sidebar.appendChild(sidebarBlock);

    if (deps.length > 0) {

        const deptCourses = generateRelatedCoursesSection("View Related Courses by Subject");
        sidebarBlock.appendChild(deptCourses);

        for (let d = 0; d<deps.length; d++)
        {
            const deptCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search?" + (isNewStyle ? "f[0]=field_subject_code%3A" : "filters=ss_subject%3A") + deps[d];
            const deptCoursesLinkDiv = document.createElement('div');
            deptCoursesLinkDiv.className = (d === deps.length-1 ? "views-row views-row-last" : "views-row");
            deptCoursesLinkDiv.appendChild(generateRelatedCoursesLink(deptCoursesURL, deps[d]+" Courses"));
            deptCourses.appendChild(deptCoursesLinkDiv);
        }
    }

    const profKeys = Object.keys(profs);
    if (profKeys.length > 0) {

        const profCourses = generateRelatedCoursesSection("View Related Courses by Professor");
        sidebarBlock.appendChild(profCourses);

        for (let p = 0; p < profKeys.length; p++) {
            const profFullName = profs[profKeys[p]].fullName;
            const profURLName = profFullName.replace(/\&nbsp/g, " ").replace(/\&\#8209/g, "-");

            const profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + profURLName;
            const profCoursesLinkDiv = document.createElement('div');
            profCoursesLinkDiv.className = (p === profKeys.length-1 ? "views-row views-row-last" : "views-row");
            profCoursesLinkDiv.appendChild(generateRelatedCoursesLink(profCoursesURL, profFullName));
            profCourses.appendChild(profCoursesLinkDiv);
        }
    }


    if (document.getElementsByClassName("view-catalog-program").length > 0) {

        const sidebarBlock = generateSidebarBlock("Related Programs");
        sidebar.appendChild(sidebarBlock);

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

}


function generateSidebarSection(titleString) {
    const sidebarSection = document.createElement('div');
    sidebarSection.style.margin = "0px 0px 8px 0px";
    sidebarSection.appendChild(generateSidebarSectionTitle(titleString));
    return sidebarSection;
}


function generateSidebarSectionTitle(titleString) {
    const sidebarSectionTitle = document.createElement(isNewStyle ? "h3" : "h4");
    sidebarSectionTitle.innerHTML = titleString;
    sidebarSectionTitle.style.margin = "0px";
    sidebarSectionTitle.style.padding = "5px 0px";
    sidebarSectionTitle.style.fontSize = "1.1em";
    return sidebarSectionTitle;
}


function generateSidebarLink(url, onColor, buttonValue, title) {
    const sidebarLink = document.createElement('a');
    sidebarLink.setAttribute("href", url);
    if (title) {
        sidebarLink.setAttribute("title", title);
    }        
    sidebarLink.appendChild(generateSidebarLinkButton(onColor, buttonValue));
    return sidebarLink;
}


function generateSidebarLinkButton(onColor, buttonValue) {
    const linkButton = document.createElement('button');
    linkButton.setAttribute('onmouseover', 'this.style.background="' + (isNewStyle ? '-webkit-linear-gradient(left, ' + onColor + ', #C5C5C5)' : '#ECF3FF') + '"');
    linkButton.setAttribute('onmouseout', 'this.style.background="' + (isNewStyle ? '#C5C5C5' : '#F4F5ED') + '"');
    linkButton.className = 'form-submit';
    linkButton.style.background = (isNewStyle ? '#C5C5C5' : '#F4F5ED');
    linkButton.style.width = '100%';
    linkButton.style.height = '32px';
    linkButton.style.margin = '4px 0px';
    linkButton.style.fontFamily = 'CartoGothicStdBook, Helvetica, "Helvetica Neue", Arial, "sans serif"';
    linkButton.innerHTML = buttonValue;
    if (isNewStyle) {
        linkButton.style.fontSize = '14.4px';
        linkButton.style.border = '1px solid #5B5B5A';
        linkButton.style.WebkitBoxShadow  = 'none';
        linkButton.style.boxShadow = 'none';
    }   
    return linkButton;
}


function generateSidebarBlock(titleString) {
    const sidebarBlock = document.createElement('div');
    sidebarBlock.className = "block";
    sidebarBlock.style.minWidth = "260px";
    if (isNewStyle) {
        sidebarBlock.style.border = "1px solid #eee";
        sidebarBlock.style.marginBottom = "16px";
    }
    sidebarBlock.appendChild(generateSidebarBlockTitle(titleString));
    return sidebarBlock;   
}


function generateSidebarBlockTitle(titleString) {
    const sidebarBlockTitle = document.createElement('h3');
    sidebarBlockTitle.innerHTML = titleString;
    sidebarBlockTitle.style.maxWidth = "100%";
    if (isNewStyle) {
        sidebarBlockTitle.style.padding = "12px 10px";
        sidebarBlockTitle.style.background = "#DBDBDB";
    }
    return sidebarBlockTitle;
}


function generateRelatedCoursesSection(titleString) {
    const relatedCoursesSection = document.createElement('div');
    relatedCoursesSection.className = "view-catalog-program";
    relatedCoursesSection.appendChild(document.createElement('br'));
    relatedCoursesSection.appendChild(generateRelatedCoursesSectionTitle(titleString));
    return relatedCoursesSection;
}


function generateRelatedCoursesSectionTitle(titleString) {
    const relatedCoursesSectionTitle = document.createElement('div');
    relatedCoursesSectionTitle.className = "view-header";
    relatedCoursesSectionTitle.innerHTML = "<i>" + titleString + "</i>";
    return relatedCoursesSectionTitle;
}


function generateRelatedCoursesLink(url, titleString) {
    const relatedCoursesLink = document.createElement('a');
    relatedCoursesLink.setAttribute("href", url);
    relatedCoursesLink.innerHTML = titleString;
    return relatedCoursesLink;    
}