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
		"ACCT354": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26005" }
		],
		"ACCT361": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26007" }
		],
		"ACCT362": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22460" }
		],
		"ACCT453": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26011" }
		],
		"ACCT463": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22463" }
		],
		"ACCT475": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22464" },
			{ "year": 2020, "month": 1, "section": "002", "id": "26013" }
		],
		"AEBI120": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20891" }
		],
		"AEBI212": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22153" }
		],
		"AEMA102": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21994" }
		],
		"AEMA305": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27845" }
		],
		"AEPH114": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21999" }
		],
		"AERO410": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22631" }
		],
		"AGRI493": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24515" }
		],
		"ANAT316": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21987" }
		],
		"ANAT322": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22122" }
		],
		"ANAT542": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28607" }
		],
		"ANSC234": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22000" }
		],
		"ANSC312": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22001" }
		],
		"ANSC350": [
			{ "year": 2021, "month": 1, "section": "001", "id": "40247" }
		],
		"ANSC400": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27786" }
		],
		"ANSC424": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22002" }
		],
		"ANSC560": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28233" }
		],
		"ANTH207": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22747" }
		],
		"ANTH212": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22467" }
		],
		"ANTH222": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22468" }
		],
		"ANTH343": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22472" }
		],
		"ANTH359": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26021" }
		],
		"ANTH423": [
			{ "year": 2021, "month": 1, "section": "001", "id": "40873" }
		],
		"ARCH240": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28023" }
		],
		"ARCH355": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27776" }
		],
		"ARCH378": [
			{ "year": 2022, "month": 1, "section": "001", "id": "52727" }
		],
		"ARCH451": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28046" }
		],
		"ARCH526": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25850" }
		],
		"ARCH532": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28070" }
		],
		"ARCH551": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22361" }
		],
		"ARCH673": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28690" }
		],
		"ARTH207": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22317" }
		],
		"ARTH305": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22075" }
		],
		"ARTH325": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22419" }
		],
		"ARTH353": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22420" }
		],
		"ARTH354": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22246" }
		],
		"ARTH474": [
			{ "year": 2022, "month": 1, "section": "001", "id": "52403" }
		],
		"ASPL613": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28115" }
		],
		"ATOC100": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24317" }
		],
		"ATOC181": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22748" }
		],
		"ATOC214": [
			{ "year": 2020, "month": 9, "section": "001", "id": "31208" }
		],
		"ATOC219": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28103" }
		],
		"BIEN210": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24314" }
		],
		"BIEN300": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25950" }
		],
		"BIEN330": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24315" }
		],
		"BIEN340": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23693" }
		],
		"BIEN540": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25704" }
		],
		"BIEN560": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25707" }
		],
		"BIEN590": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25168" }
		],
		"BIOC220": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22283" }
		],
		"BIOC312": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21990" }
		],
		"BIOC404": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28584" }
		],
		"BIOC454": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21743" }
		],
		"BIOC604": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28497" }
		],
		"BIOL111": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21218" }
		],
		"BIOL112": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22397" }
		],
		"BIOL219": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21232" }
		],
		"BIOL301": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22410" }
		],
		"BIOL314": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21242" }
		],
		"BIOL320": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25678" }
		],
		"BIOL373": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21245" }
		],
		"BIOL418": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25687" }
		],
		"BIOL532": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25660" }
		],
		"BIOL551": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25682" }
		],
		"BREE301": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22105" }
		],
		"BREE314": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22320" }
		],
		"BREE329": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25267" }
		],
		"BREE341": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27935" }
		],
		"BREE509": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24229" }
		],
		"BREE531": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24453" }
		],
		"BTEC555": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28311" }
		],
		"BUS2365": [
			{ "year": 2019, "month": 9, "section": "003", "id": "21709" }
		],
		"BUSA250": [
			{ "year": 2020, "month": 1, "section": "002", "id": "22475" },
			{ "year": 2020, "month": 1, "section": "005", "id": "22478" },
			{ "year": 2020, "month": 1, "section": "008", "id": "22480" }
		],
		"BUSA364": [
			{ "year": 2020, "month": 1, "section": "051", "id": "26043" }
		],
		"BUSA433": [
			{ "year": 2021, "month": 5, "section": "001", "id": "43069" }
		],
		"CACF210": [
			{ "year": 2020, "month": 1, "section": "781", "id": "26836" }
		],
		"CACF215": [
			{ "year": 2020, "month": 1, "section": "751", "id": "26882" }
		],
		"CACF310": [
			{ "year": 2020, "month": 1, "section": "781", "id": "26878" }
		],
		"CACF340": [
			{ "year": 2020, "month": 1, "section": "761", "id": "26837" }
		],
		"CANS310": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24862" }
		],
		"CATH370": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23524" }
		],
		"CCAU511": [
			{ "year": 2020, "month": 1, "section": "771", "id": "23867" }
		],
		"CCCS300": [
			{ "year": 2022, "month": 1, "section": "784", "id": "49568" }
		],
		"CCFA505": [
			{ "year": 2020, "month": 1, "section": "761", "id": "26634" }
		],
		"CCFC511": [
			{ "year": 2020, "month": 1, "section": "781", "id": "28162" }
		],
		"CCFC513": [
			{ "year": 2020, "month": 1, "section": "781", "id": "22033" }
		],
		"CCMA522": [
			{ "year": 2020, "month": 1, "section": "761", "id": "23869" }
		],
		"CCMA523": [
			{ "year": 2020, "month": 5, "section": "751", "id": "30066" }
		],
		"CCTX532": [
			{ "year": 2020, "month": 1, "section": "751", "id": "22034" }
		],
		"CEAP250": [
			{ "year": 2020, "month": 1, "section": "704", "id": "22945" }
		],
		"CEAP665": [
			{ "year": 2020, "month": 1, "section": "701", "id": "24877" }
		],
		"CEC2532": [
			{ "year": 2020, "month": 1, "section": "761", "id": "25978" }
		],
		"CEEN211": [
			{ "year": 2020, "month": 1, "section": "701", "id": "28146" }
		],
		"CEEN221": [
			{ "year": 2020, "month": 1, "section": "761", "id": "28179" },
			{ "year": 2020, "month": 1, "section": "781", "id": "28180" },
			{ "year": 2020, "month": 5, "section": "751", "id": "30023" }
		],
		"CEEN222": [
			{ "year": 2020, "month": 1, "section": "781", "id": "28184" }
		],
		"CEEN331": [
			{ "year": 2020, "month": 5, "section": "701", "id": "30102" }
		],
		"CEEN332": [
			{ "year": 2020, "month": 5, "section": "752", "id": "30020" },
			{ "year": 2022, "month": 1, "section": "751", "id": "49597" }
		],
		"CEEN412": [
			{ "year": 2020, "month": 1, "section": "751", "id": "28201" }
		],
		"CEEN421": [
			{ "year": 2020, "month": 1, "section": "701", "id": "28205" },
			{ "year": 2020, "month": 1, "section": "761", "id": "28207" }
		],
		"CEFN211": [
			{ "year": 2020, "month": 5, "section": "751", "id": "29998" }
		],
		"CEFN222": [
			{ "year": 2020, "month": 1, "section": "701", "id": "28053" }
		],
		"CENT308": [
			{ "year": 2020, "month": 1, "section": "751", "id": "26623" }
		],
		"CFIN512": [
			{ "year": 2020, "month": 1, "section": "741", "id": "23333" }
		],
		"CGM2510": [
			{ "year": 2019, "month": 9, "section": "761", "id": "20833" },
			{ "year": 2020, "month": 1, "section": "751", "id": "28654" }
		],
		"CGMG210": [
			{ "year": 2020, "month": 1, "section": "751", "id": "23220" }
		],
		"CGMG282": [
			{ "year": 2020, "month": 1, "section": "741", "id": "24575" }
		],
		"CGMG319": [
			{ "year": 2020, "month": 1, "section": "761", "id": "26618" }
		],
		"CHEE310": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22490" }
		],
		"CHEE591": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26077" }
		],
		"CHEM181": [
			{ "year": 2020, "month": 5, "section": "001", "id": "29449" }
		],
		"CHEM183": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20838" }
		],
		"CHEM211": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21665" }
		],
		"CHEM214": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21924" }
		],
		"CHEM222": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22077" }
		],
		"CHEM273": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22384" }
		],
		"CHEM281": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22120" }
		],
		"CHEM392": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28237" }
		],
		"CHEM482": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22279" }
		],
		"CHEM502": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22053" }
		],
		"CHEM577": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23286" }
		],
		"CIVE206": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21899" }
		],
		"CIVE225": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22045" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22046" }
		],
		"CIVE311": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21127" }
		],
		"CIVE318": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21905" }
		],
		"CIVE319": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21907" }
		],
		"CIVE327": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21910" }
		],
		"CIVE388": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27737" }
		],
		"CIVE540": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22935" }
		],
		"CIVE555": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28821" }
		],
		"CIVE603": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23426" }
		],
		"CIVE617": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24326" }
		],
		"CIVE623": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28356" }
		],
		"CLAS240": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22427" }
		],
		"CMIS544": [
			{ "year": 2020, "month": 1, "section": "781", "id": "25980" }
		],
		"CMPL513": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22374" }
		],
		"CMPL518": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22669" }
		],
		"CMPL571": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24867" }
		],
		"CMPL600": [
			{ "year": 2020, "month": 1, "section": "009", "id": "22076" }
		],
		"CMPL604": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22124" }
		],
		"CMR2542": [
			{ "year": 2020, "month": 1, "section": "751", "id": "25981" }
		],
		"CMR2548": [
			{ "year": 2020, "month": 1, "section": "771", "id": "23644" }
		],
		"CMR2556": [
			{ "year": 2020, "month": 1, "section": "771", "id": "23641" }
		],
		"CMR2564": [
			{ "year": 2020, "month": 1, "section": "761", "id": "25982" }
		],
		"CMR2566": [
			{ "year": 2020, "month": 1, "section": "781", "id": "24566" }
		],
		"CMRK200": [
			{ "year": 2020, "month": 1, "section": "761", "id": "22235" }
		],
		"CMRK225": [
			{ "year": 2020, "month": 1, "section": "771", "id": "23643" }
		],
		"CMRK321": [
			{ "year": 2020, "month": 1, "section": "761", "id": "24152" }
		],
		"CMRK322": [
			{ "year": 2020, "month": 1, "section": "751", "id": "24562" }
		],
		"CMRK325": [
			{ "year": 2020, "month": 1, "section": "781", "id": "24563" }
		],
		"CMS2500": [
			{ "year": 2020, "month": 1, "section": "771", "id": "22129" },
			{ "year": 2020, "month": 5, "section": "771", "id": "30072" }
		],
		"CMS2527": [
			{ "year": 2020, "month": 1, "section": "761", "id": "24569" }
		],
		"CMSC000": [
			{ "year": 2020, "month": 1, "section": "701", "id": "22275" },
			{ "year": 2020, "month": 1, "section": "781", "id": "22035" }
		],
		"CMSC310": [
			{ "year": 2020, "month": 1, "section": "751", "id": "22663" }
		],
		"COMP189": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22323" }
		],
		"COMP206": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21749" }
		],
		"COMP208": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22072" }
		],
		"COMP273": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20832" }
		],
		"COMP302": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22163" }
		],
		"COMP310": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21983" }
		],
		"COMP321": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25259" }
		],
		"COMP322": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22119" }
		],
		"COMP330": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21754" }
		],
		"COMP350": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20863" }
		],
		"COMP360": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22175" }
		],
		"COMP362": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23298" }
		],
		"COMP409": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22271" }
		],
		"COMP421": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21984" }
		],
		"COMP547": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23240" }
		],
		"COMP551": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21070" }
		],
		"COMP559": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23243" }
		],
		"COMP598": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23241" }
		],
		"COMP599": [
			{ "year": 2022, "month": 1, "section": "001", "id": "52833" }
		],
		"COMP602": [
			{ "year": 2020, "month": 9, "section": "001", "id": "38182" }
		],
		"COMP764": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23824" }
		],
		"COMP767": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22204" }
		],
		"COMS230": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22347" }
		],
		"CORG225": [
			{ "year": 2020, "month": 1, "section": "761", "id": "26842" },
			{ "year": 2020, "month": 1, "section": "771", "id": "26844" }
		],
		"CORG553": [
			{ "year": 2020, "month": 1, "section": "751", "id": "28749" }
		],
		"CORG554": [
			{ "year": 2020, "month": 1, "section": "761", "id": "28546" }
		],
		"CPAG410": [
			{ "year": 2019, "month": 9, "section": "751", "id": "21522" },
			{ "year": 2020, "month": 1, "section": "761", "id": "26845" }
		],
		"CPL2510": [
			{ "year": 2020, "month": 1, "section": "741", "id": "22202" }
		],
		"CPL2530": [
			{ "year": 2020, "month": 1, "section": "751", "id": "26550" }
		],
		"CPL2532": [
			{ "year": 2020, "month": 1, "section": "761", "id": "23467" }
		],
		"CPL2533": [
			{ "year": 2020, "month": 1, "section": "751", "id": "26846" }
		],
		"CPL2552": [
			{ "year": 2020, "month": 1, "section": "771", "id": "23871" }
		],
		"CPL2554": [
			{ "year": 2020, "month": 1, "section": "761", "id": "25418" }
		],
		"CPRL214": [
			{ "year": 2020, "month": 1, "section": "761", "id": "23361" }
		],
		"CPRL221": [
			{ "year": 2020, "month": 1, "section": "741", "id": "22234" }
		],
		"CPRL223": [
			{ "year": 2020, "month": 1, "section": "751", "id": "28064" }
		],
		"CPRL225": [
			{ "year": 2020, "month": 1, "section": "781", "id": "22913" }
		],
		"CPRL531": [
			{ "year": 2020, "month": 1, "section": "781", "id": "22917" }
		],
		"CTPT200": [
			{ "year": 2020, "month": 1, "section": "751", "id": "24578" }
		],
		"CTPT201": [
			{ "year": 2020, "month": 1, "section": "761", "id": "24266" }
		],
		"CTPT206": [
			{ "year": 2020, "month": 1, "section": "771", "id": "26613" }
		],
		"CTPT310": [
			{ "year": 2020, "month": 1, "section": "781", "id": "22212" }
		],
		"DENT418D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24946" }
		],
		"DENT671D1": [
			{ "year": 2021, "month": 9, "section": "001", "id": "44973" }
		],
		"DENT671D2": [
			{ "year": 2021, "month": 1, "section": "001", "id": "41189" }
		],
		"EAST211": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22253" }
		],
		"EAST220D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24487" }
		],
		"EAST230": [
			{ "year": 2020, "month": 5, "section": "001", "id": "29862" }
		],
		"EAST230D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24490" },
			{ "year": 2020, "month": 1, "section": "003", "id": "25568" }
		],
		"EAST250": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22338" }
		],
		"EAST375": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26806" }
		],
		"ECON208": [
			{ "year": 2019, "month": 9, "section": "002", "id": "20945" },
			{ "year": 2019, "month": 9, "section": "004", "id": "21092" }
		],
		"ECON209": [
			{ "year": 2020, "month": 5, "section": "001", "id": "29830" }
		],
		"ECON219": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22222" }
		],
		"ECON227D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22752" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22013" },
			{ "year": 2020, "month": 1, "section": "003", "id": "25410" },
			{ "year": 2020, "month": 1, "section": "005", "id": "26773" }
		],
		"ECON250D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22015" }
		],
		"ECON257D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22016" }
		],
		"ECON304": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22183" }
		],
		"ECON314": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20875" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22193" }
		],
		"ECON330D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22018" }
		],
		"ECON334": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25222" }
		],
		"ECON352D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24446" }
		],
		"ECON409": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23908" }
		],
		"ECON424": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22231" }
		],
		"ECON447": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25317" }
		],
		"ECON450": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25258" }
		],
		"ECON461": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24214" }
		],
		"ECON473": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23554" }
		],
		"ECON647": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25893" }
		],
		"ECON662D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24460" }
		],
		"ECON711": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26590" }
		],
		"ECON724": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27912" }
		],
		"ECON761": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25907" }
		],
		"ECSE202": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22505" }
		],
		"ECSE205": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22508" },
			{ "year": 2020, "month": 5, "section": "001", "id": "29254" }
		],
		"ECSE210": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22511" }
		],
		"ECSE222": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22513" }
		],
		"ECSE251": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26113" }
		],
		"ECSE316": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22519" }
		],
		"ECSE324": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22521" }
		],
		"ECSE352": [
			{ "year": 2020, "month": 1, "section": "002", "id": "26155" }
		],
		"ECSE429": [
			{ "year": 2021, "month": 1, "section": "001", "id": "40893" }
		],
		"ECSE461": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22526" }
		],
		"ECSE463": [
			{ "year": 2022, "month": 1, "section": "001", "id": "51590" }
		],
		"ECSE507": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26220" }
		],
		"ECSE510": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26222" }
		],
		"ECSE518": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26224" }
		],
		"ECSE521": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26798" }
		],
		"ECSE571": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22528" }
		],
		"ECSE610": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26238" }
		],
		"ECSE635": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26629" }
		],
		"EDEA410": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25724" }
		],
		"EDEC203": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28595" },
			{ "year": 2020, "month": 1, "section": "003", "id": "27071" }
		],
		"EDEC233": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24846" }
		],
		"EDEC248": [
			{ "year": 2020, "month": 1, "section": "003", "id": "24280" }
		],
		"EDEC260": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22092" }
		],
		"EDEC262": [
			{ "year": 2020, "month": 1, "section": "006", "id": "27072" }
		],
		"EDEC612": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24438" },
			{ "year": 2020, "month": 1, "section": "002", "id": "25891" }
		],
		"EDEC707": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25892" }
		],
		"EDEE223": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28960" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22806" },
			{ "year": 2020, "month": 1, "section": "004", "id": "26476" }
		],
		"EDEE253": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24447" },
			{ "year": 2020, "month": 1, "section": "002", "id": "24448" },
			{ "year": 2020, "month": 1, "section": "003", "id": "25150" }
		],
		"EDEE260": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23232" },
			{ "year": 2020, "month": 1, "section": "002", "id": "23233" },
			{ "year": 2020, "month": 1, "section": "003", "id": "23301" }
		],
		"EDEE283": [
			{ "year": 2020, "month": 1, "section": "002", "id": "24450" }
		],
		"EDEE332": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23234" }
		],
		"EDEM660": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25905" }
		],
		"EDER319": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24843" }
		],
		"EDER494": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24845" }
		],
		"EDER600": [
			{ "year": 2021, "month": 1, "section": "001", "id": "41548" }
		],
		"EDER614": [
			{ "year": 2020, "month": 5, "section": "001", "id": "29271" }
		],
		"EDES361": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28425" }
		],
		"EDKP250": [
			{ "year": 2020, "month": 1, "section": "003", "id": "25277" }
		],
		"EDKP443": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25939" }
		],
		"EDPE300": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21991" }
		],
		"EDPE575": [
			{ "year": 2020, "month": 1, "section": "720", "id": "24832" }
		],
		"EDPE635": [
			{ "year": 2020, "month": 1, "section": "002", "id": "28841" }
		],
		"EDPE670": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23520" }
		],
		"EDPI309": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22230" }
		],
		"EDPI442": [
			{ "year": 2020, "month": 1, "section": "761", "id": "23859" }
		],
		"EDPS600": [
			{ "year": 2020, "month": 5, "section": "001", "id": "29524" }
		],
		"EDSL330": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26500" }
		],
		"EDSL332": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23231" }
		],
		"EDSL345": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27924" }
		],
		"EDSL444": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27751" }
		],
		"ENGL203": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22007" }
		],
		"ENGL227": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22642" }
		],
		"ENGL280": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22350" }
		],
		"ENGL308": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25781" }
		],
		"ENGL324": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25207" }
		],
		"ENGL326": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21859" }
		],
		"ENGL345": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24802" }
		],
		"ENGL349": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25790" }
		],
		"ENGL359": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28240" }
		],
		"ENGL371": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25793" }
		],
		"ENGL378": [
			{ "year": 2021, "month": 9, "section": "001", "id": "45560" }
		],
		"ENGL389": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25210" }
		],
		"ENGL415": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24457" }
		],
		"ENGL440": [
			{ "year": 2021, "month": 9, "section": "001", "id": "47320" }
		],
		"ENGL501": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25812" }
		],
		"ENTO352": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26183" }
		],
		"ENVB305": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22150" }
		],
		"ENVR202": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21960" }
		],
		"ENVR203": [
			{ "year": 2021, "month": 9, "section": "051", "id": "47666" }
		],
		"ENVR301": [
			{ "year": 2020, "month": 1, "section": "051", "id": "24807" }
		],
		"EPIB603": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22128" }
		],
		"EPIB621": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22031" }
		],
		"EPIB638": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25390" }
		],
		"EPSC180": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22759" },
			{ "year": 2022, "month": 1, "section": "001", "id": "49268" }
		],
		"EPSC186": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22312" }
		],
		"EPSC201": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21768" },
			{ "year": 2020, "month": 1, "section": "001", "id": "21917" },
			{ "year": 2022, "month": 1, "section": "001", "id": "49343" }
		],
		"EPSC221": [
			{ "year": 2021, "month": 9, "section": "001", "id": "44420" }
		],
		"EPSC320": [
			{ "year": 2020, "month": 9, "section": "001", "id": "32521" }
		],
		"EPSC549": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22291" }
		],
		"ESYS200": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22085" }
		],
		"EXMD604": [
			{ "year": 2020, "month": 9, "section": "001", "id": "37950" }
		],
		"EXMD607": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25824" }
		],
		"EXMD615": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25849" }
		],
		"EXSU602": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26501" }
		],
		"FACC100": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20834" }
		],
		"FACC300": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22216" }
		],
		"FDSC251": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21993" }
		],
		"FDSC315": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23272" }
		],
		"FDSC319": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23276" }
		],
		"FDSC330": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23278" }
		],
		"FDSC334": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23282" },
			{ "year": 2020, "month": 1, "section": "002", "id": "23287" }
		],
		"FDSC515": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24790" }
		],
		"FDSC516": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23255" }
		],
		"FDSC519": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24791" }
		],
		"FDSC525": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23244" }
		],
		"FDSC545": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22883" }
		],
		"FINE342": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22530" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22531" },
			{ "year": 2020, "month": 1, "section": "003", "id": "22532" }
		],
		"FINE434": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22533" },
			{ "year": 2020, "month": 1, "section": "003", "id": "26595" },
			{ "year": 2020, "month": 1, "section": "004", "id": "26596" }
		],
		"FINE441": [
			{ "year": 2020, "month": 1, "section": "003", "id": "26260" },
			{ "year": 2020, "month": 5, "section": "001", "id": "7945" }
		],
		"FINE442": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26262" }
		],
		"FINE443": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26264" }
		],
		"FINE444": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22537" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22538" }
		],
		"FINE447": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26266" }
		],
		"FINE448": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22539" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22540" }
		],
		"FINE451": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26270" }
		],
		"FINE482": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22542" }
		],
		"FINE620": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26274" }
		],
		"FINE622": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26275" }
		],
		"FINE681": [
			{ "year": 2019, "month": 9, "section": "065", "id": "21486" }
		],
		"FINE691": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26475" }
		],
		"FMT4007": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23897" }
		],
		"FMT4008": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23899" }
		],
		"FMT4012": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23906" }
		],
		"FMT4029": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24216" }
		],
		"FMT4030": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22268" }
		],
		"FMT4036": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24221" }
		],
		"FMTP077": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28811" }
		],
		"FMTP083": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27792" }
		],
		"FMTP098": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22104" }
		],
		"FREN231": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25742" }
		],
		"FREN245": [
			{ "year": 2021, "month": 1, "section": "001", "id": "42343" }
		],
		"FREN315": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24787" }
		],
		"FREN444": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25753" }
		],
		"FREN482": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25756" }
		],
		"FRSL104": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28143" }
		],
		"FRSL207D2": [
			{ "year": 2020, "month": 1, "section": "003", "id": "24007" }
		],
		"FRSL211D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24036" },
			{ "year": 2020, "month": 1, "section": "002", "id": "24047" },
			{ "year": 2020, "month": 1, "section": "003", "id": "24057" },
			{ "year": 2020, "month": 1, "section": "005", "id": "28582" }
		],
		"FRSL215": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23297" }
		],
		"GEOG210": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22113" }
		],
		"GEOG303": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24511" }
		],
		"GEOG310": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22145" }
		],
		"GEOG325": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23928" }
		],
		"GERM372": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25774" }
		],
		"GLIS629": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24308" }
		],
		"GLIS661": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23843" }
		],
		"GSFS305": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25705" }
		],
		"GSFS401": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25909" }
		],
		"HGEN675": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25691" }
		],
		"HISP219": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22940" }
		],
		"HISP226": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22011" }
		],
		"HISP244": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24291" }
		],
		"HISP340": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25712" }
		],
		"HISP357": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25715" }
		],
		"HISP437": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25713" }
		],
		"HIST203": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23870" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22272" }
		],
		"HIST213": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22428" }
		],
		"HIST215": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22005" }
		],
		"HIST218": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22006" }
		],
		"HIST219": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22248" }
		],
		"HIST221": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22224" }
		],
		"HIST223": [
			{ "year": 2019, "month": 9, "section": "002", "id": "21163" }
		],
		"HIST249": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21672" }
		],
		"HIST306": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22352" }
		],
		"HIST312": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25822" }
		],
		"HIST329": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25823" }
		],
		"HIST330": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25266" }
		],
		"HIST351": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22429" }
		],
		"HIST360": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23529" }
		],
		"HIST382": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22353" }
		],
		"HIST383": [
			{ "year": 2020, "month": 1, "section": "005", "id": "27148" }
		],
		"HIST388": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22037" }
		],
		"HIST417": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25827" }
		],
		"HIST431": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25235" }
		],
		"HIST530": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25831" }
		],
		"INDG202": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25334" }
		],
		"INDG401": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23916" }
		],
		"INDR294": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22544" }
		],
		"INDR494": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22546" }
		],
		"INDS116": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22792" }
		],
		"INDS117": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22801" }
		],
		"INDS224J2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23978" }
		],
		"INSY341": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22549" }
		],
		"INSY437": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22550" }
		],
		"INSY446": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22552" },
			{ "year": 2020, "month": 9, "section": "001", "id": "32820" }
		],
		"INSY455": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22553" }
		],
		"INSY662": [
			{ "year": 2021, "month": 9, "section": "076", "id": "47713" }
		],
		"INSY670": [
			{ "year": 2020, "month": 1, "section": "075", "id": "26284" }
		],
		"INSY672": [
			{ "year": 2021, "month": 1, "section": "075", "id": "39616" }
		],
		"INSY691": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21390" }
		],
		"INTD354": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26471" }
		],
		"INTD397": [
			{ "year": 2020, "month": 1, "section": "003", "id": "25918" }
		],
		"INTG202": [
			{ "year": 2020, "month": 1, "section": "061", "id": "22556" }
		],
		"ISLA210": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22417" },
			{ "year": 2021, "month": 1, "section": "001", "id": "39862" }
		],
		"ISLA360": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25819" }
		],
		"ISLA511": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25718" }
		],
		"JWST240": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22443" }
		],
		"JWST282": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24289" }
		],
		"JWST330": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25915" }
		],
		"JWST334": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25232" }
		],
		"LAWG100D2": [
			{ "year": 2020, "month": 1, "section": "002", "id": "21863" }
		],
		"LAWG101D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21864" }
		],
		"LAWG103": [
			{ "year": 2020, "month": 9, "section": "003", "id": "37878" }
		],
		"LAWG110D1": [
			{ "year": 2021, "month": 9, "section": "001", "id": "47800" }
		],
		"LAWG220D2": [
			{ "year": 2020, "month": 1, "section": "002", "id": "22327" },
			{ "year": 2020, "month": 1, "section": "003", "id": "24866" }
		],
		"LAWG415": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22365" }
		],
		"LAWG426": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22332" }
		],
		"LAWG516": [
			{ "year": 2021, "month": 9, "section": "001", "id": "47806" }
		],
		"LAWG518": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22126" }
		],
		"LAWG536": [
			{ "year": 2020, "month": 9, "section": "001", "id": "30486" }
		],
		"LAWG602": [
			{ "year": 2020, "month": 1, "section": "009", "id": "22342" }
		],
		"LEEL369": [
			{ "year": 2020, "month": 1, "section": "003", "id": "25364" }
		],
		"LEEL570": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22255" }
		],
		"LING350": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26565" }
		],
		"LSCI202": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28566" }
		],
		"MATH122": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22380" }
		],
		"MATH123": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22101" }
		],
		"MATH133": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21591" }
		],
		"MATH140": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21599" },
			{ "year": 2020, "month": 1, "section": "001", "id": "21932" }
		],
		"MATH141": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21933" },
			{ "year": 2022, "month": 1, "section": "001", "id": "50507" }
		],
		"MATH204": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21943" }
		],
		"MATH222": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21944" }
		],
		"MATH242": [
			{ "year": 2020, "month": 9, "section": "001", "id": "33015" }
		],
		"MATH243": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21947" }
		],
		"MATH247": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21948" }
		],
		"MATH249": [
			{ "year": 2022, "month": 1, "section": "001", "id": "50508" }
		],
		"MATH251": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21950" }
		],
		"MATH255": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21951" }
		],
		"MATH262": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22058" },
			{ "year": 2020, "month": 5, "section": "001", "id": "29583" }
		],
		"MATH263": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22061" },
			{ "year": 2020, "month": 5, "section": "001", "id": "29585" },
			{ "year": 2021, "month": 5, "section": "001", "id": "43544" }
		],
		"MATH264": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22067" }
		],
		"MATH314": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21657" }
		],
		"MATH318": [
			{ "year": 2020, "month": 9, "section": "001", "id": "33045" }
		],
		"MATH323": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21954" },
			{ "year": 2020, "month": 5, "section": "001", "id": "29591" }
		],
		"MATH324": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21955" }
		],
		"MATH325": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21956" }
		],
		"MATH329": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21957" }
		],
		"MATH338": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21662" },
			{ "year": 2020, "month": 9, "section": "001", "id": "33050" }
		],
		"MATH340": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21958" }
		],
		"MATH357": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28337" }
		],
		"MATH358": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22643" }
		],
		"MATH387": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26496" }
		],
		"MATH437": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24312" }
		],
		"MATH447": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22073" }
		],
		"MATH457": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24303" }
		],
		"MATH523": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28342" }
		],
		"MATH545": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26438" }
		],
		"MATH550": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23921" }
		],
		"MATH557": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28343" }
		],
		"MATH560": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24542" }
		],
		"MATH577": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28349" }
		],
		"MATH583": [
			{ "year": 2020, "month": 9, "section": "001", "id": "37820" }
		],
		"MATH596": [
			{ "year": 2020, "month": 9, "section": "001", "id": "36148" },
			{ "year": 2021, "month": 9, "section": "001", "id": "48505" }
		],
		"MATH598": [
			{ "year": 2022, "month": 1, "section": "001", "id": "52826" }
		],
		"MATH599": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26508" }
		],
		"MATH726": [
			{ "year": 2020, "month": 9, "section": "001", "id": "37990" },
			{ "year": 2022, "month": 1, "section": "001", "id": "51761" }
		],
		"MATH740": [
			{ "year": 2022, "month": 1, "section": "002", "id": "52669" }
		],
		"MDPH612": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25508" }
		],
		"MECH210": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21870" }
		],
		"MECH220": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21872" },
			{ "year": 2020, "month": 9, "section": "001", "id": "33089" }
		],
		"MECH240": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22911" }
		],
		"MECH261": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21874" }
		],
		"MECH289": [
			{ "year": 2019, "month": 9, "section": "002", "id": "21033" },
			{ "year": 2020, "month": 1, "section": "001", "id": "22080" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22278" }
		],
		"MECH292": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21876" }
		],
		"MECH321": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23223" }
		],
		"MECH341": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22044" }
		],
		"MECH346": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21880" }
		],
		"MECH360": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23250" },
			{ "year": 2020, "month": 9, "section": "001", "id": "33122" }
		],
		"MECH362": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23304" }
		],
		"MECH383": [
			{ "year": 2021, "month": 1, "section": "001", "id": "40753" }
		],
		"MECH393": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21883" }
		],
		"MECH412": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21884" }
		],
		"MECH430": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21887" },
			{ "year": 2022, "month": 1, "section": "001", "id": "50263" }
		],
		"MECH463D2": [
			{ "year": 2020, "month": 1, "section": "002", "id": "26573" }
		],
		"MECH500": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24225" }
		],
		"MECH532": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23854" }
		],
		"MECH560": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25496" }
		],
		"MECH561": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24803" }
		],
		"MECH562": [
			{ "year": 2020, "month": 1, "section": "002", "id": "22294" }
		],
		"MECH642": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24006" }
		],
		"MGCR222": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22561" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22562" },
			{ "year": 2020, "month": 1, "section": "003", "id": "22563" }
		],
		"MGCR271": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26288" }
		],
		"MGCR331": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22567" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22568" },
			{ "year": 2020, "month": 1, "section": "003", "id": "22569" },
			{ "year": 2020, "month": 1, "section": "004", "id": "22570" }
		],
		"MGCR341": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21421" },
			{ "year": 2020, "month": 1, "section": "001", "id": "22571" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22572" },
			{ "year": 2020, "month": 1, "section": "003", "id": "22573" }
		],
		"MGCR352": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22575" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22576" },
			{ "year": 2020, "month": 1, "section": "003", "id": "22577" },
			{ "year": 2020, "month": 1, "section": "005", "id": "22578" },
			{ "year": 2020, "month": 9, "section": "001", "id": "33214" },
			{ "year": 2020, "month": 9, "section": "002", "id": "33215" },
			{ "year": 2020, "month": 9, "section": "003", "id": "33216" }
		],
		"MGCR423": [
			{ "year": 2020, "month": 1, "section": "004", "id": "26297" }
		],
		"MGCR472": [
			{ "year": 2020, "month": 5, "section": "052", "id": "37187" }
		],
		"MGPO364": [
			{ "year": 2020, "month": 1, "section": "061", "id": "26309" },
			{ "year": 2020, "month": 9, "section": "061", "id": "33249" }
		],
		"MGPO438": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26312" },
			{ "year": 2020, "month": 1, "section": "071", "id": "26313" }
		],
		"MGPO440": [
			{ "year": 2020, "month": 1, "section": "081", "id": "26314" }
		],
		"MGPO460": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26316" }
		],
		"MGPO469": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26317" }
		],
		"MGPO630": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26319" }
		],
		"MGSC372": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21444" },
			{ "year": 2020, "month": 1, "section": "001", "id": "22596" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22597" }
		],
		"MGSC672": [
			{ "year": 2020, "month": 5, "section": "075", "id": "29905" }
		],
		"MGSC702": [
			{ "year": 2021, "month": 1, "section": "001", "id": "39603" }
		],
		"MIME262": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22116" }
		],
		"MIME311": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23872" }
		],
		"MIME322": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25976" }
		],
		"MIME452": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27812" }
		],
		"MIME455": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26485" }
		],
		"MIME456": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26626" }
		],
		"MIME473": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23944" }
		],
		"MIMM323": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21712" }
		],
		"MIMM387": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21964" }
		],
		"MIMM466": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21966" }
		],
		"MRKT354": [
			{ "year": 2020, "month": 1, "section": "071", "id": "22603" }
		],
		"MRKT451": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26344" }
		],
		"MRKT452": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26346" }
		],
		"MRKT453": [
			{ "year": 2020, "month": 1, "section": "002", "id": "26348" }
		],
		"MRKT690": [
			{ "year": 2020, "month": 1, "section": "090", "id": "22778" }
		],
		"MUAR201": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24839" },
			{ "year": 2020, "month": 1, "section": "002", "id": "24840" }
		],
		"MUHL186": [
			{ "year": 2019, "month": 9, "section": "001", "id": "20871" }
		],
		"MUHL286": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28771" }
		],
		"MUHL683": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25006" }
		],
		"MUIT203": [
			{ "year": 2020, "month": 9, "section": "001", "id": "33894" }
		],
		"MUJZ441": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25961" }
		],
		"MUMT307": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23056" }
		],
		"MUMT501": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24205" }
		],
		"MUPD350": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24851" }
		],
		"MUPG474": [
			{ "year": 2020, "month": 9, "section": "005", "id": "38054" }
		],
		"MUSP170": [
			{ "year": 2020, "month": 9, "section": "001", "id": "33995" }
		],
		"MUSP381": [
			{ "year": 2021, "month": 1, "section": "001", "id": "42433" }
		],
		"MUSP500D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24145" }
		],
		"MUSR631D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27868" }
		],
		"MUTH151": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22178" }
		],
		"MUTH251": [
			{ "year": 2020, "month": 1, "section": "003", "id": "22902" },
			{ "year": 2020, "month": 1, "section": "004", "id": "22903" }
		],
		"MUTH350": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23933" }
		],
		"MUTH541": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25934" }
		],
		"MUTH658": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25936" }
		],
		"NEUR310": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21968" }
		],
		"NEUR610": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23976" }
		],
		"NEUR631": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27919" }
		],
		"NEUR705": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23309" }
		],
		"NSCI300": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28467" }
		],
		"NUR1225": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24898" }
		],
		"NUR1231": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24892" }
		],
		"NUR1236": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22336" }
		],
		"NUR1300": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21154" }
		],
		"NUR1301": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25183" }
		],
		"NUR1318": [
			{ "year": 2020, "month": 9, "section": "001", "id": "34054" },
			{ "year": 2021, "month": 9, "section": "001", "id": "47096" }
		],
		"NUR1320": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22259" },
			{ "year": 2020, "month": 1, "section": "002", "id": "26467" }
		],
		"NUR1327": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25188" }
		],
		"NUR1331": [
			{ "year": 2021, "month": 5, "section": "001", "id": "43268" }
		],
		"NUR1332": [
			{ "year": 2021, "month": 9, "section": "001", "id": "47142" }
		],
		"NUR1339": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22765" },
			{ "year": 2021, "month": 1, "section": "001", "id": "38893" }
		],
		"NUR2516": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23230" }
		],
		"NUR2518": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26455" }
		],
		"NUR2611": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22311" }
		],
		"NUR2618": [
			{ "year": 2021, "month": 1, "section": "001", "id": "39403" }
		],
		"NUR2642": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22091" }
		],
		"NUR2684": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26749" }
		],
		"NUTR217": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23537" }
		],
		"NUTR301": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22644" }
		],
		"NUTR345": [
			{ "year": 2021, "month": 9, "section": "001", "id": "45084" }
		],
		"OCC1548": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22130" },
			{ "year": 2020, "month": 1, "section": "002", "id": "22281" }
		],
		"OCC1549": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22133" }
		],
		"OCC1551": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22131" }
		],
		"OCC1617": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21788" }
		],
		"OCC1623": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22158" }
		],
		"OCCH605": [
			{ "year": 2021, "month": 1, "section": "001", "id": "39801" }
		],
		"ONCO630": [
			{ "year": 2021, "month": 1, "section": "001", "id": "42155" }
		],
		"ORGB321": [
			{ "year": 2020, "month": 1, "section": "002", "id": "22606" }
		],
		"ORGB380": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26367" }
		],
		"ORGB423": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26369" }
		],
		"ORGB690": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26374" }
		],
		"ORGB708": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26376" }
		],
		"PHAR201": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22276" }
		],
		"PHAR508": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24305" }
		],
		"PHAR563": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21915" }
		],
		"PHAR565": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22277" }
		],
		"PHGY209": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21725" },
			{ "year": 2019, "month": 9, "section": "002", "id": "21609" }
		],
		"PHGY210": [
			{ "year": 2020, "month": 1, "section": "002", "id": "21970" }
		],
		"PHGY212": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21641" }
		],
		"PHGY213": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22094" }
		],
		"PHGY312": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21971" }
		],
		"PHGY459D2": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28698" }
		],
		"PHIL343": [
			{ "year": 2020, "month": 9, "section": "001", "id": "34181" }
		],
		"PHIL344": [
			{ "year": 2022, "month": 1, "section": "001", "id": "52305" }
		],
		"PHIL361": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25841" }
		],
		"PHIL411": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25260" }
		],
		"PHIL415": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25843" }
		],
		"PHIL436": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23303" }
		],
		"PHIL446": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24248" }
		],
		"PHIL481": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26474" }
		],
		"PHTH551": [
			{ "year": 2019, "month": 9, "section": "003", "id": "21762" }
		],
		"PHTH560": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22135" }
		],
		"PHTH661": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28620" }
		],
		"PHYS142": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21959" }
		],
		"PHYS183": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22168" }
		],
		"PHYS228": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24582" }
		],
		"PHYS232": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28402" }
		],
		"PHYS241": [
			{ "year": 2020, "month": 1, "section": "001", "id": "21961" }
		],
		"PHYS329": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24927" }
		],
		"PHYS331": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28414" }
		],
		"PHYS351": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28861" }
		],
		"PHYS362": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28427" }
		],
		"PHYS457": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28431" }
		],
		"PHYS514": [
			{ "year": 2021, "month": 1, "section": "001", "id": "40684" },
			{ "year": 2022, "month": 1, "section": "001", "id": "50379" }
		],
		"PHYS519": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23780" }
		],
		"PLNT435": [
			{ "year": 2020, "month": 1, "section": "002", "id": "28755" }
		],
		"POLI222": [
			{ "year": 2020, "month": 1, "section": "003", "id": "27228" }
		],
		"POLI227": [
			{ "year": 2020, "month": 1, "section": "008", "id": "27271" },
			{ "year": 2020, "month": 1, "section": "017", "id": "27280" }
		],
		"POLI231": [
			{ "year": 2020, "month": 1, "section": "004", "id": "27237" }
		],
		"POLI324": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22767" }
		],
		"POLI340": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21057" }
		],
		"POLI346": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21103" }
		],
		"POLI350": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22434" }
		],
		"POLI352": [
			{ "year": 2020, "month": 1, "section": "009", "id": "27310" }
		],
		"POLI354": [
			{ "year": 2020, "month": 1, "section": "003", "id": "27259" }
		],
		"POLI359": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22252" }
		],
		"POLI364": [
			{ "year": 2021, "month": 1, "section": "001", "id": "41052" }
		],
		"POLI365": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25898" }
		],
		"POLI423": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21160" }
		],
		"POLI432": [
			{ "year": 2020, "month": 1, "section": "002", "id": "26558" }
		],
		"POLI445": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21104" }
		],
		"POLI448": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22438" }
		],
		"POLI452": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22664" }
		],
		"POTH225": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22236" }
		],
		"POTH627": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28819" }
		],
		"POTH684": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22220" }
		],
		"PPHS501": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24383" }
		],
		"PSYC215": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22111" }
		],
		"PSYC302": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22355" }
		],
		"PSYC311": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21724" }
		],
		"PSYC403": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22356" }
		],
		"PSYC475": [
			{ "year": 2019, "month": 9, "section": "001", "id": "21278" }
		],
		"PSYC528": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25930" }
		],
		"PSYC529": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25257" }
		],
		"PSYC535": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26487" }
		],
		"PSYC538": [
			{ "year": 2020, "month": 9, "section": "001", "id": "34427" }
		],
		"PSYC541": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25931" }
		],
		"PUB2101D2": [
			{ "year": 2020, "month": 1, "section": "002", "id": "21866" }
		],
		"PUB2502": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22328" }
		],
		"PUB2517": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25279" }
		],
		"PUB2551": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25963" }
		],
		"PUB3116": [
			{ "year": 2022, "month": 1, "section": "001", "id": "51965" }
		],
		"PUB3116D2": [
			{ "year": 2020, "month": 1, "section": "003", "id": "27860" }
		],
		"RADD301": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23576" }
		],
		"RELG203": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22445" }
		],
		"RELG253": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24855" }
		],
		"RELG254": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22379" }
		],
		"RELG271": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22025" }
		],
		"RELG312": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27684" }
		],
		"RELG323": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27693" }
		],
		"RELG366": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25730" }
		],
		"RELG372": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22416" }
		],
		"RELG375": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22358" }
		],
		"RELG420": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27728" }
		],
		"RELG479": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27772" }
		],
		"SCSD642": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25152" }
		],
		"SCSD643": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25509" }
		],
		"SCSD664": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25161" }
		],
		"SCSD666": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28003" }
		],
		"SCSD680": [
			{ "year": 2020, "month": 1, "section": "001", "id": "27890" }
		],
		"SCSD682": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25194" }
		],
		"SCSD684": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25202" }
		],
		"SEAD520": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25863" }
		],
		"SOCI210": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22609" }
		],
		"SOCI211": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22610" }
		],
		"SOCI227": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22611" }
		],
		"SOCI230": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22612" }
		],
		"SOCI254": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22613" }
		],
		"SOCI255": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22654" }
		],
		"SOCI304": [
			{ "year": 2021, "month": 9, "section": "001", "id": "45646" }
		],
		"SOCI307": [
			{ "year": 2020, "month": 1, "section": "001", "id": "22614" }
		],
		"SOCI326": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26379" }
		],
		"SOCI333": [
			{ "year": 2020, "month": 1, "section": "001", "id": "26381" }
		],
		"SWRK221": [
			{ "year": 2021, "month": 9, "section": "001", "id": "44086" }
		],
		"SWRK222": [
			{ "year": 2020, "month": 1, "section": "003", "id": "28737" }
		],
		"SWRK223": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28244" }
		],
		"SWRK325": [
			{ "year": 2020, "month": 9, "section": "003", "id": "34559" }
		],
		"SWRK327": [
			{ "year": 2021, "month": 1, "section": "001", "id": "41258" }
		],
		"SWRK354": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24819" }
		],
		"SWRK404": [
			{ "year": 2020, "month": 1, "section": "001", "id": "25351" }
		],
		"SWRK445": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24513" }
		],
		"SWRK525": [
			{ "year": 2020, "month": 1, "section": "003", "id": "25218" }
		],
		"SWRK532": [
			{ "year": 2020, "month": 9, "section": "001", "id": "34572" }
		],
		"SWRK610": [
			{ "year": 2020, "month": 1, "section": "002", "id": "23635" }
		],
		"SWRK630": [
			{ "year": 2020, "month": 1, "section": "002", "id": "24311" }
		],
		"SWRK643": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28092" }
		],
		"TESTA000": [
			{ "year": 2020, "month": 5, "section": "999", "id": "30318" }
		],
		"URBP504": [
			{ "year": 2020, "month": 1, "section": "001", "id": "24812" }
		],
		"URBP505": [
			{ "year": 2020, "month": 1, "section": "001", "id": "28099" }
		],
		"WOOD441": [
			{ "year": 2020, "month": 1, "section": "001", "id": "23528" }
		],
		"YCBS118": [
			{ "year": 2020, "month": 5, "section": "008", "id": "30346" }
		]
	};
	return recordingData;
}