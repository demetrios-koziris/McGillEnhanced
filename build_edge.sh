#!/bin/bash

mkdir -p build
today=`date '+%Y_%m_%d__%H_%M_%S'`;
foldername="../build/McGillEnhanced__"$today"__edge"
mkdir -p build/$foldername
cp -r src/edge/background.html src/edge/backgroundScriptsAPIBridge.js src/edge/contentScriptsAPIBridge.js build/$foldername
cp -r src/icons src/js src/lib src/menu src/manifest.json build/$foldername

file=build/$foldername/manifest.json

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

