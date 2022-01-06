// Recursive vizualization
// Srushti Vyas
// Jan 6, 2022
//some simple recursive vsualization


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // drawCircle(width/2, height/2, width);
  // drawCircle(50,50,160);
  strokeWeight(1);
  drawCanator( width * 0.05, height/2, width*0.9);
}
function drawCircle(x, y, s){
  //draw a circle recursively
  //(x,y)position
  //s diameter

  // base case
  if(s > 2){
    circle(x,y,s);
    drawCircle(x,y,s-10);
  }
}

function drawCanator(x,y,len){
  line(x,y, x+len, y); // start with the line
  if(len > 3){ // base case: len < 3
    // recursive calls for next two lines(next generation)
    drawCanator( x, y+20, len/3);
    drawCanator( x + 2*len/3, y+20, len/3);
  }
}