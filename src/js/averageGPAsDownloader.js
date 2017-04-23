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


function averageGPAsDownloader() {

	const notloggedinMessage = 'You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.';
	const errorMessage = 'McGill Enhanced encountered an error while trying to register you. You may not be signed in or may not be permitted to register at this time. If these are not the problems, then this feature may not be functioning as intended.';
	const minervaLogin = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';
	const transriptURL = 'https://horizon.mcgill.ca/pban1/bzsktran.P_Display_Form?user_type=S&tran_type=V';

	//Define function to execute when downloadAveGPAs event dispactched

	document.addEventListener('downloadAveGPAs', function(data) {

	 	const xmlRequestInfo = {
			method: 'GET',
			action: 'xhttp',
			url: transriptURL
		};
		console.log(xmlRequestInfo);

		chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
			try {
				htmlParser = new DOMParser();
				htmlDoc = htmlParser.parseFromString(data.responseXML, 'text/html');
				logForDebug(htmlDoc);

				infotext = htmlDoc.getElementsByClassName('infotext')[0].innerText.trim(" ");
				// logForDebug(infotext);

				if (infotext.includes('Please select one of the following login methods.')) {
					redirect(notloggedinMessage, minervaLogin);
				}
				else {
					htmlDoc.getElementsByClassName('dataentrytable');
					console.log('trans');
				}
			}
			catch(err) {
				console.log(err.stack);
				redirect(errorMessage, minervaRegister);
			}
		});

	});

}


function redirect(message, url) {
	alert(message);
	window.open(url, '_blank');
}
