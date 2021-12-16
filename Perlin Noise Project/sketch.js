// Terrain Project
// Srushti Vyas
// Dec, 16th 2021
// Making a perlin noise terrain 
// expert challenge:- Also adding the mountain top flag and panning and average.


let rectWidth = 1;  //width of each rectangle slice
let xOff = 0;

let mov = 0.004;    // mov is working as the speed of my terrain
let start = 0;
let heightX, heightY; // This works as some values for making mountain top flag
let averageHeight;  // It will be an array for the average 
// the whole section of variables above helps making a smooth terrain


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);


}
function draw() {
  background(210);

  regularrandomTerrain();
  drawFlag(heightX, height - heightY);
  averageH();

}

// Added the base eautures using some perlin noise video

function regularrandomTerrain() {
  heightX = 0;
  heightY = 0;    //gave the values to the global variable
  fill(0);
  noStroke();
  xOff = start;
  averageHeight = [];    // Gving an empty array for the average height thing
  for (let x = 0; x < width; x += rectWidth) {

    let sectionHeight = map(noise(xOff), 0, 1, 0, height);  // Made a new variable and that works as th erando values that each terrain produce
    averageHeight.push(sectionHeight);
    xOff += mov;

    rect(x, height, x + rectWidth, height - sectionHeight);   // this will make random rectang;es with random size

    if (sectionHeight > heightY) {   // if statement for making mountain top
      heightY = sectionHeight;
      heightX = x;
    }

  }

  start += mov + 0.02;    // Controls speed
}

// Made a new function for making a flage
function drawFlag(x, y) {
  fill(137, 52, 217);
  stroke(0);
  strokeWeight(1);
  line(x, y, x, y - 43);
  triangle(x, y - 55, x, y - 30, x + 15, y - 40);

}

// new function for making the average
function averageH(){
  
  let sum = 0;
  for(let i = 0; i < averageHeight.length; i++){    // This is were the array of averageHeight is being used
   
    sum += averageHeight[i];
  }
  let average = sum/ averageHeight.length;
  stroke(255,0,0,100);
  strokeWeight(8);
  line(0,average,width,average);
  print(sum);   // It will aslo print the values which can be deterimined
 
}


