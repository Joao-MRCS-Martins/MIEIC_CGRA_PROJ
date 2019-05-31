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
        this.scene.scale(1.7,1,1.7);
        for(var i =0; i<= 2*Math.PI;i+=Math.PI/32) {
            this.scene.rotate(i,0,1,0);
            this.nest_branch.display();
        }
        this.scene.popMatrix();
        this.scene.translate(0,-0.1,0);
        this.scene.pushMatrix();
        this.scene.scale(1.2,1.2,1.2);
        for(var i =0; i< 2*Math.PI; i+= Math.PI/64) {
            this.scene.pushMatrix();
            this.scene.translate(0,0,1);
            this.scene.rotate(-Math.PI/6,1,0,0);
            this.nest_branch.display();
            this.scene.popMatrix();
            this.scene.rotate(i,0,1,0);
        }
        
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        for(var i =0; i< this.drop_branches.length; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(2*Math.PI/this.drop_branches.length*i,0,1,0);
            this.scene.translate(0,-.4,0.8);
            this.scene.rotate(-Math.PI/8,1,0,0);
            this.drop_branches[i].display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
        
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}