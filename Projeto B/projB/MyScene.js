/**
 * MyScene
 * @constructor
 */

const FR = 60;
const nBranches = 12;
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();


        //Background color
        this.gl.clearColor(0.5, 0.5, 0.5, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(1000 / FR);
        
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.skybox = new MyCubeMap(this,300);
        this.bird = new MyBird(this,0,0);
        this.terrain = new MyTerrain(this, 60);
        this.forest = new MyForest(this);
        this.lSystem = new MyLightning(this);
        
        //scattered branches array with its positions (x,angle,z)
        this.branches = [];
        for(var i = 0; i < nBranches ; i++) {
            this.branches.push(new MyTreeBranch(this, Math.random() * 15 - 8, Math.random() * Math.PI, Math.random() * 15 - 8, false));
        }
        

        this.nest = new MyNest(this, 0, 0);                  

        this.house = new MyHouse(this);

        //Objects connected to MyInterface
        this.scaleFactor = 1;
        this.speedFactor = 1;
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys(t) {
        var keysPressed = false;

        if (this.gui.isKeyPressed("KeyW")) {
            keysPressed = true;
            this.bird.accelerate(this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            keysPressed = true;
            this.bird.accelerate(-this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            keysPressed = true;
            this.bird.turn(Math.PI / 8 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            keysPressed = true;
            this.bird.turn(-Math.PI / 8 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.scaleFactor = 1;
            this.speedFactor = 1;
            keysPressed = true;
            this.bird.reset();
        }

        if (this.gui.isKeyPressed("KeyP")) {
            keysPressed = true;
            this.bird.dropping = true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            keysPressed = true;
            this.lSystem.startAnimation(t);
        }

    }
    update(t) {

        this.checkKeys(t);
        this.updateBirdFlight(t);
        this.lSystem.update(t);
    }

    updateBirdFlight(t) {
        if (this.bird.pos[1] <= 0) {
            if (this.bird.branch) {
                this.bird.dropBranch(this.nest);
            } else
            this.bird.pickBranch(this.branches);
        } else if (this.bird.pos[1] >= 3) {
            this.bird.lifting = false;
        }
        this.bird.updateScaleF(this.scaleFactor);
        this.bird.update(t, this.speedFactor);
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

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
       
        this.skybox.display();
        
        this.pushMatrix();
            this.translate(0,-4,0);
            this.terrain.display();
        this.popMatrix();

        this.pushMatrix();
            this.translate(-8, 0, -2.4);
            this.rotate(Math.PI / 2, 0, 1, 0);
            this.scale(3, 3, 3);
            this.translate(1.5, 0.5, -0.5);
            this.rotate(-Math.PI/4,0,1,0);
            this.house.display();
        this.popMatrix();

        this.bird.display();
        
        this.nest.display();
        
        this.forest.display();
        
        for(var i =0; i < this.branches.length; i++) {
            this.branches[i].display();
        }
        
        this.pushMatrix();
            this.translate(0, 25, -15);
            this.rotate(Math.PI, 1, 0, 0);
            this.rotate(Math.PI,0,1,0);
            this.scale(5,5,5);
            this.lSystem.display();
        this.popMatrix();
        
        this.setActiveShader(this.defaultShader);

        // ---- END Primitive drawing section
    }
}