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

        this.upTime = 0;

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
    
    display() {
        this.bird_color.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,this.upTime,0);
        this.scene.pushMatrix();
        this.scene.scale(-1,-1,-1);
        this.body.display();
        this.scene.translate(0,-0.9,-0.5);
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

    update(t) {
        console.log(t);
        this.upTime = Math.sin(Math.PI*t/500);
    }
}
