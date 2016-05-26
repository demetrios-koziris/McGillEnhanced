start = Date.now();



debugMode = false;
if(debugMode){console.log("McGill Enhanced Debug mode is ON");}

url = window.location.href;

//var loadMessage = "McGill Enhanced is loading ratings for this professor&#13Please hover mouse off then back on to refresh this tooltip";
var loadMessage = "McGill Enhanced is loading ratings!";

function encodeSymbolsWin1252(string) {
    return encodeURI(string).replace(/\%C3\%8/g, "%C").replace(/\%C3\%9/g, "%D").replace(/\%C3\%A/g, "%E").replace(/\%C3\%B/g, "%F").replace(/\'/, "%27");
}

function updateProfURL(profKey, profURL) {
    profElements = document.getElementsByClassName(profKey);
    for (var p = 0; p < profElements.length; p++) {
        profElements[p].href = profURL;
    }
}


function getProfUrl(profName, general) {

    var profURL = "http://www.ratemyprofessors.com/search.jsp?query=mcgill " + profName.firstName + " " + profName.lastName + " " ;
    if (general) {
        profURL = "http://www.ratemyprofessors.com/search.jsp?query=mcgill " + profName.lastName + " ";
    }

    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
        try {
            if (data.responseXML == "error") {
                console.log(data)
                tooltipContent = "Ratemyprofessors data failed to load<br>Please refresh the page to try again"
                makeProfSection(profName, profURL, tooltipContent);
            }
            else {
                var profURL = data.url;
                var profURLHTML = data.responseXML;

                htmlParser = new DOMParser();
                htmlDoc = htmlParser.parseFromString(data.responseXML, "text/html");

                listings = htmlDoc.getElementsByClassName("listing PROFESSOR")

                if (listings.length == 0) { 
                    if (general) {
                        getProfContent(profName, profURL, 0);
                    }
                    else {
                        getProfUrl(profName, true);
                    }
                }
                else if (listings.length == 1) {               
                    var profURLId = listings[0].innerHTML.match(/(ShowRatings.jsp.tid.[0-9]+)"/)[1];
                    profURL = "http://www.ratemyprofessors.com/" + profURLId;
                    getProfContent(profName, profURL, 1);
                }
                else {
                    getProfContent(profName, profURL, 2);
                }
            }
        }
        catch(err) {
            console.log("Error: " + profName.firstName + " " + profName.lastName + " " + err);
        }
    });
}


