console.log("Hello");
$(".category").hide();


function hide(id) {

	$(".categories").hide();
	$(".category").show();

	$(".selectedTitle").html(id);	
}
 
$(".colFlex").on("click", (e) => {
	
	e.preventDefault();
	hide(e.target.id);
});

$(".back").on("click", (e) => {

	e.preventDefault();

	$(".categories").show();
	$(".category").hide();
})