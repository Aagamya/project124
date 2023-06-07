noseX=0;
noseY=0;
left_wrist=0;
right_wrist=0;
difference=0;


function setup(){
  canvas=createCanvas(550,550)
  canvas.position(560,150)
  video=createCapture(VIDEO)
  video.size(550,550)
  poseNet=ml5.poseNet(video,modelLoaded)
   poseNet.on("pose",gotposes) 

}

function draw(){
  background("greenyellow")
 document.getElementById("square_sides").innerHTML="The sides of square will be- "+difference+"pixels";
  fill("blue")
 stroke("grey")
  square(noseX,noseY,difference)
 
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotposes(results){
  if(results.length>0){
   
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    left_wrist=results[0].pose.leftWrist.x
    right_wrist=results[0].pose.rightWrist.x
    difference=floor(left_wrist-right_wrist)

  }
}
