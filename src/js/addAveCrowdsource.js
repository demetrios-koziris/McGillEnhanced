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
  const aveYearF =
    data.year - (data.term === "Winter" || data.term === "Summer" ? 1 : 0);

  const classAverageRow = document.createElement("div");
  classAverageRow.className = "mcen-class-average-row";
  classAverageRow.id = "mcen-class-average-row" + rowIndex;

  const classAverageTerm = document.createElement("div");
  if (aveYearF === urlYearF) {
    classAverageTerm.className = "mcen-class-average-term-nonactive";
    classAverageTerm.innerText = "\u2022 " + data.year + " " + data.term + ":";

    classAverageRow.setAttribute(
      "onmouseover",
      'let profsFromClassAveTerm = document.getElementsByClassName("mcen-class-ave-prof-marker-" + ' +
        data.termcode.slice(-1) +
        '); for (let i = 0; i < profsFromClassAveTerm.length; i++){profsFromClassAveTerm[i].style.display="inline"}',
    );
    classAverageRow.setAttribute(
      "onmouseout",
      'let profsFromClassAveTerm = document.getElementsByClassName("mcen-class-ave-prof-marker-" + ' +
        data.termcode.slice(-1) +
        '); for (let i = 0; i < profsFromClassAveTerm.length; i++){profsFromClassAveTerm[i].style.display="none"}',
    );
  } else {
    classAverageTerm.className = "mcen-class-average-term";
    const yearURL = url.replace(
      /20[0-9][0-9]-20[0-9][0-9]/,
      aveYearF + "-" + (aveYearF + 1),
    );
    const classAverageTermLink = document.createElement("a");
    classAverageTermLink.href = yearURL;
    classAverageTermLink.innerText = data.year + " " + data.term + ":";
    classAverageTerm.appendChild(classAverageTermLink);
  }
  classAverageRow.appendChild(classAverageTerm);

  const classAverageVal = document.createElement("div");
  classAverageVal.className = "mcen-class-average-val";
  classAverageVal.innerText = data.average;
  classAverageRow.appendChild(classAverageVal);

  return classAverageRow;
}

