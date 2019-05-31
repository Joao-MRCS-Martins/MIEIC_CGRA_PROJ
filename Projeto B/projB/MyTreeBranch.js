/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
  
    
    constructor(scene,x,angle,z,nest) {
        super(scene);
        
        this.x = x;
        this.angle = angle;
        this.z = z;
        this.nest = nest; //boolean

        this.branch = new MyCylinder(scene,6);
        this.lid = new MyCircle(scene,6);

        if(nest){
            //hay material (nest)
            this.hayAppearance = new CGFappearance(this.scene);
            this.hayAppearance.loadTexture("./images/textures/nest.jpg");
            this.hayAppearance.setAmbient(0.6,0.6,0.4,1);
            this.hayAppearance.setSpecular(0.6,0.6,0.4,1);
            this.hayAppearance.setDiffuse(0.8,0.8,0.8,1);
        }
        else {
            //wood material
            this.woodAppearance = new CGFappearance(this.scene);
            this.woodAppearance.loadTexture("./images/textures/tree_trunk.png");
            this.woodAppearance.setDiffuse(0.8,0.8,0.8,1);
            this.woodAppearance.setSpecular(0.2,0.2,0.2,1);
            this.woodAppearance.setShininess(15);
        }


    }
    
    display() {
        if(this.nest) {
            this.hayAppearance.apply();
        }
        else {
            this.woodAppearance.apply();
        }
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.scale(0.4,0.4,0.4);
        this.scene.translate(this.x,0,this.z);
        this.scene.rotate(this.angle,0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.2,2,0.2);
        this.scene.pushMatrix();
        this.lid.display();
        this.scene.translate(0,1,0);
        this.lid.display();
        this.scene.popMatrix();
        this.branch.display();        
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
