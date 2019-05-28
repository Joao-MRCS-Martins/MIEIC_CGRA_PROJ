/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
  
    
    constructor(scene,x,angle,z) {
        super(scene);
        
        this.x = x;
        this.angle = angle;
        this.z = z;
        
        this.branch = new MyCylinder(scene,5);
    
        //wood material
        this.woodAppearance = new CGFappearance(this.scene);
        this.woodAppearance.loadTexture("./images/textures/tree_trunk.png");
        this.woodAppearance.setDiffuse(0.8,0.8,0.8,1);
        this.woodAppearance.setSpecular(0.2,0.2,0.2,1);
        this.woodAppearance.setShininess(15);
    }
    
    display() {
        this.woodAppearance.apply();
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(this.x,0,this.z);
        this.scene.rotate(this.angle,0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.2,2,0.2);
        this.branch.display();        
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
