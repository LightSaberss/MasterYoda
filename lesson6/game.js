var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//width and Height of the Canvas
var WIDTH = 600;
var HEIGHT = 600;

//position and size of player
var x = 300;
var y = 300;
var size = 50;

//player speed
var speedX = 0;
var speedY = 0;

//positions of darth vaders
var itemX;
var itemY;
var itemSize = 50;

var score = 0;
var collision = false;

function drawLordVader(){
var LordVader = new Image();
LordVader.src = "LordVader.png";
ctx.drawImage(LordVader, x,y,size, size)
}

function drawTheDumbSheep(){
	var dumbSheep = new Image();
	dumbSheep.src = "TheDumbSheep.png";
	ctx.drawImage(dumbSheep,itemX,itemY,itemSize,itemSize)
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function init(){
	itemX = Math.floor(Math.random()*(WIDTH - itemSize));
	itemY = Math.floor(Math.random()*(HEIGHT - itemSize));


//keyboard event

window.onkeydown = keydownControl;
return setInterval(draw,10);
}

function keydownControl(e){

	if (e.keyCode == 37){
		speedX = -4;
		speedY = 0;
	}

	else if (e.keyCode == 39){
		speedX = 4;
		speedY = 0;
	}

	else if (e.keyCode == 38){
		speedX = 0;
		speedY = -4;
	}

	else if (e.keyCode == 40){
		speedX = 0;
		speedY = 4;
	}

}

function draw(){
	clear();
	drawLordVader();
	drawTheDumbSheep();
	//Vader bounce off edges
	if(x+speedX<0 || x+speedX>WIDTH){
		speedX = -speedX;
	}
	else if (y+speedY<0 || y+speedY>HEIGHT){	
		speedY = -speedY;
	}
	x += speedX;
	y += speedY;
collisionCheck();
handleCollision();
}

init();



function collisionCheck(){
	if ((x + size > itemX) && (x <= itemX + itemSize) && (y + size > itemY) && (y<= itemY + itemSize)){
		collision = true;

	}

else {
	collision = false;
}
}

function handleCollision(){
	if(collision){
		itemX = Math.floor(Math.random()*(WIDTH - itemSize));
	itemY = Math.floor(Math.random()*(HEIGHT - itemSize));
	}

	}
	

