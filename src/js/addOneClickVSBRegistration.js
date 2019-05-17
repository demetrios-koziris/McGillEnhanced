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


function addOneClickVSBRegistration() {

	const notloggedinMessage = 'You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.';
	const notpermittedMessage = 'Minerva indicates that you are not permitted to register at this time or that this term is not available for registration processing. Please check Minerva to verify this.';
	const errorMessage = 'McGill Enhanced encountered an error while trying to register you. You may not be signed in or may not be permitted to register at this time. If these are not the problems, then this feature may not be functioning as intended.';
	const crnMinMessage = 'No CRN codes detected in VSB for registration.';
	const crnMaxMessage = 'There is a maximum of 10 CRN codes that can be submitted in one registration. McGill Enhanced will attempt registration for the first 10 CRN codes detected.';
	const minervaLogin = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';


	//Create and insert One-Click registration button

	const regLegend = document.getElementsByClassName('reg_legend')[0];

	const regDiv = document.createElement('div');
	regDiv.style.width = 'calc(88% + 16px)';
	regDiv.style.margin = 'auto';
	regLegend.appendChild(regDiv);

	const regButton = document.createElement('button');
	regButton.setAttribute('type', 'button');
	regButton.setAttribute('onclick', 'document.dispatchEvent(new Event("register"));');
	regButton.id = 'mcen-vsb-registration';
	regButton.title = 'Click to register for the above CRN codes.\nMust be already signed into Minerva!';
	regButton.setAttribute('onmouseover', 'this.style.border="2px solid #E54944"');
	regButton.setAttribute('onmouseout', 'this.style.border="2px solid #5B5B5A"');
	regButton.appendChild(document.createTextNode('McGill Enhanced:'));
	regButton.appendChild(document.createElement('br'));
	regButton.appendChild(document.createTextNode('One-Click Minerva Registration!'));
	regDiv.appendChild(regButton);
	

	//Define function to execute when register event dispactched (when registration button clicked)

	document.addEventListener('register', function() {

		const termCode = window.location.search.match(/.+term=([0-9]{6})/)[1];
		const minervaRegister = 'https://horizon.mcgill.ca/pban1/bwskfreg.P_AltPin?term_in=' + termCode;
		logForDebug(minervaRegister);

		const xmlRequestInfo = {
			method: 'GET',
			action: 'xhttp',
			url: minervaRegister
		};
		console.log(xmlRequestInfo);

		chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
			try {
				const htmlParser = new DOMParser();
				const htmlDoc = htmlParser.parseFromString(data.responseXML, 'text/html');
				logForDebug(htmlDoc);

				const infotext = htmlDoc.getElementsByClassName('infotext')[0].innerText.trim(' ');
				logForDebug(infotext);

				if (htmlDoc.getElementById('mcg_id_submit')) {
					redirect(notloggedinMessage, minervaLogin);
				}
				else if (infotext.includes('You are not permitted to register at this time.') ||
						infotext.includes('Term not available for Registration processing.')) {
					redirect(notpermittedMessage, minervaRegister);
				}
				else {

					const crnString = document.getElementById('cartCrns').value.replace(/[{()}]/g, '');
					if (crnString === '') {
						alert(crnMinMessage);
					}
					else {
						const crnCodes = crnString.split(' ');
						logForDebug(crnCodes);

						const registrationForm = htmlDoc.getElementsByTagName('form')[1];
						logForDebug(registrationForm);
						logForDebug($(registrationForm).serialize().split('&'));

						for (let c = 0; c < crnCodes.length && c < 10; c++) {
							htmlDoc.getElementById('crn_id'+(c+1)).value = crnCodes[c];
						}
						logForDebug(registrationForm);
						logForDebug($(registrationForm).serialize().split('&'));

						if (crnCodes.length > 10) {
							alert(crnMaxMessage);
						}
						const regURL = 'https://horizon.mcgill.ca/pban1/bwckcoms.P_Regs?' + $(registrationForm).serialize() + '&REG_BTN=Submit+Changes';
						logForDebug(regURL);
						window.open(regURL, '_blank').focus();
					}
				}
			}
			catch(err) {
				console.log(err.stack);
				redirect(errorMessage, minervaRegister);
			}
		});

	});

}
