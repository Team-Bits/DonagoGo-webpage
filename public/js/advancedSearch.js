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

			if ($("#search-product-name").val() != "") 
				for (let i=0; i<responseJSON.length; i++)
					if (responseJSON[i].name.toLowerCase().search($("#search-product-name").val().toLowerCase()) != -1)
						filter1.push(responseJSON[i]);

			console.log(filter1);

			if ($("#search-product-category").val() != "")
				for (let i=0; i<filter1.length; i++)
					if (filter1[i].category.toLowerCase().search($("#search-product-category").val().toLowerCase()) != -1)
						filter2.push(filter1[i]);

			console.log(filter2);

			if ($("#search-product-location").val() != "")
				for (let i=0; i<filter2.length; i++)
					if (filter2[i].location.toLowerCase().search($("#search-product-location").val().toLowerCase()) != -1)
						filter3.push(filter2[i]);

			console.log(filter3);

			if ($("#search-product-brand").val() != "")	
				for (let i=0; i<filter3.length; i++)
					if (filter3[i].brand.toLowerCase().search($("#search-product-brand").val().toLowerCase()) != -1)
						filter4.push(filter3[i]);

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