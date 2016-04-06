
if (url.match(/.+horizon.mcgill.ca\/pban1\/bzskmcer.p_display_form/) != null)
{
    //alert("Here is the mercury form for " + top.name.split("-")[0] + " " + top.name.split("-")[1]);
    document.getElementById('subj_id').value="" + top.name.split("-")[0].toUpperCase();
    if (top.name.split("-")[1] != undefined) {
        document.getElementById('crse_id').value="" + top.name.split("-")[1];
    }

    //document.forms[0].submit()
}
else {

    url = window.location.href;

    urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
    urlYearW = urlYearF+1;
    urlYears = urlYearF + "-" + urlYearW;
    sysYear = new Date().getFullYear();
    isNewStyle = document.getElementsByClassName("transition").length > 0;

    //Course name regex
    regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;

    if (url.match(/.+study.+courses.+[-]+/) != null) {

        courseName = url.match(/courses\/([A-Za-z]{4}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase();

        //Replace Course names with links to course overview page
        newContentElement = document.getElementById(isNewStyle ? "content" : "content-area");
        newContent = newContentElement.innerHTML;
        newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
        newContentElement.innerHTML = newContent;

        //create array of departments mentioned
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


        var container = document.getElementById(isNewStyle ? "block-system-main" : "content-area").getElementsByClassName("content")[0];


        var relatedCourses = document.createElement('div');

        var relatedCoursesTitle = document.createElement('h3');
        relatedCoursesTitle.innerHTML = "Related Courses Links"
        relatedCourses.appendChild(relatedCoursesTitle);

        var relatedCoursesDesc = document.createElement('p');
        relatedCoursesDesc.innerHTML = "Here are links to related programs by department or professor name."
        relatedCourses.appendChild(relatedCoursesDesc);
        container.appendChild(relatedCourses);



        for (d = 0; d<deps.length; d++)
        {
            depCoursesURL = "https://www.mcgill.ca/study/" + urlYears + "/courses/search?" + (isNewStyle ? "f[0]=field_subject_code%3A" : "filters=ss_subject%3A") + deps[d];

            //var depCoursesLink = document.createElement('input');
            //depCoursesLink.setAttribute("type", "button");
            //depCoursesLink.setAttribute("value", "See all " + deps[d] + " courses offered for the " + urlYears + " academic year.");
            //depCoursesLink.setAttribute("self.location", depCoursesURL);
            //depCoursesLink.style.marginBottom = "10px";

            var depCoursesLink = document.createElement('a');
            depCoursesLink.innerHTML = (isNewStyle ? "<p>" : "")
                + (!isNewStyle && d>0 ? "<br>" : "")
                + "See all " + deps[d] + " courses offered for the " + urlYears + " academic year."
                + (isNewStyle ? "</p>" : "");
            depCoursesLink.style.marginBottom = "10px";
            depCoursesLink.setAttribute("href", depCoursesURL);

            relatedCourses.appendChild(depCoursesLink);
        }


        var mcgillEnhancedLinks = document.createElement('div');
        mcgillEnhancedLinks.innerHTML = "<br>"
        container.appendChild(mcgillEnhancedLinks);

        var mcgillEnhancedLinksTitle = document.createElement('h3');
        mcgillEnhancedLinksTitle.innerHTML = "McGill Enhanced Links"
        mcgillEnhancedLinks.appendChild(mcgillEnhancedLinksTitle);

        var mcgillEnhancedLinksDesc = document.createElement('p');
        mcgillEnhancedLinksDesc.innerHTML = "Here are links to extra functionality provided by the McGill Enhanced Extension."
        mcgillEnhancedLinks.appendChild(mcgillEnhancedLinksDesc);

        var courseEval = document.createElement('div');
        mcgillEnhancedLinks.appendChild(courseEval);

        var courseEvalButton = document.createElement('input');
        courseEvalButton.setAttribute("type", "button");
        courseEvalButton.setAttribute("onclick", "top.name='" + courseName + "'");
        courseEvalButton.setAttribute("value", courseName.replace("-", " ") + " Mercury Course Evaluations");
        courseEvalButton.setAttribute("self.location", "https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form");
        courseEval.appendChild(courseEvalButton);

        var courseEvalDesc = document.createElement('p');
        courseEvalDesc.innerHTML = "Click here to view Mercury Evaluations for this course. (Must be signed into Minerva)";
        courseEval.appendChild(courseEvalDesc);











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





}


