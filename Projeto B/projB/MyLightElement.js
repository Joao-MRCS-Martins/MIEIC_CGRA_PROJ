class MyLightElement extends CGFobject{
    constructor(scene){
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.white = new CGFappearance(scene);
        this.white.setDiffuse(1,1,1,1);
        this.white.setSpecular(0,0,0,1);
        this.white.setShininess(120);
    }




    display(){

        this.scene.pushMatrix();
        this.white.apply();
        this.scene.scale(0.1,1,1);
        this.scene.translate(0.5,0.5,0);
        this.quad.display();
        this.scene.popMatrix();

    }
}