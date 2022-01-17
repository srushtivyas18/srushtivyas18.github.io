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
    if(row < NUM_ROWS + 1){
      flip(col , row -1);
    }





    //   if(col === 0){
    //     flip(col + 1,row);
    //     flip(col,row+1);
    //     flip(col,row);
    //   }
    //   else if(row === 0){
    //     if(col === 4){
    //       flip(col - 1, row);
    //       flip(col , row + 1);
    //       flip(col,row);
    //     }
    // }

    

    //   if(row === 3){
    //     if(col === 0 ){
    //       flip(col + 1, row);
          
    //       flip(col, row);
    //     }
    //     else if(row === 3){
    //       if(col === 4){
    //         flip(col -1, row);
    //         flip(col, row + 1);
    //         flip(col, row);
    //       }
    //     }
    //   }

      
    

    
    // flip the four neighbour;
    // flip(col + 1, row);
    // flip(col - 1, row);
    // flip(col, row - 1);
    // flip(col, row + 1);
  
  

  
    

       
    
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
  createCanvas(NUM_COLS * rectWidth + 120, NUM_ROWS * rectHeight + 70);
  
}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();
  winMessage();
  print(col, row);
   //test  animation
  // grid[int(random(4))][int(random(5))] = int(random(256));
 
}

function winMessage(){
  fill(0,255,0);
 if(NUM_ROWS === 255 || NUM_COLS === 255){
  text('something',500,450);
  return true;
 }
 else{

   return false;
 }
  
}