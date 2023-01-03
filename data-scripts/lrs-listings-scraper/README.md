# lrs-listings-scraper

### Setup

Make sure you have the latest version of pip and virtualenv installed:
```
$ pip install --upgrade pip
$ pip install virtualenv
```

Create a virtualenv and set it to use python3 (if your python3 is installed in a different location, set the path from `/usr/bin/python3` to that location) then activate the virtualenv:
```
$ virtualenv -p /usr/bin/python3 virtenv
$ source virtenv/bin/activate
```

Install dependencies
```
$ pip install -r requirements.txt
```

Note that if you install more libraries that are required, update requirements.txt  
You can add all current installed libraries to requirements.txt with:
```
$ pip freeze > requirements.txt 
```

### Running

Run scrape_lrs.py:
```
$ python scrape_lrs.py
```