// var y = 0; Comentar somente 1 linha.
/*var y = 0;
var x = 1; Comentar mais linhas. */

//ax + b = 0; --> a e b são coeficientes, que são constantes, x é a variável.
//f(1) = a.1 + b; --> procurar f de 1, a e b nunca muda de valor, somente o 1.

//2x+3; --> função do 1º grau, x pode ser alterado, 2 e 3 são coeficientes, são valores constantes, não mudam durante toda a execução.

//var preco = 2;
var desconto = 0.2;
const PRECO = 2; //letra maiúscula para diferenciar constantes. 
var total = PRECO - desconto;
//Constantes = não muda de valor. Variável = muda de valor.
//PRECO = PRECO - desconto;

//Funções:

//Declarar função:
function soma (a, b) { //() = declarar parâmetros.
    //console.log(a + b); ver o valor.
    return a + b; //8
}
//Chamar função:
soma(3, 5); //a = 3 e b = 5.