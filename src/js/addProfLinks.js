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


/** 
 * Print to console when debugMode is set to true
 * @param toLog: String literal to print
 */
function makeProfLinks() {

	const pageTitle = document.getElementById('page-title');
	const mainColumn =  document.getElementById('main-column');
	mainColumn.insertBefore(pageTitle, mainColumn.firstChild);
	const topContent = document.getElementById('top-content');
	if (topContent.children.length > 0) {
		topContent.className += ' mcen-top-content';
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
	const mercuryProfs = getMercuryData();
	let profsLength = 0;

	const profsFullSourceElem = document.getElementsByClassName("catalog-instructors")[0];
	let profsFullSource = profsFullSourceElem.innerHTML;

	const loadMessage = "McGill Enhanced is loading ratings!";
	const profHoverMessage = "McGill Enhanced is no longer able to display ratings here.<br>Please click this link to view courses taught by this prof.";
	const profLinkMessage = 'View other courses<br>taught by this instructor';
	const googleLinkMessage = 'View Google query for<br>instructor reviews';
	const mercuryLinkMessage = 'View Mercury query for this instructor name<br>Must already be signed into Minerva!';
	const mercuryLinkMessageError = 'No instructor found in<br>Mercury with this name!';

	if (!profsFullSource.match(/There are no professors/)) {

		if (profsFullSource.match(inst[lang])) {
			profsFullSource = profsFullSource.split(inst[lang])[1];
		}
		else {
			// this is necessary because some french pages use the english language for 'Instructors:'
			profsFullSource = profsFullSource.split(inst.en)[1];
		}

		for (let termKey in terms) {
			const profsTermSource = profsFullSource.split("(" + termKey + ")");
			if (profsTermSource.length > 1) {
				profsForTerm = profsTermSource[0].split(",");

				for (let p=0; p<profsForTerm.length; p++) {

					let newProfObject = generateProfObject(mercuryProfs, profsForTerm[p], termKey);
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

		// const profSectionTitle = document.createElement('div');
		// profSectionTitle.innerHTML = '<b>' + inst[lang] + '</b>';
		// profSection.appendChild(profSectionTitle);

		for (let profKey in profs) {

			const prof = profs[profKey];

			const profDiv = document.createElement('div');
			profDiv.className = 'mcen-profDiv';
			profSection.appendChild(profDiv);

			googleLink = generateProfLinkButton(prof.urlGoogle, googleLinkMessage, 'Google');
			profDiv.appendChild(googleLink);

			mercuryLink = generateProfLinkButton(prof.urlMercury, mercuryLinkMessage, 'Mercury');
			profDiv.appendChild(mercuryLink);

			if (prof.minervaID === undefined) {
				mercuryLink.firstElementChild.className = 'tooltipError mcen-profLinkButton mcen-mercuryLinkButton not-active';
				mercuryLink.firstElementChild.title = mercuryLinkMessageError;
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

			const profBullet = document.createElement('span');
			profBullet.className = 'mcen-class-ave-prof-marker';
			profBullet.innerHTML = '&bull;';
			const profTermsTeaching = prof.termsTeaching;
			for (let term in profTermsTeaching) {
				profBullet.className += ' mcen-class-ave-prof-marker-' + profTermsTeaching[term].code;
			}
			profDiv.appendChild(profBullet);

			const profLink = document.createElement('a');
			profLink.href = prof.urlCourses;
			profLink.className = 'tooltip mcen-profLink ' + prof.key;
			profLink.title = profLinkMessage;
			profLink.innerText = prof.name.full;
			profDiv.appendChild(profLink);
		}

		document.getElementsByClassName("catalog-instructors")[0].innerHTML = "";
		profsFullSourceElem.appendChild(profSection);
	}
}

function generateProfLinkButton(url, message, className) {

	const link = document.createElement('a');
	link.setAttribute('onmouseover', 'this.parentNode.lastChild.style.fontWeight="bold"');
	link.setAttribute('onmouseout', 'this.parentNode.lastChild.style.fontWeight="inherit"');
	link.href = url;

	const linkButton = document.createElement('button');
	linkButton.className = 'tooltip mcen-profLinkButton mcen-' + className.toLowerCase() + 'LinkButton ';
	linkButton.title = message;
	linkButton.innerText = className;
	link.appendChild(linkButton);

	return link;
}

function generateProfObject(mercuryProfs, origName, termKey) {

	const name = origName.trim();
	const splitName = name.split(' ');
	const profName = {
		full: name,
		first: splitName[0],
		last: splitName[splitName.length-1]
	};
	const minervaID = mercuryProfs[CryptoJS.MD5(name)];
	const prof = {
		key: name.replace(/\W/g, ''),
		name: profName,
		minervaID: minervaID,
		termsTeaching: {},
		urlCourses: encodeURI('https://www.mcgill.ca/study/' + urlYears + '/courses/search?search_api_views_fulltext="' + profName.full + '"'),
		urlGoogle: encodeURI('https://www.google.ca/search?q="rate"+"mcgill"+' + profName.first + '+' + profName.last),
		urlMercury: encodeURI('https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form' + (minervaID !== undefined ? '?form_mode=ar&inst_tab_in='+minervaID : ''))
	};
	return prof;
}

