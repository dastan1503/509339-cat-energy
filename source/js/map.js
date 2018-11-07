google.maps.event.addDomListener(window, 'load', init);
function init() {
  var mapOptions = {
  zoom: 16,
  center: new google.maps.LatLng(59.93877819999999, 30.32319670000004)
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
}
