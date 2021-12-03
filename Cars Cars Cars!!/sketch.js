// Cars Cars Cars!!!
// Srushti Vyas
// Dec 3rd, 2021
// Making a car simulation



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){

  fill(0);
  rect(0,height/4,width,height/2);
  for(let i = 0; i < width; i++){
    fill(255);
    rect(0,height/2.1,i,height/100);
  }
  

}
