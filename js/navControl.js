function navInit(){
	var memuStatus = 0; 
	this.initActive = function(){
		// 被点击的时候清空类名
		//$(navBtn).removeClass("active"); 

		var preview_active_name = $(".active")[0].id;
		console.log("preview_active_name : "+ preview_active_name);
		var now_active_name = $(this)[0].id;
		console.log("now_active_name : " + now_active_name);
		console.log($("#"+now_active_name).attr('position')); 

		setTimeout(function(){
			if (now_active_name == 'project'){
				$(".animate-back").animate({
					top: "100%",
				},1000,function(){
					$(this).css("display","none");
					$(".animate-back-left").animate({
						left: "-100%"
					},1000,function(){
						$(this).css("display","none");
					});
					$(".animate-back-right").animate({
						right: "-100%"
					},1000,function(){
						$(this).css("display","none");
					});
				});
			} else {
				$(".animate-back").css("top","0").css("display","block"); 
				$(".animate-back-left").css("left","0").css("display","block");;
				$(".animate-back-right").css("right","0").css("display","block");;
			}
		},1000);

		if (now_active_name == preview_active_name || $("#"+preview_active_name+"Container").is(":animated")){
			return false; 
		}

		var dx; 
		if ($("#"+preview_active_name).attr('position') < $("#"+now_active_name).attr('position')){
			dx = 1; 
		} else {
			dx = -1; 
		}

		$("#"+preview_active_name+"Container").animate({
			left: ((-100 * dx )+"%")
		},1000,function(){
			$(this).css("left",100*dx+"%"); //-100%
		});

		$(".active").removeClass("active");
	
		// 给被点击的添加类名 
		$(this).addClass("active");

		$("#"+now_active_name+"Container").css("left",100*dx+"%").animate({
			left: "0",
		},1000);
	}
	
	this.mobileTouch = function(){
		if (memuStatus == 0){
			memuStatus = 1; 
			$("#memu").css("display","block").fadeTo(600,1); 
		} else if (memuStatus == 1){
			memuStatus = 0;
			$("#memu").fadeTo(600,0,function(){
				$(this).css("display","none"); 
			});
		}
		console.log("memu switch"); 
	}
}
