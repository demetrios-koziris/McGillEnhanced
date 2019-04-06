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


/** 
 * On course overview pages, replace course names with links to course overview page
 */
function makeCourseLinks() {
	
	const notesElement = document.getElementsByClassName('catalog-notes')[0];
	if (notesElement) {
		const notesElementEnhancedWithLinks = notesElement.innerHTML.replace(courseNameRegex, '<a href="http://www.mcgill.ca/study/'+urlYears+'/courses/$1-$2">$1 $2</a>');
		notesElement.innerHTML = DOMPurify.sanitize(notesElementEnhancedWithLinks);
	}
}


/**
 * On program overview pages, replace course names with links to course overview page
 */
function programOverview(){	
	
	const courseSections = document.getElementsByClassName('program-course');
	for (let c = 0; c<courseSections.length; c++) {

		const notes = courseSections[c].getElementsByClassName('catalog-notes')[0];
		const title = courseSections[c].getElementsByClassName('program-course-title')[0];

		const courseURL = title.href;
		const courseName = courseURL.match(/courses\/(.+)/)[1].replace('-', ' ').toUpperCase();

		const link = document.createElement('a');
		link.href = courseURL;
		link.style.background = 'none';
		link.style.paddingLeft = '0px';
		link.innerText = courseName;

		const contentElement = courseSections[c].getElementsByClassName('content')[0];
		const overviewHeader = contentElement.getElementsByTagName('h3')[0];
		overviewHeader.innerText = '';
		overviewHeader.appendChild(link);

		if (notes) {
			const notesEnhancedWithLinks = notes.innerHTML.replace(courseNameRegex, '<a href="http://www.mcgill.ca/study/'+urlYears+'/courses/$1-$2">$1 $2</a>');
			notes.innerHTML = DOMPurify.sanitize(notesEnhancedWithLinks);
		}

	}

}

