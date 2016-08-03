function getLeftHeight() {
	$("#viewWindow").css("height",$("#leftBody").height());
	$(window).resize(function() {
		var leftheight = $("#leftBody").height();
  		$("#viewWindow").css("height",leftheight);
	});
}