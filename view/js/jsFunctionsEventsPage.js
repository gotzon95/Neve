jQuery(function ($) {

	$(".sidebar-dropdown > a").click(function () {
		$(".sidebar-submenu").slideUp(200);
		if (
			$(this)
				.parent()
				.hasClass("active")
		) {
			$(".sidebar-dropdown").removeClass("active");
			$(this)
				.parent()
				.removeClass("active");
		} else {
			$(".sidebar-dropdown").removeClass("active");
			$(this)
				.next(".sidebar-submenu")
				.slideDown(200);
			$(this)
				.parent()
				.addClass("active");
		}
	});

	$("#close-sidebar").click(function () {
		$(".page-wrapper").removeClass("toggled");
	});
	$("#show-sidebar").click(function () {
		$(".page-wrapper").addClass("toggled");
	});
});


$(document).ready(function () {
	$.ajax({
		type:"POST",
       	url: "../controller/cLoggedVerify.php", 
       	dataType:"json",
    	success: function(response){ 
    		var admin= response.admin;
    		console.log(response);
    		 name="";
	    		$("#name").empty();
	    		name=response.username;
	    			
		    $("#name").append(name);
		    
		    
		    irudia="";
    		$("#irudia").empty();
    		irudia=" <img class='img-responsive img-rounded' src='images/"+response.pic+"' alt='User picture'>";
    			
    		$("#irudia").append(irudia);
		    
		    
		   
		    	 
       		if (response.err === "error")
       		{
       			
       			window.location.href="../index.html";
       			
       			
       		} else {
       			
       			$.ajax({
       				type:"GET",
       		       	url: "../controller/cEvents.php", 
       		    	dataType:"json",
       		    	success: function(result){  
       		    		if(admin==1){
       		    			console.log(result);
           		    		for($i=0; $i<result.length; $i++){
           		    		newrowImg="";
           			 	    	newrowImg="<div class='col-lg-4 col-xs-12  text-center'>" +
           				 	    				"<div id='card' class='box'> " +
           				 	    				"<div class='top'>"+
           				 	    				"<ul>"+
           				 	    				"<li ><a id='fav' ><i id='"+result[$i].id+"' class='fas fa-star fa-2x' aria-hidden='true'></i></a></li>"+
           				 	    				"<li><a id='share' href='#'><i class='fas fa-share fa-2x' aria-hidden='true'></i>"+            
           										"</a></li>"+
           									    "</ul>"+
           									    "</div>"+
           									    "<div id='ccc' data-toggle='modal' data-target='#myModal' data-id='"+result[$i].id+"'>"+
           				 	    					"<img src='images/"+result[$i].banner+"'/>"+
           				 	    						"<div class='box-title'>"+
           				 	    							"<h3>"+result[$i].title+"</h3>"+
           				 	    						"</div>"+
           				 	    						"<div class='box-text'>"+
           				 									"<span>Eguna: "+result[$i].eventDay+"</span>"+
           				 									"</br>"+
           				 									"</br>"+
           			 										"<span>Hasi: "+result[$i].eventStart+" Amaitu: "+result[$i].eventEnd+"</span>"+
           			 									"</div>"+
           				 								"<div class='box-btn'>"+
           				 							    	"<a>Learn More</a>"+
															"</div>"+
															"<button id='btnEventUpdate' type='button' data='"+result[$i].id+"' class='btn btn-warning'>Editar</button>" +
															"<button id='btnEventDelete' type='button' data='"+result[$i].id+"' class='btn btn-danger'>Borrar</button>" +
           				 							   "</div>" +	
           				 							
           				 							   
           				 							   
           				 	    				"</div>" +
           				 	    				
           				 	    		"</div>";
           			    	   
           			    	 $("#cards").append(newrowImg);
           		    		}
       		    		}else{
       		    			
       		    			console.log(result);
           		    		for($i=0; $i<result.length; $i++){
           		    		newrowImg="";
           			 	    	newrowImg="<div class='col-lg-4 col-xs-12  text-center'>" +
           				 	    				"<div id='card' class='box'> " +
           				 	    				"<div class='top'>"+
           				 	    				"<ul>"+
           				 	    				"<li ><a id='fav' ><i id='"+result[$i].id+"' class='fas fa-star fa-2x' aria-hidden='true'></i></a></li>"+
           				 	    				"<li><a id='share' href='#'><i class='fas fa-share fa-2x' aria-hidden='true'></i>"+            
           										"</a></li>"+
           									    "</ul>"+
           									    "</div>"+
           									    "<div id='ccc' data-toggle='modal' data-target='#myModal' data-id='"+result[$i].id+"'>"+
           				 	    					"<img src='images/"+result[$i].banner+"'/>"+
           				 	    						"<div class='box-title'>"+
           				 	    							"<h3>"+result[$i].title+"</h3>"+
           				 	    						"</div>"+
           				 	    						"<div class='box-text'>"+
           				 									"<span>Eguna: "+result[$i].eventDay+"</span>"+
           				 									"</br>"+
           				 									"</br>"+
           			 										"<span>Hasi: "+result[$i].eventStart+" Amaitu: "+result[$i].eventEnd+"</span>"+
           			 									"</div>"+
           				 								"<div class='box-btn'>"+
           				 							    	"<a>Learn More</a>"+
           				 							    "</div>"+
           				 							   "</div>" +	
           				 	    				"</div>" +
           				 	    		"</div>";
           			    	   
           			    	 $("#cards").append(newrowImg);
           		    		}
       		    			
       		    			
       		    		}
       		    		
       		    		
       		    		
       		    		
       		    		
       				},
       		       	error : function(xhr) {
       		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
       		   		}
       			});
       			
       		}	
       		
       		
       		
       		
       		
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});   
	
	
	
	
	
	
	
	
	});
	// $("#btnEventDelete").click(function () {
	// 	alert("hola");
	// 	id=$(this).getAttribute("data");
	// 	alert(id);
	
	// });
	$('body').on('click', '#btnEventDelete', function () {
		
		id=$(this).attr("data");
		$.ajax({
			type: "GET",
			data: { 'id': id },
			url: "../controller/cDeleteEvents.php",
			dataType: "text",
			success: function (response) {
	
				console.log(response);
				location.reload(true);
				alert("eliminado correctamente");
			},
			error: function (xhr) {
				alert("An error occured: " + xhr.status + " " + xhr.statusText);
			}
		});
	});

	$("#logout").click(function () {

		$.ajax({

			url: "../controller/cLogout.php",
			success: function (result) {

				window.location.href = "../index.html";
			},
			error: function (xhr) {
				alert("An error occured: " + xhr.status + " " + xhr.statusText);
			}
		});
	});



$('body').on('click', '#ccc', function(){
	var id=$(this).data("id");
	$.ajax({
		type:"GET",
		data: { "id": id},
       	url: "../controller/cEventModal.php", 
    	dataType:"json",
    	success: function(result){  
    		console.log(result[0].video);
    		//console.log(result);
    		
    		
    		
    		newrowVideo="";
    		$("#video").empty();
    		newrowVideo=
    		"<div class='embed-responsive embed-responsive-16by9 z-depth-1-half'>"+
    		 "<iframe class='embed-responsive-item' src='"+result[0].video+"' allowfullscreen></iframe>"+
 	         "</div>"+
 	         "<hr><hr>";
    		
	    	   
	    	 $("#video").append(newrowVideo);
	    	 
	    	 
	    	 descripcion="";
	    		$("#collapseTwo2").empty();
	    		descripcion=
	    			"<div class='card-body'>"+result[0].description+"</div>"
	    		
		    	   
		    	 $("#collapseTwo2").append(descripcion);
	    		
	    		
	    	img="";
	    	$("#modalImg").empty();
	    	img=
    			"<img class='d-block w-100' src='images/"+result[0].pic+"' alt='First slide'>"
    		
	    	   
	    	 $("#modalImg").append(img);
	    	
	    	
	    	lekua="";
	    	$("#datuak").empty();
	    	lekua=
    			"<div class='card-body'>Herria</div>"+
    			"<div class='card-body'>"+result[0].city+"</div>"+
	    		"<div class='card-body'>Eguna</div>"+
		    	"<div class='card-body'>"+result[0].eventDay+"</div>"+
	    		"<div class='card-body'>Hasiera</div>"+
	    		"<div class='card-body'>"+result[0].eventStart+"</div>"+
	    		"<div class='card-body'>Amaiera</div>"+
	    		"<div class='card-body'>"+result[0].eventEnd+"</div>";

	    	   
	    	 $("#datuak").append(lekua);
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
});





