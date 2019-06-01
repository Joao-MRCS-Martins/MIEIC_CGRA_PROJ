class MyLightElement extends CGFobject{
    constructor(scene){
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.white = new CGFappearance(scene);
        this.white.setDiffuse(1,1,1,1);
        this.white.setSpecular(1,1,1,1);
        this.white.setShininess(10);
        /*
        this.texture1 = new CGFtexture(this.scene,"images/textures/bolt.jpg");
        this.white.setTexture(this.texture1);
        this.white.setTextureWrap('REPEAT', 'REPEAT');
*/
        
    }
    display(){
        this.white.apply();
        
        this.scene.pushMatrix();
            this.scene.scale(0.1,1,1);
            this.scene.translate(0.5,0.5,0);
            this.quad.display();
        this.scene.popMatrix();
    }
}