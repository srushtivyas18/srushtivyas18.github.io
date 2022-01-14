class Game {
    constructor() {
        this.cannonAngle = 0;
        this.cannonPower = 10;
        this.shots = [];
    }

    play() {
        //called once per frame (acts like draw)
        imageMode(CORNER);
        image(backImage, 0, 0);
       

        //process and draw every cannonball
        imageMode(CENTER);
        for(let i = 0; i < this.shots.length; i++){
            let b = this.shots[i];
            b.move();
            b.display();
        }

        //process and draw every particle
       
        //draw the cannon
        this.displayCannon();
        this.displayPower();
    }

    createShot(){
        let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
        this.cannonPower * sin(radians(this.cannonAngle) * -1));
        this.shots.push(new Ball(v));
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

    displayPower(){
        rectMode(CORNER);
        noStroke();
        fill(3, 252, 186);
        rect(0,40,this.cannonPower * 15 - 50,45);
    }

    changePower(increase){
        if (increase) {
            if (this.cannonPower < 20) this.cannonPower += 0.15;
        }

            else {
                if (this.cannonPower > 5) this.cannonPower -= 0.15;

            }
        
    }
   
    changeAngle(increase){
        //if increase is true - getting larger Angle
        if (increase) {
            if (this.cannonAngle < 90) this.cannonAngle += 2;
        }

            else {
                if (this.cannonAngle > 0) this.cannonAngle -= 2;

            }
        
    }

    
}