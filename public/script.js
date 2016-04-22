		///////////////////////////////////////
		// code for map 
      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 8
        });
      }
//////////////////////////////////////

      // code for modal 



$(document).ready(function(){

		$(".box2").hide();

	$(".button").click(function(){
		$(".opbackground").show();
	});
	
$(" .opbackground"). on('click',function(){
	$(".wrapper").hide();
	 });


$(".wrapper").click(function(){
		$(".box2").show();
	 });

$(".button2").click(function(){
		$(".box2").show();
	 });
	
});

      