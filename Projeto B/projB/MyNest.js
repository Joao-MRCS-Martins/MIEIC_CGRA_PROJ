/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene,x,z) {
        super(scene);

        this.nest_branch = new MyTreeBranch(scene,0,0,0,true);
            
        this.drop_branches=[];
        

        this.x = x;
        this.z = z;

    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x,0,this.z);
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        for(var i =0; i<= 2*Math.PI;i+=Math.PI/16) {
            this.scene.rotate(i,0,1,0);
            this.nest_branch.display();
        }
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        for(var i =0; i< 2*Math.PI; i+= Math.PI/32) {
            this.scene.pushMatrix();
            this.scene.translate(0,0,1.8);
            this.scene.rotate(-Math.PI/6,1,0,0);
            this.nest_branch.display();
            this.scene.popMatrix();
            this.scene.rotate(i,0,1,0);
        }
        
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0.5,0);
        for(var i =0; i< this.drop_branches.length; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(Math.PI/2*i,0,1,0);
            this.scene.translate(0,0,1.8);
            this.drop_branches[i].display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
        
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}