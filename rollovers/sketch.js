// State variables 
// Looking at how to state variables for 4 differnt things
// Srushti Vyas
// November 18,2021
// My project fade in and fade out in each rectangles with different colors
// Also the mouse clicked function is kinda working


// Variables for drawing rectangles
let topLeft, topRight, bottomLeft, bottomRight;

//Fading variables for each rectangles
let tLeftFade = 0;
let tRightFade = 0;
let bLeftFade = 0;
let bRightFade = 0;

//Fade speed 
const FADE_SPEED = 4;

//Fill value for each rectangle
let fillValue = 255;
let fillValue1 = 255;
let fillValue2 = 255;
let fillValue3 = 255;



function setup() {
  createCanvas(windowWidth, windowHeight);
  let topLeft = false;
  let topRight = false;    //Gave variable a false statement so that I could use
  let bottomLeft = false;  //it for my mouse dragging
  let bottomRight = false;

  
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);  //Drew two lines which will split four ractangles
  line(0, height/2, width, height/2); //And will draw four diffrent rectangles in each of them
  drawRectangles();
  mouseValue();
  print(topRight + " " + topLeft + " " + bottomRight + " " + bottomLeft + " ")
  

}

//Function for drawing four different rectangles,
//their fill value and their fading speed
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

// Function for the mouse dragging with conditions
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

//Tried to do the mouse clicked function
//If i click the mouse in the top left rectangle
//all other rectangles will fade out in black color

function mouseClicked(){
  if(topLeft === true){
     fill(fillValue2 = 0); 
     fill(fillValue3 = 0);
     fill(fillValue = 0);

  }
 }
