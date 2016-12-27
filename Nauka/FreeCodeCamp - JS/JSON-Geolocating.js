
<script>
  // Only change code below this line.
  
  //if user allows for geolocating (if it's on)
  if (navigator.geolocation) {
    // get the position
    navigator.geolocation.getCurrentPosition(function (position) {
      // add html that will display it in div id = data
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitute: " + position.coords.longitude);
    });
  }
  
  
  // Only change code above this line.
</script>
<div id = "data">
  <h4>You are here:</h4>
  
</div>

