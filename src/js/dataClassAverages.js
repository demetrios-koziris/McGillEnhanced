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


function getClassAveragesData() {
	let classAveragesData = {
		"ACCT351": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"ACCT352": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ACCT354": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"ACCT361": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ACCT362": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ACCT385": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ACCT452": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ACCT453": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ACCT455": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ACCT463": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ACCT475": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ACCT486": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"AEBI120": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"AEBI122": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"AEBI210": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"AEBI211": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"AEBI212": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"AECH110": [
			{"credits": "4", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B+"},
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"AECH111": [
			{"credits": "4", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"AEHM205": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"AEMA101": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "C"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"AEMA102": [
			{"credits": "4", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B-"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"}
		],
		"AEMA202": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"AEMA305": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"AEMA310": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"AEPH112": [
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"AEPH113": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"}
		],
		"AEPH114": [
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"AEPH115": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"}
		],
		"AERO401": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"AFRI200": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"AFRI401": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"}
		],
		"AGEC200": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"AGEC231": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"AGEC330": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"AGEC430": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"AGEC442": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"AGRI215": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"}
		],
		"AGRI325": [
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"}
		],
		"AGRI330": [
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"AGRI340": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A"}
		],
		"AGRI411": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"AGRI510": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"AGRI550": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"}
		],
		"ANAT212": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"ANAT214": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ANAT261": [
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ANAT262": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANAT314": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANAT315": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ANAT316": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ANAT321": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ANAT322": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ANAT323": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ANAT365": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"ANAT381": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ANAT416": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ANAT458": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"ANAT541": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANSC234": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANSC250": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ANSC312": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ANSC323": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ANSC350": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"ANSC400": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ANSC420": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ANSC424": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"ANSC560": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"ANTH201": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANTH202": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ANTH203": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ANTH204": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANTH206": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ANTH209": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"ANTH210": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ANTH212": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANTH222": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ANTH227": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ANTH301": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"ANTH302": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"ANTH303": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ANTH304": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ANTH307": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ANTH308": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"ANTH311": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ANTH314": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ANTH318": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ANTH319": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ANTH322": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ANTH325": [
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"ANTH326": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"ANTH327": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"ANTH331": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ANTH332": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ANTH339": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ANTH343": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ANTH352": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ANTH355": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"}
		],
		"ANTH357": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"ANTH358": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"ANTH359": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ANTH361": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"ANTH370": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ANTH380": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"ANTH423": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ANTH440": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ARCH201": [
			{"credits": "6", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "6", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "6", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "6", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ARCH202": [
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "6", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"ARCH221": [
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ARCH240": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"ARCH241": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"ARCH250": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ARCH251": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ARCH377": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"ARCH517": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ARCH528": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ARTH200": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"}
		],
		"ARTH202": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"ARTH204": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ARTH205": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ARTH207": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ARTH209": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"}
		],
		"ARTH215": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ARTH223": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"ARTH226": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ARTH300": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"ARTH305": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ARTH314": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"ARTH315": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ARTH321": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ARTH323": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"ARTH336": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ARTH337": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"}
		],
		"ARTH338": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"ARTH339": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ARTH352": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"ARTH353": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ARTH354": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"ARTH357": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ARTH368": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ATOC181": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"ATOC182": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"ATOC184": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ATOC185": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"ATOC214": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ATOC215": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ATOC219": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"BASC201": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIEN200": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"BIEN210": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIEN219": [
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"BIEN290": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIEN300": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIEN310": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIEN314": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BIEN320": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"BIEN330": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"BIEN340": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"BIEN350": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BIEN360": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"BIEN390": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"BIEN410": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BIEN420": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"BIEN471": [
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIEN510": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"BIEN530": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIEN550": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"BIEN590": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"BIOC212": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"BIOC220": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"BIOC311": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"BIOC312": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIOC320": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"BIOC404": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"BIOC450": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BIOC454": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"BIOC470": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"BIOL111": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIOL112": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIOL115": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BIOL200": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"BIOL201": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIOL202": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"BIOL205": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIOL206": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"BIOL210": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIOL215": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BIOL216": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIOL219": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BIOL300": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"BIOL301": [
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIOL302": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIOL303": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIOL304": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BIOL305": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BIOL306": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BIOL307": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"BIOL308": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"BIOL309": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BIOL310": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIOL313": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BIOL314": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"BIOL320": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"BIOL342": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"BIOL352": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"BIOL370": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"BIOL373": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"BIOL395": [
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"BIOL427": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"}
		],
		"BIOL432": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"BIOL436": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIOL465": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BIOL553": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"}
		],
		"BIOT505": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"BREE103": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BREE205": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"BREE210": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"BREE216": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"BREE217": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"BREE252": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"BREE301": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"BREE305": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BREE312": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"BREE314": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"BREE319": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"BREE322": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"BREE327": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"BREE341": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"BREE412": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"BREE416": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BREE420": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"BREE423": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"BREE490": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"BREE495": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"BREE501": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"BREE504": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"BREE510": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"BREE520": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"BREE522": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"BREE529": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"BREE530": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"BUS1532": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"BUS2365": [
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"BUS2502": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"BUS2504": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"BUS2505": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"BUSA100": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"BUSA250": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"BUSA356": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"BUSA364": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"BUSA391": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"BUSA394": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"BUSA430": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"BUSA433": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"BUSA434": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"BUSA465": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"BUSA499": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"CANS200": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CANS303": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"CANS310": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CANS315": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"CATH200": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"CCOM200": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CCOM205": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"}
		],
		"CCOM206": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CCOM314": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CCOM315": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CEAP250": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CEGL413": [
			{"credits": "20", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "20", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"CEGL423": [
			{"credits": "20", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "20", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"}
		],
		"CFRN215": [
			{"credits": "8", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"}
		],
		"CFRN315": [
			{"credits": "8", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"}
		],
		"CFRN333": [
			{"credits": "20", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"}
		],
		"CFRN343": [
			{"credits": "20", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"CFRN423": [
			{"credits": "20", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"CHEE200": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C"}
		],
		"CHEE204": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"}
		],
		"CHEE220": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"CHEE231": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CHEE291": [
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CHEE301": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"}
		],
		"CHEE310": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CHEE314": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C+"}
		],
		"CHEE315": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"}
		],
		"CHEE351": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CHEE360": [
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"CHEE370": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEE380": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"CHEE390": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEE400": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEE401": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CHEE423": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEE440": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CHEE453": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"CHEE455": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEE456": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"CHEE457": [
			{"credits": "5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CHEE474": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CHEE484": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"CHEE491": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CHEE511": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"CHEE541": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"CHEE563": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"CHEE591": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"CHEE593": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"}
		],
		"CHEM110": [
			{"credits": "4", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEM120": [
			{"credits": "4", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CHEM122": [
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"CHEM181": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"CHEM183": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"CHEM203": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEM204": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"CHEM211": [
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"CHEM212": [
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "4", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEM213": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CHEM214": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CHEM219": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"CHEM222": [
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEM223": [
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"}
		],
		"CHEM224": [
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"CHEM232": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"CHEM233": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CHEM234": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CHEM243": [
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "C+"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"CHEM244": [
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CHEM267": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CHEM273": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CHEM281": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"CHEM283": [
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"CHEM287": [
			{"credits": "2", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"}
		],
		"CHEM297": [
			{"credits": "1", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"}
		],
		"CHEM302": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"CHEM332": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"CHEM334": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"CHEM345": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"CHEM362": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"CHEM365": [
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"}
		],
		"CHEM367": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"CHEM377": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CHEM381": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"CHEM392D2": [
			{"credits": "1.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"CHEM392": [
			{"credits": "1.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"CHEM392D1": [
			{"credits": "1.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"CHEM502": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"CHEM503": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"CIVE202": [
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"CIVE205": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE206": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CIVE207": [
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CIVE208": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CIVE210": [
			{"credits": "2", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "2", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "2", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "2", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A"}
		],
		"CIVE225": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CIVE281": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CIVE284": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"CIVE290": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"CIVE302": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE311": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"CIVE317": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CIVE318": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE319": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE320": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CIVE323": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CIVE324": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CIVE327": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE416": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE418": [
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CIVE432": [
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"CIVE433": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"}
		],
		"CIVE446": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"CIVE460": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"CIVE462": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"CIVE463": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"CIVE512": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CIVE527": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"CIVE555": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"CLAS200": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"CLAS201": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"CLAS203": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CLAS206": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"}
		],
		"CLAS208": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"}
		],
		"CLAS210": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CLAS212": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"CLAS215": [
			{"credits": "6", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"CLAS220": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"CLAS240": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"CLAS301": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"CLAS302": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CLAS304": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"}
		],
		"CLAS305": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"CLAS307": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"}
		],
		"CLAS310": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"CLAS348": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"CLAS370": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"}
		],
		"CLAS380": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"CMPL516": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"CMPL543": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"CMPL580": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"CMRK200": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"COGS444D2": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"COGS444": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"COGS444D1": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"COMP102": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"COMP189": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"COMP202": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP204": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP206": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP208": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"COMP230": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP250": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP251": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP252": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"COMP273": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP302": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP303": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C+"}
		],
		"COMP307": [
			{"credits": "2", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"COMP308": [
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"COMP310": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"COMP321": [
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"COMP322": [
			{"credits": "1", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "1", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"COMP330": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP350": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"COMP360": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP361D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"COMP361": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"COMP361D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"COMP362": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"COMP364": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"COMP400": [
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"COMP409": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"COMP417": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP421": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"COMP424": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP445": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"COMP451": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"COMP462": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"COMP499": [
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"COMP512": [
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"COMP520": [
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"COMP521": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"COMP523": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"COMP525": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"COMP527": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"COMP529": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"COMP533": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"COMP535": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"COMP546": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"}
		],
		"COMP547": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP550": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"COMP551": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP553": [
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"COMP557": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"COMP558": [
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMP561": [
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"COMP564": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"COMP596": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"COMP598": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"COMP599": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"COMP652": [
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"}
		],
		"COMS200": [
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"}
		],
		"COMS210": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"COMS230": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"COMS300": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"COMS301": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"COMS310": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"COMS320": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"COMS330": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"COMS350": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"COMS354": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"COMS355": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"}
		],
		"COMS361": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"COMS362": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EAST211": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"EAST212": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EAST213": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"EAST215": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"EAST220D2": [
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST220": [
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST220D1": [
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST230D2": [
			{"credits": "4.5", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST230": [
			{"credits": "4.5", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST230D1": [
			{"credits": "4.5", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST240": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST240D2": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST240D1": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EAST250": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EAST279": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"EAST303": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"EAST305": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"EAST330D2": [
			{"credits": "4.5", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"EAST330": [
			{"credits": "4.5", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"EAST330D1": [
			{"credits": "4.5", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"EAST340D2": [
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EAST340": [
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EAST340D1": [
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EAST350": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EAST361": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"EAST362": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"EAST364": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"EAST369": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EAST375": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EAST388": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ECON205": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ECON208": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECON209": [
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B"}
		],
		"ECON219": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ECON223": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECON225": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ECON227D2": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON227": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON227D1": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON230D2": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON230": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON230D1": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON250D2": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON250": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON250D1": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON257D2": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON257": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON257D1": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON295": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECON302": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECON304": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON305": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"}
		],
		"ECON306": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ECON308": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"ECON310": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ECON313": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECON314": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"ECON316": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ECON319": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECON326": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECON330D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON330": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON330D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON334": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECON335": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"ECON336": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"ECON337": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECON338": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ECON347": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ECON348": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"}
		],
		"ECON352D2": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON352": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON352D1": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON406": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"ECON408": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ECON409": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"ECON416": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ECON420": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"ECON423": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"ECON424": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECON426": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ECON434": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ECON440": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON447": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ECON450": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON452": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECON454": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ECON460": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ECON461": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECON468": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"ECON469": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"}
		],
		"ECON473": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"ECON546": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECSE200": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE202": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECSE205": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE206": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE210": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "C"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECSE211": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE221": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"}
		],
		"ECSE222": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECSE223": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE251": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C"}
		],
		"ECSE291": [
			{"credits": "2", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "2", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"ECSE303": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"}
		],
		"ECSE304": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"ECSE305": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ECSE306": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"}
		],
		"ECSE307": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECSE308": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE309": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"}
		],
		"ECSE310": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE316": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECSE321": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE322": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"ECSE323": [
			{"credits": "5", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "5", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"}
		],
		"ECSE324": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE325": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ECSE326": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE330": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"}
		],
		"ECSE331": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C+"}
		],
		"ECSE334": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"ECSE335": [
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ECSE343": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ECSE351": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"ECSE352": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"ECSE353": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE354": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ECSE361": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"ECSE362": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"ECSE403": [
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ECSE404": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"ECSE405": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"ECSE412": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"ECSE414": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"ECSE415": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ECSE416": [
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ECSE420": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE421": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"ECSE424": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ECSE425": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECSE426": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"ECSE427": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"ECSE428": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ECSE429": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ECSE434": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"ECSE437": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"ECSE443": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ECSE444": [
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ECSE446": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"ECSE456": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"}
		],
		"ECSE457": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"}
		],
		"ECSE458D2": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ECSE458": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ECSE458D1": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ECSE461": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ECSE486": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ECSE489": [
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"ECSE493": [
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"ECSE500": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"ECSE512": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ECSE543": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"ECSE551": [
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ECSE552": [
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"EDEA241": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"EDEC201": [
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A"}
		],
		"EDEC202": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"EDEC203": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"EDEC233": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDEC247": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"}
		],
		"EDEC248": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDEC249": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"EDEC253": [
			{"credits": "1", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A"}
		],
		"EDEC254": [
			{"credits": "1", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A"}
		],
		"EDEC260": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"EDEC261": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"}
		],
		"EDEC262": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDEC351": [
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"EDEC404": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"EDEE223": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EDEE230": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDEE250": [
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"}
		],
		"EDEE253": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EDEE260": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"EDEE270": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDEE273": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDEE275": [
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"}
		],
		"EDEE280": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"EDEE282": [
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"}
		],
		"EDEE283": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDEE325": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"}
		],
		"EDEE332": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"EDEE353": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"}
		],
		"EDEE355": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"EDEM220": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"EDER252": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"EDER319": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"EDER395": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"}
		],
		"EDES350": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"EDES366": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"EDKP100": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"EDKP204": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"EDKP206": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EDKP208": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"EDKP214": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"EDKP217": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"EDKP218": [
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"EDKP223": [
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"EDKP225": [
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"}
		],
		"EDKP232": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EDKP233": [
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"EDKP250": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EDKP253": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"EDKP261": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"EDKP292": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"EDKP293": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"EDKP307": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"EDKP330": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"EDKP342": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"EDKP350": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"}
		],
		"EDKP391": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"EDKP395": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"EDKP396": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"EDKP405": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"EDKP442": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"EDKP443": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"EDKP447": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"EDKP448": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"EDKP449": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"EDKP450": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"EDKP485": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"EDKP495": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"EDKP498": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"EDPE208": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EDPE300": [
			{"credits": "3", "year": "2013", "term": "Summer", "termcode": "201305", "average": "A"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDPE304": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"EDPE335": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDPE375": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EDPI309": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDPI341": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"EDPT200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"EDPT204": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EDSL210": [
			{"credits": "1", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDSL254": [
			{"credits": "1", "year": "2015", "term": "Summer", "termcode": "201505", "average": "A"}
		],
		"EDSL300": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDSL304": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"}
		],
		"EDSL305": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"EDSL311": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"}
		],
		"EDSL315": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"}
		],
		"EDSL330": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"EDSL332": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"}
		],
		"EDSL334": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"EDSL350": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"EDSL412": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"EDSL415": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"EDSL447": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"EDSL458": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"EDTL520": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"ENGL200": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ENGL202": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENGL203": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENGL204": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"ENGL215": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ENGL225": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENGL226": [
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"}
		],
		"ENGL227": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENGL228": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ENGL229": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ENGL230": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENGL237": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"ENGL250": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ENGL275": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENGL277": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENGL279": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"ENGL280": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"ENGL290": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ENGL297": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENGL307": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ENGL311": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENGL313": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"ENGL314": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ENGL315": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENGL316": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ENGL318": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ENGL319": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENGL322": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"ENGL324": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"ENGL326": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ENGL327": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"ENGL331": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENGL332": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"ENGL335": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"}
		],
		"ENGL336": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENGL342": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"ENGL343": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ENGL346": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"}
		],
		"ENGL347": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"ENGL348": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"ENGL352": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ENGL354": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ENGL357": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ENGL359": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"ENGL360": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"ENGL362": [
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"}
		],
		"ENGL363": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"ENGL366": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"ENGL371": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ENGL374": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENGL378": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ENGL381": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENGL382": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ENGL385": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ENGL390": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"ENGL391": [
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"ENGL394": [
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"ENGL409": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ENGL414": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"ENGL415": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"ENGL418": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENGL423": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"ENGL440": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"ENGL472": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ENGL481": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"ENGL489": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"ENTO330": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"ENVB210": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENVB222": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENVB301": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ENVB305": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENVB313": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ENVB410": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"ENVB430": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"}
		],
		"ENVB437": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ENVB506": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"}
		],
		"ENVB529": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"ENVR200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENVR201": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ENVR202": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ENVR203": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"ENVR301": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ENVR400": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ENVR401": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"ENVR451": [
			{"credits": "6", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A"}
		],
		"EPSC180": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EPSC181": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"EPSC182": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"}
		],
		"EPSC185": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"EPSC186": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EPSC201": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"EPSC210": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"EPSC221": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"EPSC233": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"EPSC320": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"EPSC519": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ESYS104": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"EXMD401": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"}
		],
		"EXMD502": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"EXMD504": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"EXMD506": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"EXMD509": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"EXSU500": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"FACC100": [
			{"credits": "1", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "1", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "1", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A"},
			{"credits": "1", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "1", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "1", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"FACC220": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"FACC300": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"FACC400": [
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"FACC500": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"FDSC200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"FDSC213": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FDSC230": [
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C+"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "C+"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"FDSC231": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FDSC232": [
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FDSC233": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FDSC251": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"FDSC300": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"FDSC305": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"FDSC310": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"FDSC319": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FDSC330": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"FDSC334": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"FDSC400": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"FDSC442": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"FDSC525": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"FDSC540": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"FILM279": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"FINE342": [
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"FINE434": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FINE435": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"FINE441": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FINE442": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FINE443": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FINE445": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FINE447": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"FINE448": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FINE449": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"FINE451": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"FINE452": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"FINE456": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FINE482": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FINE492": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"FINE541N2": [
			{"credits": "1.5", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"FINE541": [
			{"credits": "1.5", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"FINE541D1": [
			{"credits": "1.5", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"FINE547": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"FREN201": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"FREN222": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"FREN231": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"FREN250": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"FREN251": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"FREN252": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FREN336": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"FREN444": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"FREN450": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"FRSL101": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"FRSL102": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL103": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FRSL105": [
			{"credits": "6", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "6", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "6", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "6", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "6", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "6", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "6", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "6", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "6", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "6", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "6", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "6", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "6", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "6", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "6", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "6", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"FRSL207D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL207": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL207D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL208": [
			{"credits": "6", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "6", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "6", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "6", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "6", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "6", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "6", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "6", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "6", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "6", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"FRSL211D2": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"FRSL211": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"FRSL211D1": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"FRSL215": [
			{"credits": "6", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "6", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"FRSL302": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"FRSL321D2": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL321": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL321D1": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL325": [
			{"credits": "6", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "6", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "6", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "6", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "6", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL332": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"FRSL333": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"FRSL407": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"FRSL431": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL431D2": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL431D1": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"FRSL445": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"FRSL446": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"FRSL449": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"FSCI500": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"GEOG200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"GEOG201": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"GEOG202": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"GEOG203": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"GEOG205": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"GEOG210": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"GEOG216": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"GEOG217": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"GEOG221": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"GEOG272": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"GEOG300": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"GEOG301": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"GEOG302": [
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"GEOG303": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GEOG305": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"GEOG306": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"GEOG307": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"GEOG308": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"GEOG310": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"GEOG311": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"GEOG315": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GEOG316": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"GEOG321": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"GEOG322": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"GEOG325": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GEOG331": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"GEOG333": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GEOG351": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GEOG360": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"GEOG372": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"GEOG407": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"GEOG408": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"GEOG409": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"GEOG494": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"GEOG498": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"}
		],
		"GERM197": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"}
		],
		"GERM202D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GERM202": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GERM202D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GERM259": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"GERM260": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"GERM307D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GERM307": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GERM307D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GERM373": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"GSFS200": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"GSFS250": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"GSFS300": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GSFS301": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"GSFS305": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"GSFS306": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"GSFS307": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"GSFS308": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"GSFS404": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"}
		],
		"GSFS405": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"GSFS406": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HGEN400": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"HISP210D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HISP210": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HISP210D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HISP218": [
			{"credits": "6", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "6", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "6", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "6", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "6", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "6", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "6", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HISP219": [
			{"credits": "6", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "6", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "6", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HISP220D2": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HISP220": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HISP220D1": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HISP225": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HISP226": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HISP241": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"HISP242": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"HISP243": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"HISP244": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"HISP301": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"HISP356": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"HIST200": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST201": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"HIST202": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST203": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST205": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST206": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"HIST207": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST208": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HIST209": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HIST211": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST212": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST213": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"HIST214": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"HIST215": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST216": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST218": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST219": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HIST221": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"HIST223": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"HIST226": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"HIST236": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"HIST238": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST240": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST249": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST275": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HIST298": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"HIST299": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HIST301": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"HIST302": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"HIST304": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST306": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"HIST307": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST308": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"HIST309": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"HIST310": [
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"HIST311": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"HIST313": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"HIST314": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST315": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"HIST316": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"HIST317": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST319": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"HIST323": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"HIST325": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"HIST326": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST327": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HIST328": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HIST330": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HIST331": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"HIST332": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"HIST333": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"HIST334": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"HIST335": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"}
		],
		"HIST338": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HIST340": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"HIST341": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"HIST342": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"HIST343": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"HIST345": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"HIST346": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"HIST347": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"HIST349": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"HIST350": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"HIST351": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"}
		],
		"HIST353": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"HIST354": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"HIST356": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"HIST358": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"}
		],
		"HIST360": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"HIST362": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"HIST364": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"HIST365": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST367": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"HIST368": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"HIST369": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"HIST370": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"HIST371": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"HIST374": [
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"}
		],
		"HIST375": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST376": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"HIST377": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"HIST380": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"HIST382": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"HIST383": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"HIST384": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"HIST386": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"HIST387": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"HIST388": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"HIST390": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"HIST391": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"}
		],
		"HIST392": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"HIST393": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"HIST394": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"HIST397": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"HIST399": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"HIST417": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"HIST422": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"HIST435": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"}
		],
		"HIST436": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"HIST481": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"HSEL308": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"HSEL309": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"INDG200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"INDG202": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"INDG401": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"}
		],
		"INDR294": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"INDR492": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"INDR494": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"INDR496": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"INSY331": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"INSY333": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"INSY336": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"INSY339": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"INSY341": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"INSY432": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"INSY437": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"INSY440": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"INSY442": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"INSY444": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"INSY446": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"INSY448": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"INSY450": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"INSY455": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"INTD200": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"INTD350": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"INTD352": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"INTD354": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"INTD356": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"INTD358": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"INTD360": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"INTD397": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"INTD497": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"INTG201": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"INTG202": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ISLA199": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"ISLA200": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"ISLA210": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ISLA221D2": [
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ISLA221": [
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ISLA221D1": [
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"ISLA300": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"ISLA325": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ISLA330": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"}
		],
		"ISLA355": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"}
		],
		"ISLA360": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"ISLA383": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"ISLA392": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"ISLA521D2": [
			{"credits": "4.5", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "4.5", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ISLA521": [
			{"credits": "4.5", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "4.5", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ISLA521D1": [
			{"credits": "4.5", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "4.5", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"ISLA522D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ISLA522": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ISLA522D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"ISLA523D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ISLA523": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ISLA523D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ITAL205D2": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ITAL205": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ITAL205D1": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ITAL206": [
			{"credits": "6", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "6", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "6", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "6", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "6", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "6", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "6", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ITAL216": [
			{"credits": "6", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"ITAL230": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"ITAL355": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"ITAL375": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"JWST202": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"JWST206": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"JWST220D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"JWST220": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"JWST220D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"JWST240": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"JWST245": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"JWST254": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"JWST303": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"JWST309": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"JWST311": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"JWST316": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"}
		],
		"JWST330": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"JWST334": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"JWST346": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"}
		],
		"JWST376": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"}
		],
		"LAWG100D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG100": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG100D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG101D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG101": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG101D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG102D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG102": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG102D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"LAWG103": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"LAWG210": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LAWG220D2": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LAWG220": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LAWG220D1": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LAWG316": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LAWG415": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"LAWG426": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"LAWG505": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"LAWG535": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"LAWG538": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LEEL369": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"LEEL582": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LING200": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"LING201": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B"},
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"LING210": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"LING211": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"LING260": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"LING320": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"LING325": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"LING330": [
			{"credits": "3", "year": "2013", "term": "Summer", "termcode": "201305", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"LING331": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"LING350": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"}
		],
		"LING355": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"LING360": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"}
		],
		"LING371": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"LING390": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"}
		],
		"LING410": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"LING425": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"LING445": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"LING451": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"LING455": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"LING521": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"}
		],
		"LING530": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"LLCU201": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"LLCU210": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"LLCU212": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"LLCU255": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"LLCU300": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"LLCU311": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"LSCI202": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"LSCI204": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"LSCI211": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"LSCI230": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MATH111": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"MATH112": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B-"},
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B-"}
		],
		"MATH122": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MATH123": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH133": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B-"},
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "C+"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH139": [
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH140": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"},
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B-"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MATH141": [
			{"credits": "4", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B-"},
			{"credits": "4", "year": "2013", "term": "Summer", "termcode": "201305", "average": "B-"},
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B-"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Summer", "termcode": "201705", "average": "C+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Summer", "termcode": "201805", "average": "C+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "4", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "4", "year": "2022", "term": "Summer", "termcode": "202205", "average": "C+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH150": [
			{"credits": "4", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH151": [
			{"credits": "4", "year": "2013", "term": "Winter", "termcode": "201301", "average": "C+"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MATH180": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"MATH203": [
			{"credits": "3", "year": "2013", "term": "Summer", "termcode": "201305", "average": "B+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MATH204": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MATH208": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MATH222": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH223": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH235": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH236": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"MATH240": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH242": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH243": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH247": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH248": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH249": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH251": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH254": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH255": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MATH262": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH263": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MATH264": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH270": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"}
		],
		"MATH271": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MATH308": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MATH314": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"MATH315": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "C"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "C"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MATH316": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MATH317": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"MATH318": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH319": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"MATH323": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C+"},
			{"credits": "3", "year": "2014", "term": "Summer", "termcode": "201405", "average": "C"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "C"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "D"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "C"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "C"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MATH324": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH325": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH326": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MATH327": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"MATH329": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"MATH338": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH340": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH348": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C+"}
		],
		"MATH350": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MATH356": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH357": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH358": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"MATH363": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"MATH381": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"MATH417": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MATH423": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MATH430": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"}
		],
		"MATH447": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MATH454": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH455": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"MATH456": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH457": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"MATH458": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MATH475": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MATH523": [
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MATH524": [
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MATH525": [
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MATH533": [
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MATH545": [
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"MATH556": [
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"MATH558": [
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MECH201": [
			{"credits": "2", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A"},
			{"credits": "2", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A"},
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MECH210": [
			{"credits": "2", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "2", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "2", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "2", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "2", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH220": [
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "C+"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "C"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "C"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "C+"},
			{"credits": "4", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "C+"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C+"}
		],
		"MECH240": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MECH261": [
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "2", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH262": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH289": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MECH290": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MECH292": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MECH309": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "C+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MECH314": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH315": [
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "C+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "C+"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "C+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MECH321": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH331": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MECH341": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MECH346": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH360": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH362": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MECH383": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH393": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MECH412": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MECH430": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"MECH447": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"MECH463D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MECH463": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MECH463D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MECH497": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MECH500": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"MECH530": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MECH532": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"MECH533": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MECH535": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"MECH536": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"MECH539": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"MECH542": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MECH547": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MECH559": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"MECH560": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"MECH563": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MECH565": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"MECH572": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"MECH579": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"MGCR211": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "C+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR222": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR271": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "C+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR293": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR331": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR341": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MGCR352": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR360": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR382": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR423": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGCR472": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"}
		],
		"MGPO362": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGPO364": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MGPO365": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"MGPO383": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"MGPO435": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MGPO438": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MGPO440": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MGPO460": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"MGPO469": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"MGPO470": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MGPO475": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"MGSC372": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MGSC373": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"MGSC401": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"MGSC404": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"MICR331": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"MICR338": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"MICR341": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"MIME209": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"MIME212": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"MIME250": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MIME260": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MIME261": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MIME262": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"MIME311": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"}
		],
		"MIME317": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"MIME320": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"MIME341": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"MIME345": [
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B-"}
		],
		"MIME350": [
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"}
		],
		"MIME352": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"MIME356": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"MIME360": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"MIME362": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"MIME422": [
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"}
		],
		"MIME442": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"}
		],
		"MIME452": [
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MIME455": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MIME456": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MIME465": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"MIME467": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B-"}
		],
		"MIME470": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"MIME473": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MIME565": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"MIMM211": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MIMM212": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MIMM214": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MIMM301": [
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MIMM314": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"MIMM323": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MIMM324": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MIMM384": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MIMM385": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MIMM387": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MIMM413": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MIMM414": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MIMM465": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MIMM466": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MRKT354": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MRKT355": [
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"}
		],
		"MRKT357": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"MRKT365": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"MRKT434": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"}
		],
		"MRKT438": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MRKT440": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MRKT451": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MRKT452": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MRKT453": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"MRKT455": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MRKT459": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"MRKT483": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"MSUS401": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"MSUS434": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MUAR201": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUAR211": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "A-"},
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "A-"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUAR374": [
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"MUAR382": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MUAR392": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUAR393": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MUAR399": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"}
		],
		"MUEN560": [
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"MUEN563": [
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"MUEN567": [
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"MUEN568": [
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"}
		],
		"MUEN570": [
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"MUEN580": [
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"}
		],
		"MUEN590": [
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MUEN593": [
			{"credits": "2", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"MUEN595": [
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MUEN597": [
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"MUGT305": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"MUHL186": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUHL286": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MUHL380": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MUHL383": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MUHL387": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"MUHL392": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MUHL396": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"MUIN110": [
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MUIN111": [
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MUIN180": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"MUIN181": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"MUIN280": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "2.5", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "2.5", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "2.5", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "2.5", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "2.5", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MUIN281": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "2.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "2.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MUIN282": [
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MUIN283": [
			{"credits": "0", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"MUIN380": [
			{"credits": "2.5", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "2.5", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MUIN381": [
			{"credits": "2.5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "2.5", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"MUIN382": [
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"MUJZ160": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MUJZ170": [
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MUJZ187": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"MUMT202": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUMT250": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"MUMT302": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"MUPD200": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"MUPD201": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"MUPG473": [
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MUPG474": [
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MUSP140": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"MUSP141": [
			{"credits": "2", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "2", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "2", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MUSP170": [
			{"credits": "1", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"MUSP171": [
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"MUSP240": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "2", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUSP241": [
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"MUSR200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"MUSR201": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"MUTH150": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"MUTH151": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"MUTH250": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"MUTH251": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"MUTH350": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"NEUR310": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"NRSC221": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"NRSC333": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"NSCI200": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"NSCI201": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"NSCI300": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"NSCI400D2": [
			{"credits": ".5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": ".5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NSCI400": [
			{"credits": ".5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": ".5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NSCI400D1": [
			{"credits": ".5", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": ".5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NSCI420D2": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NSCI420": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NSCI420D1": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NUR1200": [
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"}
		],
		"NUR1209": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"NUR1210": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"NUR1219": [
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"NUR1220": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"NUR1221": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"NUR1222": [
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"NUR1223": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"NUR1224": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"NUR1225": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NUR1230": [
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"NUR1231": [
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"NUR1234": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"NUR1235": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"NUR1236": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"NUR1239": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"NUR1300": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"NUR1301": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUR1311": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "C+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"NUR1312": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"NUR1318": [
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"NUR1320": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUR1322": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"NUR1323": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"NUR1324": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"NUR1325": [
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"NUR1326": [
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"NUR1327": [
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUR1329": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"NUR1331": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"NUR1332": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"NUR1335": [
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"NUR1336": [
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUR1338": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"NUR1339": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUR1420": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"NUR1422": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"NUR1424": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"NUR1428": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"}
		],
		"NUTR200": [
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "A-"}
		],
		"NUTR207": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"NUTR208": [
			{"credits": "2", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "2", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"NUTR209": [
			{"credits": "2", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "2", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "2", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"}
		],
		"NUTR214": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"NUTR217": [
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"NUTR301": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"NUTR307": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "C+"}
		],
		"NUTR310": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "2", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUTR322": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"NUTR337": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"NUTR341": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"NUTR342": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"NUTR343": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"NUTR344": [
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"NUTR345": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"NUTR346": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"NUTR408": [
			{"credits": "1", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"}
		],
		"NUTR438": [
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"}
		],
		"NUTR446": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"NUTR450": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"NUTR505": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"NUTR512": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"NUTR545": [
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"NUTR546": [
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"OCC1245": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"OCC1443": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"OCC1450": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"ORGB321": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"ORGB325": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ORGB380": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"ORGB423": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PARA410": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PARA438": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PARA515": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"PATH300": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHAR200": [
			{"credits": "1", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PHAR201": [
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHAR300": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHAR301": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PHAR303": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PHAR503": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"PHAR504": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"PHAR505": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PHAR508": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"PHAR562": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHAR563": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"PHGY209": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHGY210": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"PHGY212": [
			{"credits": "1", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "1", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "1", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "1", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "1", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "1", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "1", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "1", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "1", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "1", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHGY213": [
			{"credits": "1", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "1", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "1", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "1", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "1", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "1", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "1", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "1", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHGY311": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHGY312": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"PHGY313": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHGY314": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"PHGY425": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"PHGY461D2": [
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"PHGY461": [
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"PHGY461D1": [
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"}
		],
		"PHGY502": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHGY518": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"PHIL200": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHIL201": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL210": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B-"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "C"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PHIL221": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHIL230": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"PHIL237": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A"}
		],
		"PHIL240": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"PHIL242": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PHIL306": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHIL310": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"PHIL311": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"PHIL327": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"PHIL334": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL336": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"PHIL341": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHIL343": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"PHIL345": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"PHIL348": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL353": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL354": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PHIL355": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL360": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PHIL361": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"PHIL367": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "C+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"PHIL375": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "C+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHIL415": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL419": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHIL436": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"PHIL442": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"PHIL445": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"PHIL453": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHIL454": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PHIL460": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"PHIL474": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PHIL475": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PHIL480": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"PHIL481": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"PHTH245": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PHTH440": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHTH450": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"}
		],
		"PHTH550": [
			{"credits": "7", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"PHTH551": [
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"PHTH552": [
			{"credits": "5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"PHTH560": [
			{"credits": "6", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"PHTH561": [
			{"credits": "5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"PHYS101": [
			{"credits": "4", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHYS102": [
			{"credits": "4", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS131": [
			{"credits": "4", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B-"},
			{"credits": "4", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "4", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "4", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "4", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "4", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHYS142": [
			{"credits": "4", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B"},
			{"credits": "4", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "4", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "4", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "4", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "4", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "4", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "4", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "4", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS180": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"PHYS181": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHYS182": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"PHYS183": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHYS186": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS214": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"PHYS224": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHYS230": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHYS232": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS241": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHYS242": [
			{"credits": "2", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "2", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "2", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"PHYS251": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHYS253": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"PHYS257": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHYS258": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS260": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHYS271": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"PHYS319": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS320": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"PHYS321": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"PHYS328": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"PHYS331": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"PHYS333": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"PHYS339": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"PHYS340": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHYS342": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"PHYS346": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"PHYS350": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PHYS351": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PHYS352": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"PHYS357": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PHYS359": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PHYS362": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"PHYS434": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"PHYS439": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"PHYS446": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"PHYS447": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"PHYS457": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHYS512": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"PHYS514": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"PHYS519": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PHYS521": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"PHYS551": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PHYS557": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"PHYS559": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"PHYS567": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"PLNT300": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"PLNT358": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"}
		],
		"POLI210": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI211": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B-"}
		],
		"POLI212": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"POLI221": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI222": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI226": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI227": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI231": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"POLI232": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"}
		],
		"POLI243": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI244": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"POLI311": [
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI313": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"POLI318": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI319": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI320": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"POLI321": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"POLI322": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"POLI324": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI325": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI327": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"POLI328": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI329": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"POLI330": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"POLI331": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"POLI333": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI339": [
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI340": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI341": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"POLI342": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI345": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI346": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI347": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI348": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI349": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"POLI350": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI351": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"}
		],
		"POLI352": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI353": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"}
		],
		"POLI354": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"POLI355": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"POLI357": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI358": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"POLI359": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"POLI360": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI361": [
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"POLI362": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"POLI363": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"POLI364": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"POLI365": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"POLI366": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"}
		],
		"POLI367": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"POLI369": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"POLI371": [
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"POLI372": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"POLI378": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"POLI379": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"POLI380": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI381": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"POLI410": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"POLI412": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"POLI419": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"POLI422": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI423": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"POLI425": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"POLI426": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"}
		],
		"POLI427": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"POLI431": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI432": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"POLI433": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B-"}
		],
		"POLI435": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"POLI437": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"}
		],
		"POLI441": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"POLI444": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"POLI445": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"POLI446": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"POLI448": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"POLI449": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"POLI450": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"POLI451": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"POLI452": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"POLI470": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"POLI474": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"POLI476": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"POTH204": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"POTH225": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"POTH250": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"POTH401": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"POTH434": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"POTH455": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"POTH563": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"}
		],
		"PPHS501": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"PPHS511": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"PROC124": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"PROC124D2": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"PROC124D1": [
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"}
		],
		"PROC200": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"PRV3534": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"PRV4548": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"PRV4549": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"PSYC100": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PSYC204": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PSYC211": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "C+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PSYC212": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PSYC213": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"}
		],
		"PSYC215": [
			{"credits": "3", "year": "2012", "term": "Winter", "termcode": "201201", "average": "B+"},
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "C+"},
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B-"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B-"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PSYC301": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"}
		],
		"PSYC302": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"PSYC304": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PSYC305": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"PSYC310": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"PSYC311": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PSYC315": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PSYC317": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"}
		],
		"PSYC318": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"PSYC319": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PSYC328": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PSYC331": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PSYC332": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PSYC333": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PSYC337": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PSYC338": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"}
		],
		"PSYC341": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"}
		],
		"PSYC342": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PSYC380D2": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"PSYC380": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"PSYC380D1": [
			{"credits": "4.5", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"},
			{"credits": "4.5", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "4.5", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"PSYC403": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PSYC406": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"PSYC408": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PSYC410": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"PSYC412": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"PSYC413": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"PSYC427": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PSYC433": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"PSYC436": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"PSYC444": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"PSYC471": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"PSYC473": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"}
		],
		"PSYC474": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"}
		],
		"PSYC475": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"PSYC482": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"PSYC513": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PSYC514": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"PSYC526": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"PSYC529": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"PSYC532": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"}
		],
		"PSYC538": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"PSYT199": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"PSYT301": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"PSYT500": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"PUB2101D2": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"PUB2101": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"PUB2101D1": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"}
		],
		"PUB2105": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"PUB2313": [
			{"credits": "4", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "4", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "4", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"PUB2401": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"PUB2501": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"PUB2505": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"PUB3116": [
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"PUB3116D2": [
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"PUB3116D1": [
			{"credits": "2", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "2", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "2", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"}
		],
		"QCST200": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"REDM400": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A"}
		],
		"RELG201": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"RELG202": [
			{"credits": "3", "year": "2013", "term": "Winter", "termcode": "201301", "average": "A"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"RELG203": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RELG204": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RELG205": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"RELG207": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2015", "term": "Summer", "termcode": "201505", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"RELG208": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"RELG210": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"}
		],
		"RELG252": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"RELG253": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B"}
		],
		"RELG254": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"RELG255": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"}
		],
		"RELG270": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RELG271": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"RELG300": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"RELG307": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"RELG311": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"}
		],
		"RELG312": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"}
		],
		"RELG315": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"RELG316": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"RELG331": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"RELG338": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RELG340": [
			{"credits": "3", "year": "2012", "term": "Fall", "termcode": "201209", "average": "B"}
		],
		"RELG341": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"RELG352": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"}
		],
		"RELG353": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"RELG356": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"}
		],
		"RELG358": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"RELG369": [
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "A-"}
		],
		"RELG370": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"RELG372": [
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RELG375": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"RELG451": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"RETL402": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"RUSS210": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"RUSS211": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"RUSS217": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"}
		],
		"RUSS218": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B"}
		],
		"RUSS223": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"RUSS224": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RUSS229": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"RUSS250": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"RUSS337": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"RUSS340": [
			{"credits": "3", "year": "2014", "term": "Winter", "termcode": "201401", "average": "A-"}
		],
		"RUSS357": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"}
		],
		"RUSS382": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"RUSS395": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"SDST250": [
			{"credits": "3", "year": "2011", "term": "Fall", "termcode": "201109", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"}
		],
		"SEAD550": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"SOCI210": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"SOCI211": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Summer", "termcode": "201605", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Summer", "termcode": "201705", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"SOCI212": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"SOCI213": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B+"}
		],
		"SOCI219": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"}
		],
		"SOCI222": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"SOCI225": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "A-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"}
		],
		"SOCI227": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"SOCI230": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"SOCI234": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"SOCI235": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"}
		],
		"SOCI245": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"SOCI247": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B"},
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"SOCI250": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"SOCI254": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"SOCI255": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"SOCI265": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"SOCI270": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"SOCI304": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B-"}
		],
		"SOCI305": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"SOCI307": [
			{"credits": "3", "year": "2013", "term": "Fall", "termcode": "201309", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"SOCI309": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A"}
		],
		"SOCI310": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"SOCI312": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"SOCI318": [
			{"credits": "3", "year": "2018", "term": "Summer", "termcode": "201805", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "B"},
			{"credits": "3", "year": "2020", "term": "Summer", "termcode": "202005", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "B+"}
		],
		"SOCI321": [
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"}
		],
		"SOCI325": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"SOCI326": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "B"}
		],
		"SOCI330": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"SOCI331": [
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "B+"}
		],
		"SOCI333": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B+"}
		],
		"SOCI335": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A"}
		],
		"SOCI350": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B-"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"SOCI355": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "B"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"SOCI365": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"}
		],
		"SOCI366": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"}
		],
		"SOCI370": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "B+"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A-"}
		],
		"SOCI375": [
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"SOCI385": [
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A"}
		],
		"SOCI386": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "B+"}
		],
		"SOCI388": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"},
			{"credits": "3", "year": "2017", "term": "Winter", "termcode": "201701", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Summer", "termcode": "201905", "average": "A-"},
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"SOCI420": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "B+"}
		],
		"SOCI461": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"}
		],
		"SWRK220": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"SWRK221": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"SWRK222": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A"}
		],
		"SWRK223": [
			{"credits": "3", "year": "2021", "term": "Winter", "termcode": "202101", "average": "A-"}
		],
		"SWRK224": [
			{"credits": "3", "year": "2017", "term": "Fall", "termcode": "201709", "average": "A-"},
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"SWRK321": [
			{"credits": "3", "year": "2021", "term": "Summer", "termcode": "202105", "average": "A"}
		],
		"SWRK400": [
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
		"URBP201": [
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"URBP506": [
			{"credits": "3", "year": "2020", "term": "Fall", "termcode": "202009", "average": "A"}
		],
		"WCOM206": [
			{"credits": "3", "year": "2022", "term": "Summer", "termcode": "202205", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"WCOM250": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A"}
		],
		"WCOM314": [
			{"credits": "3", "year": "2022", "term": "Fall", "termcode": "202209", "average": "A-"}
		],
		"WILD302": [
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "A-"}
		],
		"WILD307": [
			{"credits": "3", "year": "2014", "term": "Fall", "termcode": "201409", "average": "B+"},
			{"credits": "3", "year": "2016", "term": "Fall", "termcode": "201609", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "B+"},
			{"credits": "3", "year": "2021", "term": "Fall", "termcode": "202109", "average": "B+"}
		],
		"WILD350": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "B+"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"WILD401": [
			{"credits": "4", "year": "2015", "term": "Fall", "termcode": "201509", "average": "A-"}
		],
		"WILD421": [
			{"credits": "3", "year": "2016", "term": "Winter", "termcode": "201601", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2022", "term": "Winter", "termcode": "202201", "average": "A-"}
		],
		"WILD424": [
			{"credits": "3", "year": "2015", "term": "Winter", "termcode": "201501", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "B+"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"}
		],
		"WMST200": [
			{"credits": "3", "year": "2015", "term": "Fall", "termcode": "201509", "average": "B+"}
		],
		"WRIT491": [
			{"credits": "3", "year": "2018", "term": "Winter", "termcode": "201801", "average": "A-"},
			{"credits": "3", "year": "2018", "term": "Fall", "termcode": "201809", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Winter", "termcode": "201901", "average": "A-"},
			{"credits": "3", "year": "2019", "term": "Fall", "termcode": "201909", "average": "A-"}
		],
	};
	return classAveragesData;
}