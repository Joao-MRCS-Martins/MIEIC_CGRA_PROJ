/**
 * MyScene
 * @constructor
 */
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        //this.prism = new MyPrism(this,8,1);
        this.skybox = new MyCubeMap(this,2);
        this.house = new MyHouse(this);
        this.tree = new MyTree(this,2,1,3,2,0,0);
        this.tree_group = new MyTreeGroupPatch(this,this.tree);
        this.tree_row = new MyTreeRowPatch(this,this.tree);
        this.cube_quad = new MyUnitCubeQuad(this);
        this.hill = new MyVoxelHill(this,this.cube_quad,5);
        //Objects connected to MyInterface
        this.displaySkyBox = false;
        this.prism = true;


    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        this.lights[0].update();
        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        //this.prism.display();
        if (this.displaySkyBox)
            this.skybox.display();

        //house display
        this.pushMatrix();
        this.translate(10,.5,0);
        this.scale(4,4,4);
        this.house.display();
        this.popMatrix();
        //trees display
        this.pushMatrix();
        this.translate (-10,0,-10);
        this.tree_group.display();
        this.translate(40,0,10);
        this.tree_row.display();
        this.translate(-5,0,20);
        this.tree_group.display();
        this.translate(-30,0,20);
        this.tree_row.display();
        this.popMatrix();
        //hills display
        this.pushMatrix();
        this.translate(-20,0,10);
        this.hill.updateComplexity(4);
        this.hill.display();
        this.hill.updateComplexity(6);
        this.translate(10,0,10);
        this.hill.display();
        this.hill.updateComplexity(3);
        this.translate(10,0,10);
        this.hill.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}