const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function clearEmpties(o) {
    for (var k in o) {
        if (!o[k] || typeof o[k] !== "object") {
            continue // If null or not an object, skip to the next iteration
        }

        // The property is an object
        clearEmpties(o[k]); // <-- Make a recursive call on the nested object
        if (Object.keys(o[k]).length === 0) {
            delete o[k]; // The object had no properties, so delete that property
        }
    }
}

function isObjEmpty(obj) {
    for (let i in obj) return false;
    return true;
}

function get_xhr(nametoprint, path, handler, error_handler) {
    //TODO
    // handle response even if http code is not 200 family
    if (typeof error_handler === 'undefined') {
        error_handler = function () { };
    }

    let xhr = new XMLHttpRequest();

    xhr.open("GET", encodeURI(path))

    xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
    xhr.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
    xhr.setRequestHeader("Pragma", "no-cache");

    xhr.onload = function () {
        let rc = xhr.status

        if (rc >= 200 && rc < 300) {
            handler(xhr.response)
        } else {
            alert("Unable to get " + path)
            error_handler()
        }
    }

    xhr.onerror = function () {
        console.log(nametoprint + " -> Network Error");
        error_handler()
    }

    xhr.onprogress = function (event) {
        // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        console.log(nametoprint + " -> Received", event.loaded, event.total);
    }

    xhr.send()
}


/**
 * 
 * @param {*} text 
 * @returns false if text is not a valid ip in cidr notation, true if it is
 * 
 */
function verifyIPCIDR(text) {
    const input = text.split("/")

    if (input.length != 2) return false

    if (input[1] < 0 || input[1] > 32) return false

    return verifyIP(input[0])
}

/**
 * 
 * @param {*} text 
 * @returns if a string is formatted as an ipv4 address
 */
function verifyIP(text) {
    return text.match(ipformat)
}

/**
 * 
 * @param {*} text 
 * @returns if the text is not a broadcast ip, so true means user typed not a broadcast ip, false means user typed a broadcast ip
 * 
 */
function verifyIPnotbroadcast(text) {
    const input = text.split("/")

    if (input.length != 2) return false

    if (input[1] < 0 || input[1] > 32) return false

    let result = ""

    input[0].split(".").forEach(function (octect) { result += octecttobits(octect) })

    return result.slice(input[1]).includes("0")
}

function octecttobits(text) {
    let number = parseInt(text)
    let result = ""
    let base = 8
    for (base--; base >= 0; base--) {
        // IE doesn't know ~~
        // result += ~~(number / (2**base))
        let a = Math.pow(2, base)
        let b = number / a
        let c = Math.floor(b)
        result += "" + c
        number = number % a
    }
    return result
}

function getIpRangeFromAddressAndNetmask(str) {
    var part = str.split("/"); // part[0] = base address, part[1] = netmask
    var ipaddress = part[0].split('.');
    var netmaskblocks = ["0", "0", "0", "0"];
    if (!/\d+\.\d+\.\d+\.\d+/.test(part[1])) {
        // part[1] has to be between 0 and 32
        netmaskblocks = ("1".repeat(parseInt(part[1], 10)) + "0".repeat(32 - parseInt(part[1], 10))).match(/.{1,8}/g);
        netmaskblocks = netmaskblocks.map(function (el) { return parseInt(el, 2); });
    } else {
        // xxx.xxx.xxx.xxx
        netmaskblocks = part[1].split('.').map(function (el) { return parseInt(el, 10) });
    }
    // invert for creating broadcast address (highest address)
    var invertedNetmaskblocks = netmaskblocks.map(function (el) { return el ^ 255; });
    var baseAddress = ipaddress.map(function (block, idx) { return block & netmaskblocks[idx]; });
    var broadcastaddress = baseAddress.map(function (block, idx) { return block | invertedNetmaskblocks[idx]; });
    return [baseAddress.join('.'), broadcastaddress.join('.')];
}

/**
 * 
 * @param {*} text 
 * @returns if the object passed is numeric, is > 0 and <= 65535 
 */
function isPortNumber(text) {
    return (isNumeric(text) && text > 0 && text <= 65535)
}

function downloadafilewithIE(text, filename) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";

    let byteCharacters = text
    let byteNumbers = new Array(byteCharacters.length)
    for (var i = 0; i < byteCharacters.length; i++)
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    let byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: 'application/octet-stream' });

    // IE 11
    if (window.navigator.msSaveOrOpenBlob) {
        a.onclick = (function (evx) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        });
        a.click();
    } else {
        let file_object = URL.createObjectURL(blob);
        a.href = file_object;
        a["download"] = filename;
        a.click();
        window.URL.revokeObjectURL(file_object);
    }
    a.remove();
}

function removeDuplicates(a) {
    return a.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

/**
 * 
 * checks a checkbox if it is not checked
 * why a funciton and not just set "checked" property to "true"?
 * because setting the property to "true" does not trigger any event,
 * while invoking the function click() does generate the event "onclick"
 * as if the user clicked the checkbox, so triggers the checkbox tree update 
 */
function checkifnotchecked(checkbox_id) {
    let cb = document.getElementById(checkbox_id)
    if (cb.checked == false) cb.click()
}

function uncheckifchecked(checkbox_id) {
    let cb = document.getElementById(checkbox_id)
    if (cb.checked == true) cb.click()
}

export { isNumeric, clearEmpties, isObjEmpty, get_xhr, verifyIPCIDR, verifyIPnotbroadcast, getIpRangeFromAddressAndNetmask, isPortNumber, downloadafilewithIE, removeDuplicates, checkifnotchecked, uncheckifchecked }