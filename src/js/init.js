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


var url = window.location.href;

const prodIDs = ['jlacaimkacnkhlcgapgakpklnibgfkde', '{fbd3b601-613b-4747-a92b-4d37b2fd7667}'];
const isPROD = prodIDs.includes(chrome.runtime.id);

let logForDebug = (isPROD ? function(){} : console.log.bind(window.console));
logForDebug('McGill Enhanced Debug mode is ON');


initIfEnabled();


function initIfEnabled() {
	const start = Date.now();
	chrome.storage.local.get('enabled', function(result) {
		const enabledSetting = result.enabled
		if (enabledSetting === false) {
			console.log('McGill Enhanced is currently disabled.');
		}
		else {
			if (enabledSetting === undefined) {
				chrome.storage.local.set({'enabled': true});
			}
			init();
			const time = Date.now() - start;
			logForDebug('McGill Enhanced took ' + time + ' ms to fetch enabled setting.');
		}
	});
}


function init() {

	// run on McGill.ca pages
	if (url.match(/.+(www\.)?mcgill\.ca\/study\/.+/)) {

		const start = Date.now();
		
		// setup global variales used by other js scripts
		courseNameRegex = /([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
		urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
		urlYearW = urlYearF + 1;
		urlYears = urlYearF + '-' + urlYearW;

		sysDate = new Date();
		sysYear = sysDate.getFullYear();
		sysMonth = sysDate.getMonth()+1;
		sysCode = translateToTermCode(sysYear, sysMonth);

		currentTermYear = sysYear;
		currentTermMonth = (sysMonth>=9 ? 9 : (sysMonth>=5 ? 5 : 1));

		lang = (url.match(/\/fr\//) ? 'fr' : 'en');
		termNames = {
			'en': {
				9: 'Fall',
				1: 'Winter',
				5: 'Summer'
			},
			'fr': {
				9: 'Automne',
				1: 'Hiver',
				5: 'Été'
			}
		};
		numYearsInMenu = 10;
		firstYear = Math.max(sysYear-numYearsInMenu+1, 2009);

		courseUrlRegex = /.+study\/.+courses\/[A-za-z0-9]{4}-[0-9]{3}/;

		
		if (url.match(/.+(20[0-9][0-9])-(20[0-9][0-9]).+/)) {
			// run on McGill.ca Calendar pages (mcgill.ca url with year in path) 
			addYearMenu();
		}

		if (url.match(courseUrlRegex)) {
			// run on McGill Course Overview pages:

			urlCourseName = url.match(/courses\/([A-Za-z]{3,4}[0-9]{0,1}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();
			courseSubject = urlCourseName.split('-')[0];
			courseNumber = urlCourseName.split('-')[1];
			courseName = courseSubject + courseNumber;
			courseNameSpaced = courseSubject + ' ' + courseNumber;

			makeProfLinks();
			makeCourseLinks();
			makeSidebarContent();
			addContentSeparators();
			addCourseTitleTooltips();
			applyToolTipsy();
		}
		else {
			// run on McGill Program Overview pages
			programOverview();
		}

		const time = Date.now() - start;
		console.log('McGill Enhanced took ' + time + ' ms to improve this page!');
	}

	// run on VSB pages
	if (url.match(/.+vsb\.mcgill\.ca/)) {
		enhanceVSB();
	}
}

function redirect(message, url) {
	if (message) {
		alert(message);
	}
	window.open(url, '_blank');
}

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function monthAsTwoDigitString(month) {
	return ('0'+month).slice(-2);
}

function translateToTermCode(year, month) {
	return '' + year + monthAsTwoDigitString(month);
}