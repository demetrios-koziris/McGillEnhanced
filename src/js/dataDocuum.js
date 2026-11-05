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


function getWikinotesData() {
	let wikinotesData = {
		ANAT322 : "ANAT_322",
		ANTH335 : "ANTH_335",
		ANTH360 : "ANTH_360",
		BIOL111 : "BIOL_111",
		BIOL112 : "BIOL_112",
		BIOL201 : "BIOL_201",
		BIOL215 : "BIOL_215",
		BIOL310 : "BIOL_310",
		CHEM212 : "CHEM_212",
		CHEM222 : "CHEM_222",
		COMP206 : "COMP_206",
		COMP251 : "COMP_251",
		COMP273 : "COMP_273",
		COMP302 : "COMP_302",
		COMP303 : "COMP_303",
		COMP310 : "COMP_310",
		COMP322 : "COMP_322",
		COMP330 : "COMP_330",
		COMP350 : "COMP_350",
		COMP360 : "COMP_360",
		COMP409 : "COMP_409",
		COMP421 : "COMP_421",
		COMP424 : "COMP_424",
		COMP527 : "COMP_527",
		COMP547 : "COMP_547",
		COMP646 : "COMP_646",
		EAST240 : "EAST_240",
		ECON209 : "ECON_209",
		ENGL200 : "ENGL_200",
		GEOG205 : "GEOG_205",
		INTD200 : "INTD_200",
		MATH133 : "MATH_133",
		MATH141 : "MATH_141",
		MATH151 : "MATH_151",
		MATH204 : "MATH_204",
		MATH222 : "MATH_222",
		MATH223 : "MATH_223",
		MATH235 : "MATH_235",
		MATH236 : "MATH_236",
		MATH240 : "MATH_240",
		MATH242 : "MATH_242",
		MATH247 : "MATH_247",
		MATH255 : "MATH_255",
		MATH314 : "MATH_314",
		MATH315 : "MATH_315",
		MATH317 : "MATH_317",
		MATH318 : "MATH_318",
		MATH323 : "MATH_323",
		MATH324 : "MATH_324",
		MATH340 : "MATH_340",
		MATH407 : "MATH_407",
		NEUR310 : "NEUR_310",
		PHGY210 : "PHGY_210",
		PHYS232 : "PHYS_232",
		POLI243 : "POLI_243",
		PSYC100 : "PSYC_100",
		PSYC340 : "PSYC_340"
	};
	return wikinotesData;
}
