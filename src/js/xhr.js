chrome.webRequest.onCompleted.addListener(function(details) {
  
    if (details.url.search("pcdn") != -1) {
      chrome.storage.sync.set({lecture: details.url}, function() {
        console.log("New url saved to lecture");
      });
  
    }
  
  }, {urls: ['*://*.mcgill.ca/*']});