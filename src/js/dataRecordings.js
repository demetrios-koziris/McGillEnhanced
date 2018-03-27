/*
McGill Enhanced is a chrome extension that improves the functionality and navigability of McGill.ca
Copyright (C) 2016 Demetrios Koziris

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

A copy of the GNU General Public License is provided in the LICENSE.txt file along with this program.  
The GNU General Public License can also be found at <http://www.gnu.org/licenses/>.
*/

//jshint esversion: 6


function getRecordingsBaseURLs() {
	let recordingsBaseURLs = {
		lrs: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=",
		cool: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID="
	};
	return recordingsBaseURLs;
}

function getMonthToSemester() {
	let monthToSemester = {
		1: "Winter",
		5: "Summer",
		9: "Fall"
	};
	return monthToSemester;
}

function getRecordingData() {
	let recordingData = {
		"AECH111": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11256" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13093" }
		],
		"ANAT214": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12204" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14135" }
		],
		"ANAT321": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10435" }
		],
		"ANAT416": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11265" }
		],
		"ANSC234": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12551" }
		],
		"ANTH355": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14746" }
		],
		"ATOC184": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11293" }
		],
		"ATOC185": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "9858" }
		],
		"BIOC220": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17669" }
		],
		"BIOC300D2": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11297" }
		],
		"BIOC311": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10451" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17189" }
		],
		"BIOC312": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11264" }
		],
		"BIOC320": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "16765" }
		],
		"BIOC450": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10452" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17190" }
		],
		"BIOC454": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17191" }
		],
		"BIOL111": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "16951" }
		],
		"BIOL115": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12042" }
		],
		"BIOL200": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13768" }
		],
		"BIOL201": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12958" }
		],
		"BIOL202": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11132" },
			{ "year": 2015, "month": 5, "section": "001", "type": "lrs", "id": "11425" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12959" }
		],
		"BIOL205": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14868" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18105" }
		],
		"BIOL215": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13967" }
		],
		"BIOL309": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10255" }
		],
		"BIOL313": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12828" }
		],
		"BREE301": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14849" },
			{ "year": 2017, "month": 1, "section": "002", "type": "lrs", "id": "14851" }
		],
		"BUS2365": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12197" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14349" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17453" }
		],
		"BUSA499": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17243" }
		],
		"CACC521": [
			{ "year": 2016, "month": 9, "section": "781", "type": "lrs", "id": "13488" }
		],
		"CFIN512": [
			{ "year": 2016, "month": 9, "section": "751", "type": "lrs", "id": "13571" }
		],
		"CHEE351": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14642" }
		],
		"CHEE453": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13537" }
		],
		"CHEM110": [
			{ "year": 2010, "month": 9, "section": "001", "type": "cool", "id": "1420" },
			{ "year": 2010, "month": 9, "section": "002", "type": "cool", "id": "1421" },
			{ "year": 2010, "month": 9, "section": "003", "type": "cool", "id": "1430" },
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1460" },
			{ "year": 2011, "month": 9, "section": "002", "type": "cool", "id": "1461" },
			{ "year": 2012, "month": 9, "section": "001", "type": "cool", "id": "1514" },
			{ "year": 2012, "month": 9, "section": "002", "type": "cool", "id": "1515" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1571" },
			{ "year": 2014, "month": 9, "section": "002", "type": "cool", "id": "1572" },
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10258" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12039" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13961" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "16970" }
		],
		"CHEM120": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1432" },
			{ "year": 2011, "month": 1, "section": "002", "type": "cool", "id": "1433" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1477" },
			{ "year": 2012, "month": 1, "section": "002", "type": "cool", "id": "1478" },
			{ "year": 2015, "month": 1, "section": "001", "type": "cool", "id": "1588" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14873" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18108" }
		],
		"CHEM180": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1435" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1480" },
			{ "year": 2013, "month": 1, "section": "761", "type": "cool", "id": "1516" },
			{ "year": 2014, "month": 1, "section": "761", "type": "cool", "id": "1545" }
		],
		"CHEM181": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1434" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1479" },
			{ "year": 2013, "month": 1, "section": "761", "type": "cool", "id": "1517" },
			{ "year": 2014, "month": 1, "section": "761", "type": "cool", "id": "1546" },
			{ "year": 2015, "month": 1, "section": "761", "type": "lrs", "id": "11287" },
			{ "year": 2016, "month": 1, "section": "761", "type": "lrs", "id": "13124" },
			{ "year": 2018, "month": 1, "section": "761", "type": "lrs", "id": "18264" }
		],
		"CHEM182": [
			{ "year": 2010, "month": 9, "section": "001", "type": "cool", "id": "1417" },
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1463" },
			{ "year": 2012, "month": 9, "section": "761", "type": "cool", "id": "1504" },
			{ "year": 2013, "month": 9, "section": "761", "type": "cool", "id": "1535" }
		],
		"CHEM183": [
			{ "year": 2010, "month": 9, "section": "761", "type": "cool", "id": "1418" },
			{ "year": 2011, "month": 9, "section": "761", "type": "cool", "id": "1464" },
			{ "year": 2012, "month": 9, "section": "761", "type": "cool", "id": "1505" },
			{ "year": 2013, "month": 9, "section": "761", "type": "cool", "id": "1536" },
			{ "year": 2014, "month": 9, "section": "761", "type": "cool", "id": "1574" },
			{ "year": 2014, "month": 9, "section": "761", "type": "lrs", "id": "9852" },
			{ "year": 2015, "month": 9, "section": "761", "type": "cool", "id": "1607" },
			{ "year": 2015, "month": 9, "section": "761", "type": "lrs", "id": "11556" },
			{ "year": 2016, "month": 9, "section": "761", "type": "lrs", "id": "13440" },
			{ "year": 2017, "month": 9, "section": "761", "type": "lrs", "id": "16383" }
		],
		CHEM203: [ 
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13988" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17002" }
		],
		"CHEM204": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1437" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1482" },
			{ "year": 2013, "month": 1, "section": "001", "type": "cool", "id": "1522" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1576" },
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10286" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14876" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17003" }
		],
		"CHEM211": [
			{ "year": 2012, "month": 9, "section": "001", "type": "cool", "id": "1506" },
			{ "year": 2013, "month": 9, "section": "001", "type": "cool", "id": "1531" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1570" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14840" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17089" }
		],
		"CHEM212": [
			{ "year": 2010, "month": 9, "section": "001", "type": "cool", "id": "1429" },
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1440" },
			{ "year": 2011, "month": 5, "section": "001", "type": "cool", "id": "1455" },
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1465" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1485" },
			{ "year": 2012, "month": 5, "section": "001", "type": "cool", "id": "1500" },
			{ "year": 2013, "month": 1, "section": "001", "type": "cool", "id": "1524" },
			{ "year": 2013, "month": 5, "section": "001", "type": "cool", "id": "1525" },
			{ "year": 2014, "month": 1, "section": "001", "type": "cool", "id": "1553" },
			{ "year": 2014, "month": 5, "section": "001", "type": "cool", "id": "1560" },
			{ "year": 2015, "month": 1, "section": "001", "type": "cool", "id": "1590" },
			{ "year": 2015, "month": 5, "section": "001", "type": "cool", "id": "1593" }
		],
		"CHEM214": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1439" },
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11146" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14878" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18112" }
		],
		"CHEM222": [
			{ "year": 2010, "month": 9, "section": "001", "type": "cool", "id": "1422" },
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1438" },
			{ "year": 2011, "month": 5, "section": "001", "type": "cool", "id": "1458" },
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1466" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1483" },
			{ "year": 2012, "month": 5, "section": "001", "type": "cool", "id": "1502" },
			{ "year": 2012, "month": 9, "section": "001", "type": "cool", "id": "1507" },
			{ "year": 2013, "month": 1, "section": "001", "type": "cool", "id": "1523" },
			{ "year": 2013, "month": 5, "section": "001", "type": "cool", "id": "1526" },
			{ "year": 2013, "month": 9, "section": "001", "type": "cool", "id": "1529" },
			{ "year": 2014, "month": 1, "section": "001", "type": "cool", "id": "1552" },
			{ "year": 2014, "month": 5, "section": "001", "type": "cool", "id": "1561" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1568" },
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10323" },
			{ "year": 2015, "month": 1, "section": "001", "type": "cool", "id": "1584" },
			{ "year": 2015, "month": 5, "section": "001", "type": "cool", "id": "1594" },
			{ "year": 2015, "month": 5, "section": "001", "type": "lrs", "id": "11423" },
			{ "year": 2015, "month": 9, "section": "001", "type": "cool", "id": "1601" },
			{ "year": 2016, "month": 1, "section": "001", "type": "cool", "id": "1616" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14025" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14810" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17037" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18046" }
		],
		"CHEM232": [
			{ "year": 2010, "month": 9, "section": "001", "type": "cool", "id": "1419" },
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1467" },
			{ "year": 2012, "month": 9, "section": "001", "type": "cool", "id": "1511" },
			{ "year": 2013, "month": 9, "section": "001", "type": "cool", "id": "1530" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1569" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13966" }
		],
		"CHEM233": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "15061" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18299" }
		],
		"CHEM281": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1436" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1481" }
		],
		"CHEM302": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1441" },
			{ "year": 2013, "month": 1, "section": "001", "type": "cool", "id": "1521" }
		],
		"CHEM462": [
			{ "year": 2012, "month": 9, "section": "001", "type": "cool", "id": "1512" },
			{ "year": 2013, "month": 9, "section": "001", "type": "cool", "id": "1537" }
		],
		"CHEM502": [
			{ "year": 2014, "month": 1, "section": "001", "type": "cool", "id": "1556" }
		],
		"CIVE225": [
			{ "year": 2018, "month": 1, "section": "002", "type": "lrs", "id": "17988" }
		],
		"CIVE320": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10225" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11999" }
		],
		"CLAS203": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10001" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11700" }
		],
		"CMSC000": [
			{ "year": 2017, "month": 9, "section": "741", "type": "lrs", "id":"16606" }
		],
		"CMS2500": [
			{ "year": 2018, "month": 1, "section": "771", "type": "lrs", "id": "18167" }
		],
		"CMS2531": [
			{ "year": 2017, "month": 9, "section": "771", "type": "lrs", "id": "17294" }
		],
		"COMP202": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12237" },
			{ "year": 2016, "month": 5, "section": "001", "type": "lrs", "id": "13267" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14166" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17196" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18200" }
		],
		"COMP206": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18208" }
		],
		"COMP208": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13909" }
		],
		"COMP250": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10464" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12243" },
			{ "year": 2015, "month": 9, "section": "002", "type": "lrs", "id": "11806" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13068" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14171" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17202" }
		],
		"COMP251": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14172" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17203" }
		],
		"COMP273": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13075" }
		],
		"COMP302": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13118" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "15019" }
		],
		"COMP310": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13081" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14983" }
		],
		"COMP330": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17212" }
		],
		"COMP557": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10865" }
		],
		"COMP767": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17481" }
		],
		"DENT220D1": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12642" }
		],
		"DENT318J1": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12324DE" }
		],
		"DENT320J3": [
			{ "year": 2016, "month": 5, "section": "001", "type": "lrs", "id": "13322" }
		],
		"DENT323J1": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12328" }
		],
		"DENT411": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12339" }
		],
		"DENT412D2": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12646" }
		],
		"DENT413": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12341" }
		],
		"ECON208": [
			{ "year": 2015, "month": 1, "section": "004", "type": "lrs", "id": "11009" }
		],
		"ECON209": [
			{ "year": 2015, "month": 1, "section": "003", "type": "lrs", "id": "11010" }
		],
		"ECON230D1": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10016" },
			{ "year": 2015, "month": 9, "section": "002", "type": "lrs", "id": "11716" }
		],
		"ECON257D1": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13591" }
		],
		"ECON313": [
			{ "year": 2014, "month": 9, "section": "002", "type": "lrs", "id": "10192" },
			{ "year": 2015, "month": 5, "section": "001", "type": "lrs", "id": "11450" },
			{ "year": 2015, "month": 9, "section": "002", "type": "lrs", "id": "11953" }
		],
		"ECON314": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "9891" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11600" }
		],
		"ECSE211": [
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1468" },
			{ "year": 2013, "month": 1, "section": "001", "type": "cool", "id": "1519" },
			{ "year": 2013, "month": 9, "section": "001", "type": "cool", "id": "1539" },
			{ "year": 2014, "month": 1, "section": "001", "type": "cool", "id": "1548" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1567" },
			{ "year": 2015, "month": 1, "section": "001", "type": "cool", "id": "1586" }
		],
		"ECON319": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13676" }
		],
		"ECSE322": [
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1469" },
			{ "year": 2013, "month": 1, "section": "001", "type": "cool", "id": "1520" },
			{ "year": 2014, "month": 1, "section": "001", "type": "cool", "id": "1549" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1566" },
			{ "year": 2015, "month": 1, "section": "001", "type": "cool", "id": "1587" }
		],
		"ECSE549": [
			{ "year": 2011, "month": 9, "section": "001", "type": "cool", "id": "1470" },
			{ "year": 2013, "month": 9, "section": "001", "type": "cool", "id": "1540" },
			{ "year": 2014, "month": 9, "section": "001", "type": "cool", "id": "1565" }
		],
		"EPSC180": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11290" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13127" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "15030" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18267" }
		],
		"EPSC201": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12270" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14200" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17231" }
		],
		"FACC100": [
			{ "year": 2015, "month": 1, "section": "002", "type": "lrs", "id": "11295" },
			{ "year": 2016, "month": 9, "section": "002", "type": "lrs", "id": "13441" }
		],
		"FDSC230": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17326" },
			{ "year": 2017, "month": 9, "section": "002", "type": "lrs", "id": "16492" }
		],
		"FINE682": [
			{ "year": 2016, "month": 9, "section": "065", "type": "lrs", "id": "13842" }
		],
		"GEOG200": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12169" }
		],
		"HIST249": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10371" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12145" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17096" }
		],
		"INDS111": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13640" }
		],
		"INDS211": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13688" }
		],
		INSY691:[
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "16910" }
		],
		LAWG100D1:[
			{ "year": 2017, "month": 9, "section": "002", "type": "lrs", "id": "17101"}
		],
		"LAWG210": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11964" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13779" }
		],
		"LAWG273": [
			{ "year": 2016, "month": 5, "section": "001", "type": "lrs", "id": "13346" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14439" }
		],
		"LAWG300": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12703" }
		],
		"LAWG518": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18145" }
		],
		"LING201": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10887" }
		],
		"MATH204": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18149" }
		],
		"MATH323": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13020" }
		],
		"MATH447": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18038" }
		],
		"MATH595": [
			{ "year": 2015, "month": 5, "section": "001", "type": "lrs", "id": "11458" }
		],
		"MATH598": [
			{ "year": 2015, "month": 5, "section": "001", "type": "lrs", "id": "11459" }
		],
		"MGCR222": [
			{ "year": 2014, "month": 9, "section": "006", "type": "lrs", "id": "10063" },
			{ "year": 2015, "month": 1, "section": "005", "type": "lrs", "id": "11337" },
			{ "year": 2015, "month": 1, "section": "006", "type": "lrs", "id": "10745" },
			{ "year": 2016, "month": 9, "section": "003", "type": "lrs", "id": "14046" },
			{ "year": 2016, "month": 9, "section": "005", "type": "lrs", "id": "14048" }
		],
		MGCR293: [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17285" }
		],
		"MGCR331": [
			{ "year": 2014, "month": 9, "section": "751", "type": "lrs", "id": "10179" },
			{ "year": 2015, "month": 9, "section": "751", "type": "lrs", "id": "11870" },
			{ "year": 2016, "month": 5, "section": "751", "type": "lrs", "id": "13333" }
		],
		"MGCR341": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12413" }
		],
		"MGCR423": [
			{ "year": 2017, "month": 1, "section": "751", "type": "lrs", "id": "14667" },
			{ "year": 2017, "month": 9, "section": "751", "type": "lrs", "id": "17307" }
		],
		"MGPO640": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10765" }
		],
		"MIME260": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14729" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17958" }
		],
		"MIMM212": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "9878" }
		],
		"MIMM214": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10715" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12479" }
		],
		"MIMM314": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11200" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13029" }
		],
		"MIMM323": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10424" },
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "17156" }
		],
		"MIMM413": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11203" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18177" }
		],
		"NUR1324": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17990" }
		],
		"NUR1420": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12025" }
		],
		"NUTR545": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11552" }
		],
		"OCC1551": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "13036" }
		],
		"OCCH608": [
			{ "year": 2011, "month": 1, "section": "088", "type": "cool", "id": "1447" }
		],
		"OCCH615": [
			{ "year": 2011, "month": 1, "section": "001", "type": "cool", "id": "1450" },
			{ "year": 2012, "month": 1, "section": "001", "type": "cool", "id": "1495" },
			{ "year": 2014, "month": 1, "section": "001", "type": "cool", "id": "1558" }
		],
		"ORGB685": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11171" }
		],
		"PHGY209": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12213" },
			{ "year": 2015, "month": 9, "section": "002", "type": "lrs", "id": "12080" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14144" }
		],
		"PHGY210": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12906" },
			{ "year": 2016, "month": 1, "section": "002", "type": "lrs", "id": "13060" },
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14817" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18050" },
			{ "year": 2018, "month": 1, "section": "002", "type": "lrs", "id": "18202" }
		],
		"PHGY212": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12107" }
		],
		"PHGY213": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14837" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18075" }
		],
		"PHGY314": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12215" }
		],
		"PHIL210": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "9987" }
		],
		"PHTH440": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10806" }
		],
		"PHTH551": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "12229" }
		],
		"PHYS102": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12987" }
		],
		"PHYS142": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14932" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "18169" }
		],
		"POLI227": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12798" }
		],
		"POLI243": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10977" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17753" }
		],
		"POLI340": [
			{ "year": 2017, "month": 9, "section": "001", "type": "lrs", "id": "16755" }
		],
		"POLI346": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10463" }
		],
		"POLI354": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17779" }
		],
		"POLI358": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17900" }
		],
		"POLI423": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14613" }
		],
		"POLI450": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14617" }
		],
		"POTH225": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12554" }
		],
		"POTH401": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11249" }
		],
		"POTH551": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14159" }
		],
		"POTH563": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11771" }
		],
		"POTH684": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "10736" },
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12500" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17516" }
		],
		"PSYC212": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17624" }
		],
		"PSYC215": [
			{ "year": 2015, "month": 1, "section": "001", "type": "lrs", "id": "11129" }
		],
		"PSYC331": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10132" },
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11817" }
		],
		"PSYC337": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10483" },
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "14190" }
		],
		"PSYC406": [
			{ "year": 2016, "month": 9, "section": "001", "type": "lrs", "id": "13830" }
		],
		"PSYC410": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10484" }
		],
		"PSYC538": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14450" },
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17542" }
		],
		"PSYC744": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14672" }
		],
		"PUB2400": [
			{ "year": 2018, "month": 1, "section": "001", "type": "lrs", "id": "17841" }
		],
		"RELG253": [
			{ "year": 2017, "month": 1, "section": "001", "type": "lrs", "id": "14720" }
		],
		"SOCI225": [
			{ "year": 2015, "month": 9, "section": "001", "type": "lrs", "id": "11839" }
		],
		"SOCI254": [
			{ "year": 2014, "month": 9, "section": "001", "type": "lrs", "id": "10039" }
		],
		"SOCI265": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12600" }
		],
		"SOCI270": [
			{ "year": 2016, "month": 1, "section": "001", "type": "lrs", "id": "12601" }
		]
	};
	return recordingData;
}