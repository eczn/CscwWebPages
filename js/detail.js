function getLeftHeight() {
	$("#viewWindow").css("height",$("#leftBody").height());
	$(window).resize(function() {
		var leftheight = $("#leftBody").height();
  		$("#viewWindow").css("height",leftheight);
	});
}
function transform() {
	$("#java,#fe,#ios,#android,#php,#c").bind("click",function(){
		// console.log($("#six-group-container>div"));
		// console.log(this);
		// console.log($(this).siblings().length);
		var logoArray = $(this).siblings();
		var logo_array_id = Array(5);
		var logo_array_length = $(this).siblings().length;
		for (var i = 0; i < logo_array_length; i++) {
			logo_array_id[i] = logoArray[i].id
		}
		for (var i = 0; i < logo_array_length; i++) {
			$("."+logo_array_id[i]+"-intro"+  ",#"+logo_array_id[i]+"Content").addClass("hidden");
		}
		// console.log($("#six-group-container>div").length);
		$("."+this.id+"-intro"+  ",#"+this.id+"Content").removeClass("hidden");
		setTimeout(function() {
			$("#six-group-container").hide();
			$("#detail-wrap").css({"top":"8%"});
			$("#groupIntroduction,#content,.right-body").removeClass("fadeOutUp");
			$("#back").show();
			$("#groupIntroduction").addClass("fadeInDownFast");
			$("#content").addClass("fadeInDown");
			$(".right-body").addClass("fadeInDown");			
		},700);

	})
	$("#back").bind("click",function(){
		//***remove class**//
		$("#groupIntroduction").removeClass("fadeInDownFast");
		$("#content").removeClass("fadeInDown");
		$(".right-body").removeClass("fadeInDown");
		// ------------------------------------------//
		$("#back").hide();
		$("#groupIntroduction,#content,.right-body").addClass("fadeOutUp");
		setTimeout(function(){
			$("#six-group-container").fadeIn(600,function(){
			$("#detail-wrap").css({"top":"-200%"});	
			});		
		},500)
	})
	$(".navBtn").bind("click",function(){
		setTimeout(function(){
			$("#back").trigger("click");  // holi high
		},1000);
	})
	$(".navBtn[position=2]").bind("click",function(){
		setTimeout(function(){
			$("#back").trigger("click");  // holi high
		},0);
	})
}
$(".year-number").bind("click",function(){
	$(".year-number").css("background-color","#7fcdec");
	$(this).css("background-color","#ffb930");
}) 
$("[year='2016']").trigger("click");
console.log($(".year-number")[0]);

