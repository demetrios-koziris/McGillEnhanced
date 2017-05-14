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


function makeAveCrowdsourceSection() {
	// crowdsourceSection = document.createElement('div');
	// crowdsourceSection.innerHTML = '<form class="jotform-form" action="https://submit.jotform.ca/submit/71326103409245/" method="post" enctype="multipart/form-data" name="form_71326103409245" id="71326103409245" accept-charset="utf-8"><input type="hidden" name="formID" value="71326103409245" /><input type="hidden" id="simple_spc" name="simple_spc" value="71326103409245" />  <input type="file" id="input_3" name="q3_clickTo" class="form-upload validate[required]" data-imagevalidate="yes" data-file-accept="csv" data-file-maxsize="4" data-file-minsize="0" data-file-limit="0" data-component="fileupload" required="" /><button id="input_2" type="submit" class="form-submit-button" data-component="button"> Submit </button></form><script type="text/javascript">JotForm.ownerView=true;</script>';
	// document.getElementsByClassName('node-catalog')[0].appendChild(crowdsourceSection);

	const crowdsourceSectionDiv = document.createElement('div');

	const crowdsourceSectionTitle = generateSidebarSectionSeparator("CLASS AVERAGES");
	crowdsourceSectionDiv.appendChild(crowdsourceSectionTitle);

	var downloadClassAveragesButton = document.createElement('button');
	downloadClassAveragesButton.setAttribute('type', 'button');
	downloadClassAveragesButton.setAttribute('onclick', 'document.dispatchEvent(new Event("downloadClassAverages"));');
	downloadClassAveragesButton.id = 'mcen-class-averages-download';
	downloadClassAveragesButton.innerHTML = 'McGill Enhanced: Download Your Class Averages!';
	downloadClassAveragesButton.title = 'Click to download the class averages from your transcript.\nMust be already signed into Minerva!';
	downloadClassAveragesButton.setAttribute('onmouseover', 'this.style.border="2px solid #E54944"; this.style.paddingTop="6px";');
	downloadClassAveragesButton.setAttribute('onmouseout', 'this.style.border="1px solid #5B5B5A"; this.style.paddingTop="7px";');
	crowdsourceSectionDiv.appendChild(downloadClassAveragesButton);

	document.getElementsByClassName('node-catalog')[0].appendChild(crowdsourceSectionDiv);


	averageGPAsDownloader();
}


function averageGPAsDownloader() {

	const notloggedinMessage = 'You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.';
	const errorMessage = 'McGill Class Averages Downloader encountered an error while trying to download the average GPAs from your transcript.';
	const minervaLogin = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';
	const transriptURL = 'https://horizon.mcgill.ca/pban1/bzsktran.P_Display_Form?user_type=S&tran_type=V';

	//Define function to execute when downloadClassAverages event dispactched

	document.addEventListener('downloadClassAverages', function(data) {

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
							let termMatch = cols[0].innerHTML.match(/\<b\>(Fall|Winter|Summer)\&nbsp\;20([0-9]{2})\<\/b\>/);
							if (termMatch) {
								term = termMatch[1][0] + termMatch[2];
								logForDebug(term);
							}
						}
						else if (cols.length === 8 || cols.length === 7) {
							if (cols[cols.length-1].innerText.match(/[ABCDF+-]/)) {
								let course = cols[0].innerText.split(" ");
								aveGPAs.push([course[0], course[1], cols[cols.length-1].innerText, term, cols[3].innerText]);
							}
						} 
					}
					logForDebug(aveGPAs);
					let csvString = arrayToCSV(aveGPAs);
					let a = document.createElement('a');
					a.href = 'data:attachment/csv,' +  encodeURIComponent(csvString);
					a.target = '_blank';
					a.download = 'ClassAverages.csv';
					document.body.appendChild(a);
					a.click();

					redirect('', 'https://form.jotform.ca/mcgillenhanced/class-average-crowdsourcing');
				}
			}
			catch(err) {
				console.log(err.stack);
				redirect(errorMessage, transriptURL);
			}
		});

	});
}


function arrayToCSV(rows) {
  var content = "";
  rows.forEach(function(row, index) {
    content += row.join(",") + "\n";
  });
  return content;
}