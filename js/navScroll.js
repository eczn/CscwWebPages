function scroll(){

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >= 45){
			$("#header").addClass("header-fixed");
			$("#nav").addClass("nav-fixed");
			$("#logo").addClass("logo-fixed");
		}
		if(top < 45){
			$("#header").removeClass("header-fixed");
			$("#nav").removeClass("nav-fixed");
			$("#logo").removeClass("logo-fixed");
		}
		var height = $("#header").height();
		console.log(height);
		$("#homeContainer").css("top",height);
		$("#introducedContainer").css("top",height);
		$("#projectContainer").css("top",height);
		$("#connectContainer").css("top",height);
	});
}