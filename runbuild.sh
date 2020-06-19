#!/bin/bash

#  Usage: 
#    $ ./runbuild.sh [options] [<platform>...]
#
#  Options:
#    -c       Clear the /build directory before building
#  Platform:
#    publish  For publishing in chrome web store or mozilla add-on site
#    edge     For dev purposes (Edge extension)
#    firefox  For dev purposes (Firefox add-on)
#             If no parameters are passed, script will default to building all platforms
#
#  Examples :
#    $ ./runbuild.sh 
#    $ ./runbuild.sh -c
#    $ ./runbuild.sh publish
#    $ ./runbuild.sh -c edge
#    $ ./runbuild.sh publish firefox


# handle -c (clean) option flag
while getopts "c" opt; do
  case $opt in
    c)
      echo "$0: Option -clear was triggered"
      echo "$0: Clearing /build directory"
      rm -r build
      mkdir -p build
      set -- ${@:2}
      ;;
  esac
done

# if no arguments passed, default to building all versions
if [ $# -lt 1 ] ; then
  echo
  echo "$0: Building all platforms since no arguments specifying platform received"
  set -- "publish" "edge" "firefox"
fi

# build extension for each version specified in arguments (builds all if no version specified)
for platform in "$@"; do

	echo 

	if [ $platform != publish ] && [ $platform != edge ] && [ $platform != firefox ]; then
		echo "$0: Invalid argument: $platform"
		echo "$0: Version argument specified must be publish, edge, or firefox"
		continue
	fi 

	today=$(date '+%Y.%m.%d_%H.%M.%S');
	manifest='src/manifest.json'
	version=$(grep "\"version\":" $manifest | grep -o "[0-9]\+\(\.[0-9]\+\)\+")
	buildname="McGillEnhanced_v${version}__${today}__${platform}"
	echo "$0: Creating $platform version in build/$buildname"
	mkdir -p build

	# build edge extension for dev purposes 
	if [ $platform == edge ]; then

		mkdir -p build/$buildname
		cp -r src/edge/background.html src/edge/backgroundScriptsAPIBridge.js src/edge/contentScriptsAPIBridge.js build/$buildname
		cp -r src/css src/icons src/js src/lib src/menu src/manifest.json build/$buildname

		file=build/$buildname/manifest.json

		match='"author": "kozirisdev",'
		insert='  "-ms-preload":{"backgroundScript":"backgroundScriptsAPIBridge.js","contentScript":"contentScriptsAPIBridge.js"},'  
		sed -i "s/$match/$match\n$insert/" $file

		#sed -i '/"scripts"/d' $file  
		sed -i '/"persistent"/d' $file  
		match='"background": {'
		insertA='    "persistent": true,'  
		#insertB='    "page": "background.html",'  
		sed -i "s/$match/$match\n$insertA/" $file
		#sed -i "s/$match/$match\n$insertB/" $file

	fi

	# build firefox add-on for dev purposes 
	if [ $platform == firefox ]; then

		match='"author": "kozirisdev",'
		insert='  "applications":{"gecko":{"id":"{fbd3b601-613b-4747-a92b-4d37b2fd7667}"}},'
		file='src/manifest.json'
		sed -i "s/$match/$match\n$insert/" $file

		cd src
		zip -rq ../build/$buildname.xpi css icons js lib menu manifest.json
		cd ..

		sed -i '/"gecko"/d' $file   

	fi

	# build extension suitable for publishing as chrome extension or firefox webextension
	if [ $platform == publish ]; then

		cd src
		zip -rq ../build/$buildname.zip css icons js lib menu manifest.json
		cd ..

	fi

done