var links=document.getElementsByTagName('canvas');
for( var i=1; i<links.length;i+=2){
    var value = links[i];
    var cxt = value.getContext("2d");
    cxt.fillStyle ="rgba(249,181,48,1)" ;
    cxt.fillRect(0, 0, 340, 200);  
}

for( var i=2; i<links.length;i+=2){
    var value = links[i];
    var cxt = value.getContext("2d");
    cxt.fillStyle = "rgba(113,177,202,1)";
    cxt.fillRect(0, 0, 340, 200);  
}

