/* The Document Object Model */

console.log("\nThe Document Object Model\n")

/* Quando abrimos uma página no navegador, o browser obtém o HTML da página e realiza o
* parse. O browser constrói uma estrutura de um documento e usa essa estrutura para
* desenhar a página na tela. */

/* A representação desse documento é uma estrutura de dados viva. Quando ela é modificada, a
* página é atualizada para refletir essas mudanças. */

/* O document.documentElement é a raiz do DOM. */

/* Finding Elements */

console.log("\nFinding Elements\n")

let link = document.body.getElementsByTagName("a")[0]

console.log(link.href)

/* No exemplo acima, estamos obtendo o link do primeiro "a" na página. */
