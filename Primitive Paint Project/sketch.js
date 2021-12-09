//Primitive Paint Project
//Srushti Vyas
// Dec, 8 2021
// Using key pressed function making differet shapes and 
// mouseclicking function will print the shape on canvas
// And also it will make a preview for whatever size you want              :- Extra for Experts

let y;    // variable for animated ellipse
let a;    // speed value for animated ellipse
let cnv, b; // cnv is for the mouse wheel function and b is a part for scrolling up and down value
let newCanvas;    // newCanvas for the shapes and my animated ellipse

let nextC;   //color variable for the random filling colors

let rectA, circA, triA, heartA = false; // A false statement for keycode and mopuseclicking stuff, (if this is true, kewy pressed and mouseclicking function will work)

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(changeSize);  // ChangeSize is a function which change the size
  newCanvas = createGraphics(windowWidth, windowHeight);     // created a new canvas so the animated thing won't interrupt the shapes i'll draw
  newCanvas.clear();      // clearing to make it transparent
  background(220);

  x = 10;   // X is the size for the shapes          
  b = 100;  // has something to so with the mousewheel function
  a = random(200);
  nextC = color(random(255), random(255), random(255));
}

function draw() {



  background(255);
  newCanvas.fill(116, 69, 209);        // all the text functions are on the newcanvas so it won't dissaper if i draw a shape on it
  newCanvas.textFont('Georgia');
  newCanvas.textStyle(ITALIC);
  newCanvas.textSize(23)
  newCanvas.text('Srushti', width * 0.9, height * 0.9);
  image(newCanvas, 0, 0);
  drawEllipse();
  preview();



}


// Animated ellipse
function drawEllipse() {
  y = noise(a);
  y = map(y, 0, 1, 5, 250);     // tried to use the map function for the smooth animation
  stroke(21, 194, 139);
  strokeWeight(7);
  fill(245, 66, 141);
  ellipse(width * 0.7, height / 2, y);
  a -= 0.02;

}


// Key pressed function which will make up the shapes
function keyPressed() {

  fill(random(255), random(255), random(255));

  print(keyCode)

  // if this is true a reactangle will form with the key 'A'
  if (keyCode === 65) {
    rectA = true;
    circA = false;
    heartA = false;
    triA = false;
  }
  // if this is true then an ellipse will form with the key 'S'
  if (keyCode === 83) {
    rectA = false;
    circA = true;
    heartA = false;
    triA = false;
  }
  // if this is true then a triangle will form with the key 'D'
  if (keyCode === 68) {
    rectA = false;
    circA = false;
    heartA = false;
    triA = true;
  }
  // if this is true then a heart will form with the key 'F'
  if (keyCode === 70) {
    rectA = false;
    circA = false;
    heartA = true;
    triA = false;
  }
  // if this is true then the whole background will get clear form with the key 'SPACE BAR'
  if (keyCode === 32) {
    newCanvas.clear();
    background(220);
  }

}

// Preview function for the mouse wheel function.
function preview() {
  noStroke();
  fill(nextC);
  
  //The same as the key pressed function, if it's true then it will make a preview of that particular shape
  //also it would make a trail with the mouse whith that mouse X and mouse Y functions
  if (rectA === true) {
    rect(mouseX, mouseY, x, x);

  }

  if (circA === true) {
    ellipse(mouseX, mouseY, x, x)
  }

  if (triA === true) {
    triangle(mouseX - x, mouseY + x, mouseX, mouseY - x, mouseX + x, mouseY + x);
  }

  if (heartA === true) {
    heart(mouseX, mouseY, x, x);
  }


}


function mouseClicked() {
  newCanvas.noStroke();

  newCanvas.fill(nextC);

  // This will print the particular shape on canvas if that's true.
  // almost same logic for this function too
  if (rectA === true) {
    newCanvas.rect(mouseX, mouseY, x, x);

  }

  if (circA === true) {
    newCanvas.ellipse(mouseX, mouseY, x, x)
  }

  if (triA === true) {
    newCanvas.triangle(mouseX - x, mouseY + x, mouseX, mouseY - x, mouseX + x, mouseY + x);
  }

  if (heartA === true) {
    heart2(mouseX, mouseY, x, x);
  }

  nextC = color(random(255), random(255), random(255));     // this won't allow the fill value to get in black shades

}






// found the code for heart from here:- https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

// Made a second heart function to make a preview of it.
function heart2(x, y, size) {
  newCanvas.beginShape();
  newCanvas.vertex(x, y);
  newCanvas.bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  newCanvas.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  newCanvas.endShape(CLOSE);
}

// A part of mouse wheel function
function mouseWheel() {
  print(event.delta);

  b = b + 10

}

// This is the function for scrolling up and down
function changeSize(event) {

  if (event.deltaY > 0) {
    x = x - 10;

  }
  else {
    x = x + 10;

  }

  x = constrain(x, width / 100, width / 4) // It's preventing the shape to go upside down, and gives max size
}




