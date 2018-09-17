/*
McGill Enhanced is a chrome extension that improves the functionality and navigability "year": "2016", of McGill.ca
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
		"ACCT351":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ACCT352":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ACCT354":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ACCT361":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ACCT362":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ACCT385":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ACCT475":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"AEBI120":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"AEBI122":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"AEBI210":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"AEBI211":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"AEBI212":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"AECH110":[
			{ "credits":"4", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B+" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"AECH111":[
			{ "credits":"4", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"AEHM205":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"AEMA101":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"C" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"AEMA102":[
			{ "credits":"4", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B-" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"AEMA310":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"AEPH112":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"AEPH113":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" }
		],
		"AEPH114":[
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"AEPH115":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"AFRI200":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"AFRI401":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"AGEC200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"AGEC330":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANAT212":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANAT214":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANAT261":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ANAT262":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANAT315":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANAT316":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANAT321":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ANAT322":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANAT323":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"ANAT365":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANAT416":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"ANSC234":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ANSC250":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANSC312":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANSC323":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANSC350":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ANSC400":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANSC420":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ANSC424":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANTH201":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANTH202":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANTH203":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ANTH204":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH206":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ANTH209":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH210":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANTH212":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" }
		],
		"ANTH222":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ANTH227":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANTH301":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANTH308":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ANTH311":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANTH322":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANTH326":[
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ANTH339":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ANTH343":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANTH352":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ARCH517":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ARCH528":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ARTH200":[
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ARTH202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ARTH204":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ARTH205":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ARTH207":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ARTH209":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"ARTH215":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ARTH226":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ARTH305":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ARTH315":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ARTH321":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ARTH323":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ARTH337":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"ARTH338":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ARTH353":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ARTH354":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ATOC181":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ATOC184":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ATOC185":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ATOC214":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BASC201":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"BIEN200":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIEN210":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"BIEN290":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"BIEN350":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOC212":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOC220":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOC311":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"BIOC312":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOC320":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOC404":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOC450":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BIOC454":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BIOL111":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BIOL112":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOL115":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"BIOL200":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL201":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOL202":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"BIOL205":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOL206":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOL210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL215":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL219":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL300":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL301":[
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"BIOL303":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BIOL304":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL305":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOL306":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BIOL308":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL309":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BIOL310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"BIOL314":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL320":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"BIOL342":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"BIOL370":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BIOL373":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BIOL427":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"BIOL465":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"BIOT505":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"BREE103":[
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" }
		],
		"BREE205":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"BREE210":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BREE216":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"BREE252":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"BREE301":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"BREE322":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"BREE327":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"BREE341":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" }
		],
		"BREE520":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" }
		],
		"BUSA100":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BUSA250":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"BUSA356":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"BUSA364":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"BUSA391":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"BUSA394":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BUSA430":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BUSA433":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"BUSA465":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"BUSA499":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CANS200":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CANS303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CATH200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CCOM205":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" }
		],
		"CCOM206":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"CEAP250":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CHEE200":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CHEE204":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"CHEE220":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"CHEE231":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CHEE291":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEE310":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"CHEE314":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"CHEE315":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CHEE351":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CHEE360":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEE370":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEE380":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEE390":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CHEE400":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"CHEE401":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"CHEE423":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEE440":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEE453":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEE455":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CHEE457":[
			{ "credits":"5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEE474":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEE484":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEE491":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEE541":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEE563":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEE591":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"CHEE593":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"CHEM110":[
			{ "credits":"4", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEM120":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"CHEM122":[
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEM181":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"CHEM183":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEM203":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CHEM204":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CHEM212":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"CHEM214":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CHEM219":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"CHEM222":[
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"CHEM223":[
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CHEM233":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEM234":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"C+" }
		],
		"CHEM243":[
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" }
		],
		"CHEM267":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEM281":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"CHEM283":[
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEM287":[
			{ "credits":"2", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"CHEM297":[
			{ "credits":"1", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"CHEM302":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CHEM345":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CHEM362":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"CHEM367":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"CHEM381":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CHEM502":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEM503":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CIVE202":[
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"CIVE205":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"CIVE206":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"CIVE207":[
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"CIVE208":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CIVE210":[
			{ "credits":"2", "year":"2016", "term":"Summer", "termcode":"201605", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"CIVE225":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CIVE281":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CIVE290":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CIVE302":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CIVE311":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"CIVE317":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"CIVE318":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CIVE319":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CIVE320":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CIVE323":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CIVE327":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CIVE433":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"CIVE462":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CIVE527":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CLAS200":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CLAS203":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CLAS206":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"CLAS208":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"CLAS210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"CLAS212":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CLAS220":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"CLAS240":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"CLAS304":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"CLAS310":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"CLAS370":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"CLAS380":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP102":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"COMP189":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"COMP202":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP206":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP208":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP230":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"COMP250":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"COMP251":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"COMP252":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP273":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"COMP302":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"COMP303":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"COMP307":[
			{ "credits":"2", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"COMP308":[
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP310":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"COMP321":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"COMP322":[
			{ "credits":"1", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"1", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"1", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"COMP330":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"COMP350":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"COMP360":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"COMP361D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP361":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP361D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP362":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"COMP364":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"COMP417":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"COMP421":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP424":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP462":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"COMP499":[
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"COMP520":[
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMP521":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"COMP525":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"COMP529":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"COMP533":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"COMP535":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP546":[
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"COMP547":[
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"COMP550":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"COMP551":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"COMP557":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"COMP561":[
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"COMP598":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"COMP599":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"COMP652":[
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"COMS200":[
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"COMS210":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"COMS230":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"COMS301":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"COMS310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMS350":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EAST211":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"EAST212":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"EAST213":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"EAST230D2":[
			{ "credits":"4.5", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EAST230":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EAST230D1":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EAST240D2":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"EAST240":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"EAST240D1":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"EAST250":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"EAST303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"EAST305":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EAST330D2":[
			{ "credits":"4.5", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"EAST330":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"EAST330D1":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"EAST350":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"EAST361":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECON205":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECON208":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON209":[
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON219":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON223":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON225":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECON227D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON227":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON227D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON230D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON230":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON230D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON250D2":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON250":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON250D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON257D2":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON257":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON257D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON295":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECON304":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON305":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ECON306":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECON308":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON313":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECON314":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON316":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECON319":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECON330D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON330":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON330D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECON334":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON335":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ECON336":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECON337":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECON338":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"ECON352D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON352":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON352D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECON406":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON450":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"ECON452":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"ECON460":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ECON468":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" }
		],
		"ECON469":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"ECON546":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE200":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECSE202":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECSE205":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECSE206":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECSE210":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"C" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECSE211":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECSE221":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ECSE222":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECSE223":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECSE251":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECSE291":[
			{ "credits":"2", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"2", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECSE303":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ECSE304":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE305":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECSE306":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"ECSE307":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ECSE321":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECSE322":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECSE323":[
			{ "credits":"5", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"5", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"ECSE324":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECSE330":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECSE331":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ECSE334":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECSE351":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE352":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECSE353":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECSE354":[
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECSE361":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"ECSE404":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"ECSE414":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ECSE415":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ECSE420":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"ECSE421":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"ECSE425":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"ECSE426":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ECSE427":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE428":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ECSE429":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECSE434":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"2", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ECSE443":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"ECSE456":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"ECSE457":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"ECSE461":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ECSE489":[
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDEA241":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDEC201":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDEC202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"EDEC203":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDEC247":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDEC248":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDEC249":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" }
		],
		"EDEC253":[
			{ "credits":"1", "year":"2016", "term":"Summer", "termcode":"201605", "average":"A" }
		],
		"EDEC260":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"EDEC261":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"EDEC262":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EDEE223":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EDEE230":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDEE250":[
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EDEE260":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDEE270":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"EDEE275":[
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"EDEE280":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EDEE282":[
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"EDEE325":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A" }
		],
		"EDEE332":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDEE353":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"EDEE355":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDEM220":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDER395":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" }
		],
		"EDES350":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDES366":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"EDKP206":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"EDKP250":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"EDKP261":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"EDKP292":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDKP330":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"EDKP350":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"EDKP395":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDKP443":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDPE300":[
			{ "credits":"3", "year":"2013", "term":"Summer", "termcode":"201305", "average":"A" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDPE304":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDPI309":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDPI341":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"EDPT200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" }
		],
		"EDPT204":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"EDSL210":[
			{ "credits":"1", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDSL254":[
			{ "credits":"1", "year":"2015", "term":"Summer", "termcode":"201505", "average":"A" }
		],
		"EDSL300":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"EDSL304":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"EDSL305":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"EDSL311":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"EDSL315":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"EDSL330":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"EDSL332":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" }
		],
		"EDSL334":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EDSL350":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"EDSL412":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"EDSL415":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDSL447":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" }
		],
		"EDSL458":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"ENGL202":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"ENGL203":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL215":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL225":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"ENGL227":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"ENGL228":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"ENGL229":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL230":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ENGL237":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" }
		],
		"ENGL275":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ENGL277":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"ENGL280":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL297":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"ENGL311":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"ENGL315":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL324":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ENGL326":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"ENVB210":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ENVB222":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"ENVB301":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ENVB305":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ENVB410":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ENVB430":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"ENVB437":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ENVB506":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"ENVR200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ENVR201":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ENVR202":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ENVR203":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ENVR301":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ENVR400":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ENVR401":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EPSC180":[
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EPSC181":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EPSC182":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EPSC185":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"EPSC186":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"EPSC201":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"EPSC210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EPSC221":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ESYS104":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EXMD401":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EXMD504":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"EXMD509":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"FACC100":[
			{ "credits":"1", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"1", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"1", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A" },
			{ "credits":"1", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"1", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"1", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" },
			{ "credits":"1", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"FACC220":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"FACC300":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"FACC400":[
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" },
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" },
			{ "credits":"1", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"FDSC200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FDSC213":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FDSC230":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"FDSC233":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"FDSC251":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"FDSC300":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"FDSC305":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FDSC310":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"FDSC330":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"FDSC442":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"FILM279":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"FINE342":[
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FINE434":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FINE435":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FINE441":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FINE442":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"FINE443":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FINE448":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"FINE451":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FINE482":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FINE492":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FINE541N2":[
			{ "credits":"1.5", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"FINE541":[
			{ "credits":"1.5", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"FINE541D1":[
			{ "credits":"1.5", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"FREN201":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FREN250":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FREN251":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FREN444":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL101":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FRSL102":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL103":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FRSL105":[
			{ "credits":"6", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"6", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"6", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"6", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"6", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"FRSL207D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL207":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL207D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL208":[
			{ "credits":"6", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"6", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"FRSL211D2":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL211":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL211D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL302":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"FRSL321D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL321":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL321D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL325":[
			{ "credits":"6", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"6", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" }
		],
		"FRSL407":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"FRSL431D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL431":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL431D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"FRSL445":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GEOG200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"GEOG201":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GEOG202":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG203":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GEOG205":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"GEOG210":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"GEOG216":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"GEOG217":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"GEOG221":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG272":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"GEOG300":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"GEOG302":[
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"GEOG306":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"GEOG307":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"GEOG308":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GEOG310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"GEOG311":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"GEOG315":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG316":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GEOG322":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"GEOG325":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"GEOG331":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GEOG351":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"GEOG360":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG372":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG409":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"GERM202D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM202D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM259":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"GERM260":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"GERM307D2":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM307":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM307D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GSFS200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GSFS250":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"GSFS300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"GSFS305":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"GSFS306":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GSFS307":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"GSFS405":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"GSFS406":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"HISP210D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HISP210":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HISP210D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HISP218":[
			{ "credits":"6", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"HISP219":[
			{ "credits":"6", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"6", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HISP220D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HISP220":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HISP220D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HISP225":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HISP226":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HISP242":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HISP243":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HISP244":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST200":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST201":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST202":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST203":[
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST205":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"HIST207":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" }
		],
		"HIST208":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST211":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST213":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST214":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"HIST215":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"HIST218":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST219":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"HIST221":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST223":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST226":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST236":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST240":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST249":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST301":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"HIST302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST304":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST306":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST309":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST310":[
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" }
		],
		"HIST311":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST315":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"HIST316":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST323":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST325":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST326":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"HIST327":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"HIST332":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"HIST335":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST338":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST340":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"HIST341":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"HIST342":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST343":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"HIST346":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST347":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"HIST350":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST351":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"HIST354":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HIST356":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST358":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" }
		],
		"HIST360":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST362":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"HIST367":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST369":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"HIST370":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST375":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST376":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"HIST377":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"HIST380":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST383":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST384":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST387":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"HIST388":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST390":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HIST391":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"HIST392":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HIST393":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST394":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST417":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"HIST422":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"HIST435":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"HIST436":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST481":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"INDG200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"INDR294":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"INSY331":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INSY333":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INSY336":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"INSY341":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INSY437":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INSY440":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"INSY442":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"INSY444":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"INSY446":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INSY455":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INTD200":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"INTD397":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"INTD497":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"INTG201":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"INTG202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ISLA199":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ISLA200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ISLA210":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ISLA300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ISLA330":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"ISLA355":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"ISLA383":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"ISLA521D2":[
			{ "credits":"4.5", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ISLA521":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ISLA521D1":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ISLA522D2":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ISLA522":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ISLA522D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ISLA523D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"ISLA523":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"ISLA523D1":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"ITAL205D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ITAL205":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ITAL205D1":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"ITAL206":[
			{ "credits":"6", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"6", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ITAL230":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"ITAL355":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"JWST240":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"JWST303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"JWST376":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"LING200":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"LING201":[
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"LING210":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"LING260":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"LING320":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"LING325":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"LING330":[
			{ "credits":"3", "year":"2013", "term":"Summer", "termcode":"201305", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"LING331":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"LING350":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"LING355":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"LING360":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"LING371":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"LING390":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"LING425":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"LING451":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"LING455":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"LING521":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"LING530":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"LLCU201":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"LLCU212":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"LSCI202":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"LSCI204":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"LSCI211":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"LSCI230":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH111":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MATH112":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B-" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" }
		],
		"MATH122":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MATH123":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MATH133":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH139":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH140":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH141":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B-" },
			{ "credits":"4", "year":"2013", "term":"Summer", "termcode":"201305", "average":"B-" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Summer", "termcode":"201705", "average":"C+" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH150":[
			{ "credits":"4", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MATH151":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"C+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH180":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MATH203":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MATH204":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH222":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MATH223":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"C+" }
		],
		"MATH235":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MATH236":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"C+" }
		],
		"MATH240":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH242":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MATH243":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH247":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH248":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MATH249":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH251":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MATH254":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MATH255":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH262":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MATH263":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH264":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"C+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MATH270":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MATH271":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"C+" }
		],
		"MATH314":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH315":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MATH317":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MATH318":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH319":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"MATH323":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"C" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"C" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"D" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH324":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MATH325":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH326":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH329":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MATH338":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH340":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MATH348":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH350":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH356":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH357":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH363":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH381":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"MATH423":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" }
		],
		"MATH447":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MATH454":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MATH455":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"MATH456":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MATH475":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MATH523":[
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"MECH201":[
			{ "credits":"2", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A" },
			{ "credits":"2", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MECH210":[
			{ "credits":"2", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"2", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"2", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"2", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"2", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MECH220":[
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"C+" }
		],
		"MECH240":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"C+" }
		],
		"MECH261":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MECH262":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH289":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MECH290":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH292":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"MECH309":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MECH314":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MECH315":[
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH321":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MECH331":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MECH341":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH346":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MECH360":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH362":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"MECH383":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH393":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MECH412":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"MECH430":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MECH447":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MECH463D2":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH463":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH463D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH530":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MECH532":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MECH533":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MECH535":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MECH539":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH542":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"MECH565":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"MGCR211":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"C+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MGCR222":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MGCR271":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MGCR293":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MGCR331":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGCR341":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGCR352":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGCR360":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGCR382":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGCR423":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGCR472":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGPO365":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MGPO435":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGPO438":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGPO460":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MGPO469":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MGPO470":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MGSC372":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MGSC373":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MICR331":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MICR341":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MIME209":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MIME212":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MIME250":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MIME260":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MIME261":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MIME262":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MIME317":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MIME341":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MIME356":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MIME360":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"MIMM211":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MIMM212":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"MIMM214":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MIMM314":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MIMM323":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MIMM324":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MIMM384":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MIMM385":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MIMM387":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"MIMM413":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MIMM414":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"MIMM465":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MRKT354":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"MRKT357":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MRKT365":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MRKT434":[
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"MRKT438":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MRKT451":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MRKT452":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"MRKT453":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MRKT455":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MUAR201":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MUAR211":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"A-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MUAR392":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MUAR393":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"MUAR399":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" }
		],
		"MUEN563":[
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"MUEN567":[
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"MUEN580":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"MUEN593":[
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MUEN597":[
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"MUHL186":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MUIN180":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"MUIN181":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"MUPD200":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MUPD201":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MUSP140":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"MUSP141":[
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MUSP170":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MUSP171":[
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MUSP240":[
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"MUSP241":[
			{ "credits":"2", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"MUSR200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"MUSR201":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MUTH150":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"MUTH151":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MUTH250":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"MUTH251":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"NEUR310":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"NRSC221":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"NRSC333":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"NSCI200":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NSCI201":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"NSCI300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"NSCI420D2":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"NSCI420":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"NSCI420D1":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"NUR1200":[
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"NUR1209":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"NUR1220":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"NUR1221":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"NUR1222":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUR1223":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"NUR1224":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUR1230":[
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUR1234":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"NUR1235":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUR1311":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"NUR1323":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"NUR1331":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUR1335":[
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUR1422":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"NUTR200":[
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"A-" }
		],
		"NUTR207":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"NUTR208":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"NUTR209":[
			{ "credits":"2", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"NUTR214":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUTR217":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"NUTR301":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUTR307":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"NUTR310":[
			{ "credits":"2", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"NUTR322":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"NUTR337":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"NUTR341":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"NUTR343":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"NUTR344":[
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"NUTR345":[
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"NUTR346":[
			{ "credits":"2", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"NUTR446":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"ORGB321":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ORGB325":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"ORGB380":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"ORGB423":[
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"PARA410":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PARA438":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PARA515":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PATH300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PHAR200":[
			{ "credits":"1", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" },
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"PHAR201":[
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"1", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHAR300":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHAR301":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHAR303":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHAR503":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHAR504":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PHAR505":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHAR508":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PHAR562":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHAR563":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHGY209":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHGY210":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PHGY212":[
			{ "credits":"1", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"1", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"1", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"1", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHGY213":[
			{ "credits":"1", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"1", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"1", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PHGY311":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"PHGY312":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B-" }
		],
		"PHGY313":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PHGY314":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHGY461D2":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"PHGY461":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"PHGY461D1":[
			{ "credits":"4.5", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"PHGY518":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHIL200":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHIL201":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHIL210":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHIL221":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PHIL230":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"PHIL237":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PHIL240":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHIL242":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"PHIL306":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHIL310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHIL327":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PHIL334":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHIL341":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" }
		],
		"PHIL343":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHIL345":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"PHIL348":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHIL354":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHIL355":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHIL360":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHIL375":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHIL415":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHIL436":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHIL454":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHIL460":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHIL474":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"PHTH245":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHTH440":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" }
		],
		"PHTH450":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"PHTH550":[
			{ "credits":"7", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHTH551":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHTH552":[
			{ "credits":"5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHTH560":[
			{ "credits":"6", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHTH561":[
			{ "credits":"5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHYS101":[
			{ "credits":"4", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS102":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS131":[
			{ "credits":"4", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHYS142":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"4", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS180":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS181":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS182":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS183":[
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PHYS186":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PHYS214":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHYS224":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS230":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS232":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"PHYS241":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PHYS242":[
			{ "credits":"2", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS251":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS253":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS257":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS258":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS260":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS271":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHYS328":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS333":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHYS339":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS340":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHYS350":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS351":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS352":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS357":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PHYS359":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS362":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS446":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PHYS457":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS519":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PHYS521":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PHYS551":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"PLNT358":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI211":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B-" }
		],
		"POLI212":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI221":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI222":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI226":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"POLI227":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI231":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI232":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"POLI243":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI244":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI311":[
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"POLI318":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI319":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI321":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI324":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI325":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"POLI327":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI328":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI330":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI331":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"POLI333":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI339":[
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" }
		],
		"POLI340":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI342":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI345":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI346":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI347":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"POLI349":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI350":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI353":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"POLI355":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"POLI359":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"POLI360":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI361":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"POLI362":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI364":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI365":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"POLI366":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"POLI371":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI372":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI378":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"POLI379":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI380":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"POLI381":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI410":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI412":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI425":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI437":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"POLI444":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"POLI448":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"POLI449":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI450":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"POLI451":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI476":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"POTH225":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"POTH250":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"POTH401":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"POTH434":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"POTH455":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"POTH563":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"PPHS501":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PPHS511":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PSYC100":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PSYC204":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PSYC211":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"PSYC212":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC213":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC215":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"C+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC301":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PSYC302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PSYC304":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PSYC305":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC310":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PSYC311":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"PSYC315":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC317":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"PSYC318":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PSYC328":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PSYC332":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC333":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC337":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"PSYC338":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC341":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"PSYC342":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC380D2":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PSYC380":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PSYC380D1":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PSYC403":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"PSYC406":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PSYC410":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"PSYC412":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC433":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"PSYC436":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PSYC444":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC471":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"PSYC526":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC532":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PSYC538":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A" }
		],
		"PSYT199":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"PSYT301":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"REDM400":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"RELG201":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"RELG202":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"RELG203":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"RELG204":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"RELG207":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"RELG208":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"RELG210":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"RELG252":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"RELG253":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"RELG255":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"RELG270":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"RELG271":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"RELG300":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"RELG316":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"RELG331":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"RELG338":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"RELG340":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" }
		],
		"RELG341":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"RELG352":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"RELG353":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"RELG356":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"RELG369":[
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"RELG370":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"RELG375":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"RUSS210":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"RUSS211":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"RUSS218":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"RUSS223":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"RUSS224":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"RUSS337":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"SDST250":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"SOCI210":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"SOCI211":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"SOCI212":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"SOCI213":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"SOCI219":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"SOCI222":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"SOCI225":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"SOCI227":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"SOCI230":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B" }
		],
		"SOCI234":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"SOCI235":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"SOCI247":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B" }
		],
		"SOCI250":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"SOCI254":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"SOCI265":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"SOCI270":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"SOCI304":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B-" }
		],
		"SOCI305":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"SOCI307":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"SOCI310":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"SOCI312":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"SOCI321":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"SOCI330":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"SOCI333":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"SOCI335":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"SOCI350":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"SOCI365":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"SOCI366":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"SOCI370":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"B+" }
		],
		"SOCI375":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"SOCI386":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"SOCI388":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"SOCI461":[
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"A-" }
		],
		"SWRK220":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"SWRK221":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A" }
		],
		"SWRK224":[
			{ "credits":"3", "year":"2017", "term":"Fall", "termcode":"201709", "average":"A-" }
		],
		"WILD307":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"WILD350":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"WILD401":[
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"WILD421":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"WILD424":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2018", "term":"Winter", "termcode":"201801", "average":"B+" }
		],
		"WMST200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		]
	};
	return classAveragesData;
}