$(".orders-content").empty();

function getProducts(id) {

	let flag = false;

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			// Look for pruchases on the query
			for (let i=0; i<responseJSON.length; i++) {
				if (responseJSON[i].bought) {

					// An order from the user appeared
					flag = true;

					// Append order to the page
					$(".orders-content").append (`
						<div class="orders-container">
							<div class="orders-image">
								<img class="orders-image-size" src="./img/${responseJSON[i].image}">
							</div>
							<div class="orders-info">
								<h3 class="order-info-title">${responseJSON[i].name}</h3>
								<div class="order-info-Description order-info-sub">${responseJSON[i].description}</div>
								<div class="order-info-location order-info-sub">📍⠀${responseJSON[i].location}</div>
								<div class="order-info order-info-sub">📅 Recoger el Martes a las 8:00 pm</div>
								<div class="order-info-buttons order-info-sub">
									<button type="button" class="btn btn-success">Detalles</button>
									<button type="button" class="btn btn-primary">Calificar</button>
									<button id="${responseJSON[i].id}" type="button" class="btn btn-danger cancel-btn">Cancelar pedido</button>
								</div>
							</div>
						</div>
					`);
				}
			}

			if (flag) {
				$(".orders-content").show();
				cancelPolicy();
			}		
		},

		error: function(err) {
			console.log("Juguito de Chale: ", err);
		}
	});
} getProducts($(".nav-userId").attr('id'));

function getProductForCancel(id) {

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			console.log(responseJSON);
		},

		error: function(error) {
			console.log("Juguito de chale", error);
		}
	});
}

function cancelPolicy() {
	
	$(".cancel-btn").on("click", function(e) {
		e.preventDefault();
		getProductForCancel(e.target.id);
	});
}