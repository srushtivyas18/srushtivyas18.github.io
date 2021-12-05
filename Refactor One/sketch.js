// //Srushti Vyas
let valueA, valueB, sizeC, sideD; //The variables for bouncing rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);

  valueA = 200;         //valueA and valueB would work as the x and y values
  valueB = 300;
  sizeC = random(3, 8);  
  sizeD = random(3, 8); // sizeC and sizeD would work as the random position of the rectangle
}

function draw() {
  background(80, 80, 80);
  rect(valueA, valueB, 250, 75);
  movingRect();
}

//functoin for moving rectangle
function movingRect() {
  valueA += sizeC;  
  valueB += sizeD;   //Values for the bouncing rectangle on random places

  if (valueB >= height - 75 || valueB <= 0) { 
    sizeD = sizeD * -1;
  }

  if (valueA >= width - 250 || valueA <= 0) {   
    sizeC = sizeC * -1;
  }
}
