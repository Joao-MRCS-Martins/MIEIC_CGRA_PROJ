class MyHouse extends CGFobject{
    constructor(scene){
        super(scene);
        this.roof = new MyPyramid(scene,4,1);
        this.walls = new MyUnitCubeQuad(scene);
        this.column = new MyPrism(scene,8,1);


    }

    display(){

        this.scene.pushMatrix();

        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.roof.display();
        this.scene.popMatrix();
        
        
        this.walls.display();
        
        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.1);
        this.scene.translate(6,-0.5,6);
        this.column.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.1);
        this.scene.translate(-6,-0.5,6);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.1);
        this.scene.translate(6,-0.5,-6);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.1);
        this.scene.translate(-6,-0.5,-6);
        this.column.display();
        this.scene.popMatrix();

    }




}