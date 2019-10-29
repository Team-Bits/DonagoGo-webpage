console.log("Hello");
$(".category").hide();
$(".productDetail").hide();


function hide(id) {

	$(".categories").hide();
	$(".category").show();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
}
 
$(".main").on("click", (e) => {
	
	e.preventDefault();
	hide(e.target.id);

	// window.scrollTo(0, 0);

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});

});

$(".product").on("click", (e) => {
	
	e.preventDefault();
	$(".productDetail").show();
	$(".categories").hide();
	$(".category").hide();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
});

$(".back").on("click", (e) => {

	e.preventDefault();

	$(".categories").show();
	$(".category").hide();
	$(".productDetail").hide();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
});


$(".backCategory").on("click", (e) => {

	e.preventDefault();

	$(".categories").hide();
	$(".category").show();
	$(".productDetail").hide();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
});