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


function encodeSymbolsWin1252(string) {
    return encodeURI(string).replace(/\'/g, '%27')
                            .replace(/\-/g, '%20')
                            .replace(/\%C3\%8/g, '%C')
                            .replace(/\%C3\%9/g, '%D')
                            .replace(/\%C3\%A/g, '%E')
                            .replace(/\%C3\%B/g, '%F');
}


function updateProfURL(profKey, profURL) {
    //update href with profURL for all elements whose class matches profKey
    const profElements = document.getElementsByClassName(profKey);
    for (let p = 0; p < profElements.length; p++) {
        profElements[p].href = profURL;
    }
}


function getProfUrl(profName, general) {

    let profURL = 'http://www.ratemyprofessors.com/search.jsp?query=mcgill ';
    if (general) {
        profURL += profName.lastName + ' ';
    } 
    else {
        profURL += profName.firstName + ' ' + profName.lastName + ' ';
    }

    const xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    };
    chrome.runtime.sendMessage(xmlRequestInfo, generateGetProfURLCallback(profURL, profName, general));
}


function generateGetProfURLCallback(profURL, profName, general) {
    return function(data) {
        try {
            let tooltipContent = '';
            if (data.responseXML === 'error') {
                console.log(data);
                tooltipContent = 'Ratemyprofessors data failed to load<br>Please refresh the page to try again';
                makeProfSection(profURL, profName, tooltipContent);
            } 
            else {
                // let profURL = data.url;
                let profURLId = 0;
                const htmlParser = new DOMParser();
                const htmlDoc = htmlParser.parseFromString(data.responseXML, 'text/html');
                const listings = htmlDoc.getElementsByClassName('listing PROFESSOR');
                let resultCode = listings.length;

                if (resultCode === 0 && !general) { 
                    // 0 prof listings from specific search so try general search
                    getProfUrl(profName, true);
                } 
                else if (resultCode === 1) { 
                    // 1 prof listing so create url with listing id
                    profURLId = listings[0].innerHTML.match(/(ShowRatings.jsp.tid.[0-9]+)"/)[1];
                    profURL = 'http://www.ratemyprofessors.com/' + profURLId;
                } 
                else if (resultCode > 1) {
                    //multiple profs so search for exact or close match
                    for (let l = 0; l < listings.length && profURLId === 0; l++) {
                        const listingName = listings[l].getElementsByClassName('main')[0].innerText;
                        const listingFirstName = listingName.split(',')[1].trim(' ');
                        const nameMatches = (getEditDistance(listingFirstName, profName.firstName)<=2 || 
                                             listingName.match(profName.firstName) || 
                                             profName.firstName.match(listingFirstName));
                        if (nameMatches){
                            profURLId = listings[l].innerHTML.match(/(ShowRatings.jsp.tid.[0-9]+)"/)[1];
                            profURL = 'http://www.ratemyprofessors.com/' + profURLId;
                            resultCode = 1;
                        }
                    }
                }
                getProfContent(profURL, profName, resultCode);
            }
        } 
        catch(err) {
            console.log('Error: ' + profName.firstName + ' ' + profName.lastName + '\n' + err.stack);
            tooltipContent = 'Ratemyprofessors data failed to load<br>Please refresh the page to try again';
            makeProfSection(profURL, profName, tooltipContent);
        }
    };
}


function getProfContent(profURL, profName, res) {

    updateProfURL(profName.fullNameKey, profURL);
    const xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    };
    chrome.runtime.sendMessage(xmlRequestInfo, generateGetProfContentCallback(profURL, profName, res));
}


function generateGetProfContentCallback(profURL, profName, res) {
    return function(data) {
        try {
            let tooltipContent = '';
            if (data.responseXML === 'error') {
                console.log(data);
                tooltipContent = 'Ratemyprofessors data failed to load<br>Please refresh the page to try again';
                makeProfSection(profURL, profName, tooltipContent);
            } 
            else {
                const htmlParser = new DOMParser();
                const htmlDoc = htmlParser.parseFromString(data.responseXML, 'text/html');
                const rating = { firstName: 'ERROR', lastName: 'ERROR', overall: 'ERROR', difficulty: 'ERROR', takeagain: 'ERROR', hotness: 'ERROR', numOfRatings: 'ERROR' };
                
                if (res === 0) {
                    tooltipContent = 'Instructor not found';
                } 
                else if (res === 1) {
                    const gradeElements = htmlDoc.getElementsByClassName('grade');
                    if (gradeElements[0]) {
                        rating.overall = gradeElements[0].innerText.trim();
                    }
                    if (gradeElements[1]) {
                        rating.takeagain = gradeElements[1].innerText.trim();
                    }
                    if (gradeElements[2]) {
                        rating.difficulty = gradeElements[2].innerText.trim();
                    }
                    if (gradeElements[3]) {
                        rating.hotness = gradeElements[3].innerHTML;
                        if (rating.hotness) {
                            rating.hotness = rating.hotness.match(/chilis\/(?:new-)?([A-Za-z]+)\-chili\.png/)[1];
                        }
                    }
                    if (htmlDoc.getElementsByClassName('pfname')[0]) {
                        rating.firstName = htmlDoc.getElementsByClassName('pfname')[0].innerText.trim();
                    }
                    if (htmlDoc.getElementsByClassName('plname')[0]) {
                        rating.lastName = htmlDoc.getElementsByClassName('plname')[0].innerText.trim();
                    }
                    if (htmlDoc.getElementsByClassName('rating-count')[0]) {
                        rating.numOfRatings = htmlDoc.getElementsByClassName('rating-count')[0].innerText.match(/([0-9]+) Student Ratings/)[1];
                    }

                    if (rating.numOfRatings === '0') {
                        tooltipContent = 'This instructor has no ratings<br>Click to be the first to rate';
                    }
                    else {
                        tooltipContent = '<b>' + rating.firstName + ' ' + rating.lastName + '</b>' +
                                         '<br><b>' + rating.overall + '</b> Overall Quality' +
                                         '<br><b>' + rating.difficulty + '</b> Difficulty Level' +
                                         '<br><b>' + rating.takeagain + '</b> Would Take Again' +
                                         '<br>From <b>' + rating.numOfRatings + ' student rating' + (rating.numOfRatings > 1 ? 's' : '') + '</b>' +
                                         '<br>Prof Hotness: <b>' + rating.hotness.toUpperCase() + '</b>';
                    }
                }
                else if (res > 1) {
                    tooltipContent = 'Multiple Instructors found<br>Please click to see results';
                } 
                makeProfSection(profURL, profName, tooltipContent);
            }
        } 
        catch(err) {
            console.log('Error: ' + profName.firstName + ' ' + profName.lastName + '\n' + err.stack);
            tooltipContent = 'Ratemyprofessors data failed to load<br>Please refresh the page to try again';
            makeProfSection(profURL, profName, tooltipContent);
        }
    };
}


function makeProfSection(profURL, profName, tooltipContent) {

    const profElements = document.getElementsByClassName(profName.fullNameKey);

    for (let p = 0; p < profElements.length; p++) {
        profElements[p].id = profName.fullNameKey + p;
        $('#' + profName.fullNameKey + p).data('tooltipsy').destroy();
        profElements[p].title = tooltipContent;
    }

    logForDebug('Ready for tooltipsy');
    $('.' + profName.fullNameKey).tooltipsy( {
        css: {
            fontFamily: 'CartoGothicStdBook',
            padding: '10px',
            color: (isNewStyle ? '#444444' : '#2C566D'),
            fontSize: '.9em',
            backgroundColor: (isNewStyle ? '#C5C5C5' : '#F4F5ED'),
            borderRadius: '8px',
            border: '2px solid'
        }
    });
}


function generateProfNameObject(origName) {
    const name = origName.trim();
    const splitName = name.split(' ');
    const profName = {
        fullNameKey: name.replace(/\W/g, ''),
        fullName: name.replace(/ /g, '&nbsp').replace(/-/g, '&#8209'),
        firstName: encodeSymbolsWin1252(splitName[0]),
        lastName: encodeSymbolsWin1252(splitName[splitName.length-1])
    };
    return profName;
}


function generateFormButton(onColor, buttonValue) {
    const formButton = document.createElement('input');
    formButton.setAttribute('type', 'submit');
    formButton.setAttribute('onmouseover', 'this.style.background="' + (isNewStyle ? '-webkit-linear-gradient(left, ' + onColor + ', #C5C5C5)' : '#ECF3FF') + '"');
    formButton.setAttribute('onmouseout', 'this.style.background="' + (isNewStyle ? '#C5C5C5' : '#F4F5ED') + '"');
    formButton.setAttribute('value', buttonValue);
    formButton.className = 'form-submit';
    formButton.style.width = '100%';
    formButton.style.height = '32px';
    formButton.style.margin = '4px 0px';
    if (isNewStyle) {
        formButton.style.border = '1px solid #5B5B5A';
        formButton.style.WebkitBoxShadow  = 'none';
        formButton.style.boxShadow = 'none';
    }   
    return formButton;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add Ratings tooltips to prof names
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeProfRatingsTooltips() {
    profs = {};
    const profsByTerm = {};
    let profsLength = 0;

    let profsFullSource = document.getElementsByClassName("catalog-instructors")[0].innerHTML;

    const loadMessage = "McGill Enhanced is loading ratings!";


    if (!profsFullSource.match(/There are no professors/)) {

        const profsFullSourceArray = profsFullSource.match(/(Fall|Winter|Summer)/g);
        for (let a = 0; a < profsFullSourceArray.length; a++) {
            if (!(profsFullSourceArray[a] in profsByTerm)) {
                profsByTerm[profsFullSourceArray[a]] = [];
            }
        }

        profsFullSource = profsFullSource.split("Instructors:")[1];
        let newProfsHTML = "";

        for (let termKey in profsByTerm) {

            const profsTermSource = profsFullSource.split("(" + termKey + ")");
            if (profsTermSource.length > 1) {
                profsByTerm[termKey] = profsTermSource[0].split(",");
                newProfsHTML += "<p>Instructors (" + termKey + "): ";
                for (let p=0; p<profsByTerm[termKey].length; p++) {

                    let profName = generateProfNameObject(profsByTerm[termKey][p]);
                    profs[profName.fullNameKey] = profName;
                    newProfsHTML += "<a href='http://www.ratemyprofessors.com/search.jsp?query=mcgill " + profName.firstName + " " + profName.lastName;
                    newProfsHTML += " ' class=\"tooltip " + profName.fullNameKey + "\"  title=\"" + loadMessage + "\">" + profName.fullName + "</a>";
                    if (p <= profsByTerm[termKey].length-2) {
                        newProfsHTML += ", ";
                    }
                    if (p == profsByTerm[termKey].length-2) {
                        newProfsHTML += "and ";
                    }
                }
                newProfsHTML += "</p>";
                logForDebug(profsByTerm[termKey]);
                profsFullSource = profsTermSource[1];
            }
        }

        document.getElementsByClassName("catalog-instructors")[0].innerHTML = newProfsHTML;

        $('.tooltip').tooltipsy( {
            css: {
                fontFamily: 'CartoGothicStdBook',
                padding: '10px',
                color: (isNewStyle ? '#444444' : '#2C566D'),
                fontSize: '.9em',
                backgroundColor: (isNewStyle ? '#C5C5C5' : '#F4F5ED'),
                borderRadius: '8px',
                border: '2px solid'
            }
        });

        profsLength = Object.keys(profs).length;
        if (profsLength > 0) {
            logForDebug(profs);
            for (var prof in profs) {
                getProfUrl(profs[prof], false, -1);
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Replace Course names with links to course overview page
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeCourseLinks(courseNameRegex) {
    
    notesElement = document.getElementsByClassName("catalog-notes")[0];
    if (notesElement) {
        notesElement.innerHTML = notesElement.innerHTML.replace(courseNameRegex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add sidebar content
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeSidebarContent() {

    if (urlYearF <= 2010) {
        document.getElementById("inner-container").style.width = "100%";
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
    
    const courseEval = document.createElement('div');
    courseEval.style.margin = "0px 0px 8px 0px";
    formsBlock.appendChild(courseEval);

    const courseEvalTitle = document.createElement(isNewStyle ? "h3" : "h4");
    courseEvalTitle.innerHTML = "Course Reviews";
    courseEvalTitle.style.margin = "0px";
    courseEvalTitle.style.fontSize = "1.1em";
    courseEval.appendChild(courseEvalTitle);


    if (docuumURLdata) {

        const docuumURL = "http://www.docuum.com/McGill/review/read_course/" + docuumURLdata;

        const docuumForm = document.createElement('form');
        docuumForm.setAttribute("action", docuumURL);
        courseEval.appendChild(docuumForm);

        const docuumButtonValue = "View Docuum Course Reviews";
        const docuumButton = generateFormButton("#56AFE5", docuumButtonValue);
        docuumForm.appendChild(docuumButton);
    }


    const mercuryForm = document.createElement('form');
    mercuryForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form");
    mercuryForm.setAttribute("method", "POST");
    mercuryForm.setAttribute("title", "Must be already signed into Minerva!");
    mercuryForm.setAttribute("name", "search_form");
    mercuryForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"\">";
    mercuryForm.innerHTML += "<input type=\"hidden\" name=\"subj_tab_in\" value=\"" + courseSubject + "\">";
    mercuryForm.innerHTML += "<input type=\"hidden\" name=\"crse_in\" value=\"" + courseNumber + "\">";
    mercuryForm.innerHTML += "<input type=\"hidden\" name=\"title_in\" value=\"\">";
    mercuryForm.innerHTML += "<input type=\"hidden\" name=\"inst_tab_in\" value=\"\">";
    mercuryForm.innerHTML += "<input type=\"hidden\" name=\"form_mode\" value=\"ar\">";
    courseEval.appendChild(mercuryForm);

    const mercuryButtonValue = "View Mercury Course Evaluations";
    const mercuryButton = generateFormButton("#E54944", mercuryButtonValue);
    mercuryForm.appendChild(mercuryButton);

    


    if (recordingURLdata) {

        const recordings = document.createElement('div');
        recordings.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(recordings);

        const recordingsTitle = document.createElement(isNewStyle ? "h3" : "h4");
        recordingsTitle.innerHTML = "Lecture Recordings";
        recordingsTitle.style.margin = "0px";
        recordingsTitle.style.fontSize = "1.1em";
        recordings.appendChild(recordingsTitle);

        if (urlYearF in recordingURLdata) {
            const yearRecordingURLs = recordingURLdata[urlYearF];

            for (let r = 0; r < yearRecordingURLs.length; r++) {

                const recordingsForm = document.createElement('form');
                recordingsForm.setAttribute("action", yearRecordingURLs[r].url);
                recordingsForm.setAttribute("method", "POST");
                recordings.appendChild(recordingsForm);

                const recordingsButtonValue = "View " + yearRecordingURLs[r].semester + " " + yearRecordingURLs[r].year + " Sec " + yearRecordingURLs[r].section + " Lectures";
                const recordingsButton = generateFormButton("#E54944", recordingsButtonValue);
                recordingsForm.appendChild(recordingsButton);    
            }
        }
        else {
            const years = Object.keys(recordingURLdata);
            const maxYear = Math.max.apply(Math, years);
            const maxYearURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, maxYear+"-"+(maxYear+1));

            const recordingsForm = document.createElement('form');
            recordingsForm.setAttribute("action", maxYearURL);
            recordings.appendChild(recordingsForm);

            const recordingsButtonValue = "View " + maxYear + "-" + (maxYear+1) + " for the latest Lectures";
            const recordingsButton = generateFormButton("#E54944", recordingsButtonValue);
            recordingsForm.appendChild(recordingsButton);
        }

    }  


    if (courseTermsCodes.length > 0) {

        const courseReg = document.createElement('div');
        courseReg.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(courseReg);

        const courseRegTitle = document.createElement(isNewStyle ? "h3" : "h4");
        courseRegTitle.innerHTML = "Minerva Registration";
        courseRegTitle.style.margin = "0px";
        courseRegTitle.style.fontSize = "1.1em";
        courseReg.appendChild(courseRegTitle);

        for (let i = 0; i < courseTermsCodes.length; i++) {

            const courseRegForm = document.createElement('form');
            courseRegForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced");
            courseRegForm.setAttribute("method", "POST");
            courseRegForm.setAttribute("title", "Must be already signed into Minerva!");
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
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"" + courseSubject + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_coll\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_crse\" value=\"" + courseNumber + "\">";
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

            const courseRegButtonValue = "View " + courseTermsCodes[i].name + " Registration";
            const courseRegButton = generateFormButton("#E54944", courseRegButtonValue);
            courseRegButton.setAttribute("name", "SUB_BTN");
            courseRegForm.appendChild(courseRegButton);
        }
    }


    const other = document.createElement('div');

    if (docuumURLdata || wikinotesURLdata) {

        other.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(other);

        const otherTitle = document.createElement(isNewStyle ? "h3" : "h4");
        otherTitle.innerHTML = "Other resources";
        otherTitle.style.margin = "0px";
        otherTitle.style.fontSize = "1.1em";
        other.appendChild(otherTitle);
    
        if (csusURLdata) {

            const csusURL = "https://mcgill-csus.github.io/content/compmajorguide.html#" + csusURLdata;

            const csusForm = document.createElement('form');
            csusForm.setAttribute("action", csusURL);
            other.appendChild(csusForm);

            const csusButtonValue = "View " + courseNameSpaced + " in the CSUS Guide";
            const csusButton = generateFormButton("#FFFFFF", csusButtonValue);
            csusForm.appendChild(csusButton);
        }

        if (docuumURLdata) {

            const docuumURL = "http://www.docuum.com/McGill/document/view_class/" + docuumURLdata;

            const docuumForm = document.createElement('form');
            docuumForm.setAttribute("action", docuumURL);
            other.appendChild(docuumForm);

            const docuumButtonValue = "View " + courseNameSpaced + " on Docuum";
            const docuumButton = generateFormButton("#56AFE5", docuumButtonValue);
            docuumForm.appendChild(docuumButton);
        }

        if (wikinotesURLdata) {

            const wikinotesURL = "https://www.wikinotes.ca/" + wikinotesURLdata;

            const wikinotesForm = document.createElement('form');
            wikinotesForm.setAttribute("action", wikinotesURL);
            other.appendChild(wikinotesForm);

            const wikinotesButtonValue = "View " + courseNameSpaced + " on Wikinotes";
            const wikinotesButton = generateFormButton("#FFFFFF", wikinotesButtonValue);
            wikinotesForm.appendChild(wikinotesButton);
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

    //fix layout bug on mcgill site for some newStyle pages (2009-2010 & 2011-2012)
    if (isNewStyle) {
        document.getElementById("inner-container").style.width = '100%';
    }

    vsbData.codeReady = true;

    if (vsbData.total === vsbData.done && vsbData.codeReady === true) {
        addVerifiedLinks(vsbData, formsBlock);
    }

}


function programOverview(courseNameRegex){    
    //Replace Course names with links to course overview page
    const courseSections = document.getElementsByClassName("program-course");
    for (let c = 0; c<courseSections.length; c++) {

        const notes = courseSections[c].getElementsByClassName("catalog-notes")[0];
        const title = courseSections[c].getElementsByClassName("program-course-title")[0];

        const courseURL = title.href;
        const courseName = courseURL.match(/courses\/(.+)/)[1].replace("-", " ").toUpperCase();

        const link = document.createElement('h3');
        link.style.padding = "0px";
        link.style.margin = "0px";
        link.innerHTML = "<a style=\"background: none; padding-left: 0px\" href=\"" + courseURL + "\">" + courseName + "</a>";
        
        const contentElement = courseSections[c].getElementsByClassName("content")[0];
        contentElement.insertBefore(link, contentElement.firstChild);

        if (notes) {
            notes.innerHTML = notes.innerHTML.replace(/<li>(.+)<.li>/g, "<p>$1</p>");
            notes.innerHTML = notes.innerHTML.replace(courseNameRegex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");   
        }
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
        formsBlock.appendChild(vsb);

        const vsbTitle = document.createElement(isNewStyle ? "h3" : "h4");
        vsbTitle.innerHTML = "Visual Schedule Builder";
        vsbTitle.style.margin = "0px";
        vsbTitle.style.fontSize = "1.1em";
        vsb.appendChild(vsbTitle);

        if (vsbData.vsbFall.valid) {

            const vsbFallForm = document.createElement('form');
            vsbFallForm.setAttribute("action", vsbData.vsbFall.url);
            vsbFallForm.setAttribute("method", "POST");
            vsb.appendChild(vsbFallForm);

            const vsbFallButtonValue = "View on VSB Fall " + urlYearF;
            const vsbFallButton = generateFormButton("#7173F6", vsbFallButtonValue);
            vsbFallForm.appendChild(vsbFallButton);
        }

        if (vsbData.vsbWinter.valid) {

            const vsbWinterForm = document.createElement('form');
            vsbWinterForm.setAttribute("action", vsbData.vsbWinter.url);
            vsbWinterForm.setAttribute("method", "POST");
            vsb.appendChild(vsbWinterForm);

            const vsbWinterButtonValue = "View on VSB Winter " + urlYearW;
            const vsbWinterButton = generateFormButton("#7173F6", vsbWinterButtonValue);
            vsbWinterForm.appendChild(vsbWinterButton);
        }
    }
}






