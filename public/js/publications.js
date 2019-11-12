function getProducts(id) {

	$.ajax({

		url: "/purchases",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			$(".publications-content").empty()

			for (let i=0; i<responseJSON.length; i++) {
				if (responseJSON[i].userSaleId == id) {
					$(".publications-content").append (
						`
							<div class="publications-container">
								<div class="publications-image">
									<img class="publications-image-size" src="./img/${responseJSON[i].image}">
								</div>
								<div class="publications-info">
									<h3 class="publication-info-title">${responseJSON[i].name}</h3>
									<div class="publication-info-location publication-info-sub">📍⠀${responseJSON[i].location}</div>
									<div class="publication-info publication-info-sub">📅 Recoger el ${responseJSON[i].timeSchedule}</div>
									<div class="publication-info-buttons publication-info-sub">
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

getProducts("4");