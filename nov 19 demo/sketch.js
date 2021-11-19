// Bouncing Objects
//Srushti Vyas
//november 18th
//using variables to create some animation

let ballX, ballY; //variables for ball position
let bSize = 30;
let xSpeed = -2;
let ySpeed =  3;
let fillValue = 255;

function setup(){
  createCanvas(windowWidth, windowHeight);
  ballX = width * 0.9;
  ballY = height * 0.3;
  print("strt" )
}

function draw(){
  background(255);
  move();

  // update fill (fade)
  if(!mouseIsPressed){ 
    fillValue +=5;
  } 
  
  fillValue = constrain(fillValue,0,255);
 
  fill(255,0,0,fillValue);
  circle(ballX, ballY,bSize);
}

function mousePressed(){
  fillValue = 0;
}

function move(){
  //this function is used to update the position of the ball
  ballX += xSpeed;
  ballY += ySpeed;

  // handle some edge conditions
  let radius = bSize/2;
  if(ballY < bSize/2 || ballY > height-radius){

    ySpeed *= -1;

  }

  if(ballX < 0) {  //creates a wrap around for x positions
    ballX = width;
  }
  else if (ballX > width){
    ballX = 0;
  }
}

