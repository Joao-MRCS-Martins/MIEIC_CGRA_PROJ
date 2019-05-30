class MyLightning extends MyLSystem{
    constructor(scene){
        super(scene);
    }

    initGrammar(){
        this.grammar = {
            "X": new MyQuad(this.scene),
            "F": new MyQuad(this.scene)
        }

    }

    


}