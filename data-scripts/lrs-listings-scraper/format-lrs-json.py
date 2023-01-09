import json

file_string = """/*
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
\tlet monthToSemester = {
\t\t1: "Winter",
\t\t5: "Summer",
\t\t9: "Fall"
\t};
\treturn monthToSemester;
}

function getRecordingData() {
\tlet recordingData = {"""

formatted_json = ''

with open('lrs_data_4_3_26.json', 'r') as input_file:
	data = json.load(input_file)

	for course_name, course_data in data.items():
		formatted_json += '\n\t\t"' + course_name + '": [\n\t\t\t'
		formatted_json += ',\n\t\t\t'.join([json.dumps(course_instance) for course_instance in course_data]) + '\n\t\t],'

	formatted_json.removesuffix(',')

file_string += formatted_json
file_string += '\n\t};\n\treturn recordingData;\n}'

with open('dataRecordings.js', 'w') as output_file:
	output_file.write(file_string)
