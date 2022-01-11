// 2D arrays demo
// srushti vyas
// 10th Jan 2022
// using 2D array for the first time in this class

let grid = [ [0, 255, 0, 0, 255],
             [0,  255,  0,  0,  255],
             [255, 0, 255, 0,  255],
             [255, 0, 0,0, 0] ];

const NUM_ROWS = 4;
const NUM_COLS = 5; 
let rectWidth, rectHeight, col, row;   

function flip(col, row){
  if(grid[row][col] === 0) grid[row][col] = 255;
  else grid[row][col] = 0;
}

function getCurrentX(){
  return int(mouseX/rectWidth);
}

function getCurrentY(){
  return int(mouseY/rectHeight);
}

function mouseClicked(){
  //when the mouse is clicked, flip the value linesd up with
  //the mouse pposition;
  if(keyIsPressed && keyCode === SHIFT){
    flip(col,row)
  }
  else{
    flip(col, row);
    // flip the four neighbour;
    flip(col + 1, row);
    flip(col - 1, row);
    flip(col, row - 1);
    flip(col, row + 1);
  }
 
}

function renderGrid(){
  // create a 2D grid of squaes, using information from our
  //2D array for the corresponding fill values
  for (let x = 0; x < NUM_COLS; x++ ){
    for (let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x * rectWidth,y * rectHeight ,rectWidth, rectHeight);
    }
  }
}

function setup() {
  rectWidth = 100;
  rectHeight = 100;
  createCanvas(NUM_COLS * rectWidth, NUM_ROWS * rectHeight);
}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();
  print(col, row);
  // //test  animation
  // grid[int(random(4))][int(random(5))] = int(random(256));
}
