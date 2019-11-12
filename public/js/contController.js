function postDonation(newDonation) {

}

function contController() {

	// Show description tab and hide the other two
	$("#description-tab").on ("click", function(event) { 

		event.preventDefault();
		
		// Modify tab
		$("#info-tab").removeClass("active");
		$("#info-tab").attr("aria-selected","false");
		
		$("#data-tab").removeClass("active");
		$("#data-tab").attr("aria-selected","false");

		$("#description-tab").addClass("active");
		$("#description-tab").attr("aria-selected","true");

		// Modify info tab
		$("#info").removeClass("show");
		$("#info").removeClass("active");

		$("#data").removeClass("show");
		$("#data").removeClass("active");

		$("#description").addClass("show");
		$("#description").addClass("active");
	});

	// Show info tab and hide the other two
	$("#info-tab").on ("click", function(event) { 

		event.preventDefault();
		
		// Modify tab
		$("#description-tab").removeClass("active");
		$("#description-tab").attr("aria-selected","false");

		$("#data-tab").removeClass("active");
		$("#data-tab").attr("aria-selected","false");

		$("#info-tab").addClass("active");
		$("#info-tab").attr("aria-selected","true");

		// Modify info tab
		$("#description").removeClass("show");
		$("#description").removeClass("active");

		$("#data").removeClass("show");
		$("#data").removeClass("active");

		$("#info").addClass("show");
		$("#info").addClass("active");
	});

	// Show data tab and hide the other two
	$("#data-tab").on ("click", function(event) { 

		event.preventDefault();
		
		// Modify tab
		$("#description-tab").removeClass("active");
		$("#description-tab").attr("aria-selected","false");

		$("#info-tab").removeClass("active");
		$("#info-tab").attr("aria-selected","false");

		$("#data-tab").addClass("active");
		$("#data-tab").attr("aria-selected","true");

		// Modify info tab
		$("#description").removeClass("show");
		$("#description").removeClass("active");

		$("#info").removeClass("show");
		$("#info").removeClass("active");

		$("#data").addClass("show");
		$("#data").addClass("active");
	});

	// Change tab using buttons

	// Show description tab and hide the other two
	$("#next1").on ("click", function(event) { 

		event.preventDefault();
		
		// Modify tab
		$("#description-tab").removeClass("active");
		$("#description-tab").attr("aria-selected","false");

		$("#data-tab").removeClass("active");
		$("#data-tab").attr("aria-selected","false");

		$("#info-tab").addClass("active");
		$("#info-tab").attr("aria-selected","true");

		// Modify info tab
		$("#description").removeClass("show");
		$("#description").removeClass("active");

		$("#data").removeClass("show");
		$("#data").removeClass("active");

		$("#info").addClass("show");
		$("#info").addClass("active");
	});

	// Show data tab and hide the other two
	$("#next2").on ("click", function(event) { 

		event.preventDefault();
		
		// Modify tab
		$("#description-tab").removeClass("active");
		$("#description-tab").attr("aria-selected","false");

		$("#info-tab").removeClass("active");
		$("#info-tab").attr("aria-selected","false");

		$("#data-tab").addClass("active");
		$("#data-tab").attr("aria-selected","true");

		// Modify info tab
		$("#description").removeClass("show");
		$("#description").removeClass("active");

		$("#info").removeClass("show");
		$("#info").removeClass("active");

		$("#data").addClass("show");
		$("#data").addClass("active");
	});

	// Show description tab and hide the other two
	$("#back2").on ("click", function(event) { 

		event.preventDefault();

		// Modify tab
		$("#info-tab").removeClass("active");
		$("#info-tab").attr("aria-selected","false");
		
		$("#data-tab").removeClass("active");
		$("#data-tab").attr("aria-selected","false");

		$("#description-tab").addClass("active");
		$("#description-tab").attr("aria-selected","true");

		// Modify info tab
		$("#info").removeClass("show");
		$("#info").removeClass("active");

		$("#data").removeClass("show");
		$("#data").removeClass("active");

		$("#description").addClass("show");
		$("#description").addClass("active");
	});

	// Show info tab and hide the other two
	$("#back3").on ("click", function(event) { 

		event.preventDefault();

		// Modify tab
		$("#description-tab").removeClass("active");
		$("#description-tab").attr("aria-selected","false");

		$("#data-tab").removeClass("active");
		$("#data-tab").attr("aria-selected","false");

		$("#info-tab").addClass("active");
		$("#info-tab").attr("aria-selected","true");

		// Modify info tab
		$("#description").removeClass("show");
		$("#description").removeClass("active");

		$("#data").removeClass("show");
		$("#data").removeClass("active");

		$("#info").addClass("show");
		$("#info").addClass("active");
	});

	$("#submit").on ("click", (event) => {
		
		event.preventDefault();

		console.log($("#category").val());

		if ($("#name").val() && $("#descriptionText").val() && $("#quantity").val() && $("#condition").val() != "select") {
			
			let newDonation = {
				name : $("#name").val(),
				description : $("#descriptionText").val(),
				image : "phone.jpg",
				location : "",
				timeCreated : new Date(),
				quantity : $("#quantity").val(),
				universalCode : $("#universalCode").val(),
				guarantee : $("#guarantee").val(),
				brand : $("#brand").val(),
				model : $("#model").val(),
				year : $("#year").val(),
				condition : $("#condition").val(),
				category : $("#category").val(),
				bought : false
			};

			console.log("Something is in the box");
		}

		else {
			window.alert("Aun te hace falta llenar un dato");
		}
	});
}

contController();