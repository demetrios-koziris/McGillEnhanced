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


function addCourseTitleTooltips() {
    const aTags = document.getElementsByTagName("a");
    const courseTitleData = getCourseTitleData();

    for (let i = 0; i < aTags.length; i++) {
        const aTag = aTags[i];
        const url = aTag.href;
        if (aTag.textContent.length > 0 && url && url.match(courseUrlRegex)) { // Filter to get all links that point to course titles

            const linkCourseName = url.match(/courses\/([A-Za-z]{3,4}[0-9]{0,1}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();
            if (linkCourseName !== urlCourseName) { // Check that this is not a link to the same course (either for the same or for a different year)

                const courseTitle = courseTitleData[linkCourseName];
                if (courseTitle) {
                    aTag.title = courseTitle;
                    aTag.classList.add("tooltip");
                }
            }
        }
    }
}
