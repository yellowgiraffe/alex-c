let budget = +prompt("Ваш бюджет", "Введите ваш бюджет");
const shopName = prompt("Название вашего магазина?");
let time;

let myShop = {
    budget: budget,
    name: shopName,
    shopProduct: [],
    personal: {},
    open: false,
}

for (let i = 0; i < 5; i++) {
  let product = prompt("Что будем продавать?");

  while (product == null || product === "" || product.length > 10 || !isNaN(product)) {
    product = prompt("Что будем продавать?");
  }

  if (product !== null && product !== "" && product.length < 10) {
    myShop.shopProduct[i] = product;
  }
}

// P.S. Основное задание номер один я решила через два часа после дедлайна. Не знаю или можно было его ещё добавлять. Если что, то просто его проигнорируй

if (time < 0) {
  console.log("Такого не может быть");
} else if (time > 8 && time < 20) {
  console.log("Время работать");
} else if (time < 24) {
  console.log("Мы не работаем");
} else {
  console.log("В сутках только 24 часа!");
}

console.log(myShop);