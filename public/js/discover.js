$(".productDetail").hide();
$(".categories").show();
$(".category").hide();
$(".boughtProduct").hide();

// $(".productDetail").hide();
// $(".categories").hide();
// $(".category").hide();
// $(".boughtProduct").show();
 
function getProducts(category) {

	let categoryProducts = [];

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {
			
			$(".category").empty();
			$(".category").append(`<button type="button" class="btn btn-success back">Regresar</button>`);

			for (let i=0; i<responseJSON.length; i++) {
				if (responseJSON[i].category == category)
					categoryProducts.push(responseJSON[i]);
			}

			for (let i=0; i<categoryProducts.length/4; i++) {
				

				$(".category").append(
					`
						<div class="line">
							<div class="rowFlex">
					`
				);

				for (let j=0; j<4; j++) {
				 console.log(i, j, categoryProducts[4*i+j].image);
					$(".rowFlex").append(
						`
							<div class="colFlex product">
								<img id="" class="sectionImage" src="./img/${categoryProducts[4*i+j].image}">
								<div class="subTitle">
									<h5>${categoryProducts[4*i+j].name}</h5>
									<p class="subInfo location">📍 ${categoryProducts[4*i+j].location}<br></p>
								</div>
							</div>
						`
					);
				}

				$(".category").append(
					`				
						</div>
					</div>		
					`
				);
			}			

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

		location.reload();

		// $(".categories").show();
		// $(".category").hide();
		// $(".productDetail").hide();
		// $(".boughtProduct").hide();

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

controller();