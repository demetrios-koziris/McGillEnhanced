/* script to listen to network requests.
   The url captured contains the download link.
   Every mcgill lecture download link starts with pcdn (pcdn01, pcdn02, ...)
  */

chrome.webRequest.onCompleted.addListener(function(details) {
  
    if (new URL(details.url).hostname.startsWith('pcdn')) {
        chrome.storage.sync.get('lecture', function(data) {
          if (details.url != data.lecture) {
            chrome.storage.sync.set({lecture: details.url}, function() {
              //console.log('New url saved to lecture');
            });
          }
      });
    }

  }, {urls: ['*://*.campus.mcgill.ca/api/tsmedia*']});