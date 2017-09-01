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
		console.log("Message recieved!");
		console.log(JSON.stringify(Date.now()));
		console.log(msg.data);
		mymdcmRun(msg.data);
	}
});

function mymdcmRun(request) {
	console.log("Ready");

	const row = document.createElement('div');
	row.className = "row";
	row.innerHTML = "<div class='col col-12 '> <div class='t-Region t-Region--scrollBody js-apex-region'> <div class='t-Region-header'> <div class='t-Region-headerItems t-Region-headerItems--title'> <h2 class='t-Region-title' >McGill Enhanced: Export Calendar Feature</h2> </div><div class='t-Region-headerItems t-Region-headerItems--buttons'><span class='js-maximizeButtonContainer'></span></div></div><div class='t-Region-bodyWrap'> <div class='t-Region-buttons t-Region-buttons--top'> <div class='t-Region-buttons-left'></div><div class='t-Region-buttons-right'></div></div><div class='t-Region-body'> <div class='t-Form-labelContainer col' style='min-width: 80px;'> <label class='t-Form-label'>Start Date</label> </div><div class='t-Form-inputContainer col col-1' style='min-width: 100px;'> <input type='text' class='u-TF-item--datepicker datepicker' id='mcen-export-cal-start'> </div><div class='t-Form-labelContainer col' style='min-width: 80px;'> <label class='t-Form-label'>End Date</label> </div><div class='t-Form-inputContainer col col-1' style='min-width: 100px;'> <input type='text' class='u-TF-item--datepicker datepicker'id='mcen-export-cal-end'> </div><div class='t-Form-labelContainer col col-1'> <label class='t-Form-label'></label> </div><button type='button' class='t-Button t-Button--hot col col-2' id='mcen-export-cal' style='min-width: 120px;'> <span class='t-Button-label'>Export Calendar</span> </button> <div class='t-Form-labelContainer col'> <label class='t-Form-label'></label> </div><a href='https://digibites.zendesk.com/hc/en-us/articles/200134792-How-do-I-import-ics-ical-csv-files-into-Google-Calendar-'><button type='button' class='t-Button td-align-right col col-3' style='min-width: 260px;'> <span class='t-Button-label'> How to import ICS files into google calendar </span> </button></a> </div></div></div></div>";
	document.getElementsByClassName("container")[0].appendChild(row);
	injectScript('$(".datepicker").datepicker({dateFormat: "mm/dd/yy"});$(".datepicker").datepicker("setDate", new Date())');
	document.getElementById('mcen-export-cal').setAttribute('onclick', 'document.dispatchEvent(new Event("mcenExportCalendar"));');

	document.addEventListener('mcenExportCalendar', function(data) {
		console.log('mcenExportCalendar');
		console.log(data);

		const reqData = request.requestBody.formData;
		const startDate = new Date(document.getElementById('mcen-export-cal-start').value);
		const endDate = new Date(document.getElementById('mcen-export-cal-end').value);
		endDate.setDate(endDate.getDate() + 1);

		reqData.x02 = startDate.toISOString().slice(0,10).replace(/-/g,"");
		reqData.x03 = endDate.toISOString().slice(0,10).replace(/-/g,"");
		const reqParams = jQuery.param(reqData).replace(/%5B%5D/g,'');
		const reqURL = 'https://mymdcm.medicine.mcgill.ca/ords/wwv_flow.ajax?' + reqParams;
		console.log(reqURL);

		getCalendarJSON(reqURL);

	});

}

function injectScript(code) {
	const script = document.createElement('script');
	script.innerText = code;
	(document.body || document.head).appendChild(script);
}


function getCalendarJSON(reqURL) {
    const xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: reqURL,
    };
    chrome.runtime.sendMessage(xmlRequestInfo, generateGetCalendarJSONCallback(reqURL));
}


function generateGetCalendarJSONCallback(reqURL) {
    return function(data) {
    	let eventsData = JSON.parse(data.responseXML);
    	console.log(eventsData);

    	let eventsICS = ics();
    	for (let i = 0; i < eventsData.length; i++) {
    		let eventInfo = eventsData[i].title.match(/\>[^<>]+/g).map(function(e){return e.slice(1);});
    		eventsICS.addEvent(eventInfo[0], eventInfo[1], eventInfo[2], eventsData[i].start, eventsData[i].end);
    	}
    	eventsICS.download("myMDCM_calendar");
    };
}