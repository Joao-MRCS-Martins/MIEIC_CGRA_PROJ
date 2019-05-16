class MyHouse extends CGFobject{
    constructor(scene){
        super(scene);
        
        //to apply the house walls texture map, see the texture image in case of confusion
        var texCoords = [ 1/982, 412/617, 246/982, 412/617, 1/982, 207/617, 246/982, 207/617, //left wall
                          246/982, 207/617, 491/982, 207/617, 246/982, 1/617, 491/982, 1/617, // top "wall" (unseen)
                          246/982, 412/617, 491/982, 412/617, 246/982, 207/617, 491/982, 207/617, //front wall (the door)
                          246/982, 617/617, 491/982, 617/617, 246/982, 412/617, 491/982, 412/617, //bottom "wall" (unseen)
                          491/982, 412/617, 735/982, 412/617, 491/982, 207/617, 735/982, 207/617, // right wall (the window)
                          735/982, 412/617, 980/982, 412/617, 735/982, 207/617, 980/982, 207/617 ]; // back wall

        this.roof = new MyPyramid(scene,4,1);
        this.walls = new MyUnitCubeQuad(scene,texCoords);
        this.column = new MyPrism(scene,8,1);
        
        //house map texture;
        this.house_map = new CGFappearance(this.scene);
        this.house_map.loadTexture("./images/Textures/housemap.jpg");
        this.house_map.setDiffuse(0.8,0.8,0.8,1);
        this.house_map.setSpecular(0.1,0.1,0.1,1);
        this.house_map.setShininess(100);
        
        
        //rooftop texture
        this.roof_tex = new CGFappearance(this.scene);
        this.roof_tex.loadTexture("./images/Textures/rooftop_texture.jpg");
        this.roof_tex.setDiffuse(0.8,0.8,0.8,1);
        this.roof_tex.setSpecular(0.05,0.05,0.05,1);
        this.roof_tex.setShininess(100);

        //columns texture
        this.col_tex = new CGFappearance(this.scene);
        this.col_tex.loadTexture("./images/Textures/column_texture.jpg");
        this.col_tex.setDiffuse(0.8,0.8,0.8,1);
        this.col_tex.setSpecular(0.2,0.2,0.2,1);
        this.col_tex.setShininess(100);    
    }

    display(){

        //rooftop
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.roof_tex.apply();
        this.roof.display();
        this.scene.popMatrix();
        
        //walls
        this.house_map.apply();
        this.walls.display();
        
        //columns
        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.1);
        this.scene.translate(6,-0.5,6);
        this.col_tex.apply();
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