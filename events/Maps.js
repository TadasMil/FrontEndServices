function initMap() {
    var myLatLng = {lat: 54.739 , lng: 25.234};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
  }