document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");
});
function myFunction() {
    var x = document.getElementById("bamH1").style.color;
    document.getElementById("relic").innerHTML = x;
}