function get_xhr(nametoprint, path, handler, error_handler) {
    //TODO
    // handle response even if http code is not 200 family
    if (typeof error_handler === 'undefined') {
        error_handler = function() {};
    }

    let xhr = new XMLHttpRequest();

    xhr.open("GET", encodeURI(path))

    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
    xhr.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
    xhr.setRequestHeader("Pragma", "no-cache");

    xhr.onload = function() {
         let rc = xhr.status

        if (rc >= 200 && rc < 300) {
            handler(xhr.response)
        } else {
            alert("Unable to get " + path)
            error_handler()
        }
    }

    xhr.onerror = function() {
        console.log(nametoprint + " -> Network Error");
        error_handler()
    }

    xhr.onprogress = function(event) {
        // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        console.log(nametoprint + " -> Received", event.loaded, event.total);
    }

    xhr.send()
}

export {get_xhr}
