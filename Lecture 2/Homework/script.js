// ПЕРЕМЕННЫЕ !

// Задание 1
// let city = "Chelyabinsk";
// console.log(city);

// city = "Moscow";
// console.log(city);
// ==========================

// Задание 2
// const COLOR_BLUE = "blue";
// ==========================

// Задание 3
// let userName = "Angelina";
// let UserSecondName = "Smith";
// let user_password = "1234QWER";
// ==========================

// Задание 4
// let userName = "Angelina";
// let username = "Bill";

// console.log(userName, username);
// ==========================

// Задание 5
// let color = "yellow",
//     border = "blue",
//     background = "green";
// ==========================

// Задание 6
// let number = 16.4;

// console.log(number);
// ==========================



// ТИПЫ ДАННЫХ !

// Задание 1
// let string = "25";
// ==========================

// Задание 2
// let numberValue = 25;
// ==========================

// Задание 3
// Это тип данных, который имеет только два значения: true или false.
// True - правда. False - ложь.
// ==========================

// Задание 4
// let name;
// console.log(name);
// ==========================

// Задание 5
// let car = {
//     age: 25,
//     color: "blue",
//     brand: "Opel",
// }
// ==========================

// Задание 6
// console.log(car["age"]);
// ==========================

// Задание 7
// car["color"] = "red";
// console.log(car);
// ==========================

// Задание 8
// let arr = [true, false, "string", 44, 33]

// console.log(arr[1], arr[3]);
// ==========================

// Задание 9
// arr[0] = "maksim";
// arr[3] = "oleg";
// ==========================

// Задание 10
// let str = "Hello";
//     num = 6;

// console.log(str / num);
// ==========================

// Задание 11
// let obj = {
//     name: "Olga",
// }

// let myName = "name";

// console.log(obj[myName]);
// ==========================

// Задание 12
// Свойства в объекте это строки.
// Тип данных у значений может быть любой.

// let car = {
//     age: 25,
//     color: "blue",
//     brand: "Opel",
// }
//
// console.log(typeof car["age"], typeof car["color"]); // "number", "string"
// ==========================

// Задание 13
// 8 типов данных. Number, string, bigInt, boolean, null, undefined, symbol, object
// ==========================

// Задание 14
// null отдельный тип данных, но при проверке через typeof из-за ошибки в языке выведет object.
// Это пустое или несуществующее значение, "ничего". 
// undefined один из 8 типов данных, который означает переменную, которая была объявлена, но значение к ней ещё не было указано
// ==========================

// Задание 15
// Одинарные кавычки имеют такое же значение, как и двойные. Можно использовать и те, и те.
// Хорошей практикой считается, чтобы использовать один тип кавычек во всем проекте. Поэтому друг не прав
// ==========================

// Задание 16
// Так как массив это подвид объекта, то ключи этого подвида - индексы.
// Массив начинается с 0 индекса. Нулевой индекс = первому значению массива, первый индекс = второму значению массива и т.д.
// ==========================

// Задание 18
// 20-"40px" // NaN 
// 100 / "400sz" // NaN
// ==========================

// Задание 19
// Получим значение "undefined"
// ==========================



// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ !

// Задание 1
//  
// ==========================

// Задание 2
// const userAge = +prompt("Сколько вам лет?", "Введите свой возраст")
// ==========================

// Задание 3
// let result = +prompt("Введите ваше имя в поле ниже")
// ==========================

// Задание 4
// По умолчанию prompt возвращает данные с типом string. Поэтому когда мы ожидаем 
// получить от пользователя в ответ число, мы ставим +, чтобы тип данных ответа был number.
// ==========================


// ОПЕРАТОРЫ И ПРИВЕДЕНИЕ ТИПОВ !

// Задание 1
// let result = 2**3;
// console.log(result);
// ==========================

// Задание 2
// let a = "Привет, ";
// let b = "Мир!";
// console.log(a + b);
// ==========================

// Задание 3
// "" + 2 + "2" + 4 + true // "224true";
// "2" * 1 + 0 + "" // "2";
// true + false + "" + NaN // "1NaN";
// 12 / "2" // 6;
// "2" * "3" * "6" + 1 // 37;
// 4 + 5 + "px" + 12 + "2" // "9px122";
// "$" + 4 + 5 + "px" * 4 // "$45NaN";
// "42" – 12 // 30;
// "17px" – 222 // NaN;
// 12 / 0 // Infinity;
// " -12 " + 12 // " -12 12";
// " -4 " - 6 // -10;
// null + 1 // 1;
// undefined + 1 // NaN;
// "" + NaN // "NaN";
// true + false + "2" + 22 * 4 // "1288";
// null + null // 0;
// ==========================

// Задание 4
// let numberOne = 3;
// let numberSecond = numberOne--;
// numberOne; // 2
// numberSecond; // 3

// let numberOne = 12; 
// let numberSecond = ++numberOne; 
// numberOne; // 13
// numberSecond; // 13 

// let numberOne = 44; 
// let numberSecond = --numberOne; 
// numberOne // 43
// numberSecond // 43

// let numberOne = 33;
// let numberSecond = numberOne++; 
// numberOne; // 34
// numberSecond; // 33
// ==========================

// Задание 5
// var a = 1, b = 1, c, d;
// c = ++a; 
// alert(c); // 2

// d = b++;
// alert(d); // 1

// c = (2 + ++a);
// alert(c); // 5

// d = (2 + b++); 
// alert(d); // 4

// alert(a); // 3
// alert(b); // 3
// ==========================

// Задание 6
// console.log(5%2); // 1
// console.log(10%2); // 0
// console.log(11%2); // 1
// console.log(16%2); // 0
// console.log(18%2); // 0
// console.log(21%2); // 1
// console.log(25%2); // 1
// ==========================

// Задание 7
// true + +"2"; // => 3
// true + false + +"2" + 22 * 4 // => 91
// ==========================

// Задание 8
// Сначала считается умножение, так как приоритет 
// у оператора * выше, чем у +. Получаем => false*2=0*2.
// Далее первый false при сложении с 0 даёт 0. Получаем выражение
// 0+0+"21"-4. Следуюший шаг 0+"21"="21". И последний шаг: "21" - 4. Приведение типов к number даёт 21-4 = 17:
// ==========================

// Задание 9
// true == true; // true
// true == false; // false
// true === true; // true
// true === false; // false
// null === null + 1 == "1"; // false
// 1 === "1" + 2 == 2; // false
// 2 === 2 // true
// ==========================

// Задание 10
// false && false // false
// false || true // true
// true && false // false
// true && true // true
// "" || 1 // 1
// null || true // true
// undefined && "0" // undefined 
// "0" || false // "0"
// " " && 2 // 2 
// ==========================

// Задание 11
// Числовое значение
// ==========================

// Задание 12
// = означениет присваивание значения переменной
// == оператор нестрогого равенства. Если операнды разных типов,
// то приводит их к типу number и сравнивает.
// === оператор строгого равества. Если оперндып разных типов, то сразу возвращает false.
// Если операнды одинаковых типов, то происходит их сравнение.
// ==========================

// Задание 13

// ==========================

// Задание 14
// "A" < "a"
// "ab" < "c"
// ==========================
