/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = new MyUnitCube(scene);

        this.body = new MyUnitCube(scene);

        this.eye = new MyUnitCube(scene);

        this.beak = new MyPyramid(scene,4);

        this.wings = new MyWing(scene);

        this.upTime = 0;

        this.oriented = 0;

        this.speed = 0;

        this.pos = [0,0,0];
        this.time = 0;

        this.flapF = 1;

        //bird  color
        this.bird_color = new CGFappearance(this.scene);
        this.bird_color.setDiffuse(1,0.3,0.3,1);
        this.bird_color.setSpecular(0.6,0,0,1);
        this.bird_color.setShininess(100);

        //bird eye color
        this.eye_color = new CGFappearance(this.scene);
        this.eye_color.setAmbient(1,1,1,1);
        this.eye_color.setDiffuse(1,1,1,1);
        this.eye_color.setSpecular(1,1,1,1);
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
        this.bird_color.apply();
        this.scene.pushMatrix();
        
        this.scene.translate(this.pos[0],this.pos[1],this.pos[2]);
        this.scene.rotate(this.oriented,0,1,0);
        this.scene.pushMatrix();
        this.scene.scale(-1,-1,-1);
        this.body.display();
       
        this.scene.pushMatrix();
        
        this.scene.translate(-0.5,0,0);
        this.scene.pushMatrix();
        this.scene.rotate(this.pos[1]*Math.PI/4*this.flapF,0,0,-1);
        this.wings.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1,1,1);
        this.scene.translate(-1,0,0);
        this.scene.rotate(this.pos[1]*Math.PI/4*this.flapF,0,0,-1);
        this.wings.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
       
       
        this.scene.translate(-1,0,0);
        this.scene.translate(1,-0.9,-0.5);
        this.head.display();
        this.eye_color.apply();
        this.scene.scale(0.2,0.4,0.4);
        this.scene.translate(2.5,0,-0.5);
        this.eye.display();
        this.scene.translate(-5,0,0);
        this.eye.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.4,0.4,0.4);
        this.scene.translate(0,2,-2);
        this.beak_color.apply();
        this.beak.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    update(t,flapF) {
        this.flapF = flapF;
        this.pos[0] += (this.speed)*(t-this.time)/10000 * Math.sin(this.oriented);
        this.pos[1] = Math.sin(Math.PI*t/500);
        this.pos[2] += (this.speed)*(t-this.time)/10000*Math.cos(this.oriented);
        console.log("Time elapsed: ",t-this.time);
        console.log("pos0 ",this.pos[0]," pos1 ",this.pos[1]," pos2 ",this.pos[2]);
        this.time = t;
    }

    reset() {
        this.oriented = 0;
        this.speed = 0;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.pos = [0,0,0];
    }
}
