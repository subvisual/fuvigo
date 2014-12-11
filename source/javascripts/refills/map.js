function initialize() {
  var myLatlng = new google.maps.LatLng(41.55388, -8.44065);
  var mapCenter = new google.maps.LatLng(41.55388, -8.44065);
  var mapCanvas = document.getElementById('map_canvas');
  var mapOptions = {
    center: mapCenter,
    zoom: 14,
    scrollwheel: false,
    draggable: false,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions)

  map.set('styles', [
   {
       featureType: 'landscape',
       elementType: 'geometry',
       stylers: [
         { hue: '#ffff00' },
         { saturation: 30 },
         { lightness: 10}
       ]
     },
  ]);

  var contentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Fundação Vieira Gomes</h1>'+
    '<div id="bodyContent">'+
    '<p>Rua Costa Gomes, nº32</p>'+
    '<p>Real, 4700 - 262 Braga</p>'+
    '<p>Portugal</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Fundação Vieira Gomes'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

