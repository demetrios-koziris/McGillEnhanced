
debugMode = false;
if(debugMode){console.log("McGill Enhanced Debug mode is ON");}

url = window.location.href;

//var loadMessage = "McGill Enhanced is loading ratings for this professor&#13Please hover mouse off then back on to refresh this tooltip";
var loadMessage = "McGill Enhanced is loading ratings!";

function getProfUrl(first, last, general, part) {
    var profURL = "http://www.ratemyprofessors.com/search.jsp?query=mcgill " + first + " " + last;
    if (general) {
        profURL = "http://www.ratemyprofessors.com/search.jsp?query=mcgill " + last;
    }

    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
        try {
            var profURL = data.url;
            var profURLHTML = data.responseXML;

            var div = document.createElement('div');
            div.innerHTML = profURLHTML;

            if (div.getElementsByClassName("result-count")[1].innerHTML.match(/Your search didn't return any results/) != null) {
                if (general) {
                    getProfContent(first, last, profURL, part, 0);
                }
                else {
                    profURL = getProfUrl(first, last, true, part);
                }
            }
            else if (div.getElementsByClassName("result-count")[1].innerHTML.match(/.*Showing 1-1 of 1 result.*/) != null) {
                var profURLId = profURLHTML.match(/(ShowRatings.jsp.tid.[0-9]+)"/)[1];
                profURL = "http://www.ratemyprofessors.com/" + profURLId;
                getProfContent(first, last, profURL, part, 1);
            }
            else {
                getProfContent(first, last, profURL, part, 2);
            }
        }
        catch(err) {
            console.log(first + " " + last + " " + part + " " + err);
        }
    });
}


function getProfContent(first, last, profURL, part, res) {
    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
        try {
            var profURL = data.url;
            var profURLHTML = data.responseXML;

            //var div = document.createElement('div');
            //div.innerHTML = profURLHTML;
            var rating = {
                overall: $(profURLHTML).find(".grade").html(),
                helpfulness: -1,
                clarity: -1,
                easiness: -1,
                grade: -1,
                hotness: -1
            }
            

            if (rating.overall === undefined) {
                if (res == 0) {
                    tooltipContent = "Instructor not found.";
                }
                else if (res = 2) {
                    tooltipContent = "Multiple Instructors found<br>Please click to see results";
                }
            }
            else {//if (part < 0)
                //check holly dressel in ENVR400(13-14) and Sung Chul Noh in MGCR 222 at https://www.mcgill.ca/study/2012-2013/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-civil-engineering

                var div = document.createElement('div');
                div.innerHTML = profURLHTML;
                if (div.getElementsByClassName("rating-count")[0] === undefined) {
                    tooltipContent = "This instructor has no ratings<br>Click to be the first to rate";
                }
                else {

                    rating.helpfulness = $(profURLHTML).find(".rating:eq(0)").html();
                    rating.clarity = $(profURLHTML).find(".rating:eq(1)").html();
                    rating.easiness = $(profURLHTML).find(".rating:eq(2)").html();
                    rating.grade = $(profURLHTML).find(".grade:eq(1)").html();

                    rating.hotness = $(profURLHTML).find(".grade:eq(2)").html();
                    if (rating.hotness != undefined) {
                        rating.hotness = rating.hotness.match(/chilis\/(.+)\-chili\.png/)[1];
                    }
                    
                    firstName = $(profURLHTML).find(".pfname").html();
                    if (firstName != undefined) {
                        firstName = firstName.trim();
                    }
                    lastName = $(profURLHTML).find(".plname").html();
                    if (lastName != undefined) {
                        lastName = lastName.trim();
                    }

                    //console.log(firstName + " " + rating.grade + " " + rating.hotness);

                    tooltipContent = "<b>" + firstName + " " + lastName + "</b>"
                    + "<br><b>" + rating.overall + "&nbsp Overall Quality</b>"
                    + "<br>" + rating.helpfulness + "&nbsp Helpfulness"
                    + "<br>" + rating.clarity + "&nbsp Clarity"
                    + "<br>" + rating.easiness + "&nbsp Easiness"


                    numOfRatings = div.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1]
                    //console.log(profURLHTML.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1]);
                    tooltipContent += "<br><b>From " + numOfRatings + " student rating" + (numOfRatings > 1 ? "s" : "") + "</b>"
                                    + "<br>Rater Ave Grade: " + rating.grade + "&nbsp"
                                    + "<br>Prof Hotness: " + rating.hotness.toUpperCase() + "&nbsp"
                }
            }
            makeProfSection(first, last, profURL, part, tooltipContent);
        }
        catch(err) {
            console.log(first + " " + last + " " + part)
            console.log(err);
        }
    });
}


function makeProfSection(first, last, profURL, part, tooltipContent) {
    profStateObject = profState;
    profStateObject.done++
    profState = profStateObject;
    if(debugMode){console.log(profState);}

    if (part < 0) {
        newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;
        var instFilter = new RegExp("www.ratemyprofessors.com.search.jsp.query=mcgill " + first + " " + last + "\"", 'g');
        newContent = newContent.replace(instFilter, profURL.split("://")[1] + "\" class=\"hasProfTip\"  title=\"" + tooltipContent + "\"");

        document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML = newContent;
    }
    else {
        catalogName = "catalog-instructorsMod" + part;
        newCatalog = document.getElementsByClassName(catalogName)[0].innerHTML;
        var instFilter = new RegExp("www.ratemyprofessors.com.search.jsp.query=mcgill " + first + " " + last + "\"", 'g');
        newCatalog = newCatalog.replace(instFilter, profURL.split("://")[1] + "\" title=\"" + tooltipContent + "\"");

        document.getElementsByClassName(catalogName)[0].innerHTML = newCatalog;
    }

    if (profStateObject.done == profStateObject.total) {
        if(debugMode){console.log("Ready for tooltipsy");}
        $(".hasProfTip").tooltipsy({
            css: {
                fontFamily: "CartoGothicStdBook",
                padding: "10px",
                //maxWidth: "140px",
                color: (isNewStyle ? "#444444" : "#2C566D"),
                fontSize: ".9em",
                backgroundColor: (isNewStyle ? "#C5C5C5" : "#F4F5ED"),
                borderRadius: "8px",
                border: "2px solid "
            }
        });
        profState = undefined;
    }

}

