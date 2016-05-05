url = window.location.href;

if (url.match(/.+vsb\.mcgill\.ca\/results\.jsp\?session\_[0-9]{6}.+/) != null) {

	window.debugMode = false;
	if(window.debugMode){console.log("VSB Enhanced Debug mode is ON");}



    var button = document.createElement('input')
    button.setAttribute("type", "button");
    button.setAttribute("value", "McGill Enhanced Registration Feature: Click to Automatically Register in Minerva! (Must be already signed in)");
    button.setAttribute("onclick", register.toString() +  " register();");
    button.style.width = "271px";
    button.style.height = "70px";
    button.style.margin = "9px"
    button.style.whiteSpace =  "normal";


    box = document.getElementById("printable");
    box.appendChild(button);


     document.addEventListener("register", function(data) {

     	var termCode = url.match(/.+session\_([0-9]{6})\=/)[1]
	    if(window.debugMode){console.log(termCode)}

	    var xmlRequestInfo = {
	        method: 'GET',
	        action: 'xhttp',
	        url: 'https://horizon.mcgill.ca/pban1/bwskfreg.P_AltPin?term_in=' + termCode
	    }
	    console.log(xmlRequestInfo);
	    chrome.runtime.sendMessage(xmlRequestInfo, function(data) {
	        try {

	        	

	        	var div = document.createElement('div');
	            var getURLHTML = data.responseXML;
	            var html = document.createElement('div');
	            html.innerHTML = getURLHTML;
	            if(window.debugMode){console.log(html);}

	            registrationForm = html.getElementsByTagName('form');
	            //registrationForm.setAttribute("action", "https://horizon.mcgill.ca/pban1/bwckcoms.P_Regs");
	            //console.log(registrationForm);
	            //inputs = registrationForm.getElementsByTagName('input');
	            //div.appendChild(inputs[inputs.length-1]);
	            //div.appendChild(inputs[inputs.length-2]);
	            //console.log(registrationForm);
	            //registrationForm.submit();

	            crns = document.getElementById('cartCrns').value.split(" ");;
	      		// crnsElements = document.getElementsByClassName('crn_value');
			    // if(window.debugMode){console.log(crnsElements);}
			    // for (c=0; c<crnsElements.length; c++) {
			    // 	crns[c] = crnsElements[c].innerHTML;
			    // }
				if(window.debugMode){console.log(crns);}

				

	           
	            regURL = 'https://horizon.mcgill.ca/pban1/bwckcoms.P_Regs?term_in=' + termCode
	            regURL += '&RSTS_IN=DUMMY'
	            regURL += '&assoc_term_in=DUMMY'
	            regURL += '&CRN_IN=DUMMY'
	            regURL += '&start_date_in=DUMMY'
	            regURL += '&end_date_in=DUMMY'
	            regURL += '&SUBJ=DUMMY'
	            regURL += '&CRSE=DUMMY'
	            regURL += '&SEC=DUMMY'
	            regURL += '&LEVL=DUMMY'
	            regURL += '&CRED=DUMMY'
	            regURL += '&GMOD=DUMMY'
	            regURL += '&TITLE=DUMMY'
	            regURL += '&MESG=DUMMY'
	            regURL += '&REG_BTN=DUMMY'

	            var i = 15;
	            while(registrationForm[1][i].value == 'DUMMY') {
	            	regURL += '&MESG=' + 			registrationForm[1][i].value
					regURL += '&RSTS_IN='
					regURL += '&assoc_term_in=' + 	registrationForm[1][i+2].value
					regURL += '&CRN_IN=' + 			registrationForm[1][i+3].value
					regURL += '&start_date_in=' + 	registrationForm[1][i+4].value.replace(/\//g, "%2F");
					regURL += '&end_date_in=' + 	registrationForm[1][i+5].value.replace(/\//g, "%2F");
					regURL += '&SUBJ=' + 			registrationForm[1][i+6].value
					regURL += '&CRSE=' + 			registrationForm[1][i+7].value
					regURL += '&SEC=' + 			registrationForm[1][i+8].value
					regURL += '&LEVL=' + 			registrationForm[1][i+9].value
					regURL += '&CRED=++++' + 		registrationForm[1][i+10].value.trim()
					regURL += '&GMOD=' + 			registrationForm[1][i+11].value
					regURL += '&TITLE=' + 			registrationForm[1][i+12].value.replace(/ /g, "+");
					i += 13;
	            }

				for (c=0; c<10; c++) {
					regURL += '&RSTS_IN=RW'
					regURL += '&CRN_IN=' 
					if (c < crns.length) {
						regURL += crns[c]
					}
					regURL += '&assoc_term_in='
					regURL += '&start_date_in='
					regURL += '&end_date_in='
				}

				regURL += '&regs_row=7'
				regURL += '&wait_row=0'
				regURL += '&add_row=10'
				regURL += '&REG_BTN=Submit+Changes'


				//window.location = regURL;
				var win = window.open(regURL, '_blank');
  				win.focus();
				if(window.debugMode){console.log(regURL)};

	        }
	        catch(err) {
	            console.log(err);
	            alert("You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page.");
	        	window.location = 'https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin';
	        }
	    });

	});


}




function register() {

    var event = document.createEvent('Event');
    event.initEvent('register');
    document.dispatchEvent(event);
	
}
