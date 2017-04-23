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
	const errorMessage = 'McGill Enhanced encountered an error while trying to download the average GPAs from your transcript.';
	const minervaLogin = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';
	const transriptURL = 'https://horizon.mcgill.ca/pban1/bzsktran.P_Display_Form?user_type=S&tran_type=V';

	//Define function to execute when downloadAveGPAs event dispactched

	document.addEventListener('downloadAveGPAs', function(data) {

	 	const xmlRequestInfo = {
			method: 'GET',
			action: 'xhttp',
			url: transriptURL
		};
		logForDebug(xmlRequestInfo);

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
					let transcript = htmlDoc.getElementsByClassName('dataentrytable')[1].rows;
					logForDebug(transcript);
					let aveGPAs = [];
					let term = "";

					for (let r = 0; r < transcript.length; r++) {
						let cols = transcript[r].getElementsByClassName('fieldmediumtext');
						if (cols.length === 1) {
							let termMatch = cols[0].innerHTML.match(/\<b\>(Fall|Winter|Summer)\&nbsp\;([0-9]{4})\<\/b\>/);
							if (termMatch) {
								term = termMatch[1][0] + termMatch[2];
								logForDebug(term);
							}
						}
						else if (cols.length === 8 || cols.length === 7) {
							if (cols[cols.length-1].innerText.match(/[ABCDF+-]/)) {
								aveGPAs.push([cols[0].innerText, cols[cols.length-1].innerText, term, cols[3].innerText]);
							}
						} 
					}
					logForDebug(aveGPAs);
					let csvString = arrayToCSV(aveGPAs);
					let a = document.createElement('a');
					a.href = 'data:attachment/csv,' +  encodeURIComponent(csvString);
					a.target = '_blank';
					a.download = 'averageGPAs.csv';
					document.body.appendChild(a);
					a.click();
				}
			}
			catch(err) {
				console.log(err.stack);
				redirect(errorMessage, transriptURL);
			}
		});

	});
}


function redirect(message, url) {
	alert(message);
	window.open(url, '_blank');
}


function arrayToCSV(rows) {
  var content = "";
  rows.forEach(function(row, index) {
    content += row.join(",") + "\n";
  });
  return content;
}