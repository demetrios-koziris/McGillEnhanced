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
 * Adds a menu bar below the main menu bar to access other years on McGill Calendar pages
 */
function addYearMenu() {

	const numYearsInMenu = 10;
	const currentYear = (sysMonth > 5 ? sysYear : sysYear-1);
	const firstYear = Math.max(sysYear-numYearsInMenu, 2009);
	const isSearchPage = (url.match(/search/));
	numYearsLeftToCheck = numYearsInMenu;

	const yearMenuBarDIV = document.createElement('div');
	yearMenuBarDIV.id = "navigation";
	yearMenuBarDIV.className = "mcen-yearMenuBarDIV ";
	document.body.insertBefore(yearMenuBarDIV, document.getElementById("highlighted"));

	const inner = document.createElement('div');
	inner.className = "inner";
	yearMenuBarDIV.appendChild(inner);

	const yearMenuBarUL = document.createElement('ul');
	yearMenuBarUL.className = "sf-menu mcen-yearMenuBarUL";
	inner.appendChild(yearMenuBarUL);

	for (let i = firstYear+numYearsInMenu-1; i >= firstYear; i-=1) {

		let yearMenuItemURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));	

		const yearMenuItemLI = document.createElement('li');
		yearMenuItemLI.className = "mcen-yearMenuItemLI";
		yearMenuBarUL.insertBefore(yearMenuItemLI, yearMenuBarUL.firstChild);

		const yearMenuItemDIV = document.createElement('div');
		yearMenuItemDIV.className = "mcen-yearMenuItemDIV";
		yearMenuItemLI.appendChild(yearMenuItemDIV);

		const yearMenuItemA = document.createElement('a');
		yearMenuItemA.className = "mcen-yearMenuItemA";
		yearMenuItemA.href = yearMenuItemURL;
		yearMenuItemA.innerText = i + "-" + (i + 1);
		yearMenuItemDIV.appendChild(yearMenuItemA);

		// styling for year tab directly to left of selected year tab
		if (i === urlYearF - 1) {
			yearMenuItemDIV.className += " mcen-yearLeft";
			yearMenuItemLI.className += " mcen-yearLeft";
		}
		// styling for selected year tab
		if (i === urlYearF) {
			yearMenuItemA.className += " mcen-yearSelected";
			yearMenuItemDIV.className += " mcen-yearSelected";
			yearMenuItemLI.className += " mcen-yearSelected";
		}
		// styling for year tab directly to right of selected year tab
		if (i === urlYearF + 1) {
			yearMenuItemDIV.className += " mcen-yearRight";
			yearMenuItemLI.className += " mcen-yearRight";
		}

		if (i > sysYear || i === urlYearF) {
			// disactivate selected year tab and year tabs to right of current system year
			disactivateYearMenuItem(yearMenuItemLI);
			// this year does not need to be checked because it disactivated
			decrementNumYearsLeftToCheck();
		}
		else {
			// this year has not been disactivated by default so check if it exists
			checkPageExists(yearMenuItemURL, yearMenuItemLI, i === sysYear);
		}
		
	}	 
}


/**
 * Checks existence of page and disactivates corresponding year menu item or sets up for later disativation
 * @param  url 						string url of page to check
 * @param  yearMenuItem 			html element to act on based on if page exists
 * @param  disactivateImmediately 	boolean whether to disactivate immediately or sets up for disactivation 
 									later with other items (with class mcen-yearDoesNotExist) to disactivate 
 */
function checkPageExists(url, yearMenuItem, disactivateImmediately) {
	jQuery.ajax({
		url: url,
		type: 'GET',
		complete: function(xhr, status) {
			decrementNumYearsLeftToCheck();
		},
		error: function(xhr, status) {
			// Disable the menu item if it leads nowhere.
			if (disactivateImmediately) {
				disactivateYearMenuItem(yearMenuItem);
			}
			else {
				yearMenuItem.className += " mcen-yearDoesNotExist";
			}
		}
	});
}


/**
 * Decrements counter and if no more years left to check, callsdisactivate NonExistentYearTabs()
 * This allows for all year menu tabs with non existent pages to be disactivated at the same time
 */
function decrementNumYearsLeftToCheck() {
	numYearsLeftToCheck -= 1;
	// if all years have been checked then disactiave tab for non existant year
	if (numYearsLeftToCheck === 0) {
		disactivateNonExistentYearTabs();
	}
}


/**
 * Disactivates year menu tabs whose page doesn't exist (all with class mcen-yearDoesNotExist)
 */
function disactivateNonExistentYearTabs() {
	yearMenuItemsToDisactivate = document.getElementsByClassName("mcen-yearDoesNotExist");
	for (let y = 0; y < yearMenuItemsToDisactivate.length; y++) {
		disactivateYearMenuItem(yearMenuItemsToDisactivate[y]);
	}
}


/**
 * Disactivates year menu tab 
 * @param  yearMenuItem 	html element to disactivate
 */
function disactivateYearMenuItem(yearMenuItem) {
	yearMenuItem.setAttribute('style', 'pointer-events:none !important;');
	yearMenuItem.firstChild.firstChild.setAttribute('style', 'color:#5B5B5A !important;');
}





































