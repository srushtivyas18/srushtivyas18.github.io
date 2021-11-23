// State variables 
// Looking at how to state variables for 4 differnt things
// Srushti Vyas
// November 18,2021

let topLeft, topRight, bottomLeft, bottomRight;
let tLeftFade = 0;
let tRightFade = 0;
let bLeftFade = 0;
let bRightFade = 0;
const FADE_SPEED = 4;
let ttRight1, ttRight2, ttRight3 = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let topLeft = false;
  let topRight = false;
  let bottomLeft = false;
  let bottomRight = false;

  
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  drawRectangles();
  mouseValue();
  print(topRight + " " + topLeft + " " + bottomRight + " " + bottomLeft + " ")
  

}

function drawRectangles(){
  if(topRight){
    fill(ttRight1,ttRight2,ttRight3,tRightFade);
    tRightFade += FADE_SPEED;
    
    
  }
  else{
    fill(255);
    tRightFade = 0;
  }
  
  rect(width/2,0,width/2,height/2);
  
  if(topLeft){
    fill(107,232,192,tLeftFade);
    tLeftFade += FADE_SPEED;

  }
  else{
    fill(255);
   tLeftFade -= FADE_SPEED;
  }
  
  rect(0,0,width/2,height/2);
  
  if(bottomRight){
    fill(153,69,217,bRightFade);
    bRightFade += FADE_SPEED;
  }
  else{
    fill(255);
    bRightFade = 0;

  }
  
  rect(width/2,height/2,width/2,height/2);
  
  if(bottomLeft){
    fill(224,79,171,bLeftFade);
    bLeftFade += FADE_SPEED;
  }
  else{
    fill(255);
    bLeftFade = 0;
  }
  
  rect(0,height/2,width/2,height/2);
  
  
  
  
  
  
}

function mouseValue(){
  if(mouseX > width/2 && mouseY < height/2){
    topLeft = false;
   topRight = true;
   bottomLeft = false;
   bottomRight = false;
    
  }

  
  if(mouseX < width/2 && mouseY < height/2){
    topLeft = true;
   topRight = false;
   bottomLeft = false;
   bottomRight = false;
  }
  
  
  
   if(mouseX > width/2 && mouseY > height/2){
    topLeft = false;
   topRight = false;
   bottomLeft = false;
   bottomRight = true;
  }
  
  
  
   if(mouseX < width/2 && mouseY > height/2){
    topLeft = false;
   topRight = false;
   bottomLeft = true;
   bottomRight = false;
  }
 
  
  
}

function mouseClicked(){
  if(ttRight1 === 219){
      ttRight1 = 0;
      ttRight2 = 0;
      ttRight3 = 0;
  }
  else{
    ttRight1 = 219;
    ttRight2 = 90;
    ttRight3 = 81;
    
    
  }
}
