class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.branch = new MyCylinder(scene,10);

        //trunk material
        this.woodAppearance = new CGFappearance(scene);
        this.woodAppearance.setDiffuse(168/255,120/255,0,1);
        this.woodAppearance.setShininess(80);
        this.texture = new CGFtexture(this.scene,"images/textures/tree_trunk.png");
        this.woodAppearance.setTexture(this.texture);
    }

    display() {
        this.woodAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(1,0,0);
      //  this.scene.scale(0.5,1,0.5);
        this.scene.popMatrix();
        this.branch.display();
    }

}