$(".Story-Ending-Yes").hide();	
$(".Story-Ending-No").hide();	
$(".untouchables").hide();	
$(".chicago").hide();	
$(".second-button").hide();
$(".third-button").hide();
$(".end-button").hide();
$(".theendbutton").hide();


$(".yes-button").click(function(){
   $(".second-button").show();
     $(".third-button").show();
      $(".yes-button").hide();
});	


$(".yes-button").click(function(){
   $(".chicago").show();
      $(".ChicagosUntouchables").hide();
   
});			

$(".second-button").click(function(){
   $(".chicago").hide();
});		

$(".third-button").click(function(){
   $(".chicago").hide();
});		

$(".third-button").click(function(){
   $(".second-button").hide();
      $(".third-button").hide();
   
});			


$(".second-button").click(function(){
   $(".second-button").hide();
      $(".third-button").hide();
   
});			

$(".third-button").click(function(){
   $(".Story-Ending-No").show();
      $(".chicagos").hide();
});			

$(".second-button").click(function(){
   $(".Story-Ending-Yes").show();
     $(".chicago").hide();
      $(".untouchables").hide();
});			

$(".second-button").click(function(){
   $(".Story-Ending-Yes").show();
     $(".chicago").hide();
      $(".untouchables").hide();
});			

$(".second-button").click(function(){
   $(".theendbutton").show();
     $(".second-button").hide();
     
});	

$(".third-button").click(function(){
   $(".end-button").show();
     $(".third-button").hide();
     
});	

$(".end-button").click(function(){
    $(".yes-button").toggle();
   $(".ChicagosUntouchables").show();
    $(".Story-Ending-No").hide();
     $(".Story-Ending-Yes").hide();
    $(".end-button").hide();
     
});	

$(".theendbutton").click(function(){
    $(".yes-button").toggle();
   $(".ChicagosUntouchables").show();
    $(".Story-Ending-No").hide();
     $(".Story-Ending-Yes").hide();
    $(".theendbutton").hide();
     
});	


$(".yes-button").click(function() {


});

$(".no-button").click(function() {


});