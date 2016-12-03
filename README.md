<h1>
  McGill Enhanced
</h1>

A Chrome Extension Improving the McGill.ca Website Experience

<h3>
  <a href="https://chrome.google.com/webstore/detail/mcgill-enhanced/jlacaimkacnkhlcgapgakpklnibgfkde?hl=en">Download from the Google Chrome Store</a>
</h3>

<h3>
  <a href="http://demetrios-koziris.github.io/McGillEnhanced/">View the McGill Enhanced landing page</a>
</h3>

<br>

<h2>
  Feature Summary
</h2>

McGill Enhanced makes looking up courses and registration easier by providing direct access to professor ratings (just hover over a prof name), Mercury course evaluations, archived lecture recordings, Docuum, Minerva Registration, Visual Schedule Builder and more for a given course all from the course overview page. It also adds a menu bar that lets you quickly jump to a different year's version of the given page as well as a quick links menu that you can access by clicking the McGill Enhanced icon in the chrome menu bar.

<br>


## Building the extension using the `build.sh` script
###Usage:  
```
command [option] [parameter]... 
```
###Options:  
```
-c       Clean the /build directory before building  
```
###Parameters:  
```
edge     Create an edge extension in /build  
chrome   Create a chrome extension in /build  
firefox  Create a firefox add-on in /build 
```
```
*If no parameters are passed, script will default to building the extension for every browser
```
###Examples:
```
./build.sh
./build.sh -c
./build.sh chrome  
./build.sh -c edge  
./build.sh chrome firefox  
./build.sh -c edge chrome firefox  
```



<br>

<h2>
  Feature Details
</h2>

<h3>
  McGill.ca Course Overview Pages
</h3>

  <img src="https://demetrios-koziris.github.io/McGillEnhanced/images/features-mcgill.png" alt="" style="width:100%;">

  <h4>
    A) Year Menu Bar
  </h4>
  <p>
    If you end up on another year's version of a given McGill.ca page, quickly jump to the current year's version or any other year by using the year menu bar.
  </p>

  <h4>
    B) RateMyProfessors Integration
  </h4>
  <p>
    Instead of manually searching for professor ratings, McGill enhanced will fetch professor ratings and show them in a tooltip when you hover over a professor name. Clicking the name will bring you to their RateMyProfessors page.
  </p>

  <h4>
    C) Sidebar: Course Reviews
  </h4>
  <p>
    Access Docuum course reviews and Mercury course evaluations (must already be logged into the Minerva system) directly from the sidebar of a course overview page.
  </p>

  <h4>
    D) Sidebar: Lecture Recordings
  </h4>
  <p>
    Access archived lecture recordings for certain courses (these archives are hosted at <a href="https://lrs.mcgill.ca/">lrs.mcgill.ca</a>) from the sidebar of a course overview page.
  </p>

  <h4>
    E) Sidebar: Minerva Registration
  </h4>
  <p>
    Access the Minerva registration page for a course directly from the sidebar (must already be logged into the Minerva system).
  </p>

  <h4>
    F) Sidebar: Other Resources
  </h4>
  <p>
    Access course documents in Docuum or other resources for a given course (such as the CSUS guide for COMP courses) from the sidebar.
  </p>

  <h4>
    G) Sidebar: Visual Schedule Builder 
  </h4>
  <p>
    Access the Visual Schedule Builder course listing for a course directly from the sidebar.
  </p>

  <h4>
    H) Sidebar: Related Courses
  </h4>
  <p>
    View all courses taught by the professors mentioned in the current course overview page or other courses in the programs mentioned in the current course overview page.
  </p>

<br>

<h3>
  Extension Menu
</h3>

  <h4>
    I) McGill Quick Links
  </h4>
  <p>
    Click on the McGill Enhanced icon in the chrome menu bar to access the extension menu and various McGill quick links such as email, Minerva, MyCourses, etc.
  </p>

  <h4>
    J) Other Resources
  </h4>
  <p>
    In addition to the McGill quick links, you can also access other useful resources from the McGill Enhanced menu.
  </p>

<br>

<h3>
  Visual Schedule Builder
</h3>

  <h4>
    K) One-Click Registration
  </h4>
  <p>
    Instead of having to copy the CRN codes from VSB and paste them into Minerva to register, simply click the McGill Enhanced button to register for your courses (must already be logged into Minerva).
  </p>

  <img src="https://demetrios-koziris.github.io/McGillEnhanced/images/features-vsb.png" alt="" style="width:100%;">

<br>

<h3>
  Minerva
</h3>

  <h4>
    L) Schedule Downloader
  </h4>
  <p>
    From Minerva > Student Menu > Registration Menu > View Student Schedule by Course Section, you can click the McGill Enhanced button to download your course schedule as a .ICS file which can then be imported into Google Calendar, Apple iCal, or Microsoft Outlook.
  </p>

  <img src="https://demetrios-koziris.github.io/McGillEnhanced/images/features-minerva.png" alt="" style="width:100%;">

<br>

<h2>
License
</h2>

McGill Enhanced is a chrome extension that improves the functionality and navigability of the McGill website.
Copyright (C) 2016 Demetrios Koziris. McGill is a University in Montreal, Quebec Canada and has no affiliation with this software.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

A copy of the GNU General Public License is provided in the LICENSE.txt file along with this program.  
The GNU General Public License can also be found at <https://www.gnu.org/licenses/gpl-3.0.html>.


