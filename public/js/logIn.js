function createUser(newUser) {

	$.ajax({

		url: "/users",
		method: "POST",
		data: JSON.stringify(newUser),
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

function main() {

	$("#signInBtn").on("click", function() {

		if (!$("#name-reg").val() || !$("#lname-reg").val() || !$("#mail-reg").val() || !$("#pwd-reg").val() || !$("#conf-pwd-reg").val()) {
			alert("Por favor, llena todos los datos para crear una sesión");
		}

		else if ($("#pwd-reg").val() != $("#conf-pwd-reg").val()) {
			alert("Las contraseñas no coinciden");
		}

		else {
			
			let newUser = {
				id 				: 	$("#name-reg").val(),
				name 			: 	$("#lname-reg").val(),
				email			: 	$("#mail-reg").val(),
				password	: 	$("#pwd-reg").val(),	
			}

			console.log(1);
			createUser(newUser);
			console.log(2);
		}
	});
} main();