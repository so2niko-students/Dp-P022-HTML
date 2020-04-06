let n = 3;//глобальная переменная
let o = 4;

console.log(year(2020));

//объявление функции
function userIn(){
    let n = Number(prompt('Enter a number'));//локальная переменная
    if(isNaN(n)){
        console.log('bad user input');
    }
}


//вызов функции
// userIn();

// function calc(){
//     let n = 33;
//     n++;
//     console.log(n);
//     o = n;
//     return 'Возвращаемое значение';
// }

// console.log(calc());
// console.log(n);
// console.log(o);

function sum(a, b){
    let c = a + b;
    return c;
}

console.log(sum(2, 3, 343, 2323, 2323, 44455, 666));

//function declaration
function year(a = 2002){
            // (a % 4 == 0) || (a % 400 == 0)  && (a % 100 != 0);
            // true     +      false         *       false
    return (a % 400 == 0) || (a % 4 == 0) && (a % 100 != 0);
    // console.log(a);
}

console.log(year(2000));
console.log(year(1900));
console.log(year());

//function expression
const yy = function(t){
    console.log(++t);
}

yy(100);


