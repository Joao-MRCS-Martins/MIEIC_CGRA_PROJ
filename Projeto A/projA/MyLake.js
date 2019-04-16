/**
* MyLake
* @constructor
*/
class MyLake extends CGFobject {
    constructor(scene, scaleFactor) {
        super(scene);
        this.scaleFactor = scaleFactor;
        this.circle = new MyCircle(scene,20);

        //water material
        this.waterTex = new CGFappearance(this.scene);
        this.waterTex.loadTexture("./images/Textures/water_texture.jpg");
        this.waterTex.setDiffuse(0.8,0.8,0.8,0.1);
        this.waterTex.setSpecular(1.0,1.0,1.0,0.1);
        this.waterTex.setShininess(100);
        this.initBuffers();
    }
    initBuffers() {
        this.circle.initBuffers();
    }
    
    display() {
        this.waterTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(1/8,0,1/8);
        this.circle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.scale(2*this.scaleFactor,2*this.scaleFactor,2*this.scaleFactor);
        this.scene.translate(-1,0,-1);
        this.circle.display();
        this.scene.popMatrix();
    }
}