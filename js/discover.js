console.log("Hello");
$(".category").hide();


function hide(id) {

	console.log(id);
	$(".categories").hide();
	$(".category").show();
}	
 
$(".colFlex").on("click", (e) => {
	
	e.preventDefault();
	hide(e.target.id);
});