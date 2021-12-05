
// Basic Transformations Sandbox


let originalSpacing = 20;
let x = 0, y = 0, angle = 0, sFactor = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawBasicGrid(220);
  


  //transformation one: TRANSLATION

  // push();   // make a second coordinate system
  // translate(200,60);
  // rectangleRed(0,0);
  // pop();

  // rectangleBlue(0,0);

  //add push()  pop()




  //transformation two: SCALE

  // rectangleRed(40,0);
  // let scaleAmount = map(mouseX, 0, width, 0.3,6);
  // translate(40*scaleAmount);
  // scale(scaleAmount);
  // drawBasicGrid(150);
  // rectangleBlue(0,0);



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // rectMode(CENTER);
  // translate(width/2, height/2);
  // rotate(radians(frameCount));

  // drawBasicGrid(150);
  // rectangleBlue(0,0);


  //Combinations of Transformations
  quickInput();
  //update our position

  x = lerp(x,mouseX,0.1);
  y = lerp(y, mouseY, 0.1) ;

  push();
  translate(x,y);
  scale(sFactor);
  rotate(radians(angle));
  face(0,0);
  pop();


}

function quickInput(){
  if(keyIsPressed){
    if(keyCode === LEFT_ARROW){
      angle -= 5;
    }
    else if(keyCode === RIGHT_ARROW){
      angle += 5;
    }
  }
  
  }
  
  function mouseWheel(event){
    print(event.delta);
    //negative → scrolling up (-100 normal speed)
    //positive → scrolling down (100)
    if(event.delta > 0){
      //scroll down
      sFactor = sFactor - 0.1;  //constrain before zero?
     
    }
    else if(event.delta < 0){
      sFactor += 0.1;
    }
    sFactor = constrain(sFactor,0.2,3);
  }

function face(x, y) {
  //draw a face at x,y
  push();
  translate(x, y);
  ellipseMode(CENTER);
  fill(200, 200, 0);
  stroke(0);
  ellipse(0, 0, 80, 80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25, 0, 10, 10);
  ellipse(25, 0, 10, 10);
  strokeWeight(5);
  line(-30, -10, 30, -10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += originalSpacing) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += originalSpacing) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5, 0, 5, 0);
  line(0, 5, 0, -5);
  strokeWeight(1);
}