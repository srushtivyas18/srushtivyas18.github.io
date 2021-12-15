// Terrain Project
// Srushti Vyas
// making A perlin noise project and adding some expert challanges


let rectWidth = 1;  //width of each rectangle slice
let xOff = 0;

let mov = 0.004;
let start = 0;
let heightX, heightY;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);


}
function draw() {
  background(210);

  regularrandomTerrain();
  drawFlag(heightX, height - heightY);

}

function regularrandomTerrain() {
  // create some random terrain using random()
  heightX = 0;
  heightY = 0;
  fill(0);
  noStroke();
  xOff = start;
  for (let x = 0; x < width; x += rectWidth) {

    let sectionHeight = map(noise(xOff), 0, 1, 0, height);

    xOff += mov;

    rect(x, height, x + rectWidth, height - sectionHeight);

    if (sectionHeight > heightY) {
      heightY = sectionHeight;
      heightX = x;
    }

  }

  start += mov + 0.01;
}

function drawFlag(x, y) {
  fill(137, 52, 217);
  stroke(0);
  line(x, y, x, y - 43);
  triangle(x, y - 55, x, y - 30, x + 15, y - 40);

}

function averageNormals(){
  
}


