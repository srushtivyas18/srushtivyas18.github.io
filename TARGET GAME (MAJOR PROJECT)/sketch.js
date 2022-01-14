// Target Game
// Srushti Vyas
// Jan14, 2022
// making a game called target game using some important outcomes

let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;
let explosionImages = [];
let shotsRemainingImages = [];
let targetsHitImages = [];

let currentGame;


function setup() {
  createCanvas(1060, 600);
  currentGame = new Game();
}

function draw() {
 // background(220);
  currentGame.play();
  quickInput();
}

function keyPressed(){
  if(key === " "){
    currentGame.createShot();
  }
}

function quickInput(){
if(keyIsDown(LEFT_ARROW)){
  currentGame.changeAngle(true);
}
if(keyIsDown(RIGHT_ARROW)){
  currentGame.changeAngle(false);
}
if(keyIsDown(UP_ARROW)){
  currentGame.changePower(true);
}
if(keyIsDown(DOWN_ARROW)){
  currentGame.changePower(false);
}

}
