#!/bin/bash

mkdir -p build
today=`date '+%Y_%m_%d__%H_%M_%S'`;
filename="build/McGillEnhanced__"$today"__chrome.zip"
zip -r $filename icons js lib menu manifest.json
