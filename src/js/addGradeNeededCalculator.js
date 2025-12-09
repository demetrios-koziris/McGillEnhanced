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
    let needsToBeCalculated = false;
    let gradeCardText = "";

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
        needsToBeCalculated = true;
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

        if ( missingGrade && needsToBeCalculated ) {
            const intro = document.createElement('p');
            intro.style.margin = '0 0 12px';
            intro.textContent = gradeCardText;
            card.appendChild(intro);

            const controls = document.createElement('div');
            controls.style.display = 'flex';
            controls.style.flexWrap = 'wrap';
            controls.style.gap = '8px';
            card.appendChild(controls);

            const label = document.createElement('label');
            label.textContent = 'Target grade:';
            label.setAttribute('for', 'me-target-grade-select');
            label.style.fontWeight = '600';
            controls.appendChild(label);

            const select = document.createElement('select');
            select.id = 'me-target-grade-select';
            select.style.flex = '1';
            select.style.padding = '6px 8px';
            select.style.fontSize = '14px';
            controls.appendChild(select);

            const gradeOptions = [
                { label: 'A (4.0): 85-100%', value: 85 },
                { label: 'A- (3.7): 80-84%', value: 80 },
                { label: 'B+ (3.3): 75-79%', value: 75 },
                { label: 'B (3.0): 70-74%', value: 70 },
                { label: 'B- (2.7): 65-69%', value: 65 },
                { label: 'C+ (2.3): 60-64%', value: 60 },
                { label: 'C (2.0): 55-59%', value: 55 },
                { label: 'D (1.0): 50-54%', value: 50 },
                { label: 'F (0.0): 0-49%', value: 49 },
                { label: 'Custom target', value: 'custom' }
            ];

            gradeOptions.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.dataset.label = optionData.label;
                option.textContent = optionData.label;
                select.appendChild(option);
            });

            const customContainer = document.createElement('div');
            customContainer.style.display = 'none';
            customContainer.style.marginTop = '8px';
            card.appendChild(customContainer);

            const customInput = document.createElement('input');
            customInput.type = 'number';
            customInput.id = 'me-target-grade-custom';
            customInput.placeholder = 'Enter custom %';
            customInput.min = '0';
            customInput.max = '100';
            customInput.style.width = '100%';
            customInput.style.padding = '6px 8px';
            customInput.style.fontSize = '14px';
            customContainer.appendChild(customInput);

            const resultText = document.createElement('p');
            resultText.style.marginTop = '12px';
            resultText.style.fontWeight = '600';
            card.appendChild(resultText);

            const updateNeededScore = (targetPercent, labelText) => {
                const missingWeight = weights[missingGrade[0]];
                if (!missingWeight || !missingWeight.total) {
                    resultText.textContent = 'Missing grade data to perform this calculation.';
                    return;
                }

                if (isNaN(targetPercent)) {
                    resultText.textContent = 'Enter a valid target percentage.';
                    return;
                }

                const achievedWithoutMissing = totalGrade - (missingWeight.achieved || 0);
                const numerator = targetPercent - achievedWithoutMissing;
                const neededRaw = (numerator / missingWeight.total) * 100;
                const neededScore = Math.max(0, neededRaw);

                const labelDescription = labelText || `${targetPercent}%`;
                resultText.textContent = `To get ${labelDescription}, you need at least ${neededScore.toFixed(2)}% on ${missingGrade[1]}.`;
            };

            select.addEventListener('change', () => {
                if (select.value === 'custom') {
                    customContainer.style.display = 'block';
                    customInput.focus();
                    updateNeededScore(parseFloat(customInput.value), `your custom target of ${customInput.value || '?'}%`);
                } else {
                    customContainer.style.display = 'none';
                    const selectedOption = select.options[select.selectedIndex];
                    const target = parseFloat(select.value);
                    updateNeededScore(target, selectedOption.dataset.label);
                }
            });

            customInput.addEventListener('input', () => {
                const customValue = parseFloat(customInput.value);
                updateNeededScore(customValue, `your custom target of ${customValue || '?'}%`);
            });

            const firstOption = select.options[0];
            updateNeededScore(parseFloat(firstOption.value), firstOption.dataset.label);
        } else {
            card.textContent = gradeCardText;
        }

        if (lastTableWrapper && lastTableWrapper.parentNode) {
            lastTableWrapper.insertAdjacentElement('afterend', card);
        } else {
            // fallback: append to body
            document.body.appendChild(card);
        }
    }



}




//TODO: Add an edge case if there is a total grade at the top
//TODO: Make it so it works if the grade is undefined instead of 0
//TODO: Make it so it updates dynamically as you type in grades, update the ones with values
//TODO: Add up all the total possilbe points, if it is less than 100, add the option to add a 'final' which gets the remaining amount of points
//TODO: Make it so you can add your own points if it is missing