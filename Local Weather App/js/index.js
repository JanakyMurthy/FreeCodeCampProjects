window.onload = getLocation();

// disable caching
$(document).ready(function() {
  $.ajaxSetup({ cache: false });
});

// get the location and pass it to displayWeather
function getLocation()
{
   if(navigator.geolocation) {
     // The coordinate object of the  location is passed to the displayWeathe function
     navigator.geolocation.getCurrentPosition(displayWeather);
   }
   else { // geolocation not supported
     var msg = document.getElementById("content");
     
     msg.innerHTML = "Geolocation not supported in your browser!!";
   }
}
function displayWeather(position) {

  // Get the Latitude and Longitude
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  
  // get the unit for temperature
  var unit = "";
  if($("#unit").html() == "C") unit = "metric";
  else unit = "imperial";

  // url to get temp from openweathermap
  var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=53ea5849e3f266f4bce806b7d7e5dbdb"+"&units="+unit;

  
// get weather from OpenWeather Map
$.getJSON(url,function(json){

   // get the needed parameters
    var country = json.sys.country;
    var city = json.name;
    var temp = json.main.temp;
    var description = json.weather[0].description;
    var iconUrl = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
    
    // set the values of parameters in divs
    $("#location").html(city + ", " + country);
    $("#tempVal").html(temp);
    $("#description").html(description);
    $("#weather-icon").attr('src',iconUrl);
  }).fail( function(json, textStatus, error) {
        alert("getJSON failed, status: " + textStatus + ", error: "+error);
 });
}

$("#unit").click(function() {
  
  // get the unit
  var unit = $("#unit").html();
  
  // toggle the unit
   if(unit == "C")  $("#unit").html("F");
  else $("#unit").html("C");
  
  // get temp again
  getLocation();
});
