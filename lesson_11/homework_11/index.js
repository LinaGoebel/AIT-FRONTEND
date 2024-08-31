//Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в
// массиве (массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию
// для демонстрации результата

let numArray = [2, 4, 6, 8, 10];
let newArray = [];
function doublingValue(numArray) {
  for (number of numArray) {
    newArray.push(number * 2);
  }
  console.log(newArray);
}
doublingValue(numArray);

// Задача 2
// Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки.
// Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат
//  каждого вызова присвойте отдельной переменной и выведите переменные в консоль

function showString(string, number) {
  console.log(string.substring(0, number));
}
showString(`Hallo`, 1);
showString(`Servus`, 3);
showString(`Привет`, 5);

// Задача 3*
// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения
// элементов массива (массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию
// для демонстрации результата

let arr = [10, 15, 20, 25, 30];
function calculatingAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  console.log(average);
}
calculatingAverage(arr);