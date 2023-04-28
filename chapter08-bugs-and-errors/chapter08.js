/* Tests */

console.log("\nTests\n")

/* Abaixo, vamos criar uma simulação de testes para o método "toUpperCase()". */

function test(label, body){
    if(!body()){
        console.log(`Failed ${label}`)
    }

    test("convert latin text to uppercase", () => {
        return "hello".toUpperCase() == "HELLO"
    })
}

/* Try-catch() */

console.log("\nTry-catch\n")

/* O bloco try-catch capturará a exception, caso ela exista, e moverá para o bloco "catch()", que
* fará o tratamento da exception. */

try {
    throw new Error("Esse é um erro!")
}catch(e){
    console.error("Deu erro: ", e.message)
}
