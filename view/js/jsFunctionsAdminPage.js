
$(document).ready(function () {
	// $.ajax({
	// 	type:"POST",
    //    	url: "../controller/cLoggedVerify.php", 
    //    	dataType:"json",
    // 	success: function(response){ 
    		
    // 		console.log(response);
    		
    //    		if (response.err === "error")
    //    		{
       			
    //    			window.location.href="../index.html";
       			
       			
    //    		} else {
       			
       			
       			
    //    		}	
	// 	},
    //    	error : function(xhr) {
   	// 		alert("An error occured: " + xhr.status + " " + xhr.statusText);
   	// 	}
	// });   
	
	
	
	$("#btnEvents").click(function(){
			
		$.ajax({
			type:"GET",
			   url: "../controller/cEvents.php", 
			dataType:"json",
			success: function(result){  
				$("#tablaAdmin").html("");
				console.log(result);
				for($i=0; $i<result.length; $i++){
				newrow="";
					 newrow="<table class='table table-hover table-dark'> " +
								"<tr>"+
									"<th scope='col'>ID</th>"+
									"<th scope='col'>TITLE</th>"+
									"<th scope='col'>EVENT DAY</th>"+            
									"<th scope='col'>EVENT START</th>"+
									"<th scope='col'>EVENT END</th>"+
									"<th scope='col'>CITY</th>"+
									"<th scope='col'>PIC</th>"+
									"<th scope='col'>BANNER</th>"+
									"<th scope='col'>VIDEO</th>"+
									"<th scope='col'>ID USER</th>"+
								"</tr>"+
								"<tr>"+
									"<td>"+result[$i].id+"</td>"+
									"<td>"+result[$i].title+"</td>"+
									"<td>"+result[$i].eventDay+"</td>"+
									"<td>"+result[$i].eventStart+"</td>"+
									"<td>"+result[$i].eventEnd+"</td>"+
									"<td>"+result[$i].city+"</td>"+
									"<td>"+result[$i].pic+"</td>"+
									"<td>"+result[$i].banner+"</td>"+
									"<td>"+result[$i].video+"</td>"+
									"<td>"+result[$i].idUser+"</td>"+
									"<td><button type='button' class='btnFunction btn-warning' ><i class='fa fa-edit'aria-hidden='true'></i></button></td>"+
									" <td><button type='button' class='btnFunction btn-danger' ><i class='fa fa-trash'aria-hidden='true'></i></button></td>"+
								"</tr>"+
							"</table>";
 
				 $("#tablaAdmin").append(newrow);
				}
			},
			   error : function(xhr) {
				   alert("An error occured: " + xhr.status + " " + xhr.statusText);
			   }
		});
	});
	$("#btnUsers").click(function(){
		
		$.ajax({
			type:"GET",
			   url: "../controller/cUsers.php", 
			dataType:"json",
			success: function(result){  
				$("#tablaAdmin").html("");
				console.log(result);
				for($i=0; $i<result.length; $i++){
				newrow="";
					 newrow="<table class='table table-hover table-dark'> " +
								"<tr>"+
									"<th scope='col'>ID USER</th>"+
									"<th scope='col'>USERNAME</th>"+
									"<th scope='col'>NAME</th>"+            
									"<th scope='col'>SURNAME</th>"+
									"<th scope='col'>ADMIN</th>"+
								"</tr>"+
								"<tr>"+
									"<td>"+result[$i].idUser+"</td>"+
									"<td>"+result[$i].username+"</td>"+
									"<td>"+result[$i].name+"</td>"+
									"<td>"+result[$i].surname+"</td>"+
									"<td>"+result[$i].admin+"</td>"+
									"<td><button type='button' class='btnFunction btn-warning' ><i class='fa fa-edit'aria-hidden='true'></i></button></td>"+
									" <td><button type='button' class='btnFunction btn-danger' ><i class='fa fa-trash'aria-hidden='true'></i></button></td>"+
								"</tr>"+
							"</table>";
 
				 $("#tablaAdmin").append(newrow);
				}
			},
			   error : function(xhr) {
				   alert("An error occured: " + xhr.status + " " + xhr.statusText);
			   }
		});
		
			
			
	});
	
	
});



