class MyLightning extends MyLSystem{
    constructor(scene){
        super(scene);
        this.initialTime= 0;
        this.time;
        this.depth;



    }

    initGrammar(){
        this.grammar = {
            "X": new MyLightElement(this.scene),
            "F": new MyLightElement(this.scene)
        }

    }

    startAnimation(t){
        this.depth = 0;
        this.initialTime = t;
    }

    update(t){

    }
    


    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){

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