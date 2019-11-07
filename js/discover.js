$(".productDetail").hide();
$(".categories").show();
$(".category").hide();
$(".boughtProduct").hide();

// $(".productDetail").hide();
// $(".categories").hide();
// $(".category").hide();
// $(".boughtProduct").show();

function hide(id) {

	$(".categories").hide();
	$(".category").show();
	$(".boughtProduct").hide();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
}
 
$(".main").on("click", (e) => {
	
	e.preventDefault();
	hide(e.target.id);

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
	$(".boughtProduct").hide();

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
	$(".boughtProduct").hide();


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
	$(".boughtProduct").hide();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
});

$("#buyDetail").on("click", (e) => {
	
	e.preventDefault();

	$(".categories").hide();
	$(".category").hide();
	$(".productDetail").hide();
	$(".boughtProduct").show();

	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
});