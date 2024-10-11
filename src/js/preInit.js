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

const prodIDs = ['jlacaimkacnkhlcgapgakpklnibgfkde', '{fbd3b601-613b-4747-a92b-4d37b2fd7667}'];
const isPROD = prodIDs.includes(chrome.runtime.id);

let logForDebug = (isPROD ? function(){} : console.log.bind(window.console));
logForDebug('McGill Enhanced Debug mode is ON');


const start = Date.now();
getStorageValue('enabled')
	.then(enabledSetting => {
		const time = Date.now() - start;
		logForDebug('McGill Enhanced took ' + time + ' ms to fetch enabled setting.');
		
		if (enabledSetting === false) {
			console.log('McGill Enhanced is currently disabled.');
		}
		else {
			if (enabledSetting === undefined) {
				chrome.storage.local.set({'enabled': true});
			}
			initStyling();
		}
	})
	.catch(error => {
		console.error('Error fetching storage value:', error);
	});


function getStorageValue(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, function(result) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result[key]);
            }
        });
    });
}
