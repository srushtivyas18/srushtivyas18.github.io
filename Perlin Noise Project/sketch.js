// Terrain Project

let rectWidth = 0.5;  //width of each rectangle slice
 var xOff = 0;

var mov = 0.001;
var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(210);
  
}
function draw() {

  regularrandomTerrain();
}



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
  
  start += mov;



}
