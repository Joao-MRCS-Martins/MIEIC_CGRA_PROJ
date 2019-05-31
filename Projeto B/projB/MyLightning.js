class MyLightning extends MyLSystem{
    constructor(scene){
        super(scene);
        this.initialTime= 0;
        this.depth = -1;

        this.iterations = 3;
        this.angle = 25.0 * Math.PI / 180.0;
        this.axiom = "X";
        this.scaleFactor = 0.5;
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.ruleX2 = "FX+[-X]F[X][-X]F";

        this.productions = {
            "F": [ this.ruleF ],
            "X": [ this.ruleX,this.ruleX2],
        };
        this.scale = Math.pow(this.scaleFactor, this.iterations-1);

    }
        

    initGrammar(){
        this.grammar = {
            "X": new MyLightElement(this.scene),
            "F": new MyLightElement(this.scene)
        }

    }


    generate(_axiom, _productions, _angle, _iterations, _scale){
        // copia o axioma da cena para iniciar a sequência de desenvolvimento
        this.axiom = _axiom;

        // cria as producoes
        this.productions=_productions;

        // angulo de rotacao
        this.angle = _angle * Math.PI / 180.0;

        // numero de iteracoes
        this.iterations = _iterations;

        // escalamento dos elementos dependente do numero de iteracoes
        this.scale = Math.pow(_scale, this.iterations-1);

        // desenvolve a sequencia de desenvolvimento do Sistema L
        //this.iterate()
     }

    startAnimation(t){
        
        if(this.axiom.length <=1){
        this.initialTime = t;
        this.iterate();
        
        this.depth = 0;
        }
    }

    update(t){
        if(this.depth > this.axiom.length){
            this.depth = -1;
            this.axiom = "X";
        }
        
        if(this.depth >= 0)
            this.depth = (t-this.initialTime) *(this.axiom.length / 1000);

        
        

    }
    


    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;
        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;
                case "\\":
                    // rodar no sentido positivo eixo dos XX
                    this.scene.rotate(this.angle,1,0,0);
                    break;
                case "/":
                    //rodar no sentido negativo no eixo dos XX
                    this.scene.rotate(-this.angle,1,0,0);
                    break;
                case "^":
                    //rodar no sentido positivo no eixo dos YY
                    this.scene.rotate(this.angle,0,1,0);
                    break;
                case "&":
                    //rodar no sentido negativo no eixo dos YY
                    this.scene.rotate(-this.angle,0,1,0);
                    break;
                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {   
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();



    }

}