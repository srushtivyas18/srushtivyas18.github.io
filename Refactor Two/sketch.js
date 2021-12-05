// // This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size
//Srushti Vyas

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  
  line(width/2, 0, width/2, height); //Line to seperate four different parts of the cartesian
  line(0, height/2, width, height/2);
   fill(0);
  
  //This will fill the top left of the cartesian by creating a rectangle
  if (mouseX < width/2 && mouseY < height/2) {
   rect(0,0,width/2,height/2);
  }
  
  //This will fill the top right of the cartesian by creating a rectangle
  else if (mouseX > width/2 && mouseY < height/2) {
  rect(width/2,0,width/2,height/2);
  }
  
  //This will fill the bottom left of the cartesian by creating a rectangle
  else if (mouseX < width/2 && mouseY > height/2) {
   rect(0,height/2,width/2,height/2);
  }
  
  //This will fill the bottom right of the cartesian by creating a rectangle
  else if (mouseX > width/2 && mouseY > height/2) {
rect(width/2,height/2,width/2,height/2);
  }
  
}
