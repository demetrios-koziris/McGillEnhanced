const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');


const url = 'http://www.mcgill.ca/study/2018-2019/courses/search?page='; // Change the year here to get the most recent course list

const json = {}; // Where all results are stored

async function main() {
    // Go over all pages listing McGill courses
    let pageIndex = 0;
    let success = false;

    do {
        success = await getAllDescriptionsOnPage(pageIndex);
        pageIndex++;
    } while (success); // Keep going until we reach the end of the course list

    console.log('Done! Final page index: ' + pageIndex);

    fs.writeFile('output-coursetitles.json', JSON.stringify(json, null, 4), (err) => {
        if (!err) {
            console.log('Saved all data in output-coursetitles.json');
        } else {
            console.error('Error occurred while trying to save the output file');
        }
    });
}

main();

function getAllDescriptionsOnPage(pageIndex) {
    return new Promise((resolve, reject) => {
        console.log('Getting ' + (url + pageIndex));
        request(url + pageIndex, (error, response, html) => {
            if (!error) {
                const $ = cheerio.load(html);
                let matchFound = false;

                // Find all links that match the course URL
                $('a').each((index, value) => {
                    const el = $(value);
                    const url = el.attr('href');
                    if (url) {
                        const urlMatch = url.match(/courses\/([a-zA-Z0-9]+-[a-zA-Z0-9]+)/);
                        if (urlMatch) {
                            const urlCourseName = urlMatch[1].toUpperCase();
                            json[urlCourseName] = el.text();
                            matchFound = true;
                        }
                    }
                });

                if (!matchFound) {
                    resolve(false); // We have reached the end of the results: Stop
                } else {
                    resolve(true);
                }
            } else {
                console.error('An error occurred while trying to retrieve a page');
                resolve(false);
            }
        });
    });
}
