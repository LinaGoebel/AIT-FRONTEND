//Добавить новые элементы в начало и в конец списка
let newElement = document.createElement("li");
newElement.textContent = "Новый элемент";
let list = document.querySelector("ol");
list.prepend(newElement); 
list.append(newElement);

//Изменить текст второго элемента списка
let allElements = document.querySelectorAll("li");
let secondElement = allElements[1];
for(let element of allElements){
    console.log(element.textContent);
}
secondElement.textContent = "Изменённый текст второго элемента списка";
console.log(secondElement.textContent);


//Удалить третий элемент
let removeElements = document.querySelectorAll("li");
let thirdElement = removeElements[2];
thirdElement.remove();

//Изменить стили по своему усмотрению для четвертого элемента
let styleElements = document.querySelectorAll("li");
let fourthElement =styleElements[3];
fourthElement.style.color = "blue";

