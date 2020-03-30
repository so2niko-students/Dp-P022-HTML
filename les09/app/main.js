//Объявление переменных
var one;
let two;

//Операторы. Присваивание
one = 'Один'; //String - Строки. Строки оборачиваются в кавычки. '...'   "..."   `...` - template string

two = 2; // Number - число. 
two = 2.3;
two = 0;
two = -123.333321323123;
two = Infinity;
two = .5;
//BigInt

//Boolean  => true / false
let three = true;
let four;
four = false;


//null
//undefined

two = one;
one = false;

//5 примитивов - number, string, boolean, null, undefined
//1 сложный(ccылочный)  - object

let ob = { 
    name        : 'Просто объект', 
    surname     : 'Default', 
    dateOfBirth : null
};

let annaMaria = ob;
annaMaria.age = 55;

ob.name = 'HP';

annaMaria.name = 'Анна-Мария';

console.log(ob);
// console.log(annaMaria == ob);

//+2 примитива - symbol, bingInt

//Копирование по ссылке или по значению

let five = 5;
let six = five;
five = 22;

// console.log(six);

