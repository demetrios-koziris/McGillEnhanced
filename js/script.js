

url = window.location.href;


urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
urlYearW = urlYearF+1;
urlYears = urlYearF + "-" + urlYearW;
sysYear = new Date().getFullYear();


if (urlYearF < 2016) {
    alert("McGill Enhanced is working on this page! OLD");
    //Add Year table to Breadcrumb
    newBreadcrumb = "<div><table width=\"100%\">";
    for (j = 2009; j<=sysYear; j+=10)
    {
        newBreadcrumb += "<tr>";
        for ( i=j; i<j+10; i++)
        {
            newurl = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));
            newurlHTML = "<a href='" + newurl + "'>"+i+"-"+(i+1)+"</a>";
            if (i <= sysYear)
            {
                if (i == urlYearF)
                {
                    newurlHTML = "<a style=\"color:#F4F4F4;\" href='" + newurl + "'>"+i+"-"+(i+1)+"</a>";
                    newurlHTML = "<b>" + newurlHTML + "</b>";
                    //F9F5EA
                    //newBreadcrumb += ("<td style=\"background-color:#ec7c79;\" align=center width=\"10%\">" + newurlHTML + "</td>");
                    newBreadcrumb += ("<td style=\"background-color:#2c566d;\" align=center width=\"10%\">" + newurlHTML + "</td>");
                }
                else
                {
                    newBreadcrumb += ("<td align=center width=\"10%\">" + newurlHTML + "</td>");
                }
            }
            else
            {
                newBreadcrumb += ("<td align=center width=\"10%\"><font color=#A6B2C0>"+i+"-"+(i+1)+"</font></td>");
            }
        }
        newBreadcrumb += "</tr>";
    }
    newBreadcrumb += "</table></div>";
    oldBreadcrumb = document.getElementsByClassName("breadcrumb")[0];
    oldBreadcrumb.style.paddingLeft = '0px';
    oldBreadcrumb.style.paddingTop = '0px';
    oldBreadcrumb.style.marginTop = '0px';
    oldBreadcrumb.style.width = '940px';
    oldBreadcrumb.innerHTML = newBreadcrumb + oldBreadcrumb;

///////////////////Delete note indicated that you are on the wrong year
    document.getElementById('top-content').innerHTML="";

}
else {
    alert("McGill Enhanced is working on this page! NEW");
    //Add Year table to Breadcrumb
    //newBreadcrumb = "<div id=\"navigation\"><div id=\"block-superfish-1\" class=\"block block-superfish\"><ul id=\"superfish-1\" class=\"menu sf-menu sf-main-menu sf-horizontal sf-style-none sf-total-items-7 sf-parent-items-1 sf-single-items-6 superfish-processed sf-js-enabled sf-shadow\">";
    newBreadcrumb = "<div id=\"navigation\" style=\"background-color:#FFFFFC;\"><div class=\"block block-superfish\"><ul class=\"menu sf-menu sf-main-menu sf-horizontal sf-style-none sf-total-items-7 sf-parent-items-1 sf-single-items-6 superfish-processed sf-js-enabled sf-shadow\">";

    for (j = 2009; j<=sysYear; j+=10)
    {
        for ( i=j; i<j+10; i++)
        {
            newurl = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));

            if (i <= sysYear)
            {
                if (i == urlYearF)
                {
                    newurlHTML = "<a style=\"color:#5b5b5a;;width:70px;padding-top:9px;padding-left:12px;\" href='" + newurl + "'><b>"+i+"-"+(i+1)+"</b></a>";
                    newBreadcrumb += ("<li style=\"background-color:#444844;pointer-events:none;\"><div style=\"background-color:#FFFFFC;border-radius:10px 10px 0px 00px;width:94px;height:41px;\">" + newurlHTML + "</div></li>");
                }
                else
                {

                    newurlHTML = "<a style=\"width:70px;\" href='" + newurl + "'>"+i+"-"+(i+1)+"</a>";
                    if (i == urlYearF-1) {
                        newBreadcrumb += ("<li style=\"background-color:#444844;border-radius:0px 0px 10px 0px;\">" + newurlHTML + "</li>");
                    }
                    else if (i == urlYearF+1) {
                        newBreadcrumb += ("<li style=\"background-color:#444844;border-radius:0px 0px 0px 10px;\">" + newurlHTML + "</li>");
                    }
                    else {
                        newBreadcrumb += ("<li style=\"background-color:#444844;\">" + newurlHTML + "</li>");
                    }

                }
            }
            else
            {
                newurlHTML = "<a style=\"color:#5b5b5a;width:70px;\">"+i+"-"+(i+1)+"</a>";
                if (i == urlYearF-1) {
                    newBreadcrumb += ("<li style=\"background-color:#444844;border-radius:0px 0px 10px 0px;pointer-events:none;\">" + newurlHTML + "</li>");
                }
                else if (i == urlYearF+1) {
                    newBreadcrumb += ("<li style=\"background-color:#444844;border-radius:0px 0px 0px 10px;pointer-events:none;\">" + newurlHTML + "</li>");
                }
                else {
                    newBreadcrumb += ("<li style=\"background-color:#444844;pointer-events:none;\">" + newurlHTML + "</li>");
                }
            }
        }
    }
    newBreadcrumb += "</div></div>";
    //newBreadcrumb += "</div>";
    //oldBreadcrumb = document.getElementsByClassName("breadcrumb")[0];
    //oldBreadcrumb = document.getElementById("navigation");

    //oldBreadcrumb.style.paddingLeft = '0px';
    //oldBreadcrumb.style.paddingTop = '0px';
    //oldBreadcrumb.style.marginTop = '0px';
    //oldBreadcrumb.style.width = '940px';
    //oldBreadcrumb.innerHTML = oldBreadcrumb.innerHTML;
    var container = document.getElementById("container");
    console.log(container.childNodes);
    var node = document.createElement('div');
    node.innerHTML = newBreadcrumb;
    container.insertBefore(node, container.childNodes[5]);
}
