// lineDraw.js
// 好大一股屎味。。。。。

function penInit(canvasId){
	var domCanvas = window.document.getElementById(canvasId);
	domCanvas.width = parseInt($('.container').css('width')) - 2*parseInt($('.leaf').css('width'));
	domCanvas.height = ($('.leaf').length/2) * (80 + 20); 

	var width = domCanvas.width,
		height = domCanvas.height,
		g = domCanvas.getContext('2d');


	g.beginPath();
	g.strokeStyle = "#d00";
	g.lineWidth = 1;
	g.moveTo(width/2,0);
	g.lineTo(width/2,height); 
	g.stroke();
	g.closePath();


	g.beginPath();
	g.strokeStyle = "#d00";
	g.lineWidth = 1;
	g.moveTo( width,100/4); 
	g.lineTo( 200+150 ,100/4);
	g.lineTo( 200 ,100*3/4);
	g.stroke();
	g.closePath();

//	....... 需要换种算法去弄。。。 不然都是屎。。

	function drawLine(start,end){

	}




	this.domCanvas = domCanvas;
	this.drawLine = drawLine;
}