if (url.match(/.+vsb.mcgill.ca.+/) == null) {

    urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
    urlYearW = urlYearF+1;
    urlYears = urlYearF + "-" + urlYearW;
    sysYear = new Date().getFullYear();
    isNewStyle = document.getElementsByClassName("transition").length > 0;

}


//Course name regex
regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;

if (url.match(/.+study.+courses.+[-]+/) != null) {

    wikinotes = {
        ANAT322 : "https://www.wikinotes.ca/ANAT_322",
        ANTH335 : "https://www.wikinotes.ca/ANTH_335",
        ANTH360 : "https://www.wikinotes.ca/ANTH_360",
        BIOL111 : "https://www.wikinotes.ca/BIOL_111",
        BIOL112 : "https://www.wikinotes.ca/BIOL_112",
        BIOL201 : "https://www.wikinotes.ca/BIOL_201",
        BIOL215 : "https://www.wikinotes.ca/BIOL_215",
        BIOL310 : "https://www.wikinotes.ca/BIOL_310",
        CHEM212 : "https://www.wikinotes.ca/CHEM_212",
        CHEM222 : "https://www.wikinotes.ca/CHEM_222",
        COMP206 : "https://www.wikinotes.ca/COMP_206",
        COMP251 : "https://www.wikinotes.ca/COMP_251",
        COMP273 : "https://www.wikinotes.ca/COMP_273",
        COMP302 : "https://www.wikinotes.ca/COMP_302",
        COMP303 : "https://www.wikinotes.ca/COMP_303",
        COMP310 : "https://www.wikinotes.ca/COMP_310",
        COMP322 : "https://www.wikinotes.ca/COMP_322",
        COMP330 : "https://www.wikinotes.ca/COMP_330",
        COMP350 : "https://www.wikinotes.ca/COMP_350",
        COMP360 : "https://www.wikinotes.ca/COMP_360",
        COMP409 : "https://www.wikinotes.ca/COMP_409",
        COMP421 : "https://www.wikinotes.ca/COMP_421",
        COMP424 : "https://www.wikinotes.ca/COMP_424",
        COMP527 : "https://www.wikinotes.ca/COMP_527",
        COMP547 : "https://www.wikinotes.ca/COMP_547",
        COMP646 : "https://www.wikinotes.ca/COMP_646",
        EAST240 : "https://www.wikinotes.ca/EAST_240",
        ECON209 : "https://www.wikinotes.ca/ECON_209",
        ENGL200 : "https://www.wikinotes.ca/ENGL_200",
        GEOG205 : "https://www.wikinotes.ca/GEOG_205",
        INTD200 : "https://www.wikinotes.ca/INTD_200",
        MATH133 : "https://www.wikinotes.ca/MATH_133",
        MATH141 : "https://www.wikinotes.ca/MATH_141",
        MATH151 : "https://www.wikinotes.ca/MATH_151",
        MATH204 : "https://www.wikinotes.ca/MATH_204",
        MATH222 : "https://www.wikinotes.ca/MATH_222",
        MATH223 : "https://www.wikinotes.ca/MATH_223",
        MATH235 : "https://www.wikinotes.ca/MATH_235",
        MATH236 : "https://www.wikinotes.ca/MATH_236",
        MATH240 : "https://www.wikinotes.ca/MATH_240",
        MATH242 : "https://www.wikinotes.ca/MATH_242",
        MATH247 : "https://www.wikinotes.ca/MATH_247",
        MATH255 : "https://www.wikinotes.ca/MATH_255",
        MATH314 : "https://www.wikinotes.ca/MATH_314",
        MATH315 : "https://www.wikinotes.ca/MATH_315",
        MATH317 : "https://www.wikinotes.ca/MATH_317",
        MATH318 : "https://www.wikinotes.ca/MATH_318",
        MATH323 : "https://www.wikinotes.ca/MATH_323",
        MATH324 : "https://www.wikinotes.ca/MATH_324",
        MATH340 : "https://www.wikinotes.ca/MATH_340",
        MATH407 : "https://www.wikinotes.ca/MATH_407",
        NEUR310 : "https://www.wikinotes.ca/NEUR_310",
        PHGY210 : "https://www.wikinotes.ca/PHGY_210",
        PHYS232 : "https://www.wikinotes.ca/PHYS_232",
        POLI243 : "https://www.wikinotes.ca/POLI_243",
        PSYC100 : "https://www.wikinotes.ca/PSYC_100",
        PSYC340 : "https://www.wikinotes.ca/PSYC_340"
    };



    

    recordingURLs = {
        AECH111 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11256" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13093" }
            ] 
        },
        ANAT214 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12204" }
            ] 
        },
        ANAT321 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10435" }
            ] 
        },
        ANAT416 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11265" }
            ] 
        },
        ANSC234 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12551" }
            ] 
        },
        ATOC184 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11293" }
            ] 
        },
        ATOC185 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=9858" }
            ] 
        },
        BIOC300D2 : { 
            201501 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11297" }
            ]
        },
        BIOC311 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10451" }
            ] 
        },
        BIOC312 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11264" }
            ] 
        },
        BIOC450 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10452" }
            ] 
        },
        BIOL115 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12042" }
            ] 
        },
        BIOL201 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12958" }
            ] 
        },
        BIOL202 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11132" }
            ],
            201505 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11425" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12959" }
            ] 
        },
        BIOL309 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10255" }
            ] 
        },
        BIOL313 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12828" }
            ] 
        },
        BUS2365 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12197" }
            ] 
        },
        CHEM110 : { 
            201009 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1420" },
                { section: "002", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1421" },
                { section: "003", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1430" }
            ],
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1460" },
                { section: "002", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1461" }
            ],
            201209 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1514" },
                { section: "002", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1515" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1571" },
                { section: "002", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1572" },
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10258" }        
            ], 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12039" }
            ]
        },
        CHEM120 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1432" },
                { section: "002", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1433" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1477" },
                { section: "002", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1478" }
            ],
            201501 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1588" }
            ]
        },
        CHEM180 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1435" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1480" }
            ],
            201301 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1516" }
            ],
            201401 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1545" }
            ] 
        },
        CHEM181 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1434" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1479" }
            ],
            201301 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1517" }
            ],
            201401 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1546" }
            ],
            201501 : [ 
                { section: "761", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11287" }
            ],
            201601 : [ 
                { section: "761", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13124" }
            ] 
        },
        CHEM182 : { 
            201009 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1417" }
            ],
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1463" }
            ],
            201209 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1504" }
            ],
            201309 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1535" }
            ] 
        },
        CHEM183 : { 
            201009 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1418" }
            ],
            201109 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1464" }
            ],
            201209 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1505" }
            ],
            201309 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1536" }
            ],
            201409 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1574" },
                { section: "761", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=9852" }
            ],
            201509 : [ 
                { section: "761", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1607" },
                { section: "761", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11556" }
            ] 
        },
        CHEM204 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1437" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1482" }
            ],
            201301 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1522" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1576" },
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10286" }
            ] 
        },
        CHEM211 : { 
            201209 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1506" }
            ],
            201309 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1531" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1570" }
            ] 
        },
        CHEM212 : { 
            201009 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1429" }
            ],
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1440" }
            ],
            201105 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1455" }
            ],
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1465" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1485" }
            ],
            201205 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1500" }
            ],
            201301 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1524" }
            ],
            201305 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1525" }
            ],
            201401 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1553" }
            ],
            201405 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1560" }
            ],
            201501 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1590" }
            ],
            201505 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1593" }
            ] 
        },
        CHEM214 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1439" }
            ],
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11146" }
            ] 
        },
        CHEM222 : { 
            201009 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1422" }
            ],
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1438" }
            ],
            201105 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1458" }
            ],
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1466" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1483" }
            ],
            201205 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1502" }
            ],
            201209 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1507" }
            ],
            201301 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1523" }
            ],
            201305 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1526" }
            ],
            201309 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1529" }
            ],
            201401 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1552" }
            ],
            201405 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1561" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1568" },
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10323" }
            ],
            201501 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1584" }
            ],
            201505 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1594" },
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11423" }
            ],
            201509 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1601" }
            ],
            201601 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1616" }
            ] 
        },
        CHEM232 : { 
            201009 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1419" }
            ],
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1467" }
            ],
            201209 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1511" }
            ],
            201309 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1530" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1569" }
            ] 
        },
        CHEM281 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1436" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1481" }
            ] 
        },
        CHEM302 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1441" }
            ],
            201301 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1521" }
            ] 
        },
        CHEM462 : { 
            201209 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1512" }
            ],
            201309 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1537" }
            ] 
        },
        CHEM502 : { 
            201401 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1556" }
            ] 
        },
        CIVE320 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10225" }
            ],
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11999" }
            ] 
        },
        CLAS203 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10001" }
            ],
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11700" }
            ] 
        },
        COMP202 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12237" }
            ],
            201605 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13267" }
            ] 
        },
        COMP250 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10464" }
            ],
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12243" },
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11806" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13068" }
            ]
        },
        COMP273 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13075" }
            ] 
        },
        COMP302 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13118" }
            ] 
        },
        COMP310 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13081" }
            ] 
        },
        COMP557 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10865" }
            ] 
        },
        DENT220D1 : { 
            201601 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12642" }
            ]
        },
        DENT318J1 : { 
            201509 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12324" }
            ]
        },
        DENT320J3 : { 
            201605 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13322" }
            ]
        },
        DENT323J1 : { 
            201509 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12328" }
            ]
        },
        DENT411 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12339" }
            ] 
        },
        DENT412D2 : { 
            201601 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12646" }
            ]
        },
        DENT413 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12341" }
            ] 
        },
        ECON208 : { 
            201501 : [ 
                { section: "004", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11009" }
            ] 
        },
        ECON209 : { 
            201501 : [ 
                { section: "003", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11010" }
            ] 
        },
        ECON230D1 : { 
            201409 : [
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10016" }
            ],
            201509 : [
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11716" }
            ]
        },
        ECON313 : { 
            201409 : [ 
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10192" }
            ],
            201505 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11450" }
            ],
            201509 : [ 
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11953" }
            ] 
        },
        ECON314 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=9891" }
            ],
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11600" }
            ] 
        },
        ECSE211 : { 
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1468" }
            ],
            201301 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1519" }
            ],
            201309 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1539" }
            ],
            201401 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1548" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1567" }
            ],
            201501 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1586" }
            ] 
        },
        ECSE322 : { 
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1469" }
            ],
            201301 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1520" }
            ],
            201401 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1549" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1566" }
            ],
            201501 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1587" }
            ] 
        },
        ECSE549 : { 
            201109 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1470" }
            ],
            201309 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1540" }
            ],
            201409 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1565" }
            ] 
        },
        EPSC180 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11290" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13127" }
            ] 
        },
        EPSC201 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12270" }
            ] 
        },
        FACC100 : { 
            201501 : [ 
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11295" }
            ] 
        },
        GEOG200 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12169" }
            ] 
        },
        HIST249 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10371" }
            ],
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12145" }
            ] 
        },
        LAWG210 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11964" }
            ] 
        },
        LAWG273 : { 
            201605 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13346" }
            ] 
        },
        LAWG300 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12703" }
            ] 
        },
        LING201 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10887" }
            ] 
        },
        MATH323 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13020" }
            ] 
        },
        MATH595 : { 
            201505 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11458" }
            ] 
        },
        MATH598 : { 
            201505 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11459" }
            ] 
        },
        MGCR222 : { 
            201409 : [ 
                { section: "006", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10063" }
            ],
            201501 : [ 
                { section: "005", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11337" },
                { section: "006", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10745" }
            ] 
        },
        MGCR331 : { 
            201409 : [ 
                { section: "751", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10179" }
            ],
            201509 : [ 
                { section: "751", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11870" }
            ],
            201605 : [ 
                { section: "751", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13333" }
            ] 
        },
        MGCR341 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12413" }
            ] 
        },
        MGPO640 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10765" }
            ] 
        },
        MIMM212 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=9878" }
            ] 
        },
        MIMM214 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10715" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12479" }
            ] 
        },
        MIMM314 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11200" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13029" }
            ] 
        },
        MIMM323 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10424" }
            ] 
        },
        MIMM413 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11203" }
            ] 
        },
        NUR1420 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12025" }
            ] 
        },
        NUTR545 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11552" }
            ] 
        },
        OCC1551 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13036" }
            ] 
        },
        OCCH608 : { 
            201101 : [ 
                { section: "088", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1447" }
            ] 
        },
        OCCH615 : { 
            201101 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1450" }
            ],
            201201 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1495" }
            ],
            201401 : [ 
                { section: "001", url: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID=1558" }
            ] 
        },
        ORGB685 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11171" }
            ] 
        },
        PHGY209 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12213" },
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12080" }
            ] 
        },
        PHGY210 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12906" },
                { section: "002", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=13060" }
            ] 
        },
        PHGY212 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12107" }
            ] 
        },
        PHGY314 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12215" }
            ] 
        },
        PHIL210 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=9987" }
            ] 
        },
        PHTH440 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10806" }
            ] 
        },
        PHTH551 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12229" }
            ] 
        },
        PHYS102 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12987" }
            ] 
        },
        POLI227 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12798" }
            ] 
        },
        POLI243 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10977" }
            ] 
        },
        POLI346 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10463" }
            ] 
        },
        POTH225 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12554" }
            ] 
        },
        POTH401 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11249" }
            ] 
        },
        POTH563 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11771" }
            ] 
        },
        POTH684 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10736" }
            ],
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12500" }
            ] 
        },
        PSYC215 : { 
            201501 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11129" }
            ] 
        },
        PSYC331 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10132" }
            ],
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11817" }
            ] 
        },
        PSYC337 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10483" }
            ] 
        },
        PSYC410 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10484" }
            ] 
        },
        SOCI225 : { 
            201509 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=11839" }
            ] 
        },
        SOCI254 : { 
            201409 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=10039" }
            ] 
        },
        SOCI265 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12600" }
            ] 
        },
        SOCI270 : { 
            201601 : [ 
                { section: "001", url: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=12601" }
            ] 
        }
    };








    profState = "";
    if(debugMode){console.log(profState);}


    courseName = url.match(/courses\/([A-Za-z]{4}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();


    courseTerms = document.getElementsByClassName("catalog-terms")[0].innerHTML;
    courseTermsCodes = [];
    if (courseTerms.match(/Fall/) != null) {
        courseTermsCodes.push( {name: "Fall " + urlYearF,  code: urlYearF + "09"} );
    }
    if (courseTerms.match(/Winter/) != null) {
        courseTermsCodes.push( {name: "Winter " + urlYearW,  code: urlYearW + "01"} );
    }
    if (courseTerms.match(/Summer/) != null) {
        courseTermsCodes.push( {name: "Summer " + urlYearW,  code: urlYearW + "05"} );
    }
    if(debugMode){console.log(courseTermsCodes);}


    courseEvalParams = {
        courseSubject: courseName.split("-")[0],
        courseNumber: courseName.split("-")[1],
        autoSubmit: true
    };
    courseEvalParamsString = courseEvalParams;


    ME_data = {
        docuum: { 
            url: "http://www.docuum.com/McGill/" + courseEvalParams.courseSubject + "/" + courseEvalParams.courseNumber, 
            valid: false
        },
        vsbFall: { 
            url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearF + "09=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, 
            valid: false
        },
        vsbWinter: { 
            url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearW + "01=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, 
            valid: false
        },
        done: 0,
        total: (urlYearF >= sysYear-1 ? 3 : 1),
        codeReady: false
    }
    if(debugMode){console.log(ME_data);}
    validateExternalLinks();

    

    profs = [];
    profsF = [];
    profsW = [];
    profsS = [];

    profsSource = document.getElementsByClassName("catalog-instructors")[0].innerHTML;
    profsSource = profsSource.split("Instructors:")[1];
    newProfsHTML = ""

    profsSourceF = profsSource.split("(Fall)");
    if (profsSourceF.length > 1) {
        profsF = profsSourceF[0].split(",");
        newProfsHTML += "<p>Instructors (Fall): "
        for (p=0; p<profsF.length; p++) {
            profsF[p] = profsF[p].trim();
            profs.push(profsF[p]);
            search = "mcgill " + profsF[p].match(/([^\s]+)\s.+/)[1] + " " + profsF[p].match(/.+\s([^\s]+)/)[1];
            newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + profsF[p].replace(/ /g, "&nbsp") +"</a>");
            if (p <= profsF.length-2) {
                newProfsHTML += ", "
            }
            if (p == profsF.length-2) {
                newProfsHTML += "and "
            }
        }
        newProfsHTML += "</p>"
        if(debugMode){console.log(profsF);}
        profsSource = profsSourceF[1]
    }

    profsSourceW = profsSource.split("(Winter)");
    if (profsSourceW.length > 1) {
        profsW = profsSourceW[0].split(",");
        newProfsHTML += "<p>Instructors (Winter): "
        for (p=0; p<profsW.length; p++) {
            profsW[p] = profsW[p].trim();
            profs.push(profsW[p]);
            search = "mcgill " + profsW[p].match(/([^\s]+)\s.+/)[1] + " " + profsW[p].match(/.+\s([^\s]+)/)[1];
            newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + profsW[p].replace(/ /g, "&nbsp") +"</a>");
            if (p <= profsW.length-2) {
                newProfsHTML += ", "
            }
            if (p == profsW.length-2) {
                newProfsHTML += "and "
            }
        }
        newProfsHTML += "</p>"
        if(debugMode){console.log(profsW);}
        profsSource = profsSourceW[1]
    }

    profsSourceS = profsSource.split("(Summer)");
    if (profsSourceS.length > 1) {
        profsS = profsSourceS[0].split(",");
        newProfsHTML += "<p>Instructors (Summer): "
        for (p=0; p<profsS.length; p++) {
            profsS[p] = profsS[p].trim();
            profs.push(profsS[p]);
            search = "mcgill " + profsS[p].match(/([^\s]+)\s.+/)[1] + " " + profsS[p].match(/.+\s([^\s]+)/)[1];
            newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=" + search + "' class=\"tooltip\"  title=\"" + loadMessage + "\">" + profsS[p].replace(/ /g, "&nbsp") +"</a>");
            if (p <= profsS.length-2) {
                newProfsHTML += ", "
            }
            if (p == profsS.length-2) {
                newProfsHTML += "and "
            }
        }
        newProfsHTML += "</p>"
        if(debugMode){console.log(profsS);}
        profsSource = profsSourceS[1]
    }

    document.getElementsByClassName("catalog-instructors")[0].innerHTML = newProfsHTML

    if (profs.length > 0) {
        var profs = profs.filter(function(elem, pos) {
            return profs.indexOf(elem) == pos;
        });
        if(debugMode){console.log(profs)}

        profStateObject = {
            total: profs.length,
            done: 0
        };
        profState = profStateObject;
        if(debugMode){console.log(profState);}

        for (a=0; a< profs.length; a++) {
            var profName = profs[a].split(" ");
            getProfUrl(profName[0], profName[profName.length-1], false, -1);
        }
    }




    newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;




    urlDep = url.match(/.+([A-Za-z]{4})-[0-9]{3}/)[1].toUpperCase();
    courses = newContent.match(/[A-Z]{4}\s[0-9]{3}/g);
    depsDup = [urlDep];
    if (courses != null)
    {
        for (c=0; c<courses.length; c++)
        {
            depsDup.push(courses[c].match(/([A-Z]{4})\s[0-9]{3}/)[1]);
        }
    }
    var deps = depsDup.filter(function(elem, pos) {
        return depsDup.indexOf(elem) == pos;
    });



    document.getElementsByTagName("body")[0].style.lineHeight = "1.125em";

    var sidebar = document.createElement('div');
    sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");
    sidebar.style.minWidth = "280px";
    sidebar.style.border = "0px";


    


    var formsBlock = document.createElement('div');
    formsBlock.id = "formsBlock";
    formsBlock.style.marginBottom = (isNewStyle ? "10px" : "0px");
    formsBlock.style.padding = "10px 0px";
    sidebar.appendChild(formsBlock);

    var courseEval = document.createElement('div');
    courseEval.style.margin = "0px 0px 8px 0px";
    formsBlock.appendChild(courseEval);

    var courseEvalTitle = document.createElement(isNewStyle ? "h3" : "h4");
    courseEvalTitle.innerHTML = "Mercury Evaluations";
    courseEvalTitle.style.margin = "0px";
    courseEval.appendChild(courseEvalTitle);

    var courseEvalForm = document.createElement('form');
    courseEvalForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form");
    courseEvalForm.setAttribute("method", "POST");
    courseEvalForm.setAttribute("name", "search_form");
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"subj_tab_in\" value=\"" + courseEvalParams.courseSubject + "\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"crse_in\" value=\"" + courseEvalParams.courseNumber + "\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"title_in\" value=\"\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"inst_tab_in\" value=\"\">";
    courseEvalForm.innerHTML += "<input type=\"hidden\" name=\"form_mode\" value=\"ar\">";
    courseEval.appendChild(courseEvalForm);

    var courseEvalButton = document.createElement('input');
    courseEvalButton.setAttribute("type", "submit");
    courseEvalButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
    courseEvalButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
    courseEvalButton.setAttribute("name", "");
    courseEvalButton.setAttribute("value", "View " + courseEvalParams.courseSubject + " " + courseEvalParams.courseNumber + " Evaluations");
    courseEvalButton.className = "form-submit";
    courseEvalButton.style.width="100%";
    courseEvalButton.style.height="35px";
    courseEvalButton.style.margin="4px 0px";
    if (isNewStyle) {
        courseEvalButton.style.border = "1px solid #5B5B5A";
        courseEvalButton.style.WebkitBoxShadow  = "none";
        courseEvalButton.style.boxShadow = "none";
    }
    courseEvalForm.appendChild(courseEvalButton);


    if (courseTermsCodes.length > 0) {

        //formsBlock.appendChild(document.createElement("br"));

        var courseReg = document.createElement('div');
        courseReg.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(courseReg);

        var courseRegTitle = document.createElement(isNewStyle ? "h3" : "h4");
        courseRegTitle.innerHTML = "Minerva Registration";
        courseRegTitle.style.margin = "0px";
        courseReg.appendChild(courseRegTitle);

        for (var i = 0; i < courseTermsCodes.length; i++) {

            var courseRegForm = document.createElement('form');
            courseRegForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced");
            courseRegForm.setAttribute("method", "POST");
            courseRegForm.setAttribute("onsubmit", "return checkSubmit();");
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"rsts\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"crn\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"term_in\" value=\"" + courseTermsCodes[i].code + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_day\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_schd\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_insm\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_camp\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_levl\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_sess\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_instr\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_ptrm\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_attr\" value=\"dummy\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_subj\" value=\"" + courseEvalParams.courseSubject + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_coll\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_crse\" value=\"" + courseEvalParams.courseNumber + "\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_title\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_schd\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_from_cred\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_to_cred\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_levl\" value=\"\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_ptrm\" value=\"%\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_instr\" value=\"%\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"sel_attr\" value=\"%\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_hh\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_mi\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"begin_ap\" value=\"a\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_hh\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_mi\" value=\"0\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"end_ap\" value=\"a\">";
            courseRegForm.innerHTML += "<input type=\"hidden\" name=\"path\" value=\"1\">";
            courseReg.appendChild(courseRegForm);

            var courseRegButton = document.createElement('input');
            courseRegButton.setAttribute("type", "submit");
            courseRegButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            courseRegButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            courseRegButton.setAttribute("name", "SUB_BTN");
            courseRegButton.setAttribute("value", "View " + courseTermsCodes[i].name + " Registration");
            courseRegButton.className = "form-submit";
            courseRegButton.style.width="100%";
            courseRegButton.style.height="35px";
            courseRegButton.style.margin="4px 0px";
            if (isNewStyle) {
                courseRegButton.style.border = "1px solid #5B5B5A";
                courseRegButton.style.WebkitBoxShadow  = "none";
                courseRegButton.style.boxShadow = "none";
            }
            courseRegForm.appendChild(courseRegButton);

        }
    }


    var sidebarBlock = document.createElement('div');
    sidebarBlock.className = "block";
    sidebarBlock.style.padding = "16px 10px";
    sidebarBlock.style.minWidth = "260px";
    if (isNewStyle) {
        sidebarBlock.style.border = "1px solid #eee";
        sidebarBlock.style.marginBottom = "16px";
    }
    sidebar.appendChild(sidebarBlock);

    var sidebarBlockTitle = document.createElement('h3');
    sidebarBlockTitle.innerHTML = "Related Courses"
    sidebarBlockTitle.style.maxWidth = "100%";
    if (isNewStyle) {
        sidebarBlockTitle.style.background = "#DBDBDB";
    }
    sidebarBlock.appendChild(sidebarBlockTitle);


    if (deps.length > 0) {

        var deptCourses = document.createElement('div');
        deptCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(deptCourses);

        var deptCoursesTitle = document.createElement('div');
        deptCoursesTitle.className = "view-header";
        deptCoursesTitle.innerHTML = "<i>View Related Courses by Subject</i>";
        deptCourses.appendChild(deptCoursesTitle);

        for (d = 0; d<deps.length; d++)
        {
            deptCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search?" + (isNewStyle ? "f[0]=field_subject_code%3A" : "filters=ss_subject%3A") + deps[d];

            var deptCoursesLinkDiv = document.createElement('div');
            deptCoursesLinkDiv.className = d==deps.length-1 ? "views-row views-row-last" : "views-row";
            deptCourses.appendChild(deptCoursesLinkDiv);

            var deptCoursesLink = document.createElement('a');
            deptCoursesLink.setAttribute("href", deptCoursesURL);
            deptCoursesLink.innerHTML = deps[d] + " Courses";
            deptCoursesLinkDiv.appendChild(deptCoursesLink);
        }
    }

        
        
    if (profs.length > 0) {

        var profCourses = document.createElement('div');
        profCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(profCourses);

        var profCoursesTitle = document.createElement('div');
        profCoursesTitle.className = "view-header";
        profCoursesTitle.innerHTML = "<i>View Related Courses by Professor</i>";
        profCourses.appendChild(profCoursesTitle);

        for (p = 0; p < profs.length; p++) {
            prof = profs[p].replace(/\s/g, "%20");
            //https://www.mcgill.ca/study/2016-2017/courses/search?search_api_views_fulltext=thomas&sort_by=field_subject_code
            //url = "https://www.mcgill.ca/study/" + urlYears + "/search/apachesolr_search/\"" + prof + "\"?filters=type%3Acatalog";
            profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + prof;

            var profCoursesLinkDiv = document.createElement('div');
            profCoursesLinkDiv.className = p==profs.length-1 ? "views-row views-row-last" : "views-row";
            profCourses.appendChild(profCoursesLinkDiv);

            var profCoursesLink = document.createElement('a');
            profCoursesLink.setAttribute("href", profCoursesURL);
            profCoursesLink.innerHTML = profs[p];
            profCoursesLinkDiv.appendChild(profCoursesLink);
        }
    }


    if (document.getElementsByClassName("view-catalog-program").length > 0) {

        var sidebarBlock = document.createElement('div');
        sidebarBlock.className = "block";
        sidebarBlock.style.padding = "16px 10px";
        sidebarBlock.style.minWidth = "260px";
        if (isNewStyle) {
            sidebarBlock.style.border = "1px solid #eee";
            sidebarBlock.style.marginBottom = "16px";
        }
        sidebar.appendChild(sidebarBlock);

        var sidebarBlockTitle = document.createElement('h3');
        sidebarBlockTitle.innerHTML = "Related Programs"
        sidebarBlockTitle.style.maxWidth = "100%";
        if (isNewStyle) {
            sidebarBlockTitle.style.background = "#DBDBDB";
        }
        sidebarBlock.appendChild(sidebarBlockTitle);

        relatedPrograms = document.getElementsByClassName("view-catalog-program")[0];
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(relatedPrograms);
    }

        //insert enhanced sidebar
    var container = document.getElementById(isNewStyle ? "inner-container" : "container");
    if (document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar") != null) {
        document.createElement("div").appendChild(document.getElementById(isNewStyle ? "sidebar-column" : "right-sidebar"));
    }
    if (isNewStyle) {
        document.getElementById("main-column").style.maxWidth = "620px";
        document.getElementById("main-column").style.float = "left"; //check comp 553
        container.appendChild(sidebar);
    }
    else {
        document.getElementById("center-column").style.width = "620px";
        container.insertBefore(sidebar, document.getElementById("footer"));
    }

    ME_data.codeReady = true

    if (ME_data.total == ME_data.done && ME_data.codeReady == true) {
        addVerifiedLinks(sidebar);
    }
    
    



}
else {

    //Replace Course names with links to course overview page
    cns = document.getElementsByClassName("program-course-description-inner");
    for (cn = 0; cn<cns.length; cn++)
    {
        newContent = document.getElementsByClassName("program-course-description-inner")[cn].innerHTML
        newContent = newContent.replace(/<li>(.+)<.li>/g, "<p>$1</p>");
        newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
        document.getElementsByClassName("program-course-description-inner")[cn].innerHTML = newContent;
    }
}



