class MyBranch {
    constructor(scene) {
        this.branch = new MyCylinder(scene,3);

        //trunk material
        this.woodAppearance = new CGFappearance(scene);
        this.woodAppearance.setDiffuse(168/255,120/255,0,1);
        this.woodAppearance.setShininess(80);
    }

    display() {
        this.woodAppearance.apply();
        this.branch.display();
    }

}