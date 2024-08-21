// Задание 1.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100.
//  Найти максимальное и минимальное значение в массиве. Вывести в консоль.
console.log("=======Задание 1=====");
let arr = [];
for (let i = 0; i<10; i++) {
    arr.push(Math.round(Math.random()*100)) ;
}
console.log(arr);

console.log(`максимальное значение в массиве:  ${Math.max(...arr)}`);
console.log(`минимальное значение в массиве:  ${Math.min(...arr)}`);
//[...randomArr, ...arr] - соединение двух массивов

// Задание 2.
// Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.
console.log("=======Задание 2=====");
let number = [4, 16, 25, 89, 74, 2, -5, 6, -33, 27];
let firstNumber = number.shift();
number.push(firstNumber);
console.log(number);

//Задание 3.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75.
// Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.
console.log("=======Задание 3=====");
let arr1 = [];
for (let i = 0; i <10; i++) {
    arr1.push(Math.round(Math.random()*75)) ;
}
console.log(arr1);

console.log(`максимальное значение в массиве:  ${max1 = Math.max(...arr1)}`);
console.log(`минимальное значение в массиве:  ${min1 = Math.min(...arr1)}`);

console.log(max1+min1);

// Задание 4.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. 
// Найти сумму всех элементов массива. Вывести в консоль.
console.log("=======Задание 4=====");
let arr2 = [];
for (let i = 0; i <10; i++) {
    arr2.push(Math.round(Math.random()*50)) ;
}
console.log(arr2);

let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}
console.log(sum2);

// Задание 5 (необязательное).
// Объявить массив из 5 элементов и заполнить его любыми числами. 
// Присвоить 5 переменным значения из массива с помощью деструктуризации.
console.log("=======Задание 5=====");
let array = [25,46,89,104,2];
let [a,b,c,d,e] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Задание 6.
// Разбить строку на слова и вывести в консоль по одному слову в строке.
// Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
//метил пропенилен дигидроксицин наменила крилическая кислота

console.log("=======Задание 5=====");
// let text = "метилпропенилендигидроксициннаменилакрилическая кислота";
// let str = text.substring(0,5);
// let str1= text.substring(5,15);
// let str2= text.substring(15,28);
// let str3= text.substring(28,36);
// let str4= text.substring(36,47);
// let str5= text.substring(47,55);

// console.log(str + " " + str1 + " "+ str2 + " " + str3+  " " + str4 + str5);
let exampleStr =
"Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота";

let words = exampleStr.split(" ");

console.log(words);

for (let i = 0; i < words.length; i++) {
console.log(words[i]);
}

for(let word of words) {
console.log(word)
}