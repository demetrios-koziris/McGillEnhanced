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


function insertScheduleDownloader() {
  try {
    logForDebug(document.getElementsByClassName("pagetitlediv"));
    schedulePage = document.getElementsByClassName("pagetitlediv")[0].innerText.search("Student Schedule by Course Section");
    logForDebug(schedulePage);

    //inject script.js into page
    if (schedulePage != -1) {

      var s = document.createElement('script');
      s.src = chrome.extension.getURL('lib/icsLib.js');
      s.onload = function() {
          this.parentNode.removeChild(this);
      };
      (document.head || document.documentElement).appendChild(s);

      var t = document.createElement('script');
      t.src = chrome.extension.getURL('js/scheduleDownload.js');
      t.onload = function() {
          this.parentNode.removeChild(this);
      };
      (document.head || document.documentElement).appendChild(t);

    }
  }
  catch(err) {
    logForDebug('Error: Not a "View Student Schedule by Course Section" page: ' + err.stack);
  }
}
