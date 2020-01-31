function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        var element = document.getElementById("mobile-app");
        window.location.assign("./webapp/mobile");
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        var element = document.getElementById("mobile-app");
        window.location.assign("./webapp/mobile");
    }

    return "Unknown";
}

getMobileOperatingSystem();