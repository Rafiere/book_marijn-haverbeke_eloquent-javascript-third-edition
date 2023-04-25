/* Arrays */

console.log("\nArrays\n")

let listOfNumbers = [2, 3, 5, 7, 11]

console.log(listOfNumbers[2]) //5

/* Podemos acessar propriedades pelo ".nomeDaPropriedade" ou pelo "["nomeDaPropriedade"]" */

console.log(listOfNumbers.length) //5
console.log(listOfNumbers["length"]) //5

/* Objetos */

console.log("\nObjects\n")

let anObject = {left: 1, right: 2}

console.log(anObject.left);
delete anObject.left;
console.log(anObject.left); //undefined

/* O método "Object.keys()" vai retornar um array com as propriedades de um determinado objeto. */

console.log(Object.keys({x: 0, y: 0, z: 2})) //["x", "y", "z"]

/* O método "Object.keys()" copia todas as propriedades de um objeto para outro. */

let objectA = {a: 1, b: 2}
Object.assign(objectA, {b: 3, c: 4})
console.log(objectA) //{a: 1, b: 3, c: 4}

/* Com um objeto, há diferenças entre ter duas referências para o mesmo objeto e ter dois objetos
* que contém as mesmas propriedades. */

let object1 = {value: 10}
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2) //Sim, porque estão comparando a mesma referência na memória.
console.log(object1 == object3) //Não, porque eles estão em referências de memória diferentes.

/* Loops em Arrays */

console.log("\nLoops em Arrays\n")

for(let number of listOfNumbers){
    console.log(number)
}

/* Destructuring */

console.log("\nDestructuring\n")

let {name} = {name: "Faraji", age: 100}

console.log(name)

/* JSON */

console.log("\nJSON\n")

/* A função "JSON.stringfy(objeto)" converte um objeto para o formato JSON. A função
* "JSON.parse(string)" converte uma string em JSON para um objeto. */
