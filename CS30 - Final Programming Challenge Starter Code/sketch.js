// CS30 - Final Programming Challenge
// Srushti Vyas
// Jan-27 2022
// creating a project which will let fox move and change 

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction

let x = 10;   // x and y are the variable for changing the sides of the fox
let y = 10;

let civ = 0; //Its working as the number for the staticImages.

let w = 79;   // width and height for changing the size of the fox
let h = 70;

function preload() {
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom


}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);

  drawFox(x, y);
  keyPressed();
  mouseClicked();
  pepsiMode();
}


function loadStatic() {
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

function loadAnimation() {
  for (let i = 1; i <= 8; i++) {    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"))
  }
}

function drawFox(x, y) {
  image(staticImages[civ], x, y, w, h);

}

function keyPressed() {
  if (keyIsDown(65)) {   // "A" key which will move left
    x -= 10;
    civ = 0;
  }
  if (keyIsDown(68)) {  // "D" key which will move right
    x += 10;
    civ = 1;
  }

  if (keyIsDown(87)) {  // "W" key which will move up
    y -= 10;
    civ = 2;

  }

  if (keyIsDown(83)) {  // "S" key which will move down
    y += 10;
    civ = 3;
  }

}

function mouseClicked() {
  if (mouseY < height / 2) {
    if (mouseIsPressed) {
      w += 5;
      h += 5;
    }

  }

  if (mouseY > height / 2) {
    if (mouseIsPressed) {
      w -= 5;
      h -= 5;
    }
  }

}

function pepsiMode() {
  if (keyCode === 80) {
    tint(random(255), random(255), random(255));  // will change the random color whilr pressing "P"

  }
}




