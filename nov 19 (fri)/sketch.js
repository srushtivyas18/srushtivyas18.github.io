// Working with Arrays and loops
// Srushti Vyas
// Nov 19th, 2021
// A quick refresher and application of for loops and arrays

// global variable
//let names = ["Srushti Vyas", "Aula", "yug", "krupali", "BTS" ];
//                1          2         3       4         5
//let emptyArray = [];

let x = [];
let y = [];
const NUM_POINTS = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  intArrays();
}

function intArrays(){
  // we will use this function to set up all our initial x,y values
  for(let i = 0; i < NUM_POINTS; i++){
    x.push(random(0,width));
    y.push(random(0,height));
  }
}

function drawArrays(){
  //read through the parallel arrays, and draw some circles + connecting lines
  for(let i = 0; i < x.length; i++){
    fill(0);
    circle(x[i], y[i], 10);
    //only draw a line line forward if one exists
    if(i < x.length - 1){
      line(x[i],y[i], x[i+1], y[i+1]);
    }
  }
}

function updateArrays(){
  //push one new value on, and delete first value
  x.push(random(0, width));
  y.push(random(0, height));
  x.shift();
  y.shift();
}




function draw() {
  background(220);
  drawArrays();
  updateArrays();
}



// function doloops(){
  // first: While loop

// let counter = 0;
// while(counter < 6){
//   print(namess[counter]);
//   counter ++;
// }

// second: For Loops (basic)   (later,enhanced)
// for(let i = 0; i < names.length; i++){
//   print(names[1]);
// }
