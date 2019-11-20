$(".user-information").hide();

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