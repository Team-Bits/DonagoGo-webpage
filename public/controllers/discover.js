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

function createPurchase(boughtProduct) {

	newPurchase = {
		id: "",
		userPurchase: $(".nav-userId").attr('id'),
		userSaleId: "1",
		productId: boughtProduct.id,
		timeOfPurchase: new Date()
	};

	$.ajax({
		url: "/purchases",
		method: "POST",
		data: JSON.stringify(newPurchase),
		dataType: "JSON",
		contentType: "application/json",

		success: function(responseJSON) {
			console.log("success: ", responseJSON);
		},

		error: function(errors) {
			console.log("error: ", errors);
		}
	});
}

function getBuyProduct(idProduct) {

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
				createPurchase(found);
			}
		},

		error: function(error) {
			console.log("Juguito de chale")
		}
	});
}

// 1 Get products from 4 to 4
function getProducts(category) {

	let categoryProducts = [];

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			let i=0, j=0;

			$(".category").empty();
			$(".category").append(`<a href="./discover.html"><button type="button" class="btn btn-success back">Regresar</button></a>`);

			for (let i=0; i<responseJSON.length; i++)
				if (responseJSON[i].category == category && !responseJSON[i].bought)
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

			second();
		},

		error: function(err) {
			console.log("Juguito de Chale: ", err);
		}
	});
}

// 2 Get a specific product
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
			third(); //third
			returnBtns();
		},

		error: function(err) {
			console.log("Juguito de Chale: ", err);	
		}
	});
}

function controller() {
	
	// 1 Click on a category
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
}

function second() {

	// 2 Click on a single product, show its details
	$(".product").on("click", (e) => {
		
		e.preventDefault();
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
}

function third() {
		// 3 Make an apointment to get the product
	$("#make-date").on("click", (e) => {

		e.preventDefault();
		getBuyProduct(idProduct);
	});

	// 3 Buy a product
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
}

function returnBtns() {

	// 1 Reload page
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

		// 2 Return to the categories
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
}

controller();
third();