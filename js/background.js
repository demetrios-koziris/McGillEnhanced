chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "https://demetrios-koziris.github.io/McGillEnhanced/supportme"}, function (tab) {
        console.log("New tab launched with https://demetrios-koziris.github.io/McGillEnhanced/supportme");
    });
});