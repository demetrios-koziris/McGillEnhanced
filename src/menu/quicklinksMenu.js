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


let isDevVersion = !('update_url' in chrome.runtime.getManifest());
document.getElementById('version').innerText = 'Version ' + chrome.app.getDetails().version + (isDevVersion ? ' DEV' : '');


let simvoHideBtn = document.getElementById('simvo-hide-btn')
if (simvoHideBtn) {
	simvoHideBtn.addEventListener('click', toggleSimvoHide);
}

let simvoShowBtn = document.getElementById('simvo-show-btn')
if (simvoShowBtn) {
	simvoShowBtn.addEventListener('click', toggleSimvoShow);
}

function toggleSimvoHide() {
	chrome.browserAction.setPopup({popup: "menu/quicklinksMenu.html"});
	window.location.href="quicklinksMenu.html";
}

function toggleSimvoShow() {
	chrome.browserAction.setPopup({popup: "menu/quicklinksMenuSimvo.html"});
	window.location.href="quicklinksMenuSimvo.html";
}