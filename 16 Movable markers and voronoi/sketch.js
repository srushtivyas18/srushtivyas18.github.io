// Movable markers + voronoi Diagram
// Srushti Vyas
// Dec 17, 2021
// for a buiesness place problem...?
// Expert Challenge:- added the star thing, when you press "B" the staar will show up on screen and will be able to render it

let markers = [];  // will make the marker which can be render around the screen
let currentlyDragging = false;  // global variable flag for if we are currently moving something
let gridSize = 5;       //acting as a helper for the render
let activeRender = true; 
let map;    // loading image variable

function preload(){
  map = loadImage("assets/SaskatoonSection.png");  //loading the saskatoon map image
}

function setup() {
  createCanvas(800, 600);
  map.loadPixels();   //loads the picture data into pixels
}

function draw() {
  background(220);
  image(map,0,0,800,600);    // creating the image in canvas
  drawVoronoi();
  for(let m of markers){   
    m.move();             //this will make the things which are described in the class
    m.display();
  }
}



function drawVoronoi(){
  // render the voronoi diagram based on the objects stored in markers
  for(let m of markers){
    m.resetCount();        // same with this, it works as making the random voronoi thing
  }


  if(activeRender){
    noStroke();
    for(let x = 0; x < width; x+= gridSize){             //the whole active render is for the voronoi which will alow to get it to the random 
      for(let y = 0; y < height; y+= gridSize){         // size and color
        setFill(x,y);
        square(x,y,gridSize);
      }
    }
  }
    

}

function setFill(x,y){
  //given a particulare location  x,y dtermine the closest marker
  // and set the fill val;ue to its region color
  let minDist = -1;           // the random color which is been filled for the voronoi diagram, is been setup here
  let minIndex = -1;
  for(let i = 0; i < markers.length; i++){
    let currentDist = dist(x,y,markers[i].x, markers[i].y);
    if(currentDist < minDist || minDist === -1){         //had to make if statement so it won't go out of the range of the marker
      minDist = currentDist;
      minIndex = i;
    }
  }
  if(minIndex !== -1){ // indicates there is at least one marker

    fill(markers[minIndex].regionColor);
    markers[minIndex].regionAdd();
  }
  else{
    fill(200,100);    // this will make the bacround picture enabled by making the grey color to the transparency level
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();                                          // this is the star function which i took from p5js example
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;                            //here id the link for it.
    let sy = y + sin(a) * radius2;                             //https://p5js.org/examples/form-star.html
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function keyPressed(){
  if(key===" "){
    markers.push(new MovableMarker(mouseX, mouseY));         // When you push the space key, one small marker will be appear
    
  }
  if(keyCode === 16){ 
    activeRender = !activeRender;         // when you push the "Shift" this will make the vornoi color diagram dimisnish to take a good look of the picture
  }

  if(keyCode === 66){ //B key                // when you press the "B" key it will make the star on the screen
    markers.push(new StarMaker(mouseX, mouseY));
  }
}


class MovableMarker{
  //something like a PIN that can placed or moved on a map
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.offX = 0;                                                  // the whole class for mainf the dragging and hovering
    this.offY = 0;    //used for when dragging not from the center
    this.baseColor = color(255,0,0);
    this.hoverColor = color(252, 186, 3);
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
      this.beingDragged = false;    // detemine whether hte user finished dragging or not
      currentlyDragging = false;
    }

    if(this.beingDragged){
      this.x = mouseX - this.offX;    // mouse dragging for left and the right side
      this.y = mouseY - this.offY;
    }

  }

  display(){
    stroke(0);
    if(this.mouseIsOver()){     //this is where it adds the hovering color to it, that will be "yello"
      fill(this.hoverColor);
    }
    else{  //no hover
      fill(this.baseColor);  //base color is "red"
    }

    circle(this.x,this.y,this.diameter);
    fill(0);
    text(round(this.regionArea / ( width/gridSize * height/ gridSize) * 100), this.x, this.y + 20); // showing the percentage, that how much area that particular marker is using

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


class StarMaker extends MovableMarker{
  constructor(x,y){
    super(x,y);                            //  startMaker is my child class which is inheriting the things for the movable Marker parent class
    this.baseColor = color(5, 35, 232);   //  had to use base and hover color to change it unless it will make the same color as the marker
    this.hoverColor = color(33, 220, 237);
    
    
  }
  move(){
    super.move()     // inheriting move() from movableMarker
  }
  display(){
    stroke(0);
    if(this.mouseIsOver()){         // had to add the mouse is over thing 'cause i changed the hover color and base color
      fill(this.hoverColor);
    }
    else{  //no hover
      fill(this.baseColor);
    }
    star(this.x,this.y,10,25,5);       // the star is being made here
    fill(0);
    text(round(this.regionArea / ( width/gridSize * height/ gridSize) * 100), this.x, this.y + 20);  //this will also show the  percent, that how much area it is taking in the canvas
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
    super.regionAdd();      //inheritng
  }

  regionCount(){
    super.regionCount();   //inheriting
  }
}


//    THANK YOU MR SCOTT