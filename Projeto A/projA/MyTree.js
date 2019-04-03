/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.sides = (Math.random() * 10) +5;
        this.trunk = new MyCylinder(scene,this.sides);
        this.treeTop = new MyCone(scene,this.sides);

        //trunk material
        this.woodAppearance = new CGFappearance(this.scene);
        this.woodAppearance.loadTexture("./images/Textures/tree_trunk.png");
        this.woodAppearance.setDiffuse(0.8,0.8,0.8,1);
        this.woodAppearance.setSpecular(0.2,0.2,0.2,1);
        this.woodAppearance.setShininess(15);

        //tree top material;
        this.leavesAppearance = new CGFappearance(this.scene);
        this.leavesAppearance.loadTexture("./images/Textures/leaves_texture.jpg");
        this.leavesAppearance.setDiffuse(0.8,0.8,0.8,0.5);
        this.leavesAppearance.setSpecular(0.3,0.3,0.3,1);
        this.leavesAppearance.setShininess(100);

        this.initBuffers();
    }
    initBuffers() {
        this.trunk.initBuffers();
        this.treeTop.initBuffers();
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.woodAppearance.apply();
        this.trunk.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
        this.leavesAppearance.apply();
        this.treeTop.display();
        this.scene.popMatrix();
    }
}