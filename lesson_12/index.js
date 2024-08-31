//--------------Function hoisting
//1-й пример - вызов функции add(Fuction declaration)
function add(a, b){
    return a + b;
}
//1-й пример - вызов функции add(Fuction declaration)
console.log(add(20, 30));

//2-й пример - вызов функции divide(Fuction expression)
console.log(divide(10, 5));

//Создаем функцию Function expression
const divide = function(x,y){
    return x / y;
}

//-----------Стрелочные функции
// let getNewNumber = num => num + 10;
let getNewNumber = (num, num2 = 20) => {
    let result = num + num2;
    return result;
};
console.log(getNewNumber(10));

//функция в качестве аргумента
let performOperation = (num1, num2, operation) => {
    let result = operation(num1, num2);
    return result;
};

let divideFunc = (a, b)=> a/b;

performOperation(2, 1, divideFunc);
console.log(performOperation(2, 1, divideFunc));
console.log(performOperation(4, 5, (x, y) => x * y));

//--------Область видимости
let age = 23;

if(age>18){
    let messageAccess = "Access";
    console.log(messageAccess);
    
}else{
    let messageFailure = "Failure";
    console.log(messageFailure);
    
}
console.log(messageFailure);

//пример создания переменных внутри функции
var message = "Hi";

const showMessage = () => {
    let message = "Hi, User";
    console.log(message);
};  

showMessage();
console.log(message);

//----------hoisting переменных
console.log(z);

let x = 23;
const y= 24;
var z = 25;

console.log(x, y, z);




