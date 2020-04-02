const a = 22;
const b = '1';
console.log('==', a == b);
console.log('="="=', a === b);
console.log('>', a > b);//строгое равенство
console.log('<', a < b);
console.log('>=', a >= b);//нестрогое равенство
console.log('<=', a <= b);
console.log('!=', a != b);
console.log('!', !a);

if(a === b){
    console.log('a == b');
    console.log('a == b');
    console.log('a == b');
}else{
    console.log('just text');
}

//тернарный оператор сравнения
if(a > b){console.log('a > b');}else{console.log('a no > b');};
condition ? if_true : if_else;

//Оператор множественного выбора
switch(a){
    case 0:{
        console.log('a == 0');
        break;
    }
    case 1:{
        console.log('a == 1');
        break;
    }
    case 2:{
        console.log('a == 2');
        break;
    }
    default:{
        console.log('a is very strange variable');
    }
}