// Terrain Project

let rectWidth = 3;  //width of each rectangle slice

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(220);
  regularrandomTerrain();
}

function draw() {

}

function regularrandomTerrain(){
  // create some random terrain using random()
  for(let x = 0; x < width; x+= rectWidth){

    let sectionHeight = random(0,height);
rect(x,height, x+rectWidth, height - sectionHeight);

  }
  
}
