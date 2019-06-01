/**
 * MyScene
 * @constructor
 */

const FR = 60;
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
        this.lSystem = new MyLightning(this);
        this.forest = new MyForest(this);

        


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.bird = new MyBird(this,3,3);
        this.terrain = new MyTerrain(this, 60);

        this.branches_pos = [Math.random() * 20 - 8, Math.random() * Math.PI, Math.random() * 20 - 8, //x, rotation on y, z
            Math.random() * 20 - 8, Math.random() * Math.PI, Math.random() * 20 - 8,
            Math.random() * 20 - 8, Math.random() * Math.PI, Math.random() * 20 - 8,
            Math.random() * 20 - 8, Math.random() * Math.PI, Math.random() * 20 - 8
        ];

        this.branches = [new MyTreeBranch(this, this.branches_pos[0], this.branches_pos[1], this.branches_pos[2], false),
            new MyTreeBranch(this, this.branches_pos[3], this.branches_pos[4], this.branches_pos[5], false),
            new MyTreeBranch(this, this.branches_pos[6], this.branches_pos[7], this.branches_pos[8], false),
            new MyTreeBranch(this, this.branches_pos[9], this.branches_pos[10], this.branches_pos[11], false)
        ];

        this.nest = new MyNest(this, 0, 5);
        //this.quad = new MyQuad(this);                  

        this.house = new MyHouse(this);

        this.unitCube = new MyUnitCube(this);

        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.bird_speed = 0;
        this.bird_angle = 0;
        //Objects connected to MyInterface


        //to delete
        this.test = new MyCylinder(this,10);
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
        var text = "Keys pressed: ";
        var keysPressed = false;

        if (this.gui.isKeyPressed("KeyW")) {
            text += " Accelerate ";
            keysPressed = true;
            this.bird.accelerate(this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            text += "  Break ";
            keysPressed = true;
            this.bird.accelerate(-this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            text += " Turn_Left ";
            keysPressed = true;
            this.bird.turn(Math.PI / 8 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            text += " Turn_Right ";
            keysPressed = true;
            this.bird.turn(-Math.PI / 8 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            text += " Reset ";
            this.scaleFactor = 1;
            this.speedFactor = 1;
            keysPressed = true;
            this.bird.reset();
        }

        if (this.gui.isKeyPressed("KeyP")) {
            text += " Pick-up ";
            keysPressed = true;
            this.bird.dropping = true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " Lightning ";
            keysPressed = true;
            this.lSystem.startAnimation(t);
        }

        if (keysPressed)
            console.log(text);
    }
    update(t) {

        this.checkKeys(t);
        this.updateBirdFlight(t);


        this.lSystem.update(t);
    }

    updateBirdFlight(t) {
        this.bird.updateScaleF(this.scaleFactor);
        this.bird.update(t, this.speedFactor);
        if (this.bird.pos[1] <= 0) {
            if (this.bird.branch) {
                this.bird.dropBranch(this.nest);
            } else
                this.bird.pickBranch(this.branches);
        } else if (this.bird.pos[1] >= 2.5) {
            this.bird.lifting = false;
        }
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
       

        this.terrain.display();



        this.pushMatrix();
            this.translate(-8, 0, -2.4);
            this.rotate(Math.PI / 2, 0, 1, 0);
            this.scale(3, 3, 3);
            this.translate(0, 1.8, 0);
            this.house.display();
        this.popMatrix();

        this.pushMatrix();
            this.translate(0,4,0);
            this.bird.display();
        this.popMatrix();

        this.pushMatrix();
            this.translate(0, 4, 0);
            this.nest.display();
        this.popMatrix();

        this.pushMatrix();
          //  this.translate(0,4,0);
          //  this.scale(2,2,2);
            this.forest.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(0,4,0);
        for(var i =0; i < this.branches.length; i++) {
            this.pushMatrix();
            this.branches[i].display();
            this.popMatrix();
        }
        this.popMatrix();
        
        this.pushMatrix();
            this.translate(0, 30, -30);
            this.rotate(Math.PI, 1, 0, 0);
            this.rotate(Math.PI,0,1,0);
            this.scale(5,5,5);
            this.lSystem.display();
        this.popMatrix();
        
        



        this.setActiveShader(this.defaultShader);

        // ---- END Primitive drawing section




    }
}