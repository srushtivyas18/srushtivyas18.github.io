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
  if(key === " "){                          // when you hit space the cannonball shooter will hit a cannonball
    currentGame.createShot();
  }
}

function quickInput(){
if(keyIsDown(LEFT_ARROW)){
  currentGame.changeAngle(true);    //with this you will be able to change like how much power you want.
}
if(keyIsDown(RIGHT_ARROW)){
  currentGame.changeAngle(false);      // same as this one....you willl be able to change the power from this.
}
if(keyIsDown(UP_ARROW)){             // the upper arrow will help to change the amgle of the cannonball shooter
  currentGame.changePower(true);
}
if(keyIsDown(DOWN_ARROW)){            // same with this....it will help to change the angle.
  currentGame.changePower(false);
}

}
