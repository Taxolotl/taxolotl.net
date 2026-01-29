function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteAllCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}

function updateVisitedCookie() {
    let timesVisited = getCookie("timesVisited");
    if (timesVisited == "") {
        setCookie("timesVisited", "1");
        return
    }

    var timesVisitedint = +timesVisited;
    setCookie("timesVisited", timesVisitedint + 1)
}

updateVisitedCookie();
let visitedCount = getCookie("timesVisited");
var cookieString = "You've been here ";
if (visitedCount == 1) {
    cookieString += "once!<br>You should come by more often!"
} else {
    cookieString += visitedCount + " times!";
    if (visitedCount >= 1000) {
        cookieString += "<br>What are you some kind of stalker~"
    } else if (visitedCount >= 100) {
        cookieString += "<br>Can't get enough of me can you?"
    }
}

document.getElementById("cookie").innerHTML = cookieString;