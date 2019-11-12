$("#navbar").append(
	`	
		<div class="nav-align">
			<a href="./logIn.html">LogIn/SignUp</a>
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
	`
);

function searchEndPoint(userQuery) {

	var found = [];

	$.ajax({

		url: "/products",
		method: "GET",
		format: "json",

		success: function(responseJSON) {

			var name, description, brand, model, condition, category;
			var namePos, descriptionPos, brandPos, modelPos, conditionPos, categoryPos;


			$(".search").append(
				`
					<content class="searches-content">
				`
			);
			
			$(".searches-content").empty();

			for (let i=0; i<responseJSON.length; i++) {

				name = responseJSON[i].name.toLowerCase();
				description = responseJSON[i].description.toLowerCase();
				brand = responseJSON[i].brand.toLowerCase();
				model = responseJSON[i].model.toLowerCase();
				condition = responseJSON[i].condition.toLowerCase();
				category = responseJSON[i].category.toLowerCase();

				namePos = name.search(userQuery);
				descriptionPos = description.search(userQuery);
				brandPos = brand.search(userQuery);
				modelPos = model.search(userQuery);
				conditionPos = condition.search(userQuery);
				categoryPos = category.search(userQuery);

				if (namePos != -1 || descriptionPos != -1 || brandPos != -1 || modelPos != -1 || conditionPos != -1 || categoryPos != -1) {
					
					$(".search").append(
						`
							<div class="searches-container" id="${responseJSON[i].id}">
								<div class="searches-image">
									<img class="searches-image-size" src="./img/${responseJSON[i].image}">
								</div>
								<div class="searches-info">
									<h5 class="search-info-title">${responseJSON[i].name}</h5>
									<div class="search-info-description search-info-sub">📘 ${responseJSON[i].description}</div>
									<div class="search-info-condition search-info-sub">💯 ${responseJSON[i].condition}</div>
									<div class="search-info-location search-info-sub">📍 ⠀${responseJSON[i].location}</div>
								</div>
							</div>
						`
					);
				}
			}

			$(".search").append(
				`
					</content>
					<div class="space"></div>
				`
			);

			main();

		},

		error: function(err) {
			console.log("Juguito de Chale", errors)
		}
	});
}

function main() {

	$("#nav-search-btn").on("click", function(e) {

		e.preventDefault();

		$(".search").empty();
		$(".search").show();
		$(".notSearch").hide();

		$(".search").append(
			`
				<h2 class="searchTitle">🔎 Resultados de ${$("#ex1").val()}...</h2>
			`
		);

		let userQuery = $("#ex1").val().toLowerCase();

		searchEndPoint(userQuery);
	});

	$(".searches-container").on("click", function(e) {
		
		console.log(e.target.id);
	});
} main();