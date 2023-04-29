/* Event Listeners */

console.log("\nEvent Listeners\n")

/* Podemos adicionar event listeners em um determinado elemento, para que, se um determinado
* evento ocorrer, possamos executar uma determinada função. */

let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Você clicou no botão!")
})
