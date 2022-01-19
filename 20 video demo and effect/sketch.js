// VIdeos stream and effects
// Srushti Vyas
// Jan 18, 2022
// can we get these webcams to work?

let video;
let GRID_SPACING = 100;

function setup() {
  video = createCapture(VIDEO);
  createCanvas(640, 480);
  video.hide();
}

function multiVideo(){
  //display several videos in a 2d grid
  for(let x = 0; x < width; x+= GRID_SPACING){
    for(let y = 0; y < height; y+= GRID_SPACING){
      image(video, x, y, GRID_SPACING, GRID_SPACING);
    }
  }
}

function average(pos){
  // return the average value of RGB starting at pos
  let r = pixels[pos];
  let g = pixels[pos+1];
  let b = pixels[pos+2];
  return(r+g+b) / 3;
}

function setPixelColor(pos, r,g,b){
  //helper function to srt RGB for particular pixel, index of R given by pos
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function draw() {
  background(220);
  //multiVideo();

  video.loadPixels(); //tells p5 we want to access to the pixel array
  for(let i = 0; i < pixels.length; i+= 4){
    let avg = average(i);
    setPixelColor(i, avg, avg, avg);

  }
  video.updatePixels();
  image(video, 0, 0);
}

