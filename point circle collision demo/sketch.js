// Point Circle Demo
// Srushti Vyas
// 13th Jan, 2022

// let cX = 500;  let cY = 300;
// let cDiameter = 250;
// let cRadius = cDiameter/2;

//Point: use mouseX and mouseY

let rX = 200; let rY = 150;
let rWidth = 300; let rHeight = 100;
let rLeft = rX; let rTop = rY;
let rRight = rX + rWidth; let rBottom = rTop + rHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
 // is the distance between the mouse pointer
 // and the circle's centerpoint (cX, cY) < radius
  // if(dist(mouseX,mouseY,cX,cY) < cRadius){
  //   fill(255,0,255);                          (making circle)
  // }
  // else{
  //   fill(0);
  // }
  // ellipse(cX, cY, cDiameter, cDiameter);
  fill(255);
  // if the mouseX > left AND mouseX < right
  if(mouseX > rLeft && mouseX < rRight){
    // mouseY > top AND mouseY < bottom
    if(mouseY > rTop && mouseY < rBottom){
      fill(200,54,1996);
    }
   
  }

  rect(rX,rY, rWidth, rHeight);
}
