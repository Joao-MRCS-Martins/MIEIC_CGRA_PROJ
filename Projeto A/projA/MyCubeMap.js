class MyCubeMap extends CGFobject {
    constructor(scene, scalefactor) {
        super(scene);
        this.scene = scene;
        this.baseCube = new MyUnitCube(scene);
        this.scalefactor = scalefactor;
        this.dayToggle = true;
        
        this.dayTex = new CGFappearance(this.scene);
        this.dayTex.setAmbient(1,1,1,1);
        this.dayTex.setDiffuse(0, 0, 0, 0);
        this.dayTex.setSpecular(0, 0, 0, 0);
        this.dayTex.setShininess(10.0);
        this.dayTex.loadTexture('images/Textures/Daylight.png');
        this.dayTex.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        
        this.nightTex = new CGFappearance(this.scene);
        this.nightTex.setAmbient(1,1,1,1);
        this.nightTex.setDiffuse(0, 0, 0, 0);
        this.nightTex.setSpecular(0, 0, 0, 0);
        this.nightTex.setShininess(10.0);
        this.nightTex.loadTexture('images/teste.jpg');
        this.nightTex.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        

    }

    initBuffers() {
        baseCube.initBuffers();
    }

    display() {
        if(this.dayToggle){
    this.dayTex.apply();
    }
    else{
        this.nightTex.apply();
    }
    this.scene.pushMatrix();
    this.scene.scale(this.scalefactor,this.scalefactor,this.scalefactor);
    //this.scene.scale(-1,-1,-1);
    this.baseCube.display();
    

    this.scene.popMatrix();

    }

    toggleDay(day){
        this.dayToggle= day;
    }

    updateBuffers() {}


    disableNormalViz() {

    }
}