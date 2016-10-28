#!/bin/bash

if [ $# -ne 1 ] ; then
  echo "$0: Build script requires 1 argument specifying browser"
  exit 2
fi

browser=$1

if [ $browser != edge ] && [ $browser != firefox ] && [ $browser != chrome ]; then
	echo "$0: Browser argument must be edge, firefox, or chrome"
	exit 2
fi 

today=`date '+%Y_%m_%d__%H_%M_%S'`;
buildname="McGillEnhanced__"$today"__"$browser
echo "$0: Creating $browser version in build/$buildname"
mkdir -p build

if [ $browser == edge ]; then

	mkdir -p build/$buildname
	cp -r src/edge/background.html src/edge/backgroundScriptsAPIBridge.js src/edge/contentScriptsAPIBridge.js build/$buildname
	cp -r src/icons src/js src/lib src/manifest.json build/$buildname

	file=build/$buildname/manifest.json

	match='"author": "Demetrios Koziris",'
	insert='  "-ms-preload":{"backgroundScript":"backgroundScriptsAPIBridge.js","contentScript":"contentScriptsAPIBridge.js"},'  
	sed -i "s/$match/$match\n$insert/" $file

	sed -i '/"scripts"/d' $file  
	sed -i '/"persistent"/d' $file  
	match='"background": {'
	insertA='    "persistent": true'  
	insertB='    "page": "background.html",'  
	sed -i "s/$match/$match\n$insertA/" $file
	sed -i "s/$match/$match\n$insertB/" $file

	sed -i '/"default_title"/d' $file  
	match='"default_popup": "menu\/quicklinksMenu.html",'
	insertC='    "default_title": "Click to visit the McGill Enhanced site!"'   
	sed -i "s/$match/$match\n$insertC/" $file
	sed -i '/"default_popup"/d' $file  

	sed -i '/"default_popup"/d' $file 
	sed -i '/"js\/vsbEnhanced.js"/d' $file 
	sed -i '/"js\/scheduleDownloadInserter.js"/d' $file 

fi

if [ $browser == firefox ]; then

	match='"author": "Demetrios Koziris",'
	insert='  "applications":{"gecko":{"id":"extension@example.org"}},'
	file='src/manifest.json'
	sed -i "s/$match/$match\n$insert/" $file

	cd src
	zip -r ../build/$buildname.xpi icons js lib menu manifest.json
	cd ..

	sed -i '/"gecko"/d' $file   

fi

if [ $browser == chrome ]; then

	cd src
	zip -r ../build/$buildname.zip icons js lib menu manifest.json
	cd ..

fi