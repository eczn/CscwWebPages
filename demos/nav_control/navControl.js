
function navInit(){
	this.initActive = function(){
		// 被点击的时候清空类名
		//$(navBtn).removeClass("active"); 


		var preview_active_name = $(".active")[0].id;
		console.log("preview_active_name : "+ preview_active_name);

		let now_active_name = $(this)[0].id;
		console.log("now_active_name : " + now_active_name);

		console.log($("#"+now_active_name).attr('position')); 

		if (now_active_name == preview_active_name){
			return false; 
		}

		let dx; 
		if ($("#"+preview_active_name).attr('position') < $("#"+now_active_name).attr('position')){
			dx = 1; 
		} else {
			dx = -1; 
		}

		$("#"+preview_active_name+"container").animate({
			left: ((-100 * dx )+"%")
		},1000,function(){
			$(this).css("left",100*dx+"%"); //-100%
		});

		$(".active").removeClass("active");
	
		// 给被点击的添加类名 
		$(this).addClass("active");



		$("#"+now_active_name+"container").css("left",100*dx+"%").animate({
			left: "0",
		},1000);

	}
}
