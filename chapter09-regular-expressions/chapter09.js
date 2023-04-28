/* RegEx */

console.log("\nRegEx\n")

/* Uma expressão regular é um tipo de objeto. Ela pode ser construída com o construtor de
* RegEx ou escrita com um valor literal, dentro de "/" "/". */

let re1 = new RegExp("abc")
let re2 = /abc/

/* Podemos testar uma RegEx, por exemplo: */

console.log(/abc/.test("abcde")) //true
console.log(/abc/.test("abxde")) //false

/* Podemos fazer um match em um conjunto de caracteres: */

console.log(/[0123456789]/.test("in 1992")) //true
console.log(/[0-9]/.test("in 1992")) //true

/* Podemos verificar se um padrão é seguido através do seguinte comando: */

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-01-1990 00:00")); //true

console.log(dateTime.test("01-jan-1990 00:00")); //false

/* Podemos usar o "^" para definirmos que queremos qualquer conjunto de
* caracteres, exceto os que estão dentro desse conjunto. */

let notBinaryNumbers = /[^01]/;
console.log(notBinaryNumbers.test("100001110101110")); //false

console.log(notBinaryNumbers.test("111202012120")) //true

/* JavaScript Date Class */

console.log("\nJavaScript Date Class\n")

console.log(new Date()); //Temos a data atual.

/* Na classe "Date", os meses começam do "0", então, devemos tomar cuidado. */

console.log(new Date(1900, 11, 9, 12, 59, 59, 9999))

/* Timestamps (UTC Format) */

console.log(new Date().getTime()) //Obtendo o timestamp.
