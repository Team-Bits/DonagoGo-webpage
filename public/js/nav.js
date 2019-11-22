function isLogedIn() {

	$.ajax({

		url: "/users",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			let log = "";

			for (let i=0; i<responseJSON.length; i++)
				if (responseJSON[i].logged)
					log = responseJSON[i];

			$("#navbar").append(`	
				<div class="nav-align">
					<a class="nav-userId" id="${log.id}" href="./LogIn.html">
						${(log == "") ? `LogIn/SignUp` : `${log.name}`} 
					</a>
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
			`);	

			main();
		},

		error: function(error) {
			console.log("Error en navbar", error);
		}
	});
} isLogedIn();

third();

function SearchSearch(id) {

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			$(".search").empty();

			let selectedProduct;

			for (let i=0; i<responseJSON.length; i++) 
				if (responseJSON[i].id == id)
					selectedProduct = responseJSON[i];
					
			$(".search").append(`
				<div class="divition-all">
					<div class="divitionSearch">
						<div class="leftSearch">
							<img class="searchImage" src="./img/${selectedProduct.image}">
						</div>
						<div class="rightSearch" id="${selectedProduct.id}">
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
								<button type="button" id="reportSearch" class="btn btn-warning">Reportar</button>
							</div>
						</div>
					</div>
					<button type="button" class="btn btn-success btn-top">Regresar</button>
				</div>		
			`);

			third();
		},

		error: function(err) {
			console.log("Juguito de chale", err);
		}
	});
}

function searchEndPoint(userQuery) {

	let found = [];

	$.ajax({

		url: "/products",
		method: "GET",
		format: "json",

		success: function(responseJSON) {

			var name, description, brand, model, condition, category;
			var namePos, descriptionPos, brandPos, modelPos, conditionPos, categoryPos;

			$(".search").empty();
			$(".search").append(`<h2 class="searchTitle">🔎 Resultados de ${$("#ex1").val()}...</h2>`);
			$(".search").append(`<a href="./advancedSearch.html"><button type="button" class="btn btn-info advanced-search">Busqueda Avanzada</button></a>`);
			$(".search").append(`<content class="searches-content">`);
			$(".searches-content").empty();

			for (let i=0; i<responseJSON.length; i++)
				if (!responseJSON[i].bought)
					found.push(responseJSON[i]);

			for (let i=0; i<found.length; i++) {

				name = found[i].name.toLowerCase();
				description = found[i].description.toLowerCase();
				brand = found[i].brand.toLowerCase();
				model = found[i].model.toLowerCase();
				condition = found[i].condition.toLowerCase();
				category = found[i].category.toLowerCase();

				namePos = name.search(userQuery);
				descriptionPos = description.search(userQuery);
				brandPos = brand.search(userQuery);
				modelPos = model.search(userQuery);
				conditionPos = condition.search(userQuery);
				categoryPos = category.search(userQuery);

				if (namePos != -1 || descriptionPos != -1 || brandPos != -1 || modelPos != -1 || conditionPos != -1 || categoryPos != -1) {

					$(".search").append(`
						<div class="searches-container" id="${found[i].id}">
							<div class="searches-image" >
								<img class="searches-image-size" id="${found[i].id}" src="./img/${found[i].image}">
							</div>
							<div class="searches-info" id="${found[i].id}">
								<h5 class="search-info-title" id="${found[i].id}">${found[i].name}</h5>
								<ul>
									<li class="search-info-description search-info-sub" id="${found[i].id}">${found[i].description}</li>
									<li class="search-info-condition search-info-sub" id="${found[i].id}">${found[i].condition}</li>
									<li class="search-info-location search-info-sub" id="${found[i].id}">${found[i].location}</li>
								</ul>
							</div>
						</div>
					`);
				}
			}

			$(".search").append(
				`
					</content>
					<div class="space"></div>
				`
			);

			secondary();
			third();
		},

		error: function(err) {
			console.log("Juguito de Chale", errors)
		}
	});
}

function reportProduct(reportedProduct) {

	console.log(3);

	reportedProduct.bought = true;

	$.ajax({

		url: `/products/${reportedProduct.id}`,
		method: "PUT",
		data: JSON.stringify(reportedProduct),
		dataType: "JSON",
		contentType: "application/json",

		success: function(responseJSON) {
			location.replace("./report.html");
		},

		error: function(errors) {
			console.log("error: ", errors);
		}
	});
}

function getReported(reported) {

	console.log(2);

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			let found = "";

			for (let i=0; i<responseJSON.length; i++)
				if (responseJSON[i].id == reported)
					found = responseJSON[i];

			reportProduct(found);
		},

		error: function(error) {
			console.log("Error en navbar", error);
		}
	});
}

function main() {

	console.log("AAAAAAAAAA");

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
}

function secondary() {
	$(".searches-container").on("click", function(e) {		
		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
		SearchSearch(e.target.id);
	});
}

function third() {

	$("#reportSearch").on("click", function(e) {
		console.log("Reportar");
		let reported = $('.rightSearch').attr('id');
		getReported(reported);
	});
}

third();