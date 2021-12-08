//  let x;
 let y;
 let a;
 let cnv, b;
 let newCanvas;
 
 let nextC;
 
 let rectA, circA, triA, heartA = false;
 
 function setup() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.mouseWheel(changeSize);
   newCanvas = createGraphics(windowWidth,windowHeight);
   newCanvas.clear();
    background(220);
   
   x = 10;
   b = 100;
   a = random(200);
   nextC = color(random(255),random(255),random(255) );
 }
 
 function draw() {
   
 
   
   background(255);
   newCanvas.fill(116, 69, 209);
    newCanvas.textFont('Georgia');
    newCanvas.textStyle(ITALIC);
    newCanvas.textSize(23)
    newCanvas. text('Srushti',width*0.9,height*0.9);
      image(newCanvas,0,0);
   drawEllipse();
   preview();
   
   
 
 }
 
 
 
 function drawEllipse(){
     y = noise(a);
   y = map(y,0,1,5,250);
 stroke(21, 194, 139);
   strokeWeight(7);
 fill(245, 66, 141);
 ellipse(width*0.7,height/2,y);
   a -= 0.02;
 
 }
 
 
 
 function keyPressed(){
 
   fill(random(255),random(255),random(255));
  
   print(keyCode)
  
   if(keyCode === 65){
    rectA = true;
     circA = false;
     heartA = false;
     triA = false;
     }
  if(keyCode === 83){
    rectA = false;
     circA = true;
     heartA = false;
     triA = false;
     }
  if(keyCode === 68){
     rectA = false;
     circA = false;
     heartA = false;
     triA = true;
   }
   if(keyCode === 70){
    rectA = false;
     circA = false;
     heartA = true;
     triA = false;
   }
   if(keyCode === 32){
     newCanvas.clear();
   background(220);
   }
   
 }
 
 function preview(){
    noStroke();
   fill(nextC);
   
   if(rectA === true){
   rect(mouseX,mouseY,x,x);
  
   }
   
   if(circA === true){
     ellipse(mouseX,mouseY,x,x)
   }
   
   if(triA === true){
      triangle(mouseX-x,mouseY+x,mouseX,mouseY-x ,mouseX+x,mouseY+x);
   }
   
   if(heartA === true){
      heart(mouseX, mouseY, x, x);
   }
 
   
 }
 
 
 function mouseClicked(){
   newCanvas.noStroke();
   
   newCanvas.fill(nextC);
   
   if(rectA === true){
     newCanvas.rect(mouseX,mouseY,x,x);
  
   }
   
   if(circA === true){
      newCanvas.ellipse(mouseX,mouseY,x,x)
   }
   
   if(triA === true){
      newCanvas.triangle(mouseX-x,mouseY+x,mouseX,mouseY-x ,mouseX+x,mouseY+x);
   }
   
   if(heartA === true){
      heart2(mouseX, mouseY, x, x);
   }
   
   nextC = color(random(255),random(255),random(255));
   
 }
 
 
 
 
 
 
 
 function heart(x, y, size) {
   beginShape();
   vertex(x, y);
   bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
   bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
   endShape(CLOSE);
 }
 
 function heart2(x, y, size) {
   newCanvas.beginShape();
   newCanvas.vertex(x, y);
   newCanvas.bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  newCanvas.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
   newCanvas.endShape(CLOSE);
 }
 
 function mouseWheel(){
   print(event.delta);
   
   b = b + 10
   
   }
 
 function changeSize(event){
   
   if(event.deltaY > 0){
     x = x - 10;
 
   }
   else{
     x = x + 10;
 
   }
   
   x = constrain (x,width/100,width/4)
 }
   
   
   
   
   