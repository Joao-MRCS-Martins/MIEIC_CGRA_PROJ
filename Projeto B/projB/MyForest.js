class MyForest extends CGFobject{
    constructor(scene){
        super(scene);
        this.tree1 = new MyLSPlant(this.scene);
        this.tree2 = new MyLSPlant(this.scene);
        this.tree3 = new MyLSPlant(this.scene);
        this.tree4 = new MyLSPlant(this.scene);
        this.tree5 = new MyLSPlant(this.scene);
        this.tree6 = new MyLSPlant(this.scene);
        this.tree7 = new MyLSPlant(this.scene);
    
    }


    display(){
        this.scene.pushMatrix();
            this.scene.scale(2,2,2);

            
            this.scene.pushMatrix();
                this.scene.translate(-6,0,0);
                this.scene.rotate(Math.PI/4,0,1,0);
                this.tree1.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
                this.scene.translate(-2,0,-4);
                this.tree2.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
                this.scene.translate(-1,0,-7);
                this.tree3.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
                this.scene.translate(-4,0,6);
                this.scene.rotate(Math.PI/2,0,1,0);
                this.tree4.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(6,0,6);
                this.tree5.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(5,0,3);
                this.tree1.display();
            this.scene.popMatrix();

            
            this.scene.pushMatrix();
                this.scene.translate(8,0,1);
                this.tree6.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
                this.scene.translate(7,0,4);
                this.tree2.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(6,0,-4);
                this.tree7.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(6,0,1);
                this.tree3.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(8,0,-2);
                this.tree4.display();
            this.scene.popMatrix();

        this.scene.popMatrix();
    }
    
}