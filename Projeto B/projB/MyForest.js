class MyForest extends CGFobject{
    constructor(scene){
        super(scene);
        this.tree1 = new MyLSPlant(this.scene);
        this.tree2 = new MyLSPlant(this.scene);
        this.tree3 = new MyLSPlant(this.scene);
        this.tree4 = new MyLSPlant(this.scene);
    }


    display(){
        this.scene.pushMatrix();
        this.scene.translate(0,4,0);
        this.scene.scale(2,2,2);
        
        this.scene.pushMatrix();
        this.scene.translate(0,0,-5);
        this.tree1.display();
        
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(-1.5,0,-5);
        this.tree2.display();
        
        
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2,0,-5);
        this.tree3.display();
        
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(5,0,0);
        this.tree4.display();
        
        
        
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
    
}