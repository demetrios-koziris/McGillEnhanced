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


function getRecordingsBaseURLs() {
    let recordingsBaseURLs = {
        lrs: "https://lrs.mcgill.ca/ListRecordings.aspx?CourseID=",
        cool: "http://cool.mcgill.ca/COOLLectureListing.aspx?CourseID="
    };
    return recordingsBaseURLs;
}


function getRecordingData() {
    let recordingData = {
        AECH111 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11256" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13093" }
            ] 
        },
        ANAT214 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12204" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14135" }
            ] 
        },
        ANAT321 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10435" }
            ] 
        },
        ANAT416 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11265" }
            ] 
        },
        ANSC234 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12551" }
            ] 
        },
        ATOC184 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11293" }
            ] 
        },
        ATOC185 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "9858" }
            ] 
        },
        BIOC300D2 : { 
            2014 : [
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11297" }
            ]
        },
        BIOC311 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10451" }
            ] 
        },
        BIOC312 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11264" }
            ] 
        },
        BIOC450 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10452" }
            ] 
        },
        BIOL115 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12042" }
            ] 
        },
        BIOL200 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13768" }
            ] 
        },
        BIOL201 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12958" }
            ] 
        },
        BIOL202 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11132" },
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "lrs", id: "11425" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12959" }
            ] 
        },
        BIOL215 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13967" }
            ] 
        },
        BIOL309 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10255" }
            ] 
        },
        BIOL313 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12828" }
            ] 
        },
        BUS2365 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12197" }
            ] 
        },
        CACC521 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "781", type: "lrs", id: "13488" }
            ] 
        },
        CFIN512 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "751", type: "lrs", id: "13571" }
            ] 
        },
        CHEE453 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13537" }
            ] 
        },
        CHEM110 : { 
            2010 : [ 
                { year: 2010, month: 09, semester: "Fall", section: "001", type: "cool", id: "1420" },
                { year: 2010, month: 09, semester: "Fall", section: "002", type: "cool", id: "1421" },
                { year: 2010, month: 09, semester: "Fall", section: "003", type: "cool", id: "1430" }
            ],
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1460" },
                { year: 2011, month: 09, semester: "Fall", section: "002", type: "cool", id: "1461" }
            ],
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "001", type: "cool", id: "1514" },
                { year: 2012, month: 09, semester: "Fall", section: "002", type: "cool", id: "1515" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1571" },
                { year: 2014, month: 09, semester: "Fall", section: "002", type: "cool", id: "1572" },
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10258" }        
            ], 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12039" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13961" }
            ]
        },
        CHEM120 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1432" },
                { year: 2011, month: 01, semester: "Winter", section: "002", type: "cool", id: "1433" }
            ],
            2011 : [ 
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1477" },
                { year: 2012, month: 01, semester: "Winter", section: "002", type: "cool", id: "1478" }
            ],
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "cool", id: "1588" }
            ]
        },
        CHEM180 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1435" }
            ],
            2011 : [ 
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1480" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "761", type: "cool", id: "1516" }
            ],
            2013 : [ 
                { year: 2014, month: 01, semester: "Winter", section: "761", type: "cool", id: "1545" }
            ] 
        },
        CHEM181 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1434" }
            ],
            2011 : [ 
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1479" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "761", type: "cool", id: "1517" }
            ],
            2013 : [ 
                { year: 2014, month: 01, semester: "Winter", section: "761", type: "cool", id: "1546" }
            ],
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "761", type: "lrs", id: "11287" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "761", type: "lrs", id: "13124" }
            ]
        },
        CHEM182 : { 
            2010 : [ 
                { year: 2010, month: 09, semester: "Fall", section: "001", type: "cool", id: "1417" }
            ],
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1463" }
            ],
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "761", type: "cool", id: "1504" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "761", type: "cool", id: "1535" }
            ] 
        },
        CHEM183 : { 
            2010 : [ 
                { year: 2010, month: 09, semester: "Fall", section: "761", type: "cool", id: "1418" }
            ],
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "761", type: "cool", id: "1464" }
            ],
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "761", type: "cool", id: "1505" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "761", type: "cool", id: "1536" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "761", type: "cool", id: "1574" },
                { year: 2014, month: 09, semester: "Fall", section: "761", type: "lrs", id: "9852" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "761", type: "cool", id: "1607" },
                { year: 2015, month: 09, semester: "Fall", section: "761", type: "lrs", id: "11556" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "761", type: "lrs", id: "13440" }
            ] 
        },
        CHEM203: {
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13988" }
            ] 
        },
        CHEM204 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1437" }
            ],
            2011 : [ 
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1482" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "001", type: "cool", id: "1522" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1576" },
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10286" }
            ] 
        },
        CHEM211 : { 
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "001", type: "cool", id: "1506" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "001", type: "cool", id: "1531" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1570" }
            ] 
        },
        CHEM212 : { 
            2010 : [ 
                { year: 2010, month: 09, semester: "Fall", section: "001", type: "cool", id: "1429" },
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1440" },
                { year: 2011, month: 05, semester: "Summer", section: "001", type: "cool", id: "1455" }
            ],
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1465" },
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1485" },
                { year: 2012, month: 05, semester: "Summer", section: "001", type: "cool", id: "1500" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "001", type: "cool", id: "1524" },
                { year: 2013, month: 05, semester: "Summer", section: "001", type: "cool", id: "1525" }
            ],
            2013 : [ 
                { year: 2014, month: 01, semester: "Winter", section: "001", type: "cool", id: "1553" },
                { year: 2014, month: 05, semester: "Summer", section: "001", type: "cool", id: "1560" }
            ],
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "cool", id: "1590" },
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "cool", id: "1593" }
            ] 
        },
        CHEM214 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1439" }
            ],
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11146" }
            ] 
        },
        CHEM222 : { 
            2010 : [ 
                { year: 2010, month: 09, semester: "Fall", section: "001", type: "cool", id: "1422" },
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1438" },
                { year: 2011, month: 05, semester: "Summer", section: "001", type: "cool", id: "1458" }
            ],
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1466" },
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1483" },
                { year: 2012, month: 05, semester: "Summer", section: "001", type: "cool", id: "1502" }
            ],
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "001", type: "cool", id: "1507" },
                { year: 2013, month: 01, semester: "Winter", section: "001", type: "cool", id: "1523" },
                { year: 2013, month: 05, semester: "Summer", section: "001", type: "cool", id: "1526" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "001", type: "cool", id: "1529" },
                { year: 2014, month: 01, semester: "Winter", section: "001", type: "cool", id: "1552" },
                { year: 2014, month: 05, semester: "Summer", section: "001", type: "cool", id: "1561" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1568" },
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10323" },
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "cool", id: "1584" },
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "cool", id: "1594" },
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "lrs", id: "11423" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "cool", id: "1601" },
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "cool", id: "1616" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14025" }
            ]   
        },
        CHEM232 : { 
            2010 : [ 
                { year: 2010, month: 09, semester: "Fall", section: "001", type: "cool", id: "1419" }
            ],
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1467" }
            ],
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "001", type: "cool", id: "1511" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "001", type: "cool", id: "1530" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1569" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13966" }
            ]  
        },
        CHEM281 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1436" }
            ],
            2011 : [ 
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1481" }
            ] 
        },
        CHEM302 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1441" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "001", type: "cool", id: "1521" }
            ] 
        },
        CHEM462 : { 
            2012 : [ 
                { year: 2012, month: 09, semester: "Fall", section: "001", type: "cool", id: "1512" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "001", type: "cool", id: "1537" }
            ] 
        },
        CHEM502 : { 
            2013 : [ 
                { year: 2014, month: 01, semester: "Winter", section: "001", type: "cool", id: "1556" }
            ] 
        },
        CIVE320 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10225" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11999" }
            ] 
        },
        CLAS203 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10001" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11700" }
            ] 
        },
        COMP202 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12237" },
                { year: 2016, month: 05, semester: "Summer", section: "001", type: "lrs", id: "13267" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14166" }
            ] 
        },
        COMP208 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13909" }
            ] 
        },
        COMP250 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10464" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12243" },
                { year: 2015, month: 09, semester: "Fall", section: "002", type: "lrs", id: "11806" },
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13068" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14171" }
            ]  
        },
        COMP251 : {
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14172" }
            ]  
        },
        COMP273 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13075" }
            ] 
        },
        COMP302 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13118" }
            ] 
        },
        COMP310 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13081" }
            ] 
        },
        COMP557 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10865" }
            ] 
        },
        DENT220D1 : { 
            2015 : [
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12642" }
            ]
        },
        DENT318J1 : { 
            2015 : [
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12324DE" }
            ]
        },
        DENT320J3 : { 
            2015 : [
                { year: 2016, month: 05, semester: "Summer", section: "001", type: "lrs", id: "13322" }
            ]
        },
        DENT323J1 : { 
            2015 : [
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12328" }
            ]
        },
        DENT411 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12339" }
            ] 
        },
        DENT412D2 : { 
            2015 : [
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12646" }
            ]
        },
        DENT413 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12341" }
            ] 
        },
        ECON208 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "004", type: "lrs", id: "11009" }
            ] 
        },
        ECON209 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "003", type: "lrs", id: "11010" }
            ] 
        },
        ECON230D1 : { 
            2014 : [
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10016" }
            ],
            2015 : [
                { year: 2015, month: 09, semester: "Fall", section: "002", type: "lrs", id: "11716" }
            ]
        },
        ECON257D1 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13591" }
            ] 
        },
        ECON313 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "002", type: "lrs", id: "10192" },
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "lrs", id: "11450" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "002", type: "lrs", id: "11953" }
            ] 
        },
        ECON314 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "9891" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11600" }
            ] 
        },
        ECSE211 : { 
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1468" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "001", type: "cool", id: "1519" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "001", type: "cool", id: "1539" },
                { year: 2014, month: 01, semester: "Winter", section: "001", type: "cool", id: "1548" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1567" },
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "cool", id: "1586" }
            ] 
        },
        ECON319 : {
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13676" }
            ]  
        },
        ECSE322 : { 
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1469" }
            ],
            2012 : [ 
                { year: 2013, month: 01, semester: "Winter", section: "001", type: "cool", id: "1520" }
            ],
            2013 : [ 
                { year: 2014, month: 01, semester: "Winter", section: "001", type: "cool", id: "1549" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1566" },
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "cool", id: "1587" }
            ] 
        },
        ECSE549 : { 
            2011 : [ 
                { year: 2011, month: 09, semester: "Fall", section: "001", type: "cool", id: "1470" }
            ],
            2013 : [ 
                { year: 2013, month: 09, semester: "Fall", section: "001", type: "cool", id: "1540" }
            ],
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "cool", id: "1565" }
            ] 
        },
        EPSC180 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11290" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13127" }
            ] 
        },
        EPSC201 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12270" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14200" }
            ] 
        },
        FACC100 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "002", type: "lrs", id: "11295" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "002", type: "lrs", id: "13441" }
            ] 
        },
        FINE682 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "065", type: "lrs", id: "13842" }
            ] 
        },
        GEOG200 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12169" }
            ] 
        },
        HIST249 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10371" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12145" }
            ] 
        },
        INDS111 : {
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13640" }
            ]  
        },
        INDS211 : {
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13688" }
            ]  
        },
        LAWG210 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11964" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13779" }
            ]  
        },
        LAWG273 : { 
            2015 : [ 
                { year: 2016, month: 05, semester: "Summer", section: "001", type: "lrs", id: "13346" }
            ] 
        },
        LAWG300 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12703" }
            ] 
        },
        LING201 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10887" }
            ] 
        },
        MATH323 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13020" }
            ] 
        },
        MATH595 : { 
            2014 : [ 
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "lrs", id: "11458" }
            ] 
        },
        MATH598 : { 
            2014 : [ 
                { year: 2015, month: 05, semester: "Summer", section: "001", type: "lrs", id: "11459" }
            ] 
        },
        MGCR222 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "006", type: "lrs", id: "10063" },
                { year: 2015, month: 01, semester: "Winter", section: "005", type: "lrs", id: "11337" },
                { year: 2015, month: 01, semester: "Winter", section: "006", type: "lrs", id: "10745" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "003", type: "lrs", id: "14046" },
                { year: 2016, month: 09, semester: "Fall", section: "005", type: "lrs", id: "14048" }
            ] 
        },
        MGCR331 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "751", type: "lrs", id: "10179" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "751", type: "lrs", id: "11870" },
                { year: 2016, month: 05, semester: "Summer", section: "751", type: "lrs", id: "13333" }
            ] 
        },
        MGCR341 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12413" }
            ] 
        },
        MGPO640 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10765" }
            ] 
        },
        MIMM212 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "9878" }
            ] 
        },
        MIMM214 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10715" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12479" }
            ] 
        },
        MIMM314 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11200" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13029" }
            ] 
        },
        MIMM323 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10424" }
            ] 
        },
        MIMM413 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11203" }
            ] 
        },
        NUR1420 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12025" }
            ] 
        },
        NUTR545 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11552" }
            ] 
        },
        OCC1551 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "13036" }
            ] 
        },
        OCCH608 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "088", type: "cool", id: "1447" }
            ] 
        },
        OCCH615 : { 
            2010 : [ 
                { year: 2011, month: 01, semester: "Winter", section: "001", type: "cool", id: "1450" }
            ],
            2011 : [ 
                { year: 2012, month: 01, semester: "Winter", section: "001", type: "cool", id: "1495" }
            ],
            2013 : [ 
                { year: 2014, month: 01, semester: "Winter", section: "001", type: "cool", id: "1558" }
            ] 
        },
        ORGB685 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11171" }
            ] 
        },
        PHGY209 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12213" },
                { year: 2015, month: 09, semester: "Fall", section: "002", type: "lrs", id: "12080" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14144" }
            ] 
        },
        PHGY210 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12906" },
                { year: 2016, month: 01, semester: "Winter", section: "002", type: "lrs", id: "13060" }
            ] 
        },
        PHGY212 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12107" }
            ] 
        },
        PHGY314 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12215" }
            ] 
        },
        PHIL210 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "9987" }
            ] 
        },
        PHTH440 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10806" }
            ] 
        },
        PHTH551 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "12229" }
            ] 
        },
        PHYS102 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12987" }
            ] 
        },
        POLI227 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12798" }
            ] 
        },
        POLI243 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10977" }
            ] 
        },
        POLI346 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10463" }
            ] 
        },
        POTH225 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12554" }
            ] 
        },
        POTH401 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11249" }
            ] 
        },
        POTH551 : { 
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14159" }
            ] 
        },
        POTH563 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11771" }
            ] 
        },
        POTH684 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "10736" }
            ],
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12500" }
            ] 
        },
        PSYC215 : { 
            2014 : [ 
                { year: 2015, month: 01, semester: "Winter", section: "001", type: "lrs", id: "11129" }
            ] 
        },
        PSYC331 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10132" }
            ],
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11817" }
            ] 
        },
        PSYC337 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10483" }
            ],
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "14190" }
            ] 
        },
        PSYC406 : {
            2016 : [ 
                { year: 2016, month: 09, semester: "Fall", section: "001", type: "lrs", id: "13830" }
            ] 
        },
        PSYC410 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10484" }
            ] 
        },
        SOCI225 : { 
            2015 : [ 
                { year: 2015, month: 09, semester: "Fall", section: "001", type: "lrs", id: "11839" }
            ] 
        },
        SOCI254 : { 
            2014 : [ 
                { year: 2014, month: 09, semester: "Fall", section: "001", type: "lrs", id: "10039" }
            ] 
        },
        SOCI265 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12600" }
            ] 
        },
        SOCI270 : { 
            2015 : [ 
                { year: 2016, month: 01, semester: "Winter", section: "001", type: "lrs", id: "12601" }
            ] 
        }
    };
    return recordingData;
}