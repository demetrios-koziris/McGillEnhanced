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


chrome.runtime.onInstalled.addListener(function (details) {

	let currentVersion = chrome.runtime.getManifest().version;

	if (details.reason === "install") {
		chrome.tabs.create({url: "https://demetrios-koziris.github.io/McGillEnhanced/supportme"}, function (tab) {
			console.log("Installed McGill Enhanced v" + currentVersion);
	        console.log("New tab launched with https://demetrios-koziris.github.io/McGillEnhanced/supportme");
	    });
	}
	else if (details.reason === "update") {
		let previousVersion = details.previousVersion;
		console.log("Updated McGill Enhanced from v" + previousVersion + " to v" + currentVersion);
	}
	
});