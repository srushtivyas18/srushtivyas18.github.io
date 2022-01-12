// Farm game blocker pusher demo
// Srushti Vyas
// 12th Jaan, 2022
// More work with 2D array and images this time

// Globals and constants
const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;

let playerX = 3;
let playerY = 4;

let level = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0] ];

let tiles = []; //0 - blank
                //1 - chicken
                //2 - cow

function preload(){
  for ( let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/"+i+".png"));
  }
}                

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2; // place the player
}

function renderBoard(){
// interpret the leve 2d array and place images accordingly
for (let y = 0; y < ROWS; y++){
  for(let x = 0; x < COLUMNS; x++){
    let imageIndex = level[y][x];
    image(tiles[imageIndex], x * TILE_SIZE, y * TILE_SIZE);
  }
 } 
}

//FUNCTIONS related to movement
function swap(x1,y1,x2,y2){
  //simple manipulation game board- switch 2 (adjecent)
  let temp = level[y1][x1]; // back it up
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
if(keyCode === UP_ARROW){
  if(playerY > 0){
    // check what item is above us
    if(level[playerY - 1][playerX] === 0){
      swap(playerX, playerY, playerX, playerY - 1);
      playerY --;
    }
    else if ( level[playerY - 1][playerX] === 1){
      if(playerY > 1 && level[playerY -2][playerX] === 0){
        //indiacate room to move and not go off an array or bump into something
        swap(playerX, playerY -1, playerX, playerY-2);
        swap(playerX, playerY, playerX, playerY-1);
        playerY--;
      }
    }
    
  }
  
}
if(keyCode === DOWN_ARROW){
  swap(playerX, playerY, playerX, playerY + 1);
  playerY ++;
}
if(keyCode === LEFT_ARROW){
  swap(playerX, playerY, playerX - 1, playerY);
  playerX --;
}
if(keyCode === RIGHT_ARROW){
  swap(playerX, playerY, playerX + 1, playerY);
  playerX ++;
}


}

function draw() {
  //background(220);
  renderBoard();
}
