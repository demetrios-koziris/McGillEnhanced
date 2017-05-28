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

function generateClassAverageDiv(data) {
	let classAverageDiv = document.createElement('div');
	classAverageDiv.className = 'mcen-class-average-div';
	classAverageDiv.innerHTML = '' + data.term + ': ' + data.average + '';
	return classAverageDiv;
}

function addContentSeparators() {

	const content = document.getElementsByClassName('node-catalog')[0].children[1];
	content.id = 'mcen-content';
	content.children[0].remove();

	contentContainers = [];

	const overviewContainer = document.createElement('div');
	overviewContainer.id = 'mcen-overviewContainer';
	overviewContainer.className = 'mcen-container';
	overviewContainer.appendChild(generateMainContentSeparator("OVERVIEW"));
	overviewContainer.appendChild(content.children[0]);
	overviewContainer.appendChild(content.children[0]);
	contentContainers.push(overviewContainer);

	const instructorsContainer = document.createElement('div');
	instructorsContainer.id = 'mcen-instructorsContainer';
	instructorsContainer.className = 'mcen-container';
	instructorsContainer.appendChild(generateMainContentSeparator("INSTRUCTORS"));
	instructorsContainer.appendChild(content.children[0]);
	contentContainers.push(instructorsContainer);

	const notesContainer = document.createElement('div');
	notesContainer.id = 'mcen-notesContainer';
	notesContainer.className = 'mcen-container';
	notesContainer.appendChild(generateMainContentSeparator("NOTES"));
	if (content.children.length	> 0) {
		notesContainer.appendChild(content.children[0]);
	}
	contentContainers.push(notesContainer);

	// const averagesContainer = document.createElement('div');
	// averagesContainer.id = 'mcen-averagesContainer';
	// averagesContainer.className = 'mcen-container';
	// averagesContainer.appendChild(generateMainContentSeparator("CLASS AVERAGES"));
	// averagesContainer.appendChild(generateAveCrowdsourceSection());
	// contentContainers.push(averagesContainer);

	for (let i = 0; i < contentContainers.length; i++) {
		content.appendChild(contentContainers[i]);
	}

}

function generateAveCrowdsourceSection() {

	const classAveragesData = getClassAveragesData()[courseName];
	console.log(classAveragesData);

	const crowdsourceContent = document.createElement('div');
	crowdsourceContent.id = 'mcen-class-averages-content';

	if (classAveragesData) {
		const crowdsourceContentRight = document.createElement('div');
		crowdsourceContentRight.id = 'mcen-class-averages-content-right';
		crowdsourceContent.appendChild(crowdsourceContentRight);

		const crowdsourceContentRightTable = document.createElement('div');
		crowdsourceContentRightTable.id = 'mcen-class-averages-content-right-table';
		crowdsourceContentRight.appendChild(crowdsourceContentRightTable);

		for (let i = 0; i < classAveragesData.length; i++) {
			crowdsourceContentRightTable.appendChild(generateClassAverageDiv(classAveragesData[i]));
		}
	}

	const crowdsourceContentLeft = document.createElement('div');
	crowdsourceContentLeft.id = 'mcen-class-averages-content-left';
	if (classAveragesData) {
		// crowdsourceContentLeft.innerHTML = 'The following class averages are unofficial and were gathered by students on r/McGill. McGill Enhanced is currently undertaking its own crowdsourcing initiative to gather a more accurate and complete dataset. If you would like to participate, the button below will download a CSV file of the class averages on your transcript and will open a form where you can submit the file.';
		crowdsourceContentLeft.innerHTML = '<p>These class averages are unofficial and were gathered by students on the McGill subreddit. Inspired by this effort, McGill Enhanced is currently undertaking its own crowdsourcing initiative to gather a more complete dataset of class averages. If you would like to participate, the button below will download a CSV file of your class averages and will open a form where you can submit it.</p>';
	}
	else {
		crowdsourceContentLeft.style.paddingLeft = '0px';
		crowdsourceContentLeft.style.width = '100%';
		crowdsourceContentLeft.innerHTML = '<p>McGill Enhanced is currently undertaking a crowdsourcing initiative to gather a dataset of historical class averages. If you would like to participate, the button below will download a CSV file of the class averages on your transcript and will open a form where you can submit the file.</p>';
	}
	crowdsourceContent.appendChild(crowdsourceContentLeft);

	var downloadClassAveragesButton = document.createElement('button');
	downloadClassAveragesButton.setAttribute('type', 'button');
	downloadClassAveragesButton.setAttribute('onclick', 'document.dispatchEvent(new Event("downloadClassAverages"));');
	downloadClassAveragesButton.id = 'mcen-class-averages-download';
	downloadClassAveragesButton.innerHTML = 'McGill Enhanced: Download Your Class Averages!';
	downloadClassAveragesButton.title = 'Click to download the class averages from your transcript.\nMust be already signed into Minerva!';
	crowdsourceContentLeft.appendChild(downloadClassAveragesButton);

	averageGPAsDownloader();

	return crowdsourceContent;
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

					setTimeout(function () {
						redirect('', 'https://form.jotform.ca/mcgillenhanced/class-average-crowdsourcing');
 					}, 1000);

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


function generateMainContentSeparator(separatorTitleString) {

	const mainContentSeparator = document.createElement('div');
	mainContentSeparator.className = "mcen-contentSeparator";	

	const mainContentSeparatorLabel = document.createElement('div');
	mainContentSeparatorLabel.className = "mcen-contentSeparatorLabel";
	mainContentSeparatorLabel.innerText = separatorTitleString;
	mainContentSeparator.appendChild(mainContentSeparatorLabel);

	const mainContentSeparatorSpaceBack = document.createElement('div');
	mainContentSeparatorSpaceBack.className = "mcen-contentSeparatorSpaceBack";
	mainContentSeparator.appendChild(mainContentSeparatorSpaceBack);

	const mainContentSeparatorSpaceFront = document.createElement('div');
	mainContentSeparatorSpaceFront.className = "mcen-contentSeparatorSpaceFront";
	mainContentSeparatorSpaceBack.appendChild(mainContentSeparatorSpaceFront);

	

	return mainContentSeparator;
}
