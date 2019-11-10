function getProducts(id) {

	$.ajax({

		url: "/purchases",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			$(".orders-content").empty()

			for (let i=0; i<responseJSON.length; i++) {
				if (responseJSON[i].userPurchaseId == id) {
					$(".orders-content").append (
						`
							<div class="orders-container">
								<div class="orders-image">
									<img class="orders-image-size" src="./img/${responseJSON[i].image}">
								</div>
								<div class="orders-info">
									<h6 class="order-info-title">${responseJSON[i].name}</h6>
									<div class="order-info-location order-info-sub">📍⠀${responseJSON[i].location}</div>
									<div class="order-info order-info-sub">📅 Recoger el ${responseJSON[i].timeSchedule}</div>
									<div class="order-info-buttons order-info-sub">
										<button type="button" class="btn btn-success">Detalles</button>
										<button type="button" class="btn btn-primary">Calificar</button>
										<button type="button" class="btn btn-danger">Cancelar pedido</button>
									</div>
								</div>
							</div>
						`
					);
				}
			}
		},

		error: function(err) {
			console.log("Juguito de Chale: ", err);
		}
	});
}

getProducts("1");