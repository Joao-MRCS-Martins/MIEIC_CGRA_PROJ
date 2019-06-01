class MyCubeMap extends CGFobject {
    constructor(scene, scalefactor) {
        super(scene);
        this.scene = scene;
        this.baseCube = new MyUnitCube(scene);
        this.scalefactor = scalefactor;
        
        this.dayTex = new CGFappearance(this.scene);
        this.dayTex.setAmbient(1,1,1,1);
        this.dayTex.setDiffuse(0, 0, 0, 0);
        this.dayTex.setSpecular(0, 0, 0, 0);
        this.dayTex.setShininess(100.0);
        this.dayTex.loadTexture('images/Daylight.png');
        this.dayTex.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        
    }

    initBuffers() {
        baseCube.initBuffers();
    }

    display() {
    this.dayTex.apply();

    this.scene.pushMatrix();
        this.scene.scale(this.scalefactor,this.scalefactor,this.scalefactor);
        //this.scene.scale(-1,-1,-1);
        this.baseCube.display();
    this.scene.popMatrix();
    }

    updateBuffers() {}


    disableNormalViz() {

    }
}