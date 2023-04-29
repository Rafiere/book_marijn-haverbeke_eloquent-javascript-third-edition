/* Asynchronous Programming */

console.log("\nAsynchronous Programming\n")

/* Em um modelo de programação síncrona, as coisas acontecem de forma singular. Quando
* chamamos uma função que executa uma ação demorada, ela retorna apenas quando a
* ação foi finalizada e conseguiu retornar o resultado. Isso acaba interrompendo o programa
* enquanto a ação está realizada. */

/* Em um modelo de programação síncrona, várias coisas acontecem ao mesmo tempo. Quando
* executamos uma ação, o programa continua a ser executado. Quando a ação é finalizada, o
* programa é informado e obtém acesso ao resultado. */

/* Em um ambiente assíncrono, se realizarmos duas requisições, a segunda requisição apenas
* começará a ser processada quando a primeira for finalizada. */

/* Para resolvermos esse problema em um ambiente síncrono, temos que começar a realizar o
* controle de threads, assim, faremos a intercalação da execução dos programas em
* múltiplos processadores. */

/* A maioria das plataformas no JavaScript preferem executar código de forma assíncrona do
* que lidar com threads. */

/* Callbacks */

console.log("\nCallbacks\n")

/* Uma aproximação para a programação assíncrona é fazer as funções que performam uma ação
* lenta receberem um argumento extra, que é uma função de callback. A ação é iniciada, e, quando
* ela é finalizada, a função de callback é chamada com o resultado. */

/* A função "setTimeout()", por exemplo, espera um segundo e então chama uma determinada
* função. */

setTimeout(() => console.log("Tick"), 500)

/* Promises */

console.log("\nPromises\n")

/* Uma promise é uma ação assíncrona que pode completar em algum ponto e produzir um
* valor. Ela também consegue notificar quem está interessado quando esse valor for disponível. */

/* A função "Promise.resolve()" envelopará um valor em uma promise, e, assim que ela for
* resolvida, ela será retornada. */

let fifteen = Promise.resolve(15)
fifteen.then(value => console.log("Got: " + value))

/* O método "then" define uma função callback que será chamada quando a promise for resolvida e
* retornará um determinado valor. */

/* É muito mais recomendado utilizarmos Promises do que utilizarmos callbacks. As promsies vão
* receber inputs e retornar um output, a única diferença é que o output não pode estar disponível
* ainda. */

/* Await e Async */

console.log("\nAwait e Async\n")

/* O JavaScript permite escrevermos código pseudo-síncrono para descrever a computação
* assíndrona. Uma função com o modificador "async" implica que ela vai retornar uma
* promise e que ela pode, no seu próprio corpo, esperar outras promises de uma forma que
* elas pareçam síncronas. */

/* Dentro de uma função assíncrona, nós podemos inserir a palavra-chave "await" para esperarmos
* uma promise resolver, e, apenas quando ela ser resolvida, a execução da função ser continuada. */
