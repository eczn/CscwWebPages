var links=document.getElementsByTagName('canvas');
for( var i=0; i<links.length;i+=2){
    (function (value){  
        var value = links[i];
        var cxt = value.getContext("2d");
        cxt.fillStyle ="rgba(249,181,48,1)" ;
        cxt.fillRect(0, 0, 340, 200);  
    }());               
}

for( var i=1; i<links.length;i+=2){
    (function (value){  
        var value = links[i];
        var cxt = value.getContext("2d");
        cxt.fillStyle = "rgba(113,177,202,1)";
        cxt.fillRect(0, 0, 340, 200);  
    }());               
}

$(document).ready(function(){
    $(".changecolor").mouseleave(function(){
        $(".colorchange").fadeTo(800,1);
    });
    $(".colorchange").mouseenter(function(){
        $(this).fadeTo(800,0);
    });
});


