/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = new MyPyramid(scene,4);
        this.body = new MyUnitCube(scene);
        this.eye = new MyUnitCube(scene);
        this.beak = new MyPyramid(scene,4);
        this.wings = new MyWing(scene);
        this.branch;// = new MyTreeBranch(scene);

        this.oriented = 0;
        this.speed = 0;
        this.pos = [0,5,0];
        this.time = 0;
        this.flapF = 1;

        this.dropping = false;
        this.lifting = false;

        //bird  color
        this.bird_color = new CGFappearance(this.scene);
        this.bird_color.setDiffuse(1,0.3,0.3,1);
        this.bird_color.setSpecular(0.6,0,0,1);
        this.bird_color.setShininess(100);

        //bird eye color
        this.eye_color = new CGFappearance(this.scene);
        this.eye_color.setAmbient(0,0.7,1,0.5);
        this.eye_color.setDiffuse(0,0.7,1,0.5);
        this.eye_color.setSpecular(0,0.7,1,0.5);
        this.eye_color.setShininess(100);

        //bird beak color
        this.beak_color = new CGFappearance(this.scene);
        this.beak_color.setDiffuse(1,1,0,1);
        this.beak_color.setSpecular(1,1,0,1);
        this.beak_color.setShininess(100);
    }
    turn(v) {
        this.oriented += v;
    }
    accelerate(v) {
        this.speed += v;
    }
    display() {
        
        this.scene.pushMatrix();
            //updating bird position
            this.scene.translate(this.pos[0],this.pos[1],this.pos[2]);
            this.scene.rotate(this.oriented,0,1,0);

            //drawing bird
            this.bird_color.apply();
        
            this.scene.pushMatrix();
                this.scene.scale(-1,-1,-1);
                this.body.display();
       
                this.scene.pushMatrix();
                    this.scene.translate(-0.5,0,0);
        
                    this.scene.pushMatrix();
                        this.scene.rotate(Math.PI/4*this.flapF,0,0,-1);
                        this.wings.display();
                    this.scene.popMatrix();

                    this.scene.scale(-1,1,1);
                    this.scene.translate(-1,0,0);
                    this.scene.rotate(Math.PI/4*this.flapF,0,0,-1);
                    this.wings.display();

                this.scene.popMatrix();
       
       
                this.scene.translate(0,-0.9,-0.5);
            
                this.scene.pushMatrix();
                    this.scene.scale(0.8,0.8,0.8);
                    this.scene.translate(0,0,0.4);
                    this.scene.rotate(-Math.PI/2,1,0,0);
                    this.head.display();
                this.scene.popMatrix();
            
                this.eye_color.apply();
                this.scene.scale(0.2,0.2,0.2);
                this.scene.translate(1,-1.8,0.8);
                this.eye.display();
                this.scene.translate(-2,0,0);
                this.eye.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.beak_color.apply();
                this.scene.rotate(Math.PI/2,1,0,0);
                this.scene.scale(0.2,0.2,0.2);
                this.scene.translate(0,4.1,-4.4);
                this.beak.display();
        
                if(this.branch) {
                    this.scene.pushMatrix();
                        this.scene.rotate(Math.PI/2,0,1,0);
                        this.scene.translate(0,1,-1);
                        this.branch.display();
                    this.scene.popMatrix();
                }
        
            this.scene.popMatrix();
        this.scene.popMatrix();
    }
    update(t,flapF) {
        this.flapF = flapF*Math.sin(Math.PI*t/500);
        this.pos[0] += (this.speed)*(t-this.time)/10000 * Math.sin(this.oriented);
        if(this.dropping) {
            this.pos[1] -= this.speed*(t-this.time)/10000;
        }
        else if (this.lifting) {
            this.pos[1] += this.speed*(t-this.time)/10000;
        }
        else {
            console.log("what");
            this.pos[1] = 5 + Math.sin(Math.PI*t/500);
        }
        this.pos[2] += (this.speed)*(t-this.time)/10000*Math.cos(this.oriented);
        this.time = t;
    }
    reset() {
        this.oriented = 0;
        this.speed = 0;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.pos = [0,5,0];
        this.lifting = false;
        this.dropping = false;
    }
    pickBranch(branches) {
        if(!this.branch) {
            for(var i = 0; i < branches.length; i++) {
               if( Math.abs(branches[i].x -this.pos[0]) < 4 && Math.abs(branches[i].z -this.pos[2]) < 4) {
                    this.branch = new MyTreeBranch(this.scene,0,0,0);
                    branches.splice(i,1);
                    break;
                }
            }
        }
        this.dropping = false;
        this.lifting = true;
    }
    dropBranch(nest) {
        if(Math.abs(nest.x -this.pos[0]) < 4 && Math.abs(nest.z -this.pos[2]) < 4) {
            nest.drop_branches.push(new MyTreeBranch(this.scene,0,0,0));
            this.branch = null;
        }
        this.dropping = false;
        this.lifting = true;
    }
}
