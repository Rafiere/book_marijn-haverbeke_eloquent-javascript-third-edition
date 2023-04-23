/* Inserindo caracteres especiais */

console.log("\nInserindo caracteres especiais\n")

console.log("Estou escrevendo com aspas duplas (\"\") dentro de uma string.")

/* Concatenando strings */

console.log("\nConcatenando strings\n")

console.log("Estou con" + "ca" + "te" + "nan" + "do" + " strings!")

/* Template Strings */

console.log("\nTemplate Strings\n")

console.log(`O resultado de 50/2 é ${50 / 2}.`)

/* Operador "typeof" */

console.log("\nOperador 'typeof'\n")

console.log("O valor '2' é do tipo " + typeof 2)
console.log("O valor 'x' é do tipo " + typeof "x")

/* Operador ternário */

console.log("\nOperador ternário\n")

console.log(`O valor 2 é maior do que o valor 3? ${2 > 3 ? "Sim, é maior" : "Não, não é maior"}.`)

/* Curto-circuito dos operadores lógicos */

console.log("\nCurto-circuito dos operadores lógicos\n")

/* Os operadores "||" vão converter o valor que está do lado esquerdo para um booleano, e, assim, decidir
* o que fazer. */

/* O operador "||" vai retornar o valor da esquerda se ele puder ser convertido para verdadeiro. Se não, retornará o
* valor da direita. Podemos usar isso como um valor "fallback", dessa forma, se um determinado valor
* for nulo, por exemplo, o valor à direita será utilizado. */

console.log(null || "user") //user

console.log("Agnes" || "user") //Agnes

/* O operador "&&", pelo contrário, se o valor que estiver à esquerda for convertido para "false", ele
* retornará esse valor, senão, retornará o valor da direita. */

console.log(null && "Olá") //null
console.log("Teste" && "Oi") //"Oi"
