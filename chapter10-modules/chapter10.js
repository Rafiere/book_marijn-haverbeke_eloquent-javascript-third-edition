/* Transformar uma string em um código */

/* Podemos fazer isso através do operador "eval", apesar de não ser algo
* recomendado. */

const x = 1;
function evalAndReturnX(code){
    eval(code)
    return x;
}

console.log(evalAndReturnX("var x = 2")) //2

console.log(x) //1

/* Também podemos fazer isso utilizando funções. Dessa forma, pelo menos, o código ficará
* dentro do seu escopo. O escopo não será vazado. */

let plusOne = Function("n", "return n + 1;")

console.log(plusOne(4));


