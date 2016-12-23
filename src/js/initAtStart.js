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

if (url.match(/.+www\.mcgill\.ca\/study\/.+/)) {

	if (url.match(/.+(20[0-9][0-9])-(20[0-9][0-9]).+/)) {
		injectCSS("css/yearMenu.css");
	}

	if (url.match(/.+study.+courses.+[-]+/)) {
		injectCSS("css/sidebar.css");
		injectCSS("css/profLinks.css");
	}
}

function injectCSS(srcName) {
	var css = document.createElement('link');
	css.rel = "stylesheet";
	css.type = "text/css";
	css.href = chrome.extension.getURL(srcName);
	(document.head || document.documentElement).appendChild(css);
}