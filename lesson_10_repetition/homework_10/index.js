// Задача 1
// Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива
let strArr = [`cat`,`dog`,`bird`,`hamster`,`mouse`];
console.log(strArr);
console.log(`Длина массива: ${strArr.length}`);
// console.log(strArr[0], strArr[4]);
let firstElem = strArr.shift();
let lastElem = strArr.pop();
console.log(`первый элемент массива: ${firstElem}`);
console.log(`последний элемент массива: ${lastElem}`);

// Задача 2
// Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива
let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 ==0){
        newArr.push(arr[i]);
    }      
}
console.log(newArr);

// Задача 3*
// Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль. !
// Не используя математические методы max и min, только циклы
let array = [3, 7, 2, 9, 4];
let min = array[0];
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if(array[i] < min){
        min = array[i];
    }
    if(array[i]>max){
        max = array[i];
    }
} 
console.log(array);
console.log(`минимальное значения: ${min}`);
console.log(`максимальное значения: ${max}`); 