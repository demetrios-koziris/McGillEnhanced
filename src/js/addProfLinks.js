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

    if (isNewStyle) {
        const pageTitle = document.getElementById('page-title');
        const mainColumn =  document.getElementById('main-column');
        mainColumn.insertBefore(pageTitle, mainColumn.firstChild);
    }

    terms = {
        'Fall': {
            'code': 9,
            'year': urlYearF
        },
        'Winter': {
            'code': 1,
            'year': urlYearW
        },
        'Summer': {
            'code': 5,
            'year': urlYearW
        }
    };
    inst = {
        'en': 'Instructors:',
        'fr': 'Chargés de cours :'
    };
    profs = {};
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

        if (profsFullSource.match(inst[lang])) {
            profsFullSource = profsFullSource.split(inst[lang])[1];
        }
        else {
            // this is necessary because some french pages use the english language for 'Instructors:'
            profsFullSource = profsFullSource.split(inst.en)[1];
        }

        for (let termKey in terms) {
            termName = ( isNewStyle ? termKey : termNames[lang][terms[termKey].code] );
            const profsTermSource = profsFullSource.split("(" + termName + ")");
            if (profsTermSource.length > 1) {
                profsForTerm = profsTermSource[0].split(",");

                for (let p=0; p<profsForTerm.length; p++) {

                    let newProfObject = generateProfObject(minervaProfs, profsForTerm[p], termKey);
                    if (!(newProfObject.key in profs)) {
                        profs[newProfObject.key] = newProfObject;
                    }
                    // add term info to prof object
                    profs[newProfObject.key].termsTeaching[termKey] = terms[termKey];
                }
                profsFullSource = profsTermSource[1];
            }
        }

        const profSection = document.createElement('div');

        const profSectionTitle = document.createElement('div');
        profSectionTitle.innerHTML = '<b>' + inst[lang] + '</b>';
        profSection.appendChild(profSectionTitle);

        for (let profKey in profs) {

            prof = profs[profKey];

            const profDiv = document.createElement('div');
            profDiv.className = 'mcen-profDiv';
            profSection.appendChild(profDiv);

            const googleLink = document.createElement('a');
            googleLink.href = prof.urlGoogle;
            profDiv.appendChild(googleLink);

            const googleLinkButton = document.createElement('button');
            googleLinkButton.className = 'tooltip mcen-profLinkButton mcen-googleLinkButton';
            googleLinkButton.title = googleLinkMessage;
            googleLinkButton.innerText = 'Google';
            googleLink.appendChild(googleLinkButton);

            const mercuryLink = document.createElement('a');
            mercuryLink.href = prof.urlMercury;
            profDiv.appendChild(mercuryLink);

            const mercuryLinkButton = document.createElement('button');
            mercuryLinkButton.className = 'tooltip mcen-profLinkButton mcen-mercuryLinkButton';
            mercuryLinkButton.title = mercuryLinkMessage;
            mercuryLinkButton.innerText = 'Mercury';
            mercuryLink.appendChild(mercuryLinkButton);

            if (!(prof.name.full in minervaProfs)) {
                mercuryLinkButton.className = 'tooltipError mcen-profLinkButton mcen-mercuryLinkButton not-active';
                mercuryLinkButton.title = mercuryLinkMessageError;
                mercuryLink.href = 'https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form';
            }

            const termSection = document.createElement('div');
            termSection.className = 'mcen-termSection';
            profDiv.appendChild(termSection);

            for (let termKey in terms) {

                const termDiv = document.createElement('div');
                termDiv.className = 'mcen-termDiv';
                termSection.appendChild(termDiv);

                const termImg = document.createElement('img');
                termImg.className = 'mcen-termImg';
                termImg.src = chrome.extension.getURL('icons/empty-15.png');
                termDiv.appendChild(termImg);

                if (termKey in prof.termsTeaching) {
                    termInfo = prof.termsTeaching[termKey];
                    termDiv.title = termNames[lang][termInfo.code] + ' ' + termInfo.year;
                    termDiv.className += ' tooltip';
                    termImg.src = 'https://www.mcgill.ca/ece/sites/all/modules/mcgill/courses/' + termKey.toLowerCase() + '.gif';
                } 
            }

            const profLink = document.createElement('a');
            profLink.href = prof.urlCourses;
            profLink.className = 'tooltip mcen-profLink ' + prof.key;
            profLink.title = profLinkMessage;
            profLink.innerText = prof.name.full;
            profDiv.appendChild(profLink);
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
                fontSize: '.8em',
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
                fontSize: '.8em',
                backgroundColor: '#FFF0F0',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '2px 2px 10px #E54944'
            }
        });
    }
}


function generateProfObject(minervaProfs, origName, termKey) {
    const name = origName.trim();
    const splitName = name.split(' ');
    const profName = {
        full: name,
        first: splitName[0],
        last: splitName[splitName.length-1]
    };
    const prof = {
        key: name.replace(/\W/g, ''),
        termsTeaching: {},
        minerva: minervaProfs[name],
        name: profName,
        urlCourses: 'https://www.mcgill.ca/study/' + urlYears + '/courses/search' + (isNewStyle ? '?search_api_views_fulltext=' : '/') + profName.full,
        urlGoogle: 'https://www.google.ca/search?q="rate"+"mcgill"+' + profName.first + '+' + profName.last,
        urlMercury: 'https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form?form_mode=ar&inst_tab_in=' + minervaProfs[profName.full]
    };
    return prof;
}
