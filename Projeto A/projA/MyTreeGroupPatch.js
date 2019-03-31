/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene, tree) {
        super(scene);
        this.tree = tree;
        this.initBuffers();
        this.rand_pos = [Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius ];
    }
    initBuffers() {
        this.tree.initBuffers();
    }
    
    display() {
        this.scene.pushMatrix();
        //FIRST ROW
        this.tree.display();
        this.scene.translate(this.rand_pos[0],0,0);
        this.tree.display();
        this.scene.translate(this.rand_pos[1],0,0);
        this.tree.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0,this.rand_pos[2]);
        //SECOND ROW
        this.tree.display();
        this.scene.translate(this.rand_pos[3],0,0);
        this.tree.display();
        this.scene.translate(this.rand_pos[4],0,0);
        this.tree.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0,2*(this.rand_pos[5]));
        
        //THIRD ROW
        this.tree.display();
        this.scene.translate(this.rand_pos[6],0,0);
        this.tree.display();
        this.scene.translate(this.rand_pos[7],0,0);
        this.tree.display();

        this.scene.popMatrix();
    }
}