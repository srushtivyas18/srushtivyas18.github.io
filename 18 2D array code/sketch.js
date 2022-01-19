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
let rectWidth, rectHeight, col, row, readMessage;   

let winMsg = ["YOU WIN!!!"];

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
  //if(mouseOver)
  if(keyIsPressed && keyCode === SHIFT){
    flip(col,row)
    
  }
  //if()
  else{
    flip(col, row);
    if(row > 0){
      flip(col, row -1);
     }
    if(row < NUM_ROWS - 1){
      flip(col, row +1);
    }
    if(row < 4){
      flip(col + 1, row);
    }
    if(col < NUM_ROWS + 1){
      flip(col -1,row);
    }
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
  createCanvas(NUM_COLS * rectWidth , NUM_ROWS * rectHeight);
  
}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();
  winMessage();
  winner();
  print(col, row);
   //test  animation
  // grid[int(random(4))][int(random(5))] = int(random(256));
 
}

function winMessage(){
  let firstBlock = grid[0][0];
  for (let x = 0; x < NUM_COLS; x++ ){
    for (let y = 0; y < NUM_ROWS; y++){
      if(grid[y][x] !== firstBlock){
        readMessage = (winMsg);
        return false;
      }
    }
  }
  return true;
}

function winner(){
  fill(44, 165, 245);
  textSize(60);
  textAlign(CENTER,CENTER);
  textFont("fantasy");
  if(winMessage() === true){
    text(readMessage,0,0,NUM_COLS*rectWidth-10,400);
  }
}

function colorBoard(){
 
}