function addContentSeparators() {
  const catalogDiv = document.getElementsByClassName("node-catalog")[0];
  if (catalogDiv === undefined) {
    return;
  }
  const content = catalogDiv.children[1];
  content.id = "mcen-content";
  content.children[0].remove();

  const contentContainers = [];

  const overviewContainer = document.createElement("div");
  overviewContainer.id = "mcen-overviewContainer";
  overviewContainer.className = "mcen-container";
  overviewContainer.appendChild(generateMainContentSeparator("OVERVIEW"));
  overviewContainer.appendChild(content.children[0]);
  overviewContainer.appendChild(content.children[0]);
  contentContainers.push(overviewContainer);

  const instructorsContainer = document.createElement("div");
  instructorsContainer.id = "mcen-instructorsContainer";
  instructorsContainer.className = "mcen-container";
  instructorsContainer.appendChild(generateMainContentSeparator("INSTRUCTORS"));
  instructorsContainer.appendChild(content.children[0]);
  contentContainers.push(instructorsContainer);

  const notesContainer = document.createElement("div");
  notesContainer.id = "mcen-notesContainer";
  notesContainer.className = "mcen-container";
  notesContainer.appendChild(generateMainContentSeparator("NOTES"));
  if (content.children.length > 0) {
    notesContainer.appendChild(content.children[0]);
  }
  contentContainers.push(notesContainer);

  const averagesContainer = document.createElement("div");
  averagesContainer.id = "mcen-averagesContainer";
  averagesContainer.className = "mcen-container";
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

  const crowdsourceContent = document.createElement("div");
  crowdsourceContent.id = "mcen-class-averages-content";

  if (classAveragesData) {
    const crowdsourceContentRight = document.createElement("div");
    crowdsourceContentRight.id = "mcen-class-averages-content-right";
    crowdsourceContent.appendChild(crowdsourceContentRight);

    const crowdsourceContentRightTable = document.createElement("div");
    crowdsourceContentRightTable.id = "mcen-class-averages-content-right-table";
    crowdsourceContentRight.appendChild(crowdsourceContentRightTable);

    // filter out class averages from terms before the fall term of the first year in the year menu
    const firstTerm = firstYear * 100 + 09;
    for (let i = classAveragesData.length - 1; i >= 0; i--) {
      if (classAveragesData[i].termcode < firstTerm) {
        classAveragesData.splice(i, 1);
      }
    }
    for (let i = classAveragesData.length - 1; i >= 0; i--) {
      crowdsourceContentRightTable.appendChild(
        generateClassAverageRow(classAveragesData[i], i),
      );
    }
  }

  const crowdsourceContentLeft = document.createElement("div");
  crowdsourceContentLeft.id = "mcen-class-averages-content-left";

  const crowdsourceContentLeftP = document.createElement("p");
  if (classAveragesData) {
    crowdsourceContentLeftP.innerText =
      "These class averages are unofficial and were gathered by McGill students as part of a McGill Enhanced crowdsourcing initiative to build a dataset of historical class averages.\nIf you would like to contribute, the button below will retrieve the class averages from your transcript and let you submit them.";
  } else {
    crowdsourceContentLeftP.innerText =
      "McGill Enhanced is currently undertaking a crowdsourcing initiative to build a dataset of historical class averages. If you would like to contribute, the button below will retrieve the class averages from your transcript classes and allow you to submit them.";
    crowdsourceContentLeft.style.paddingLeft = "0px";
    crowdsourceContentLeft.style.width = "100%";
  }
  crowdsourceContentLeft.appendChild(crowdsourceContentLeftP);
  crowdsourceContent.appendChild(crowdsourceContentLeft);

  const classAveragesButtonDiv = document.createElement("div");
  classAveragesButtonDiv.id = "mcen-class-averages-button-div";
  crowdsourceContentLeft.appendChild(classAveragesButtonDiv);

  const downloadClassAveragesButton = document.createElement("button");
  downloadClassAveragesButton.setAttribute("type", "button");
  downloadClassAveragesButton.setAttribute(
    "onclick",
    'document.dispatchEvent(new Event("downloadClassAverages"));',
  );
  downloadClassAveragesButton.id = "mcen-class-averages-download";
  downloadClassAveragesButton.className = "mcen-class-averages-button";
  downloadClassAveragesButton.style.backgroundImage =
    "url(" + chrome.runtime.getURL("images/mcgill-128.png") + ")";
  downloadClassAveragesButton.innerText =
    "McGill Enhanced: Retrieve Your Class Averages!";
  downloadClassAveragesButton.title =
    "Click to retrieve the class averages from your transcript.\nMust be already signed into Minerva!";
  classAveragesButtonDiv.appendChild(downloadClassAveragesButton);

  averageGPAsDownloader();

  return crowdsourceContent;
}

function generateMainContentSeparator(separatorTitleString) {
  const mainContentSeparator = document.createElement("div");
  mainContentSeparator.className = "mcen-contentSeparator";

  const mainContentSeparatorLabel = document.createElement("div");
  mainContentSeparatorLabel.className = "mcen-contentSeparatorLabel";
  mainContentSeparatorLabel.innerText = separatorTitleString;
  mainContentSeparator.appendChild(mainContentSeparatorLabel);

  const mainContentSeparatorSpaceBack = document.createElement("div");
  mainContentSeparatorSpaceBack.className = "mcen-contentSeparatorSpaceBack";
  mainContentSeparator.appendChild(mainContentSeparatorSpaceBack);

  const mainContentSeparatorSpaceFront = document.createElement("div");
  mainContentSeparatorSpaceFront.className = "mcen-contentSeparatorSpaceFront";
  mainContentSeparatorSpaceBack.appendChild(mainContentSeparatorSpaceFront);

  return mainContentSeparator;
}
