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
        this.skybox = new MyCubeMap(this,300);
        this.house = new MyHouse(this);
        this.tree = new MyTree(this,2,1,3,2,0,0);
        this.tree_group = new MyTreeGroupPatch(this,this.tree);
        this.tree_row = new MyTreeRowPatch(this,this.tree);
        this.cube_quad = new MyUnitCubeQuad(this);
        this.hill = new MyVoxelHill(this,this.cube_quad,5);
        this.grass_coords = [   0,50,
                                50,50,
                                0,0,
                                50,0
        ];
        this.grass = new MyQuad(this,this.grass_coords);
        this.lake = new MyLake(this,2);
        this.circle = new MyCircle(this,10);
        this.porchLight = new MyPorchLight(this);

       //Objects connected to MyInterface
        this.displaySkyBox = true;
        this.enableTex = true;
        this.day = true;
        this.debug_skybox = false;
        this.lightMode = [ this.lights[0],this.lights[1]];
        this.selectedMode = 0;
        this.lightModeID = {'Day':0,'Night':1};
        this.porchLightOn = true;
        
        //grass texture
        this.grass_tex = new CGFappearance(this);
        this.grass_tex.loadTexture("./images/Textures/grass_texture.jpg");
        this.grass_tex.setAmbient(0.8,0.8,0.8,1);
        this.grass_tex.setDiffuse(0.8,0.8,0.8,1);
        this.grass_tex.setSpecular(0.1,0.1,0.1,1);
        this.grass_tex.setShininess(100);
        this.grass_tex.setTextureWrap('REPEAT','REPEAT');
        
    }
    initLights() {
        this.setGlobalAmbientLight(0.8, 0.8, 0.8, 1.0);

        
        this.lights[0].setPosition(2.0, 50.0, 2.0, 1.0);
        this.lights[0].setAmbient(0.2,0.2,0.2,1.0);
        this.lights[0].setDiffuse(1.0, 0.8, 0.8, 1.0);
        this.lights[0].setSpecular(1.0, 0.8, 0.8, 1.0);
        this.lights[0].setLinearAttenuation(0.001);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();
        
        this.lights[1].setPosition(2.0, 50.0, 2.0, 1.0);
        this.lights[1].setAmbient(0,0,0.4,1.0);
        this.lights[1].setDiffuse(0.9, 0.9, 1.0, 1.0);
        this.lights[1].setSpecular(0.9,0.9, 1, 1.0);
        this.lights[1].setLinearAttenuation(0.01);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(20, 0, 20));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    updateEnableTex() {
        this.enableTextures(this.enableTex);
    }     
    updateLights() {
        this.lights[0].update();
        this.lights[1].update();
        if(this.selectedMode == 0) {
            this.setGlobalAmbientLight(0.8, 0.8, 0.8, 1.0);
            this.lights[1].disable();
            this.lights[0].enable();
            this.day =true;
        }
        else {
            this.setGlobalAmbientLight(0.2, 0.2, 0.2, 1.0);
            this.lights[0].disable();
            this.lights[1].enable();
            this.day = false;
        }
        this.porchLight.switch(this.porchLightOn);
    }
    display() {

        this.updateEnableTex();
        this.skybox.toggleDay(this.day);
        this.updateLights();


        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        this.axis.display();
        
        //Apply default appearance
        this.setDefaultAppearance();
        
        // ---- BEGIN Primitive drawing section

        
        if (this.displaySkyBox)
        this.skybox.display();
        
        if(!this.debug_skybox){
       
        this.pushMatrix();
        this.rotate(-Math.PI/2,1,0,0);
        this.scale(500,500,0);
        this.grass_tex.apply();
        this.grass.display();
        this.popMatrix();
        
        
        //house display
        this.pushMatrix();
        this.translate(10,2,0);
        this.scale(4,4,4);
        this.house.display();
        this.porchLight.display();
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
        
        //lake display
        this.pushMatrix();
        this.translate(15,0.01,20);
        this.lake.display();
        this.popMatrix();       
        // ---- END Primitive drawing section
    }
}
}