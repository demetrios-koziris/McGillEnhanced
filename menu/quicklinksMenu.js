//From https://stackoverflow.com/questions/8915845/chrome-extension-open-a-link-from-popup-html-in-a-new-tab

window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})