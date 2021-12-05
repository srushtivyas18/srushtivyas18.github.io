// //Black and White Target
//Srushti Vyas
//Making a target as a new function
function setup() {
  createCanvas(400, 400);
  }
  function draw() {
  background(240);
    target();
  }


  // d = diameter
  function target(){
    for(let d = 400; d >= 40; d-= 40){
      circle(200,200,d);
    }
    
  }
    
     