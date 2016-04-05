
url = window.location.href;

urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
urlYearW = urlYearF+1;
urlYears = urlYearF + "-" + urlYearW;
sysYear = new Date().getFullYear();


if (url.match(/.+study.+courses.+[-]+/) != null) {

    newContent = document.getElementById('content-area').innerHTML;

    //Replace Course names with links to course overview page
    regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
    newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");

    document.getElementById('content-area').innerHTML = newContent;
}
else {
    //Replace Course names with links to course overview page
    cns = document.getElementsByClassName("program-course-description-inner");
    for (cn = 0; cn<cns.length; cn++)
    {
        newContent = document.getElementsByClassName("program-course-description-inner")[cn].innerHTML
        newContent = newContent.replace(/<li>(.+)<.li>/g, "<p>$1</p>");
        regex = /([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
        newContent = newContent.replace(regex, "<a href=\"http://www.mcgill.ca/study/" + urlYears + "/courses/$1-$2\">$1 $2</a>");
        document.getElementsByClassName("program-course-description-inner")[cn].innerHTML = newContent;
    }
}






