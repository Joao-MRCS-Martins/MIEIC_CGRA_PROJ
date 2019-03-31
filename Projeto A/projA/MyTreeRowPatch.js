/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
    constructor(scene, tree) {
        super(scene);
        this.tree = tree;
        this.initBuffers();
        this.rand_pos = [Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2 + 2*this.tree.treeTopRadius,
                         Math.random() * 2,
                         Math.random() * 2 ,
        ];
    }
    initBuffers() {
        this.tree.initBuffers();
    }
    
    display() {
        this.scene.pushMatrix();
        //FIRST ROW
        this.tree.display();
        this.scene.translate(this.rand_pos[0],0,this.rand_pos[3]);
        this.tree.display();
        this.scene.translate(this.rand_pos[1],0,-this.rand_pos[4]);
        this.tree.display();
        this.scene.translate(this.rand_pos[2],0,this.rand_pos[4]);
        this.tree.display();
        this.scene.translate(this.rand_pos[0],0,-this.rand_pos[3]);
        this.tree.display();
        this.scene.translate(this.rand_pos[1],0,this.rand_pos[3]);
        this.tree.display();

        this.scene.popMatrix();
    }
}