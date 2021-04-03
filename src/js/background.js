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


// if failed to update icon based on storage 'enabled' value, reset 'enabled' in storage to true
chrome.storage.local.get('enabled', function(result) {
	if (!tryUpdateEnabledSetting(result.enabled)) {
		chrome.storage.local.set({'enabled': true});
	}
});

// on changes to storage, update extension icon if enabled setting was changed
chrome.storage.onChanged.addListener(function(changes, areaName) {
	if(areaName === 'local' && 'enabled' in changes) {
		if (!tryUpdateEnabledSetting(changes.enabled.newValue)) {
			chrome.storage.local.set({'enabled': changes.enabled.oldValue});
		}
	}
});

function tryUpdateEnabledSetting(boolEnabledSetting) {
	if (boolEnabledSetting === true || boolEnabledSetting === false) {
		// set extension icon according to enabled setting
		chrome.browserAction.setIcon({path: '/images/mcgill-' + (boolEnabledSetting ? '' : 'disabled-') + '128.png'});
		return true;
	}
	return false;
}

chrome.storage.sync.remove("lecture");