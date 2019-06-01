/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene) {
        super(scene);

        
         this.axiom = "X"; 
         this.ruleF = "FF"; 
    
         this.angle = 30.0* Math.PI / 180;
         this.iterations = 5;
         this.scaleFactor = 0.5;
 
         this.ruleII  ="F[-X][X]F[-X]+X";
         this.ruleIII ="F[-X][X]+X";
         this.ruleIV = "F[+X]-X";
         this.ruleV = "F[/X][X]F[\\\\X]+X";
         this.ruleVI = "F[\\X][X]/X";
         this.ruleVII = "F[/X]\\X";
         this.ruleVIII = "F[^X][X]F[&X]^X";
         this.ruleIX = "F[^X]&X";
         this.ruleX = "F[&X]^X";

         this.productions = 
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleII,this.ruleIII,this.ruleIV,this.ruleV,this.ruleVI,this.ruleVII,this.ruleVIII,this.ruleIX,this.ruleX],
                };
                this.scale = Math.pow(this.scaleFactor, this.iterations-1);
        this.iterate();
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)

        };
    }  
}