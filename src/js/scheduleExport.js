/*
McGill Enhanced is a chrome extension that improves the functionality and navigability of McGill.ca
Copyright (C) 2016 Demetrios Koziris

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the GNU General Public License for more details.

A copy of the GNU General Public License is provided in the LICENSE.txt file along with this program.	
The GNU General Public License can also be found at <http://www.gnu.org/licenses/>.
*/

//jshint esversion: 6


setupScheduleExporter();


function setupScheduleExporter() {
	if (!(document.getElementById('term_id'))) {

		const schedDownloadDiv = document.createElement('div');

		const schedDownloadButton = document.createElement('button');
		schedDownloadButton.setAttribute('type', 'button');
		schedDownloadButton.setAttribute('onclick', 'document.dispatchEvent(new Event("mcenExportSchedule"));');
		schedDownloadButton.id = 'mcen-sched-download';
		schedDownloadButton.innerHTML = 'McGill Enhanced:<br>Export Course Schedule as ICS file!';
		schedDownloadButton.title = 'ICS file can be imported into many calendar apps\nsuch as Google Calendar, Apple iCal, or Outlook!';
		schedDownloadButton.setAttribute('onmouseover', 'this.style.border="2px solid #E54944"');
		schedDownloadButton.setAttribute('onmouseout', 'this.style.border="2px solid #5B5B5A"');
		schedDownloadDiv.appendChild(schedDownloadButton);

		const pagebodydiv = document.getElementsByClassName('pagebodydiv')[0];
		pagebodydiv.insertBefore(schedDownloadDiv, pagebodydiv.firstChild);

		document.addEventListener('mcenExportSchedule', function() {
			logForDebug('Received mcenExportSchedule event');
			exportSchedule();
		});

	}
}


function validTimeAndDateRange(schedTime, schedDateRange) {
	if (schedTime.length !== 2 || schedDateRange.length !== 2) {
		return false;
	}
	const eventStart = schedDateRange[0] + ' ' + schedTime[0];
	const eventStop = schedDateRange[0] + ' ' + schedTime[1];
	return (!isNaN(Date.parse(schedDateRange[1])) && !isNaN(Date.parse(eventStart)) && !isNaN(Date.parse(eventStop)));
}

function validDays(schedDays, daySymbolTranslation) {
	if (schedDays.length === 0) {
		return false;
	}
	return schedDays.every((day) => day in daySymbolTranslation);
}

function exportSchedule() {

	const mapData = getMapData();
	const daySymbolTranslation = {
		'U': 'SU',
		'M': 'MO',
		'T': 'TU',
		'W': 'WE',
		'R': 'TH',
		'F': 'FR',
		'S': 'SA'
	};

	const manifest = chrome.runtime.getManifest();
	const icsExportPRODID = manifest.name.replace(' ', '') + '-' + manifest.version + '-' + chrome.runtime.id;
	const calCourseSchedule = ics(uuid(), icsExportPRODID);

	const courseTables = document.getElementsByClassName('datadisplaytable');
	let courseTerm = '';

	for (let i = 0; i < courseTables.length-1; ) {

		if (courseTables[i+1].getElementsByClassName('captiontext')[0].innerText === 'Scheduled Meeting Times') {

			const courseInfoTableTitle = courseTables[i].getElementsByClassName('captiontext')[0].innerText.split(/\s-\s(.+)/);
			const courseTitle = courseInfoTableTitle[0];
			const courseName = courseInfoTableTitle[1].replace(/\s/g,'');

			const courseInfoTable = courseTables[i].getElementsByClassName('dddefault');
			courseTerm = courseInfoTable[0].innerText.replace(/\s/g,'');

			const courseSchedTable = courseTables[i+1].getElementsByClassName('dddefault');

			for (let j = 0; j < courseSchedTable.length; j+=6) {
				
				const schedTime = courseSchedTable[j+0].innerText.split(' - ');
				const schedDays = courseSchedTable[j+1].innerText.trim().split('');
				const schedLocation = courseSchedTable[j+2].innerText.split(/\s(?!.+\s)/);
				const schedDateRange = courseSchedTable[j+3].innerText.split(' - ');
				const schedType = courseSchedTable[j+4].innerText;

				if (validTimeAndDateRange(schedTime, schedDateRange) && validDays(schedDays, daySymbolTranslation)) {

					const eventDays = schedDays.map((day) => daySymbolTranslation[day]);
					const eventStartDate = new Date(schedDateRange[0]);
					const eventDaySymbols = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
					while (!eventDays.includes(eventDaySymbols[eventStartDate.getDay()])) {
						eventStartDate.setDate(eventStartDate.getDate() + 1);
					}
					const eventStartDateValues = eventStartDate.toUTCString().split(' ');
					const eventStartDateString = eventStartDateValues[2] + ' ' + eventStartDateValues[1] + ' ' + eventStartDateValues[3];
					const eventStart = eventStartDateString + ' ' + schedTime[0];
					const eventEnd = eventStartDateString + ' ' + schedTime[1];

					const locationBuilding = schedLocation[0];
					const locationRoom = schedLocation[1];
					const locationMapData = mapData[locationBuilding];

					let eventName = courseName + ' ' + schedType.slice(0,3).toUpperCase();
					if (locationMapData) {
						eventName += ' (' + locationMapData.minerva + ' ' + locationRoom + ')';
					}

					let eventDesc = courseTitle + '\\n' + schedType + ' in ' + locationBuilding + ' ' + locationRoom;
					if (locationMapData) {
						const mapIDs = locationMapData.map;
						for (let m = 0; m < mapIDs.length; m++) {
							eventDesc += '\\n' + 'http://maps.mcgill.ca/?campus=DWT&txt=EN&id=' + mapIDs[m];
						}		
					}

					let eventLocation = locationBuilding + ' ' + locationRoom;
					if (locationMapData) {
						eventLocation = locationBuilding + ' ' + locationMapData.address;	
					}

					const rrule = {
						freq: 'WEEKLY',
						until: schedDateRange[1],
						interval: 1,
						byday: eventDays
					};

					calCourseSchedule.addEvent(eventName, eventDesc, eventLocation, eventStart, eventEnd, rrule);
					
				}
				else {
					alert('A Scheduled Meeting Time for ' + courseName + ' contains invalid Time, Day, or Date Range data and cannot be included in the calendar export!');
				}
	
			}
			i+=2;
		}
		else {
			i++;
		}
	}

	if (courseTables.length > 0) {
		calCourseSchedule.download('CourseSchedule' + courseTerm);
	}
	else {
		alert('McGill Enhanced did not find any course events to export.');
	}
	
}

