class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.baseCube = new MyUnitCube(scene);

    }

    initBuffers() {

    }

    display() {
    this.scene.pushMatrix();
    this.scene.scale(20,20,20);
    this.baseCube.display();
    

    this.scene.popMatrix();

    }

    updateBuffers() {}


    disableNormalViz() {

    }
}