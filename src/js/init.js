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


const url = window.location.href;

window.debugMode = false;
logForDebug("McGill Enhanced Debug mode is ON");

if (url.match(/.+www\.mcgill\.ca\/study\/.+/)) {

	const start = Date.now();
	
	const courseNameRegex = /([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
	isNewStyle = document.getElementsByClassName("transition").length > 0;
	urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
	urlYearW = urlYearF+1;
	urlYears = urlYearF + "-" + urlYearW;
	sysYear = new Date().getFullYear();
	sysMonth = new Date().getMonth();

	if (url.match(/.+(20[0-9][0-9])-(20[0-9][0-9]).+/)) {
		injectCSS("css/yearMenu.css");
		addYearMenu();
	}

	if (url.match(/.+study.+courses.+[-]+/)) {
		injectCSS("css/sidebar.css");
		makeProfRatingsTooltips();
		makeCourseLinks(courseNameRegex);
		makeSidebarContent();
	}
	else {
		programOverview(courseNameRegex);
	}

	const time = Date.now() - start;
	console.log("McGill Enhanced took " + time + " ms to improve this page!");
}

if (url.match(/.+vsb\.mcgill\.ca/)) {
	enhanceVSB();
}

if (url.match(/.+horizon\.mcgill\.ca\/pban1\/bwskfshd\.P_CrseSchdDetl/) || url.match(/mymcgill\.mcgill\.ca\/portal\/page\/portal\/myMcGill\/MINERVA_TAB/)) {
	insertScheduleDownloader();
}


function logForDebug(toLog) {
	if (debugMode) {
		console.log(toLog);
	}
}

function injectCSS(srcName) {
	var css = document.createElement('link');
	css.rel = "stylesheet";
	css.type = "text/css"
	css.href = chrome.extension.getURL(srcName);
	(document.head || document.documentElement).appendChild(css);
}