// Inheritance Demo
// Srushti vyas

let objects = [];


function preload(){
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //add points (parent object)
  for(let i = 0; i < 10; i++){
    objects.push(new AnimatedObject(random(width), random(height)));

  }

  // // add circles (child objects)
  // for(let i = 0; i < 10; i++){
  //   objects.push(new CircleObj(random(width), random(height),random(20,40)));
  // }

  //  // add lines (child objects)
  //  for(let i = 0; i < 10; i++){
  //   objects.push(new LineObj());
  // }
}

function draw() {
  background(220);
  for(o of objects){
    o.move();
    o.display();
  }
}


// parent class -fish object
class AnimatedObject{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 1;
    this.fishImages =[];
    this.loadCounter = 0;
    this.loadingComplete = false;
    this.fishImages.push(loadImage("assets/fishL.png", this.loadedImage()));  // not to do
    this.fishImages.push(loadImage("assets/fishR.png", this.loadedImage()));

  }

  loadedImage(){
    this.loadCounter ++;
    if(this.loadCounter === 2){
      this.loadingComplete = true;
    }
  }
  move(){
    if(this.loadingComplete){
      this.x += (random(-2,2), random(-2,2))
    }
 


  }

  display(){
    // strokeWeight(4);
    // point(this.x, this.y);
    if(this.loadingComplete){
      image(this.fishImages[0], this.x, this.y,100,100)
    }
  
  }
}


// child classs

class CircleObj extends AnimatedObject{
  constructor(x,y,d){
  super(x,y);
  this.size = d;
  }

  display(){
    strokeWeight(1);
    ellipse(this.x, this.y, this.size,this.size);
  }

}

//child class
class LineObj extends AnimatedObject{
  constructor(){
  super(random(width), random(height));
  }
  move(){
    super.move();  //wiggle effect from parent class
    this.x += 5;
    if(this.x > width){
      this.x = 0;
    }
  }
 display(){
  if (mouseIsPressed){
    strokeWeight(1);
    
  }
  else{
    strokeWeight(2);
  }
  line(this.x, this.y,this.x+15, this.y);
 } 
}