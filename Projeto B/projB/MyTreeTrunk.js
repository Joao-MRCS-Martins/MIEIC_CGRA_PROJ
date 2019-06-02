class MyTreeTrunk extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tree_trunk = new MyCylinder(scene,8);

        //trunk material
        this.woodAppearance = new CGFappearance(scene);
        this.woodAppearance.setDiffuse(168/255,120/255,0,1);
        this.woodAppearance.setShininess(80);
        this.texture = new CGFtexture(this.scene,"images/textures/tree_trunk.png");
        this.woodAppearance.setTexture(this.texture);
    }

    display() {
        this.woodAppearance.apply();   
        this.tree_trunk.display();
    }

}