

$("#hide").click(function (e) {
	var div = this;
		$(".content").hide();
	e.preventDefault();
});

$("#show").click(function (e) {
	var div = this;
		$(".content").show();
	e.preventDefault();
});

$("#small").click(function (e) {
	var div = this;
		$('.content').css("font-size", "12px");
	e.preventDefault();
});

$("#big").click(function (e) {
	var div = this;
		$(".content").css("font-size","48px");
	e.preventDefault();
});


$("#blue").click(function (e){
	$(".content").css("background-color", "C5CAE9");
	e.preventDefault();
});

$("#red").click(function (e){
	$(".content").css("background-color", "#ffa291");
	e.preventDefault();
});










