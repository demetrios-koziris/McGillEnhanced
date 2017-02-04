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


function getCSUSdata() {
	let csusData = {
		COMP102: "comp-102-computers-and-computing",
		COMP189: "comp-189-computers-and-society",
		COMP199: "comp-199-excursions-in-computer-science",
		COMP202: "comp-202-foundations-of-programming",
		COMP206: "comp-206-introduction-to-software-systems",
		COMP230: "comp-230-logic-and-computability",
		COMP250: "comp-250-introduction-to-computer-science",
		COMP251: "comp-251-algorithms-and-data-structures",
		COMP252: "comp-252-honours-algorithms-and-data-structures",
		COMP273: "comp-273-introduction-to-computer-systems",
		COMP280: "comp-280-history-and-philosophy-of-computing",
		COMP302: "comp-302-programming-languages-and-paradigms",
		COMP303: "comp-303-software-development",
		COMP307: "comp-307-principles-of-web-development",
		COMP308: "comp-308-computer-systems-lab",
		COMP310: "comp-310-operating-systems",
		COMP321: "comp-321-programming-languages", //typo from CSUS guide ('languages' instead of 'challenges')
		COMP322: "comp-322-introduction-to-c",
		COMP330: "comp-330-theory-of-computation",
		COMP350: "comp-350-numerical-computing",
		COMP360: "comp-360-algorithm-design",
		COMP361: "comp-361-software-engineering-project",
		COMP362: "comp-362-honours-algorithm-design",
		COMP364: "comp-364-computer-tools-of-life-sciences",
		COMP396: "comp-396-undergraduate-research-project",
		COMP400: "comp-400-honours-project-in-computer-science",
		COMP401: "comp-401-project-in-biology-and-computer-science",
		COMP409: "comp-409-concurrent-programming",
		COMP417: "comp-417-introduction-to-robotics-and-intelligent-systems", //typo from CSUS guide (added 'to')
		COMP421: "comp-421-database-systems",
		COMP424: "comp-424-artificial=intelligence", //typo from CSUS guide ('=' instead of '-')
		COMP462: "comp-462-computational-biology-methods",
		COMP499: "comp-499-undergraduate-bioinformatics-seminar",
		COMP512: "comp-512-distributed-systems",
		COMP520: "comp-520-compiler-design",
		COMP521: "comp-521-modern-computer-games",
		COMP522: "comp-522-modeling-and-simulation",
		COMP523: "comp-523-language-based-security",
		COMP524: "comp-524-theoretical-foudnations-of-programming-languages", //typo from CSUS guide ('foudnations' instead of foundations)
		COMP525: "comp-525-formal-verification",
		COMP526: "comp-526-probabilistic-reasoning-and-ai",
		COMP527: "comp-527-logic-and-computation",
		COMP529: "comp-529-software-architecture",
		COMP531: "comp-531-advanced-theory-of-computation",
		COMP533: "comp-533-model-drive-software-development", //typo from CSUS guide ('drive' instead of 'driven')
		COMP535: "comp-535-computer-networks-1",
		COMP540: "comp-540-matrix-computation", //typo from CSUS guide ('computation' instead of 'computations')
		COMP546: "comp-546-computational-perception",
		COMP547: "comp547-cryptography-and-data-security", //typo from CSUS guide ('comp547' instead of 'comp-547')
		COMP552: "comp-552-combinatorial-optimization",
		COMP553: "comp-553-algorithmic-game-theory",
		COMP554: "comp-554-approximation-algorithms",
		COMP557: "comp-557-fundamentals-of-computer-graphics",
		COMP558: "comp-558-fundamentals-of-computer-vision",
		COMP559: "comp-559-fundamentals-of-computer-animation",
		COMP560: "comp-560-graph-algorithms-and-applications",
		COMP561: "comp-561-computational-biology-methods-and-research",
		COMP564: "comp-564-computational-gene-regulation"
	};
	return csusData;
}