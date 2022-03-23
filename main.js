mustachex = 0;
mustachey = 0;
function preload(){
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Intialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        mustachex = results[0].pose.mustache.x+15;
        mustachey = results[1].pose.mustache.y+15;
        console.log("mustache x = " + mustachex);
        console.log("mustache y = " + mustachey);
    }
}

function draw(){
    image(video , 0 ,0 , 300, 300);
   image(mustache, mustachex,mustachey,30,30);
}

function take_snapshot(){
    save('myFilterIamge.png');
}