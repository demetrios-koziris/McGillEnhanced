//alert("Running MinervaScheduleExtension");

function checkpage() {
  //alert("checkingpage");
  console.log(document.getElementsByClassName("pagetitlediv"));
  schedulePage = document.getElementsByClassName("pagetitlediv")[0].innerText.search("Student Schedule by Course Section");
  console.log(schedulePage);
  //inject script2.js into page

  if (schedulePage != -1) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('icsLib.js');
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(s);

    var t = document.createElement('script');
    t.src = chrome.extension.getURL('script.js');
    t.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(t);

  }
}

checkpage();
