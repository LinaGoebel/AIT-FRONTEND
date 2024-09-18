const spaceship = {
    name: 'Vostok1',
    manufacturer: 'OKB-1',
    crew:  ['Yuri Gagarin'],
    maxSpeed:  [' 27400 km/h'],
};

const nameElement = document.querySelector('.name');
const manufacturerElement =  document.querySelector('.manufacturer');
const crewElement =  document.querySelector('.crew');
const speedElement = document.querySelector('.maxSpeed');

const hideButton = document.querySelector('.hide_manufacturer');

nameElement.innerHTML += spaceship.name;
manufacturerElement.innerHTML +=  spaceship.manufacturer;
crewElement.innerHTML += spaceship.crew[0];
speedElement.innerHTML +=  spaceship.maxSpeed[0];

const hideCardFunction = ()=>{
    manufacturerElement.style.display = "none";
}
hideButton.addEventListener('click', hideCardFunction);





