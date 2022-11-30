mouX = 0
mouY = 0
function preload() {
    moustach_nose = loadImage ('https://i.postimg.cc/7ZrG9r22/123.png'); 
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
image(video, 0, 0, 300, 300);
image(moustach_face, mouX, mouY, 30, 30);
}

function take_snapshot() {
    save('MyFunnyPicture.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results) 
{
    if(results.length > 0)
    {        console.log(results);
        mouX = results[0].pose.moustach.x;
        mouY = results[0].pose.moustach.y;
        console.log("mou x = " + mouX);
        console.log("mou y = " + mouY);
    }
}