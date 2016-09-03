//alert("Running MinervaScheduleExtension");

function injectScheduleDownloader() {
  try {
    logForDebug(document.getElementsByClassName("pagetitlediv"));
    schedulePage = document.getElementsByClassName("pagetitlediv")[0].innerText.search("Student Schedule by Course Section");
    logForDebug(schedulePage);

    //inject script.js into page
    if (schedulePage != -1) {

      var s = document.createElement('script');
      s.src = chrome.extension.getURL('lib/icsLib.js');
      s.onload = function() {
          this.parentNode.removeChild(this);
      };
      (document.head || document.documentElement).appendChild(s);

      var t = document.createElement('script');
      t.src = chrome.extension.getURL('js/script.js');
      t.onload = function() {
          this.parentNode.removeChild(this);
      };
      (document.head || document.documentElement).appendChild(t);

    }
  }
  catch(err) {
    logForDebug('Error: Not a "View Student Schedule by Course Section" page: ' + err.stack);
  }
}
