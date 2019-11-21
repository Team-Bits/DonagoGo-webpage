// Displaythe categories in the order that must be displayed
$(".productDetail").hide();
$(".categories").show();
$(".category").hide();
$(".boughtProduct").hide();

// Variable to store the product that will be bought
let idProduct;

function updateOneProduct(boughtProduct) {

	boughtProduct.bought = true;

	$.ajax({

		url: `./products/${boughtProduct.id}`,
		method: "PUT",
		data: JSON.stringify(boughtProduct),
		dataType: "JSON",
		contentType: "application/json",

		success: function(responseJSON) {
			window.location.href = "./schedule.html";
		},

		error: function(error) {
			console.log("fail in update", error);
		}
	});
}

function getOneProduct(idProduct) {

	let found = ""

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			for (let i=0; i<responseJSON.length; i++) 
				if (responseJSON[i].id == idProduct)
					found = responseJSON[i];

			if (found != "") {
				updateOneProduct(found);
			}
		},

		error: function(error) {
			console.log("Juguito de chale")
		}
	});
}

function getProducts(category) {

	let categoryProducts = [];

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			let i=0, j=0;

			$(".category").empty();
			$(".category").append(`<button type="button" class="btn btn-success back">Regresar</button>`);

			for (let i=0; i<responseJSON.length; i++)
				if (responseJSON[i].category == category)
					categoryProducts.push(responseJSON[i]);

			if (categoryProducts.length >= 4) {

				for (i=0; i<categoryProducts.length/4; i++) {

					$(".category").append(`
						<div class="line">
							<div class="rowFlex">
					`); 

					for (j=0; j<4; j++) {

						if (categoryProducts[4*i+j] != undefined) {
							$(".rowFlex").last().append(`
								<div class="colFlex product">
									<img id="${categoryProducts[4*i+j].id}" class="sectionImage" src="./img/${categoryProducts[4*i+j].image}">
									<div class="subTitle">
										<h5>${categoryProducts[4*i+j].name}</h5>
									</div>
								</div>
							`);
						}
					}

					$(".category").append(`				
						</div>
					</div>		
					`);
				}
			}

			if (categoryProducts.length > 0 && 4*i != categoryProducts.length) {

				$(".category").append(`
					<div class="line">
						<div class="rowFlex">
				`);

				for (j=0; j<categoryProducts.length%4; j++) {
					
					if (categoryProducts[4*i+j] != undefined) {
						$(".rowFlex").last().append(`
							<div class="colFlex product">
								<img id="${categoryProducts[4*i+j].id}" class="sectionImage" src="./img/${categoryProducts[4*i+j].image}">
								<div class="subTitle">
									<h5>${categoryProducts[4*i+j].name}</h5>
								</div>
							</div>
						`);
					}
				}

				$(".category").append(`				
					</div>
				</div>		
				`);
			}

			controller();
		},

		error: function(err) {
			console.log("Juguito de Chale: ", err);
		}
	});
}

function getOneProduct(id) {

	$.ajax({
		url : "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			$(".productDetail").empty();
			$(".productDetail").append('<button type="button" class="btn btn-success backCategory">Regresar</button>');

			let selectedProduct;

			for (let i=0; i<responseJSON.length; i++) 
				if (responseJSON[i].id == id)
					selectedProduct = responseJSON[i];

			$(".productDetail").append(`
				<div class="divitionDetail">
					<div class="leftDetail">
						<img class="detailImage" src="./img/${selectedProduct.image}">
					</div>
					<div id="${selectedProduct.id}" class="rightDetail">
						<h2>${selectedProduct.name}</h2>
						<p class="descriptionDetail">
							${selectedProduct.description}  
						</p>

						<div class="split">
							<div class="characteristicsDetail">
								<div>
									<span class="charDetail">Condición:</span>
									<span>${selectedProduct.condition}</span>
								</div>
								<div>
									<span class="charDetail">Cantidad disponible: </span>
									<span class="valDetail">${selectedProduct.quantity}</span>
								</div>

								${(selectedProduct.universalCode == "") ? `` :

									`
									<div>
										<span class="charDetail">Código Universal: </span>
										<span class="valDetail">${selectedProduct.universalCode}</span>
									</div>
									`
								}
																	
								${(selectedProduct.brand == "") ? `` :
									`	
									<div>
										<span class="charDetail">Marca: </span>
										<span class="valDetail">${selectedProduct.brand}</span>
									</div>
									`
								}

								${(selectedProduct.model == "") ? `` :

									`
									<div>
										<span class="charDetail">Modelo: </span>
										<span class="valDetail">${selectedProduct.model}</span>
									</div>
									`
								}

								${(selectedProduct.year == "") ? `` :
									`
										<div>
											<span class="charDetail">Año: </span>
											<span class="valDetail">${selectedProduct.year}</span>
										</div>
									`
								}
								
							</div>
						</div>

						<div class="locationDetail">
							<div class="titleDetail">Recoger en...</div>
							<div class="identDetail">📍 ${selectedProduct.location}</div>
						</div>

						<div class="buttonsDetail">
							<a href="./save.html"><button type="button" id="saveDetail" href="./save.html" class="btn btn-primary">Guardar</button></a>
							<button type="button" id="buyDetail" class="btn btn-success">Adquirir</button>
							<a href="./report.html"><button type="button" id="reportDetail" class="btn btn-warning">Reportar</button></a>
						</div>
					</div>
				</div>
			`);

			$(".productDetail").append('<button type="button" class="btn btn-success backCategory backCategory-botom">Regresar</button>');
			controller();
		},

		error: function(err) {
			console.log("Juguito de Chale: ", err);	
		}
	});
}

function controller() {
	
	$(".main").on("click", (e) => {
	
		e.preventDefault();

		$(".productDetail").hide();
		$(".categories").hide();
		$(".category").show();
		$(".boughtProduct").hide();

		getProducts(e.target.id);

		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
	});

	$(".product").on("click", (e) => {
		
		e.preventDefault();
		
		console.log(e.target.id);

		getOneProduct(e.target.id);

		$(".productDetail").show();
		$(".categories").hide();
		$(".category").hide();
		$(".boughtProduct").hide();

		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
	});

	$(".back").on("click", (e) => {

		e.preventDefault();

		$(".productDetail").hide();
		$(".categories").hide();
		$(".category").hide();
		$(".boughtProduct").hide();

		location.reload();

		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
	});

	$(".backCategory").on("click", (e) => {

		e.preventDefault();

		$(".categories").hide();
		$(".category").show();
		$(".productDetail").hide();
		$(".boughtProduct").hide();

		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
	});

	$("#buyDetail").on("click", (e) => {
		
		e.preventDefault();

		idProduct = $(".rightDetail").attr('id');

		$(".categories").hide();
		$(".category").hide();
		$(".productDetail").hide();
		$(".boughtProduct").show();

		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
	});	

	$("#make-date").on("click", (e) => {

		e.preventDefault();
		console.log(idProduct);
		getOneProduct(idProduct)		
	});
}

controller();