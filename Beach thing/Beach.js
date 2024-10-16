function initMap() {
    try {
      // Initialize the map
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16, 
        center: {lat: 5.51583, lng: -0.28944} 
      });
  
      var areaCoords = [
        {lat: 5.51722, lng: -0.28333},
        {lat: 5.51667, lng: -0.28667},
        {lat: 5.51583, lng: -0.28944},
        {lat: 5.51528, lng: -0.29306},
        {lat: 5.51500, lng: -0.29556},
        {lat: 5.51444, lng: -0.29528},
        {lat: 5.51500, lng: -0.29139},
        {lat: 5.51667, lng: -0.28333}
      ];
  
      var areaPolygon = new google.maps.Polygon({
        paths: areaCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
  
      areaPolygon.setMap(map);
  
      var infoWindow = new google.maps.InfoWindow({
        content: 'Baron Beach Resort'
      });
  
      google.maps.event.addListener(areaPolygon, 'click', function() {
        infoWindow.setPosition(areaCoords[0]);
        infoWindow.open(map);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
  
  

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: {lat: 5.51583, lng: -0.28944} // Center the map on your business
    });
  
    var businessAreaCoords = [
      {lat: 5.51722, lng: -0.28333},
      {lat: 5.51667, lng: -0.28667},
      {lat: 5.51583, lng: -0.28944},
      {lat: 5.51528, lng: -0.29306},
      {lat: 5.51500, lng: -0.29556},
      {lat: 5.51444, lng: -0.29528},
      {lat: 5.51500, lng: -0.29139},
      {lat: 5.51667, lng: -0.28333}
    ];
  
    var businessAreaPolygon = new google.maps.Polygon({
      paths: businessAreaCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
  
    businessAreaPolygon.setMap(map);
  }
  