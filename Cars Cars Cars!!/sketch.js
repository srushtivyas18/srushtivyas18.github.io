// Cars Cars Cars!!!
// Srushti Vyas
// Dec 3rd, 2021
// Making a car simulation

let eastBound = [];
let westBound = [];
let wLane, eLane;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i < eastBound.length; i++){
    eastBound[i].move();
    eastBound[i].action();
  }
 
}

function mouseClicked(){

  if(keyCode === SHIFT){
    eastBound.push(new Vehicle(mouseX,mouseY,1));
  }
  
 

}




function drawRoad(){

  fill(0);
  wLane = rect(0,height/4.5,width,height/4);
  eLane = rect(0,height/2.04, width, height/3.85)
  rect(0,height/4,width,height/2);

  for(let i = 0; i < width; i++){
    fill(255);
    rect(i*(width+250)/16,height/2.1,width/16,height/100);
  }

}

class Vehicle{
  constructor(x,y,dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255),random(255),random(255));
    this.type = int(random(2));
    this.xSpeed =random(5,10); 
   
  }


 

  display(){
    if(this.type === 0){// car
      this.drawCar();
    }
    else if (this.type === 1){//truck
      this.drawTruck();
    }
  }

  move(){
    this.x += this.xSpeed;
  
    
  }

  drawCar(){
    fill(200);
    rect(this.x+10, this.y-25, 20, 10, 5);
    rect(this.x-30, this.y-25, 20, 10, 5);
    rect(this.x+10, this.y+15, 20, 10, 5);
    rect(this.x-30, this.y+15, 20, 10, 5);
    fill(this.c);
    ellipse(this.x,this.y,100,40);
    
  }

  drawTruck(){
    fill(this.c);
    rect(this.x+90,this.y+5,30,30);
    rect(this.x, this.y, 100,40,10);
  }

  speedUp(){
    
  }
  speedDown(){

  }
  changeColor(){

  }
  action(){
    this.display();
  }
}
