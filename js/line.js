// line.js to draw line for timeline 
// canvas line rendering 由line.js强力驱动
"use strict"; 
function penInit(className,width,height){
	var canvas = $("."+className); 
	var i; 

	for (i=0;i<canvas.length;i++){
		canvas[i].width = width; 
		canvas[i].height = height; 
	}

	this.render = function(color,domCanvas){
		var i = 0,g,fillColor = "#7fedec",r=5; 

		if (color == undefined){
			color = "#7fedec"
		}

		for (i;i<canvas.length;i++){
			if (domCanvas!=undefined){
				g = domCanvas.getContext('2d')
				fillColor = "rgba(255,185,48,0.5)";
				r = 10; 
				// alert("!!!");
			} else {
				g = canvas[i].getContext('2d');	
			}

			g.beginPath();
			g.clearRect(0,0,width,height);
			g.strokeStyle = color;
			g.lineWidth = 3;
			g.moveTo(width,30);
			g.lineTo(60,30);
			g.lineTo(32,80);
			g.stroke();
			g.closePath();

			if (r == 10){
				g.beginPath();
				g.arc(32,80,r,0,6.29,false);
				g.fillStyle = fillColor;
				g.fill();
				g.closePath();				
			} else {
				g.beginPath();
				g.arc(32,80,5,0,6.29,false);
				g.fillStyle = "#7fedec";
				g.fill();
				g.closePath();
			}
		}
	}
}

function timelineInit(){
	var pen = new penInit("canvas-line",80,150);
	var detail_status = 0;
	pen.render();

	$(".tree-item").mouseenter(function(){
		$(this).find(".title").css("color","#ffb930");

		// console.log($(this).find('canvas'));
		pen.render("#ffb930",($(this).find('canvas'))[0]);
	});
	$(".tree-item").mouseleave(function(){
		$(this).find(".title").css("color","#7fedec");
		pen.render();
	});

	// $(".title").click(function(){
	// 	$(".tree-item").trigger("click");
	// 	return false; 
	// });

	$(".tree-item,#project-detail-back").click(function(e){
		if (detail_status == 0){
			detail_status = 1; 
			var temp = new pageAnimation('JPC');
			$("#JPC").css("display","block");
			temp.rectAnimation(e.clientX-e.offsetX,e.clientY - e.offsetY ,390,150,2);


			$(".project-detail").css("display","none").fadeTo(600,1); 

		} else if (detail_status == 1) {
			detail_status = 0; 
			$(".project-detail").fadeTo(600,0,function(){
				$(this).css("display","none");
			}); 
		}
		console.log(e.clientX);

		// $(this).animate({
		// 	width : "100%",
		// 	height: "100%",
		// 	top: "0",
		// 	left: "0"
		// },800);
	});

}

function searchInit(search){
	// 私有变量
	var status = 0; 
	var $search = $(search); 
	
	// 获取期望的width宽度 
	function refresh(){
		var widthSearchNeed; 
		var temp = window.innerWidth; 
		if (temp > 768){
			widthSearchNeed = 630; 
		} else if (temp > 425){
			widthSearchNeed = 400; 
		} else {
			widthSearchNeed = 320; 
		}
		return widthSearchNeed;
	}

	// 被点击的时候的函数
	function click(){
		if ($search.is(":animated")){
			console.log("now animating!!: 'search pushing'"); 
			return false; 
		}

		var width_calced = refresh();
		// var width_calced = $search.css("width"); 
		// alert($search.css("width"));
		if (status == 0){
			status = 1; 
			// $search.css("width","0");
			// $search.css("display","block");
			// $search.css("opacity","1");
			// $search.css("left","-630px"); 

			$search.animate({
				left: '0'
			},600,function(){
				
			});

		} else if (status == 1) {
			status = 0; 

			$search.animate({
				// webkitFilter: "blur(10px)",
				left: '-'+width_calced+'px'
			},600,function(){
				
				// $search.css("display","none");
			});
		}
	}

	this.refresh = refresh;
	this.click = click;
}
