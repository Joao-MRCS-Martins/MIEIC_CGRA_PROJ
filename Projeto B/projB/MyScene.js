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
        this.setUpdatePeriod(1000/FR);

        this.scaleFactor = 1;
        this.speedFactor = 1;
        
        this.terrainShader = new CGFshader(this.gl,"shaders/terrain.vert","shaders/terrain.frag");
        this.terrainShader.setUniformsValues({uSampler2: 1, uSampler3:2});
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.bird = new MyBird(this);
        this.plane = new MyTerrain(this,60);
        
        this.bird_speed =0;
        this.bird_angle=0;
        //Objects connected to MyInterface
    
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
    checkKeys()  {
        var text="Keys pressed: ";
        var keysPressed=false;
        
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" Accelerate ";
            keysPressed=true;
            this.bird.accelerate(this.speedFactor);
        }
        
        if (this.gui.isKeyPressed("KeyS")) {
            text+="  Break ";
            keysPressed=true;
            this.bird.accelerate(-this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyA")) {
            text+= " Turn_Left ";
            keysPressed = true;
            this.bird.turn(Math.PI/8*this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyD")) {
            text+= " Turn_Right ";
            keysPressed = true;
            this.bird.turn(-Math.PI/8*this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyR")) {
            text+= " Reset ";
            this.scaleFactor = 1;
            this.speedFactor = 1;
            keysPressed = true;
            this.bird.reset();
        }
        
        if (keysPressed)
            console.log(text);
    }
    update(t){

        this.checkKeys();
        this.bird.update(t,this.speedFactor);
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
        //this.setActiveShader(this.terrainShader);
        //this.plane.terrainMap.bind(1);
        //this.plane.display();
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.bird.display();
        this.popMatrix();
       // this.popMatrix();
        this.setActiveShader(this.defaultShader);
        this.pushMatrix();
        //this.bird.display();
        this.popMatrix();
        // ---- END Primitive drawing section




    }
}