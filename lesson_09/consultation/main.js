//Function Declaration
function devide(a,b){
    return a/b;
}
console.log(devide(10,2));
//FUNCTION EXPRESSION
const devide1 = function(a,b){
    return a/b;
}
console.log(devide1(10,5));






/* Пример 1: Округление числа
Задание:
Используйте метод Math.round(), чтобы округлить число 4.7 до ближайшего целого числа и выведите результат.
*/
let roundedUp = Math.round(4.7);
console.log(roundedUp);

/*
Пример 2: Генерация случайного числа
Задание:
Используйте метод Math.random(), чтобы сгенерировать случайное число от 0 до 1 (не включая 1) и выведите результат.
*/
let random  = Math.random();
console.log(random);


/*
Пример 3: Возведение в степень
Задание:
Используйте метод Math.pow(), чтобы возвести число 3 в степень 4 и выведите результат.
*/
let power = Math.pow(3,4);
console.log(power);
/*
Пример 4: Нахождение максимального и минимального значений
Задание:
Используйте методы Math.max() и Math.min(), чтобы найти максимальное и минимальное значения в наборе чисел 5, 12, -3, 8, 0 и выведите результаты.
*/
const numbers = [5, 12, -3, 8, 0];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(`Максимальное значение ${max}`);
console.log(`Минимальное значение ${min}`);

/*
Пример 5: Извлечение квадратного корня
Задание:
Используйте метод Math.sqrt(), чтобы найти квадратный корень числа 64 и выведите результат.
 */
const number = 64;
const sqrtResult = Math.sqrt(number);

console.log("Квадратный корень числа 64:", sqrtResult);

/* Задание 1
Создайте массив, содержащий три различных фрукта, и выведите его в консоль. */
const fruits = ["apple"," orange"," mango"]
console.log(fruits);

/* Задание 2
Добавьте число 4 в конец массива [1, 2, 3]. */
const num = [1, 2, 3];
const num2 = [4];
const newNum = [...num, ...num2];
console.log(newNum);


/* Задание 3
Удалите последний элемент из массива ["Red", "Green", "Blue"] и сохраните его в отдельной переменной. */
const color = ["Red", "Green", "Blue"];
const lastColor = color.pop();
console.log(color);


/* Задание 4
Добавьте элемент "Elephant" в начало массива ["Cat", "Dog"]. */
const animal = ["Cat", "Dog"];
const animal1 = ["Elephant"];
const animals = [...animal1, ...animal];
console.log(animals);


/* Задание 5
Удалите первый элемент из массива ["Paris", "London", "New York"] и сохраните его в переменной. */
let citie =  ["Paris", "London", "New York"];
let firstCities = citie.shift();
console.log(firstCities);
console.log(citie);



/* Задание 6
Получите и выведите второй элемент из массива ["Toyota", "BMW", "Tesla"]. */
let car = ["Toyota", "BMW", "Tesla"];
let secondCar = car[1];
console.log(secondCar);


/* Задание 7
Найдите индекс элемента 30 в массиве [10, 20, 30, 40]. */
let numbers1 = [10, 20, 30, 40];
let i = numbers1.indexOf(30);
console.log(i);

/*
Задание 8
Проверьте, содержится ли элемент "Banana" в массиве ["Apple", "Banana", "Orange"]. */
let fruits1 = ["Apple", "Banana", "Orange"];
let containsBanana = fruits1.includes("Banana")
console.log(containsBanana);


/*
Задание 9
Объедините два массива [1, 2, 3] и [4, 5, 6] в один.*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = [...arr1, ...arr2];
console.log(arr);

/*
Задание 10
Выведите все элементы массива ["JavaScript", "Python", "Java"] с помощью цикла for.
 */
let langs = ["JavaScript", "Python", "Java"] ;
for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);
}

/*
Задание 11
Переберите массив ["USA", "Canada", "Mexico"] и выведите каждый элемент с помощью метода forEach.*/
let countries = ["USA", "Canada", "Mexico"];
countries.forEach(function(country) {
    console.log(country);
});

// Задание 12
// Создайте новый массив, состоящий из удвоенных значений элементов массива [1, 2, 3, 4].
let array = [1, 2, 3, 4];
let newArray = [];
for (let i = 0; i < array.length; i++) {
    let elem  = array[i];
    newArray.push(elem * 2);
}
    console.log(newArray);  

// Задание 13
// Отфильтруйте массив [18, 21, 16, 25], оставив только элементы больше или равные 18.
let array1 = [18, 21, 16, 25];
let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
    let element = array1[i];
    if(element >= 18){
        newArray1.push(element); 
    }
}
console.log(newArray1);

// Задание 14
// Отсортируйте массив ["John", "Anna", "Chris"] в алфавитном порядке.
let names = ["John", "Anna", "Chris"];
console.log(names.sort());

// Задание 15
// Объедините элементы массива ["Fire", "Air", "Water"] в строку, разделив их запятыми и пробелами. 
let elem = ["Fire", "Air", "Water"] ;
let result = elem.join(", ");
console.log(result);


