class MyLightning extends MyLSystem{
    constructor(scene){
        super(scene);
    }

    initGrammar(){
        this.grammar = {
            "X": new MyQuad(),
            "F": new MyQuad()
        }

    }


}