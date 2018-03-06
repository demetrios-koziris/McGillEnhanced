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


function generateClassAverageRow(data, rowIndex) {
	const aveYearF = data.year - (data.term === 'Winter' || data.term === 'Summer' ? 1 : 0);

	const classAverageRow = document.createElement('div');
	classAverageRow.className = 'mcen-class-average-row';
	classAverageRow.id = 'mcen-class-average-row' + rowIndex;
	
	const classAverageTerm = document.createElement('div');
	if (aveYearF === urlYearF) {
		classAverageTerm.className = 'mcen-class-average-term-nonactive';
		classAverageTerm.innerHTML = '&bull; ' + data.year + ' ' + data.term + ':';

		classAverageRow.setAttribute('onmouseover', 'let profsFromClassAveTerm = document.getElementsByClassName("mcen-class-ave-prof-marker-" + '+data.termcode.slice(-1)+'); for (let i = 0; i < profsFromClassAveTerm.length; i++){profsFromClassAveTerm[i].style.display="inline"}');
		classAverageRow.setAttribute('onmouseout', 'let profsFromClassAveTerm = document.getElementsByClassName("mcen-class-ave-prof-marker-" + '+data.termcode.slice(-1)+'); for (let i = 0; i < profsFromClassAveTerm.length; i++){profsFromClassAveTerm[i].style.display="none"}');

	}
	else {
		classAverageTerm.className = 'mcen-class-average-term';
		const yearURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, aveYearF+"-"+(aveYearF+1));	
		classAverageTerm.innerHTML = '<a href=' + yearURL + '>' + data.year + ' ' + data.term + ':</a>';
	}
	classAverageRow.appendChild(classAverageTerm);

	const classAverageVal = document.createElement('div');
	classAverageVal.className = 'mcen-class-average-val';
	classAverageVal.innerHTML = data.average;
	classAverageRow.appendChild(classAverageVal);

	return classAverageRow;
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

	const averagesContainer = document.createElement('div');
	averagesContainer.id = 'mcen-averagesContainer';
	averagesContainer.className = 'mcen-container';
	averagesContainer.appendChild(generateMainContentSeparator("CLASS AVERAGES"));
	averagesContainer.appendChild(generateAveCrowdsourceSection());
	contentContainers.push(averagesContainer);

	for (let i = 0; i < contentContainers.length; i++) {
		content.appendChild(contentContainers[i]);
	}

}

