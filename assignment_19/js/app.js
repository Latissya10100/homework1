function loadfunction () {
	alert("welcome and " + loadfunction.text);
}
loadfunction.text = 'hello';
if (window.addEventListener) {
    window.addEventListener("load", loadfunction, true);
} else if (window.attachEvent) {
    window.attachEvent("onload", loadfunction);
}
