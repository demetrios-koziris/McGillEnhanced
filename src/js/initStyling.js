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


function initStyling() {

	if (url.match(/.+(www\.)?mcgill\.ca\/study\/.+/)) {
		// run on McGill.ca pages

		if (url.match(/.+(20[0-9][0-9])-(20[0-9][0-9]).+/)) {
			// inject CSS for yearMenu
			injectCSS('css/yearMenu.css');
			injectCSS('css/programs.css');
		}

		if (url.match(/.+study.+courses.+[-]+/)) {
			// inject CSS for sidebar and profLinks
			injectCSS('css/sidebar.css');
			injectCSS('css/profLinks.css');
			injectCSS('css/aveCrowdsource.css');
		}
	}

	if (url.match(/.+vsb\.mcgill\.ca/)) {
		// inject CSS for vsb enhanced
		injectCSS('css/vsb.css');
	}

	if (url.match(/.+horizon\.mcgill\.ca\/pban1\/bwskfshd\.P_CrseSchdDetl/) || url.match(/mymcgill\.mcgill\.ca\/portal\/page\/portal\/myMcGill\/MINERVA_TAB/)) {
		// inject CSS for minerva sched downloader
		injectCSS('css/minerva.css');
	}
}


/** 
 * Inject CSS scripts into current page
 * @param srcName: CSS source file path
 */
function injectCSS(srcName) {
	var css = document.createElement('link');
	css.rel = 'stylesheet';
	css.type = 'text/css';
	css.href = chrome.runtime.getURL(srcName);
	(document.head || document.documentElement).appendChild(css);
}