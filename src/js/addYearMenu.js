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


function addYearMenu() {

	const currentYear = (sysMonth > 5 ? sysYear : sysYear-1);
	const firstYear = Math.max(sysYear-10, 2009);
	const isSearchPage = (url.match(/search/));
	const mneClassName = 'yearMenuItemLI-MNE';

		for (let j = firstYear; j <= sysYear; j += 10)
		{
			const yearMenuBarDIV = document.createElement('div');
			yearMenuBarDIV.id = "navigation";
			yearMenuBarDIV.className = "mcen-yearMenuBarDIV ";

			const inner = document.createElement('div');
			inner.className = "inner";
			yearMenuBarDIV.appendChild(inner);

			const yearMenuBarUL = document.createElement('ul');
			yearMenuBarUL.className = "sf-menu sf-main-menu mcen-yearMenuBarUL";
			inner.appendChild(yearMenuBarUL);

			for (let i = j; i < j+10; i++)
			{
				let yearMenuItemURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));	

				const yearMenuItemLI = document.createElement('li');
				yearMenuItemLI.className = "mcen-yearMenuItemLI";
				yearMenuBarUL.appendChild(yearMenuItemLI);

				const yearMenuItemDIV = document.createElement('div');
				yearMenuItemDIV.className = "mcen-yearMenuItemDIV";
				yearMenuItemLI.appendChild(yearMenuItemDIV);

				const yearMenuItemA = document.createElement('a');
				yearMenuItemA.className = "mcen-yearMenuItemA";
				yearMenuItemA.href = yearMenuItemURL;
				yearMenuItemA.innerHTML = i + "-" + (i + 1);
				yearMenuItemDIV.appendChild(yearMenuItemA);


				if (i === urlYearF){
					yearMenuItemA.className += " mcen-yearSelected";
					yearMenuItemDIV.className += " mcen-yearSelected";
					yearMenuItemLI.className += " mcen-yearSelected";
				}
				else if (i == sysYear && sysMonth < 3) {

					var u = yearMenuItemA.href;
                                        // Checks if in fact this page even exists.
                                        var checkPageExists = function(u){
                                                jQuery.ajax({
                                                     url: u,
                                                     type: 'GET',
                                                     complete: function(xhr, status) {
                                                        //console.log('yay');
                                                     },
                                                     error: function(xhr, status){
                                                       //console.log(xhr.status);
                                                       // TODO: Hide the menu item if it leads nowhere.
                                                       // Or, for now, just disable it.
                                                       yearMenuItemLI.className += " mcen-yearClosed";
                                                       yearMenuItemA.className += " mcen-yearClosed";
                                                     }
                                                })
                                        }
                                        checkPageExists(u);

		
					yearMenuItemLI.className +=  " " + mneClassName;
					yearMenuItemLI.title = "This page may not exist yet!";
				}

				if (i === urlYearF - 1) {
					yearMenuItemDIV.className += " mcen-yearLeft";
					yearMenuItemLI.className += " mcen-yearLeft";
				}
				if (i === urlYearF + 1) {
					yearMenuItemDIV.className += " mcen-yearRight";
					yearMenuItemLI.className += " mcen-yearRight";
				}
				if (i > sysYear || i === urlYearF) {
					yearMenuItemA.className += " mcen-yearClosed";
					yearMenuItemLI.className += " mcen-yearClosed";
				}
				
			}	 

			document.body.insertBefore(yearMenuBarDIV, document.getElementById("highlighted"));
		}

	yearMenuTooltipsy(mneClassName);
}


function yearMenuTooltipsy(className, offset) {
	if (offset === undefined) {
		offset = [0, 10];
	}
	$('.' + className).tooltipsy( {
		delay: 400,
		offset: offset,
		hide: function (e, $el) {
			$el.slideUp(50);
		},
		css: {
			fontFamily: 'CartoGothicStdBook',
			padding: '6px 12px',
			color: '#444444',
			fontSize: '.8em',
			backgroundColor: '#FFF0F0',
			borderRadius: '6px',
			// border: '1px #E54944 solid',
			boxShadow: '2px 2px 10px #E54944'
		}
	});
}








































