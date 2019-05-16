class MyTerrain extends CGFobject {
    constructor(scene, scalefactor){
        super(scene);
        this.plane = new Plane(this.scene,1,0,1,0,1);

        this.terrainTex = new CGFtexture(this, "images/terrain.jpg");
        this.terrainMap = new CGFtexture(this, "images/heighmap.jpg");

    }
    display(){
    
        this.scene.pushMatrix();
        this.scene.scale(this.scalefactor,0, this.scalefactor);
        this.scene.popMatrix();
        this.plane.display();
    }
}