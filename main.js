noseX=0;
noseY=0;
    function setup(){
        canvas=createCanvas(550,550);
        canvas.position(560,150);
       video=createCapture(VIDEO);
       video.size(550,500); 
       poseNet=ml5.poseNet(video,modelLoaded);
       poseNet.on('pose',gotPoses);
    }
    function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY"+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    
        console.log("leftWristX="+leftWristX+"rightWristX"+rightWristX+"difference="+difference);
    }
    }
    function modelLoaded(){
        console.log('poseNet is intialized');
    }
    function draw(){
        background('#7aeb7a');
        document.getElementById("square_side").innerHTML="WIDTH AND HEIGHT OF THE SQUARE IS"+difference+"px";
        fill('#ffc0d0');
        stroke('#ffc0c6');
        square(noseX,noseY,difference);
    }
    
    
