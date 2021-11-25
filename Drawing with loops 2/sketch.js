// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Loop drawing two

let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //draw run onlu once
}

function draw() {
  background(220);
}
function nestedLoops(){
//to see what happens with a loop insidea loop
for (let x = 0; x< width; x += spacing){
  for(let y = 0; y < innerHeight; y+= spacing){
    //print(x + ", " +y);
    circle(x,y,2);
    let r = map(mouseX, 0, width, 0, 255);
    let g = map(mouseY, 0, height, 255, 0);
    let b = map(mouseX,0,width,255,0);
    stroke(r,g,b);
    line(x,y,mouseX, mouseY);
  }
 }
}
