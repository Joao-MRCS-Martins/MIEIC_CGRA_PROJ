/**
* MyWing
* @constructor
*/
class MyWing extends CGFobject {
    constructor(scene) {
        super(scene);

        this.upperW = new MyQuad(scene);

        this.lowerW = new MyTriangle(scene);
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.upperW.display();
        this.scene.pushMatrix();
        this.scene.scale(1.5,1.5,1.5);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.rotate(Math.PI/4,1,-1,0);
        this.scene.translate(0.1,-0.35,0.25);
        this.lowerW.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
