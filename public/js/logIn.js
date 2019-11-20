$(".user-information").hide();

function userIsIn() {

	$.ajax({
		url: "/users",
		method: "GET",
		dataType: "json",

		success: function(responseJSON) {

			let log = "";

			for (let i=0; i<responseJSON.length; i++)
				if (responseJSON[i].logged)
					log = responseJSON[i];

			if (log == "") {
				$(".user-information").hide();
				$(".user-registration").show();
			} 

			else {
				$(".user-registration").hide();
				$(".user-information").show();
				$(".user-information").empty();

				$(".user-information").append(`
					<h1>${log.name}</h1>
					<section class="sectionUser">
						<h3 class="titleUser">📦 Pedidos</h3>
						<a href="./orders.html"><button type="button" class="btn btn-info">Ver todos los pedidos</button></a>
					</section>

					<section class="sectionUser">
						<h3 class="titleUser">🎁 Publicaciones</h3>
						<a href="./publications.html"><button type="button" class="btn btn-info">Ver todas las publicaciones</button></a>
					</section>

					<section class="sectionUser">
						<h3 class="titleUser">💾 Productos Guardados</h3>
						<button type="button" class="btn btn-info btn-space">Ver productos guardados</button>
					</section>

					<section class="sectionUser">
						<h3 class="titleUser">📍 Direcciones</h3>
						<button type="button" class="btn btn-info btn-space">Administrar direcciones</button>
					</section>

					<section class="sectionUser">
						<h3 class="titleUser">💳 Opciones de pago</h3>
						<button type="button" class="btn btn-info btn-space">Administrar opciones de pago</button>
					</section>

					<section class="sectionUser">
						<h3 class="titleUser">⚙️ Configuración</h3>
						<button type="button" class="btn btn-info btn-space">Administrar configuracio</nbutton>
					</section>
				`);
			}
		},

		error: function(error) {
			console.log("Error en navbar", error);
		}
	});
}userIsIn();

// Makes a server call to create a user
function createUser(newUser) {

	$.ajax({

		url: "/users",
		method: "POST",
		data: JSON.stringify(newUser),
		dataType: "JSON",
		contentType: "application/json",

		// On success, change to user creatin screen
		success: function(responseJSON) {
			console.log("success: ", responseJSON);
			window.location.href = "./publish.html"
		},

		error: function(error) {
			console.log("Juguito de chale: ", error);
		}
	});
}

// Make a server call to log in the user
function logUser(userLogged) {

	$.ajax({

		url: `/users/${userLogged.email}`,
		method: "PUT",
		data: JSON.stringify(userLogged),
		dataType: "JSON",
		contentType: "application/json",

		success: function(responseJSON) {
			console.log("success: ", responseJSON);
		},

		error: function(error) {
			console.log("Juguito de chale: ", error);
		}
	});
}

// Main function
function main() {

	// Sign in
	$("#signInBtn").on("click", function() {

		// Validates all input filled
		if (!$("#name-reg").val() || !$("#lname-reg").val() || !$("#mail-reg").val() || !$("#pwd-reg").val() || !$("#conf-pwd-reg").val()) {
			alert("Por favor, llena todos los datos para crear una sesión");
		}

		// Validates passwords match
		else if ($("#pwd-reg").val() != $("#conf-pwd-reg").val()) {
			alert("Las contraseñas no coinciden");
		}

		// Creates user
		else {
			
			// Declare new
			let newUser = {
				id 				: 	"",
				name 			: 	$("#name-reg").val(),
				lastname 	: 	$("#lname-reg").val(),
				email			: 	$("#mail-reg").val(),
				password	: 	$("#pwd-reg").val(),	
			};

			createUser(newUser);
		}
	});

	// Log in
	$("#logInBtn").on("click", function() {

		let userLogged = {
			id 						: 	"",
			name 					: 	"",
			lastname 			: 	"",
			email					: 	$("#mail").val(),
			password 			: 	$("#pwd").val(),
			logged 				: 	true,
			idPurchases		: 	[],
			idSales 			: 	[],
			phoneNumbers	: 	[],
			directions 		: 	[]
		};
		
		logUser(userLogged);
	});

} main();