function generateAveCrowdsourceSection() {

	const classAveragesData = getClassAveragesData()[courseName];
	logForDebug(classAveragesData);

	const crowdsourceContent = document.createElement('div');
	crowdsourceContent.id = 'mcen-class-averages-content';

	if (classAveragesData) {
		const crowdsourceContentRight = document.createElement('div');
		crowdsourceContentRight.id = 'mcen-class-averages-content-right';
		crowdsourceContent.appendChild(crowdsourceContentRight);

		const crowdsourceContentRightTable = document.createElement('div');
		crowdsourceContentRightTable.id = 'mcen-class-averages-content-right-table';
		crowdsourceContentRight.appendChild(crowdsourceContentRightTable);

		// filter out class averages from terms before the fall term of the first year in the year menu
		const firstTerm = (firstYear*100 + 09);
		for (let i = classAveragesData.length-1; i >= 0; i--) {
			if (classAveragesData[i].termcode < firstTerm) {
				classAveragesData.splice(i, 1);
			}
		}
		let classAverageRowCounter = 0;
		for (let i = classAveragesData.length-1; i >= 0; i--) {
			crowdsourceContentRightTable.appendChild(generateClassAverageRow(classAveragesData[i], i));
		}
	}

	const crowdsourceContentLeft = document.createElement('div');
	crowdsourceContentLeft.id = 'mcen-class-averages-content-left';
	if (classAveragesData) {
		crowdsourceContentLeft.innerHTML = '<p>These class averages are unofficial and were gathered by McGill students as part of a McGill Enhanced crowdsourcing initiative to build a dataset of historical class averages. If you would like to participate in this effort, the button below will retrieve the class averages from your transcript and allow you to submit them.</p>';
	}
	else {
		crowdsourceContentLeft.style.paddingLeft = '0px';
		crowdsourceContentLeft.style.width = '100%';
		crowdsourceContentLeft.innerHTML = '<p>McGill Enhanced is currently undertaking a crowdsourcing initiative to build a dataset of historical class averages. If you would like to participate in this effort, the button below will retrieve the class averages from your transcript classes and allow you to submit them.</p>';
	}
	crowdsourceContent.appendChild(crowdsourceContentLeft);

	const classAveragesButtonDiv = document.createElement('div');
	classAveragesButtonDiv.id = 'mcen-class-averages-button-div';
	crowdsourceContentLeft.appendChild(classAveragesButtonDiv);

	const downloadClassAveragesButton = document.createElement('button');
	downloadClassAveragesButton.setAttribute('type', 'button');
	downloadClassAveragesButton.setAttribute('onclick', 'document.dispatchEvent(new Event("downloadClassAverages"));');
	downloadClassAveragesButton.id = 'mcen-class-averages-download';
	downloadClassAveragesButton.className = 'mcen-class-averages-button';
	downloadClassAveragesButton.innerHTML = 'McGill Enhanced: Retrieve Your Class Averages!';
	downloadClassAveragesButton.title = 'Click to retrieve the class averages from your transcript.\nMust be already signed into Minerva!';
	classAveragesButtonDiv.appendChild(downloadClassAveragesButton);

	averageGPAsDownloader();

	return crowdsourceContent;
}


