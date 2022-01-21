class Ball{
    constructor(v_){
        this.radius = 20;
        this.pos = createVector(73,525);
        this.velocity = v_;
        this.gravity = createVector(0,0.2);
        this.alive = true;
        //this.targetX = random(70,600);
        //this.targetY = random(80,500);
       // this.dia = 40;
      
        this.collisionType = 0;  //1 → ground, 2 → target
    }                           // 0 → no collision
    

    move(){
        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);
    }

    display(){
        push();
        translate(this.pos.x, this.pos.y);
        image(cannonballImage, 0 ,0);
        pop();
    }

    getAlive(){
        return this.alive;
    }

    getCollisionType(){
        return this.collisionType;
    }

    checkGroundCollision(){
        // 546
        if(this.pos.y > 546){
            this.alive = false;
            this.collisionType = 1;
        }
    }

    checkTargetCollision(){
        if(this.pos.x < this.radius || this.pos.x > displayTarget()){
            this.alive = false;
            this.collisionType = 2;
        }

        if(this.pos.y < this.radius || this.pos.y > displayTarget()){
            this.alive = false;
            this.collisionType = 2;
        }
            
        
    }

}