# McGill Enhanced
![GitHub](https://img.shields.io/github/license/demetrios-koziris/mcgillenhanced.svg)
![GitHub top language](https://img.shields.io/github/languages/top/demetrios-koziris/McGillEnhanced.svg)
![GitHub commits since latest release](https://img.shields.io/github/commits-since/demetrios-koziris/McGillEnhanced/latest.svg) 

#### A Browser Extension Improving the McGill.ca Website Experience

#### Install as [Chrome Extension](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en)  
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jlacaimkacnkhlcgapgakpklnibgfkde.svg?)](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/jlacaimkacnkhlcgapgakpklnibgfkde.svg)](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/jlacaimkacnkhlcgapgakpklnibgfkde.svg)](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde/reviews?hl=en/reviews)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/rating-count/jlacaimkacnkhlcgapgakpklnibgfkde.svg)](https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde/reviews?hl=en)

#### Install as [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/mcgillenhanced/)


#### View the [McGill Enhanced landing page](http://demetrios-koziris.github.io/McGillEnhanced/)


## Features

McGill Enhanced makes looking up courses and registration easier by providing direct access to Mercury course evaluations, archived lecture recordings, Docuum, Minerva Registration, Visual Schedule Builder and more for a given course all from the course overview page. It also adds a menu bar that lets you quickly jump to a different year's version of the given page as well as a quick links menu that you can access by clicking the McGill Enhanced icon in the chrome menu bar. 

For a full list of features, please see the following link:
#### [View Detailed Feature List](http://demetrios-koziris.github.io/McGillEnhanced/features)


## Building the extension using the `build.sh` script
#### Usage:  
```
command [option] [parameter]... 
```
#### Options:  
```
-c       Clean the /build directory before building  
```
#### Parameters:  
```
edge     Create an edge extension in /build  
chrome   Create a chrome extension in /build  
firefox  Create a firefox add-on in /build 
```
```
*If no parameters are passed, script will default to building the extension for every browser
```
#### Examples:
```
./build.sh
./build.sh -c
./build.sh chrome  
./build.sh -c edge  
./build.sh chrome firefox  
./build.sh -c edge chrome firefox  
```


## License

McGill Enhanced is a browser extension that improves the functionality and navigability of the McGill website.
Copyright (C) 2016 Demetrios Koziris. McGill is a University in Montreal, Quebec Canada and has no affiliation with this software.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

A copy of the GNU General Public License is provided in the LICENSE.txt file along with this program.  
The GNU General Public License can also be found at <https://www.gnu.org/licenses/gpl-3.0.html>.


