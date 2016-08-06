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
			$(".year-content div:first").trigger("click");  //离开小组详情页回到六个logo的地方的时候 默认回到点击2016
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
// ---------------------------点击年份切换控制代码----------------------------
var currentDate = new Date();
var year = currentDate.getFullYear(); //获得当前年份
var attr_year = $(".year-content div:first").attr("year");  //获取year-content中第一个div中的year属性值
var prev_active_year = attr_year; 	//点击之前显示的年份
console.log("当前页面显示的为："+attr_year);
$(".year-content div:first").addClass("year-number-hover"); //让当前这一年的那个方格显示为橙色

$(".year-number").bind("click",function(){
	var clickyear = $(this).attr("year");// 当前点击的年份
	console.log("clickyear is "+clickyear);
	console.log   (";prev_active_year is "+prev_active_year);
	if($(".first-content").hasClass("hidden")&& clickyear != prev_active_year&&!$(".second-content,.first-content").is(":animated")){
		$(".first-content").removeClass("hidden");
	}
	if(clickyear != prev_active_year&&!($(".first-content").hasClass("hidden"))&&!$(".second-content,.first-content").is(":animated")){
		$(".second-content").removeClass("hidden");
		$(".first-content").addClass("fadeOutUp1");
		setTimeout(function(){
			$(".first-content").addClass("hidden");
		},400);
		setTimeout(function(){
			$(".second-content").removeClass("hidden");
		},400);
		$(".second-content").addClass("fadeInUp1");

		setTimeout(function(){
			$(".first-content").removeClass("fadeOutUp1");
			$(".second-content").removeClass("fadeInUp1");
		},1000);
	}
	if(clickyear > prev_active_year){
		// alert("你点击的年份大于"+prev_active_year);
	}
	prev_active_year = clickyear;
	$(this).addClass("year-number-hover");	//让当前点击的方格变为橙色
	$(this).siblings().removeClass("year-number-hover");  //除了当前点击的方格，其他方格都变为蓝色

}) 

