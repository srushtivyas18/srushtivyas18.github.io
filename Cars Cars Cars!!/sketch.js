// Cars Cars Cars!!!
// Srushti Vyas
// Dec 3rd, 2021
// Making a car simulation

let eastBound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function mouseClicked(){
  eastbound.pus(new Vehicle)
}

function drawRoad(){

  fill(0);
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

  }


  move(){
    
  }

  display(){
    if(this.type === 0){// car
      this.drawCar();
    }
    else if (this.type === 1){//truck
      this.drawTruck();
    }
  }

  drawCar(){
    fill(this.c);
    rect(this.x, this.y, 100, 40);
  }

  drawTruck(){
    fill(this.c);
    ellipse(this.x,this.y,100,40);
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
