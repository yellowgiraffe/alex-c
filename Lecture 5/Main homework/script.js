let userBudget, shopName, price, employeeName;

let myShop = {
    budget: userBudget,
    name: shopName,
    shopProduct: [],
    shopProductItems: [],
    employees: {},
    open: false,
    discount: true,
    startShop: function() {
      userBudget = +prompt("Ваш бюджет", "Введите ваш бюджет");
    
      while (isNaN(userBudget) || userBudget === "" || userBudget === 0) {
        userBudget = +prompt("Ошибка. Для введения значения бюджета используйте цифры", "Введите ваш бюджет");
      }
    
      shopName = prompt("Какое название у вашего магазина?", "");
    
      while (shopName === null || shopName === "") {
        shopName = prompt("Что-то пошло не так. Название магазина должно содержать символы", "Введите верное название магазина");
      }
    
      shopName = shopName.toLowerCase();
    },
    addProductType: function() {
      for (let i = 0; i < 5; i++) {
        let product = prompt("Какие категории товара будем продавать", "");
      
        if(isNaN(+product)) {
          if (typeof product !== null && product !== "" && product.length < 20) {
            myShop.shopProduct[i] = product;
          } else {
            i--;
          }
        } else {
          i--;
        }
      }
    },
    addProductItems: function() {
      let items = prompt("Перечислите товары через запятую", "");
      while ( !isNaN(items) || items === null || items === "") {
        items = prompt("Перечислите товары через запятую. Не оставляйте поле пустым и не нажимайте кнопку Отмена", "");
      }
      myShop.shopProductItems = items.toLowerCase().split(",");

      let newItem = prompt("Что-то ещё?", "");
      while (!isNaN(newItem) || newItem === null || newItem === "") {
        newItem = prompt("Перечислите товары через запятую. Не оставляйте поле пустым и не нажимайте кнопку Отмена", "");
      }
      myShop.shopProductItems.push(newItem.toLowerCase());
      myShop.shopProductItems.join(",").toLowerCase().split(",");
      myShop.shopProductItems.sort();
    },
    controlTimeWorking: function(time) {
      if (time < 0) {
      console.log("Такого не может быть");
      } else if (time > 8 && time < 20) {
      console.log("Время работать");
      } else if (time < 24) {
      console.log("Мы не работаем");
      } else {
      console.log("В сутках только 24 часа!");
      }
    },
    discountCalc: function(price) {
      if (myShop.discount) {
        price = price - price*0.2;
        return price;
      } else {
        return price;
      }
    },
    addEmployees: function() {
      for (let i = 0; i < 4; i++) {
        employeeName = prompt("Введите имя сотрудкика", "");
        if ( employeeName !== "" && employeeName !== null && isNaN(employeeName)) {
          myShop.employees[i+1] = employeeName;
        } else {
            employeeName = alert("Ошибка! Напишите, как зовут вашего сотрудника");
            i--;
          }
      }
    },
    showProductItems: function() {
      if (myShop.shopProductItems.length) {
        myShop.shopProductItems.forEach( item => console.log(item));
      } else {
        console.log("Пусто");
      }
    },
}

// myShop.startShop();
// myShop.addProductType();
myShop.addProductItems();
myShop.showProductItems();
// myShop.addEmployees();
// myShop.controlTimeWorking(21);
// myShop.discountCalc();
// myShop.console.log(discountCalc(1000));

console.log(myShop);
