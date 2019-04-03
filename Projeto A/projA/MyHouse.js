class MyHouse extends CGFobject{
    constructor(scene){
        super(scene);
        this.roof = new MyPyramid(scene,4,1);
        this.walls = new MyUnitCubeQuad(scene);
        this.column = new MyPrism(scene,8,1);

        //rooftop texture
        this.roof_tex = new CGFappearance(this.scene);
        this.roof_tex.loadTexture("./images/Textures/rooftop_texture.jpg");
        this.roof_tex.setDiffuse(0.8,0.8,0.8,1);
        this.roof_tex.setSpecular(0.2,0.2,0.2,1);
        this.roof_tex.setShininess(100);

        //column texture
        this.col_tex = new CGFappearance(this.scene);
        this.col_tex.loadTexture("./images/Textures/column_texture.jpg");
        this.col_tex.setDiffuse(0.8,0.8,0.8,1);
        this.col_tex.setSpecular(0.2,0.2,0.2,1);
        this.col_tex.setShininess(100);
        
        /*
        //stone wall texture
        this.wall_tex = new CGFappearance(this.scene);
        this.wall_tex.loadTexture("./images/Textures/stonewall_texture.jpg");
        this.wall_tex.setDiffuse(0.8,0.8,0.8,1);
        this.wall_tex.setSpecular(0.2,0.2,0.2,1);
        this.wall_tex.setShininess(100);

        //front door texture
        this.door_tex = new CGFappearance(this.scene);
        this.door_tex.loadTexture("./images/Textures/stonedoor_texture.jpg");
        this.door_tex.setDiffuse(0.8,0.8,0.8,1);
        this.door_tex.setSpecular(0.2,0.2,0.2,1);
        this.door_tex.setShininess(100);

         //window texture
         this.window_tex = new CGFappearance(this.scene);
         this.window_tex.loadTexture("./images/Textures/stonewindow_texture.jpg");
         this.window_tex.setDiffuse(0.8,0.8,0.8,1);
         this.window_tex.setSpecular(0.2,0.2,0.2,1);
         this.window_tex.setShininess(100);
         */

    
    }

    display(){

        this.scene.pushMatrix();

        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.roof_tex.apply();
        this.roof.display();
        this.scene.popMatrix();
        
        this.walls.display();
        
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