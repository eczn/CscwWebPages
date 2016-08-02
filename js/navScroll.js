function scroll(){

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		//当滚动条下拉95px后 导航栏变成fixed， 字体颜色logo颜色改变
		if(top >= 95){
			$("#header").addClass("header-fixed");
			$("#nav").addClass("nav-fixed");
			$("#logo-white").addClass("hide");
			$("#logo-black").removeClass("hide");
			$("#nav a").css("color","#000");
		}
		//当滚动条距离顶部距离小于95，清除fixed样式。
		if(top < 95){
			$("#header").removeClass("header-fixed");
			$("#nav").removeClass("nav-fixed");
			$("#logo-white").removeClass("hide");
			$("#logo-black").addClass("hide");
			$("#nav a").css("color","#FFF");
			$("#header").css("z-index",5);
		}
		var height = $("#header").height();
		$("#homeContainer,#introducedContainer,#projectContainer,#connectContainer").css("top",height);
	});
}