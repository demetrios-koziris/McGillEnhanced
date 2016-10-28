#!/bin/bash

#  Usage: 
#    command [option] <parameter>...
#
#  Options:
#    -c       Clean the /build directory before building
#  Parameters:
#    edge     Create an edge extension in /build 
#    chrome   Create a chrome extension in /build
#    firefox  Create a firefox add-on in /build 
#
#  Examples :
#    ./build.sh chrome
#    ./build.sh -c edge
#    ./build.sh chrome firefox
#    ./build.sh -c edge chrome firefox


minArgs=1
while getopts "c" opt; do
  case $opt in
    c)
      minArgs=2
      echo "$0: Option -clean was triggered"
      ;;
  esac
done

if [ $# -lt $minArgs ] ; then
  echo
  echo "$0: Build script requires at least 1 argument specifying browser"
  exit 2
fi

for browser in "$@"; do

	echo 

	if [ $minArgs -eq 2 ]; then
		echo "$0: Cleaning /build directory"
		rm -r build
		minArgs=1
		continue
	fi

	if [ $browser != edge ] && [ $browser != firefox ] && [ $browser != chrome ]; then
		echo "$0: Invalid argument: $browser"
		echo "$0: Browser argument specified must be edge, firefox, or chrome"
		continue
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

done