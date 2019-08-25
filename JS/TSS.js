
//this function takes user to content container; mostly for mobile
$(document).ready(function(){

$(".navItems").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#jumboContainer").offset().top
    }, 300);
    });
});

$(document).ready(function(){

$(".top").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#toTop").offset().top
    }, 300);
    });
});


/* -------------- HOME SCREEN START---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#home").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/HOME.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#home").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/HomeJumboImage.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#home").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/SLIDESHOW/Slideshow_HOME2.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer
/* -------------- HOME SCREEN START---------------------- */

/* -------------- 90 % SCREEN START---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#ninety").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/NINETY.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

//ajax for single page site
$(document).ready(function(){
   $("#ninety").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/90SilverJumboImage.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#ninety").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/SLIDESHOW/Slideshow_NINETY.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer
/* -------------- 90 % SCREEN END --------------------- */

/* -------------- BARS and ROUNDS SCREEN START---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#roundsBars").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/ROUNDSBARS.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

//ajax for single page site
$(document).ready(function(){
   $("#roundsBars").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/BarsRounds.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#roundsBars").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/SLIDESHOW/Slideshow_ROUNDSBARS.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

/* -------------- BARS and ROUNDS SCREEN END---------------------- */

/* -------------- WHEAT CENTS SCREEN START---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#wheat").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/WHEATCENTS.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#wheat").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/WheatCents.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#wheat").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/SLIDESHOW/Slideshow_WHEAT.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer
/* -------------- WHEAT CENTS SCREEN END---------------------- */

/* -------------- COINS SCREEN START---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#coins").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/COINS.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#coins").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Coins.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#coins").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Null.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer
/* -------------- COINS SCREEN END ---------------------- */

/* -------------- KNOWLEDGE SCREEN START---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#knowledge").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/KNOWLEDGE.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#knowledge").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Knowledge.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#knowledge").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Null.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer
/* -------------- KNOWLEDGE END ---------------------- */

/* -------------- ABOUT SCREEN START ---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#about").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/ABOUT.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#about").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Null.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#about").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Null.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer
/* -------------- ABOUT SCREEN END ---------------------- */

/* -------------- SHOP SCREEN START ---------------------- */
//ajax for single page site
$(document).ready(function(){
   $("#shop").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/SHOP.php',
        success: function(data) {
        //alert(data);
        $("#contentContainer").html("");
        $("#contentContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#shop").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Null.php',
        success: function(data) {
        //alert(data);
        $("#jumboContainer").html("");
        $("#jumboContainer").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

$(document).ready(function(){
   $("#shop").click(function(){

    $.ajax({
        type: 'POST',
        url: 'COMPONENTS/JUMBOIMAGES/Null.php',
        success: function(data) {
        //alert(data);
        $(".slider").html("");
        $(".slider").html(data);               
       }//function closer
     });//ajax closer

   });//aside listener
});//function closer

/* -------------- SHOP SCREEN END ---------------------- */