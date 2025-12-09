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

function addGradeNeededCalculator() {
    function getDataFromTable(row, selection) {
    // 0: Points, 1: Weight Achieved, 2: Grade
        var index = 0;
        if (selection === 'points') {
            index = 0;
        }
        else if (selection === 'weightAchieved') {
            index = 1;
        }
        else if (selection === 'grade') {
            index = 2;

        } 
        else if (selection === 'gradeItem') {
            const nameCell = row.querySelector('th, td');
            const rowName = nameCell ? nameCell.textContent.trim() : '';
            return rowName;
        } else {
            return null;
        }
        

        
        const tds = row.querySelectorAll('td');
        const dataCell = tds[index];
        if (!dataCell) return null;

        const span = dataCell.querySelector('span');
        if (!span) return null;

        if (selection === 'grade') {
            const text = span.textContent.trim();   // e.g. "94 %"
            const match = text.match(/([\d.]+)/);   // captures 94 or 28.2
            return match ? parseFloat(match[1]) : null;
        }
        else if (selection === 'points' || selection === 'weightAchieved') {
            const text = span.textContent.trim();
            const match = text.match(/^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/); // captures "45 / 50" or "28.2 / 30"
            if (match) {
                const achieved = parseFloat(match[1]);
                const total = parseFloat(match[2]);
                console.log(`Achieved: ${achieved}, Total: ${total}`);
                return { achieved, total };
            }
        }
        

    }


    // Find all D2L-grade tables inside their wrappers
    const tables = document.querySelectorAll('d2l-table-wrapper table.d2l-table');
    let totalRows = 0; 
    let filledRows = 0;
    let weights = [];
    var missingGrade = null;
    let lastTableWrapper = null; // track the wrapper of the last processed table

    tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        if (!rows.length) return;

        // remember the wrapper of this table so we can insert the card after it
        lastTableWrapper = table.closest('d2l-table-wrapper') || table.parentElement;

        const headerRow = rows[0];

        // Avoid adding the column more than once
        const hasPredicted = Array.from(headerRow.cells).some(cell =>
            cell.textContent.trim().toLowerCase() === 'Predicted Grade (%)'
        );
        if (hasPredicted) return;


        totalRows = rows.length - 1; // Exclude header row
        filledRows = 0;
  

        rows.forEach((row, index) => {
         
            if (index === 0) {
                // Header cell
                const th = document.createElement('th');
                th.scope = 'col';
                th.textContent = 'Predicted Grade (%)';
                row.appendChild(th);
            } else {
                // Data cell
                const td = document.createElement('td');
                const rowGrade = getDataFromTable(row, "grade");
                td.innerHTML = `<input type="number" id="grade${index}" name="grade%" min="0" max="200" placeholder=${rowGrade} style="height: 60%; width: 80%;padding: 8px; font-size: 16px">`;
                row.appendChild(td);
                if (rowGrade !== 0 ) {
                    filledRows += 1;
                }
                weights[index - 1] = getDataFromTable(row, "weightAchieved");
                if (rowGrade === 0){
                    missingGrade = [index - 1, getDataFromTable(row, "gradeItem")];
                }
            }
            
        });
        
    });

    var gradeCardText = 'Placeholder text for the grade calculator card';


    console.log(`Total Rows: ${totalRows}, Filled Rows: ${filledRows}`);
    var totalGrade = 0;
    if (filledRows === (totalRows)) {
        for (let i = 1; i <= weights.length; i++) {
            totalGrade += weights[i-1].achieved;
        }

        gradeCardText = `All Grades Entered! Your final grade is: ${totalGrade}%`;
    }

    else if (filledRows === (totalRows - 1)) {
        for (let i = 1; i <= weights.length; i++) {
            totalGrade += weights[i-1].achieved;
        }

        gradeCardText = `To get an A (85%), you need to score at least: ${Math.max(0, (85 - totalGrade) / weights[missingGrade[0]].total * 100).toFixed(2)}% on ${missingGrade[1]}.`;
    }
    else {
        gradeCardText = `Please fill in all grades except one to calculate the needed grade for that item.`;
    }


    // Avoid adding the card more than once
    if (!document.getElementById('me-grade-card')) {
        const card = document.createElement('div');
        card.id = 'me-grade-card';
        card.textContent = gradeCardText;

        Object.assign(card.style, {
            // no `position: fixed` so it scrolls with the page
            margin: '8px auto 0', // smaller top margin so it's close to the element above
            maxWidth: '600px',
            padding: '16px 24px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: '14px',
        });

        // Insert the card right after the last processed table wrapper so it sits close
        if (lastTableWrapper && lastTableWrapper.parentNode) {
            lastTableWrapper.insertAdjacentElement('afterend', card);
        } else {
            // fallback: append to body
            document.body.appendChild(card);
        }
    }



}




//Table class:
// d2l-table d2l-grid d_gl