function addVerifiedLinks (sidebar) {
    
    if (ME_data.vsbFall.valid || ME_data.vsbWinter.valid) {
        //console.log(xmlRequestInfo);
        var vsb = document.createElement('div');
        vsb.style.margin = "0px 0px 8px 0px";
        //vsb.id = "vsb";
        formsBlock.appendChild(vsb);

        var vsbTitle = document.createElement(isNewStyle ? "h3" : "h4");
        vsbTitle.innerHTML = "Visual Schedule Builder";
        vsbTitle.style.margin = "0px";
        vsb.appendChild(vsbTitle);

        if (ME_data.vsbFall.valid) {
            var vsbFallForm = document.createElement('form');
            vsbFallForm.setAttribute("action", ME_data.vsbFall.url);
            vsbFallForm.setAttribute("method", "POST");
            vsb.appendChild(vsbFallForm);

            var vsbFallButton = document.createElement('input');
            vsbFallButton.setAttribute("type", "submit");
            vsbFallButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            vsbFallButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            vsbFallButton.setAttribute("value", "View on VSB Fall " + urlYearF);
            vsbFallButton.className = "form-submit";
            vsbFallButton.style.width="100%";
            vsbFallButton.style.height="35px";
            vsbFallButton.style.margin="4px 0px";
            if (isNewStyle) {
                vsbFallButton.style.border = "1px solid #5B5B5A";
                vsbFallButton.style.WebkitBoxShadow  = "none";
                vsbFallButton.style.boxShadow = "none";
            }
            vsbFallForm.appendChild(vsbFallButton);
        }
        if (ME_data.vsbWinter.valid) {
            var vsbWinterForm = document.createElement('form');
            vsbWinterForm.setAttribute("action", ME_data.vsbWinter.url);
            vsbWinterForm.setAttribute("method", "POST");
            vsb.appendChild(vsbWinterForm);

            var vsbWinterButton = document.createElement('input');
            vsbWinterButton.setAttribute("type", "submit");
            vsbWinterButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            vsbWinterButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            vsbWinterButton.setAttribute("value", "View on VSB Winter " + urlYearW);
            vsbWinterButton.className = "form-submit";
            vsbWinterButton.style.width="100%";
            vsbWinterButton.style.height="35px";
            vsbWinterButton.style.margin="4px 0px";
            if (isNewStyle) {
                vsbWinterButton.style.border = "1px solid #5B5B5A";
                vsbWinterButton.style.WebkitBoxShadow  = "none";
                vsbWinterButton.style.boxShadow = "none";
            }
            vsbWinterForm.appendChild(vsbWinterButton);
        }
    }

    wikinotesURL = wikinotes[courseEvalParams.courseSubject + courseEvalParams.courseNumber]

    if (ME_data.docuum.valid || wikinotesURL != null) {

        var other = document.createElement('div');
        other.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(other);

        var otherTitle = document.createElement(isNewStyle ? "h3" : "h4");
        otherTitle.innerHTML = "Other resources";
        otherTitle.style.margin = "0px";
        other.appendChild(otherTitle);
    }

    if (ME_data.docuum.valid) {

        var docuumForm = document.createElement('form');
        docuumForm.setAttribute("action", ME_data.docuum.url);
        docuumForm.setAttribute("method", "POST");
        other.appendChild(docuumForm);

        var docuumButton = document.createElement('input');
        docuumButton.setAttribute("type", "submit");
        docuumButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
        docuumButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
        docuumButton.setAttribute("value", "View " + courseEvalParams.courseSubject + " " + courseEvalParams.courseNumber + " on Docuum");
        docuumButton.className = "form-submit";
        docuumButton.style.width="100%";
        docuumButton.style.height="35px";
        docuumButton.style.margin="4px 0px";
        if (isNewStyle) {
            docuumButton.style.border = "1px solid #5B5B5A";
            docuumButton.style.WebkitBoxShadow  = "none";
            docuumButton.style.boxShadow = "none";
        }
        docuumForm.appendChild(docuumButton);
    }

    if (wikinotesURL != null) {

        var wikinotesForm = document.createElement('form');
        wikinotesForm.setAttribute("action", wikinotesURL);
        other.appendChild(wikinotesForm);

        var wikinotesButton = document.createElement('input');
        wikinotesButton.setAttribute("type", "submit");
        wikinotesButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
        wikinotesButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
        wikinotesButton.setAttribute("value", "View " + courseEvalParams.courseSubject + " " + courseEvalParams.courseNumber + " on Wikinotes");
        wikinotesButton.className = "form-submit";
        wikinotesButton.style.width="100%";
        wikinotesButton.style.height="35px";
        wikinotesButton.style.margin="4px 0px";
        if (isNewStyle) {
            wikinotesButton.style.border = "1px solid #5B5B5A";
            wikinotesButton.style.WebkitBoxShadow  = "none";
            wikinotesButton.style.boxShadow = "none";
        }
        wikinotesForm.appendChild(wikinotesButton);
    }



    course = courseEvalParams.courseSubject + courseEvalParams.courseNumber
    recordingsExist = false;
    for (var t = 0; t < courseTermsCodes.length; t++) {
        termRecordingURLs = recordingURLs[course][courseTermsCodes[t].code];
        if (termRecordingURLs != null) {
            recordingsExist = true;
        }
    }
    if (recordingsExist) {

        var recordings = document.createElement('div');
        recordings.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(recordings);

        var recordingsTitle = document.createElement(isNewStyle ? "h3" : "h4");
        recordingsTitle.innerHTML = "Lecture Recordings";
        recordingsTitle.style.margin = "0px";
        recordings.appendChild(recordingsTitle);

        for (var t = 0; t < courseTermsCodes.length; t++) {
            termRecordingURLs = recordingURLs[courseEvalParams.courseSubject + courseEvalParams.courseNumber][courseTermsCodes[t].code];
            if (termRecordingURLs != null) {

                for (var r = 0; r < termRecordingURLs.length; r++) {

                    var recordingsForm = document.createElement('form');
                    recordingsForm.setAttribute("action", termRecordingURLs[r].url);
                    recordingsForm.setAttribute("method", "POST");
                    recordings.appendChild(recordingsForm);

                    var recordingsButton = document.createElement('input');
                    recordingsButton.setAttribute("type", "submit");
                    recordingsButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
                    recordingsButton.setAttribute("onmouseout", "this.style.backgroundColor=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
                    recordingsButton.setAttribute("value", "View Lectures from " + courseTermsCodes[t].name + " Sec. " + termRecordingURLs[r].section);
                    recordingsButton.className = "form-submit";
                    recordingsButton.style.width="100%";
                    recordingsButton.style.height="35px";
                    recordingsButton.style.margin="4px 0px";
                    if (isNewStyle) {
                        recordingsButton.style.border = "1px solid #5B5B5A";
                        recordingsButton.style.WebkitBoxShadow  = "none";
                        recordingsButton.style.boxShadow = "none";
                    }
                    recordingsForm.appendChild(recordingsButton);    
                }
                
            }
        }
    }   
    
}


function validateExternalLinks() {

    validateDocuumLink(ME_data.docuum)

    if (urlYearF >= sysYear-1) {
        validateVSBLink(ME_data.vsbFall)
        validateVSBLink(ME_data.vsbWinter)
    }
}


function validateVSBLink(linkData) { 

    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: linkData.url
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {

        ME_data.done++;
        if(debugMode){console.log(ME_data);}

        if (data.responseXML != "error") {
            var htmlElement = document.createElement('div');
            htmlElement.innerHTML = data.responseXML
            if (htmlElement.getElementsByClassName("warningNoteGood").length > 0) {
                linkData.valid = true
            }
        }

        if (ME_data.total == ME_data.done && ME_data.codeReady == true) {
            addVerifiedLinks(sidebar);
        }  
    });

}


function validateDocuumLink(linkData) { 

    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: linkData.url
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {

        ME_data.done++;
        if(debugMode){console.log(ME_data);}

        if (data.responseXML != "error") {
            var htmlElement = document.createElement('div');
            htmlElement.innerHTML = data.responseXML
            if (htmlElement.getElementsByClassName("dialog").length == 0) {
                linkData.valid = true
            }
        }
        
        if (ME_data.total == ME_data.done && ME_data.codeReady == true) {
            addVerifiedLinks(sidebar);
        }  
    });

}








