// 13 th dec demo
//Srushti Vyas
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++){
    if(random(1) < 0.5){
      particles[i] = new Particle (300,300);
    }
    else{
      particles[i] = new Confetti (300,300);
    }
    
  }
}

function draw() {
  background(0);
  for (let p of particles){
    p.update();
    p.show();

  }
} 

class Particle extends p5.Vector{
  constructor(x,y){
    super(x,y);
    this.vel = p5.Vector.random2D();
    
  }

  update(){
    this.add(this.vel);
  }

  show(){
    stroke(255);
    strokeWeight(24);
    //square(this.x, this.y, 10);
    point(this.x, this.y);
  }
}

class Confetti extends Particle{
  constructor(x,y){
    super(x,y)
    this.bright = random(255);
    this.r = 10;
  }

  update(){
    super.update();
    this.r += random(-2, 2);
  }

  show(){
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }


}
