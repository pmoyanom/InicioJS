
// Function to retrieve a cookie
function getCookie(name) {
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return JSON.parse(cookie.substring(name.length + 1));
        }
    }
    return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); 
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}
// Export the functions
export { getCookie, setCookie };