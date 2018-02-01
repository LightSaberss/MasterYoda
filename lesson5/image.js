var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var WIDTH = 500;
var HEIGHT= 500;

//ball location
var x,y;
//ball movement
var mx,my;

//draw ball
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.stroke();
}

//initialize the animation
function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;                      
	return setInterval(draw,20);
}



//repeated draw function
function draw(){
	//clear();
	circle(x,y,30);
	//ball bounce off edges
	if(x+mx<0 || x+mx>WIDTH){
		mx = -mx;
	}
	if (y+my<0 || y+my>HEIGHT){	
		my = -my;
	}
	// ball moves 
 x = x + mx;
 y = y + my;
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}


//start the animaiton
init();