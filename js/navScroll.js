function scroll(){

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >= 95){
			$("#header").addClass("header-fixed");
			$("#nav").addClass("nav-fixed");
			$("#logo-white").addClass("hide");
			$("#logo-black").removeClass("hide");
			$("#nav a").css("color","#000");
		}
		if(top < 95){
			$("#header").removeClass("header-fixed");
			$("#nav").removeClass("nav-fixed");
			$("#logo-white").removeClass("hide");
			$("#logo-black").addClass("hide");
			$("#nav a").css("color","#FFF");
		}
		var height = $("#header").height();
		// console.log(height);
		$("#homeContainer,#introducedContainer,#projectContainer,#connectContainer").css("top",height);
	});
}