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
