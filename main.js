function preload(){

}

function setup(){
canvas=createCanvas(350,350);
canvas.position(550,200);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,350,350);
}