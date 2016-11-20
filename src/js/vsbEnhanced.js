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
	notpermittedMessage = "Minerva indicates that you are not permitted to register at this time. Please check your account to verify this.";
	errorMessage = "McGill Enhanced encountered an error while trying to register you. You may not be signed in or may not be permitted to register at this time.";


	var head = document.getElementsByTagName('head')[0];
	var s = document.createElement('style');
	s.setAttribute('type', 'text/css');
	s.innerText = ".flip_area_no_minHeight { min-Height:0px !important } .bubble { background-color: #fffeef !important; }";
	head.appendChild(s);
	document.getElementById('flip_area').className += 'flip_area_no_minHeight';

	wrapPrintable = document.createElement('div');
	wrapPrintable.style.minHeight = '510px';
	printable = document.getElementById('printable');
	footer = document.getElementsByClassName("footer")[0];

	printable.parentElement.appendChild(wrapPrintable);
	printable.parentElement.appendChild(footer);
	wrapPrintable.appendChild(printable);



	var button = document.createElement('button');
	button.setAttribute("type", "button");
	button.setAttribute("onclick", register.toString() +  " register();");
	button.innerHTML = "McGill Enhanced:<br>One-Click Minerva Registration!"
	button.title = "Click to register for the above CRN codes.\nMust be already signed into Minerva!";
	button.style.width = "273px";
	button.style.padding = "10px 4px 10px 60px";
	button.style.margin = "8.4px";
	button.style.whiteSpace = "normal";
	button.style.borderRadius = "8px";
	button.style.webkitAppearance = "button";
	button.style.background = "#FBF7C9 url(http://i.imgur.com/N0P89lL.png) no-repeat 6% 44%";
	button.style.backgroundSize = '40px 40px';
	button.style.WebkitBoxShadow  = "none";
	button.style.boxShadow = "none";
	button.style.border = "2px solid #5B5B5A";
	button.setAttribute("onmouseover", "this.style.border=\"2px solid #E54944\"");
	button.setAttribute("onmouseout", "this.style.border=\"2px solid #5B5B5A\"");
    
    


    box = document.getElementById("printable");
    box.appendChild(button);


     document.addEventListener("register", function(data) {

     	var termCode = url.match(/.+session\_([0-9]{6})\=/)[1];
	    if(window.debugMode){console.log(termCode);}

	    var xmlRequestInfo = {
	        method: 'GET',
	        action: 'xhttp',
	        url: 'https://horizon.mcgill.ca/pban1/bwskfreg.P_AltPin?term_in=' + termCode
	    };
	    console.log(xmlRequestInfo);
	    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
	        try {

                htmlParser = new DOMParser();
                htmlDoc = htmlParser.parseFromString(data.responseXML, "text/html");
	            if(window.debugMode){console.log(htmlDoc);}

	            registrationForm = htmlDoc.getElementsByTagName('form');
	            regsitrationFormOrig = [];
	            for (var t=0; t < registrationForm[1].length; t++) {
	            	regsitrationFormOrig.push(registrationForm[1][t].name + "=" + registrationForm[1][t].value);
	            }
	            if(window.debugMode){console.log(regsitrationFormOrig);}


	            title = htmlDoc.getElementsByTagName('title')[0].innerText;
	            if(window.debugMode){console.log(title);}

	            if (title == "Quick Add or Drop Course Sections") {

	            	infotext = htmlDoc.getElementsByClassName('infotext')[0].innerText.trim(" ");
	            	if (infotext != "You are not permitted to register at this time.") {

			            crns = document.getElementById('cartCrns').value.split(" ");
						if(window.debugMode){console.log(crns);}

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
						if(window.debugMode){console.log(regURL.split('&'));}

						//window.location = regURL;
						var win = window.open(regURL, '_blank');
		  				win.focus();
						if(window.debugMode){console.log(regURL);}
					}
					else {
						alert(notpermittedMessage);
					}
				}
				else {
					loginRedirect(notloggedinMessage);
				}

	        }
	        catch(err) {
	            console.log(err.stack);
	            loginRedirect(errorMessage);
	        }
	    });

	});

}


function loginRedirect(message) {
	alert(message);
	window.open('https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin', '_blank');
}


function register() {
    var event = document.createEvent('Event');
    event = new Event('register');
    document.dispatchEvent(event);
}


