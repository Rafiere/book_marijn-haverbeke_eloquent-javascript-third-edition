/* Criando uma função */

console.log("\nCriando uma função\n")

const calcSquareArea = function(x){
    return x * x;
}

console.log(calcSquareArea(2));
console.log(calcSquareArea(12));

/* Escopos */

console.log("\nEscopos\n")

/* Quando uma variável é criada dentro de uma função, o escopo dessa variável é o bloco em
* que a função foi declarada. */

/* Arrow Functions */

console.log("\nArrow Functions\n")

const calcRectArea = (x, y) => {
    return x * y;
}

/* A função acima é uma arrow function. Ela é praticamente a mesma coisa que uma função
* comum, exceto por um pequeno detalhe que será discutido no capítulo 06. */

console.log(calcRectArea(2, 4))

/* Closures */

console.log("\nClosures\n")

function multiplier(factor){
    return number => number * factor
}

let twice = multiplier(2);
console.log(twice(5)) //10

/* No exemplo acima, a função "multiplier(2)", que foi atribuída à variável "twice", ainda
* lembra que o valor que foi passado como parâmetro para ela, que é o "factor", é 2, dessa
* forma, quando chamamos essa função novamente e passamos o valor "5", é retornado o valor
* "10". A primeira função lembrou do ambiente em que ela estava. */

/* Recursividade */

console.log("\nRecursividade\n")

function power(base, exponent){
    if(exponent == 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3))

/* No exemplo acima, a função está chamando a si mesma. Esse é um exemplo claro de
* recursividade. No JS, porém, essa função seria executada três vezes mais devagar do que
* uma implementação comum, utilizando loops. */

/* Funções e Side Effects */

console.log("\nFunções e Side Effects\n")

/* Uma função que exibe uma linha possui um side effect, que é printar uma linha. Uma função que
* apenas retorna um valor, pelo contrário, não possui side effects. */

/* Uma função pura é um tipo de função que não tem side effects e que não confia nos efeitos de
* outro código. Ela, por exemplo, não lê variáveis globais que possam ser alteradas. Uma das
* principais características de uma função pura é que, sempre que ela é chamada com os mesmos
* argumentos, ela produz o mesmo valor, e não faz nada de diferente. Uma chamada para esse tipo
* de função pode ser substituída pelo valor que ela retorna sem mudar o significado do código. Caso
* tenhamos dúvidas se uma função pura está funcionando corretamente, podemos apenas chamá-la e verificar se
* ela está funcionando no contexto atual. Se ela funcionar no contexto atual, ela funcionará em qualquer
* contexto. As funções que não são puras exigem mais cenários de teste. */

/* Não existe forma de escrever um "console.log()" de uma forma que não seja pura, por exemplo. */
