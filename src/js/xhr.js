/* script to listen to network requests.
   The url captured contains the download link.
   Every mcgill lecture download link starts with pcdn (pcdn01, pcdn02, ...)
  */
chrome.webRequest.onCompleted.addListener(function(details) {
  
    if (details.url.search("pcdn") != -1) {
      chrome.storage.sync.set({lecture: details.url}, function() {
        // The url is saved to storage and persists across sessions
        // ie. if you close the window and boot up again it will still be there.
        // if that is not desirable, could always clear at startup
        console.log("New url saved to lecture");
      });
  
    }
  
  }, {urls: ['*://*.mcgill.ca/*']});