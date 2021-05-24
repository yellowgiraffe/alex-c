let price, employeeName;

let myShop = {
    budget: "",
    name: "",
    shopProduct: [],
    shopProductItems: [],
    employees: {},
    open: false,
    discount: true,
    startShop() {
      let userBudget = +prompt("Ваш бюджет", "Введите ваш бюджет");
    
      while (!userBudget) {
        userBudget = +prompt("Ошибка. Для введения значения бюджета используйте цифры", "Введите ваш бюджет");
      }
      this.budget = userBudget;
    
      let shopName = prompt("Какое название у вашего магазина?", "");
    
      while (!shopName) {
        shopName = prompt("Что-то пошло не так. Название магазина должно содержать символы", "Введите верное название магазина");
      }
    
      this.name = shopName.toLowerCase();
    },
    addProductType() {
      for (let i = 0; i < 5; i++) {
        let product = prompt("Какие категории товара будем продавать", "");
      
        if(!isNaN(+product) || !product || product.length > 20) {
          i--;
        } else {
          this.shopProduct[i] = product;
        }
      }
    },
    addProductItems() {
      let items = prompt("Перечислите товары через запятую", "");
      while ( !isNaN(items) || !items) {
        items = prompt("Перечислите товары через запятую. Не оставляйте поле пустым и не нажимайте кнопку Отмена", "");
      }
      this.shopProductItems = items.toLowerCase().split(",");

      let lostItem = prompt("Что-то ещё?", "");
      if (lostItem && lostItem !== " ") {
        this.shopProductItems.push(lostItem.toLowerCase());
      }
      this.shopProductItems.sort();
    },
    controlTimeWorking(time) {
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
    discountCalc(price) {
      if (this.discount) {
        price = price - price*0.2;
        return price;
      } else {
        return price;
      }
    },
    addEmployees() {
      for (let i = 0; i < 4; i++) {
        employeeName = prompt("Введите имя сотрудкика", "");
        if ( employeeName && isNaN(employeeName)) {
          this.employees[i+1] = employeeName;
        } else {
            employeeName = alert("Ошибка! Напишите, как зовут вашего сотрудника");
            i--;
          }
      }
    },
    showProductItems() {
      if (this.shopProductItems.length) {
        this.shopProductItems.forEach( item => console.log(item));
      } else {
        console.log("Пусто");
      }
    },
}

myShop.startShop();
myShop.addProductType();
myShop.addProductItems();
myShop.showProductItems();
myShop.addEmployees();
myShop.controlTimeWorking(21);
myShop.discountCalc();
myShop.console.log(discountCalc(1000));

console.log(myShop);
