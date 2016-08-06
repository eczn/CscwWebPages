/* 
 * jP is a kind of player plugins based on canvas and web audio API 
 * 
 * usage : 1,add canvas tag named jP in .html 
 *         2,and add code:'jP.init()' after <body> to use this script 
 *         3,if sucess... you can see a simply player display... 
 *
 *         ** jP is bind to the audio and canvas html element (id is "jPA" and "jPC")
 *
 *         ** jPen has some function to draw. it needs some para 
 * 
 */ 

/*
 *  this is a part of jP.js without audio play function .
 *  
 *  usage : 
 *      var temp = new pageAnimation('JPC'); // JPC is a canvas tag id name
 *      // click.event.pageX  
 *      // circleS(cX,cY,color,i,v,k,cV)
 *      temp.circleS(e.pageX,e.pageY,'rgba(255,255,255,1)',0,17,temp.sayK(e.pageX,e.pageY),6);
 */

"use strict"; 
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

	function setFillStyle(style){
		g.fillStyle = style;
	}

	function clearCanvas(){
		g.clearRect(0,0,width,height);
		// var i = 0; 
		// var imgTemp = g.getImageData(0,0,width,height); 

		// for(i=0; i<imgTemp.data.length ; i+=4 ){
		// 	imgTemp.data[i+3] = 0;
		// }
		// g.putImageData(imgTemp,0,0);
	}


	function circleS(cX,cY,color,i,v,k,cV){
		g.beginPath();
		g.fillStyle = color;
		g.lineWidth = 1;

//		g.fillRect(cX - i/2 ,cY - i/2,cX + i/2,cY + i/2);
		g.arc(cX,cY,  i  ,0,6.29,false);
		g.fill(); //画实心圆

		g.closePath();

		if (i>(height+width) || $("#"+domCanvasId).css("display") == "none"){
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

	function rectS(cX,cY,color,i,v,k,cV){
		g.beginPath();
		g.fillStyle = color;
		g.lineWidth = 1;

//		g.fillRect(cX - i/2 ,cY - i/2,cX + i/2,cY + i/2);
		// g.arc(cX,cY,  i  ,0,6.29,false);
		// g.fill(); //画实心圆

		g.closePath();

		if (i>(height+width) || $("#"+domCanvasId).css("display") == "none"){
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

	var width_1_height = width / height;
	function rectAnimation(x0,y0,w,h,v){
		// g.clearRect(0,0,width,height);
		var imgTemp,i; 

		g.beginPath();
		g.lineWidth = 5;
		g.strokeStyle = "#ffb930";
		g.rect(x0,y0,w,h);
		g.stroke();
		g.closePath();

		imgTemp = g.getImageData(0,0,width,height); 
		for(i=0; i<imgTemp.data.length ; i+=4 ){
			imgTemp.data[i+3] /= v;
		}
		g.putImageData(imgTemp,0,0);

		// x0*=1-v;
		// y0*=(1-v) / width_1_height;
		// w+=2*v;
		// h+=2*v / width_1_height; 
		// x0 -= 32; 
		// y0 -= 32/width_1_height; 
		// w+=64;
		// h+=64/width_1_height;
		if ((x0<=-8 && y0<=-8) && (w>=width-8 && h>=height-8)){
			// alert("clear!");
			// g.clearRect(0,0,width,height);
			$(domCanvas).css("display","none");
			
			return;
		}

		window.requestAnimationFrame(function(){
			rectAnimation(x0/1.1 - 4,(y0/1.1) - 2,w*1.1 + 4,h*1.1 + 4,v+0.4);
		}); 
	}

	this.domCanvas = domCanvas;
	this.circleS = circleS;
	this.sayK = sayK;
	this.setFillStyle = setFillStyle;
	this.clearCanvas = clearCanvas;
	this.rectAnimation = rectAnimation; 
}
