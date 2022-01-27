class Explosion {
  constructor(x, y) {
    this.pos = createVector(x, y);
   
    this.currentFrame = 0; // 0 - 6
    this.active = true; // help us know when to delete
  }

  display() {
    if (this.currentFrame > 5) {
      this.active = false;
    }
    else {// implies we haven't reached the end yet
      image(explosionImages[this.currentFrame], this.pos.x, this.pos.y);
      if (frameCount % 4 === 0) {
       this.currentFrame++;
      }
    }


  }


}