noseX=0;
noseY=0;
function preload() {
	world_start = loadSound("world_start.wav");
	mario_dies = loadSound("mariodie.wav");
	mario_jumps = loadSound("jump.wav");
	mario_kicks = loadSound("kick.wav");
	gameover = loadSound("gameover.wav");
	catch_coin= loadSound("coin.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game-console");
	modelattacher= ml5.poseNet(video, modelLoaded);
	modelattacher.on("pose", gotPoses)
}

function draw() {
	game()
}
function modelLoaded() {
	console.log("model is loaded!");
}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
	}
}





