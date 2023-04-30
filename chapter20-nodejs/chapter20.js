/* NodeJS */

console.log("\nNodeJS\n")

/* O NodeJS é um runtime que permite que o JavaScript seja executado fora do
* navegador. */

/* O "package.json" é um arquivo que lista a versão do programa atual, bem como as
* versões para as suas dependências. */

/* Podemos criar um servidor para receber requisições HTTP, por exemplo: */

const {createServer} = require("http");
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
    response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");
