class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        //this.leaf = new MyRectTriangle(scene);
        this.leaf = new MyCircle(this.scene,20);
        //green material
        this.green = new CGFappearance(scene);
        this.green.setDiffuse(0,100/255,0,1);
        this.green.setSpecular(0,50/255,0,1);
        this.green.setShininess(15);
        this.texture = new CGFtexture(this.scene,"images/textures/leaves.jpg");
        this.green.setTexture(this.texture);
    }

    display() {
        this.scene.pushMatrix();
        this.green.apply();
        //this.scene.translate(0.5,0.5,0)
        this.scene.scale(2,1,1);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(1,0,0);
        this.leaf.display();
        
        this.scene.popMatrix();
    }


}