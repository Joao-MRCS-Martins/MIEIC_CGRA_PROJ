/**
* MyBird
* @constructor
*/

const OFFSET = 0.1;

class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.quad = new MyQuad(scene);
        this.head = new MyPyramid(scene,4);
        this.body = new MyPyramid(scene,4);
        this.eye = new MyUnitCube(scene);
        this.beak = new MyPyramid(scene,4);
        this.wings = new MyWing(scene);
        this.branch;// = new MyTreeBranch(scene,0,0,0,false);

        this.oriented = 0;
        this.speed = 0;
        this.pos = [0,5,0];
        this.time = 0;
        this.flapF = 1;

        this.dropping = false;
        this.lifting = false;

        //bird  feathers
        this.bird_feathers = new CGFappearance(this.scene);
        this.bird_feathers.loadTexture("./images/textures/red_feathers.jpg");
        this.bird_feathers.setTextureWrap('REPEAT','REPEAT');
        this.bird_feathers.setAmbient(1,0.6,0.6,1);
        this.bird_feathers.setSpecular(0.8,0.6,0.4,1);
        this.bird_feathers.setDiffuse(1,0.8,0.8,1);

        //bird eye color
        this.eye_color = new CGFappearance(this.scene);
        this.eye_color.setAmbient(0,160/256,70/256,1);
        this.eye_color.setDiffuse(0,160/256,70/256,1);
        this.eye_color.setSpecular(0,160/256,70/256,1);
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
            this.bird_feathers.apply();
        
            this.scene.pushMatrix();
                this.scene.scale(-1,-1,-1);
                this.scene.pushMatrix();
                    this.scene.rotate(Math.PI/4,0,1,0);
                    this.scene.rotate(Math.PI/2,1,0,1);
                    this.scene.scale(0.8,1.8,0.8);
                    this.scene.translate(0,-0.2,0);
                    this.body.display();
                    this.scene.rotate(Math.PI/4,0,1,0);
                    this.scene.rotate(Math.PI/2,1,0,0);
                    this.scene.rotate(Math.PI/2,0,0,1);
                    this.scene.scale(1.4,1.4,1);
                    this.quad.display();
                    this.scene.popMatrix();
                    
                this.scene.pushMatrix();
                this.scene.translate(-0.4,0,0.2);
                this.scene.scale(0.8,0.8,0.8);
                
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/2*this.flapF,0,0,-1);
                        this.wings.display();
                        this.scene.popMatrix();
                        
                        this.scene.scale(-1,1,1);
                        this.scene.translate(-1,0,0);
                        this.scene.rotate(Math.PI/2*this.flapF,0,0,-1);
                        this.wings.display();
                        this.scene.popMatrix();
                        
                        this.scene.translate(0,-0.9,-0.5);
                        
                        this.scene.pushMatrix();
                        this.scene.scale(0.8,0.8,0.8);
                    this.scene.translate(0,0,0.4);
                    this.scene.rotate(-Math.PI/2,1,0,0);
                    this.scene.rotate(Math.PI/4,0,1,0);
                    this.scene.scale(0.85,1.5,0.85);
                    this.scene.translate(-0.2,0,.2);
                    this.head.display();
                    this.scene.rotate(Math.PI/4,0,1,0);
                    this.scene.rotate(Math.PI/2,1,0,0);
                    this.scene.rotate(-Math.PI/2,0,0,1);
                    this.scene.scale(1.4,1.4,1);
                    //this.scene.axis.display();
                    this.quad.display();
                this.scene.popMatrix();
                
                this.eye_color.apply();
                this.scene.scale(0.2,0.2,0.2);
                this.scene.translate(1.6,-0.8,0.2);
                this.eye.display();
                this.scene.translate(-3.2,0,0);
                this.eye.display();
            this.scene.popMatrix();
                
            this.scene.pushMatrix();
                this.beak_color.apply();
                this.scene.rotate(Math.PI/2,1,0,0);
                this.scene.rotate(Math.PI/4,0,1,0);
                this.scene.scale(0.2,0.4,0.2);
                this.scene.translate(2.5,2.6,-2.5);
                this.beak.display();
            this.scene.popMatrix();
                
            if(this.branch) {
                this.scene.pushMatrix();
                    this.scene.scale(0.4,0.4,0.4);
                    this.scene.rotate(Math.PI/2,0,1,0);
                    this.scene.translate(-3.4,1.8,-1);
                    this.branch.display();
                this.scene.popMatrix();
            }
        
        this.scene.popMatrix();
    }
    update(t,flapF) {
        this.flapF = flapF*Math.sin(Math.PI*t/500);
        this.pos[0] += (this.speed)*(t-this.time)/10000 * Math.sin(this.oriented);
        this.pos[2] += (this.speed)*(t-this.time)/10000*Math.cos(this.oriented);
        if(this.dropping) {
            //this.pos[0] += OFFSET*Math.sin(this.oriented);dd
            this.pos[1] -= Math.abs(Math.sin((t-this.time)/(Math.PI*60)));
            //this.pos[2] += OFFSET*Math.cos(this.oriented);
        }
        else if (this.lifting) {
            //this.pos[0] += OFFSET*Math.sin(this.oriented);
            this.pos[1] += Math.abs(Math.sin((t-this.time)/(Math.PI*60)));
            //this.pos[2] += OFFSET*Math.cos(this.oriented);
        }
        else {
            this.pos[1] = 5 + Math.sin(t/(Math.PI*2*30));
        }
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
               if( Math.abs(branches[i].x -this.pos[0]) < 3 && Math.abs(branches[i].z -this.pos[2]) < 3) {
                    this.branch = new MyTreeBranch(this.scene,0,0,0,false);
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
            nest.drop_branches.push(new MyTreeBranch(this.scene,0,0,0,false));
            this.branch = null;
        }
        this.dropping = false;
        this.lifting = true;
    }
}
