class MyUnitCubeQuad extends CGFobject {
    constructor(scene,coords) {
        super(scene);
        this.scene = scene;
        this.left = new MyQuad(scene);
        this.top = new MyQuad(scene);
        this.front = new MyQuad(scene);
        this.bottom = new MyQuad(scene);
        this.right = new MyQuad(scene);
        this.back = new MyQuad(scene);
        
        if(coords != undefined) {
            this.updateTexCoords(coords);
        }
    }

    display() {
        this.scene.pushMatrix();
            this.scene.translate(0,0,0.5);
            this.front.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0,0,-0.5);
            this.scene.rotate(Math.PI,0,1,0);
            this.back.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(-0.5,0,0);
            this.scene.rotate(-Math.PI/2,0,1,0);
            this.left.display();
        this.scene.popMatrix();       


        this.scene.pushMatrix();
            this.scene.translate(0.5,0,0);
            this.scene.rotate(Math.PI/2,0,1,0);
            this.right.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(0,0.5,0);
            this.scene.rotate(-Math.PI/2,1,0,0);
            this.top.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(0,-0.5,0);
            this.scene.rotate(Math.PI/2,1,0,0);
            this.bottom.display();
        this.scene.popMatrix();
    }

    updateTexCoords(coords) {
		this.left.updateTexCoords(coords.slice(0,8));
        this.top.updateTexCoords(coords.slice(8,16));
        this.front.updateTexCoords(coords.slice(16, 24));
        this.bottom.updateTexCoords(coords.slice(24,32));
        this.right.updateTexCoords(coords.slice(32,40));
        this.back.updateTexCoords(coords.slice(40,48));
	}
}