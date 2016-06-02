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

function generateOldStyleSearchURL() {
    urlParams = getURLParams();
    searchURL = "https://www.mcgill.ca/study/" + urlYears

    if (url.match(/search\/all/) == null) {
        //if url is a search couses page
        searchURL += "/courses/search/" + urlParams["query"] + "?"
    }
    else {
        //if url is a search all page
        searchURL += "/search/apachesolr_search/" + urlParams["query"] + "?"
    }

    if ("field_subject_code" in urlParams) {
        searchURL += "filters=ss_subject%3A" + urlParams["field_subject_code"] + "%20"
    }

    return searchURL

}

function generateNewStyleSearchURL() {
    urlParams = getURLParams();
    searchURL = "https://www.mcgill.ca/study/" + urlYears

    if (url.match(/apachesolr\_search/) == null) {
        //if url is a search couses page
        searchURL += "/courses/search?search_api_views_fulltext=" + urlParams["query"] + "&"
    }
    else {
        //if url is a search all page
        searchURL += "/search/all?search_api_views_fulltext=" + urlParams["query"] + "&"
    }

    fIndex = 0
    if ("ss_subject" in urlParams) {

        paramArray = urlParams["ss_subject"].split(",")
        for (var p = 0; p < paramArray.length; p++) {
            searchURL += "f["+fIndex+"]=" + "field_subject_code%3A" + paramArray[p] + "&"
            fIndex++
        }
    }

    return searchURL
}

function getURLParams() {
    paramsJSON = {}
    paramsJSON["query"] = ""

    if (!isNewStyle) {
        if (url.match(/apachesolr\_search/) == null) {
            //if url is a search couses page
            if (url.match(/search\/([^\?]*)/) != null) {
                paramsJSON["query"] = url.match(/search\/([^\?]*)/)[1]
            }
        }
        else {
            //if url is a search all page
            paramsJSON["query"] = url.match(/search\/apachesolr_search\/([^\?]*)/)[1]
        }
    }

    paramsString = decodeURI(window.location.search.substring(1)).replace(/\%3A/g, ":")
    paramsString = window.location.search.substring(1)
    paramsArray = paramsString.split("&")
    for (var p = 0; p < paramsArray.length; p++) {
        param = paramsArray[p].split("=");
        if (param[0] != "") {
            if (!isNewStyle && param[0] == "filters") {
                //console.log(param[1])
                filtersArray = param[1].replace(/\%22/g, "").split("%20")
                //filtersArray = param[1].replace(/\%22([^\%]*)\%20([^\%]*)\%22/g, "$1" + "$2").split("%20").replace(/\%22/g, "");
                //console.log(filtersArray)
                prevKey = ""
                for (var f = 0; f < filtersArray.length; f++) {
                    filterParam = filtersArray[f].split("%3A")
                    //console.log(filterParam)
                    if (filterParam.length > 1) {
                        if (filterParam[0] in paramsJSON) {
                            paramsJSON[filterParam[0]] += "," + filterParam[1]
                        }
                        else {
                            paramsJSON[filterParam[0]] = filterParam[1]   
                            prevKey =  filterParam[0]                        
                        }
                    }
                    else {
                        paramsJSON[prevKey] += " " + filterParam[0]  
                    }
                }
            } 
            else if (isNewStyle && param[0].match(/f\[[0-9]+\]/) != null) {
                fparam = param[1].split("%3A")
                if (fparam.length > 1) {
                    paramsJSON[fparam[0]] = fparam[1]
                }
            }
            else if (param[0] == "search_api_views_fulltext") {
                paramsJSON["query"] = param[1]
            }
            else {
                paramsJSON[param[0]] = param[1]
            }
        }
    }
    console.log(paramsJSON)
    return paramsJSON
}



