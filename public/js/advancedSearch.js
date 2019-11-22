function getProducts() {

	let filter1 = [];
	let filter2 = [];
	let filter3 = [];
	let filter4 = [];

	$.ajax({

		url: "/products",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			console.log($("#search-product-category").val());

			// Filter name of article
			if ($("#search-product-name").val() != "") {

				for (let i=0; i<responseJSON.length; i++) {

					let name = responseJSON[i].name.toLowerCase();
					let posName = name.search($("#search-product-name").val().toLowerCase());

					if (posName != -1)
						filter1.push(responseJSON[i]);
				}
			} else {
				filter1 = responseJSON.slice();
			} console.log(filter1);

			// Filter category
			if ($("#search-product-category").val() != "") {

				for (let i=0; i<filter1.length; i++)
					if (filter1[i].category == $("#search-product-category").val())
						filter2.push(filter1[i]);

			} else {
				filter2 = filter1.slice();
			} console.log(filter2);

			// Filter location
			if ($("#search-product-location").val() != "") {
				
				for (let i=0; i<filter2.length; i++) {
				
					let location = filter2[i].location.toLowerCase();
					let posLocation = location.search($("#search-product-location").val().toLowerCase());

					if (posLocation != -1)
						filter3.push(filter2[i]);
				}
			} else {
				filter3 = filter2.slice();
			} console.log(filter3);

			// Filter brand
			if ($("#search-product-brand").val() != "")	{
				
				for (let i=0; i<filter3.length; i++) {
					
					let brand = filter3[i].brand.toLowerCase();
					let posBrand = brand.search($("#search-product-brand").val().toLowerCase());

					if (posBrand != -1)
						filter4.push(filter3[i]);
				}
			} else {
				filter4 = filter3.slice();
			} console.log(filter4);


			// Display obtained results
			$(".search-product-products").empty();
			for (let i=0; i<filter4.length; i++) {
				$(".search-product-products").append(`
					<div class="searches-container" id="${filter4[i].id}">
						<div class="searches-image" >
							<img class="searches-image-size" id="${filter4[i].id}" src="./img/${filter4[i].image}">
						</div>
						<div class="searches-info" id="${filter4[i].id}">
							<h5 class="search-info-title" id="${filter4[i].id}">${filter4[i].name}</h5>
							<ul>
								<li class="search-info-description search-info-sub" id="${filter4[i].id}">${filter4[i].description}</li>
								<li class="search-info-condition search-info-sub" id="${filter4[i].id}">${filter4[i].condition}</li>
								<li class="search-info-location search-info-sub" id="${filter4[i].id}">${filter4[i].location}</li>
							</ul>
						</div>
					</div>
				`);
			}
		},

		error: function(errors) {
			console.log("error: ", errors);
		}

	});

}

function main() {
	$("#search-product-btn").on("click", function(e) {
		getProducts();
	});	
}