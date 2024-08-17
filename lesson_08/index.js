//вывод в консоль
console.log("Hello JS");

//создание переменных
let dog = "Sharik";
dog = "Tuzik";
console.log(dog);

const cat = "Barsik";
console.log(cat);

//Примитивные типы данных
//1. String

let str1 = "Можно в двойных кавычках";
let str2 = 'Можно в одинарных кавычках';
let str3 = "13"; // это строка
let str4 = str1 + " " + str2;
console.log(str4);

console.log(str1.toUpperCase());

//2.Number

let num1 = 9;
let num2 = 9.6;

//3.BigInt
// bigint — низкий поклон в сторону крипро- валют, токенов, контрактов.
// Они оперируют большими числами, и там этот тип данных очень пригождается.
// Скорее всего, не пригодится в вашем обычном фронтенде.
let num3 = 1239n;

//4.Boolean
let isDrunk = true;
//условная конструкция

if(isDrunk){
    console.log("You is drunk")
}
const result = isDrunk ? "You is drunk": "You is not drunk";
console.log(result);

//5.undefined
let str5;
str5 = 12;
console.log(str5);

//6.null
//null-отсутсвие значения
let empty = null;
console.log(empty);

// 7.symbol
let s1 = Symbol("что-то")
//symbol — специальный тип данных.
// Задача значений типа symbol — служить специальными именами для обозначения специальных свойств объектов.

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// 1 Преобразование в строку

// неявное преобразование

let str7 = '' + 9;// "9"
console.log(typeof str7);

// явное преобразование

const num4 = 10;
let str8 = String(num4); //"10"
console.log(typeof str8);

// пример
const res = 9 + 12 + "5";//"215"
console.log(typeof res);
const res2 = "5" + 9 + 12;//"5912"

// Преобразование в число неявное

const num5 = +"6";//6 (+ преобразует строку в число)
const res3 = +"9" + +"10";
console.log(typeof res3);

// Явное преобразование в число

const num6 = Number("117");//117
const num7 = Number("129*#")//NaN - not a number появляется при неудачном преобразовании или неудачной мат операции
console.log(num7);

// Преобразование в булевое значение
// число в булевое 

const res4 = Boolean(9);//true
const res5 = Boolean(0);//false
const test5 = Boolean(-1);//true

// строка в булевое

const res6 = Boolean("");//false
const res7 = Boolean(" ");//true
const res8 = Boolean(null) // False
const res9 = Boolean(undefined) // False

// Равенство строгое и нестрогое
// === строгое равенство
// == нестрогое равенство
// = присвоение

console.log(9 === "9");//false
console.log(9 == "9");//true - - число преобразуется в стринг

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
console.log('a' + + 'a');

let age = 18;
if(age < 18){
    console.log("Вы еще несовершеннолетний");   
} else if(age >= 18 && age < 65){
    console.log("Вы взрослый человек");  
} else {
    console.log("Вы пенсионер");  
}

let day = 3;
let dayName;

switch (day) {
    case 1:
    dayName = "Понедельник";
    break;
    case 2:
    dayName = "Вторник";
    break;
    case 3:
    dayName = "Среда";
    break;
    case 4:
    dayName = "Четверг";
    break;
    case 5:
    dayName = "Пятница";
    break;
    case 6:
    dayName = "Суббота";
    break;
    case 7:
    dayName = "Воскресенье";
    break;
    default:
    dayName = "Некорректный номер дня";
}
console.log(dayName);

// Использования шаблонных строк

const firstName = "Михаил";
const lastName = "Иванов";
const age1 = 30;
const city = "Лондон";

// Использование шаблонных строк
const greeting = `Привет, меня зовут ${firstName} ${lastName}.  Мне ${age1} лет,я живу в городе ${city}.`;
console.log(greeting);

//Массив - динамический массив
// Длина не фиксирована

// Два способа создания массива

const arr1 = []; // 1 способ
const arr2 = new Array() // 2 способ

// Как добавить значение по индексу

const fruits = [];
fruits[0] = "Banana";// Banana
fruits[1] = "Apple";
console.log(fruits);

// Как получить значение по индексу

console.log(fruits[0]);
console.log(fruits.length);

//Как создать массив сразу со значениями

const cars = ["Lada","Mercedes","Opel","Audi","VW","Tesla"];

// Методы работы с массивами

const students = [];
students.push("John"); // добавили элемент справа
console.log(students);
students.push("Tom"); // добавили элемент справа
console.log(students);
students.unshift("Alex"); // добавили слева
console.log(students);
// pop - удалил элемент с конца массива
const vik = students.pop();
console.log(students);
console.log(vik);
// shift - удаляет элемент слева массива(начало)

students.shift();
console.log(students);

