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


function addVSBClassLinks() {
	// Add class link onto VSB class names
	const classes = document.getElementsByClassName('class_code');

	let i;
	for (i = 0; i < classes.length; i++) {
		let classTitle = classes[i];
		classTitle.setAttribute("onclick", "window.open('https://mcgill.ca/study/courses/' + this.innerText.replace(' ', '-'));");
		classTitle.setAttribute("onmouseover", "style='text-decoration:underline;cursor:pointer'");
		classTitle.setAttribute("onmouseout", "style='text-decoration:none'");
	}
}
