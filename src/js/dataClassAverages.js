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
		"AEBI120" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"AEBI210" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"AECH110" : [ 
			{"credits": 4, "term": "201509", "average": "B+"}
		],
		"AECH111" : [ 
			{"credits": 4, "term": "201601", "average": "B-"}
		],
		"AEMA101" : [ 
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"AEMA102" : [ 
			{"credits": 4, "term": "201601", "average": "B"}
		],
		"AEPH112" : [ 
			{"credits": 4, "term": "201509", "average": "B"}
		],
		"AEPH114" : [ 
			{"credits": 4, "term": "201601", "average": "B"}
		],
		"AEPH115" : [ 
			{"credits": 4, "term": "201609", "average": "C+"}
		],
		"AGRI340" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"ANAT214" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"ANAT261" : [ 
			{"credits": 4, "term": "201409", "average": "B+"},
			{"credits": 4, "term": "201609", "average": "B"}
		],
		"ANAT262" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"ANAT315" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ANAT321" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ANAT322" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ANAT381" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"ANAT416" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"ANTH202" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"ANTH204" : [ 
			{"credits": 3, "term": "201101", "average": "B-"}
		],
		"ANTH206" : [ 
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ANTH210" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ANTH212" : [ 
			{"credits": 3, "term": "201101", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ANTH222" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ANTH227" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ANTH301" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ANTH304" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ANTH325" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ANTH352" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ANTH339" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ARCH447" : [ 
			{"credits": 2, "term": "201609", "average": "A-"}
		],
		"ARTH209" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ARTH226" : [ 
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"ARTH305" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ARTH315" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"ARTH337" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"ARTH354" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ATOC181" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ATOC185" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"BASC201" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			// {"credits": 3, "term": "201509", "average": "A"} This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"BIEN200" : [ 
			{"credits": 2, "term": "201609", "average": "A-"}
		],
		"BIEN510" : [ 
			{"credits": 3, "term": "201609", "average": "A"}
		],
		"BIOC212" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"BIOC220" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"BIOC311" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201601", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"BIOC312" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"BIOC320" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"BIOL111" : [ 
			{"credits": 3, "term": "201209", "average": "B+"},
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"BIOL112" : [ 
			{"credits": 3, "term": "201301", "average": "B"},
			{"credits": 3, "term": "201401", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"BIOL115" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"BIOL200" : [ 
			{"credits": 3, "term": "201309", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B"},
			// {"credits": 3, "term": "201509", "average": "B+"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"BIOL201" : [ 
			{"credits": 3, "term": "201401", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			// {"credits": 3, "term": "201501", "average": "B+"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"BIOL202" : [ 
			{"credits": 3, "term": "201401", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			// {"credits": 3, "term": "201501", "average": "B+"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 3, "term": "201601", "average": "B"},
		],
		"BIOL206" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"BIOL215" : [ 
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"BIOL300" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"BIOL301" : [ 
			{"credits": 4, "term": "201501", "average": "A-"},
			{"credits": 4, "term": "201509", "average": "A-"},
			{"credits": 4, "term": "201601", "average": "A-"}
		],
		"BIOL303" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"BIOL306" : [ 
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"BIOL309" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"BIOL320" : [ 
			{"credits": 3, "term": "201501", "average": "A-"}
		],
		"BIOL370" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"BIOL373" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"BIOT505" : [ 
			{"credits": 3, "term": "201509", "average": "A"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"BUSA100" : [ 
			{"credits": 3, "term": "201401", "average": "B"}
		],
		"BUSA250" : [ 
			{"credits": 3, "term": "201401", "average": "B"}
		],
		"CANS200" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"CANS315" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"CCOM206" : [ 
			{"credits": 3, "term": "201109", "average": "A-"},
			{"credits": 3, "term": "201401", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "A-"},
			{"credits": 3, "term": "201505", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CEAP250" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"CHEE200" : [ 
			{"credits": 3, "term": "201209", "average": "C+"},
			{"credits": 3, "term": "201309", "average": "C+"},
			{"credits": 3, "term": "201409", "average": "C+"},
			{"credits": 3, "term": "201509", "average": "C+"},
			{"credits": 3, "term": "201609", "average": "C+"}
		],
		"CHEE204" : [ 
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "C+"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"CHEE220" : [ 
			{"credits": 3, "term": "201401", "average": "C+"},
			{"credits": 3, "term": "201501", "average": "C+"},
			{"credits": 3, "term": "201601", "average": "C+"}
		],
		"CHEE231" : [ 
			{"credits": 3, "term": "201309", "average": "C+"},
			{"credits": 3, "term": "201409", "average": "C+"},
			{"credits": 3, "term": "201509", "average": "C+"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"CHEE291" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 4, "term": "201409", "average": "B"},
			{"credits": 4, "term": "201609", "average": "A-"}
		],
		"CHEE301" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"CHEE310" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"CHEE314" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"CHEE315" : [ 
			{"credits": 3, "term": "201601", "average": "C+"}
		],
		"CHEE351" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"CHEE360" : [ 
			{"credits": 1, "term": "201509", "average": "B+"},
			{"credits": 1, "term": "201609", "average": "B+"}
		],
		"CHEE370" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE380" : [ 
			{"credits": 3, "term": "201409", "average": "B+"}, 
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE390" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"}, 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CHEE400" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE423" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE453" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE474" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE484" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"CHEE541" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"CHEE543" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEE582" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"CHEM110" : [ 
			{"credits": 4, "term": "201309", "average": "B+"},
			{"credits": 4, "term": "201409", "average": "B+"},
			{"credits": 4, "term": "201509", "average": "B+"},
			{"credits": 4, "term": "201609", "average": "B+"}
		],
		"CHEM120" : [ 
			{"credits": 4, "term": "201401", "average": "B+"},
			{"credits": 4, "term": "201501", "average": "B+"},
			{"credits": 4, "term": "201601", "average": "B+"}
		],
		"CHEM181" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"CHEM182" : [ 
			{"credits": 3, "term": "201309", "average": "B+"}
		],
		"CHEM183" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEM203" : [ 
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEM204" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CHEM212" : [ 
			{"credits": 4, "term": "201309", "average": "B+"},
			{"credits": 4, "term": "201409", "average": "B+"},
			{"credits": 4, "term": "201501", "average": "B"},
			{"credits": 4, "term": "201505", "average": "B"},
			{"credits": 4, "term": "201509", "average": "B+"},
			{"credits": 4, "term": "201601", "average": "B+"},
			{"credits": 4, "term": "201609", "average": "B+"}
		],
		"CHEM222" : [ 
			{"credits": 4, "term": "201401", "average": "B"},
			{"credits": 4, "term": "201409", "average": "B"},
			{"credits": 4, "term": "201501", "average": "B+"},
			{"credits": 4, "term": "201509", "average": "B"},
			{"credits": 4, "term": "201601", "average": "B+"},
			{"credits": 4, "term": "201609", "average": "B"}
		],
		"CHEM223" : [ 
			{"credits": 2, "term": "201509", "average": "B-"},
			{"credits": 2, "term": "201609", "average": "C+"}
		],
		"CHEM232" : [ 
			{"credits": 4, "term": "201609", "average": "A-"}
		],
		"CHEM233" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"CHEM234" : [ 
			{"credits": 3, "term": "201401", "average": "C+"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"CHEM267" : [ 
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"CHEM281" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"CHEM287" : [ 
			{"credits": 2, "term": "201509", "average": "B+"}
		],
		"CHEM297" : [ 
			{"credits": 1, "term": "201601", "average": "B"}
		],
		"CHEM302" : [ 
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"CHEM334" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CHEM367" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CHEM381" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CHEM122" : [ 
			{"credits": 1, "term": "201601", "average": "A-"}
		],
		"CIVE202" : [ 
			{"credits": 4, "term": "201401", "average": "B+"},
			{"credits": 4, "term": "201501", "average": "A-"}
		],
		"CIVE205" : [ 
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"CIVE206" : [ 
			{"credits": 3, "term": "201401", "average": "C+"},
			{"credits": 3, "term": "201501", "average": "C+"}
		],
		"CIVE207" : [ 
			{"credits": 4, "term": "201401", "average": "B-"},
			{"credits": 4, "term": "201409", "average": "B"},
			{"credits": 4, "term": "201501", "average": "B"}
		],
		"CIVE208" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CIVE210" : [ 
			{"credits": 2, "term": "201405", "average": "B+"},
			{"credits": 2, "term": "201505", "average": "B+"}
		],
		"CIVE225" : [ 
			{"credits": 4, "term": "201501", "average": "B"}
		],
		"CIVE281" : [ 
			{"credits": 3, "term": "200709", "average": "B"},
			{"credits": 3, "term": "201209", "average": "B-"},
			{"credits": 3, "term": "201309", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"CIVE290" : [ 
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"CIVE302" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"CIVE311" : [ 
			{"credits": 4, "term": "201409", "average": "C+"},
			{"credits": 4, "term": "201509", "average": "C+"}
		],
		"CIVE317" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"CIVE318" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"CIVE319" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"CIVE320" : [ 
			{"credits": 4, "term": "201609", "average": "A-"}
		],
		"CIVE323" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CIVE327" : [ 
			{"credits": 4, "term": "201501", "average": "B+"}
		],
		"CIVE446" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"CIVE527" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CLAS200" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CLAS203" : [ 
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201605", "average": "A-"}
		],
		"CLAS210" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"CLAS240" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"CMSC101" : [ 
			{"credits": 3, "term": "201601", "average": "D"}
		],
		"COMP189" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"COMP202" : [ 
			{"credits": 3, "term": "200709", "average": "B"},
			{"credits": 3, "term": "201109", "average": "B+"},
			{"credits": 3, "term": "201301", "average": "B+"},
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"COMP206" : [ 
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"COMP208" : [ 
			{"credits": 3, "term": "201301", "average": "B+"},
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"COMP230" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"COMP250" : [ 
			{"credits": 3, "term": "201201", "average": "B"},
			{"credits": 3, "term": "201401", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"COMP251" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"COMP273" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"COMP302" : [ 
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"COMP303" : [ 
			{"credits": 3, "term": "201601", "average": "C+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"COMP307" : [ 
			{"credits": 2, "term": "201609", "average": "A-"}
		],
		"COMP310" : [ 
			{"credits": 3, "term": "201509", "average": "B"}, 
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"COMP322" : [ 
			{"credits": 1, "term": "201601", "average": "B+"}
		],
		"COMP330" : [ 
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"COMP350" : [ 
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"COMP360" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"COMP364" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"COMP421" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"COMP424" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"COMP533" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"COMP557" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"COMP561" : [ 
			{"credits": 4, "term": "201509", "average": "A-"}
		],
		"EAST211" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"EAST212" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			// {"credits": 3, "term": "201509", "average": "A-"} This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
		],
		"ECON205" : [ 
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"ECON208" : [ 
			{"credits": 3, "term": "201109", "average": "B-"},
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201505", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"ECON209" : [ 
			{"credits": 3, "term": "201201", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201505", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201605", "average": "B-"}
		],
		"ECON219" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ECON225" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"ECON295" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"ECON308" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ECON310" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ECON313" : [ 
			{"credits": 3, "term": "201401", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"}
			// {"credits": 3, "term": "201509", "average": "B+"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
		],
		"ECON314" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON319" : [ 
			{"credits": 3, "term": "201209", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ECON336" : [ 
			{"credits": 3, "term": "201309", "average": "B"}
		],
		"ECON347" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"ECON420" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ECON447" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON468" : [ 
			{"credits": 3, "term": "201609", "average": "C+"}
		],
		"ECON227" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON227D1" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"ECON227D2" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON230" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"ECON230D1" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"ECON230D2" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"ECON250" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON250D1" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
		],
		"ECON250D2" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON257" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON257D1" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"ECON257D2" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ECON330" : [ 
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ECON330D1" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"ECON330D2" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ECSE200" : [ 
			{"credits": 3, "term": "200709", "average": "B"},
			{"credits": 3, "term": "201209", "average": "C+"},
			{"credits": 3, "term": "201301", "average": "B-"}, 
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ECSE205" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ECSE210" : [ 
			{"credits": 3, "term": "200801", "average": "B-"},
			{"credits": 3, "term": "201209", "average": "B-"},
			{"credits": 3, "term": "201309", "average": "C+"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "C+"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"ECSE211" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ECSE221" : [ 
			{"credits": 3, "term": "200801", "average": "B-"},
			{"credits": 3, "term": "201201", "average": "B"},
			{"credits": 3, "term": "201209", "average": "B-"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"ECSE291" : [ 
			{"credits": 2, "term": "200801", "average": "B+"},
			{"credits": 2, "term": "201309", "average": "B"}, 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 2, "term": "201609", "average": "B+"}
		],
		"ECSE303" : [ 
			{"credits": 3, "term": "200909", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"ECSE304" : [ 
			{"credits": 3, "term": "201001", "average": "B"}
		],
		"ECSE305" : [ 
			{"credits": 3, "term": "201001", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"ECSE306" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"ECSE321" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"ECSE322" : [ 
			{"credits": 3, "term": "200901", "average": "B"},
			{"credits": 3, "term": "201309", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ECSE323" : [ 
			{"credits": 5, "term": "200901", "average": "A-"},
			{"credits": 5, "term": "201401", "average": "B"}
		],
		"ECSE330" : [ 
			{"credits": 3, "term": "200901", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ECSE334" : [ 
			{"credits": 3, "term": "201001", "average": "C+"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"ECSE351" : [ 
			{"credits": 3, "term": "200809", "average": "B-"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "C+"}
		],
		"ECSE352" : [ 
			{"credits": 3, "term": "200909", "average": "B"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ECSE353" : [ 
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"ECSE361" : [ 
			{"credits": 3, "term": "200909", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ECSE414" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"ECSE420" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"ECSE425" : [ 
			{"credits": 3, "term": "201601", "average": "B-"}
			// {"credits": 3, "term": "201601", "average": "B"} This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
		],
		"ECSE426" : [ 
			{"credits": 3, "term": "201409", "average": "A"},
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"ECSE427" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"ECSE428" : [ 
			{"credits": 3, "term": "201601", "average": "A"}
		],
		"ECSE434" : [ 
			{"credits": 2, "term": "201101", "average": "B+"}
		],
		"ECSE456" : [ 
			{"credits": 3, "term": "201501", "average": "A-"}
		],
		"ECSE457" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "A"}
		],
		"ECSE461" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ECSE543" : [ 
			{"credits": 3, "term": "201009", "average": "A"}
		],
		"EDEC206" : [ 
			{"credits": 3, "term": "200809", "average": "A"}
		],
		"EDEC260" : [ 
			{"credits": 3, "term": "201609", "average": "A"}
		],
		"EDEC262" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"EDPE300" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"EDPI341" : [ 
			{"credits": 3, "term": "201509", "average": "A"}
		],
		"ENGL201" : [ 
			{"credits": 3, "term": "201409", "average": "B+"}
		],
		"ENGL202" : [ 
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ENGL227" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ENGL275" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"ENGL297" : [ 
			{"credits": 3, "term": "201609", "average": "A"}
		],
		"ENGL304" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"ENGL311" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"ENGL320" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ENGL323" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"ENGL414" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ENVB210" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"ENVB222" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"ENVB305" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ENVR200" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ENVR201" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ENVR202" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ENVR203" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"EPSC180" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"EPSC182" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"EPSC185" : [ 
			{"credits": 3, "term": "201309", "average": "B+"}
		],
		"EPSC201" : [ 
			{"credits": 3, "term": "201301", "average": "B+"}
		],
		"EPSC221" : [ 
			{"credits": 3, "term": "201309", "average": "A-"},
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"ESYS104" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"EXMD504" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"FACC100" : [ 
			{"credits": 1, "term": "201109", "average": "B+"},
			{"credits": 1, "term": "201309", "average": "B+"},
			{"credits": 1, "term": "201401", "average": "A"},
			{"credits": 1, "term": "201409", "average": "B+"},
			{"credits": 1, "term": "201501", "average": "A-"},
			{"credits": 1, "term": "201509", "average": "A-"},
			{"credits": 1, "term": "201601", "average": "A-"},
			{"credits": 1, "term": "201609", "average": "A-"}
		],
		"FACC220" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B+"}
		],
		"FACC300" : [ 
			{"credits": 3, "term": "201209", "average": "B"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"FACC400" : [ 
			{"credits": 1, "term": "201501", "average": "A-"},
			{"credits": 1, "term": "201609", "average": "A-"}
		],
		"FINE342" : [ 
			{"credits": 3, "term": "201605", "average": "B+"}
		],
		"FREN251" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"FRSL101" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"FRSL103" : [ 
			{"credits": 3, "term": "201309", "average": "B-"}
		],
		"FRSL105" : [ 
			{"credits": 6, "term": "201605", "average": "B+"}
		],
		"FRSL207" : [ 
			{"credits": 3, "term": "201609", "average": "A-"},
			{"credits": 3, "term": "201701", "average": "A-"}
		],
		"FRSL207D1" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"FRSL207D2" : [ 
			{"credits": 3, "term": "201701", "average": "A-"}
		],
		"FRSL321D1" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"FRSL321D2" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"GEOG200" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG201" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG202" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG203" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"GEOG205" : [ 
			{"credits": 3, "term": "201201", "average": "B"}
		],
		"GEOG216" : [ 
			{"credits": 3, "term": "201009", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"GEOG217" : [ 
			{"credits": 3, "term": "201401", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"GEOG272" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"GEOG301" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"GEOG302" : [ 
			{"credits": 3, "term": "201405", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG303" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"GEOG305" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG306" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"GEOG307" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"GEOG316" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG322" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"GEOG331" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GEOG372" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"GERM202" : [ 
			{"credits": 6, "term": "200905", "average": "A"}
		],
		"GSFS200" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HISP219" : [ 
			{"credits": 6, "term": "201601", "average": "B+"}
		],
		"HISP225" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST202" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "A"}
		],
		"HIST203" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"HIST205" : [ 
			{"credits": 3, "term": "201309", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"HIST211" : [ 
			{"credits": 3, "term": "201109", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST213" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"HIST214" : [ 
			{"credits": 3, "term": "201109", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"HIST215" : [ 
			{"credits": 3, "term": "201201", "average": "B+"},
			{"credits": 3, "term": "201301", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"HIST218" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"HIST219" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"HIST221" : [ 
			{"credits": 3, "term": "201009", "average": "B+"},
			{"credits": 3, "term": "201209", "average": "B+"},
			{"credits": 3, "term": "201401", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"HIST223" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST231" : [ 
			{"credits": 3, "term": "201301", "average": "B-"}
		],
		"HIST249" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST300" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST301" : [ 
			{"credits": 3, "term": "201209", "average": "B"}
		],
		"HIST302" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST311" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
			// {"credits": 3, "term": "201609", "average": "B+"} This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
		],
		"HIST319" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST327" : [ 
			{"credits": 3, "term": "201201", "average": "A-"}
		],
		"HIST329" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"HIST334" : [ 
			{"credits": 3, "term": "201301", "average": "B+"}
		],
		"HIST338" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"HIST346" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"HIST351" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"HIST353" : [ 
			{"credits": 3, "term": "201309", "average": "B+"}
		],
		"HIST360" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"HIST367" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"HIST370" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"HIST384" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"HIST387" : [ 
			{"credits": 3, "term": "201309", "average": "B-"}
		],
		"HIST388" : [ 
			{"credits": 3, "term": "201301", "average": "B"}
		],
		"HIST399" : [ 
			{"credits": 3, "term": "201301", "average": "A-"}
		],
		"HIST436" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"HIST461" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"HIST461D1" : [ 
			{"credits": 3, "term": "201309", "average": "B+"}
		],
		"HIST461D2" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"HIST240" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"HIST315" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"INDG200" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"INDR294" : [ 
			{"credits": 3, "term": "201401", "average": "B"}
		],
		"INSY331" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"INSY333" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"INSY339" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"INSY432" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"INSY437" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"INSY440" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"INSY455" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"INTD200" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"ISLA200" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"ISLA210" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ISLA300" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"ISLA521" : [ 
			{"credits": 4.5, "term": "201109", "average": "A-"},
			{"credits": 4.5, "term": "201201", "average": "A-"},
			{"credits": 4.5, "term": "201509", "average": "A-"},
			{"credits": 4.5, "term": "201601", "average": "A-"}
		],
		"ISLA521D1" : [ 
			{"credits": 4.5, "term": "201109", "average": "A-"},
			{"credits": 4.5, "term": "201509", "average": "A-"}
		],
		"ISLA521D2" : [ 
			{"credits": 4.5, "term": "201201", "average": "A-"},
			{"credits": 4.5, "term": "201601", "average": "A-"}
		],
		"ITAL206" : [ 
			{"credits": 6, "term": "201009", "average": "B"}
		],
		"LING200" : [ 
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"LING201" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"LING350" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"LING355" : [ 
			{"credits": 3, "term": "201509", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"LING371" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"LING455" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MATH122" : [ 
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH123" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"MATH133" : [ 
			{"credits": 3, "term": "201109", "average": "B-"},
			{"credits": 3, "term": "201301", "average": "B"},
			{"credits": 3, "term": "201309", "average": "C+"},
			{"credits": 3, "term": "201401", "average": "C+"},
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201505", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201605", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MATH139" : [ 
			{"credits": 4, "term": "201209", "average": "B-"},
			{"credits": 4, "term": "201609", "average": "B-"}
		],
		"MATH140" : [ 
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH141" : [ 
			{"credits": 4, "term": "201209", "average": "B-"},
			{"credits": 4, "term": "201301", "average": "B-"},
			{"credits": 4, "term": "201401", "average": "B"},
			{"credits": 4, "term": "201409", "average": "B"},
			{"credits": 4, "term": "201501", "average": "B+"},
			{"credits": 4, "term": "201509", "average": "B"},
			{"credits": 4, "term": "201601", "average": "B-"},
			// {"credits": 4, "term": "201601", "average": "B"} This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 4, "term": "201609", "average": "B"}
		],
		"MATH150" : [ 
			{"credits": 4, "term": "201309", "average": "B-"}
		],
		"MATH151" : [ 
			{"credits": 4, "term": "201401", "average": "B-"}
		],
		"MATH203" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MATH204" : [ 
			{"credits": 3, "term": "201401", "average": "B+"}
		],
		"MATH222" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "C+"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201505", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH223" : [ 
			{"credits": 3, "term": "201401", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH235" : [ 
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH240" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MATH242" : [ 
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MATH243" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MATH247" : [ 
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"MATH248" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MATH249" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"MATH251" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MATH254" : [ 
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH262" : [ 
			{"credits": 3, "term": "200709", "average": "C+"},
			{"credits": 3, "term": "201205", "average": "B-"},
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MATH263" : [ 
			{"credits": 3, "term": "201205", "average": "A-"},
			{"credits": 3, "term": "201309", "average": "C+"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "C+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MATH264" : [ 
			{"credits": 3, "term": "200801", "average": "B+"},
			{"credits": 3, "term": "201209", "average": "B"},
			{"credits": 3, "term": "201301", "average": "B-"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201605", "average": "C+"}
		],
		"MATH270" : [ 
			{"credits": 3, "term": "201209", "average": "B-"},
			{"credits": 3, "term": "201301", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"MATH271" : [ 
			{"credits": 3, "term": "200809", "average": "B-"},
			{"credits": 3, "term": "201409", "average": "B-"}
		],
		"MATH314" : [ 
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"MATH315" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"MATH317" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MATH318" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MATH323" : [ 
			{"credits": 3, "term": "201501", "average": "C+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201605", "average": "C"}
		],
		"MATH324" : [ 
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"MATH325" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"MATH338" : [ 
			{"credits": 3, "term": "201109", "average": "B+"},
			{"credits": 3, "term": "201209", "average": "A-"}
		],
		"MATH381" : [ 
			{"credits": 3, "term": "200809", "average": "A-"},
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"MATH456" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MATH363" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"MECH201" : [ 
			{"credits": 2, "term": "201309", "average": "A"}
		],
		"MECH210" : [ 
			{"credits": 2, "term": "201309", "average": "A-"},
			{"credits": 2, "term": "201609", "average": "B"}
		],
		"MECH220" : [ 
			{"credits": 4, "term": "201401", "average": "C+"}
		],
		"MECH240" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"MECH261" : [ 
			{"credits": 2, "term": "201409", "average": "A-"},
			{"credits": 2, "term": "201601", "average": "B-"}
		],
		"MECH262" : [ 
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MECH289" : [ 
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"MECH290" : [ 
			{"credits": 3, "term": "201401", "average": "A-"}
		],
		"MECH292" : [ 
			{"credits": 3, "term": "201409", "average": "A"}
		],
		"MECH309" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"MECH314" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"MECH315" : [ 
			{"credits": 4, "term": "201509", "average": "B+"}
		],
		"MECH321" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"MECH331" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"MECH341" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"MECH346" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"MECH360" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"MECH362" : [ 
			{"credits": 2, "term": "201709", "average": "A"}
		],
		"MECH393" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"MECH412" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"MECH430" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"MECH533" : [ 
			{"credits": 3, "term": "201909", "average": "B+"}
		],
		"MECH535" : [ 
			{"credits": 3, "term": "202009", "average": "B+"}
		],
		"MGCR211" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MGCR222" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B"}
		],
		"MGCR271" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201505", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B+"}
		],
		"MGCR273" : [ 
			{"credits": 3, "term": "201709", "average": "D"}
		],
		"MGCR293" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MGCR331" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"},
			{"credits": 3, "term": "201709", "average": "B+"}
		],
		"MGCR341" : [ 
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201605", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MGCR352" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201709", "average": "B+"}
		],
		"MGCR360" : [ 
			{"credits": 3, "term": "201605", "average": "B"}
		],
		"MGCR382" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MGCR423" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B"}
		],
		"MGCR472" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"MGPO438" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MGPO440" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MGPO460" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MIME209" : [ 
			{"credits": 3, "term": "201501", "average": "C+"}
		],
		"MIME212" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"MIME221" : [ 
			{"credits": 2, "term": "200909", "average": "A-"}
		],
		"MIME250" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MIME260" : [ 
			{"credits": 3, "term": "201409", "average": "B"}
		],
		"MIME261" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MIME262" : [ 
			{"credits": 3, "term": "200801", "average": "B+"},
			{"credits": 3, "term": "201301", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MIME310" : [ 
			{"credits": 3, "term": "201001", "average": "B-"}
		],
		"MIME311" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MIME317" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"MIME341" : [ 
			{"credits": 3, "term": "201501", "average": "B-"}
		],
		"MIME345" : [ 
			{"credits": 3, "term": "201505", "average": "B+"}
		],
		"MIME350" : [ 
			{"credits": 3, "term": "201505", "average": "B-"}
		],
		"MIME352" : [ 
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"MIME356" : [ 
			{"credits": 4, "term": "201509", "average": "B+"}
		],
		"MIME360" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"MIME362" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"MIME465" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MIME467" : [ 
			{"credits": 3, "term": "201605", "average": "B"}
		],
		"MIMM211" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"MIMM212" : [ 
			{"credits": 3, "term": "201309", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "A"},
			{"credits": 3, "term": "201609", "average": "A"}
		],
		"MIMM214" : [ 
			{"credits": 3, "term": "201401", "average": "A-"},
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"MIMM314" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MIMM323" : [ 
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"MIMM324" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"MIMM384" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"MIMM385" : [ 
			{"credits": 3, "term": "201501", "average": "A"}
		],
		"MIMM413" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"MIMM414" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"MIMM465" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"MIMM466" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"MUAR201" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "A-"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"MUAR211" : [ 
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201501", "average": "A-"},
			{"credits": 3, "term": "201605", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "A-"}
			// {"credits": 3, "term": "201609", "average": "A"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
		],
		"NSCI200" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"NSCI201" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"NSCI300" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PATH300" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"PHAR300" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"PHAR301" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PHAR303" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PHAR503" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PHAR505" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PHAR562" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PHGY209" : [ 
			{"credits": 3, "term": "200809", "average": "B"},
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PHGY210" : [ 
			{"credits": 3, "term": "201401", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"PHGY212" : [ 
			{"credits": 1, "term": "201409", "average": "B"},
			{"credits": 1, "term": "201509", "average": "B+"}
		],
		"PHGY213" : [ 
			{"credits": 1, "term": "201501", "average": "B+"},
			{"credits": 1, "term": "201601", "average": "B"}
		],
		"PHGY311" : [ 
			{"credits": 3, "term": "201009", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"PHGY312" : [ 
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"PHGY313" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PHIL200" : [ 
			{"credits": 3, "term": "201009", "average": "B"},
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PHIL210" : [ 
			{"credits": 3, "term": "201409", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"PHIL221" : [ 
			{"credits": 3, "term": "201601", "average": "A"}
		],
		"PHIL230" : [ 
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B-"}
		],
		"PHIL237" : [ 
			{"credits": 3, "term": "201401", "average": "B-"}
		],
		"PHIL242" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"PHIL306" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"PHIL310" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"PHIL343" : [ 
			{"credits": 3, "term": "200909", "average": "B"}
		],
		"PHIL367" : [ 
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"PHIL375" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"PHIL415" : [ 
			{"credits": 3, "term": "201601", "average": "A-"}
		],
		"PHIL474" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PHTH245" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PHYS101" : [ 
			{"credits": 4, "term": "201409", "average": "B+"},
			{"credits": 4, "term": "201509", "average": "B+"},
			{"credits": 4, "term": "201609", "average": "B+"}
		],
		"PHYS102" : [ 
			{"credits": 4, "term": "201501", "average": "B+"},
			{"credits": 4, "term": "201609", "average": "B+"}
		],
		"PHYS131" : [ 
			{"credits": 4, "term": "201209", "average": "B-"},
			{"credits": 4, "term": "201309", "average": "B"},
			// {"credits": 4, "term": "201309", "average": "B+"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 4, "term": "201409", "average": "B"},
			{"credits": 4, "term": "201509", "average": "B"}
		],
		"PHYS142" : [ 
			{"credits": 4, "term": "201301", "average": "B"},
			{"credits": 4, "term": "201401", "average": "B-"},
			{"credits": 4, "term": "201501", "average": "B+"},
			{"credits": 4, "term": "201601", "average": "B+"}
		],
		"PHYS180" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PHYS183" : [ 
			{"credits": 3, "term": "201401", "average": "B+"},
			{"credits": 3, "term": "201501", "average": "A-"}
		],
		"PHYS214" : [ 
			{"credits": 3, "term": "201309", "average": "B+"}
		],
		"PHYS224" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PHYS230" : [ 
			{"credits": 3, "term": "201509", "average": "B-"}
		],
		"PHYS232" : [ 
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"PHYS241" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"PHYS251" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PHYS253" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"PHYS257" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PHYS258" : [ 
			{"credits": 3, "term": "201501", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B-"}
		],
		"PHYS260" : [ 
			{"credits": 3, "term": "201409", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PHYS271" : [ 
			{"credits": 3, "term": "200901", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"PHYS328" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PHYS340" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"POLI210" : [ 
			{"credits": 3, "term": "201601", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"POLI212" : [ 
			{"credits": 3, "term": "201201", "average": "B+"},
			{"credits": 3, "term": "201509", "average": "B"}
			// {"credits": 3, "term": "201509", "average": "A-"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
		],
		"POLI221" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B-"},
			// {"credits": 3, "term": "201509", "average": "B+"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"POLI222" : [ 
			{"credits": 3, "term": "201301", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"POLI226" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"POLI227" : [ 
			{"credits": 3, "term": "201101", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"POLI231" : [ 
			{"credits": 3, "term": "201301", "average": "B"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"POLI232" : [ 
			{"credits": 3, "term": "201209", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"POLI243" : [ 
			{"credits": 3, "term": "201101", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"POLI244" : [ 
			{"credits": 3, "term": "201109", "average": "B+"},
			{"credits": 3, "term": "201209", "average": "B"},
			{"credits": 3, "term": "201309", "average": "B"},
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B+"},
			// {"credits": 3, "term": "201509", "average": "A-"}, This is a duplicate, don"t know which is correct so defaulting to the lower one (Maybe the "average"s are from different sections?)
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"POLI311" : [ 
			{"credits": 3, "term": "201209", "average": "B"}
		],
		"POLI319" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"POLI321" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"POLI331" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"POLI340" : [ 
			{"credits": 3, "term": "201409", "average": "B"}
		],
		"POLI345" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"POLI346" : [ 
			{"credits": 3, "term": "201109", "average": "B"}
		],
		"POLI354" : [ 
			{"credits": 3, "term": "201209", "average": "B+"}
		],
		"POLI359" : [ 
			{"credits": 3, "term": "201301", "average": "B+"}
		],
		"POLI366" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"POLI412" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"POLI440" : [ 
			{"credits": 3, "term": "201201", "average": "B+"}
		],
		"POLI441" : [ 
			{"credits": 3, "term": "201209", "average": "B"}
		],
		"POLI445" : [ 
			{"credits": 3, "term": "201309", "average": "B+"}
		],
		"POLI450" : [ 
			{"credits": 3, "term": "201301", "average": "B+"}
		],
		"POLI451" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"POLI522" : [ 
			{"credits": 3, "term": "201309", "average": "A"}
		],
		"POLI200" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC100" : [ 
			{"credits": 3, "term": "201309", "average": "B+"},
			{"credits": 3, "term": "201505", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"PSYC204" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B-"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC211" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"PSYC212" : [ 
			{"credits": 3, "term": "201501", "average": "B-"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"PSYC213" : [ 
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"PSYC215" : [ 
			{"credits": 3, "term": "201409", "average": "B-"},
			{"credits": 3, "term": "201501", "average": "B"},
			{"credits": 3, "term": "201509", "average": "B"},
			{"credits": 3, "term": "201601", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"PSYC302" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC304" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC305" : [ 
			{"credits": 3, "term": "201501", "average": "A-"},
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201601", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B+"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC311" : [ 
			{"credits": 3, "term": "201509", "average": "B+"},
			{"credits": 3, "term": "201605", "average": "B+"}
		],
		"PSYC315" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC317" : [ 
			{"credits": 3, "term": "201509", "average": "B"}
		],
		"PSYC318" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PSYC328" : [ 
			{"credits": 3, "term": "201609", "average": "A-"}
		],
		"PSYC332" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"PSYC333" : [ 
			{"credits": 3, "term": "201501", "average": "B"}
		],
		"PSYC337" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"PSYC403" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC406" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYC412" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"PSYC471" : [ 
			{"credits": 3, "term": "201509", "average": "B+"}
		],
		"PSYC532" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"PSYT199" : [ 
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"PSYT301" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"RELG201" : [ 
			{"credits": 3, "term": "201409", "average": "B+"}
		],
		"RELG203" : [ 
			{"credits": 3, "term": "201101", "average": "A-"},
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"RELG207" : [ 
			{"credits": 3, "term": "201409", "average": "A-"}
		],
		"RELG271" : [ 
			{"credits": 3, "term": "201601", "average": "B+"}
		],
		"RUSS218" : [ 
			{"credits": 3, "term": "201609", "average": "B"}
		],
		"SOCI213" : [ 
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"SOCI230" : [ 
			{"credits": 3, "term": "201501", "average": "B+"}
		],
		"SOCI235" : [ 
			{"credits": 3, "term": "201409", "average": "B"},
			{"credits": 3, "term": "201609", "average": "B+"}
		],
		"SOCI247" : [ 
			{"credits": 3, "term": "201409", "average": "B"}
		],
		"SOCI250" : [ 
			{"credits": 3, "term": "201601", "average": "B"}
		],
		"SOCI254" : [ 
			{"credits": 3, "term": "201509", "average": "A-"}
		],
		"SOCI333" : [ 
			{"credits": 3, "term": "201409", "average": "B+"}
		],
		"SOCI461" : [ 
			{"credits": 3, "term": "201501", "average": "A"}
		]
	};
	return classAveragesData;
}