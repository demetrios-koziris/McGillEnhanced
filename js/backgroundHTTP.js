/**
 * Possible parameters for request:
 *  action: "xhttp" for a cross-origin HTTP request
 *  method: Default "GET"
 *  url   : required, but not validated
 *
 * The callback function is called upon completion of the request */
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.action == "xhttp") {
        var xhttp = new XMLHttpRequest();
        var method = request.method ? request.method.toUpperCase() : 'GET';

        var data = {
            responseXML : "",
            url: request.url
        };

        xhttp.timeout = 800;

        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    console.log(xhttp.status + " " + JSON.stringify(data));
                    data.responseXML = this.responseText;
                    callback(data);
                }
                else {
                    console.log(xhttp.status + JSON.stringify(data));
                    data.responseXML = "error";
                    callback(data);
                }
            }
        };

        xhttp.open(method, request.url, true);
        if (method == 'POST') {
            xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhttp.send();
        return true; // prevents the callback from being called too early on return
    }
});