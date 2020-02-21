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
		type: "POST",
		url: "../controller/cLoggedVerify.php",
		dataType: "json",
		success: function (response) {

			console.log(response);

			if (response.err === "error") {

				window.location.href = "../index.html";


			} else {



			}
		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});


	$.ajax({
		type: "GET",
		url: "../controller/cEvents.php",
		dataType: "json",
		success: function (result) {

			console.log(result);
			for ($i = 0; $i < result.length; $i++) {
				newrowImg = "";
				newrowImg = "<div class='col-lg-4 col-xs-12  text-center'>" +
					"<div id='card' class='box'> " +
					"<div class='top'>" +
					"<ul>" +
					"<li ><a id='aaa' ><i id='bbb' class='fa fa-star-o fa-2x' aria-hidden='true'></i></a></li>" +
					"<li><a href='#'><i class='fa fa-shopping-basket fa-2x' aria-hidden='true'></i>" +
					"</a></li>" +
					"</ul>" +
					"</div>" +
					"<div data-toggle='modal' data-target='#myModal'>" +
					"<img src='images/" + result[$i].pic + "'/>" +
					"<div class='box-title'>" +
					"<h3>" + result[$i].title + "</h3>" +
					"</div>" +
					"<div class='box-text'>" +
					"<span>Eguna: " + result[$i].eventDay + "</span>" +
					"</br>" +
					"</br>" +
					"<span>Hasi: " + result[$i].eventStart + " Amaitu: " + result[$i].eventEnd + "</span>" +
					"</div>" +
					"<div class='box-btn'>" +
					"<a>Learn More</a>" +
					"</div>" +
					"</div>" +
					"<button id='btnEventUpdate' type='button' data='"+result[$i].id+"' class='btn btn-warning'>Editar</button>" +
					"<button id='btnEventDelete' type='button' data='"+result[$i].id+"' class='btn btn-danger'>Borrar</button>" +
					"</div>" +
					"</div>" +
					"</div>";

				$("#cards").append(newrowImg);
			}
		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

	$("#btnEventUpdate").click(function () {

	
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


});
$('body').on('click', '#aaa', function () {
	//$("#bbb").css("color", "yellow");

	//alert("asdsad");
});


