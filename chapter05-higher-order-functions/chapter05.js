/* Abstraction */

console.log("\nAbstraction\n")

/* Construir funções é uma boa forma de criarmos abstrações, assim, por exemplo, podemos passar
* uma função para outra função, aumentandoo nível de abstração do código. */

function repeat(times, action){
    for(let i = 0; i < times; i++){
        action(i)
    }
}

/* A função "console.log" está sendo passada como parâmetro e será executada três vezes. */
repeat(3, console.log)

/* Higher-Order Functions */

console.log("\nHigher-Order Functions\n")

/* Funções que recebem funções como argumento ou retornam outras funções são chamadas de
* "Higher-Order Functions". Elas nos permitem criarmos abstrações sobre ações, ao invés de
* ficarmos limitados apenas a criarmos abstrações sobre valores. */

function greaterThan(n){
    return m => m > n
}

/* As closures fazem com que a função "greaterThan10" lembre o valor de "10" que foi passado para ela. */
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
