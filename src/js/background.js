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

	if (details.reason === 'install') {
		console.log('Installed McGill Enhanced version ' + currentVersion);
		chrome.tabs.create({url: 'https://demetrios-koziris.github.io/McGillEnhanced/landing'}, function (tab) {
			console.log('New tab launched with https://demetrios-koziris.github.io/McGillEnhanced');
		});
	}
	else if (details.reason === 'update') {
		let previousVersion = details.previousVersion;
		console.log('Updated McGill Enhanced from version ' + previousVersion + ' to version ' + currentVersion);
		// chrome.tabs.create({url: 'https://demetrios-koziris.github.io/McGillEnhanced/3.0.32'}, function (tab) {
		// 	console.log('New tab launched with https://demetrios-koziris.github.io/McGillEnhanced/3.0.32');
		// });
	}
	
	chrome.runtime.onUpdateAvailable.addListener(function(details) {
		console.log('Ready to update to version ' + details.version);
		chrome.runtime.reload();
	});
});


// If default popup not set in manifest, clicking the extension icon will load the following page
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url': 'https://demetrios-koziris.github.io/McGillEnhanced/', 'selected': true});
});


// if enabled setting not in storage, create it and set to true
chrome.storage.local.get('enabled', function(result) {
	const enabledSetting = result.enabled;
	if (enabledSetting === undefined) {
		chrome.storage.local.set({'enabled': true});
	}
	else {
		setIcon(result.enabled);
	}
});

// on changes to storage, update extension icon if enabled setting was changed
chrome.storage.onChanged.addListener(function(changes, areaName) {
	for(let key in changes) {
		if(key === 'enabled') {
			const enabledSetting = changes[key].newValue;
			setIcon(enabledSetting);
		}
	}
});

// set extension icon according to enabled setting
function setIcon(enabledSetting) {
	chrome.browserAction.setIcon({path: '/icons/mcgill-' + (enabledSetting ? '' : 'disabled-') + '128.png'});
}


/* Script to detect network requests matching *://*.campus.mcgill.ca/api/tsmedia*.
   The url captured contains the lecture recording download link.
   Every mcgill lecture recording download link starts with pcdn (pcdn01, pcdn02, ...)
*/
chrome.webRequest.onCompleted.addListener(
	function(details) {
		if (new URL(details.url).hostname.startsWith('pcdn')) {
			chrome.storage.sync.get('lecture', function(result) {
				if (details.url !== result.lecture) {
					chrome.storage.sync.set({lecture: details.url}, function() {
						console.log('New lecture recording url saved.');
					});
				}
			});
		}
	}, 
	{ urls: ['*://*.campus.mcgill.ca/api/tsmedia*'] }
);