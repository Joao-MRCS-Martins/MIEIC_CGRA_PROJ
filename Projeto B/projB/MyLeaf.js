class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.leaf = new MyRectTriangle(scene);

        //green material
        this.green = new CGFappearance(scene);
        this.green.setDiffuse(0,100/255,0,1);
        this.green.setSpecular(0,50/255,0,1);
        this.green.setShininess(15);
    }

    display() {
        this.scene.pushMatrix();
        this.green.apply();
        //this.scene.translate(0.5,0.5,0)
        this.scene.scale(2,2,2);
        this.leaf.display();
        
        this.scene.popMatrix();
    }


}