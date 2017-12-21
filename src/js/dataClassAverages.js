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
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ACCT352":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ACCT354":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ACCT361":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ACCT385":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ACCT475":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"AEBI120":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"AEBI122":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"AEBI210":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"AEBI211":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
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
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"AECH111":[
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" }
		],
		"AEHM205":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"AEMA101":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" }
		],
		"AEMA102":[
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"AEMA310":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"AEPH112":[
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"AEPH114":[
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"AFRI200":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"AFRI401":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"AGEC200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"ANAT212":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANAT214":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANAT261":[
			{ "credits":"4", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B+" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ANAT262":[
			{ "credits":"3", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANAT315":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANAT316":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANAT321":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ANAT322":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANSC234":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANSC250":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANSC312":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANSC323":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANSC350":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ANSC424":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANTH201":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANTH202":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANTH203":[
			{ "credits":"3", "year":"2009", "term":"Winter", "termcode":"200901", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANTH204":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH206":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ANTH208":[
			{ "credits":"3", "year":"2010", "term":"Winter", "termcode":"201001", "average":"B+" }
		],
		"ANTH209":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH210":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANTH212":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"ANTH222":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH227":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ANTH301":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANTH308":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH311":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ANTH320":[
			{ "credits":"3", "year":"2009", "term":"Fall", "termcode":"200909", "average":"B-" }
		],
		"ANTH323":[
			{ "credits":"3", "year":"2009", "term":"Fall", "termcode":"200909", "average":"A-" }
		],
		"ANTH339":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ANTH343":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ANTH352":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ARCH528":[
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
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ARTH209":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"ARTH215":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ATOC181":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B+" }
		],
		"ATOC184":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ATOC185":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ATOC214":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BASC201":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"BIOC212":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"BIOC220":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOC311":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOC312":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOC320":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOL111":[
			{ "credits":"3", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B" },
			{ "credits":"3", "year":"2007", "term":"Fall", "termcode":"200709", "average":"B" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOL112":[
			{ "credits":"3", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B" },
			{ "credits":"3", "year":"2008", "term":"Winter", "termcode":"200801", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOL115":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"BIOL200":[
			{ "credits":"3", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL201":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOL202":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"BIOL205":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"BIOL206":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOL210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL215":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOL300":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL301":[
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"BIOL306":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"BIOL307":[
			{ "credits":"3", "year":"2008", "term":"Winter", "termcode":"200801", "average":"B+" }
		],
		"BIOL308":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL309":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"BIOL310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"BIOL314":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL320":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"BIOL370":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BIOL373":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"BIOL427":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"BREE322":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"BREE327":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"BUSA100":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BUSA250":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"BUSA356":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"BUSA391":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"BUSA433":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"BUSA465":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CANS200":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" }
		],
		"CANS303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CATH200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
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
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CEAP250":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEE200":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" }
		],
		"CHEE204":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CHEE220":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CHEE231":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"CHEE291":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"CHEE310":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"CHEE314":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" }
		],
		"CHEE315":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C" }
		],
		"CHEE351":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"CHEE370":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" }
		],
		"CHEE380":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"CHEE390":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
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
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"CHEE484":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" }
		],
		"CHEE491":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
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
			{ "credits":"4", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B+" },
			{ "credits":"4", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEM120":[
			{ "credits":"4", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B" },
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEM122":[
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEM181":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEM183":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEM203":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEM204":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"CHEM212":[
			{ "credits":"4", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"CHEM214":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CHEM222":[
			{ "credits":"4", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CHEM223":[
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" }
		],
		"CHEM233":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEM234":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CHEM281":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CHEM287":[
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"CHEM297":[
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"CHEM302":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"CHEM362":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"CHEM367":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"CHEM381":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CHEM502":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"CIVE202":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CIVE205":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" }
		],
		"CIVE206":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"CIVE207":[
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"CIVE281":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"CIVE290":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"CIVE433":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"CLAS203":[
			{ "credits":"3", "year":"2005", "term":"Fall", "termcode":"200509", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"CLAS208":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"CLAS210D2":[
			{ "credits":"3", "year":"2005", "term":"Winter", "termcode":"200501", "average":"B" }
		],
		"CLAS210":[
			{ "credits":"3", "year":"2005", "term":"Winter", "termcode":"200501", "average":"B" }
		],
		"CLAS210D1":[
			{ "credits":"3", "year":"2005", "term":"Winter", "termcode":"200501", "average":"B" }
		],
		"CLAS220":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"CLAS240":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"CLAS310":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"CLAS380":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP189":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"COMP202":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"COMP206":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"COMP208":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"COMP230":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"COMP250":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"COMP251":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP252":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP273":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP302":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP303":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"COMP308":[
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP310":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"COMP321":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP322":[
			{ "credits":"1", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"COMP330":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"COMP360":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP361D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"COMP361":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"COMP361D1":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"COMP364":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"COMP421":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMP424":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"COMP462":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
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
		"COMS200":[
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" }
		],
		"COMS210":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"COMS230":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"COMS310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"COMS350":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EAST211":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EAST212":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
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
		"EAST303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"EAST330D2":[
			{ "credits":"4.5", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EAST330":[
			{ "credits":"4.5", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"EAST330D1":[
			{ "credits":"4.5", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"ECON205":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECON208":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"ECON209":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" }
		],
		"ECON219":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON223":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON225":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECON227D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON227":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON227D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON230D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECON230":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECON230D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECON250D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"ECON250":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"ECON250D1":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"ECON257D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"ECON257":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"ECON257D1":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"ECON295":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECON304":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON308":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECON313":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON314":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON316":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"ECON319":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECON330D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON330":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON330D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON334":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON335":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ECON336":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ECON337":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ECON338":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"ECON352D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON352":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON352D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECON406":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECON468":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" }
		],
		"ECON546":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE200":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE202":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ECSE205":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECSE206":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECSE210":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"C" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" }
		],
		"ECSE211":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ECSE221":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ECSE222":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ECSE223":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE291":[
			{ "credits":"2", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ECSE303":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"ECSE304":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE305":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE306":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECSE321":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"ECSE322":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE323":[
			{ "credits":"5", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE330":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"ECSE334":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ECSE351":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE352":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ECSE361":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ECSE420":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"ECSE421":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE427":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ECSE428":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"ECSE434":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ECSE443":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"EDEC203":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" }
		],
		"EDEC247":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" }
		],
		"EDEC248":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A" }
		],
		"EDEC260":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" }
		],
		"EDEC261":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"EDEC262":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" }
		],
		"EDEM220":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDES350":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDKP206":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EDKP250":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDKP261":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"EDKP292":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EDKP330":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EDPE300":[
			{ "credits":"3", "year":"2013", "term":"Summer", "termcode":"201305", "average":"A" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"EDPE304":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" }
		],
		"EDPI309":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" }
		],
		"EDSL210":[
			{ "credits":"1", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" }
		],
		"EDSL254":[
			{ "credits":"1", "year":"2015", "term":"Summer", "termcode":"201505", "average":"A" }
		],
		"EDSL300":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A" }
		],
		"EDSL304":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"EDSL311":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"EDSL315":[
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"EDSL330":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" }
		],
		"EDSL332":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A" }
		],
		"EDSL334":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"EDSL350":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" }
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
		"EFRL250":[
			{ "credits":"3", "year":"2002", "term":"Fall", "termcode":"200209", "average":"A-" }
		],
		"ENGL202":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ENGL203":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL204":[
			{ "credits":"3", "year":"2004", "term":"Fall", "termcode":"200409", "average":"B" }
		],
		"ENGL215":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL225":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"ENGL228":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"ENGL230":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ENGL275":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"ENGL277":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ENGL280":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENGL297":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"ENGL311":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"ENGL315":[
			{ "credits":"3", "year":"2006", "term":"Winter", "termcode":"200601", "average":"B-" },
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
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"ENVB222":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" }
		],
		"ENVB305":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" }
		],
		"ENVB410":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
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
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ENVR201":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"ENVR202":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ENVR203":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"ENVR301":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EPSC180":[
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EPSC181":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EPSC185":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EPSC201":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"EPSC210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"EPSC221":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"ESYS104":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"FACC100":[
			{ "credits":"1", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"1", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"1", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"1", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"1", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"FACC220":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"FACC300":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" }
		],
		"FACC400":[
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"FDSC200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"FDSC230":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"FDSC251":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"FILM279":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"FINE342":[
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FINE441":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FINE442":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FINE443":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FINE448":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"FINE451":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FINE482":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"FREN444":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL101":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"FRSL102":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL103":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL105":[
			{ "credits":"6", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"6", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"6", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL207D2":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL207":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL207D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL208":[
			{ "credits":"6", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"6", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"FRSL211D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL211":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL211D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL321D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL321":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL321D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL431D2":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL431":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"FRSL431D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"GEOG200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG201":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG202":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG203":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"GEOG205":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"GEOG210":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG216":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"GEOG217":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"GEOG221":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG272":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"GEOG302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"GEOG308":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"GEOG310":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG315":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG316":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GEOG322":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"GEOG325":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"GEOG351":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"GEOG360":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GEOG372":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GERM202D2":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"GERM202D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
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
		"GERM382":[
			{ "credits":"3", "year":"2006", "term":"Winter", "termcode":"200601", "average":"B+" }
		],
		"GSFS200":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GSFS250":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"GSFS300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"GSFS306":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"HISP210D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HISP210":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HISP210D1":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HISP220D2":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HISP220":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HISP220D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HISP225":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HISP226":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"HIST201":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST202":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST203":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST205":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"HIST208":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST211":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST213":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"HIST214":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"HIST215":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST218":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST219":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HIST221":[
			{ "credits":"3", "year":"2005", "term":"Winter", "termcode":"200501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST223":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST236":[
			{ "credits":"3", "year":"2005", "term":"Summer", "termcode":"200505", "average":"B+" }
		],
		"HIST249":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST304":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST306":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST309":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"HIST311":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST315":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"HIST323":[
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
		"HIST338":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"HIST340":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"HIST341":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"HIST347":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"HIST351":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST356":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST360":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"HIST367":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST369":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"HIST370":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST371":[
			{ "credits":"3", "year":"2006", "term":"Winter", "termcode":"200601", "average":"B+" }
		],
		"HIST375":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST380":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"HIST384":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"HIST390":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HIST392":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"HIST393":[
			{ "credits":"3", "year":"2005", "term":"Fall", "termcode":"200509", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"HIST394":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"HIST435":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"HIST481":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"INDG200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"INDR294":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"INSY442":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"INSY444":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"INSY455":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"INTD200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"INTD397":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"INTG201":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"INTG202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
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
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
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
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ISLA521":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"ISLA521D1":[
			{ "credits":"4.5", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
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
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ITAL205":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ITAL205D1":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ITAL206":[
			{ "credits":"6", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"ITAL355":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"JWST240":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"JWST303":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"LING200":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"LING201":[
			{ "credits":"3", "year":"2008", "term":"Fall", "termcode":"200809", "average":"B+" },
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"LING260":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
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
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"LING331":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"LING350":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"LING360":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"LING371":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"LING390":[
			{ "credits":"3", "year":"2008", "term":"Fall", "termcode":"200809", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"LING425":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"LING521":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"LING530":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"LLCU201":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"LLCU212":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"LSCI202":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"LSCI204":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"LSCI211":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"LSCI230":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MATH112":[
			{ "credits":"3", "year":"2009", "term":"Fall", "termcode":"200909", "average":"C+" },
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B-" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" }
		],
		"MATH122":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MATH123":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH133":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"MATH139":[
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MATH140":[
			{ "credits":"3", "year":"2004", "term":"Fall", "termcode":"200409", "average":"B-" },
			{ "credits":"3", "year":"2007", "term":"Fall", "termcode":"200709", "average":"B-" },
			{ "credits":"3", "year":"2008", "term":"Winter", "termcode":"200801", "average":"C+" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH141":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B-" },
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
			{ "credits":"4", "year":"2017", "term":"Summer", "termcode":"201705", "average":"C+" }
		],
		"MATH150":[
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MATH151":[
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH180":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"MATH203":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MATH204":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH222":[
			{ "credits":"3", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"MATH223":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH235":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MATH236":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH240":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH242":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MATH243":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH247":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH248":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MATH249":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH251":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH254":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MATH255":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH262":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH263":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH264":[
			{ "credits":"3", "year":"2014", "term":"Summer", "termcode":"201405", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"MATH270":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MATH271":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH314":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH315":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"C+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH318":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MATH319":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"MATH323":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"C" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"D" }
		],
		"MATH324":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MATH325":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH326":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MATH329":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH338":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"MATH340":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MATH356":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MATH357":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH363":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MATH381":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"MATH447":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MATH454":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MATH456":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MATH475":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MECH201":[
			{ "credits":"2", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A" },
			{ "credits":"2", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"MECH210":[
			{ "credits":"2", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"2", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MECH220":[
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"C" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"C+" },
			{ "credits":"4", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MECH240":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MECH262":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MECH289":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH290":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH292":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"MECH309":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"C+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"C+" }
		],
		"MECH314":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MECH315":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MECH321":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH331":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MECH341":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MECH346":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MECH360":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MECH383":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MECH393":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MECH430":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGCR211":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MGCR222":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MGCR271":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"C+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MGCR293":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MGCR331":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MGCR341":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGCR352":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGCR360":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGCR382":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGCR423":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MGCR472":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGPO435":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGPO460":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MGPO469":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGPO470":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MGSC372":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MGSC373":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MIME209":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"MIME212":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MIME250":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MIME260":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MIME261":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MIME262":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"MIME341":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MIMM211":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MIMM212":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"MIMM214":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MIMM314":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MIMM323":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"MIMM324":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"MIMM384":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"MIMM385":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MRKT354":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"MRKT357":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MRKT365":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MRKT438":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
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
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"MUAR211":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"A-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MUAR392":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MUAR393":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"MUEN593":[
			{ "credits":"2", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"2", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" },
			{ "credits":"2", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"MUHL186":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"MUPD200":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MUPD201":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MUSP170":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"MUSP171":[
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"MUSR200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" }
		],
		"NRSC333":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"NSCI200":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"NSCI201":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"NSCI300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
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
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"NUR1220":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"NUR1221":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"NUR1222":[
			{ "credits":"1", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"NUR1223":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"NUR1234":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"NUR1235":[
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"NUR1422":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"NUTR207":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"NUTR214":[
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"NUTR301":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		],
		"NUTR322":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"NUTR341":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"PARA410":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PARA438":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PATH300":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHAR200":[
			{ "credits":"1", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" }
		],
		"PHAR201":[
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" }
		],
		"PHAR300":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
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
			{ "credits":"3", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHGY210":[
			{ "credits":"3", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"PHGY212":[
			{ "credits":"1", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B" }
		],
		"PHGY212D2":[
			{ "credits":"1", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B" }
		],
		"PHGY212D1":[
			{ "credits":"1", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B" }
		],
		"PHGY213":[
			{ "credits":"1", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"1", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"1", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"1", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHGY311":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHGY312":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHGY313":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHGY314":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHGY518":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHIL200":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHIL201":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"PHIL210":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"C" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B-" }
		],
		"PHIL221":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A" }
		],
		"PHIL230":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"PHIL237":[
			{ "credits":"3", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"PHIL240":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHIL242":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHIL306":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHIL334":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"PHIL341":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" }
		],
		"PHIL343":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" }
		],
		"PHIL345":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"PHIL348":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" }
		],
		"PHIL355":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHIL375":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"PHIL415":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHIL436":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHTH245":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHYS101":[
			{ "credits":"4", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B+" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS102":[
			{ "credits":"4", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B-" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHYS131":[
			{ "credits":"4", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B-" },
			{ "credits":"4", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"4", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"4", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHYS142":[
			{ "credits":"4", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B" },
			{ "credits":"4", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"4", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"4", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"4", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHYS180":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHYS181":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"PHYS182":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHYS183":[
			{ "credits":"3", "year":"2012", "term":"Winter", "termcode":"201201", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHYS214":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS224":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS230":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" }
		],
		"PHYS232":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHYS241":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHYS251":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS253":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PHYS257":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS258":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHYS260":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS271":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHYS333":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHYS340":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHYS350":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PHYS351":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHYS357":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PHYS359":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PHYS362":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PHYS457":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PHYS551":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"PLNT358":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"POLI200":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI211":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B-" }
		],
		"POLI212":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI221":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI222":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI227":[
			{ "credits":"3", "year":"2005", "term":"Winter", "termcode":"200501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI231":[
			{ "credits":"3", "year":"2005", "term":"Fall", "termcode":"200509", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"POLI232":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"POLI243":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI244":[
			{ "credits":"3", "year":"2011", "term":"Fall", "termcode":"201109", "average":"B+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI311":[
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"POLI318":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI319":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"POLI321":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"POLI324":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI325":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"POLI327":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI328":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" }
		],
		"POLI333":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" }
		],
		"POLI340":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI345":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI347":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" }
		],
		"POLI359":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"POLI360":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI364":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI366":[
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"POLI372":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POLI380":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B-" }
		],
		"POLI425":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"POLI449":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"POLI451":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"POTH225":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"POTH250":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PPHS511":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PSYC100":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B" }
		],
		"PSYC204":[
			{ "credits":"3", "year":"2003", "term":"Fall", "termcode":"200309", "average":"B-" },
			{ "credits":"3", "year":"2006", "term":"Fall", "termcode":"200609", "average":"B-" },
			{ "credits":"3", "year":"2007", "term":"Winter", "termcode":"200701", "average":"B" },
			{ "credits":"3", "year":"2007", "term":"Fall", "termcode":"200709", "average":"B+" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Summer", "termcode":"201605", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PSYC211":[
			{ "credits":"3", "year":"2002", "term":"Fall", "termcode":"200209", "average":"B" },
			{ "credits":"3", "year":"2007", "term":"Winter", "termcode":"200701", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PSYC212":[
			{ "credits":"3", "year":"2006", "term":"Fall", "termcode":"200609", "average":"B+" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PSYC213":[
			{ "credits":"3", "year":"2005", "term":"Fall", "termcode":"200509", "average":"B+" },
			{ "credits":"3", "year":"2007", "term":"Winter", "termcode":"200701", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PSYC215":[
			{ "credits":"3", "year":"2004", "term":"Fall", "termcode":"200409", "average":"B" },
			{ "credits":"3", "year":"2005", "term":"Fall", "termcode":"200509", "average":"B" },
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"C+" },
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B-" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC302":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PSYC304":[
			{ "credits":"3", "year":"2006", "term":"Fall", "termcode":"200609", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"PSYC305":[
			{ "credits":"3", "year":"2009", "term":"Winter", "termcode":"200901", "average":"B" },
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Summer", "termcode":"201505", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"A-" }
		],
		"PSYC308":[
			{ "credits":"3", "year":"2007", "term":"Fall", "termcode":"200709", "average":"B-" }
		],
		"PSYC310":[
			{ "credits":"3", "year":"2013", "term":"Winter", "termcode":"201301", "average":"B+" }
		],
		"PSYC311":[
			{ "credits":"3", "year":"2008", "term":"Fall", "termcode":"200809", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"PSYC316":[
			{ "credits":"3", "year":"2006", "term":"Fall", "termcode":"200609", "average":"B+" }
		],
		"PSYC317":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" }
		],
		"PSYC318":[
			{ "credits":"3", "year":"2008", "term":"Winter", "termcode":"200801", "average":"B-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PSYC328":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"PSYC332":[
			{ "credits":"3", "year":"2006", "term":"Winter", "termcode":"200601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PSYC333":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC337":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PSYC338":[
			{ "credits":"3", "year":"2009", "term":"Winter", "termcode":"200901", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC341":[
			{ "credits":"3", "year":"2009", "term":"Winter", "termcode":"200901", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" }
		],
		"PSYC342":[
			{ "credits":"3", "year":"2008", "term":"Winter", "termcode":"200801", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
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
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"PSYC410":[
			{ "credits":"3", "year":"2009", "term":"Fall", "termcode":"200909", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PSYC412":[
			{ "credits":"3", "year":"2007", "term":"Fall", "termcode":"200709", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PSYC413":[
			{ "credits":"3", "year":"2007", "term":"Winter", "termcode":"200701", "average":"B+" }
		],
		"PSYC429":[
			{ "credits":"3", "year":"2009", "term":"Winter", "termcode":"200901", "average":"B+" }
		],
		"PSYC436":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"PSYC471":[
			{ "credits":"3", "year":"2007", "term":"Winter", "termcode":"200701", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"PSYC526":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"PSYC538":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"PSYT199":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"A-" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A" }
		],
		"PSYT301":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"REDM400":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A" }
		],
		"RELG201":[
			{ "credits":"3", "year":"2006", "term":"Fall", "termcode":"200609", "average":"B-" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"RELG202":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"RELG203":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"RELG204":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"RELG207":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"RELG208":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B-" }
		],
		"RELG210":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"RELG252":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"RELG253":[
			{ "credits":"3", "year":"2014", "term":"Winter", "termcode":"201401", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"RELG270":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"RELG271":[
			{ "credits":"3", "year":"2004", "term":"Summer", "termcode":"200405", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"RELG300":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"RELG340":[
			{ "credits":"3", "year":"2012", "term":"Fall", "termcode":"201209", "average":"B" }
		],
		"RELG375":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"RUSS210":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"A" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"A-" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
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
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
		],
		"RUSS224":[
			{ "credits":"3", "year":"2005", "term":"Winter", "termcode":"200501", "average":"A-" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"SOCI210":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"SOCI211":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Summer", "termcode":"201705", "average":"B+" }
		],
		"SOCI213":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"SOCI219":[
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"SOCI225":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"SOCI227":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"A-" }
		],
		"SOCI230":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"A-" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B" }
		],
		"SOCI234":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"SOCI235":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B" }
		],
		"SOCI247":[
			{ "credits":"3", "year":"2013", "term":"Fall", "termcode":"201309", "average":"B" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B" }
		],
		"SOCI250":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"SOCI254":[
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"SOCI270":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" }
		],
		"SOCI310":[
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" },
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"SOCI312":[
			{ "credits":"3", "year":"2016", "term":"Winter", "termcode":"201601", "average":"B+" },
			{ "credits":"3", "year":"2017", "term":"Winter", "termcode":"201701", "average":"B+" }
		],
		"SOCI333":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"SOCI350":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"B+" }
		],
		"SOCI370":[
			{ "credits":"3", "year":"2016", "term":"Fall", "termcode":"201609", "average":"A-" }
		],
		"SOCI377":[
			{ "credits":"3", "year":"2008", "term":"Fall", "termcode":"200809", "average":"B" }
		],
		"SOCI388":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Fall", "termcode":"201509", "average":"B+" }
		],
		"WILD307":[
			{ "credits":"3", "year":"2014", "term":"Fall", "termcode":"201409", "average":"B+" }
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
			{ "credits":"3", "year":"2010", "term":"Winter", "termcode":"201001", "average":"B+" },
			{ "credits":"3", "year":"2015", "term":"Winter", "termcode":"201501", "average":"A-" }
		]
	};
	return classAveragesData;
}