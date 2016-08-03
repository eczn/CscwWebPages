// line.js to draw line for timeline 
// 

function penInit(className,width,height){
	var canvas = $("."+className); 
	var i; 
	for (i=0;i<canvas.length;i++){
		canvas[i].width = width; 
		canvas[i].height = height; 
	}



}

penInit("canvas-line",80,150); 
