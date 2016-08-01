function pageAnimation(domCanvasId){
	var domCanvas = window.document.getElementById(domCanvasId);
	domCanvas.width =  parseInt(window.innerWidth);
	domCanvas.height = parseInt(window.innerHeight);

	var width = domCanvas.width,
		height = domCanvas.height,
		g = domCanvas.getContext('2d');

	function sayK(cX,cY){
		return ((height/2 - cY) / (width/2 - cX));
	}

	function circleS(cX,cY,color,i,v,k,cV){
		g.beginPath();

//		g.fillStyle = 'rgba(255,255,255,0.5)';
//		g.fillRect(0,0,width,height);

		g.fillStyle = color;
		g.lineWidth = 1;
		g.arc(cX,cY,  i  ,0,6.29,false);
		g.fill(); //画实心圆
		g.closePath();

		if (i>(height+width)){
			return;
		} else {
			if ( Math.abs(cX-(width/2)) > 2.001 ){
				var temp = cV * (width/2 -cX) / Math.abs(cX-width/2);
				cX += temp;
				cY += temp * k; 
			}
			window.requestAnimationFrame(function(){
				circleS(cX,cY,color,i+v,v,k,cV);
			}); 		
		}
	}

	this.domCanvas = domCanvas;
	this.circleS = circleS;
	this.sayK = sayK;
}
