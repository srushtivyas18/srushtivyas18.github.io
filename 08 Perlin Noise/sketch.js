// Workingg with Perlin Noise
// Srushti Vyas
// Nov 29, 2021
// comparing random() with noise()

let dia, t, x, y;  // diameter, time, x, y
let xTime, yTime;


function setup() {
  createCanvas(windowWidth, windowHeight);
  t = random(100); //noise seed
  x = width/2;
  y = height/2;
  xTime = 5;
  yTime = 25;
  background(0);
  noStroke();

}

function draw() {
  //background(255);
  fill(0,10);
  rect(0,0,width,height);
  drawCircle();
  moveCircle();
}

function drawCircle(){
  dia = noise(t); //0-1
  dia = map(dia, 0, 1, 10, 90);
  fill(0,255,0);
  circle(x, y, dia);
  t += 0.02;
}

function moveCircle(){
// use some random() or noise() to move our circle
// x += random(-2,2);
// y += random(-2,2);

x += map(noise(xTime), 0,1,-5,5);
y += map(noise(yTime), 0,1,-5,5);
xTime += 0.02;
yTime += 0.02;
}
