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

const prodIDs = ['jlacaimkacnkhlcgapgakpklnibgfkde', '{fbd3b601-613b-4747-a92b-4d37b2fd7667}'];
const intIDs = ['fmjglinhknddndjfblbjoinijenppenk', 'fdjidmiaclmoakbolclpiefedoiodinf', '{1510757c-cb05-47b4-b47a-fe08a0866f71}'];
const mcenFirefoxAddonURL = 'https://addons.mozilla.org/en-US/firefox/addon/mcgillenhanced/';

const isPROD = prodIDs.includes(chrome.runtime.id);
const isINT = intIDs.includes(chrome.runtime.id);
const isFirefox = chrome.runtime.id.startsWith('{');

const versionString = chrome.runtime.getManifest().version + (isPROD ? '' : (isINT ? ' INT' : ' DEV') + ' (' + chrome.runtime.id.substring(0, 6) + ')');


if (isFirefox) {
	document.getElementById('rateLink').href = mcenFirefoxAddonURL;
}

document.getElementById('version').innerText += 'McGill Enhanced Version ' + versionString;


const enabledSwitch = document.getElementById('enabledSwitch');
initializeEnabledSwitch();
enabledSwitch.addEventListener('click', updateEnabledSetting);

function updateEnabledSetting() {
	updateEnabledSwitchLabel(enabledSwitch.checked);
	chrome.storage.local.set({'enabled':enabledSwitch.checked});
}

function updateEnabledSwitchLabel(enabledSetting) {
	document.getElementById('enabledLabel').innerText = (enabledSetting ? 'Enabled' : 'Disabled');
}

function initializeEnabledSwitch() {
	chrome.storage.local.get('enabled', function(result) {
		enabledSwitch.checked = result.enabled;
		updateEnabledSwitchLabel(result.enabled);
	});
}


const downloadLecButton = document.getElementById('downloadLec');
initializeDownloadLecButton();
downloadLecButton.addEventListener('click', downloadLastViewedLectureRecording);

// Functionality for download lecture button.
// Gets the url from storage and prompts a download.
function downloadLastViewedLectureRecording() {
	let lectureURL = '';
	chrome.storage.sync.get('lecture', function(result) {
		if (!result.lecture) { // The download will not happen if the link is empty.
			initializeDownloadLecButton();
			return;
		}
		lectureURL = result.lecture;
	});
	// permissions.request call cannot be nested within the above storage.sync callback
	// because firefox requires it to be called directly from a user input handler (e.g. click event)
	chrome.permissions.request({permissions:['downloads']}, function(granted) {
		if (granted) {
			chrome.downloads.download({
				url: lectureURL,
				filename: genLectureRecordingDownloadName(lectureURL),
				saveAs: true
			});
		} 
		else {
			alert('Lecture recording download cannot proceed because permission not granted.');
		}
	});
}

function genLectureRecordingDownloadName(recordingURL) {
	const etime = new URLSearchParams(recordingURL).get('etime');
	return 'lecture-recording-viewed-' + etime +'.mp4';
}

function initializeDownloadLecButton() {
	chrome.storage.sync.get('lecture', function(result) {
		if (result.lecture) {
			downloadLec.removeAttribute('disabled');
			downloadLec.title = 'Download ' + genLectureRecordingDownloadName(result.lecture);
		}
		else {
			downloadLec.setAttribute('disabled', '');
			downloadLec.title = 'No viewed lecture recording found.';
		}
	});
}
