// 2D arrays demo
// srushti vyas
// 10th Jan 2022
// using 2D array for the first time in this class

let grid = [ [0, 255, 0, 0, 255],
             [0,  255,  0,  0,  255],    // making the 2D array. for randomizing grid color
             [255, 0, 255, 0,  255],
             [255, 0, 0,0, 0] ];

const NUM_ROWS = 4;   //number of rows in the grid
const NUM_COLS = 5;   // number of columns in the grid
let rectWidth, rectHeight, col, row, readMessage;   // some global variables for width,height,columns and rows
//let hoverColor = (255,200,110); 

let winMsg = ["YOU WIN!!!"];  // win message 

function flip(col, row){       // flip function for flipping a particular box or block
  if(grid[row][col] === 0) grid[row][col] = 255;  //this will cahnage the color from balck to white and from white to black
  else grid[row][col] = 0;
}

function getCurrentX(){
  return int(mouseX/rectWidth);    // it will work as the mouseX and mouseY thing 
}                                 // which will change the color wherever the mouse's position will be on the grid

function getCurrentY(){
  return int(mouseY/rectHeight);
}

function mouseClicked(){
  //when the mouse is clicked, flip the value linesd up with
  //the mouse pposition;
  //if(mouseOver)
  if(keyIsPressed && keyCode === SHIFT){     // if you "SHIFT" and click it will change the color
    flip(col,row)                 // the cheater function
    
  }
  //if()
  else{
    flip(col, row);    //top    // thw whole else statement will change the color of the sides of the 
    if(row > 0){          // fliped color.....there are only four sides
      flip(col, row -1);
     }
    if(row < NUM_ROWS - 1){ //bottom
      flip(col, row +1);
    }
    if(row < 4){     //left
      flip(col + 1, row);
    }
    if(col < NUM_ROWS + 1){  //right
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
  rectWidth = 100;    //made that little blcks to 100x100 size
  rectHeight = 100;
  randomGrid();
  createCanvas(NUM_COLS * rectWidth , NUM_ROWS * rectHeight);
  
  
  
}

function draw() {
  row = getCurrentY();    // this is where the row and col will change the color with mouseX and mouseY
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
    for (let y = 0; y < NUM_ROWS; y++){   // function for win message
      if(grid[y][x] !== firstBlock){
        readMessage = (winMsg);   // whenever the whole grid turns into black or white
        return false;           // it will shopw the wil message
      }
    }
  }
  return true;
}

function winner(){
  fill(44, 165, 245);
  textSize(60);        
  textAlign(CENTER,CENTER);   // text arrangement for the text message
  textFont("fantasy");
  if(winMessage() === true){
    text(readMessage,0,0,NUM_COLS*rectWidth-10,400);
  }
}

function randomGrid(){
  for (let x = 0; x < NUM_COLS; x++ ){
    for (let y = 0; y < NUM_ROWS; y++){   // this function will randomize the grid 
      let num = int(random(2)) * 255;   // and it will place all the colors at random postion each time.
      grid[y][x] = num;
      
    }
  }
}

// THANK YOU MR SCOTT
