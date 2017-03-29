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


function enhanceVSB() {

	notloggedinMessage = "You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.";
	notpermittedMessage = "Minerva indicates that you are not permitted to register at this time or that this term is not available for registration processing. Please check Minerva to verify this.";
	errorMessage = "McGill Enhanced encountered an error while trying to register you. You may not be signed in or may not be permitted to register at this time. If these are not the problems, then this feature may not be functioning as intended.";
	minervaLogin = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';

	var head = document.getElementsByTagName('head')[0];
	var s = document.createElement('style');
	s.setAttribute('type', 'text/css');
	s.innerText = ".bubble { background-color: #fffeef !important; }";
	head.appendChild(s);


	var button = document.createElement('button');
	button.setAttribute("type", "button");
	button.setAttribute("onclick", register.toString() +  " register();");
	button.innerHTML = "McGill Enhanced:<br>One-Click Minerva Registration!"
	button.title = "Click to register for the above CRN codes.\nMust be already signed into Minerva!";
	button.style.width = "100%";
	button.style.padding = "10px 4px 10px 60px";
	button.style.margin = "10px 0px";
	button.style.whiteSpace = "normal";
	button.style.borderRadius = "8px";
	button.style.webkitAppearance = "button";
	button.style.background = "#FBF7C9 url(https://i.imgur.com/N0P89lL.png) no-repeat 6% 44%";
	button.style.backgroundSize = '40px 40px';
	button.style.WebkitBoxShadow  = "none";
	button.style.boxShadow = "3px 3px 5px #dddddd";
	button.style.border = "2px solid #5B5B5A";
	button.setAttribute("onmouseover", "this.style.border=\"2px solid #E54944\"");
	button.setAttribute("onmouseout", "this.style.border=\"2px solid #5B5B5A\"");
	
	
	const box = document.getElementsByClassName("reg_legend")[0];

	const wrap = document.createElement('div');
	wrap.style.width = 'calc(88% + 16px)';
	wrap.style.margin = 'auto';
	wrap.appendChild(button);
	box.appendChild(wrap);


	document.addEventListener("register", function(data) {

	 	let termCode = window.location.search.match(/.+term\=([0-9]{6})/)[1];
	 	let minervaRegister = 'https://horizon.mcgill.ca/pban1/bwskfreg.P_AltPin?term_in=' + termCode;
		logForDebug(minervaRegister);

		var xmlRequestInfo = {
			method: 'GET',
			action: 'xhttp',
			url: minervaRegister
		};
		console.log(xmlRequestInfo);

		chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
			try {
				htmlParser = new DOMParser();
				htmlDoc = htmlParser.parseFromString(data.responseXML, "text/html");
				logForDebug(htmlDoc);

				infotext = htmlDoc.getElementsByClassName('infotext')[0].innerText.trim(" ");
				logForDebug(infotext);

				if (infotext.includes('Please select one of the following login methods.')) {
					loginRedirect(notloggedinMessage, minervaLogin);
				}
				else if (infotext.includes('You are not permitted to register at this time.') ||
						 infotext.includes('Term not available for Registration processing.')) {
					loginRedirect(notpermittedMessage, minervaRegister);
				}
				else {
					registrationForm = htmlDoc.getElementsByTagName('form');
					logForDebug(registrationForm);
					regsitrationFormOrig = [];
					for (var t=0; t < registrationForm[1].length; t++) {
						regsitrationFormOrig.push(registrationForm[1][t].name + "=" + registrationForm[1][t].value);
					}
					logForDebug(regsitrationFormOrig);

					crns = document.getElementById('cartCrns').value.split(" ");
					logForDebug(crns);

					regURL = 'https://horizon.mcgill.ca/pban1/bwckcoms.P_Regs?term_in=' + termCode;
					regURL += '&RSTS_IN=DUMMY';
					regURL += '&assoc_term_in=DUMMY';
					regURL += '&CRN_IN=DUMMY';
					regURL += '&start_date_in=DUMMY';
					regURL += '&end_date_in=DUMMY';
					regURL += '&SUBJ=DUMMY';
					regURL += '&CRSE=DUMMY';
					regURL += '&SEC=DUMMY';
					regURL += '&LEVL=DUMMY';
					regURL += '&CRED=DUMMY';
					regURL += '&GMOD=DUMMY';
					regURL += '&TITLE=DUMMY';
					regURL += '&MESG=DUMMY';
					regURL += '&REG_BTN=DUMMY';

					var i = 15;
					while(registrationForm[1][i].value == 'DUMMY') {
						regURL += '&MESG=' + 			registrationForm[1][i].value;
						regURL += '&RSTS_IN=';
						regURL += '&assoc_term_in=' + 	registrationForm[1][i+2].value;
						regURL += '&CRN_IN=' + 			registrationForm[1][i+3].value;
						regURL += '&start_date_in=' + 	registrationForm[1][i+4].value.replace(/\//g, "%2F");
						regURL += '&end_date_in=' + 	registrationForm[1][i+5].value.replace(/\//g, "%2F");
						regURL += '&SUBJ=' + 			registrationForm[1][i+6].value;
						regURL += '&CRSE=' + 			registrationForm[1][i+7].value;
						regURL += '&SEC=' + 			registrationForm[1][i+8].value;
						regURL += '&LEVL=' + 			registrationForm[1][i+9].value;
						regURL += '&CRED=++++' + 		registrationForm[1][i+10].value.trim();
						regURL += '&GMOD=' + 			registrationForm[1][i+11].value;
						regURL += '&TITLE=' + 			registrationForm[1][i+12].value.replace(/ /g, "+");
						i += 13;
					}

					for (c=0; c<10; c++) {
						regURL += '&RSTS_IN=RW';
						regURL += '&CRN_IN=';
						if (c < crns.length) {
							crns[c] = crns[c].replace(/[{()}]/g, ''); //remove parentheses
							regURL += crns[c];
						}
						regURL += '&assoc_term_in=';
						regURL += '&start_date_in=';
						regURL += '&end_date_in=';
					}

					regURL += '&regs_row=' + 			registrationForm[1][i+50].value;
					regURL += '&wait_row=0';
					regURL += '&add_row=10';
					regURL += '&REG_BTN=Submit+Changes';
					logForDebug(regURL.split('&'));

					//window.location = regURL;
					var win = window.open(regURL, '_blank');
	  				win.focus();
					logForDebug(regURL);
				}
			}
			catch(err) {
				console.log(err.stack);
				loginRedirect(errorMessage, minervaRegister);
			}
		});

	});

}


function loginRedirect(message, url) {
	alert(message);
	window.open(url, '_blank');
}


function register() {
	var event = document.createEvent('Event');
	event = new Event('register');
	document.dispatchEvent(event);
}


