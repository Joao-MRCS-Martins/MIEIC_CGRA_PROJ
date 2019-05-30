class MyLeaf {
    constructor(scene) {
        this.leaf = new MyDiamond(scene);

        //green material
        this.green = new CGFappearance(scene);
        this.green.setDiffuse(0,100/255,0,1);
        this.green.setSpecular(0,50/255,0,1);
        this.green.setShininess(15);
    }

    display() {
        this.green.apply();
        this.leaf.display();
    }

}