//Операторы (операции)

let a;
//Операция присвоения
//Оператор присваивания
//Операнд a, операнд 3
a = 3;

//Операция суммирования
//Оператор плюс
// Операнд 1 и операнд 2
console.log(5 + 3);
// -, *, /, **, %
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 ** 3);
console.log(5 % 3);

// alert('Привет');
// console.log(alert('hello'));
// let name = prompt('What is your name?');
// let ok = confirm('Are you ok?');


//+ - операция сложения строк(конкатенация)
let name = prompt('What is your name?');
alert('Hello ' + name);
//Явное и не явное преобразование данных(приведение типов)

// let age = 1 * prompt('How old are you?');

let age = Number(prompt('How old are you?'));


let furute = age + 25;
alert('Через 25 лет тебе будет: ' + furute);

//NaN - Not a Number

let str = 33 + '';
let str2 = String(33);
