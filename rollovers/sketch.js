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
let fillValue = 255;
let fillValue1 = 255;
let fillValue2 = 255;
let fillValue3 = 255;
//let ttRight1, ttRight2, ttRight3 = 0;


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
    fill(fillValue = 63, 79, 224,tRightFade);
    tRightFade += FADE_SPEED;
    
    
    
  }
  else{
    fill(fillValue += 5);
    tRightFade = 0;
    fillValue += 3;
  }
  
  rect(width/2,0,width/2,height/2);
  
  if(topLeft){
    fill(fillValue1 = 127, 222, 44,tLeftFade);
    tLeftFade += FADE_SPEED;

  }
  else{
    fill(fillValue1 += 5);
   tLeftFade = 0;
   fillValue1 += 3;
  }
  
  rect(0,0,width/2,height/2);
  
  if(bottomRight){
    fill(fillValue2 = 153,69,217,bRightFade);
    bRightFade += FADE_SPEED;
    
  }
  else{
    fill(fillValue2 += 5);
    bRightFade = 0;
    fillValue2 += 3;

  }
  
  rect(width/2,height/2,width/2,height/2);
  
  if(bottomLeft){
    fill(fillValue3 = 0,bLeftFade);
    bLeftFade += FADE_SPEED;
  }
  else{
    fill(fillValue3 += 5);
    bLeftFade = 0;
    fillValue3 += 3;
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


// function mouseClicked(){
//   if(ttRight1 === 219){
//       ttRight1 = 0;
//       ttRight2 = 0;
//       ttRight3 = 0;
//   }
//   else{
//     ttRight1 = 219;
//     ttRight2 = 90;
//     ttRight3 = 81;
    
    
//   }
//}
