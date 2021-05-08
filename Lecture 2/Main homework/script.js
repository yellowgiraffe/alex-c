let budget = +prompt("Ваш бюджет", "Введите ваш бюджет");
const storeName = prompt("Название вашего магазина?");

let myShop = {
    budget: budget,
    name: storeName,
    shopProduct: [],
    personal: {},
    open: false,
}

myShop.shopProduct.push(prompt("Что будем продовать?"));
myShop.shopProduct.push(prompt("Что будем продовать?"));
myShop.shopProduct.push(prompt("Что будем продовать?"));

let userAge = +prompt("Сколько вам лет?", "Введите свой возраст");
alert(typeof userAge === "number" && userAge || "Пользователь ответил неверно");