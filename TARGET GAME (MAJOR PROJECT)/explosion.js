class Explosion{
    constructor(x, y) {
        this.pos = createVector(x, y);
          this.explosions = [];
        this.currentFrame = 0; // 0 - 6
        this.active = true; // help us know when to delete
      }
    
      display(tX,tY) {
        if (this.currentFrame > 6) {
          this.active = false;
        }
        else {// implies we haven't reached the end yet
          image(explosionImages[this.currentFrame],this.pos.tX,this.pos.tY);
          if (frameCount % 4 === 0) {
            this.currentFrame++;
          }
        }

        
        for (let i = 0; i < this.explosions.length; i++) {
            let e = this.explosions[i];
            e.display();
            if (e.active === false) {
              this.explosions.splice(i, 1);
            }
          }


      }


}