// //Black and White Target
function setup() {
  createCanvas(400, 400);
  }
  function draw() {
  background(240);
  // ellipse(200, 200, 400, 400);
  // ellipse(200, 200, 360, 360);
  // ellipse(200, 200, 320, 320);
  // ellipse(200, 200, 280, 280);
  // ellipse(200, 200, 240, 240);
  // ellipse(200, 200, 200, 200);
  // ellipse(200, 200, 160, 160);
  // ellipse(200, 200, 120, 120);
  // ellipse(200, 200, 80, 80);
  // ellipse(200, 200, 40, 40);
    target();
  }
  
  function target(){
    for(let d = 400; d >= 40; d-= 40){
      circle(200,200,d);
    }
    
  }
    
     