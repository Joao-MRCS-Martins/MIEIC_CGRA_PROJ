/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = 

        //bird  color
        this.bird_color = new CGFappearance(this.scene);
        this.bird_color.setDiffuse(1,0.3,0.3,1);
        this.bird_color.setSpecular(0.6,0,0,1);
        this.bird_color.setShininess(100);
    }
    
    display() {
        this.bird_color.apply();
        this.scene.pushMatrix();
        var tmp_lvl = this.level;
        while(tmp_lvl > 0) {
            this.scene.translate(-tmp_lvl+1,0,-tmp_lvl+1);
            for(var i =0; i < 2*tmp_lvl-1;i++) {
                for(var j=0;j<2*tmp_lvl-1;j++) {
                    if(i == 0 || i == 2*tmp_lvl-2 || j ==0 || j == 2*tmp_lvl-2) {
                        this.cube.display();
                    }
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
