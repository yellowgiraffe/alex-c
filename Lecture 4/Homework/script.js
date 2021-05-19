// ФУНКЦИИ !

// Задание 1
// function multiplyTwoNum (num1 = 15, num2 =  10) {
//   return num1*num2;
// }

// console.log(multiplyTwoNum(10, 5));
// console.log(multiplyTwoNum());
// ====================================

// Задание 2
// console.log(helloUser("Оля"));

// function helloUser(userName) {
//   return (`Привет, ${userName}, как у тебя дела?`);
// }
// ====================================

// Задание 3
// function changeArray (arr, index, newElement) {
//   arr[index] = newElement;
//   return arr;
// }
// ====================================


// МЕТОДЫ И СВОЙСТВА !

// Задание 1
// let arr = [6, 10, 2, 3, 5];
// console.log(arr.find(item => item > 8));
// ====================================

// Задание 2
// const team = ['Virtus.pro', 'Hellreasers', 'NAVI', 'LGD'];
// team.splice(2, 1);
// console.log(team);
// ====================================

// Задание 3
// arr = [null, null, null];
// console.log(arr.fill(2));
// ====================================

// Задание 4
// let arr = [6, 10, 2, 3, 5], 
//     arr2 = ["Алексей"];

// let arr3 = arr.concat(arr2);

// console.log(arr3);
// ====================================

// Задание 5
// let arr = [6, 10, 2, 3, 5];
// console.log(arr.length);
// ====================================

// Задание 6
// let arr = [6, 10, 2, 3, 5];
// console.log(arr.every(item => item > 1));
// ====================================

// Задание 7
// const words = ['Оксана', 'Валерия', 'Ольга', 'Зинаида', 'Анастасия', 'Макс'];
// let newArr = words.filter(item => item.length > 7);

// console.log(newArr);
// ====================================

// Задание 8
// const animals = ['BMW', 'MERSEDES', 'AUDI', 'OPEL', 'HAVAL'];
// let arr = animals.splice(1, 3);

// console.log(arr);
// ====================================

// Задание 9
// const elements = ['Я', 'гуляю', 'по', 'улице'];
// let string = elements.join(" ");
// console.log(string);
// ====================================

// Задание 10
// let string = "Привет";
// let reverseString = string.split("").reverse().join("");

// console.log(reverseString);
// ====================================

// Задание 11
// let arr = [6, 10, 2, 3, 5];
// let element = arr.findIndex(item => item < 5);

// console.log(element);
// ====================================


// УСЛОЖНЕННОЕ ЗАДАНИЕ

// // Задание 1
// let str = "урок-был-слишком-легким";
// str = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str);

// // Задание 2
// str = str.split("-").join(" ")
// console.log(str);

// // Задание 3
// str = str.slice(-6).replace("им", "оо");
// console.log(str);

// // Задание 4
// let arr = [20, 33, 1, "Человек", 2, 3];

// let newArr = arr.filter(item => !isNaN(item))

// let result = Math.sqrt(newArr.map(item => Math.pow(item, 3)).reduce( (a, b) => a + b));

// console.log(result);