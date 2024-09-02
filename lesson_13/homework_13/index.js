//Добавить новые элементы в начало и в конец списка
let newFirstElement = document.createElement("li");
let newSecondElement = document.createElement("li");
newFirstElement.textContent = "Первый новый элемент добавленный в начало списка";
newSecondElement.textContent = "Второй новый элемент добавленный в конец списка"
let list = document.querySelector("ol");
list.prepend(newFirstElement); 
list.append(newSecondElement);


let allElements = document.querySelectorAll("li");

//Изменить текст второго элемента списка
let secondElement = allElements[1];
secondElement.textContent = "Изменённый текст второго элемента списка";

//Удалить третий элемент
let thirdElement = allElements[2];
thirdElement.remove();

//Изменить стили по своему усмотрению для четвертого элемента
let fourthElement = allElements[3];
fourthElement.style.color = "blue";

