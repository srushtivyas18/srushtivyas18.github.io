// Vector Demo
// Srushti Vyas
// Dec 7, 2021
// First look at vectors for velocity and acceleration

let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover (mouseX, mouseY));
}

function draw() {
  background(220);

  movers.push(new Mover(mouseX,mouseY));
  //enhanced for loop
  for(let i = 0; i < movers.length; i++){
    let m = movers[i];
    m.move();
    m.display();

    if(!m.isAlive()){
      movers.splice(i, 1);
      i--;
    }

    //What about removal?
  }
}


class Mover{
  //constructor and properties
  constructor(x, y){
    this.size = 20;
    this.position = createVector(x,y);
    this.velocity = createVector(random(-3,3),random(-10,-1));
    this.acceleration = createVector(0,0.2);
    this.c = color(random(200), random(200), random(200));
    this.alive = true;
    this.yVal = 0;
    this.vel = 0;
    this.mass = 100;

    this.accel = mass * 0.1;
  }

  move(){
    //update velocity
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(5);  //max vel of 5 pxl/frame
    if(this.position.y > height){
      this.alive = false;
    }
  }

  display(){
    fill(this.c);
    push();
    translate(this.position.x, this.position.y);
    velocity += this.accel;
    yVal += this.vel;
    circle(0,0,this.size);
    pop();

     

  }

  isAlive(){ // can be used directly in an if statement or a for loop
    return this.alive;
  }


}