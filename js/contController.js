// Show description tab and hide the other two
$("#description-tab").on ("click", function(event) { 

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