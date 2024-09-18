// Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив).
//  Значения массива [100, 400, 900, 300, 500].
// Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
// Стилизация на ваше усмотрение
// Дополнительная задача: Создайте кнопку "Filter", при нажатии на которую на странице будут
//  отображаться только блоки с ценами > 450


const  prices = [100, 400, 900, 300, 500];

const container = document.querySelector("#price-container");

const listPrices = (createPriceList)=>{
    container.innerHTML = "";
    createPriceList.forEach((price)=>{
        const priceBlock = document.createElement("div");
        priceBlock.classList.add("price-block");
        priceBlock.textContent =  `Price: ${price}`;
        container.append(priceBlock);
    });
};

listPrices(prices);

const filterPrices = ()=>{
    const  filteredPrices = prices.filter((price)=> price > 450);
    listPrices(filteredPrices);
};

const filterButton = document.querySelector("#filter");
filterButton.addEventListener("click", filterPrices);
















