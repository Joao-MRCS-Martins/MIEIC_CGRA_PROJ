/**
* MyWing
* @constructor
*/
class MyWing extends CGFobject {
    constructor(scene) {
        super(scene);

        this.upperW = new MyQuad(scene);

        this.lowerW = new MyRectTriangle(scene);
        this.flapF = 1;
    }
    
    display() {
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI/2,1,0,0);
            this.scene.rotate(Math.PI,0,1,0);
            this.scene.scale(1,1.5,1);
            this.scene.rotate(Math.PI/4*this.flapF+Math.PI/8,0,1,0);
        
            this.scene.pushMatrix();
                this.scene.scale(0.5,0.8,1);
                this.scene.translate(-0.3,0.8,0);
                
                this.upperW.display();
            this.scene.popMatrix();
            this.scene.pushMatrix();
                this.scene.scale(-1.5,-0.8,1);
                this.scene.translate(0.265,-1.3,0);
                this.scene.rotate(-Math.PI/4*this.flapF,0,1,0);
                this.lowerW.display();
            this.scene.popMatrix();
        this.scene.popMatrix();
    }
    update(f) {
        this.flapF = f;
    }
}
