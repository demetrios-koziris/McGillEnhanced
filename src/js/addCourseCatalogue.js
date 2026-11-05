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


// The Course Catalogue (a Courseleaf/Leepfrog site) replaced the eCalendar course pages
// for the 2025-2026 academic year. Its markup is completely different from the eCalendar,
// so everything in this file targets the catalogue's own DOM.
//
// Course page anatomy (https://coursecatalogue.mcgill.ca/courses/comp-202):
//   body.course-page
//     #col-nav > #edition, aside#sidebar          <- where the enhanced sidebar goes
//     #col-content > main#contentarea
//       h1.page-title
//       #textcontainer.page_content > .courseblock
//         .row > .detail-credits / .detail-offered_by / .detail-terms_offered
//         .row > .section--description
//         .row > .detail-note_text
//         .row > .detail-vsb
//
// Program page anatomy: #contentarea table.sc_courselist > tbody > tr > td.codecol

const courseCatalogueHost = 'coursecatalogue.mcgill.ca';
const courseCatalogueCoursePathRegex = /\/courses\/([a-z]{3,4}[0-9]?)-([0-9]{3}[a-z]?[0-9]?)(?:\/index\.html)?\/?$/i;
// Program URLs look like /en/undergraduate/science/programs/<subject>/<program-slug>/
const courseCatalogueProgramPathRegex = /\/programs\//i;


function isCourseCataloguePage() {
	return window.location.hostname.replace(/^www\./, '') === courseCatalogueHost;
}


function isCourseCatalogueCoursePage() {
	return isCourseCataloguePage() && courseCatalogueCoursePathRegex.test(window.location.pathname);
}


function isCourseCatalogueProgramPage() {
	return isCourseCataloguePage() && !isCourseCatalogueCoursePage() && courseCatalogueProgramPathRegex.test(window.location.pathname);
}


/**
 * Build the catalogue URL for a course
 * @param subjectCode: e.g. 'COMP'
 * @param numberCode: e.g. '202'
 */
function courseCatalogueURL(subjectCode, numberCode) {
	return 'https://' + courseCatalogueHost + '/courses/' + subjectCode.toLowerCase() + '-' + numberCode.toLowerCase();
}


/**
 * Populate the global variables that the shared enhancement scripts rely on.
 * Mirrors what initEnhancement does for eCalendar pages, but sourced from the catalogue.
 */