function getProfContent(profName, profURL, res) {
    updateProfURL(profName.fullNameKey, profURL)

    var xmlRequestInfo = {
        method: 'GET',
        action: 'xhttp',
        url: profURL,
    }
    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
        try {
            if (data.responseXML == "error") {
                console.log(data)
                tooltipContent = "Ratemyprofessors data failed to load<br>Please refresh the page to try again"
                makeProfSection(profName, profURL, tooltipContent);
            }
            else {
                var profURL = data.url;
                var profURLHTML = data.responseXML;

                htmlParser = new DOMParser();
                htmlDoc = htmlParser.parseFromString(data.responseXML, "text/html");

                var rating = {
                    firstName: "ERROR",
                    lastName: "ERROR",
                    overall: "ERROR",
                    difficulty: "ERROR",
                    takeagain: "ERROR",
                    hotness: "ERROR",
                    numOfRatings: "ERROR"
                }
                
                if (res == 0) {
                    tooltipContent = "Instructor not found";
                }
                else if (res == 2) {
                    tooltipContent = "Multiple Instructors found<br>Please click to see results";
                }
                else if (res == 1) {
                    if (htmlDoc.getElementsByClassName("rating-count")[0] == null) {
                        //check holly dressel in ENVR400(13-14) and Sung Chul Noh in MGCR 222 at https://www.mcgill.ca/study/2012-2013/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-civil-engineering
                        tooltipContent = "This instructor has no ratings<br>Click to be the first to rate";
                    }
                    else {
                        gradeElements = htmlDoc.getElementsByClassName("grade");
                        if (gradeElements[0] != null) {
                            rating.overall = gradeElements[0].innerText.trim()
                        }
                        if (gradeElements[1] != null) {
                            rating.takeagain = gradeElements[1].innerText.trim()
                        }
                        if (gradeElements[2] != null) {
                            rating.difficulty = gradeElements[2].innerText.trim()
                        }
                        if (gradeElements[3] != null) {
                            rating.hotness = gradeElements[3].innerHTML
                            if (rating.hotness != null) {
                                rating.hotness = rating.hotness.match(/chilis\/([A-Za-z]+)\-chili\.png/)[1];
                            }
                        }
                        if (htmlDoc.getElementsByClassName("pfname")[0] != null) {
                            rating.firstName = htmlDoc.getElementsByClassName("pfname")[0].innerText.trim();
                        }
                        if (htmlDoc.getElementsByClassName("plname")[0] != null) {
                            rating.lastName = htmlDoc.getElementsByClassName("plname")[0].innerText.trim();
                        }
                        if (htmlDoc.getElementsByClassName("rating-count")[0] != null) {
                            rating.numOfRatings = htmlDoc.getElementsByClassName("rating-count")[0].innerText.match(/([0-9]+) Student Ratings/)[1]
                        }

                        tooltipContent = "<b>" + rating.firstName + " " + rating.lastName + "</b>"
                                       + "<br><b>" + rating.overall + "</b> Overall Quality"
                                       + "<br><b>" + rating.difficulty + "</b> Level Of Difficulty"
                                       + "<br><b>" + rating.takeagain + "</b> Would Take Again"
                                       + "<br>From <b>" + rating.numOfRatings + " student rating" + (rating.numOfRatings > 1 ? "s" : "") + "</b>"
                                       + "<br>Prof Hotness: <b>" + rating.hotness.toUpperCase() + "</b>"
                    }
                   
                }
                makeProfSection(profName, profURL, tooltipContent);
            }
        }
        catch(err) {
            console.log("Error: " + profName.firstName + " " + profName.lastName + " " + err);
        }
    });
}


