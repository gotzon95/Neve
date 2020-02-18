
$(document).ready(function () {
	
	
	$("#signIn").click(function(){

	    //forms values vars

		var username=$("#inUser").val();
		var password=$("#inPass").val();

		
		$.ajax({
			type:"POST",
			data:{'username':username,'password':password},
	       	url: "controller/cSignIn.php", 
	       	dataType:"json",
	    	success: function(response){ 
	    		
	    		console.log(response);
	    		
	       		if (response.err === "Ok")
	       		{
	       			
	       			window.location.href="view/eventsPage.html";
	       			
	       		} else {
	       			alert("Usuario o contraseña incorrectas");
	       		
	       		}	
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
	});

	$.ajax({
		type:"POST",
       	url: "controller/cLoggedVerify.php", 
       	dataType:"json",
    	success: function(response){ 
    		
    		console.log(response);
    		
       		if (response.err === "Ok")
       		{
       			
       			window.location.href="view/eventsPage.html";
       			
       			
       		} else {
       			
       		
       			
       		}	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});     
});







   
   





