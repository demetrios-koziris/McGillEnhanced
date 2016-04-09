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
        var url = request.url;

        var data = {
            responseXML : "",
            url: url
        };

        xhttp.onload = function() {
            data.responseXML = this.responseText;
            callback(data);
        };
        xhttp.onerror = function() {
            // Do whatever you want on error. Don't forget to invoke the
            // callback to clean up the communication port.
            callback();
        };
        xhttp.open(method, request.url, false);
        if (method == 'POST') {
            xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhttp.send();
        return true; // prevents the callback from being called too early on return
    }
});