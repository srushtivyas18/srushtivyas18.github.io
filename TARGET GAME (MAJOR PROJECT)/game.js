class Game {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.cannonAngle = 0;
        this.cannonPower = 10;
        this.shots = [];
        this.targetX = random(70, 1000);
        this.targetY = random(100, 500);
        this.explosions = [];
        this.shotsLeft = 20;
        this.targetHit = 0;
    }

    play() {
        //called once per frame (acts like draw)
        imageMode(CORNER);
        image(backImage, 0, 0);



        //process and draw every cannonball
        imageMode(CENTER);
        for (let i = 0; i < this.shots.length; i++) {
            let b = this.shots[i];
            b.move();
            b.display();
            b.checkGroundCollision();
            b.checkTargetCollision(this.targetX, this.targetY);
            //check the target collision


            if (b.getAlive() === false) {
                if (b.getCollisionType() === 1) {
                    //groundCollison case
                    //create spawn a bunch of smoke particles

                    this.shots.splice(i, 1);
                    i--;
                }
                else if (b.getCollisionType() === 2) {
                    this.targetHit++;

                   // this.displayExplosionShots();
                   this.explosions.push(new Explosion(this.targetX, this.targetY));
                    this.targetX = random(70, 600);
                    this.targetY = random(80, 500);
                   
                    this.shots.splice(i, 1);
                    i--;




                }
            }
        }





        //process and draw every particle

        for (let i = 0; i < this.explosions.length; i++) {
            let e = this.explosions[i];
            e.display();
            if (e.active === false) {
                this.explosions.splice(i, 1);
            }
        }

       



        // process and draw every explosion that is active
        this.displayTarget();


        this.displayshotsLeft();


        // draw the correct image for the number of shots left and targets hit
        this.displayTargetHit();



        //draw the cannon
        this.displayCannon();
        this.displayPower();
        // if(this.shotsLeft < 1 && this.shots.length === 0){
        //     imageMode(CORNER);
        //     image(backImageReport,0,0)
        // }      
        
        


    }

    createShot() {
        let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
            this.cannonPower * sin(radians(this.cannonAngle) * -1));
        if (this.shotsLeft > 0) {
            this.shots.push(new Ball(v));
            this.shotsLeft--;
            
        }
        

    }

    displayCannon() {
        imageMode(CENTER);
        push();
        translate(73, 525);
        push();
        rotate(radians(360 - this.cannonAngle));
        image(barrelImage, 0, 0);
        pop();
        image(baseImage, 0, 0);
        pop();
    }


    displayTarget() {
        imageMode(CENTER);
        image(targetImage, this.targetX, this.targetY);

    }

    // displayExplosionShots() {
    //     this.targetX = random(70, 1000);
    //     this.targetY = random(100, 500);
        
        
    // }

    displayshotsLeft() {
        for (let i = 0; i < this.shotsLeft; i++) {
            imageMode(CENTER);
            push();
            translate(202, 42);
            image(shotsRemainingImages[this.shotsLeft], 325, 20);
            pop();
        }
       
    }

    displayTargetHit() {
        for (let i = 0; i < 21; i++) {
            imageMode(CENTER);
            push();
            translate(202, 42);
            image(targetsHitImages[this.targetHit], 700, 20);
            pop();
        }
    }

    displayPower() {
        rectMode(CORNER);
        noStroke();
        fill(3, 252, 186);
        rect(0, 40, this.cannonPower * 15 - 50, 45);  
        
       
    }

    changePower(increase) {
        if (increase) {
            if (this.cannonPower < 20) this.cannonPower += 0.15; // This function will determine how much power does a ball should have
        }
                                                                
        else {
            if (this.cannonPower > 5) this.cannonPower -= 0.15;

        }
        

    }

    changeAngle(increase) {
        //if increase is true - getting larger Angle
        if (increase) {
            if (this.cannonAngle < 90) this.cannonAngle += 2;
        }                                                         // This whole function will determine how much the cannonball shooter should be upto
                                                            
        else {
            if (this.cannonAngle > 0) this.cannonAngle -= 2;

        }

    }

    
}