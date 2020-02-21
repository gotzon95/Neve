
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
		//$("#tablaAdmin").empty();
		$.ajax({
			type:"GET",
			   url: "../controller/cEvents.php", 
			dataType:"json",
			success: function(result){  
				//$("#tablaAdmin").html("");
				console.log(result);
				
				
				var newRow="";
				$("#tablaAdmin").empty();
				newRow +="<table class='table table-hover table-dark'>";
				newRow +="<tr><th>ID</th><th>TITLE</th><th>EVENT DAY</th><th>EVENT START</th><th>EVENT END</th><th>CITY</th><th>PIC</th><th>BANNER</th><th>VIDEO</th><th>ID USER</th></tr>";
				
				
				for($i=0; $i<result.length; $i++){
				newRow+=
					
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
									"<td><button type='button' class='btnFunction btn-warning' data='"+result[$i].description+"' ><i class='fa fa-edit'aria-hidden='true'></i></button></td>"+
									" <td><button type='button' class='btnFunction btn-danger' ><i class='fa fa-trash'aria-hidden='true'></i></button></td>"+
								"</tr>";
							
					
				}
				newRow+="</table>";
				 $("#tablaAdmin").append(newRow);
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
				newrow="";
				newrow+="<table class='table table-hover table-dark'> " +
				"<tr>"+
					"<th scope='col'>ID USER</th>"+
					"<th scope='col'>USERNAME</th>"+
					"<th scope='col'>NAME</th>"+            
					"<th scope='col'>SURNAME</th>"+
					"<th scope='col'>ADMIN</th>"+
				"</tr>";
				console.log(result);
				for($i=0; $i<result.length; $i++){
				newrow+="<tr>"+
							"<td>"+result[$i].idUser+"</td>"+
							"<td>"+result[$i].username+"</td>"+
							"<td>"+result[$i].name+"</td>"+
							"<td>"+result[$i].surname+"</td>"+
							"<td>"+result[$i].admin+"</td>"+
							"<td><button type='button' class='btnFunction btn-warning' data='"+result[$i].password+"' ><i class='fa fa-edit'aria-hidden='true'></i></button></td>"+
							" <td><button type='button' class='btnFunction btn-danger' ><i class='fa fa-trash'aria-hidden='true'></i></button></td>"+
						"</tr>";
					
				}
				"</table>";
				 
				 $("#tablaAdmin").append(newrow);
			},
			   error : function(xhr) {
				   alert("An error occured: " + xhr.status + " " + xhr.statusText);
			   }
		});
		
			
			
	});
	
	
});



