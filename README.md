[![license](https://img.shields.io/github/license/demetrios-koziris/mcgillenhanced.svg?style=flat-square)](https://github.com/demetrios-koziris/McGillEnhanced/blob/master/LICENSE.txt)&nbsp;
[![top language](https://img.shields.io/github/languages/top/demetrios-koziris/McGillEnhanced.svg?style=flat-square)](https://github.com/demetrios-koziris/McGillEnhanced)&nbsp;
[![commits since latest release](https://img.shields.io/github/commits-since/demetrios-koziris/McGillEnhanced/latest.svg?style=flat-square)](https://github.com/demetrios-koziris/McGillEnhanced/releases)&nbsp;
[![made with love](https://img.shields.io/badge/made%20with-%E2%9D%A4-brightgreen.svg?style=flat-square&color=ED1B2F)](https://github.com/demetrios-koziris)


<br>

# McGill Enhanced

<h4 align="center">
  <img src="https://raw.githubusercontent.com/demetrios-koziris/McGillEnhanced/master/src/icons/mcgill-128.png">
  <br><br>
  A Browser Extension Enhancing the McGill User Experience
  <br><br>
  <a href="http://demetrios-koziris.github.io/McGillEnhanced">Website</a>
  • <a href="https://demetrios-koziris.github.io/McGillEnhanced/features">Features</a>
  • <a href="https://demetrios-koziris.github.io/McGillEnhanced/support">Support</a>
</h4>


<br>

## Installation

### [Chrome Extension](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en) compatible with &nbsp;&nbsp;[![chrome icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_24x24.png)](https://www.google.com/chrome/)&nbsp;&nbsp;[![edge icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_24x24.png)](https://www.microsoft.com/en-us/edge)&nbsp;&nbsp;[![brave icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/brave/brave_24x24.png)](https://brave.com/)&nbsp;&nbsp;[![opera icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_24x24.png)](https://www.opera.com/)&nbsp;&nbsp;[![vivaldi icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_24x24.png)](https://vivaldi.com/)&nbsp;&nbsp;[![chromium icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chromium/chromium_24x24.png)](https://download-chromium.appspot.com/)

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jlacaimkacnkhlcgapgakpklnibgfkde.svg?style=flat-square&logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en)&nbsp;
[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/jlacaimkacnkhlcgapgakpklnibgfkde.svg?style=flat-square&logo=&logoColor=white&label=total%20weekly%20users)](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en)&nbsp;

### [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/mcgillenhanced/) compatible with &nbsp;&nbsp;[![firefox icon](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_24x24.png)](https://www.mozilla.org/en-US/firefox/new/?v=b)&nbsp;&nbsp;[![waterfox icon](https://raw.githubusercontent.com/alrra/browser-logos/48.0.4/src/waterfox/waterfox_24x24.png)](https://www.waterfoxproject.org/en-US/)
 
[![Mozilla Add-on](https://img.shields.io/amo/v/mcgillenhanced.svg?style=flat-square&logo=firefox-browser&logoColor=white)](https://addons.mozilla.org/en-US/firefox/addon/mcgillenhanced/)&nbsp;
[![Mozilla Add-on](https://img.shields.io/amo/users/mcgillenhanced.svg?style=flat-square&logo=&logoColor=white&label=avg%20daily%20users)](https://addons.mozilla.org/en-US/firefox/addon/mcgillenhanced/)&nbsp;


<br>

## Features

McGill Enhanced makes looking up courses and registration easier by providing direct access to Mercury course evaluations, archived lecture recordings, Docuum, Minerva Registration, Visual Schedule Builder and more for a given course all from the course overview page. It also adds a menu bar that lets you quickly jump to a different year's version of the given page as well as a quick links menu that you can access by clicking the McGill Enhanced icon in the chrome menu bar. 

For a full list of features, please see the following link:
#### [View Detailed Feature List](http://demetrios-koziris.github.io/McGillEnhanced/features)


<br>

## Build Script

#### Usage:  
```
$ ./runbuild.sh [options] [<platform>...]
```
```
Options:
    -c       Clear the /build directory before building  
Platform:
    publish  For publishing in chrome web store or mozilla add-on site
    edge     For dev purposes (Edge extension)
    firefox  For dev purposes (Firefox add-on)
             If no parameters are passed, script will default to building all platforms
```
#### Examples:
```
$ ./runbuild.sh
$ ./runbuild.sh publish  
$ ./runbuild.sh -c edge  
$ ./runbuild.sh publish firefox  
```


<br>

## License

McGill Enhanced is a browser extension that improves the functionality and navigability of the McGill website.  
Copyright © Demetrios Koziris. McGill is a University in Montreal, Canada and has no affiliation with this software.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

The GNU General Public License is available in the [LICENSE file](https://github.com/demetrios-koziris/McGillEnhanced/blob/master/LICENSE.txt) of this repository and on the [GNU website](https://www.gnu.org/licenses/gpl-3.0.html).

