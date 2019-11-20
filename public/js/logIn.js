function createUser(newUser) {

	
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

			createUser(newUser);
		}
	});
} main();