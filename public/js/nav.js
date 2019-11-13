$("#navbar").append(
	`	
		<div class="nav-align">
			<a href="./logIn.html">LogIn/SignUp</a>
			<a href="./index.html">Home</a>
			<a href="./discover.html">Descubre</a>
			<a href="./donate.html">Publicar</a>
			<a href="./help.html">Ayuda</a>
			<div class="form-group row">
				<div class="nav-divide">
					<input class="form-control nav-input" placeholder="" id="ex1" type="text">
					<button type="button" class="btn btn-success nav-btn" id="nav-search-btn">Buscar</button>
				</div>
			</div>
		</div>
	`
);

function SearchSearch(id) {

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			$(".search").empty();
			$(".search").append('<button type="button" class="btn btn-success back-search">Regresar</button>')

			let selectedProduct;

			for (let i=0; i<responseJSON.length; i++) 
				if (responseJSON[i].id == id)
					selectedProduct = responseJSON[i];
					
			$(".search").append(
				`
					<div class="divitionSearch">
						<div class="leftSearch">
							<img class="searchImage" src="./img/${selectedProduct.image}">
						</div>
						<div class="rightSearch">
							<h2>${selectedProduct.name}</h2>
							<p class="descriptionSearch">
								${selectedProduct.description}  
							</p>

							<div class="split">
								<div class="characteristicsSearch">
									<div>
										<span class="charSearch">Condición:</span>
										<span>${selectedProduct.condition}</span>
									</div>
									<div>
										<span class="charSearch">Cantidad disponible: </span>
										<span class="valSearch">${selectedProduct.quantity}</span>
									</div>

									${(selectedProduct.universalCode == "") ? `` :

										`
										<div>
											<span class="charSearch">Código Universal: </span>
											<span class="valSearch">${selectedProduct.universalCode}</span>
										</div>
										`
									}
																		
									${(selectedProduct.brand == "") ? `` :
										`	
										<div>
											<span class="charSearch">Marca: </span>
											<span class="valSearch">${selectedProduct.brand}</span>
										</div>
										`
									}

									${(selectedProduct.model == "") ? `` :

										`
										<div>
											<span class="charSearch">Modelo: </span>
											<span class="valSearch">${selectedProduct.model}</span>
										</div>
										`
									}

									${(selectedProduct.year == "") ? `` :
										`
											<div>
												<span class="charSearch">Año: </span>
												<span class="valSearch">${selectedProduct.year}</span>
											</div>
										`
									}
									
								</div>
							</div>

							<div class="locationSearch">
								<div class="titleSearch">Recoger en...</div>
								<div class="identSearch">📍 ${selectedProduct.location}</div>
							</div>

							<div class="buttonsSearch">
								<a href="./save.html"><button type="button" id="saveSearch" href="./save.html" class="btn btn-primary">Guardar</button></a>
								<button type="button" id="buySearch" class="btn btn-success">Adquirir</button>
								<a href="./report.html"><button type="button" id="reportSearch" class="btn btn-warning">Reportar</button></a>
							</div>
						</div>
					</div>	
				`
			);
		},

		error: function(err) {
			console.log("Juguito de chale", err);
		}
	});
}

function searchEndPoint(userQuery) {

	var found = [];

	$.ajax({

		url: "/products",
		method: "GET",
		format: "json",

		success: function(responseJSON) {

			var name, description, brand, model, condition, category;
			var namePos, descriptionPos, brandPos, modelPos, conditionPos, categoryPos;

			$(".search").empty();
			$(".search").append(`<h2 class="searchTitle">🔎 Resultados de ${$("#ex1").val()}...</h2>`);

			$(".search").append(
				`
					<content class="searches-content">
				`
			);
			
			$(".searches-content").empty();

			for (let i=0; i<responseJSON.length; i++) {

				name = responseJSON[i].name.toLowerCase();
				description = responseJSON[i].description.toLowerCase();
				brand = responseJSON[i].brand.toLowerCase();
				model = responseJSON[i].model.toLowerCase();
				condition = responseJSON[i].condition.toLowerCase();
				category = responseJSON[i].category.toLowerCase();

				namePos = name.search(userQuery);
				descriptionPos = description.search(userQuery);
				brandPos = brand.search(userQuery);
				modelPos = model.search(userQuery);
				conditionPos = condition.search(userQuery);
				categoryPos = category.search(userQuery);

				if (namePos != -1 || descriptionPos != -1 || brandPos != -1 || modelPos != -1 || conditionPos != -1 || categoryPos != -1) {
					
					$(".search").append(
						`
							<div class="searches-container" id="${responseJSON[i].id}">
								<div class="searches-image" >
									<img class="searches-image-size" id="${responseJSON[i].id}" src="./img/${responseJSON[i].image}">
								</div>
								<div class="searches-info" id="${responseJSON[i].id}">
									<h5 class="search-info-title" id="${responseJSON[i].id}">${responseJSON[i].name}</h5>
									<div class="search-info-description search-info-sub" id="${responseJSON[i].id}">📘 ${responseJSON[i].description}</div>
									<div class="search-info-condition search-info-sub" id="${responseJSON[i].id}">💯 ${responseJSON[i].condition}</div>
									<div class="search-info-location search-info-sub" id="${responseJSON[i].id}">📍 ⠀${responseJSON[i].location}</div>
								</div>
							</div>
						`
					);
				}
			}

			$(".search").append(
				`
					</content>
					<div class="space"></div>
				`
			);

			main();

		},

		error: function(err) {
			console.log("Juguito de Chale", errors)
		}
	});
}

function main() {

	$("#nav-search-btn").on("click", function(e) {

		e.preventDefault();

		if ($("#ex1").val()) {

			$(".search").empty();
			$(".search").show();
			$(".notSearch").hide();

			let userQuery = $("#ex1").val().toLowerCase();

			searchEndPoint(userQuery);
		}
	});

	$(".searches-container").on("click", function(e) {		

		SearchSearch(e.target.id);

	});
} main();