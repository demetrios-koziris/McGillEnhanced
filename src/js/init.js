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

window.debugMode = false;
logForDebug("McGill Enhanced Debug mode is ON");

// run on McGill.ca pages
if (url.match(/.+www\.mcgill\.ca\/study\/.+/)) {

	const start = Date.now();
	
	// setup global variales used by other js scripts
	var courseNameRegex = /([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
	var urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
	var urlYearW = urlYearF + 1;
	var urlYears = urlYearF + "-" + urlYearW;
	var sysDate = new Date();
	var sysYear = sysDate.getFullYear();
	var sysMonth = sysDate.getMonth();
	var lang = (url.match(/\/fr\//) ? 'fr' : 'en');
	var termNames = {
			'en': {
				9: 'Fall',
				1: 'Winter',
				5: 'Summer'
			},
			'fr': {
				9: 'Automne',
				1: 'Hiver',
				5: 'Été'
			},
		};
	
	if (url.match(/.+(20[0-9][0-9])-(20[0-9][0-9]).+/)) {
		// run on McGill.ca pages with year in path 
		addYearMenu();
	}

	if (url.match(/.+study.+courses.+[-]+/)) {
		// run on McGill Course Overview pages:
		makeProfLinks();
		makeCourseLinks();
		makeSidebarContent();
	}
	else {
		// run on McGill Program Overview pages
		programOverview();
	}

	const time = Date.now() - start;
	console.log("McGill Enhanced took " + time + " ms to improve this page!");
}

// run on VSB pages
if (url.match(/.+vsb\.mcgill\.ca/)) {
	enhanceVSB();
}

// run on Minerva Course Schedule by Course Name page
if (url.match(/.+horizon\.mcgill\.ca\/pban1\/bwskfshd\.P_CrseSchdDetl/) || url.match(/mymcgill\.mcgill\.ca\/portal\/page\/portal\/myMcGill\/MINERVA_TAB/)) {
	insertScheduleDownloader();
}


/** 
 * Print to console when debugMode is set to true
 * @param toLog: String literal to print
 */
function logForDebug(toLog) {
	if (debugMode) {
		console.log(toLog);
	}
}
