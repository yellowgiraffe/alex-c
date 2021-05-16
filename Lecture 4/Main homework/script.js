// let userBudget, shopName, price, employeeName;

// function startShop() {
//   userBudget = +prompt("Ваш бюджет", "Введите ваш бюджет");

//   while (isNaN(userBudget) || userBudget === "" || userBudget === 0) {
//     userBudget = +prompt("Ошибка. Для введения значения бюджета используйте цифры", "Введите ваш бюджет");
//   }

//   shopName = prompt("Какое название у вашего магазина?", "");

//   while (shopName === null || shopName === "") {
//     shopName = prompt("Что-то пошло не так. Название магазина должно содержать символы", "Введите верное название магазина");
//   }

//   shopName = shopName.toLowerCase();
// }

// function addProduct() {
//   for (let i = 0; i < 5; i++) {
//     let product = prompt("Что будем продавать?", "");
  
//     if(isNaN(+product)) {
//       if (typeof product !== null && product !== "" && product.length < 20) {
//         myShop.shopProduct[i] = product;
//       } else {
//         i--;
//       }
//     } else {
//       i--;
//     }
//   }
// }

// function controlTimeWorking(time) {
//   if (time < 0) {
//   console.log("Такого не может быть");
//   } else if (time > 8 && time < 20) {
//   console.log("Время работать");
//   } else if (time < 24) {
//   console.log("Мы не работаем");
//   } else {
//   console.log("В сутках только 24 часа!");
//   }
// }

// function discountCalc(price) {
//   if (myShop.discount) {
//     price = price - price*0.2;
//     return price;
//   } else {
//     return price;
//   }
// }

// function addEmployees() {
//   for (let i = 0; i < 4; i++) {
//     employeeName = prompt("Введите имя сотрудкика", "");
//     if ( employeeName !== "" && employeeName !== null && isNaN(employeeName)) {
//       myShop.employees[i+1] = employeeName;
//     } else {
//         employeeName = alert("Ошибка! Напишите, как зовут вашего сотрудника");
//         i--;
//       }
//   }
// }

// startShop();

// let myShop = {
//     budget: userBudget,
//     name: shopName,
//     shopProduct: [],
//     employees: {},
//     open: false,
//     discount: true,
// }

// addProduct();
// addEmployees();
// controlTimeWorking(21);
// discountCalc();
// console.log(discountCalc(1000));

// console.log(myShop);


// УСЛОЖНЕННОЕ ЗАДАНИЕ

let str = "урок-был-слишком-легким";
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);

str = str.split("-").join(" ")
console.log(str);
