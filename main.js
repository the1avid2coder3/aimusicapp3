song_1 = "music.mp3";
song_2 = "music2.mp3";
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(500, 600);
    canvas = canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    Image(video, 0, 0, 500, 600);
}
 function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }


 function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
 }
 function modelLoaded() {
    console.log('PoseNet Is Initialised');
 }
 function gotPoses(results) {
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);


    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +"rightWristY" + rightWristY);

  }
 }


