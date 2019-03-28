class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
        this.front = new MyQuad(scene);
        this.back = new MyQuad(scene);
        this.bottom = new MyQuad(scene);
        this.top = new MyQuad(scene);
        this.left = new MyQuad(scene);
        this.right = new MyQuad(scene);

        // this.initBuffers();
        this.sideTex = new CGFappearance(this.scene);
        this.sideTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideTex.setShininess(10.0);
        this.sideTex.loadTexture('images/mineSide.png');
        this.sideTex.setTextureWrap('REPEAT', 'REPEAT');

        this.topTex = new CGFappearance(this.scene);
        this.topTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.topTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.topTex.setShininess(10.0);
        this.topTex.loadTexture('images/mineTop.png');
        this.topTex.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomTex = new CGFappearance(this.scene);
        this.bottomTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomTex.setShininess(10.0);
        this.bottomTex.loadTexture('images/mineBottom.png');
        this.bottomTex.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {
        this.sideTex.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
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

        this.topTex.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.top.display();
        this.scene.popMatrix();
        
        this.bottomTex.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottom.display();
        this.scene.popMatrix();
        
        


    }





}