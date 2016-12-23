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


function makeProfLinks() {
    profs = {};
    const profsByTerm = {};
    const minervaProfs = getProfData();
    let profsLength = 0;

    const profsFullSourceElem = document.getElementsByClassName("catalog-instructors")[0];
    let profsFullSource = profsFullSourceElem.innerHTML;

    const loadMessage = "McGill Enhanced is loading ratings!";
    const profHoverMessage = "McGill Enhanced is no longer able to display ratings here.<br>Please click this link to view courses taught by this prof.";
    const profLinkMessage = 'View other courses<br>taught by this instructor';
    const googleLinkMessage = 'View Google query for<br>instructor reviews';
    const mercuryLinkMessage = 'View Mercury query for this instructor name<br>Must already be signed into Minerva!';
    const mercuryLinkMessageError = 'No instructor found in<br>Mercury with this name';

    if (!profsFullSource.match(/There are no professors/)) {

        const profSection = document.createElement('div');

        const profsFullSourceArray = profsFullSource.match(/(Fall|Winter|Summer)/g);
        for (let a = 0; a < profsFullSourceArray.length; a++) {
            if (!(profsFullSourceArray[a] in profsByTerm)) {
                profsByTerm[profsFullSourceArray[a]] = [];
            }
        }

        profsFullSource = profsFullSource.split("Instructors:")[1];

        for (let termKey in profsByTerm) {

            const termSection = document.createElement('div');
            termSection.className = 'mcen-termSection';
            profSection.appendChild(termSection);

            const profsTermSource = profsFullSource.split("(" + termKey + ")");
            if (profsTermSource.length > 1) {
                profsByTerm[termKey] = profsTermSource[0].split(",");

                const termTitle = document.createElement('div');
                termTitle.innerHTML = 'Instructors (<b>' + termKey + '</b>) :';
                termSection.appendChild(termTitle);

                for (let p=0; p<profsByTerm[termKey].length; p++) {
                    const profDiv = document.createElement('div');
                    profDiv.className = 'mcen-profDiv';
                    termSection.appendChild(profDiv);

                    let profName = generateProfNameObject(minervaProfs, profsByTerm[termKey][p]);
                    const profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + profName.fullName;
                    profs[profName.fullNameKey] = profName;

                    const googleLink = document.createElement('a');
                    googleLink.href = 'https://www.google.ca/search?q="rate"+"mcgill"+' + profName.firstName + '+' + profName.lastName;
                    profDiv.appendChild(googleLink);

                    const googleLinkButton = document.createElement('button');
                    googleLinkButton.className = 'tooltip mcen-profLinkButton mcen-googleLinkButton';
                    googleLinkButton.title = googleLinkMessage;
                    googleLinkButton.innerText = 'Google';
                    googleLink.appendChild(googleLinkButton);

                    const mercuryLink = document.createElement('a');
                    mercuryLink.href = "https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form?form_mode=ar&inst_tab_in=" + minervaProfs[profName.fullName];
                    profDiv.appendChild(mercuryLink);

                    const mercuryLinkButton = document.createElement('button');
                    mercuryLinkButton.className = 'tooltip mcen-profLinkButton mcen-mercuryLinkButton';
                    mercuryLinkButton.title = mercuryLinkMessage;
                    mercuryLinkButton.innerText = 'Mercury';
                    mercuryLink.appendChild(mercuryLinkButton);
                    
                    if (!(profName.fullName in minervaProfs)) {
                        mercuryLinkButton.className = 'tooltipError mcen-profLinkButton mcen-mercuryLinkButton not-active';
                        mercuryLinkButton.title = mercuryLinkMessageError;
                        mercuryLink.href = 'https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form=';
                    }

                    const profLink = document.createElement('a');
                    profLink.href = profCoursesURL;
                    profLink.className = 'tooltip mcen-profLink ' + profName.fullNameKey;
                    profLink.title = profLinkMessage;
                    profLink.innerText = profName.fullName;
                    profDiv.appendChild(profLink);

                }

                logForDebug(profsByTerm[termKey]);
                profsFullSource = profsTermSource[1];
            }
        }

        document.getElementsByClassName("catalog-instructors")[0].innerHTML = "";
        profsFullSourceElem.appendChild(profSection);


        $('.tooltip').tooltipsy( {
            hide: function (e, $el) {
                $el.slideUp(50);
            },
            delay: 400,
            offset: [0, -8],
            css: {
                fontFamily: 'CartoGothicStdBook',
                padding: '6px 12px',
                color: (isNewStyle ? '#444444' : '#2C566D'),
                fontSize: '.9em',
                backgroundColor: (isNewStyle ? '#eceff1' : '#F4F5ED'),
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '4px 4px 10px #888888'
            }
        });

        $('.tooltipError').tooltipsy( {
            hide: function (e, $el) {
                $el.slideUp(50);
            },
            delay: 400,
            offset: [0, -8],
            css: {
            fontFamily: 'CartoGothicStdBook',
            padding: '6px 12px',
            color: (isNewStyle ? '#444444' : '#2C566D'),
            fontSize: '.9em',
            backgroundColor: '#FFF0F0',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '2px 2px 10px #E54944'
        }
        });
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


function generateProfNameObject(minervaProfs, origName) {
    const name = origName.trim();
    const splitName = name.split(' ');
    const profName = {
        fullName: name,
        fullNameKey: name.replace(/\W/g, ''),
        firstName: splitName[0],
        lastName: splitName[splitName.length-1],
        minerva: minervaProfs[name]
    };
    const forURL = {
        fullName: profName.fullName.replace(/ /g, '&nbsp').replace(/-/g, '&#8209'),
        firstName: encodeSymbolsWin1252(profName.firstName),
        lastName: encodeSymbolsWin1252(profName.lastName)
    };
    profName.forURL = forURL;

    return profName;
}