function makeProfSection(profName, profURL, tooltipContent) {

    profElements = document.getElementsByClassName(profName.fullNameKey);
    for (var p = 0; p < profElements.length; p++) {
        profElements[p].title = tooltipContent;
    }

    if(debugMode){console.log("Ready for tooltipsy");}
    $("." + profName.fullNameKey).tooltipsy({
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
}





//Course name regex
//regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
regex = /([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;

if (url.match(/.+study.+courses.+[-]+/) != null) {

    addYearMenu();

    if (urlYearF <= 2010) {
        document.getElementById("inner-container").style.width = "100%";
    }



    wikinotesURLs = generateWikinotesURLs();
    docuumURLs = generateDocuumURLs();
    recordingURLs = generateRecordingURLs();



    courseName = url.match(/courses\/([A-Za-z]{3,4}[0-9]{0,1}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();


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
        vsbFall: { 
            url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearF + "09=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, 
            valid: false
        },
        vsbWinter: { 
            url: "https://vsb.mcgill.ca/criteria.jsp?session_" + urlYearW + "01=1&code_number=" + courseEvalParams.courseSubject + "+" + courseEvalParams.courseNumber, 
            valid: false
        },
        done: 0,
        total: (urlYearF >= sysYear-1 ? 2 : 0),
        codeReady: false
    }
    if(debugMode){console.log(ME_data);}
    validateExternalLinks();




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Replace Course names with links to course overview page
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    notesElement = document.getElementsByClassName("catalog-notes")[0];
    if (notesElement != null) {
        notesElement.innerHTML = notesElement.innerHTML.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
    }
    

    

    profs = {};
    profsLength = 0;
    profsF = [];
    profsW = [];
    profsS = [];

    profsSource = document.getElementsByClassName("catalog-instructors")[0].innerHTML;

    if (profsSource.match(/There are no professors/) == null) {

        profsSource = profsSource.split("Instructors:")[1];
        newProfsHTML = ""
        profsSourceF = profsSource.split("(Fall)");
        if (profsSourceF.length > 1) {
            profsF = profsSourceF[0].split(",");
            newProfsHTML += "<p>Instructors (Fall): "
            for (p=0; p<profsF.length; p++) {
                
                profsF[p] = profsF[p].trim()
                splitName = profsF[p].split(" ");
                
                profName = {
                    fullNameKey: profsF[p].replace(/\W/g, ''),
                    fullName: profsF[p].replace(/ /g, "&nbsp").replace(/-/g, "&#8209"),
                    firstName: encodeSymbolsWin1252(splitName[0]),
                    lastName: encodeSymbolsWin1252(splitName[splitName.length-1])
                }

                profs[profName.firstName+profName.lastName] = profName;
                newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=mcgill " + profName.firstName + " " + profName.lastName + " ' class=\"tooltip " + profName.fullNameKey + "\"  title=\"" + loadMessage + "\">" + profName.fullName + "</a>");
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

                profsW[p] = profsW[p].trim()
                splitName = profsW[p].split(" ");
                
                profName = {
                    fullNameKey: profsW[p].replace(/\W/g, ''),
                    fullName: profsW[p].replace(/ /g, "&nbsp").replace(/-/g, "&#8209"),
                    firstName: encodeSymbolsWin1252(splitName[0]),
                    lastName: encodeSymbolsWin1252(splitName[splitName.length-1])
                }

                profs[profName.firstName+profName.lastName] = profName;
                newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=mcgill " + profName.firstName + " " + profName.lastName + " ' class=\"tooltip " + profName.fullNameKey + "\"  title=\"" + loadMessage + "\">" + profName.fullName + "</a>");
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
                
                profsS[p] = profsS[p].trim()
                splitName = profsS[p].split(" ");
                
                profName = {
                    fullNameKey: profsS[p].replace(/\W/g, ''),
                    fullName: profsS[p].replace(/ /g, "&nbsp").replace(/-/g, "&#8209"),
                    firstName: encodeSymbolsWin1252(splitName[0]),
                    lastName: encodeSymbolsWin1252(splitName[splitName.length-1])
                }

                profs[profName.firstName+profName.lastName] = profName;
                newProfsHTML += ("<a href='http://www.ratemyprofessors.com/search.jsp?query=mcgill " + profName.firstName + " " + profName.lastName + " ' class=\"tooltip " + profName.fullNameKey + "\"  title=\"" + loadMessage + "\">" + profName.fullName + "</a>");

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


        profsLength = Object.keys(profs).length
        if (profsLength > 0) {
            if(debugMode){console.log(profs)}
            for (var prof in profs) {
                getProfUrl(profs[prof], false, -1);
            }
        }
    }




    newContent = document.getElementById(isNewStyle ? "main-column" : "content-area").innerHTML;



    courses = newContent.match(/[A-Z]{3,4}[0-9]{0,1}\s[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1}/g);
    depsDup = [courseEvalParams.courseSubject];
    if (courses != null)
    {
        for (c=0; c<courses.length; c++)
        {
            depsDup.push(courses[c].split(" ")[0])
        }
    }
    if(debugMode){console.log(depsDup);}
    var deps = depsDup.filter(function(elem, pos) {
        return depsDup.indexOf(elem) == pos;
    });



    document.getElementsByTagName("body")[0].style.lineHeight = "1.125em";

    var sidebar = document.createElement('div');
    sidebar.id = (isNewStyle ? "sidebar-column" : "right-sidebar");
    sidebar.style.minWidth = "280px";
    sidebar.style.border = "0px";


    
    courseName = courseEvalParams.courseSubject + courseEvalParams.courseNumber

    var formsBlock = document.createElement('div');
    formsBlock.id = "formsBlock";
    formsBlock.style.marginBottom = (isNewStyle ? "10px" : "0px");
    formsBlock.style.padding = "10px 0px";
    sidebar.appendChild(formsBlock);

    var courseEval = document.createElement('div');
    courseEval.style.margin = "0px 0px 8px 0px";
    formsBlock.appendChild(courseEval);

    var courseEvalTitle = document.createElement(isNewStyle ? "h3" : "h4");
    courseEvalTitle.innerHTML = "Course Reviews";
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
    courseEvalButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #e54944, #C5C5C5)" : "#ECF3FF") + "\"");
    //courseEvalButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
    courseEvalButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
    courseEvalButton.setAttribute("name", "");
    courseEvalButton.setAttribute("value", "View Mercury Course Evaluations");
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

    if (courseName in docuumURLs) {

        docuumURL = "http://www.docuum.com/McGill/review/read_course/" + docuumURLs[courseEvalParams.courseSubject + courseEvalParams.courseNumber]

        var docuumForm = document.createElement('form');
        docuumForm.setAttribute("action", docuumURL);
        docuumForm.setAttribute("method", "POST");
        courseEval.appendChild(docuumForm);

        var docuumButton = document.createElement('input');
        docuumButton.setAttribute("type", "submit");
        //docuumButton.setAttribute("onmouseover", "this.style.border=\"2px solid #5B5B5A\"");
        //docuumButton.setAttribute("onmouseout", "this.style.border=\"1px solid #5B5B5A\"");
        docuumButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #56afe5, #C5C5C5)" : "#ECF3FF") + "\"");
        //docuumButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
        docuumButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
        docuumButton.setAttribute("value", "View Docuum Course Reviews");
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


    if (courseName in recordingURLs) {

        var recordings = document.createElement('div');
        recordings.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(recordings);

        var recordingsTitle = document.createElement(isNewStyle ? "h3" : "h4");
        recordingsTitle.innerHTML = "Lecture Recordings";
        recordingsTitle.style.margin = "0px";
        recordings.appendChild(recordingsTitle);

        if (urlYearF in recordingURLs[courseName]) {
            yearRecordingURLs = recordingURLs[courseName][urlYearF]

            for (var r = 0; r < yearRecordingURLs.length; r++) {

                var recordingsForm = document.createElement('form');
                recordingsForm.setAttribute("action", yearRecordingURLs[r].url);
                recordingsForm.setAttribute("method", "POST");
                recordings.appendChild(recordingsForm);

                var recordingsButton = document.createElement('input');
                recordingsButton.setAttribute("type", "submit");
                recordingsButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #e54944, #C5C5C5)" : "#ECF3FF") + "\"");
                //recordingsButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
                recordingsButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
                recordingsButton.setAttribute("value", "View " + yearRecordingURLs[r].semester + " " + yearRecordingURLs[r].year + " Sec " + yearRecordingURLs[r].section + " Lectures");
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
        else {
            years = Object.keys(recordingURLs[courseName])
            maxYear = Math.max.apply(Math, years);

            maxYearURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, maxYear+"-"+(maxYear+1));

            var recordingsForm = document.createElement('form');
            recordingsForm.setAttribute("action", maxYearURL);
            recordings.appendChild(recordingsForm);

            var recordingsButton = document.createElement('input');
            recordingsButton.setAttribute("type", "submit");
            recordingsButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #e54944, #C5C5C5)" : "#ECF3FF") + "\"");
            //recordingsButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            recordingsButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
            recordingsButton.setAttribute("value", "View " + maxYear + "-" + (maxYear+1) + " for the latest Lectures");
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
            courseRegButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #e54944, #C5C5C5)" : "#ECF3FF") + "\"");            
            //courseRegButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            courseRegButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
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

    

    if (courseName in docuumURLs || courseName in wikinotesURLs) {

        var other = document.createElement('div');
        other.style.margin = "0px 0px 8px 0px";
        formsBlock.appendChild(other);

        var otherTitle = document.createElement(isNewStyle ? "h3" : "h4");
        otherTitle.innerHTML = "Other resources";
        otherTitle.style.margin = "0px";
        other.appendChild(otherTitle);
    }
    
    if (courseName in docuumURLs) {

        docuumURL = "http://www.docuum.com/McGill/document/view_class/" + docuumURLs[courseEvalParams.courseSubject + courseEvalParams.courseNumber]

        var docuumForm = document.createElement('form');
        docuumForm.setAttribute("action", docuumURL);
        docuumForm.setAttribute("method", "POST");
        other.appendChild(docuumForm);

        var docuumButton = document.createElement('input');
        docuumButton.setAttribute("type", "submit");
        docuumButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #56afe5, #C5C5C5)" : "#ECF3FF") + "\"");
        //docuumButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
        docuumButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
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

    if (courseName in wikinotesURLs) {

        wikinotesURL = "https://www.wikinotes.ca/" + wikinotesURLs[courseEvalParams.courseSubject + courseEvalParams.courseNumber]

        var wikinotesForm = document.createElement('form');
        wikinotesForm.setAttribute("action", wikinotesURL);
        other.appendChild(wikinotesForm);

        var wikinotesButton = document.createElement('input');
        wikinotesButton.setAttribute("type", "submit");
        wikinotesButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #FFFFFF, #C5C5C5)" : "#ECF3FF") + "\"");
        //wikinotesButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
        wikinotesButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
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

    profKeys = Object.keys(profs)
    if (profKeys.length > 0) {

        var profCourses = document.createElement('div');
        profCourses.className = "view-catalog-program";
        sidebarBlock.appendChild(document.createElement('br'));
        sidebarBlock.appendChild(profCourses);

        var profCoursesTitle = document.createElement('div');
        profCoursesTitle.className = "view-header";
        profCoursesTitle.innerHTML = "<i>View Related Courses by Professor</i>";
        profCourses.appendChild(profCoursesTitle);

        for (var p = 0; p < profKeys.length; p++) {
            profName = profs[profKeys[p]].fullName
            profURLName = profName.replace(/\&nbsp/g, "%20");
            //https://www.mcgill.ca/study/2016-2017/courses/search?search_api_views_fulltext=thomas&sort_by=field_subject_code
            //url = "https://www.mcgill.ca/study/" + urlYears + "/search/apachesolr_search/\"" + prof + "\"?filters=type%3Acatalog";
            profCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search" + (isNewStyle ? "?search_api_views_fulltext=" : "/") + profURLName;

            var profCoursesLinkDiv = document.createElement('div');
            profCoursesLinkDiv.className = (p==profKeys.length-1 ? "views-row views-row-last" : "views-row");
            profCourses.appendChild(profCoursesLinkDiv);

            var profCoursesLink = document.createElement('a');
            profCoursesLink.setAttribute("href", profCoursesURL);
            profCoursesLink.innerHTML = profName
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

    addYearMenu()

    //Replace Course names with links to course overview page
    courseSections = document.getElementsByClassName("program-course");
    for (c = 0; c<courseSections.length; c++) {

        notes = courseSections[c].getElementsByClassName("catalog-notes")[0];
        title = courseSections[c].getElementsByClassName("program-course-title")[0];

        courseURL = title.href
        courseName = courseURL.match(/courses\/(.+)/)[1].replace("-", " ").toUpperCase();

        link = document.createElement('h3');
        link.style.padding = "0px";
        link.style.margin = "0px";
        link.innerHTML = "<a style=\"background: none; padding-left: 0px\" href=\"" + courseURL + "\">" + courseName + "</a>"
        
        contentElement = courseSections[c].getElementsByClassName("content")[0]
        contentElement.insertBefore(link, contentElement.firstChild)

        if (notes != null) {
            notes.innerHTML = notes.innerHTML.replace(/<li>(.+)<.li>/g, "<p>$1</p>");
            notes.innerHTML = notes.innerHTML.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");   
        }
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
            vsbFallButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #7173f6, #C5C5C5)" : "#ECF3FF") + "\"");
            //vsbFallButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            vsbFallButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
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
            vsbWinterButton.setAttribute("onmouseover", "this.style.background=\"" + (isNewStyle ? "-webkit-linear-gradient(left, #7173f6, #C5C5C5)" : "#ECF3FF") + "\"");
            //vsbWinterButton.setAttribute("onmouseover", "this.style.backgroundColor=\"" + (isNewStyle ? "#9A9A9A" : "#ECF3FF") + "\"");
            vsbWinterButton.setAttribute("onmouseout", "this.style.background=\"" + (isNewStyle ? "#C5C5C5" : "#F4F5ED") + "\"");
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

    time = Date.now() - start;
    console.log("McGill Enhanced took " + time + " ms to improve this page!");
}


function validateExternalLinks() {

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

            htmlParser = new DOMParser();
            htmlDoc = htmlParser.parseFromString(data.responseXML, "text/html");
            if (htmlDoc.getElementsByClassName("warningNoteGood").length > 0) {
                linkData.valid = true
            }
        }

        if (ME_data.total == ME_data.done && ME_data.codeReady == true) {
            addVerifiedLinks(sidebar);
        }  
    });

}






