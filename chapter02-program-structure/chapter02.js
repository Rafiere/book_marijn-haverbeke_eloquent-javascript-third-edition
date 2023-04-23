/* Expressions and Statements */

console.log("\nExpressions and Statements\n")

/* Um fragmento de código que produz um valor é uma expressão, como "0" ou "teste". */

0;
"teste";

/* Um "statement" é uma expressão com um ponto e vírgula após ela. */
console.log("Teste!");

/* Binding */

console.log("\nBinding\n")

const TEN = 10;

console.log(TEN * TEN)

const ONE = 1, TWO = 2;

console.log(ONE + TWO)

/* IF */

console.log("\nIF\n")

let num1 = 5;
let num2 = 6

if(num1 > num2){
    console.log("O número 1 é maior do que o número 2.")
} else {
    console.log("O número 2 é maior do que o número 1.")
}

/* Loops */

console.log("\nLoops\n")

console.log("Tabuada do 10: \n")
for(let i = 0; i <= 10 ; i++){
    console.log(`10 x ${i} = ${10 * i}`)
}