function averageGPAsDownloader() {

	const notloggedinMessage = 'You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.';
	const errorMessageRetrieval = 'McGill Enhanced encountered an error while trying to retrieve the average GPAs from your courses.';
	const noClassAveragesFound = 'McGill Enhanced was not able to retrieve any class averages from your courses. Class Averages are usually released for the courses on your transcript a month after the semester has ended.';
	const errorMessageSubmission= 'McGill Enhanced encountered an error while trying to submit the average GPAs from your courses.';
	const minervaLogin = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';
	const transriptURL = 'https://horizon.mcgill.ca/pban1/bzsktran.P_Display_Form?user_type=S&tran_type=V';
	aveGPAsSubmitString = '';

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

				if (htmlDoc.getElementById('mcg_id_submit')) {
					redirect(notloggedinMessage, minervaLogin);
				}
				else {
					let aveGPAs = [];
					let dataTables = htmlDoc.getElementsByClassName('dataentrytable')
					let transcript = dataTables[dataTables.length-1].rows;
					logForDebug(transcript);
					
					let term = "";
					for (let r = 0; r < transcript.length; r++) {
						let cols = transcript[r].getElementsByClassName('fieldmediumtext');
						if (cols.length === 1) {
							let termMatch = cols[0].innerHTML.match(/\<b\>(Fall|Winter|Summer)\&nbsp\;(20[0-9]{2})\<\/b\>/);
							if (termMatch) {
								term = termMatch[1][0] + termMatch[2];
								logForDebug(term);
							}
						}
						else if (cols.length === 8 || cols.length === 7) {
							logForDebug(cols);
							if (cols[cols.length-1].innerText.match(/[ABCDF+-]/)) {
								let courseName = cols[0].innerHTML.split("&nbsp;")[0].split(" ");
								aveGPAs.push([courseName[0]+courseName[1], courseName[0], courseName[1], cols[1].innerText, term, cols[3].innerText, cols[cols.length-1].innerText]);
							}
						} 
					}
					logForDebug(aveGPAs);

					if (aveGPAs.length > 0) {
						let aveGPAsShowString = '';
						for (let i = 0; i < aveGPAs.length; i++) {
							aveGPAsSubmitString += encodeURIComponent(aveGPAs[i].toString()) + '%0A';
							aveGPAsShowString += '<p>' + aveGPAs[i][1] +' '+ aveGPAs[i][2] +' '+aveGPAs[i][4] +' '+ aveGPAs[i][5] +' '+ aveGPAs[i][6] + '</p>';
						}

						const classAveragesButtonDiv = document.getElementById('mcen-class-averages-button-div');
						const downloadClassAveragesButton = document.getElementById('mcen-class-averages-download');
						classAveragesButtonDiv.removeChild(downloadClassAveragesButton);

						const classAveragesScrollDiv = document.createElement('div');
						classAveragesScrollDiv.className = 'mcen-class-averages-scroll';
						classAveragesScrollDiv.innerHTML = aveGPAsShowString;
						classAveragesButtonDiv.appendChild(classAveragesScrollDiv);

						classAveragesButtonDiv.appendChild(document.createElement('br'));

						const submitClassAveragesButton = document.createElement('button');
						submitClassAveragesButton.setAttribute('type', 'button');
						submitClassAveragesButton.setAttribute('onclick', 'document.dispatchEvent(new Event("submitClassAverages"));');					
						submitClassAveragesButton.id = 'mcen-class-averages-submit';
						submitClassAveragesButton.className = 'mcen-class-averages-button';
						submitClassAveragesButton.innerHTML = 'Submit Class Averages';
						submitClassAveragesButton.title = 'Click to submit the above class averages\nthat were retrieved from your transcript!';
						classAveragesButtonDiv.appendChild(submitClassAveragesButton);
					}
					else {
						redirect(noClassAveragesFound, transriptURL);		
					}
				}
			}
			catch(err) {
				console.log(err.stack);
				redirect(errorMessageRetrieval, transriptURL);
			}
		});

	});

	document.addEventListener('submitClassAverages', function(data) {
		try {

			chrome.storage.sync.get('classAveragesSubmission', function(result) {
				const prevClassAveragesSubmission = result.classAveragesSubmission;
				let currClassAveragesSubmission = aveGPAsSubmitString;
				
				chrome.storage.sync.set({classAveragesSubmission:currClassAveragesSubmission});
				if (prevClassAveragesSubmission) {
					currClassAveragesSubmission = currClassAveragesSubmission.replace(prevClassAveragesSubmission, '');
				}
				logForDebug(currClassAveragesSubmission);

				if (currClassAveragesSubmission !== '') {
					const averageXMLRequestInfo = {
						method: 'GET',
						action: 'xhttp',
						url: 'https://docs.google.com/forms/d/e/1FAIpQLSdfzbhOe2wvxgQ9IhzPmJ3iIyRM9-0FN3vkuuS-Pr4YX5plCQ/formResponse?ifq&entry.988087755=' + currClassAveragesSubmission + '&submit=Submit'
					};
					logForDebug(averageXMLRequestInfo);
					chrome.runtime.sendMessage(averageXMLRequestInfo);
				}
				else {
					logForDebug('The following class average data has already been submitted: '+ prevClassAveragesSubmission);
				}
			});

			const classAveragesButtonDiv = document.getElementById('mcen-class-averages-button-div');
			classAveragesButtonDiv.parentNode.removeChild(classAveragesButtonDiv);

			const classAveragesMessageDiv = document.getElementById('mcen-class-averages-content-left');
			classAveragesMessageDiv.appendChild(document.createElement('br'));

			const classAveragesThanksMessage = document.createElement('p');
			classAveragesThanksMessage.id = 'mcen-class-averages-thanks';
			classAveragesThanksMessage.innerHTML = '<strong>Thank you for your contribution!</strong><br>The results can be accessed by clicking the <a href="https://demetrios-koziris.github.io/McGillEnhanced/class-ave-crowdsourcing">Crowdsourced Averages</a><br>link in the McGill Enhanced section of the Extension menu:<br><img src = "https://i.imgur.com/ClIR1CX.png" style="margin-top: 10px;"/>';
			classAveragesMessageDiv.appendChild(classAveragesThanksMessage);


		}
		catch(err) {
			console.log(err.stack);
			alert(errorMessageSubmission);
		}

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

