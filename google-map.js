function init() {
	var mapOptions = {
		center: new google.maps.LatLng(39.7685571, -86.1578993, 19),
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		zoom: 18	
	};
	
	var myMap;
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
	document.body.appendChild(script); 
}

window.onload = loadScript;