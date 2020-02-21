
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
var savedBannerBase64;
var bannername;
var savedPicBase64;
var picname;
var idUser;
$(document).ready(function () {
	$.ajax({
		type:"POST",
       	url: "../controller/cLoggedVerify.php", 
       	dataType:"json",
    	success: function(response){ 
    		var admin= response.admin;
    		idUser= response.id;
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
           									    "<div id='eventModal' data-toggle='modal' data-target='#myModal' data-id='"+result[$i].id+"'>"+
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
           		    		
           		    		newrow="";
           		    		
           		    		newrow="<div id='addEvent' class='col-lg-4 col-xs-12  text-center'>" +
		 	    				"<div id='card' class='box'> " +
		 	    				
							    "<div data-toggle='modal' data-target='#myModalNewEvent'>"+
		 	    			
							    
							    	"<i class='fas fa-plus fa-10x'></i>"+
		 								"<div class='box-btn'>"+
		 							    	"<a>Gertaera Berria</a>"+
										"</div>"+
										
		 							  
		 							
		 							   
		 							   
		 	    				"</div>" +
		 	    				
		 	    		"</div>";
           		    	
	    	   
           		    		$("#cards").append(newrow);
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
           									    "<div id='eventModal' data-toggle='modal' data-target='#myModal' data-id='"+result[$i].id+"'>"+
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

	$("#insertEvent").click(function () {
		
		var title = $("#title").val();
		var day= $("#day").val();
		var eventStart= $("#eventStart").val();
		var eventEnd= $("#eventEnd").val();
		var city= $("#city").val();
		var description= $("#description").val();
		var banner= $("#banner").val();
		var pic= $("#pic").val();
		var video= $("#aaa").val();
		alert(video);

	
		$.ajax({
			type: "POST",
			url: "../controller/cInsertNewEvent.php",
			data:{'title':title,'day':day,'eventStart':eventStart,'eventEnd':eventEnd,'city':city,'description':description,'bannername':bannername,'savedBannerBase64':savedBannerBase64,'picname':picname,'savedPicBase64':savedPicBase64,'video':video},
			dataType: "json",
			success: function (response) {
	
				console.log(response);
				location.reload(true);
				alert("Añadido correctamente");
			},
			error: function (xhr) {
				alert("An error occured: " + xhr.status + " " + xhr.statusText);
			}
		});
	});



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



$('body').on('click', '#eventModal', function(){
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


$("#banner").change(function(){
	
	  let file = $("#banner").prop("files")[0];

	  bannername = file.name.toLowerCase();
	  console.log(bannername);
	  
	  if (!new RegExp("(.*?).(jpg|jpeg|png|gif)$").test(bannername)) {
	    alert("Solo se aceptan imágenes JPG, PNG y GIF");
	  }
	  let reader = new FileReader();
	  
	  reader.onload = function(e) {
		  
		  let fileBase64 = e.target.result;

		  // Almacenar en variable global para uso posterior
		  savedBannerBase64 = fileBase64;
		  $("#imgPerfil").attr('src', savedBannerBase64);
	  };
	  reader.readAsDataURL(file);
});

$("#pic").change(function(){
	
	  let file = $("#pic").prop("files")[0];
	  
	  picname = file.name.toLowerCase();
	  console.log(picname);
	  
	  if (!new RegExp("(.*?).(jpg|jpeg|png|gif)$").test(picname)) {
	    alert("Solo se aceptan imágenes JPG, PNG y GIF");
	  }
	  let reader = new FileReader();
	  
	  reader.onload = function(e) {
		  
		  let fileBase64 = e.target.result;

		  // Almacenar en variable global para uso posterior
		  savedPicBase64 = fileBase64;
		  $("#imgPerfil").attr('src', savedPicBase64);
	  };
	  reader.readAsDataURL(file);
});





