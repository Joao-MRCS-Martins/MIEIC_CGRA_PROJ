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
        
        //display SkyBox checkbox
        this.gui.add(this.scene,'displaySkyBox').name('Toggle Skybox');
        //enable Textures checkbox
        this.gui.add(this.scene,'enableTex').name('Enable Textures');
        //this.gui.add(this.scene,'day').name('Toggle Day');
        //this.gui.add(this.scene,'debug_skybox').name('debug skybox');

        //enable PorchLight
        this.gui.add(this.scene,'porchLightOn').name('Turn Porch Light On');
        //Light mode (Day or Night) dropdown
        this.gui.add(this.scene, 'selectedMode', this.scene.lightModeID).name('Light Mode').onChange(this.scene.updateLights.bind(this.scene));
        
        return true;
    }
}