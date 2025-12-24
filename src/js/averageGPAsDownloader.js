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
  const notloggedinMessage =
    "You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.";
  const errorMessageRetrieval =
    "McGill Enhanced encountered an error while trying to retrieve the average GPAs from your courses.";
  const noClassAveragesFound =
    "McGill Enhanced was not able to retrieve any class averages from your courses. Class Averages are usually released for the courses on your transcript a month after the semester has ended.";
  const errorMessageSubmission =
    "McGill Enhanced encountered an error while trying to submit the average GPAs from your courses.";
  const minervaLogin = "https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin";
  const transriptURL =
    "https://horizon.mcgill.ca/pban1/bzsktran.P_Display_Form?user_type=S&tran_type=V";
  let aveGPAsSubmitString = "";

  //Define function to execute when downloadClassAverages event dispactched

  document.addEventListener("downloadClassAverages", function () {
    const requestInfo = {
      action: "fetch",
      url: transriptURL,
    };
    logForDebug(requestInfo);

    chrome.runtime.sendMessage(requestInfo, function (responseText) {
      try {
        const htmlParser = new DOMParser();
        const htmlDoc = htmlParser.parseFromString(responseText, "text/html");
        logForDebug(htmlDoc);

        if (htmlDoc.getElementById("mcg_id_submit")) {
          redirect(notloggedinMessage, minervaLogin);
        } else {
          let aveGPAs = [];
          let dataTables = htmlDoc.getElementsByClassName("dataentrytable");
          let transcript = dataTables[dataTables.length - 1].rows;
          logForDebug(transcript);

          let term = "";
          for (let r = 0; r < transcript.length; r++) {
            let cols = transcript[r].getElementsByClassName("fieldmediumtext");
            if (cols.length === 1) {
              let termMatch = cols[0].innerHTML.match(
                /\<b\>(Fall|Winter|Summer)\&nbsp\;(20[0-9]{2})\<\/b\>/,
              );
              if (termMatch) {
                term = termMatch[1][0] + termMatch[2];
                logForDebug(term);
              }
            } else if (cols.length === 8 || cols.length === 7) {
              logForDebug(cols);
              if (cols[cols.length - 1].innerText.match(/[ABCDF+-]/)) {
                let courseName = cols[0].innerHTML
                  .split("&nbsp;")[0]
                  .split(" ");
                aveGPAs.push([
                  courseName[0] + courseName[1],
                  courseName[0],
                  courseName[1],
                  cols[1].innerText,
                  term,
                  cols[3].innerText,
                  cols[cols.length - 1].innerText,
                ]);
              }
            }
          }
          logForDebug(aveGPAs);

          if (aveGPAs.length > 0) {
            const classAveragesScrollDiv = document.createElement("div");
            classAveragesScrollDiv.className = "mcen-class-averages-scroll";
            for (let i = 0; i < aveGPAs.length; i++) {
              aveGPAsSubmitString +=
                encodeURIComponent(aveGPAs[i].toString()) + "%0A";

              const aveGPAsShowText = document.createElement("p");
              aveGPAsShowText.innerText =
                aveGPAs[i][1] +
                " " +
                aveGPAs[i][2] +
                " " +
                aveGPAs[i][4] +
                " " +
                aveGPAs[i][5] +
                " " +
                aveGPAs[i][6];
              classAveragesScrollDiv.append(aveGPAsShowText);
            }

            const submitClassAveragesButton = document.createElement("button");
            submitClassAveragesButton.setAttribute("type", "button");
            submitClassAveragesButton.setAttribute(
              "onclick",
              'document.dispatchEvent(new Event("submitClassAverages"));',
            );
            submitClassAveragesButton.id = "mcen-class-averages-submit";
            submitClassAveragesButton.className = "mcen-class-averages-button";
            submitClassAveragesButton.style.backgroundImage =
              "url(" + chrome.runtime.getURL("images/mcgill-128.png") + ")";
            submitClassAveragesButton.innerText = "Submit Class Averages";
            submitClassAveragesButton.title =
              "Click to submit the above class averages\nthat were retrieved from your transcript!";

            const classAveragesButtonDiv = document.getElementById(
              "mcen-class-averages-button-div",
            );
            const downloadClassAveragesButton = document.getElementById(
              "mcen-class-averages-download",
            );
            classAveragesButtonDiv.removeChild(downloadClassAveragesButton);
            classAveragesButtonDiv.appendChild(classAveragesScrollDiv);
            classAveragesButtonDiv.appendChild(document.createElement("br"));
            classAveragesButtonDiv.appendChild(submitClassAveragesButton);
          } else {
            redirect(noClassAveragesFound, transriptURL);
          }
        }
      } catch (err) {
        console.log(err.stack);
        redirect(errorMessageRetrieval, transriptURL);
      }
    });
  });

  document.addEventListener("submitClassAverages", function () {
    try {
      chrome.storage.sync.get("classAveragesSubmission", function (result) {
        const prevClassAveragesSubmission = result.classAveragesSubmission;
        let currClassAveragesSubmission = aveGPAsSubmitString;

        chrome.storage.sync.set({
          classAveragesSubmission: currClassAveragesSubmission,
        });
        if (prevClassAveragesSubmission) {
          currClassAveragesSubmission = currClassAveragesSubmission.replace(
            prevClassAveragesSubmission,
            "",
          );
        }
        logForDebug(currClassAveragesSubmission);

        if (currClassAveragesSubmission !== "") {
          // no-cors since we don't need the response (and don't want permissions to docs.google.com)
          const averageRequestInfo = {
            action: "fetch-no-cors",
            url:
              "https://docs.google.com/forms/d/e/1FAIpQLSdfzbhOe2wvxgQ9IhzPmJ3iIyRM9-0FN3vkuuS-Pr4YX5plCQ/formResponse?ifq&entry.988087755=" +
              currClassAveragesSubmission +
              "&submit=Submit",
          };
          logForDebug(averageRequestInfo);
          chrome.runtime.sendMessage(averageRequestInfo);
        } else {
          logForDebug(
            "The following class average data has already been submitted: " +
              decodeURIComponent(prevClassAveragesSubmission),
          );
        }
      });

      const classAveragesButtonDiv = document.getElementById(
        "mcen-class-averages-button-div",
      );
      classAveragesButtonDiv.parentNode.removeChild(classAveragesButtonDiv);

      const classAveragesThanksMessageHeader = document.createElement("strong");
      classAveragesThanksMessageHeader.innerText =
        "Thank you for your contribution!";

      const classAveragesThanksMessageLink = document.createElement("a");
      classAveragesThanksMessageLink.href =
        "https://demetrios-koziris.github.io/McGillEnhanced/class-ave-crowdsourcing";
      classAveragesThanksMessageLink.innerText = "Crowdsourced Averages";

      const classAveragesThanksMessageImage = document.createElement("img");
      classAveragesThanksMessageImage.src = chrome.runtime.getURL(
        "images/crowdsourced-ave-menu.png",
      );
      classAveragesThanksMessageImage.setAttribute(
        "style",
        "margin-top: 10px;",
      );

      const classAveragesThanksMessage = document.createElement("p");
      classAveragesThanksMessage.id = "mcen-class-averages-thanks";
      classAveragesThanksMessage.appendChild(document.createElement("hr"));
      classAveragesThanksMessage.appendChild(classAveragesThanksMessageHeader);
      classAveragesThanksMessage.appendChild(document.createElement("br"));
      classAveragesThanksMessage.appendChild(
        document.createTextNode("Results can be accessed by clicking the "),
      );
      classAveragesThanksMessage.appendChild(classAveragesThanksMessageLink);
      classAveragesThanksMessage.appendChild(
        document.createTextNode(
          " link in the McGill Enhanced section of the Extension menu:",
        ),
      );
      classAveragesThanksMessage.appendChild(document.createElement("br"));
      classAveragesThanksMessage.appendChild(classAveragesThanksMessageImage);

      const classAveragesMessageDiv =
        document.getElementById("mcen-class-averages-content-left") ||
        document.getElementById("mcen-course-catalogue-crowdsource-content");

      classAveragesMessageDiv.appendChild(document.createElement("br"));
      classAveragesMessageDiv.appendChild(classAveragesThanksMessage);
    } catch (err) {
      console.log(err.stack);
      alert(errorMessageSubmission);
    }
  });
}
