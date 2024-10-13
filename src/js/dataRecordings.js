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
		"ANTH209": [
			{"year": 2022, "month": 5, "section": "001", "id": "54382"}
		],
		"BIOT505": [
			{"year": 2023, "month": 9, "section": "001", "id": "67499"}
		],
		"BTEC650": [
			{"year": 2023, "month": 9, "section": "001", "id": "65510"}
		],
		"CCCS300": [
			{"year": 2023, "month": 1, "section": "764", "id": "62624"}
		],
		"CCCS301": [
			{"year": 2023, "month": 9, "section": "754", "id": "65739"}
		],
		"CCCS610": [
			{"year": 2023, "month": 9, "section": "784", "id": "65351"}
		],
		"CIVE650": [
			{"year": 2023, "month": 9, "section": "001", "id": "67206"}
		],
		"COMP462": [
			{"year": 2023, "month": 9, "section": "001", "id": "67807"}
		],
		"COMP551": [
			{"year": 2022, "month": 9, "section": "001", "id": "57802"}
		],
		"ECON230D1": [
			{"year": 2023, "month": 9, "section": "002", "id": "65809"}
		],
		"EPSC180": [
			{"year": 2023, "month": 1, "section": "001", "id": "60426"}
		],
		"EPSC201": [
			{"year": 2023, "month": 1, "section": "001", "id": "61139"},
			{"year": 2023, "month": 9, "section": "001", "id": "66658"}
		],
		"EPSC221": [
			{"year": 2022, "month": 9, "section": "001", "id": "57221"},
			{"year": 2023, "month": 9, "section": "001", "id": "66415"}
		],
		"INFS680": [
			{"year": 2022, "month": 9, "section": "001", "id": "58982"}
		],
		"INFS681": [
			{"year": 2023, "month": 1, "section": "001", "id": "63172"}
		],
		"INFS682": [
			{"year": 2023, "month": 1, "section": "001", "id": "63791"},
			{"year": 2023, "month": 5, "section": "001", "id": "64076"}
		],
		"INFS683": [
			{"year": 2022, "month": 9, "section": "001", "id": "58983"}
		],
		"LAWG532": [
			{"year": 2023, "month": 9, "section": "001", "id": "67640"}
		],
		"MATH133": [
			{"year": 2022, "month": 9, "section": "004", "id": "58076"}
		],
		"MATH456": [
			{"year": 2023, "month": 9, "section": "001", "id": "67164"}
		],
		"MATH564": [
			{"year": 2023, "month": 9, "section": "001", "id": "67168"}
		],
		"MATH595": [
			{"year": 2022, "month": 9, "section": "001", "id": "59411"}
		],
		"MATH720": [
			{"year": 2023, "month": 1, "section": "001", "id": "62152"}
		],
		"MECH201": [
			{"year": 2022, "month": 9, "section": "001", "id": "57646"}
		],
		"MGCR211": [
			{"year": 2023, "month": 9, "section": "010", "id": "68430"}
		],
		"MUHL591D1": [
			{"year": 2023, "month": 9, "section": "001", "id": "66309"}
		],
		"MUPG315D1": [
			{"year": 2023, "month": 9, "section": "022", "id": "68186"}
		],
		"PHAR200": [
			{"year": 2023, "month": 9, "section": "001", "id": "65558"}
		],
		"POLI360": [
			{"year": 2023, "month": 9, "section": "001", "id": "65900"}
		],
		"PUB2313": [
			{"year": 2023, "month": 9, "section": "001", "id": "67304"}
		],
	};
	return recordingData;
}