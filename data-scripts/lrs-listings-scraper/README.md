# lrs-listings-scraper

### Setup

Make sure you have the latest version of pip and virtualenv installed:
```
$ pip install --upgrade pip
$ pip install virtualenv
```

Create a virtualenv then activate the virtualenv:
```
$ virtualenv virtenv
$ source virtenv/bin/activate
```

Install dependencies
```
$ pip install -r requirements.txt
```
Note that if you install more libraries that are required, update requirements.txt  


### Running

Scrape, format, then copy output to extension src
```
$ python scrape_lrs.py
$ python format-lrs-json.py
$ cp out/dataRecordings.js ../../src/js/dataRecordings.js
```