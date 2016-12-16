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
#    *If no parameters are passed, script will default to building the extension for every browser
#
#  Examples :
#    ./build.sh 
#    ./build.sh -c
#    ./build.sh chrome
#    ./build.sh -c edge
#    ./build.sh chrome firefox
#    ./build.sh -c edge chrome firefox


# handle -c (clean) option flag
while getopts "c" opt; do
  case $opt in
    c)
      echo "$0: Option -clean was triggered"
      echo "$0: Cleaning /build directory"
      rm -r build
      mkdir -p build
      set -- ${@:2}
      ;;
  esac
done

# if no arguments passed, default to building all browser versions of extension
if [ $# -lt 1 ] ; then
  echo
  echo "$0: Building all browser extensions since no arguments specifying browsers received"
  set -- "edge" "firefox" "chrome"
fi

# build extension for each browser specified in arguments (builds all if no browser specified)
for browser in "$@"; do

	echo 

	if [ $browser != edge ] && [ $browser != firefox ] && [ $browser != chrome ]; then
		echo "$0: Invalid argument: $browser"
		echo "$0: Browser argument specified must be edge, firefox, or chrome"
		continue
	fi 

	today=`date '+%Y_%m_%d__%H_%M_%S'`;
	buildname="McGillEnhanced__"$today"__"$browser
	echo "$0: Creating $browser version in build/$buildname"
	mkdir -p build

	# build edge extension
	if [ $browser == edge ]; then

		mkdir -p build/$buildname
		cp -r src/edge/background.html src/edge/backgroundScriptsAPIBridge.js src/edge/contentScriptsAPIBridge.js build/$buildname
		cp -r src/css src/icons src/js src/lib src/manifest.json build/$buildname

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

	# build firefox add-on
	if [ $browser == firefox ]; then

		match='"author": "Demetrios Koziris",'
		insert='  "applications":{"gecko":{"id":"extension@example.org"}},'
		file='src/manifest.json'
		sed -i "s/$match/$match\n$insert/" $file

		cd src
		zip -rq ../build/$buildname.xpi css icons js lib menu manifest.json
		cd ..

		sed -i '/"gecko"/d' $file   

	fi

	# build chrome extension
	if [ $browser == chrome ]; then

		cd src
		zip -rq ../build/$buildname.zip css icons js lib menu manifest.json
		cd ..

	fi

done