function setupCourseCatalogueGlobals() {

	const pathMatch = window.location.pathname.match(courseCatalogueCoursePathRegex);
	if (pathMatch) {
		urlCourseName = (pathMatch[1] + '-' + pathMatch[2]).toUpperCase();
		courseSubject = pathMatch[1].toUpperCase();
		courseNumber = pathMatch[2].toUpperCase();
		courseName = courseSubject + courseNumber;
		courseNameSpaced = courseSubject + ' ' + courseNumber;
	}

	courseNameRegex = /([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
	courseUrlRegex = /coursecatalogue\.mcgill\.ca\/courses\/[A-Za-z]{3,4}[0-9]{0,1}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1}/i;

	sysDate = new Date();
	sysYear = sysDate.getFullYear();
	sysMonth = sysDate.getMonth()+1;
	sysCode = translateToTermCode(sysYear, sysMonth);

	currentTermYear = sysYear;
	currentTermMonth = (sysMonth>=9 ? 9 : (sysMonth>=5 ? 5 : 1));

	lang = (window.location.pathname.match(/\/fr\//) ? 'fr' : 'en');
	termNames = {
		'en': {
			9: 'Fall',
			1: 'Winter',
			5: 'Summer'
		},
		'fr': {
			9: 'Automne',
			1: 'Hiver',
			5: 'Été'
		}
	};
	numYearsInMenu = 10;
	firstYear = Math.max(sysYear-numYearsInMenu+1, 2009);

	const edition = getCourseCatalogueEdition();
	urlYearF = edition.startYear;
	urlYearW = edition.endYear;
	urlYears = urlYearF + '-' + urlYearW;
}


/**
 * Determine the academic year the catalogue edition covers.
 * Prefers the "2026-2027" edition header, then the terms offered for this course.
 */
function getCourseCatalogueEdition() {

	const editionElem = document.getElementById('edition') || document.querySelector('.sidebar-header');
	const editionText = editionElem ? editionElem.textContent : '';
	const editionMatch = editionText.match(/(20[0-9]{2})\s*[-\u2013\u2014]\s*(20[0-9]{2})/);
	if (editionMatch) {
		return {
			startYear: parseInt(editionMatch[1], 10),
			endYear: parseInt(editionMatch[2], 10)
		};
	}

	const terms = getCourseCatalogueTerms();
	let startYear = null;
	for (let t = 0; t < terms.length; t++) {
		if (terms[t].term === 'fall') {
			startYear = parseInt(terms[t].code.slice(0, 4), 10);
			break;
		}
	}
	if (startYear === null && terms.length > 0) {
		startYear = parseInt(terms[0].code.slice(0, 4), 10);
	}
	if (startYear === null) {
		startYear = (sysMonth >= 9 ? sysYear : sysYear - 1);
	}

	return { startYear: startYear, endYear: startYear + 1 };
}


/**
 * Read the "Terms offered" line of a catalogue course page and turn each term
 * into the {term, name, code, vsbURL} shape the sidebar expects.
 */
function getCourseCatalogueTerms() {

	const termsElem = document.querySelector('.detail-terms_offered .value');
	const termsText = termsElem ? termsElem.textContent : '';

	// Maps each season name (English and French) to its term key and month code
	const termSeasons = {
		fall: { term: 'fall', month: '09' },
		automne: { term: 'fall', month: '09' },
		winter: { term: 'winter', month: '01' },
		hiver: { term: 'winter', month: '01' },
		summer: { term: 'summer', month: '05' },
		'été': { term: 'summer', month: '05' },
		'ete': { term: 'summer', month: '05' }
	};

	const terms = [];
	const termRegex = /(Fall|Winter|Summer|Automne|Hiver|[ÉE]t[ée])\s+(20[0-9]{2})/gi;
	let termMatch;
	while ((termMatch = termRegex.exec(termsText)) !== null) {

		const season = termSeasons[termMatch[1].toLowerCase()];
		if (!season) {
			continue;
		}
		const code = termMatch[2] + season.month;

		terms.push({
			term: season.term,
			name: termMatch[1] + ' ' + termMatch[2],
			code: code,
			vsbURL: 'https://vsb.mcgill.ca/vsb/criteria.jsp?term=' + code + '&course_0_0=' + courseSubject + '-' + courseNumber + '&ca_0_0=&bbs='
		});
	}

	return terms;
}


/**
 * Replace every course code inside the given element's text with a link to the
 * matching Course Catalogue page. Only text nodes are touched so existing markup
 * (and attributes) stay intact.
 */
function linkifyCourseCodes(element) {

	if (!element) {
		return;
	}

	const codeRegex = /([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g;
	const skipParents = ['A', 'SCRIPT', 'STYLE', 'H1'];

	const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
	const textNodes = [];
	while (walker.nextNode()) {
		textNodes.push(walker.currentNode);
	}

	for (let n = 0; n < textNodes.length; n++) {

		const textNode = textNodes[n];
		const parent = textNode.parentNode;
		if (!parent || skipParents.indexOf(parent.nodeName) !== -1) {
			continue;
		}

		const text = textNode.nodeValue;
		codeRegex.lastIndex = 0;
		if (!codeRegex.test(text)) {
			continue;
		}
		codeRegex.lastIndex = 0;

		const fragment = document.createDocumentFragment();
		let lastIndex = 0;
		let codeMatch;
		while ((codeMatch = codeRegex.exec(text)) !== null) {
			fragment.appendChild(document.createTextNode(text.slice(lastIndex, codeMatch.index)));
			const link = document.createElement('a');
			link.href = courseCatalogueURL(codeMatch[1], codeMatch[2]);
			link.textContent = codeMatch[0];
			fragment.appendChild(link);
			lastIndex = codeMatch.index + codeMatch[0].length;
		}
		fragment.appendChild(document.createTextNode(text.slice(lastIndex)));

		parent.replaceChild(fragment, textNode);
	}
}


/**
 * Insert a labelled separator above each content block of a catalogue course page.
 * The catalogue hides its own section headings, so these also act as the labels.
 */
function addCourseCatalogueSeparators() {

	const courseBlock = document.querySelector('#textcontainer .courseblock');
	if (!courseBlock) {
		logForDebug('Course catalogue: .courseblock not found; skipping separators.');
		return;
	}

	const sectionConfigs = [
		{ label: 'OVERVIEW', selector: '.detail-credits, .detail-offered_by, .detail-terms_offered' },
		{ label: 'DESCRIPTION', selector: '.section--description' },
		{ label: 'NOTES', selector: '.detail-note_text' }
	];

	for (let s = 0; s < sectionConfigs.length; s++) {

		const sectionConfig = sectionConfigs[s];
		const targetElem = courseBlock.querySelector(sectionConfig.selector);
		if (!targetElem) {
			logForDebug('Course catalogue: no block found for ' + sectionConfig.label);
			continue;
		}

		const row = targetElem.closest('.row') || targetElem;
		if (!row.parentNode || row.dataset.mcenSeparated) {
			continue;
		}

		const separator = generateMainContentSeparator(sectionConfig.label);
		separator.className += ' mcen-course-catalogue-separator';
		row.parentNode.insertBefore(separator, row);
		row.dataset.mcenSeparated = 'true';
	}
}


/**
 * Build the McGill Enhanced sidebar and place it in the catalogue's left column,
 * above the catalogue's own navigation.
 */
function makeCourseCatalogueSidebar() {

	const colNav = document.getElementById('col-nav');
	if (!colNav) {
		logForDebug('Course catalogue: #col-nav not found; skipping sidebar.');
		return;
	}

	const terms = getCourseCatalogueTerms();
	const contentElem = document.getElementById('textcontainer') || document.getElementById('contentarea');
	const deps = getCourseSubjectsFromContent(contentElem ? contentElem.innerHTML : '');

	const sidebar = document.createElement('div');
	sidebar.className = 'mcen-sidebar mcen-course-catalogue-sidebar';
	sidebar.id = 'sidebar-column';
	sidebar.appendChild(generateSidebarLinksBlock(terms, deps, {
		withinYearRangeVSB: (sysYear==urlYearF) || (sysYear==urlYearW && sysMonth<9),
		// The catalogue has no per-subject course listing and no related-programs block.
		includeCourseSubjects: false,
		includeRelatedPrograms: false
	}));

	const editionElem = document.getElementById('edition');
	if (editionElem && editionElem.parentNode === colNav) {
		colNav.insertBefore(sidebar, editionElem.nextSibling);
	}
	else {
		colNav.appendChild(sidebar);
	}

	sidebarTooltipsy('minervaWarning');
}


/**
 * Append the crowdsourced class averages block to a catalogue course page.
 */
function addCourseCatalogueClassAverages() {

	const contentArea = document.getElementById('contentarea');
	if (!contentArea) {
		logForDebug('Course catalogue: #contentarea not found; skipping class averages.');
		return;
	}

	const averagesContainer = document.createElement('div');
	averagesContainer.id = 'mcen-course-catalogue-averages';
	averagesContainer.className = 'mcen-container';
	averagesContainer.appendChild(generateMainContentSeparator('CLASS AVERAGES'));
	averagesContainer.appendChild(generateAveCrowdsourceSection({
		linkYears: false,
		filterByFirstYear: false
	}));

	contentArea.appendChild(averagesContainer);
}


/**
 * Inject the stylesheets used by the catalogue enhancements.
 * These only style elements McGill Enhanced creates itself, so they are injected
 * here (at document_idle, alongside those elements) rather than at document_start.
 */
function injectCourseCatalogueCSS() {
	injectCSS('css/courseCatalogue.css');
	injectCSS('css/sidebar.css');
	injectCSS('css/aveCrowdsource.css');
}


/**
 * Full enhancement pass for a Course Catalogue course page.
 */
function enhanceCourseCatalogueCoursePage() {

	setupCourseCatalogueGlobals();
	injectCourseCatalogueCSS();

	makeCourseCatalogueSidebar();
	addCourseCatalogueSeparators();

	const textContainer = document.getElementById('textcontainer');
	linkifyCourseCodes(textContainer);

	addCourseCatalogueClassAverages();

	addCourseTitleTooltips();
	applyToolTipsy();
}


/**
 * Enhancement pass for a Course Catalogue program page: turn the course-code
 * column of each course list into links to the catalogue course pages.
 */
function enhanceCourseCatalogueProgramPage() {

	setupCourseCatalogueGlobals();
	injectCourseCatalogueCSS();

	const codeCells = document.querySelectorAll('#contentarea td.codecol');
	for (let c = 0; c < codeCells.length; c++) {

		const cell = codeCells[c];
		if (cell.querySelector('a')) {
			continue;
		}

		const cellText = cell.textContent.trim();
		const codeMatch = cellText.match(/^([A-Z]{3,4}[0-9]{0,1})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})$/);
		if (!codeMatch) {
			continue;
		}

		const link = document.createElement('a');
		link.href = courseCatalogueURL(codeMatch[1], codeMatch[2]);
		link.textContent = cellText;
		cell.textContent = '';
		cell.appendChild(link);
	}

	addCourseTitleTooltips();
	applyToolTipsy();
}


// Self-initialising entry point, matching the pattern used by preInit.js and
// initEnhancement.js. Runs only when the extension has not been disabled.
if (isCourseCataloguePage()) {

	getStorageValue('enabled')
		.then(function(enabledSetting) {

			if (enabledSetting === false) {
				return;
			}

			const start = Date.now();

			if (isCourseCatalogueCoursePage()) {
				enhanceCourseCatalogueCoursePage();
			}
			else if (isCourseCatalogueProgramPage()) {
				enhanceCourseCatalogueProgramPage();
			}
			else {
				return;
			}

			const time = Date.now() - start;
			console.log('McGill Enhanced took ' + time + ' ms to improve this page!');
		})
		.catch(function(error) {
			console.error('McGill Enhanced: error fetching storage value:', error);
		});
}
