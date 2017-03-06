
let isDevVersion = !('update_url' in chrome.runtime.getManifest())
document.getElementById('version').innerText = 'Version ' + chrome.app.getDetails().version + (isDevVersion ? ' DEV' : '');