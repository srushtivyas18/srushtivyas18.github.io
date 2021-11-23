// Interective Scene
// Srushti Vyas
// Nov.16, 2021
// Drawing a scene of day and night, if you click the mouse the scene will change to day and night
// and if you slide the mouse then the clouds will move

let currentBack1 = 20; //making a variable for the background change
let currentBack2 = 45;
let currentBack3 = 130;

let sun1 = 218; // variable for changing color of the sun
let sun2 = 230;
let sun3 = 142;

let land1 = 143; // variable for changing color of the land which is on the left
let land2 = 205;
let land3 = 227;

let lland1 = 118; // variable for changing color of th land whcih is in the middle
let lland2 = 198;
let lland3 = 227;

let landd = 96; // variable for rchanging color of the land which is at the right
let landd2 = 194;
let landd3 = 230;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(currentBack1, currentBack2, currentBack3);

  noStroke();

  fill(land1, land2, land3);
  ellipse(0, 600, 750, 620);

  fill(lland1, lland2, lland3);
  ellipse(400, 660, 900, 670);

  fill(landd, landd2, landd3);
  ellipse(800, 650, 700, 500);

  textSize(25);
  fill(255);
  textFont("Georgia"); // I tried to make the letters fancy
  text("Srushti", 720, 600);

  drawCloud();
  drawSun();
  drawHouse();
  drawTriangle();
  drawGuy();
}

function drawCloud() {
  fill(255, 255, 255);
  ellipse(mouseX + 20, 100, 50);
  ellipse(mouseX + 40, 124, 50);
  ellipse(mouseX + 0, 125, 50);

  fill(255, 255, 255);
  ellipse(mouseX + 140, 150, 50);
  ellipse(mouseX + 160, 174, 50);
  ellipse(mouseX + 120, 175, 50);
}

function drawSun() {
  stroke(255, 300, 0);
  strokeWeight(2.55);
  fill(sun1, sun2, sun3);
  circle(650, 100, 95);
}

function drawHouse() {
  stroke(0);
  strokeWeight(2.5);
  fill(207, 101, 113);
  rect(285, 250, 200);

  fill(94, 69, 217);
  rect(300, 270, 55, 55, 20);
  line(328, 270, 328, 322);
  line(300, 295, 355, 295);

  rect(410, 270, 55, 55, 20);
  line(438, 270, 438, 322);
  line(410, 295, 465, 295);
}

function drawTriangle() {
  fill(212, 165, 75);
  triangle(285, 250, 375, 175, 485, 250);

  noStroke();
  rect(360, 373, 50, 75);
  fill(0);
  circle(370, 410, 12);
}

function drawGuy() {
  circle(100, 445, 50);
  fill(237, 47, 168);
  square(69, 468, 65);
  fill(255, 77, 0);
  triangle(100, 529, 65, 575, 135, 575);
  stroke("white");
  strokeWeight(6);
  point(85, 437);
  point(105, 437);
}

function mouseClicked() {
  if (currentBack1 === 220) {
    currentBack1 = 20;
    currentBack2 = 45;
    currentBack3 = 130;
  } else {
    currentBack1 = 220;
    currentBack2 = 250;
    currentBack3 = 360;
  }

  if (sun1 === 255) {
    sun1 = 218;
    sun2 = 230;
    sun3 = 142;
  } else {
    sun1 = 255;
    sun2 = 200;
    sun3 = 0;
  }
  if (land1 === 120) {
    land1 = 143;
    land2 = 205;
    land3 = 227;
  } else {
    land1 = 120;
    land2 = 255;
    land3 = 22;
  }

  if (lland1 === 20) {
    lland1 = 118;
    lland2 = 198;
    lland3 = 227;
  } else {
    lland1 = 20;
    lland2 = 290;
    lland3 = 12;
  }
  if (landd === 125) {
    landd = 96;
    landd2 = 194;
    landd3 = 230;
  } else {
    landd = 125;
    landd2 = 290;
    landd3 = 55;
  }
}

//when i staeted the project i didn't know that i had to use 
//the window length and height, so i used the no. at the first
