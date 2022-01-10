// Movable markers + voronoi Diagram
// Srushti Vyas
// Dec 17, 2021
// for a buiesness place problem...?

let markers = [];
let currentlyDragging = false;  // global variable flag for if we are currently moving something
let gridSize = 10;
let activeRender = true;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  drawVoronoi();
  for(let m of markers){
    m.move();
    m.display();
  }
}

function drawVoronoi(){
  // render the voronoi diagram based on the objects stored in markers
  for(let m of markers){
    m.resetCount();
  }


  if(activeRender){
    noStroke();
    for(let x = 0; x < width; x+= gridSize){
      for(let y = 0; y < height; y+= gridSize){
        setFill(x,y);
        square(x,y,gridSize);
      }
    }
  }
    

}

function setFill(x,y){
  //given a particulare location  x,y dtermine the closest marker
  // and set the fill val;ue to its region color
  let minDist = -1;
  let minIndex = -1;
  for(let i = 0; i < markers.length; i++){
    let currentDist = dist(x,y,markers[i].x, markers[i].y);
    if(currentDist < minDist || minDist === -1){
      minDist = currentDist;
      minIndex = i;
    }
  }
  if(minIndex !== -1){ // indicates there is at least one marker

    fill(markers[minIndex].regionColor);
    markers[minIndex].regionAdd();
  }
  else{
    fill(200);
  }
}

function keyPressed(){
  if(key===" "){
    markers.push(new MovableMarker(mouseX, mouseY));
    
  }
  if(keyCode === 16){
    activeRender = !activeRender;
  }
}


class MovableMarker{
  //something like a PIN that can placed or moved on a map
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.offX = 0;
    this.offY = 0;    //used for when dragging not from the center
    this.baseColor = color(255,0,0);
    this.hoverColor = color(200,0,0);
    this.beingDragged = false;
    this.radius = 7;
    this.diameter = this.radius * 2;
    this.regionColor = color(random(255),random(255),random(255),150);
    this.regionArea = 0;
  }

  move(){
    if(this.mouseIsOver() && currentlyDragging === false){
      if(mouseIsPressed && mouseButton === LEFT){
        this.beingDragged = true;
        currentlyDragging = true;    // prevent other objects from being dragged
        this.offX = mouseX - this.x;
        this.offy = mouseY - this.y;
      }
    }
    // check if dragged is over
    if(!mouseIsPressed){
      this.beingDragged = false;
      currentlyDragging = false;
    }

    if(this.beingDragged){
      this.x = mouseX - this.offX;
      this.y = mouseY - this.offY;
    }

  }

  display(){
    stroke(0);
    if(this.mouseIsOver()){
      fill(this.hoverColor);
    }
    else{  //no hover
      fill(this.baseColor);
    }

    circle(this.x,this.y,this.diameter);
    fill(0);
    text(round(this.regionArea / ( width/gridSize * height/ gridSize) * 100), this.x, this.y + 20);

  }

  mouseIsOver(){
    //return true if the mouse is hoveirng over the shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d <= this.radius){
      return true; // mouse is hovering over this object
    }
    else{
      return false;
    }
  }

  regionAdd(){
    //Increase the count of square closest to this point
    this.regionArea++;
  }

  resetCount(){
    this.regionArea = 0;
  }

}
