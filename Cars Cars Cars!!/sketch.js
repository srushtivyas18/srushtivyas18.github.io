// Cars Cars Cars!!!
// Srushti Vyas
// Dec 3rd, 2021
// Making a car simulation by adding one expert challenge

let eastBound = [];     // east and west bound for the cars to mave them in two different direction
let westBound = [];
const CAR_NUMS = 10;    // i made number of cars to 10 'case when i change to 20 it was getting a bit messy


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < CAR_NUMS; i++){
    eastBound.push(new Vehicle(random(width),random(530,670), 0));  // This for loops will maintain the number of cars which are getting on screen
  }
  for(let j = 0; j < CAR_NUMS; j++){
    westBound.push(new Vehicle(random(width), random(270,400), 1)); // and also the and particualr area in ehich they should be in there
  }
}

function draw() {
  background(220);
  drawRoad();
  for (let i = 0; i < eastBound.length; i++) {    // these for loops does the function which are in the action()
    eastBound[i].action();
  }
  for(let j = 0; j < westBound.length; j++){
    westBound[j].action();
  }

}

function mouseClicked() {

  if (keyIsPressed && keyCode === SHIFT) {
    eastBound.push(new Vehicle(0,random(530,670), 0));            // this is one of the expert challenge in which if you press shift+left click the cars 
  }                                                               // appear from the east bound and if its onlny left click the cars will appear from the west bound
  else{
    westBound.push(new Vehicle(width, random(270,400), 1));
  }
}

function drawRoad() {

  fill(0);
  rect(0, height / 4, width, height / 2);                         // making a road 

  for (let i = 0; i < width; i++) {
    fill(255);                                                    // making the strips of the road
    rect(i * (width + 250) / 16, height / 2, width / 16, height / 100);
  }
}

class Vehicle {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;   //0→west   1→east
    this.c = color(random(255), random(255), random(255));  // random colors of cars
    this.type = int(random(2));    // which vehicle sould appear
    this.xSpeed = random(5, 10);   // speed values

  }

  display() {
    if (this.type === 0) {// car
      this.drawCar();
    }
    else if (this.type === 1) {//truck
      this.drawTruck();
    }
  }

  move() {
    if(this.dir === 0){
      this.x += this.xSpeed;      //will make east bound cars and wrap  it up
      if(this.x > width){
        this.x = 0;
      }
    }
    if(this.dir === 1){
      this.x -= this.xSpeed;    // will make th ewest bound cars and it wwraps it up
      if(this.x < 0){
        this.x = width;
      }
    }
  }

  

  drawCar() {
    fill(200);
    rect(this.x + 10, this.y - 25, 20, 10, 5);
    rect(this.x - 30, this.y - 25, 20, 10, 5);       // makes the car and its tires
    rect(this.x + 10, this.y + 15, 20, 10, 5);
    rect(this.x - 30, this.y + 15, 20, 10, 5);
    fill(this.c);
    ellipse(this.x, this.y, 100, 40);

  }

  drawTruck() {
    fill(this.c);
    rect(this.x + 90, this.y + 5, 30, 30);           // draws truck and its front
    rect(this.x, this.y, 100, 40, 10);
  }

  speedUp() {
    if(random(100) <= 1){
      this.xSpeed += 2;                     // this make make a little difference in the speed
      if(this.xSpeed >= 15){            // sometimes the cars will appear that they are stop but after some time they will start moving
        this.xSpeed = 0;               // that is just because the value i have chosen also includes 0
      }
    }
  }
  speedDown() {
    if(random(100) <= 1){
      this.xSpeed -= 2;
      if(this.xSpeed <= 0){         // same works for this
        this.xSpeed = 0;
      }
    }

  }
  changeColor() {
    if(random(100) <= 1){
      this.c = color(random(255), random(255), random(255));      // this will change the color of the cars while they are moving
    }
  }
  action() {
    this.display();
    this.speedUp();                   // acting is where all the functions come to work
    this.speedDown;
    this.changeColor();
    this.move();
  }
}


