/* Prototype */

console.log("\nPrototype\n")

/* O "Object.prototype" é a entidade por trás de todos os objetos do JS. */

console.log(Object.getPrototypeOf({}) == Object.prototype)

/* Ele provê alguns poucos métodos, como o "toString()", por exemplo. */

/* As funções derivam do "Function.prototype", enquanto que os arrays derivam do "Array.prototype()". */

/* Até 2015, as classes no JavaScript eram funcções construtoras com a propriedade "prototype". */

/* Após 2015, o JavaScript adicionou a palavra-chave "class". */

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'.`)
    }
}

let killerRabbit = new Rabbit("Killer");
let blackRabbit = new Rabbit("Black");

killerRabbit.speak("I'm testing!")
console.log(blackRabbit.type)

/* Maps */
console.log("\nMaps\n")

/* Os mapas são uma estrutura que associam um valor com uma determinada chave. */

let ages = new Map()
ages.set("Julia", 100)
ages.set("Liang", 99)

console.log(ages.get("Julia"))
console.log(ages.get("Liang"))
