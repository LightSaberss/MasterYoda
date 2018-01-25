var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var c2 = document.getElementById("canvas2");
var ctx2 = c2.getContext("2d");


ctx2.moveTo(150,150);
ctx2.lineTo(300,300);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "green";
ctx2.fill();
ctx2.stroke();

var img = new Image();

img.src = "MayTheForceBeWithYou.png";

var imgTwo = new Image();
imgTwo.src = "DarthVader.png";

img.onload = function(){
ctx.drawImage(img,0,0,200,200);
}

imgTwo.onload = function(){
	ctx.drawImage(imgTwo,150,0,150,150);
}

ctx.font="20px Arial";
ctx.fillStyle = "red";
ctx.fillText("Darth Vader Canvas", 100, 250);

