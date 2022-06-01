wristX="";
wristY="";

game_status="";

function startGame(){
game_status="start";
document.getElementById("status").innerHTML="Game is loading";

}
function preload() {
   
	
}

function setup() {
	canvas = createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    
	
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotposes);
}


function modelLoaded(){
    console.log('PoseNet is loaded');
    
    }

    function gotposes(results){
        if(results.length>0){
        console.log(results);
        wristX=results[0].pose.nose.x;
        wristY=results[0].pose.nose.y;
        }
        }

function draw() {
    image(video, 0, 0, 500, 400);
}
