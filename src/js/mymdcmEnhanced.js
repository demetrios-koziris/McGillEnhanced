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

let devMode = !('update_url' in chrome.runtime.getManifest());
let logForDebug = ( devMode ? console.log.bind(window.console) : function(){} );
logForDebug("McGill Enhanced Debug mode is ON");

logForDebug("Running mymdcmEnhanced.js");

var mymdcmCalendarRequest = 0;

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.action == 'SendIt' && mymdcmCalendarRequest === 0) {
		mymdcmCalendarRequest++;
		logForDebug("Message recieved!");
		logForDebug(JSON.stringify(Date.now()));
		logForDebug(msg.data);
		mymdcmRun(msg.data);
	}
});

function mymdcmRun(request) {
	const row = document.createElement('div');
	row.className = "row";
	row.innerHTML = "<div class='col col-12 '> <div class='t-Region t-Region--scrollBody js-apex-region'> <div class='t-Region-header'> <div class='t-Region-headerItems t-Region-headerItems--title'> <h2 class='t-Region-title' >McGill Enhanced: Export Calendar Feature</h2> </div><div class='t-Region-headerItems t-Region-headerItems--buttons'><span class='js-maximizeButtonContainer'></span></div></div><div class='t-Region-bodyWrap'> <div class='t-Region-buttons t-Region-buttons--top'> <div class='t-Region-buttons-left'></div><div class='t-Region-buttons-right'></div></div><div class='t-Region-body'> <div class='t-Form-fieldContainer rel-col'> <div class='t-Form-labelContainer col col-2'> <label class='t-Form-label'>Date Range</label> </div><div class='t-Form-inputContainer col'> <input type='text' class='u-TF-item--datepicker datepicker' id='mcen-export-cal-start'> </div><div class='t-Form-labelContainer col'> <label class='t-Form-label'>to</label> </div><div class='t-Form-inputContainer col'> <input type='text' class='u-TF-item--datepicker datepicker'id='mcen-export-cal-end'> </div></div><div class='t-Form-fieldContainer rel-col'> <div class='t-Form-labelContainer col col-2'> <label class='t-Form-label'>Export Type</label> </div><div class='t-Form-inputContainer col'> <div class='t-Form-itemWrapper'> <select class='selectlist apex-item-select' id='mcen-export-cal-type'> <option value='all' selected='selected'>Export all course events to one ICS file</option> <option value='split'>Export separate ICS file for each course</option> </select> </div></div></div><br><div class='t-Form-fieldContainer rel-col' style='float: right;'> <button type='button' class='t-Button t-Button--hot col' id='mcen-export-cal'> <span class='t-Button-label'>Export Calendar Events to ICS file</span> </button> <div class='t-Form-labelContainer col'> <label class='t-Form-label'></label> </div><a href='https://digibites.zendesk.com/hc/en-us/articles/200134792-How-do-I-import-ics-ical-csv- fileinto-Google-Calendar-' class='t-Button col'> How to import ICS files into Google Calendar </a> </div></div></div></div></div>";
	document.getElementsByClassName("container")[0].appendChild(row);
	injectScript('$(".datepicker").datepicker({dateFormat: "mm/dd/yy"});$(".datepicker").datepicker("setDate", new Date())');
	document.getElementById('mcen-export-cal').setAttribute('onclick', 'document.dispatchEvent(new Event("mcenExportCalendar"));');

	document.addEventListener('mcenExportCalendar', function(data) {
		logForDebug('mcenExportCalendar');
		logForDebug(data);

		const reqData = request.requestBody.formData;
		const exportParams = {
			type: document.getElementById('mcen-export-cal-type').selectedIndex,
			start: document.getElementById('mcen-export-cal-start').value,
			end: document.getElementById('mcen-export-cal-end').value
		};
		const startDate = new Date(exportParams.start);
		const endDate = new Date(exportParams.end);
		endDate.setDate(endDate.getDate() + 1);

		reqData.x02 = startDate.toISOString().slice(0,10).replace(/-/g,"");
		reqData.x03 = endDate.toISOString().slice(0,10).replace(/-/g,"");
		const reqParams = jQuery.param(reqData).replace(/%5B%5D/g,'');
		const reqURL = 'https://mymdcm.medicine.mcgill.ca/ords/wwv_flow.ajax?' + reqParams;
		logForDebug(reqURL);

		getCalendarJSON(reqURL, exportParams);
	});
}


function injectScript(code) {
	const script = document.createElement('script');
	script.innerText = code;
	(document.body || document.head).appendChild(script);
}


function getCalendarJSON(reqURL, exportParams) {
	const xmlRequestInfo = {
		method: 'GET',
		action: 'xhttp',
		url: reqURL,
	};
	chrome.runtime.sendMessage(xmlRequestInfo, generateGetCalendarJSONCallback(reqURL, exportParams));
}


function generateGetCalendarJSONCallback(reqURL, exportParams) {
	return function(data) {
		const eventsData = JSON.parse(data.responseXML);
		logForDebug(eventsData);

		if (exportParams.type === 0) {
			let eventsICS = ics();
			for (let i = 0; i < eventsData.length; i++) {
				let eventInfo = eventsData[i].title.match(/\>[^<>]+/g).map(function(e){return e.slice(1);});
				eventsICS.addEvent(eventInfo[0], eventInfo[1], eventInfo[2], eventsData[i].start, eventsData[i].end);
			}
			logForDebug(eventsICS);
			eventsICS.download("myMDCM_Calendar_"+document.getElementById('mcen-export-cal-start').value+"_to_"+document.getElementById('mcen-export-cal-end').value+"_All");
		}
		else {
			let eventsICS = {};
			for (let i = 0; i < eventsData.length; i++) {
				let eventInfo = eventsData[i].title.match(/\>[^<>]+/g).map(function(e){return e.slice(1);});
				const eventCourse = eventInfo[0].split('-')[0].replace(/\s/g,'');
				if (!(eventCourse in eventsICS)) {
					eventsICS[eventCourse] = ics();
				}
				eventsICS[eventCourse].addEvent(eventInfo[0], eventInfo[1], eventInfo[2], eventsData[i].start, eventsData[i].end);
			}
			logForDebug(eventsICS);
			for (var course in eventsICS) {
				eventsICS[course].download("myMDCM_Calendar_"+document.getElementById('mcen-export-cal-start').value+"_to_"+document.getElementById('mcen-export-cal-end').value+"_"+course);
			}
		}
	};
}
