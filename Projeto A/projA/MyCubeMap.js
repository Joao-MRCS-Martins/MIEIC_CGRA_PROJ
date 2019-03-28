class MyCubeMap extends CGFobject {
    constructor(scene, scalefactor) {
        super(scene);
        this.scene = scene;
        this.baseCube = new MyUnitCube(scene);
        this.scalefactor = scalefactor;

        this.topTex = new CGFappearance(this.scene);
        this.topTex.setAmbient(1,1,1,1);
        this.topTex.setDiffuse(0, 0, 0, 0);
        this.topTex.setSpecular(0, 0, 0, 0);
        this.topTex.setShininess(10.0);
        this.topTex.loadTexture('images/teste.jpg');
        this.topTex.setTextureWrap('REPEAT', 'REPEAT');

    }

    initBuffers() {

    }

    display() {
    this.topTex.apply();
    this.scene.pushMatrix();
    this.scene.scale(this.scalefactor,this.scalefactor,this.scalefactor);
    this.scene.scale(-1,-1,-1);
    this.baseCube.display();
    

    this.scene.popMatrix();

    }

    updateBuffers() {}


    disableNormalViz() {

    }
}