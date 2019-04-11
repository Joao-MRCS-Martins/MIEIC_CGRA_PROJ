/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;

        this.gui.add(this.scene,'displaySkyBox').name('Toggle Skybox');
        this.gui.add(this.scene,'enableTex').name('Enable Textures');
        this.gui.add(this.scene,'day').name('Toggle Day');
        this.gui.add(this.scene,'debug_skybox').name('debug skybox');

        return true;
    }
}