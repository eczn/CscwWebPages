// function block1(java){
//     var java =document.getElementById('java');
//     var cxt = java.getContext("2d");
//     cxt.fillStyle = "rgba(113,177,202,1)";
//     cxt.fillRect(0,0,340,200); 
// }
// block1();

// function block2(html5){
//     var html5 = document.getElementById('html5');
//     var cxt = html5.getContext("2d");
//     cxt.fillStyle = "rgba(113,177,202,1)";
//     cxt.fillRect(0,0,340,200);
// }
// block2();

// function block3(ios){
//     var ios = document.getElementById('ios');
//     var cxt =ios.getContext("2d");
//     cxt.fillStyle = "rgba(113,177,202,1)";

// }

var links=document.getElementsByTagName('canvas');
for( var i=0; i<links.length;i++){
        (function (value){  
            var value =links[i];
            var cxt = value.getContext("2d");
            cxt.fillStyle = "rgba(113,177,202,1)";
            cxt.fillRect(0, 0, 340, 200);  
        }());               
}