let createButton = document.querySelector(".create-button");
let userCard = document.querySelector(".user-card");
let resultElement = document.querySelector(".result-element");



let checkFields = (event)=>{
    event.preventDefault();

    let name = event.target.querySelector("#person-name").value;
    let surname = event.target.querySelector("#person-surname").value;
    let age = event.target.querySelector("#person-age").value;
    let position = event.target.querySelector("#person-position").value;

    let emptyFields = [];
    if(!name){
        emptyFields.push("Name");
    }if(!surname){
        emptyFields.push("Surname");
    }if(!age){
        emptyFields.push("Age");
    }if(!position){
        emptyFields.push("Job Position");
    }

    
    if(emptyFields.length > 0){
        alert(`Заподните поле: ${emptyFields.join(" , ")}`);
    }else{
        document.querySelector("#user-name + .result-element").textContent = name;
        document.querySelector("#user-surname + .result-element").textContent = surname;
        document.querySelector("#user-age + .result-element").textContent = age;
        document.querySelector("#user-position + .result-element").textContent = position;

        let userCard = document.querySelector(".user-card");
        userCard.style.opacity = "1";
    }
};

let form = document.getElementById("form");
form.addEventListener("submit", checkFields);







