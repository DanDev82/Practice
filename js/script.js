$(document).ready(function(){

  // Displays the dropdown menu
  $('img').click(function(){
    $('.dropdown-menu').toggle('fast');
  });
  
  // Form validation
	$( "form" ).submit(function() {

	  var email = $("#email").val();
	  var password = $("#password").val();

	    if (email === ""){
	      $(".email-error").text("Please enter your email");
	    } 
	  	else if (password === ""){
	    	$(".password-error").text("Please enter your password");
	  	}
	  	return false;
	}); 

  
});