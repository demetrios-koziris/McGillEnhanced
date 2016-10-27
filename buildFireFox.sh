#!/bin/bash

match='"author": "Demetrios Koziris",'
insert='"applications":{"gecko":{"id":"extension@example.org"}},'
file='manifest.json'
sed -i "s/$match/$match\n$insert/" $file

mkdir -p build
today=`date '+%Y_%m_%d__%H_%M_%S'`;
filename="build/McGillEnhanced__"$today"__firefox.xpi"
zip -r $filename icons js lib menu manifest.json

sed -i '/gecko/d' $file   

