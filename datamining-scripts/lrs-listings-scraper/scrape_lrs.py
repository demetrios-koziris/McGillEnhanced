import mechanicalsoup
import re
from collections import OrderedDict
import json


def main():
	browser = mechanicalsoup.StatefulBrowser()
	print("Retrieving lrs page")
	browser.open('http://lrs.mcgill.ca/')
	
	terms = scrape_lrs_terms(browser)
	lrs_data = sort_lrs_data(scrape_lrs_data(terms, browser))
	export_json(lrs_data, 'lrs_data.json')


def scrape_lrs_terms(browser):
	print("Retrieving terms from lrs page")
	if (browser.get_url() != 'http://lrs.mcgill.ca/'):
		print("Retrieving lrs page")
		browser.open('http://lrs.mcgill.ca/')
		
	options = browser.get_current_page().find(id='DropDownListSemesterID').find_all('option')
	return [opt.get('value') for opt in options if re.match('20[0-9]{2}0[159]', opt.get('value'))]


def scrape_lrs_data(terms, browser):
	lrs_data = {}
	for term in terms:
		
		term_listings = scrape_term_lrs_data(term, browser)
		for listing in term_listings:
			
			ordered_listing_data = OrderedDict()
			ordered_listing_data['year'] = listing['year']
			ordered_listing_data['month'] = listing['month']
			ordered_listing_data['section'] = listing['section']
			ordered_listing_data['id'] = listing['id']
			
			course_code = listing['course']
			if course_code not in lrs_data:
				lrs_data[course_code] = []
				
			lrs_data[course_code].append(ordered_listing_data)

	return lrs_data


def scrape_term_lrs_data(term, browser):
	if (browser.get_url() != 'http://lrs.mcgill.ca/'):
		print("Retrieving lrs page")
		browser.open('http://lrs.mcgill.ca/')

	print("Retrieving lrs data from term " + term)
	open_lrs_page(term, browser)

	lrs_listings = []
	links = browser.get_current_page().find_all('a')
	for link in links:
		course = link.contents[0].text.split('-')
		course_code = course[0] + course[1]
		lrs_listings.append({
			'course': course_code,
			'year': int(term[:4]),
			'month': int(term[-1]),
			'section': course[2],
			'id': link.get('href').split('CourseID=')[1]
		})

	return lrs_listings


def open_lrs_page(term, browser):
	form = browser.select_form('#form1')
	form.set('DropDownListSemesterID', term)
	browser.submit_selected()


def sort_lrs_data(lrs_data):
	sorted_lrs_data = OrderedDict()
	for course in sorted(lrs_data):
		sorted_lrs_data[course] = lrs_data[course]
	return sorted_lrs_data


def export_json(lrs_data, file_name):
	with open(file_name, 'w') as fp:
		json.dump(lrs_data, fp, sort_keys=False, indent=4)


main()