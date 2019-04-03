/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, cube, level) {
        super(scene);
        this.cube = cube;
        this.level = level;

        //rock material
        this.rockAppearance = new CGFappearance(this.scene);
        this.rockAppearance.loadTexture("./images/Textures/rock_texture.jpg");
        this.rockAppearance.setDiffuse(0.8,0.8,0.8,1);
        this.rockAppearance.setSpecular(0.2,0.2,0.2,1);
        this.rockAppearance.setShininess(100);
    }
    
    display() {
        this.rockAppearance.apply();
        this.scene.pushMatrix();
        var tmp_lvl = this.level;
        while(tmp_lvl > 0) {
            this.scene.translate(-tmp_lvl+1,0,-tmp_lvl+1);
            for(var i =0; i < 2*tmp_lvl-1;i++) {
                for(var j=0;j<2*tmp_lvl-1;j++) {
                    this.cube.display();
                    this.scene.translate(1,0,0);
                }
                this.scene.translate(-(2*tmp_lvl-1),0,1);
            }
            this.scene.translate(tmp_lvl-1,1,-tmp_lvl);
            tmp_lvl--;
        }
        
        this.scene.popMatrix();
    }

    updateComplexity(newLevel) {
        this.level = newLevel;
    }
}
