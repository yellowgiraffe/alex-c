// ЦИКЛЫ !

// Задание 1
// let n = 2;
// while (n <= 33) {
//   console.log(n);
//   n++
// }
// =============================

// Задание 2
// for (let i = 59; i >=0; i--) {
//   console.log(i);
// }
// =============================

// Задание 3
// for (let i = 2; i <= 200; i+=2) {
//   console.log(i);
// }

// ИЛИ

// for (let i = 1; i <= 200; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// =============================

// Задание 4
// let arr = [];

// for (let i = 0; i < 20; i++) {
//   arr[i] = i+1;
// }

// console.log(arr);
// =============================

// Задание 5
// let arr = [ "Анастасия", "Алексей", "Аркадий", "Эманнуил", "Сергей", "Семён", "Светлана", "Олег", ];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "Анастасия") {
//     console.log(arr[i]);
//     break;
//   }
// }
// =============================

// Задание 6
// let arr = [ "Анастасия", "Алексей", "Аркадий", "Эманнуил", "Сергей", "Семён", "Светлана", "Олег", ];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== "Сергей") {
//     console.log(arr[i]);
//   }
// }
// =============================

// Задание 7
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let sum = 0;

// for (let i = 1; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);
// =============================

// Задание 7 (2)
// let dayOfWeek = prompt("Какой сейчас день недели?", "");
// let dayOne = "День 1, день недели Понедельник";
// let dayTwo = "День 2, день недели Вторник";
// let dayThree = "День 3, день недели Среда";
// let dayFour = "День 4, день недели Четверг";
// let dayFive = "День 5, день недели Пятница";
// let daySix = "День 6, день недели Суббота";
// let daySeven = "День 7, день недели Воскресенье";

// if (dayOfWeek == 1) {
//   console.log(dayOne);
// } else if (dayOfWeek == 2) {
//   console.log(dayOne);
//   console.log(dayTwo);
// } else if (dayOfWeek == 3) {
//   console.log(dayOne);
//   console.log(dayTwo);
//   console.log(dayThree);
// } else if (dayOfWeek == 4) {
//   console.log(dayOne);
//   console.log(dayTwo);
//   console.log(dayThree);
//   console.log(dayFour);
// } else if (dayOfWeek == 5) {
//   console.log(dayOne);
//   console.log(dayTwo);
//   console.log(dayThree);
//   console.log(dayFour);
//   console.log(dayFive);
// } else if (dayOfWeek == 6) {
//   console.log(dayOne);
//   console.log(dayTwo);
//   console.log(dayThree);
//   console.log(dayFour);
//   console.log(dayFive);
//   console.log(daySix);
// } else if (dayOfWeek == 7) {
//   console.log(dayOne);
//   console.log(dayTwo);
//   console.log(dayThree);
//   console.log(dayFour);
//   console.log(dayFive);
//   console.log(daySix);
//   console.log(daySeven);
// }
// P.S. Не самое лучшее не решение, но лучше так, чем никак))
//=============================

// Задание 8
// let arr = [2, 3, 5, 7, 11, 26, 55, 32, 102, 234, 33, 13, 17, 19, 23, 29, 31, 37];

// for (let i = 0; i < arr.length; i++) {
//   let flag = 0;
//   for (let j = 2; j < arr[i]; j++) {
//     if (arr[i] % j == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (i > 1 && flag == 0) {
//     console.log(arr[i]);
//   }
// }
// =============================

// Задание 9
// let arr = [ "Анастасия", "Алексей", "Аркадий", "Эманнуил", "Сергей", "Семён", "Светлана", "Олег", ];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`Значение элемента ${arr[i]} начинается с ${arr[i][0]}`);
// }
// =============================