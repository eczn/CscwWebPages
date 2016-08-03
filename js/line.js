// line.js to draw line for timeline 
// canvas line rendering 由line.js强力驱动
function penInit(className,width,height){
	var canvas = $("."+className); 
	var i; 

	for (i=0;i<canvas.length;i++){
		canvas[i].width = width; 
		canvas[i].height = height; 
	}
	this.render = function(){
		var i = 0; 
		for (i=0;i<canvas.length;i++){
			var g = canvas[i].getContext('2d');
			g.beginPath();
			g.strokeStyle = "#7fedec";
			g.lineWidth = 3;
			g.moveTo(width,30);
			g.lineTo(width/2,30);
			g.lineTo(0,80);
		
			g.stroke();
			g.closePath();

		}
	}
}
