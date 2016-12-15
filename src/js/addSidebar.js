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
    // if (isNewStyle) {
    //     document.getElementById("inner-container").className += " mcen-inner-container";
    // }
    // document.getElementById((isNewStyle ? "main-column" : "center-column")).className += " mcen-main-column";

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
    sidebar.className += " mcen-sidebar";
    sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");

    const sidebarLinksBlock = document.createElement('div');  
    sidebarLinksBlock.className += " mcen-sidebarLinksBlock " + (isNewStyle ? "mcen-newStyle" : "mcen-oldStyle");  
    sidebar.appendChild(sidebarLinksBlock);
  

    //SIDEBAR SECTION: COURSE REVIEWS
    const courseEval = generateSidebarSection("Course Reviews");
    sidebarLinksBlock.appendChild(courseEval);

    if (docuumURLdata) { 
        const docuumURL = "http://www.docuum.com/McGill/review/read_course/" + docuumURLdata;
        const docuumButtonString = "View Docuum Course Reviews";
        courseEval.appendChild(generateSidebarLink(docuumURL, "mcen-blue", docuumButtonString));
    }

    const mercuryURL = 'https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form?form_mode=ar&subj_tab_in='+courseSubject+'&crse_in='+courseNumber;
    const mercuryButtonString = "View Mercury Course Evaluations";
    courseEval.appendChild(generateSidebarLink(mercuryURL, "mcen-red", mercuryButtonString, "Must be already signed into Minerva!"));

    
    if (recordingURLdata) {

        //SIDEBAR SECTION: LECTURE RECORDINGS
        const recordings = generateSidebarSection("Lecture Recordings");
        sidebarLinksBlock.appendChild(recordings);

        if (urlYearF in recordingURLdata) {
            const yearRecordingURLs = recordingURLdata[urlYearF];
            for (let r = 0; r < yearRecordingURLs.length; r++) {
                const recordingsButtonString = "View " + yearRecordingURLs[r].semester + " " + yearRecordingURLs[r].year + " Sec " + yearRecordingURLs[r].section + " Lectures";
                recordings.appendChild(generateSidebarLink(yearRecordingURLs[r].url, "mcen-red", recordingsButtonString));
            }
        }
        else {
            const maxYear = Math.max.apply(Math, Object.keys(recordingURLdata));
            const maxYearURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, maxYear+"-"+(maxYear+1));
            const recordingsButtonString = "View " + maxYear + "-" + (maxYear+1) + " for the latest Lectures";
            recordings.appendChild(generateSidebarLink(maxYearURL, "mcen-red", recordingsButtonString));
        }
    }  


    if (courseTermsCodes.length > 0) {

        //SIDEBAR SECTION: MINERVA REGISTRATION
        const courseReg = generateSidebarSection("Minerva Registration");
        sidebarLinksBlock.appendChild(courseReg);

        for (let i = 0; i < courseTermsCodes.length; i++) {
            const courseRegURL = "https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced?rsts=dummy&crn=dummy&term_in=" + courseTermsCodes[i].code + "&sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_insm=dummy&sel_camp=dummy&sel_levl=dummy&sel_sess=dummy&sel_instr=dummy&sel_ptrm=dummy&sel_attr=dummy&sel_subj=" + courseSubject + "&sel_coll=&sel_crse=" + courseNumber + "&sel_title=&sel_schd=&sel_from_cred=&sel_to_cred=&sel_levl=&sel_ptrm=%25&sel_instr=%25&sel_attr=%25&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&path=1&SUB_BTN=&";
            const courseRegButtonString = "View " + courseTermsCodes[i].name + " Registration";
            courseReg.appendChild(generateSidebarLink(courseRegURL, "mcen-red", courseRegButtonString, 'Must be already signed into Minerva!'));       
        }
    }


    if (csusURLdata || docuumURLdata || wikinotesURLdata) {

        //SIDEBAR SECTION: OTHER RESOURCES
        const other = generateSidebarSection("Other Resources");
        sidebarLinksBlock.appendChild(other);
    
        if (csusURLdata) {
            const csusURL = "https://mcgill-csus.github.io/compmajorguide.html#" + csusURLdata;
            const csusButtonString = "View " + courseNameSpaced + " in the CSUS Guide";
            other.appendChild(generateSidebarLink(csusURL, "mcen-white", csusButtonString));
        }
        if (docuumURLdata) {
            const docuumURL = "http://www.docuum.com/McGill/document/view_class/" + docuumURLdata;
            const docuumButtonString = "View " + courseNameSpaced + " on Docuum";
            other.appendChild(generateSidebarLink(docuumURL, "mcen-blue", docuumButtonString));
        }
        if (wikinotesURLdata) {
            const wikinotesURL = "https://www.wikinotes.ca/" + wikinotesURLdata;
            const wikinotesButtonString = "View " + courseNameSpaced + " on Wikinotes";
            other.appendChild(generateSidebarLink(wikinotesURL, "mcen-white", wikinotesButtonString));
        }
    }


    const withinyearRangeVSB = (sysYear==urlYearF-1 && sysMonth>=4) || (sysYear==urlYearF) || (sysYear==urlYearW && sysMonth<4);
    if ( withinyearRangeVSB && courseTermsCodes.length > 0) {

        //SIDEBAR SECTION: VISUAL SCHEDULE BUILDER
        const vsb = generateSidebarSection("Visual Schedule Builder");
        sidebarLinksBlock.appendChild(vsb);

        for (let i = 0; i < courseTermsCodes.length; i++) {
            const term = courseTermsCodes[i];
            if (term.vsbURL) {
                const vsbButtonValue = "View on VSB " + term.name;
                const vsbLink = generateSidebarLink(term.vsbURL, "mcen-purple", vsbButtonValue);
                vsb.appendChild(vsbLink);
            } 
        }
    }




    //SIDEBAR RELATED COURSES AND RELATED PROGRAMS BLOCKS

    const sidebarRelatedBlock = generateSidebarBlock("Related Courses");
    sidebar.appendChild(sidebarRelatedBlock);

    if (deps.length > 0) {

        const deptCourses = generateRelatedCoursesSection("View Related Courses by Subject");
        sidebarRelatedBlock.appendChild(deptCourses);

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
        sidebarRelatedBlock.appendChild(profCourses);

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

        const sidebarRelatedBlock = generateSidebarBlock("Related Programs");
        sidebar.appendChild(sidebarRelatedBlock);

        const relatedPrograms = document.getElementsByClassName("view-catalog-program")[0];
        sidebarRelatedBlock.appendChild(document.createElement('br'));
        sidebarRelatedBlock.appendChild(relatedPrograms);
    }

    //insert enhanced sidebar
    const container = document.getElementById(isNewStyle ? "inner-container" : "container");
    if (document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar")) {
        document.createElement("div").appendChild(document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar"));
    }
    if (isNewStyle) {
        container.appendChild(sidebar);
    }
    else {
        container.insertBefore(sidebar, document.getElementById("footer"));
    }

}


