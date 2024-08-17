let flips = 0;
while(true){
    flips++;
    const flipResult = Math.random() < 0.5 ? "Орёл" : "Решка";
    console.log(`Попытка ${flips}: ${flipResult}`);
    if(flipResult === "Орёл"){
        break; 
    }    
}
console.log(`Выпало "Орел" после ${flips} попыток`);

