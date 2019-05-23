//move shaders here

class MyTerrain extends CGFobject {
    constructor(scene, scalefactor){
        super(scene);
        this.plane = new Plane(this.scene,32);
        this.terrain = new CGFappearance(this.scene);
		this.terrain.setAmbient(0.3, 0.3, 0.3, 1);
		this.terrain.setDiffuse(0.7, 0.7, 0.7, 1);
		this.terrain.setSpecular(0.0, 0.0, 0.0, 1);
		this.terrain.setShininess(120);

        this.terrainTex = new CGFtexture(this.scene, "images/terrain.jpg");
        this.terrainMap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
        //this.terrain.loadTexture("images/terrain.jpg");
        this.terrain.setTexture(this.terrainTex);
        this.terrain.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(){
        this.terrainMap.bind(1);
        this.altimetry.bind(2);
        this.terrain.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 10);
        this.plane.display();
        this.scene.popMatrix();
       // this.appearance.apply();
    }
}