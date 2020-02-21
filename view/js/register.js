function validatePassword(){
  var password = document.getElementById("contrasenia").value;
  var confirm_password = document.getElementById("confirm_password").value;


  if(password != confirm_password) {
    alert("Las contraseñas no coinciden");
   
    return false;
  } else {
    
    alert("bien");
    return true;
  }
}

$(document).ready(function(){
/*ajax*/
$("#btnInsert").click(function(){
	alert("aaa");
	var username = $("#username").val();
	var contrasenia= $("#contrasenia").val();
	var name= $("#name").val();
	var surname= $("#surname").val();
	
	
	
		
		$.ajax({
		   	type:"GET",
		   	data: {"username":username, "contrasenia":contrasenia, "name":name, "surname":surname},
		   	url: "../controller/cInsertNewUser.php", 
		 	dataType:"json",  //type of the result
		   	
			success: function(result){  
		   		//alert(result);
		   		console.log(result);
		   		alert(result);
		   		//location.reload(true)
		   
		   	},
		   	error : function(xhr) {
					alert("An error occured: " + xhr.status + " " + xhr.statusText);
				}
			}); 	
	

});

});