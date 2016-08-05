// line.js to draw line for timeline 
// canvas line rendering 由line.js强力驱动
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
	pen.render();

	$(".tree-item").mouseenter(function(){
		$(this).find(".title").css("color","#ffb930");

		console.log($(this).find('canvas'));
		pen.render("#ffb930",($(this).find('canvas'))[0]);
	});
	$(".tree-item").mouseleave(function(){
		$(this).find(".title").css("color","#7fedec");
		pen.render();
	});
	
}

function searchInit(search){
	var status = 0; 
	var $search = $(search); 

	// $("#search_circle,img#search_circle").click(function(){

	function refresh(){
		var widthSearchNeed; 
		var temp = window.innerWidth; 
		if (temp > 768){
			widthSearchNeed = 630; 
		} else if (temp > 500){
			widthSearchNeed = 440; 
		} else {
			widthSearchNeed = 300; 
		}

		return widthSearchNeed
	}

	function click(){
		var width_calced = refresh();

		if (status == 0){
			status = 1; 
			$search.css("opacity","1");
			$search.animate({
				width: width_calced+'px'
			},600,function(){
				$search.find("*").fadeTo(800,1);
			});

		} else if (status == 1) {
			status = 0; 

			$search.animate({
				// webkitFilter: "blur(10px)",
				opacity: '0'
			},600,function(){
				$(this).css("width","0");
			});
		}
	}

	this.refresh = refresh;
	this.click = click;
}


