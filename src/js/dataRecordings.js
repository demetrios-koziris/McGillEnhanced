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
		"ANSC350": [
			{"year": 2021, "month": 1, "section": "001", "id": "40247"}
		],
		"ANTH209": [
			{"year": 2022, "month": 5, "section": "001", "id": "54382"}
		],
		"ANTH423": [
			{"year": 2021, "month": 1, "section": "001", "id": "40873"}
		],
		"ARCH378": [
			{"year": 2022, "month": 1, "section": "001", "id": "52727"}
		],
		"ARTH474": [
			{"year": 2022, "month": 1, "section": "001", "id": "52403"}
		],
		"ATOC214": [
			{"year": 2020, "month": 9, "section": "001", "id": "31208"}
		],
		"BUSA433": [
			{"year": 2021, "month": 5, "section": "001", "id": "43069"}
		],
		"CCCS300": [
			{"year": 2022, "month": 1, "section": "784", "id": "49568"}
		],
		"CCMA523": [
			{"year": 2020, "month": 5, "section": "751", "id": "30066"}
		],
		"CEEN221": [
			{"year": 2020, "month": 5, "section": "751", "id": "30023"}
		],
		"CEEN331": [
			{"year": 2020, "month": 5, "section": "701", "id": "30102"}
		],
		"CEEN332": [
			{"year": 2020, "month": 5, "section": "752", "id": "30020"},
			{"year": 2022, "month": 1, "section": "751", "id": "49597"}
		],
		"CEFN211": [
			{"year": 2020, "month": 5, "section": "751", "id": "29998"}
		],
		"CHEM181": [
			{"year": 2020, "month": 5, "section": "001", "id": "29449"}
		],
		"CMS2500": [
			{"year": 2020, "month": 5, "section": "771", "id": "30072"},
			{"year": 2021, "month": 9, "section": "771", "id": "45055"}
		],
		"COMP599": [
			{"year": 2022, "month": 1, "section": "001", "id": "52833"}
		],
		"COMP602": [
			{"year": 2020, "month": 9, "section": "001", "id": "38182"}
		],
		"DENT671D1": [
			{"year": 2021, "month": 9, "section": "001", "id": "44973"}
		],
		"DENT671D2": [
			{"year": 2021, "month": 1, "section": "001", "id": "41189"}
		],
		"EAST230": [
			{"year": 2020, "month": 5, "section": "001", "id": "29862"}
		],
		"ECON209": [
			{"year": 2020, "month": 5, "section": "001", "id": "29830"}
		],
		"ECSE205": [
			{"year": 2020, "month": 5, "section": "001", "id": "29254"}
		],
		"ECSE429": [
			{"year": 2021, "month": 1, "section": "001", "id": "40893"}
		],
		"ECSE463": [
			{"year": 2022, "month": 1, "section": "001", "id": "51590"}
		],
		"EDER600": [
			{"year": 2021, "month": 1, "section": "001", "id": "41548"}
		],
		"EDER614": [
			{"year": 2020, "month": 5, "section": "001", "id": "29271"}
		],
		"EDPH689": [
			{"year": 2022, "month": 1, "section": "001", "id": "52263"}
		],
		"EDPS600": [
			{"year": 2020, "month": 5, "section": "001", "id": "29524"}
		],
		"ENGL378": [
			{"year": 2021, "month": 9, "section": "001", "id": "45560"}
		],
		"ENGL440": [
			{"year": 2021, "month": 9, "section": "001", "id": "47320"}
		],
		"ENVR203": [
			{"year": 2021, "month": 9, "section": "051", "id": "47666"}
		],
		"EPSC180": [
			{"year": 2022, "month": 1, "section": "001", "id": "49268"},
			{"year": 2023, "month": 1, "section": "001", "id": "60426"}
		],
		"EPSC201": [
			{"year": 2022, "month": 1, "section": "001", "id": "49343"},
			{"year": 2023, "month": 1, "section": "001", "id": "61139"}
		],
		"EPSC221": [
			{"year": 2021, "month": 9, "section": "001", "id": "44420"},
			{"year": 2022, "month": 9, "section": "001", "id": "57221"}
		],
		"EPSC320": [
			{"year": 2020, "month": 9, "section": "001", "id": "32521"}
		],
		"EXMD604": [
			{"year": 2020, "month": 9, "section": "001", "id": "37950"}
		],
		"FINE441": [
			{"year": 2020, "month": 5, "section": "001", "id": "7945"}
		],
		"FREN245": [
			{"year": 2021, "month": 1, "section": "001", "id": "42343"}
		],
		"INFS680": [
			{"year": 2022, "month": 9, "section": "001", "id": "58982"}
		],
		"INFS681": [
			{"year": 2023, "month": 1, "section": "001", "id": "63172"}
		],
		"INFS683": [
			{"year": 2022, "month": 9, "section": "001", "id": "58983"}
		],
		"INSY446": [
			{"year": 2020, "month": 9, "section": "001", "id": "32820"},
			{"year": 2021, "month": 9, "section": "001", "id": "46731"}
		],
		"INSY652": [
			{"year": 2021, "month": 9, "section": "001", "id": "47000"}
		],
		"INSY672": [
			{"year": 2021, "month": 1, "section": "075", "id": "39616"}
		],
		"ISLA210": [
			{"year": 2021, "month": 1, "section": "001", "id": "39862"}
		],
		"LAWG103": [
			{"year": 2020, "month": 9, "section": "003", "id": "37878"}
		],
		"LAWG110D1": [
			{"year": 2021, "month": 9, "section": "001", "id": "47800"}
		],
		"LAWG516": [
			{"year": 2021, "month": 9, "section": "001", "id": "47806"}
		],
		"LAWG536": [
			{"year": 2020, "month": 9, "section": "001", "id": "30486"}
		],
		"MATH141": [
			{"year": 2022, "month": 1, "section": "001", "id": "50507"}
		],
		"MATH242": [
			{"year": 2020, "month": 9, "section": "001", "id": "33015"}
		],
		"MATH249": [
			{"year": 2022, "month": 1, "section": "001", "id": "50508"}
		],
		"MATH262": [
			{"year": 2020, "month": 5, "section": "001", "id": "29583"}
		],
		"MATH263": [
			{"year": 2020, "month": 5, "section": "001", "id": "29585"},
			{"year": 2021, "month": 5, "section": "001", "id": "43544"}
		],
		"MATH318": [
			{"year": 2020, "month": 9, "section": "001", "id": "33045"}
		],
		"MATH323": [
			{"year": 2020, "month": 5, "section": "001", "id": "29591"}
		],
		"MATH338": [
			{"year": 2020, "month": 9, "section": "001", "id": "33050"}
		],
		"MATH583": [
			{"year": 2020, "month": 9, "section": "001", "id": "37820"}
		],
		"MATH595": [
			{"year": 2022, "month": 9, "section": "001", "id": "59411"}
		],
		"MATH596": [
			{"year": 2020, "month": 9, "section": "001", "id": "36148"},
			{"year": 2021, "month": 9, "section": "001", "id": "48505"}
		],
		"MATH598": [
			{"year": 2022, "month": 1, "section": "001", "id": "52826"}
		],
		"MATH720": [
			{"year": 2023, "month": 1, "section": "001", "id": "62152"}
		],
		"MATH726": [
			{"year": 2020, "month": 9, "section": "001", "id": "37990"},
			{"year": 2022, "month": 1, "section": "001", "id": "51761"}
		],
		"MATH740": [
			{"year": 2022, "month": 1, "section": "002", "id": "52669"}
		],
		"MECH201": [
			{"year": 2022, "month": 9, "section": "001", "id": "57646"}
		],
		"MECH220": [
			{"year": 2020, "month": 9, "section": "001", "id": "33089"}
		],
		"MECH360": [
			{"year": 2020, "month": 9, "section": "001", "id": "33122"}
		],
		"MECH383": [
			{"year": 2021, "month": 1, "section": "001", "id": "40753"}
		],
		"MECH430": [
			{"year": 2022, "month": 1, "section": "001", "id": "50263"}
		],
		"MGCR352": [
			{"year": 2020, "month": 9, "section": "001", "id": "33214"},
			{"year": 2020, "month": 9, "section": "002", "id": "33215"},
			{"year": 2020, "month": 9, "section": "003", "id": "33216"}
		],
		"MGCR472": [
			{"year": 2020, "month": 5, "section": "052", "id": "37187"}
		],
		"MGPO364": [
			{"year": 2020, "month": 9, "section": "061", "id": "33249"}
		],
		"MGSC672": [
			{"year": 2020, "month": 5, "section": "075", "id": "29905"}
		],
		"MGSC702": [
			{"year": 2021, "month": 1, "section": "001", "id": "39603"}
		],
		"MUIT203": [
			{"year": 2020, "month": 9, "section": "001", "id": "33894"}
		],
		"MUPG474": [
			{"year": 2020, "month": 9, "section": "005", "id": "38054"}
		],
		"MUSP170": [
			{"year": 2020, "month": 9, "section": "001", "id": "33995"}
		],
		"MUSP381": [
			{"year": 2021, "month": 1, "section": "001", "id": "42433"}
		],
		"NUR1318": [
			{"year": 2020, "month": 9, "section": "001", "id": "34054"},
			{"year": 2021, "month": 9, "section": "001", "id": "47096"}
		],
		"NUR1331": [
			{"year": 2021, "month": 5, "section": "001", "id": "43268"}
		],
		"NUR1332": [
			{"year": 2021, "month": 9, "section": "001", "id": "47142"}
		],
		"NUR1339": [
			{"year": 2021, "month": 1, "section": "001", "id": "38893"}
		],
		"NUR2618": [
			{"year": 2021, "month": 1, "section": "001", "id": "39403"}
		],
		"NUTR345": [
			{"year": 2021, "month": 9, "section": "001", "id": "45084"}
		],
		"OCCH605": [
			{"year": 2021, "month": 1, "section": "001", "id": "39801"}
		],
		"ONCO630": [
			{"year": 2021, "month": 1, "section": "001", "id": "42155"}
		],
		"PHIL343": [
			{"year": 2020, "month": 9, "section": "001", "id": "34181"}
		],
		"PHIL344": [
			{"year": 2022, "month": 1, "section": "001", "id": "52305"}
		],
		"PHYS514": [
			{"year": 2021, "month": 1, "section": "001", "id": "40684"},
			{"year": 2022, "month": 1, "section": "001", "id": "50379"}
		],
		"POLI364": [
			{"year": 2021, "month": 1, "section": "001", "id": "41052"}
		],
		"PSYC538": [
			{"year": 2020, "month": 9, "section": "001", "id": "34427"}
		],
		"PUB3116": [
			{"year": 2022, "month": 1, "section": "001", "id": "51965"}
		],
		"SOCI304": [
			{"year": 2021, "month": 9, "section": "001", "id": "45646"}
		],
		"SWRK221": [
			{"year": 2021, "month": 9, "section": "001", "id": "44086"}
		],
		"SWRK325": [
			{"year": 2020, "month": 9, "section": "003", "id": "34559"}
		],
		"SWRK327": [
			{"year": 2021, "month": 1, "section": "001", "id": "41258"}
		],
		"SWRK532": [
			{"year": 2020, "month": 9, "section": "001", "id": "34572"}
		],
		"TESTA000": [
			{"year": 2020, "month": 5, "section": "999", "id": "30318"}
		],
		"YCBS118": [
			{"year": 2020, "month": 5, "section": "008", "id": "30346"}
		],
	};
	return recordingData;
}