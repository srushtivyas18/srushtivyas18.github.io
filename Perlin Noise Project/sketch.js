// Terrain Project

let rectWidth = 1;  //width of each rectangle slice
 let xOff = 0;

let mov = 0.004;
let start = 0;
let x , y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);

  
}
function draw() {
  background(210);
  
  regularrandomTerrain();
  drawFlag();

}

s

function regularrandomTerrain(){
  // create some random terrain using random()
  fill(0);
  noStroke();
  xOff = start;
  for(let x = 0; x < width; x+= rectWidth){

    let sectionHeight = map(noise(xOff),0,1,0,width);
    
    xOff += mov;
    
rect(x,height, x+rectWidth, height - sectionHeight);

  }
  
  start += mov+0.01;
}

function drawFlag(x,y){
  stroke(0);
  strokeWeight(10);
  line(x,y-15,y,x-15);
  
}


