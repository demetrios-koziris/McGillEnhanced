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
    let profsLength = 0;

    let profsFullSource = document.getElementsByClassName("catalog-instructors")[0].innerHTML;

    const loadMessage = "McGill Enhanced is loading ratings!";
    const rmpMessage = "McGill Enhanced is no longer<br>able to integrate with RMP.";


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
                    newProfsHTML += "<span class=\"tooltip " + profName.fullNameKey + "\"  title=\"" + rmpMessage + "\">" + profName.fullName + "</span>";
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

