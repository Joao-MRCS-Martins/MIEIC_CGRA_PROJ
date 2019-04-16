/**
* MyPorchLight
* @constructor
*/
class MyPorchLight extends CGFobject {
    constructor(scene) {
        super(scene);
        this.string = new MyCylinder(scene,20);
        this.lamp = new CGFlight(scene,2);
        this.initLight();
    }
    initLight() {
        this.lamp.setPosition(10,5,5, 1.0);
        this.lamp.setDiffuse(1,1,1, 1.0);
        this.lamp.setSpecular(1,1,1, 1.0);
        this.lamp.setSpotDirection(0,-1,-0.4);
        this.lamp.setSpotCutOff(45);
        this.lamp.setLinearAttenuation(0.1);
        this.lamp.enable();
        this.lamp.setVisible(true);
        this.lamp.update();
    }
    switch(turnedOn) {
        if(turnedOn) {
            this.lamp.enable();
        }
        else {
            this.lamp.disable();
        }
        this.update();
    }
    update() {
        this.lamp.update();
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0,0.4,0.8);
        this.scene.scale(0.02,0.1,0.02);
        this.string.display();
        this.scene.popMatrix();
    }
}