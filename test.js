var css = "aaaaa;{aaa;}aaaa;aaaaa;aaaaa;";
let line = "";
let cont = document.getElementById('content');
let ident = 0;

for (let i=0; i<css.length; i++) {
	
	line+=css.charAt(i);

	if (css.charAt(i) == '{')
		ident++;

	if (css.charAt(i) == '}')
		ident--;

	if (css.charAt(i) === ';') {

		for (let j=0; j<ident; j++)
			line+="";

		cont.innerHTML += "<div>"+line+"</div>";
		line = "";
	}
}