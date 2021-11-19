// State variables 
// aLooking at how to stae variables for 4 differnt things
// Srushti Vyas
// November 18,2021

let topLeft, topRight, bottomLeft, bottomRight;
//let topLeft = 0;
//let topRight = 0;
//let bottomLeft = 0;
//let bottomRight = 0;

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
    fill(0);
    
    
  }
  else{
    fill(255);
  }
  
  rect(width/2,0,width/2,height/2);
  
  if(topLeft){
    fill(0);
  }
  else{
    fill(255);
  }
  
  rect(0,0,width/2,height/2);
  
  if(bottomRight){
    fill(0);
  }
  else{
    fill(255);
  }
  
  rect(width/2,height/2,width/2,height/2);
  
  if(bottomLeft){
    fill(0);
  }
  else{
    fill(255);
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
