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

