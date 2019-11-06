let content = `	<div class="nav-align">
									<a href="./logIn.html">LogIn/SignUp</a>
									<a href="./index.html">Home</a>
									<a href="./discover.html" src="">Descubre</a>
									<a href="./donate.html" src="">Publicar</a>
									<a href="./help.html" src="">Ayuda</a>
									<div class="form-group row">
										<div class="nav-divide">
											<input class="form-control nav-input" placeholder="" id="ex1" type="text">
											<button type="button" class="btn btn-success nav-btn" id="nav-search-btn">Buscar</button>
										</div>
									</div>
								</div>`;
document.getElementById("navbar").innerHTML = content;

$("#nav-search-btn").on("click", function(e) {

	e.preventDefault();

	

})