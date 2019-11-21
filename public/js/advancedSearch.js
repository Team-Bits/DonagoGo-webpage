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
					if (filter1.category == $("#search-product-category").val())
						filter2.push(filter1[i]);

			} else {
				filter2 = filter1.slice();
			} console.log(filter2);

			// Filter location
			if ($("#search-product-location").val() != "") {
				
				for (let i=0; i<filter2.length; i++) {
				
					let location = filter2[i].location.toLowerCase()
					let posLocation = location.search($("#search-product-location").val().toLowerCase();

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
					let posBrand = brand.search($("#search-product-brand").val().toLowerCase();

					if (posBrand != -1)
						filter4.push(filter3[i]);
				}
			} else {
				filter4 = filter3.slice();
			}

			console.log(filter4);
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