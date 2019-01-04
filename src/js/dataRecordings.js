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
			{ "year": 2015, "month": 1, "section": "001", "id": "11256" },
			{ "year": 2016, "month": 1, "section": "001", "id": "13093" }
		],
		"ANAT214": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12204" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14135" }
		],
		"ANAT321": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10435" }
		],
		"ANAT416": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11265" }
		],
		"ANSC234": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12551" }
		],
		"ANTH355": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14746" }
		],
		"ATOC184": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11293" }
		],
		"ATOC185": [
			{ "year": 2014, "month": 9, "section": "001", "id": "9858" }
		],
		"BIOC220": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17669" }
		],
		"BIOC300D2": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11297" }
		],
		"BIOC311": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10451" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17189" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19525" }
		],
		"BIOC312": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11264" }
		],
		"BIOC320": [
			{ "year": 2017, "month": 9, "section": "001", "id": "16765" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19010" }
		],
		"BIOC450": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10452" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17190" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19526" }
		],
		"BIOC454": [
			{ "year": 2017, "month": 9, "section": "001", "id": "17191" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19527" }
		],
		"BIOL111": [
			{ "year": 2017, "month": 9, "section": "001", "id": "16951" }
		],
		"BIOL112": [
			{ "year": 2019, "month": 1, "section": "001", "id": "20388" }
		],
		"BIOL115": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12042" },
			{ "year": 2017, "month": 9, "section": "001", "id": "16973" }
		],
		"BIOL200": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13768" }
		],
		"BIOL201": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12958" }
		],
		"BIOL202": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11132" },
			{ "year": 2015, "month": 5, "section": "001", "id": "11425" },
			{ "year": 2016, "month": 1, "section": "001", "id": "12959" }
		],
		"BIOL205": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14868" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18105" }
		],
		"BIOL215": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13967" }
		],
		"BIOL309": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10255" }
		],
		"BIOL313": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12828" }
		],
		"BIOL314": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19145" }
		],
		"BREE301": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14849" },
			{ "year": 2017, "month": 1, "section": "002", "id": "14851" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20372" }
		],
		"BUS2365": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12197" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14349" },
			{ "year": 2018, "month": 1, "section": "001", "id": "17453" },
			{ "year": 2018, "month": 9, "section": "003", "id": "19493" }
		],
		"BUSA100": [
			{ "year": 2018, "month": 9, "section": "071", "id": "18726" }
		],
		"BUSA499": [
			{ "year": 2017, "month": 9, "section": "001", "id": "17243" }
		],
		"CACC521": [
			{ "year": 2016, "month": 9, "section": "781", "id": "13488" }
		],
		"CFIN512": [
			{ "year": 2016, "month": 9, "section": "751", "id": "13571" }
		],
		"CGM2510": [
			{ "year": 2018, "month": 9, "section": "761", "id": "18639" }
		],
		"CGMG210": [
			{ "year": 2018, "month": 9, "section": "761", "id": "18741" }
		],
		"CHEE351": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14642" }
		],
		"CHEE453": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13537" }
		],
		"CHEM110": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10258" },
			{ "year": 2015, "month": 9, "section": "001", "id": "12039" },
			{ "year": 2016, "month": 9, "section": "001", "id": "13961" },
			{ "year": 2017, "month": 9, "section": "001", "id": "16970" }
		],
		"CHEM120": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14873" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18108" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20395" }
		],
		"CHEM181": [
			{ "year": 2015, "month": 1, "section": "761", "id": "11287" },
			{ "year": 2016, "month": 1, "section": "761", "id": "13124" },
			{ "year": 2018, "month": 1, "section": "761", "id": "18264" }
		],
		"CHEM183": [
			{ "year": 2014, "month": 9, "section": "761", "id": "9852" },
			{ "year": 2015, "month": 9, "section": "761", "id": "11556" },
			{ "year": 2016, "month": 9, "section": "761", "id": "13440" },
			{ "year": 2017, "month": 9, "section": "761", "id": "16383" },
			{ "year": 2018, "month": 9, "section": "761", "id": "18645" }
		],
		"CHEM203": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13988" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17002" }
		],
		"CHEM204": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10286" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14876" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17003" }
		],
		"CHEM211": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14840" },
			{ "year": 2017, "month": 5, "section": "001", "id": "16244" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17089" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19427" }
		],
		"CHEM212": [
			{ "year": 2017, "month": 5, "section": "001", "id": "16240" },
			{ "year": 2018, "month": 5, "section": "003", "id": "18407" }
		],
		"CHEM214": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11146" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14878" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18112" }
		],
		"CHEM222": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10323" },
			{ "year": 2015, "month": 5, "section": "001", "id": "11423" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14025" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14810" },
			{ "year": 2017, "month": 5, "section": "001", "id": "16246" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17037" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18046" },
			{ "year": 2018, "month": 5, "section": "001", "id": "18468" },
			{ "year": 2018, "month": 5, "section": "003", "id": "18408" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20328" }
		],
		"CHEM232": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13966" }
		],
		"CHEM233": [
			{ "year": 2017, "month": 1, "section": "001", "id": "15061" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18299" }
		],
		"CIVE225": [
			{ "year": 2018, "month": 1, "section": "002", "id": "17988" }
		],
		"CIVE320": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10225" },
			{ "year": 2015, "month": 9, "section": "001", "id": "11999" }
		],
		"CLAS203": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10001" },
			{ "year": 2015, "month": 9, "section": "001", "id": "11700" }
		],
		"CMS2500": [
			{ "year": 2018, "month": 1, "section": "771", "id": "18167" },
			{ "year": 2018, "month": 5, "section": "771", "id": "18509" }
		],
		"CMS2531": [
			{ "year": 2017, "month": 9, "section": "771", "id": "17294" },
			{ "year": 2018, "month": 9, "section": "771", "id": "18721" }
		],
		"CMSC000": [
			{ "year": 2017, "month": 9, "section": "741", "id": "16606" }
		],
		"COMP202": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12237" },
			{ "year": 2016, "month": 5, "section": "001", "id": "13267" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14166" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17196" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18200" }
		],
		"COMP206": [
			{ "year": 2018, "month": 1, "section": "001", "id": "18208" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19535" },
			{ "year": 2018, "month": 9, "section": "002", "id": "19068" }
		],
		"COMP208": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13909" }
		],
		"COMP250": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10464" },
			{ "year": 2015, "month": 9, "section": "001", "id": "12243" },
			{ "year": 2015, "month": 9, "section": "002", "id": "11806" },
			{ "year": 2016, "month": 1, "section": "001", "id": "13068" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14171" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17202" }
		],
		"COMP251": [
			{ "year": 2016, "month": 9, "section": "001", "id": "14172" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17203" }
		],
		"COMP273": [
			{ "year": 2016, "month": 1, "section": "001", "id": "13075" }
		],
		"COMP302": [
			{ "year": 2016, "month": 1, "section": "001", "id": "13118" },
			{ "year": 2017, "month": 1, "section": "001", "id": "15019" }
		],
		"COMP310": [
			{ "year": 2016, "month": 1, "section": "001", "id": "13081" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14983" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19302" }
		],
		"COMP330": [
			{ "year": 2017, "month": 9, "section": "001", "id": "17212" }
		],
		"COMP360": [
			{ "year": 2018, "month": 1, "section": "001", "id": "18285" }
		],
		"COMP557": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10865" }
		],
		"COMP767": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17481" }
		],
		"DENT220D1": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12642" }
		],
		"DENT318J1": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12324" }
		],
		"DENT323J1": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12328" }
		],
		"DENT409": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12337" }
		],
		"DENT411": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12339" }
		],
		"DENT412D2": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12646" }
		],
		"DENT413": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12341" }
		],
		"ECON208": [
			{ "year": 2015, "month": 1, "section": "004", "id": "11009" }
		],
		"ECON209": [
			{ "year": 2015, "month": 1, "section": "003", "id": "11010" }
		],
		"ECON230D1": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10016" },
			{ "year": 2015, "month": 9, "section": "002", "id": "11716" }
		],
		"ECON257D1": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13591" }
		],
		"ECON302": [
			{ "year": 2018, "month": 9, "section": "001", "id": "18707" }
		],
		"ECON313": [
			{ "year": 2014, "month": 9, "section": "002", "id": "10192" },
			{ "year": 2015, "month": 5, "section": "001", "id": "11450" },
			{ "year": 2015, "month": 9, "section": "002", "id": "11953" }
		],
		"ECON314": [
			{ "year": 2014, "month": 9, "section": "001", "id": "9891" },
			{ "year": 2015, "month": 9, "section": "001", "id": "11600" },
			{ "year": 2018, "month": 9, "section": "001", "id": "18692" }
		],
		"ECON319": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13676" }
		],
		"EPSC180": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11290" },
			{ "year": 2016, "month": 1, "section": "001", "id": "13127" },
			{ "year": 2017, "month": 1, "section": "001", "id": "15030" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18267" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20558" }
		],
		"EPSC201": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12270" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14200" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17231" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19554" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20379" }
		],
		"EXMD504": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19544" }
		],
		"FACC100": [
			{ "year": 2015, "month": 1, "section": "002", "id": "11295" },
			{ "year": 2016, "month": 9, "section": "002", "id": "13441" }
		],
		"FDSC230": [
			{ "year": 2017, "month": 9, "section": "001", "id": "17326" },
			{ "year": 2017, "month": 9, "section": "002", "id": "16492" }
		],
		"FINE682": [
			{ "year": 2016, "month": 9, "section": "065", "id": "13842" }
		],
		"GEOG200": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12169" }
		],
		"HIST249": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10371" },
			{ "year": 2015, "month": 9, "section": "001", "id": "12145" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17096" }
		],
		"INDS111": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13640" }
		],
		"INDS211": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13688" }
		],
		"INSY336": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19108" },
			{ "year": 2018, "month": 9, "section": "002", "id": "19119" }
		],
		"INSY691": [
			{ "year": 2017, "month": 9, "section": "001", "id": "16910" }
		],
		"LAWG100D1": [
			{ "year": 2017, "month": 9, "section": "002", "id": "17101" }
		],
		"LAWG210": [
			{ "year": 2015, "month": 9, "section": "001", "id": "11964" },
			{ "year": 2016, "month": 9, "section": "001", "id": "13779" }
		],
		"LAWG220D1": [
			{ "year": 2018, "month": 9, "section": "002", "id": "19094" }
		],
		"LAWG273": [
			{ "year": 2016, "month": 5, "section": "001", "id": "13346" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14439" }
		],
		"LAWG300": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12703" }
		],
		"LAWG518": [
			{ "year": 2018, "month": 1, "section": "001", "id": "18145" }
		],
		"LAWG536": [
			{ "year": 2018, "month": 5, "section": "001", "id": "18400" }
		],
		"LING201": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10887" }
		],
		"MATH133": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19347" }
		],
		"MATH141": [
			{ "year": 2018, "month": 1, "section": "024", "id": "17760" }
		],
		"MATH204": [
			{ "year": 2018, "month": 1, "section": "001", "id": "18149" }
		],
		"MATH323": [
			{ "year": 2016, "month": 1, "section": "001", "id": "13020" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19420" }
		],
		"MATH447": [
			{ "year": 2018, "month": 1, "section": "001", "id": "18038" }
		],
		"MATH595": [
			{ "year": 2015, "month": 5, "section": "001", "id": "11458" }
		],
		"MATH598": [
			{ "year": 2015, "month": 5, "section": "001", "id": "11459" }
		],
		"MECH201": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19568" }
		],
		"MGCR222": [
			{ "year": 2014, "month": 9, "section": "006", "id": "10063" },
			{ "year": 2015, "month": 1, "section": "005", "id": "11337" },
			{ "year": 2015, "month": 1, "section": "006", "id": "10745" },
			{ "year": 2016, "month": 9, "section": "003", "id": "14046" },
			{ "year": 2016, "month": 9, "section": "005", "id": "14048" },
			{ "year": 2017, "month": 1, "section": "001", "id": "15069" }
		],
		"MGCR293": [
			{ "year": 2017, "month": 9, "section": "001", "id": "17285" }
		],
		"MGCR331": [
			{ "year": 2014, "month": 9, "section": "751", "id": "10179" },
			{ "year": 2015, "month": 9, "section": "751", "id": "11870" },
			{ "year": 2016, "month": 5, "section": "751", "id": "13333" }
		],
		"MGCR341": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12413" }
		],
		"MGCR423": [
			{ "year": 2017, "month": 1, "section": "751", "id": "14667" },
			{ "year": 2017, "month": 9, "section": "751", "id": "17307" }
		],
		"MGPO640": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10765" }
		],
		"MIME260": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14729" },
			{ "year": 2018, "month": 1, "section": "001", "id": "17958" }
		],
		"MIMM212": [
			{ "year": 2014, "month": 9, "section": "001", "id": "9878" }
		],
		"MIMM214": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10715" },
			{ "year": 2016, "month": 1, "section": "001", "id": "12479" }
		],
		"MIMM314": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11200" },
			{ "year": 2016, "month": 1, "section": "001", "id": "13029" }
		],
		"MIMM323": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10424" },
			{ "year": 2017, "month": 9, "section": "001", "id": "17156" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19496" }
		],
		"MIMM413": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11203" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18177" }
		],
		"MUAR211": [
			{ "year": 2018, "month": 9, "section": "001", "id": "18819" },
			{ "year": 2018, "month": 9, "section": "002", "id": "18820" }
		],
		"MUHL186": [
			{ "year": 2018, "month": 9, "section": "001", "id": "18686" }
		],
		"NUR1209": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19113" }
		],
		"NUR1324": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17990" }
		],
		"NUR1420": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12025" }
		],
		"NUR1428": [
			{ "year": 2018, "month": 9, "section": "001", "id": "18818" }
		],
		"NUTR545": [
			{ "year": 2015, "month": 9, "section": "001", "id": "11552" }
		],
		"OCC1245": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19149" }
		],
		"OCC1547": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14979" }
		],
		"OCC1550": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19519" }
		],
		"OCC1551": [
			{ "year": 2016, "month": 1, "section": "001", "id": "13036" }
		],
		"OCC1623": [
			{ "year": 2017, "month": 1, "section": "001", "id": "15009" }
		],
		"ORGB685": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11171" }
		],
		"PHGY209": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12213" },
			{ "year": 2015, "month": 9, "section": "002", "id": "12080" },
			{ "year": 2015, "month": 9, "section": "004", "id": "11545" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14144" }
		],
		"PHGY210": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12906" },
			{ "year": 2016, "month": 1, "section": "002", "id": "13060" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14817" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18050" },
			{ "year": 2018, "month": 1, "section": "002", "id": "18202" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20330" }
		],
		"PHGY212": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12107" }
		],
		"PHGY213": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14837" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18075" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20352" }
		],
		"PHGY314": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12215" }
		],
		"PHIL210": [
			{ "year": 2014, "month": 9, "section": "001", "id": "9987" }
		],
		"PHTH440": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10806" }
		],
		"PHTH551": [
			{ "year": 2015, "month": 9, "section": "001", "id": "12229" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14159" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19524" }
		],
		"PHTH622": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14524" }
		],
		"PHYS102": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12987" }
		],
		"PHYS142": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14932" },
			{ "year": 2018, "month": 1, "section": "001", "id": "18169" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20458" }
		],
		"POLI227": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12798" }
		],
		"POLI243": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10977" },
			{ "year": 2018, "month": 1, "section": "001", "id": "17753" },
			{ "year": 2019, "month": 1, "section": "001", "id": "20000" }
		],
		"POLI340": [
			{ "year": 2017, "month": 9, "section": "001", "id": "16755" }
		],
		"POLI346": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10463" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19071" }
		],
		"POLI354": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17779" }
		],
		"POLI358": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17900" }
		],
		"POLI423": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14613" }
		],
		"POLI445": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19074" }
		],
		"POLI450": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14617" }
		],
		"POTH225": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12554" }
		],
		"POTH401": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11249" }
		],
		"POTH563": [
			{ "year": 2015, "month": 9, "section": "001", "id": "11771" }
		],
		"POTH684": [
			{ "year": 2015, "month": 1, "section": "001", "id": "10736" },
			{ "year": 2016, "month": 1, "section": "001", "id": "12500" },
			{ "year": 2017, "month": 1, "section": "001", "id": "14413" },
			{ "year": 2018, "month": 1, "section": "001", "id": "17516" }
		],
		"PSYC100": [
			{ "year": 2018, "month": 9, "section": "001", "id": "19434" }
		],
		"PSYC212": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17624" }
		],
		"PSYC215": [
			{ "year": 2015, "month": 1, "section": "001", "id": "11129" }
		],
		"PSYC331": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10132" },
			{ "year": 2015, "month": 9, "section": "001", "id": "11817" }
		],
		"PSYC337": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10483" },
			{ "year": 2016, "month": 9, "section": "001", "id": "14190" }
		],
		"PSYC406": [
			{ "year": 2016, "month": 9, "section": "001", "id": "13830" },
			{ "year": 2018, "month": 9, "section": "001", "id": "19009" }
		],
		"PSYC410": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10484" }
		],
		"PSYC538": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14450" },
			{ "year": 2018, "month": 1, "section": "001", "id": "17542" }
		],
		"PSYC744": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14672" }
		],
		"PUB2400": [
			{ "year": 2018, "month": 1, "section": "001", "id": "17841" }
		],
		"RELG253": [
			{ "year": 2017, "month": 1, "section": "001", "id": "14720" }
		],
		"SOCI225": [
			{ "year": 2015, "month": 9, "section": "001", "id": "11839" }
		],
		"SOCI254": [
			{ "year": 2014, "month": 9, "section": "001", "id": "10039" }
		],
		"SOCI265": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12600" }
		],
		"SOCI270": [
			{ "year": 2016, "month": 1, "section": "001", "id": "12601" }
		]
	};
	return recordingData;
}