function generateSidebarSection(titleString) {
    const sidebarSection = document.createElement('div');
    sidebarSection.className = "mcen-sidebarSection";
    sidebarSection.appendChild(generateSidebarSectionTitle(titleString));
    return sidebarSection;
}


function generateSidebarSectionTitle(titleString) {
    const sidebarSectionTitle = document.createElement(isNewStyle ? "h3" : "h4");
    sidebarSectionTitle.className = "mcen-sidebarSectionTitle";
    sidebarSectionTitle.innerHTML = titleString;
    return sidebarSectionTitle;
}


function generateSidebarLink(url, colorClass, buttonValue, title) {
    const sidebarLink = document.createElement('a');
    sidebarLink.setAttribute("href", url);
    if (title) {
        sidebarLink.setAttribute("title", title);
    }        
    sidebarLink.appendChild(generateSidebarLinkButton(colorClass, buttonValue));
    return sidebarLink;
}


function generateSidebarLinkButton(colorClass, buttonValue) {
    const linkButton = document.createElement('button');
    linkButton.className = 'form-submit mcen-linkButton' + (isNewStyle ? " mcen-newStyle " + colorClass : "");
    linkButton.innerHTML = buttonValue;
    return linkButton;
}


function generateSidebarBlock(titleString) {
    const sidebarRelatedBlock = document.createElement('div');
    sidebarRelatedBlock.className = "block mcen-sidebarRelatedBlock" + (isNewStyle ? " mcen-newStyle" : "");
    sidebarRelatedBlock.appendChild(generateSidebarBlockTitle(titleString));
    return sidebarRelatedBlock;   
}


function generateSidebarBlockTitle(titleString) {
    const sidebarRelatedBlockTitle = document.createElement('h3');
    sidebarRelatedBlockTitle.className = "mcen-sidebarRelatedBlockTitle" + (isNewStyle ? " mcen-newStyle" : "");
    sidebarRelatedBlockTitle.innerHTML = titleString;
    return sidebarRelatedBlockTitle;
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