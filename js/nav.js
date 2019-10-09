console.log("hola");

// let nav = ;
let content = `<div class="align">
								<a href="./logIn.html">LogIn/SignUp</a>
								<a href="./index.html">Home</a>
								<a href="./discover.html" src="">Descubre</a>
								<a href="./donate.html" src="">Dona</a>
								<a href="./sell.html" src="">Vende</a>
								<div class="form-group row">
									<div class="col-xs-2">
										<input class="form-control" placeholder="Buscar" id="ex1" type="text">
									</div>
								</div>
							</div>`;

document.getElementById("navbar").innerHTML = content;