var circle;
var circles=[];
var markers = [];
var infowindows=[];
var infowindow;
var watchID = null;
// $(window).load(function () {
  var optn =
 {
    enableHighAccuracy: false,
    timeout: 500000,
    maximumAge: 0
  };
  if( navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(success, fail, optn);
  }



// });

var map;
var markersArray = [map];
var radiusEntered;
var mymap;
var mapOtn;
var googleLatLng;
var pmap;
var geocoder;

//WHEN GEOLOCATIN FUNCTION IS ENABLED............
  function success(position)
  { 
     googleLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     mapOtn=
    {
      maxZoom:14,
      minZoom:14,
      zoom:13,
      scrollwheel: false,
      styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
      center:googleLatLng,
      mapTypeId:google.maps.MapTypeId.ROAD,
      disableDefaultUI: true
    };

      //google.maps.visualRefresh = true;
      Pmap=document.getElementById('googlemaps');
      mymap=new google.maps.Map(Pmap, mapOtn);
      geocoder = new google.maps.Geocoder();
                      geocoder.geocode({
                         'latLng': googleLatLng
                      }, function(results, status) {
                      if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                          var alamat = results[0].formatted_address;
                          document.getElementById("placename").value = alamat;
                        }
                      }
                  });
 var marker = new google.maps.Marker({
                                position: googleLatLng,
                                    icon: "img/markers/tea.png"
                            });
                            marker.setMap(mymap);
                            markers.push(marker);//pussing data in markers array.........
var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(mymap);



setTimeout(function() {
                google.maps.event.trigger(mymap, "resize");
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(googleLatLng);
                mymap.fitBounds(bounds);
                
            }, 2000); 

 geocoder = new google.maps.Geocoder();
        google.maps.event.addListener(mymap, 'dragend', function () 
        {
             deleteMarkers();
            googleLatLng = new google.maps.LatLng(this.getCenter().lat(), this.getCenter().lng());
            geocoder.geocode
            ({
                    'latLng': this.center
                }, function(results, status) 
                    {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var alamat = results[0].formatted_address;
                                document.getElementById("placename").value = alamat;
                            }
                        }
                    });
                    mymap.setCenter(googleLatLng);  
                     var marker = new google.maps.Marker({
                                position: googleLatLng,
                                    icon: "img/markers/tea.png"
                            });
                            marker.setMap(mymap);     
                            markers.push(marker);//pussing data in markers array.........     
        });

        google.maps.event.addListener(mymap, 'dblclick', function(event)
        {
            //for address fetching.........
            geocoder.geocode({
                        'latLng': event.latLng
            }, function(results, status) 
                {
                    if (status == google.maps.GeocoderStatus.OK)
                        {
                            if (results[0]){
                                var address_components = results[0].address_components;
                                var address_formatted = results[0].formatted_address;
                                document.getElementById("placename").value = address_formatted;
                                var components={};
                                jQuery.each(address_components, function(k,v1) {jQuery.each(v1.types, function(k2, v2){components[v2]=v1.long_name});});                            
                            }
                        }
                }); //address fetching ends here.........
            deleteMarkers();
            deleteCircles();
            mymap.panTo(event.latLng);
            var marker = new google.maps.Marker({
                                position: event.latLng,
                                    icon: "img/markers/tea.png"
                            });
                            marker.setMap(mymap);     
                            markers.push(marker);//pussing data in markers array......... 
        });
}









//WHEN GEOLOCATIN FUNCTION IS DISABLED............
function fail(error)
{ 
  googleLatLng = new google.maps.LatLng(13.0362, 77.5749);
    mapOtn=
    {
      maxZoom:14,
      minZoom:14,
      zoom:13,
      styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
      center:googleLatLng,
      mapTypeId:google.maps.MapTypeId.ROAD,
      disableDefaultUI: true
    };
    Pmap=document.getElementById('googlemaps');
    mymap=new google.maps.Map(Pmap, mapOtn);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}
function clearMarkers(){
    setMapOnAllmarkers(null);
}
// Sets the map on all markers in the array.
function setMapOnAllmarkers(mymap) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(mymap);
    }
}


function deleteCircles()
{
    clearCircles();
    circles=[];
}
function clearCircles(){
    setMapOnAllcircles(null);
}
// Sets the map on all circles in the array.
function setMapOnAllcircles(mymap) {
        for (var i = 0; i < circles.length; i++) {
            circles[i].setMap(mymap);
    }
}


function deleteinfowindows()
{
    clearinfowindows();
    infowindows=[];
}
// Removes the markers from the map, but keeps them in the array.
function clearinfowindows(){
    setMapOnAllinfowindows(null);
}
function setMapOnAllinfowindows(mymap){
        for (var i = 0; i < circles.length; i++) {
            circles[i].setMap(mymap);
    }
}


function removeMarker()
{
    markers = [];
    setMapOnAllmarkers(null);
}


initAutocomplete();