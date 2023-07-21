img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	video=createCapture(VIDEO);
	video.size(600,300);
poseNet=ml5.poseNet(VIDEO,modelLoaded);
poseNet.on('pose',gotPoses);
	canvas.parent('canvas');
	instializeInSetup(mario);
}
function gotPoses(results)
{
	if(results.length>0)
	{
		noseX=results[0].pose.noseX;
		noseY=results[0].pose.noseY;
		console.log("noseX="+noseX+"noseY="+noseY);
	}
}

function draw() {
	background("#D3D3D3");
	if(noseX<300)
	{
		marioX=marioX-1;
	}
	if(noseX>300)
	{
		marioX=marioX+1;
	}
	if(noseY<150)
	{
		marioY=marioY-1;
	}
	image(img,marioX,marioY,40,70)
	game()
}






