class MyTerrain extends CGFobject {
    constructor(scene, scalefactor){
        super(scene);
        this.plane = new Plane(this.scene,32);
/*
        this.terrain = new CGFappearance(this);
		this.terrain.setAmbient(0.3, 0.3, 0.3, 1);
		this.terrain.setDiffuse(0.7, 0.7, 0.7, 1);
		this.terrain.setSpecular(0.0, 0.0, 0.0, 1);
		this.terrain.setShininess(120);

        this.terrainTex = new CGFtexture(this, "images/terrain.jpg");
        this.terrainMap = new CGFtexture(this, "images/heightmap.jpg");
        this.terrain.setTexture(this.terrainTex);
        */
        //this.appearance.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(){
    
        this.scene.pushMatrix();
        this.scene.scale(this.scalefactor,0, this.scalefactor);
        this.scene.popMatrix();
       // this.appearance.apply();
        this.plane.display();
    }
}