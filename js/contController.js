// Show description tab and hide the other two
$("#description-tab").on ("click", function(event) { 

	$("#info-tab").removeClass("active");
	$("#info-tab").attr("aria-selected","false");
	
	$("#data-tab").removeClass("active");
	$("#data-tab").attr("aria-selected","false");

	$("#description-tab").addClass("active");
	$("#description-tab").attr("aria-selected","true");

	$("#description")
});

// Show info tab and hide the other two
$("#info-tab").on ("click", function(event) { 

	$("#description-tab").removeClass("active");
	$("#description-tab").attr("aria-selected","false");

	$("#data-tab").removeClass("active");
	$("#data-tab").attr("aria-selected","false");

	$("#info-tab").addClass("active");
	$("#info-tab").attr("aria-selected","true");
});

// Show data tab and hide the other two
$("#data-tab").on ("click", function(event) { 

	$("#description-tab").removeClass("active");
	$("#description-tab").attr("aria-selected","false");

	$("#info-tab").removeClass("active");
	$("#info-tab").attr("aria-selected","false");

	$("#data-tab").addClass("active");
	$("#data-tab").attr("aria-selected","true");
});