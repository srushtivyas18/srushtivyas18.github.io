//Srushti Vyas
// Jan 20, 2022
// flocking simulation for aquarium project
// There will be the school of fish which will change its position when it'll
// meet some other fish.

const flock = [];

let allignSlider, cohesionSlider, seperationSlider;    // these global varibale will help to make a slider 
function setup() {
  createCanvas(windowWidth, windowHeight);
  allignSlider = createSlider(0,5, 1, 0.1);       // This is where we will be able to change the sliding and 
  cohesionSlider = createSlider(0,5, 1, 0.1);     // add the allignment, cohesion or the seperation to the fish
  seperationSlider = createSlider(0,5, 1, 0.1);
  for(let i = 0; i < 10; i++){
    flock.push(new Boid());              // this will make sure how much number of fish there should be
  }
 
}

function draw() {
  background(50);
  for( let boid of flock){                  
    boid.edges();                 //will make suree of the edges.
    boid.flock(flock);               // all the functions from the class will be implemented fromm here.
    boid.update();
    boid.show();
  }
}


class Boid{
  constructor(){
    this.pos = createVector(random(width), random(height));   // created a vector for random width and height of the fish
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2,4));
    this.acc = createVector();
    this.maxForce = 0.25;
    this.maxSpeed = 4;    // controls the speed of the fish 
    this.fishImage = [];    // made an array to hold two fish
    this.fishImage.push(loadImage("assets/fish2.png"));
    this.fishImage.push(loadImage("assets/fishR.png"));
  }

  edges(){
    if(this.pos.x > width){
      this.pos.x = 0;
    }
    else if(this.pos.x < 0){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    }
    else if(this.pos.y < 0){
      this.pos.y = height;
    }


  }

  allign(boids){
    let perceptionR = 50;
    let steering = createVector();
    let total = 0;
    for(let other of boids){
      let d =(dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y));
      if(other !== this && d < perceptionR){
        steering.add(other.vel);
        total++;
      }
      
    }
    if(total > 0){
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
     

    }
    return steering;
  }

  cohesion(boids){
    let perceptionR = 100;
    let steering = createVector();
    let total = 0;
    for(let other of boids){
      let d =(dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y));
      if(other !== this && d < perceptionR){
        steering.add(other.pos);
        total++;
      }
      
    }
    if(total > 0){
      steering.div(total);
      steering.sub(this.pos);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
     

    }
    return steering;
  }

  seperation(boids){
    let perceptionR = 50;
    let steering = createVector();
    let total = 0;
    for(let other of boids){
      let d =(dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y));
      if(other !== this && d < perceptionR){
        let diff = p5.Vector.sub(this.pos,other.pos);
        diff.div(d);
        steering.add(diff);
        total++;
      }
      
    }
    if(total > 0){
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
     

    }
    return steering;
  }


  flock(boids){
    let allignment = this.allign(boids);
    let cohesion = this.cohesion(boids);
    let seperation = this.seperation(boids);

    seperation.mult(seperationSlider.value());
    cohesion.mult(cohesionSlider.value());
    allignment.mult(allignSlider.value());


    this.acc.add(allignment);
    this.acc.add(cohesion);
    this.acc.add(seperation);
  }

  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.acc.set(0,0);

  }

  show(){
    if(this.vel.x < 0){
      image(this.fishImage[0],this.pos.x,this.pos.y,100,100);     // this will let fish change its side when it will come incontact with other fish
    }
    if(this.vel.x > 0){
      image(this.fishImage[1],this.pos.x,this.pos.y,100,100);
    }
  }
}