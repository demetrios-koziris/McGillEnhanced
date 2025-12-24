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

function addContentSeparatorsCourseCatalogue() {
  const pageBody = document.body;

  // Stop immediately if we aren't on the redesigned course overview page.
  if (!pageBody || !pageBody.classList.contains("course-page")) {
    logForDebug(
      "Skipping course catalogue UI update: body is missing course-page class.",
    );
    return;
  } else {
    logForDebug("Course catalogue page!");
  }

  const contentRoot = pageBody.querySelector("main") || pageBody;
  const sectionConfigs = getCourseCatalogueSeparatorConfig();
  sectionConfigs.forEach((sectionConfig) => {
    decorateCourseCatalogueSection(contentRoot, sectionConfig);
  });
}

function addCourseCatalogueClassAverages() {
  if (typeof getClassAveragesData !== "function") {
    logForDebug("Class averages dataset is unavailable.");
    return;
  }

  if (!courseName) {
    logForDebug("Course name is undefined; cannot display averages.");
    return;
  }

  const classAveragesMap = getClassAveragesData();
  const classAveragesData = classAveragesMap[courseName];
  if (!classAveragesData || classAveragesData.length === 0) {
    logForDebug("No class averages found for " + courseName);
    return;
  }

  const contentCol = document.getElementById("contentarea");
  if (!contentCol) {
    logForDebug("#contentarea not found; skipping class averages block.");
    return;
  }

  const averagesContentArea = document.createElement("div");
  averagesContentArea.className = "mcen-course-catalogue-averages-content-area";
  averagesContentArea.id = "mcen-course-catalogue-averages-content-area";

  const averagesBlock = document.createElement("div");
  averagesBlock.className = "mcen-course-catalogue-averages-block";
  averagesBlock.id = "mcen-course-catalogue-averages-block";

  const averagesList = document.createElement("ul");
  averagesList.className = "mcen-course-catalogue-averages-list";
  const sortedAverages = classAveragesData
    .slice()
    .sort((a, b) => parseInt(b.termcode, 10) - parseInt(a.termcode, 10));

  sortedAverages.forEach((row) => {
    const listItem = document.createElement("li");
    listItem.className = "mcen-course-catalogue-averages-list-item";

    const labelSpan = document.createElement("span");
    labelSpan.className = "mcen-course-catalogue-averages-term";
    labelSpan.textContent = row.year + " " + row.term + ": ";

    const valueSpan = document.createElement("span");
    valueSpan.className = "mcen-course-catalogue-averages-value";
    valueSpan.textContent = row.average;

    listItem.appendChild(labelSpan);
    listItem.appendChild(valueSpan);
    averagesList.appendChild(listItem);
  });

  const crowdsourceContent = document.createElement("div");
  crowdsourceContent.className = "mcen-course-catalogue-crowdsource-content";
  crowdsourceContent.id = "mcen-course-catalogue-crowdsource-content";

  crowdsourceContent.innerText =
    "These class averages are unofficial and were gathered by McGill students as part of a McGill Enhanced crowdsourcing initiative to build a dataset of historical class averages.\n\nIf you would like to contribute, the button below will retrieve the class averages from your transcript and let you submit them.";

  const classAveragesButtonDiv = document.createElement("div");
  classAveragesButtonDiv.id = "mcen-class-averages-button-div";
  crowdsourceContent.appendChild(classAveragesButtonDiv);

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

  averagesBlock.appendChild(averagesList);
  averagesContentArea.appendChild(averagesBlock);
  averagesContentArea.appendChild(crowdsourceContent);
  contentCol.appendChild(averagesContentArea);

  if (typeof averageGPAsDownloader === "function") {
    averageGPAsDownloader();
  } else {
    logForDebug(
      "averageGPAsDownloader is unavailable; crowdsource button disabled.",
    );
  }
}

function getCourseCatalogueSeparatorConfig() {
  return [
    {
      label: "OVERVIEW",
      selectors: ["#textcontainer > div > div:nth-child(2)"],
      headingMatchers: [/overview/i, /description/i],
    },
    {
      label: "ADDITIONAL INFORMATION",
      selectors: ["#textcontainer > div > div:nth-child(3)"],
      headingMatchers: [/details/i, /information/i, /notes/i],
    },
    {
      label: "CLASS AVERAGES",
      selectors: ["#mcen-course-catalogue-averages-content-area"],
    },
  ];
}

function decorateCourseCatalogueSection(contentRoot, sectionConfig) {
  const targetElement = findSectionAnchor(contentRoot, sectionConfig);
  if (!targetElement) {
    logForDebug(
      "Course catalogue section not found for " + sectionConfig.label,
    );
    return;
  }

  const hostElement = targetElement;
  const currentWrapper = hostElement.parentElement;
  if (
    currentWrapper &&
    currentWrapper.classList.contains("mcen-course-catalogue-section")
  ) {
    return;
  }

  const sectionContainer = document.createElement("div");
  sectionContainer.className = "mcen-container mcen-course-catalogue-section";
  sectionContainer.setAttribute("data-mcen-label", sectionConfig.label);
  sectionContainer.appendChild(
    generateMainContentSeparator(sectionConfig.label),
  );

  if (hostElement.parentNode) {
    hostElement.parentNode.insertBefore(sectionContainer, hostElement);
    sectionContainer.appendChild(hostElement);
  }
}

function findSectionAnchor(contentRoot, sectionConfig) {
  if (sectionConfig.selectors) {
    for (let i = 0; i < sectionConfig.selectors.length; i++) {
      const selector = sectionConfig.selectors[i];
      const candidate = contentRoot.querySelector(selector);
      if (candidate) {
        return candidate;
      }
    }
  }

  if (sectionConfig.headingMatchers) {
    const headings = contentRoot.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (let h = 0; h < headings.length; h++) {
      const headingText = headings[h].innerText
        ? headings[h].innerText.trim()
        : "";
      if (headingText.length === 0) {
        continue;
      }
      for (let m = 0; m < sectionConfig.headingMatchers.length; m++) {
        if (sectionConfig.headingMatchers[m].test(headingText)) {
          return headings[h];
        }
      }
    }
  }

  return null;
}