function addYearMenu() {

    url = window.location.href;


    

    if (url.match(/.+(20[0-9][0-9])-(20[0-9][0-9]).+/) != null) {

        urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
        urlYearW = urlYearF+1;
        urlYears = urlYearF + "-" + urlYearW;
        sysYear = new Date().getFullYear();
        sysMonth = new Date().getMonth();
        currentYear = (sysMonth > 5 ? sysYear : sysYear-1)
        isNewStyle = document.getElementsByClassName("transition").length > 0;
        firstYear = Math.max(sysYear-10, 2010);
        isSearchPage = (url.match(/search/) != null)
    

        if (!isNewStyle) {

            if (isSearchPage) {
                newStyleSearchURL = generateNewStyleSearchURL()
            }

            var yearMenuBarDIV = document.createElement('div');
            yearMenuBarDIV.id = "navigation";
            yearMenuBarDIV.style.padding = "0px";
            yearMenuBarDIV.style.margin = "0px";

            var yearMenuBarTABLE = document.createElement('table');
            yearMenuBarTABLE.style.width = "100%";
            yearMenuBarDIV.appendChild(yearMenuBarTABLE)

            for (j = firstYear; j <= sysYear; j += 10)
            {
                var yearMenuBarTR = document.createElement('tr');
                yearMenuBarTABLE.appendChild(yearMenuBarTR)

                for (i = j; i < j+10; i++)
                {
                    yearMenuItemURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));       
                    if (isSearchPage && (i <= 2010 || i >= 2016)) {
                        try {
                            yearMenuItemURL = newStyleSearchURL.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1)); 
                        }
                        catch(err) {
                            console.log(err);
                        } 
                    }

                    var yearMenuItemTD = document.createElement('td');
                    yearMenuItemTD.style.padding = "0px";
                    yearMenuItemTD.style.width = "10%";
                    yearMenuItemTD.style.height = "30px";
                    yearMenuItemTD.style.backgroundColor = "#2c566d";
                    yearMenuBarTABLE.appendChild(yearMenuItemTD);

                    var yearMenuItemDIV = document.createElement('div');
                    yearMenuItemDIV.style.width = "100%";
                    yearMenuItemDIV.style.height = "30px";
                    yearMenuItemDIV.style.backgroundColor = "#FFFFFF";
                    yearMenuItemDIV.style.borderRadius = "8px 8px 0px 0px";

                    var yearMenuItemA = document.createElement('a');
                    yearMenuItemA.innerHTML = i + "-" + (i + 1);
                    yearMenuItemA.style.margin = "4px 10px";
                    yearMenuItemA.style.borderRadius = "8px";
                    yearMenuItemA.style.color = "#FFFFFF";

                    if (i == currentYear) {
                        //yearMenuItemA.innerHTML = "Current Year: " + yearMenuItemA.innerHTML;
                        //yearMenuItemTD.style.width = "20%";
                    }
                    if (i == urlYearF){
                        yearMenuItemA.innerHTML = "<b>" + yearMenuItemA.innerHTML + "</b>";
                        yearMenuItemA.style.color = "#5b5b5a";
                        yearMenuItemA.style.padding = "4px 2px";
                        yearMenuItemDIV.appendChild(yearMenuItemA)
                        yearMenuItemTD.appendChild(yearMenuItemDIV)
                    }
                    else {
                        yearMenuItemTD.appendChild(yearMenuItemA);
                        if (i == urlYearF - 1) {
                            yearMenuItemTD.style.borderRadius = "0px 0px 8px 0px";
                        }
                        else if (i == urlYearF + 1) {
                            yearMenuItemTD.style.borderRadius = "0px 0px 0px 8px";
                        }
                        if (i > sysYear) {
                            yearMenuItemA.style.color = "#396A84";
                        }
                        else {
                            yearMenuItemA.setAttribute("href", yearMenuItemURL);
                        }
                    }




                }
            }

            var container = document.getElementById("container");
            container.insertBefore(yearMenuBarDIV, container.getElementsByClassName("breadcrumb")[0]);





            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //remove alerts about wrong year
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            noteBlocks = ["block-nodeblock", "block-block"]
            for (b = 0; b < noteBlocks.length; b++) {
                var noteBlock = document.getElementById('top-content').getElementsByClassName(noteBlocks[b]);
                for (n = 0; n < noteBlock.length; n++) {
                    //console.log(noteBlock[n].innerHTML);
                    if (noteBlock[n].innerHTML.match(/the most recent/) != null) {
                        noteBlock[n].style.display = "none";
                    }
                }
            }

        }
        else {

            if (isSearchPage) {
                oldStyleSearchURL = generateOldStyleSearchURL()
            }

            for (j = firstYear; j <= sysYear; j += 10)
            {
                var yearMenuBarDIV = document.createElement('div');
                yearMenuBarDIV.id = "navigation";
                yearMenuBarDIV.style.backgroundColor = "#FFFFFC";

                var yearMenuBarUL = document.createElement('ul');
                yearMenuBarUL.className = "sf-menu sf-main-menu";
                yearMenuBarUL.style.height = "33px";
                yearMenuBarDIV.appendChild(yearMenuBarUL);

                for (i = j; i < j+10; i++)
                {
                    yearMenuItemURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));    
                    if (isSearchPage && (i > 2010 && i < 2016)) {
                        try {
                            yearMenuItemURL = oldStyleSearchURL.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1)); 
                        }
                        catch(err) {
                            console.log(err);
                        }

                    }

                    var yearMenuItemLI = document.createElement('li');
                    yearMenuItemLI.style.backgroundColor = "#444844";
                    yearMenuItemLI.style.textAlign = "center";
                    yearMenuBarUL.appendChild(yearMenuItemLI);

                    var yearMenuItemDIV = document.createElement('div');
                    yearMenuItemDIV.style.backgroundColor = "#FFFFFC";
                    yearMenuItemDIV.style.borderRadius = "8px 8px 0px 0px";
                    yearMenuItemDIV.style.width = "100%";
                    yearMenuItemDIV.style.height = "33px";

                    var yearMenuItemA = document.createElement('a');
                    yearMenuItemA.setAttribute("href", yearMenuItemURL);
                    yearMenuItemA.innerHTML = i + "-" + (i + 1);
                    yearMenuItemA.style.width = "70px";
                    yearMenuItemA.style.height = "17px";
                    yearMenuItemA.style.padding = "6px 12px 10px";

                    if (i == urlYearF){
                        yearMenuItemA.innerHTML = "<b>" + yearMenuItemA.innerHTML + "</b>";
                        yearMenuItemA.style.color = "#5b5b5a";

                        ////
                        // yearMenuItemA.style.padding = "4px 12px 10px";
                        // yearMenuItemA.style.borderColor = "#DC241F";
                        // yearMenuItemA.style.borderStyle = "solid";
                        // yearMenuItemA.style.borderWidth = "3px 0px 0px 0px";
                        // yearMenuItemA.style.borderRadius = "6px 6px 0px 0px";
                        ////

                        yearMenuItemLI.style.pointerEvents = "none";
                        yearMenuItemDIV.appendChild(yearMenuItemA)
                        yearMenuItemLI.appendChild(yearMenuItemDIV)
                    }
                    else {
                        yearMenuItemLI.appendChild(yearMenuItemA)
                        if (i == urlYearF - 1) {
                            yearMenuItemLI.style.borderRadius = "0px 0px 8px 0px";
                        }
                        else if (i == urlYearF + 1) {
                            yearMenuItemLI.style.borderRadius = "0px 0px 0px 8px";
                        }
                        if (i > sysYear) {
                            yearMenuItemA.style.color = "#5b5b5a";
                            yearMenuItemLI.style.pointerEvents = "none";
                        }
                    }
                }

                var container = document.getElementById("container");
                container.insertBefore(yearMenuBarDIV, container.getElementsByClassName("breadcrumb")[0]);
            }

        }

    }
}













































