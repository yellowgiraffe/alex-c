// ЗАДАНИЕ 2
function convertUsdToRub(usd) {
  let rub = Math.round(usd * 75.83);
  
  console.log("На эту сумму вы купите " + rub + " рублей");
  return rub;
}

convertUsdToRub(47);
convertUsdToRub(22);
//==================================

// ЗАДАНИЕ 4
function squareNum(num) {
  return Math.pow(+num, 2);
}

console.log(squareNum('3'));
console.log(squareNum('5'));
//==================================

// ЗАДАНИЕ 6
function countTime(h, m, s) {
   return h*3600000 + m*60000+ s*1000;
}

console.log(countTime(0, 1, 1));
console.log(countTime(1, 1, 1));
console.log(countTime(0, 0, 0));
console.log(countTime(1, 0, 1));
console.log(countTime(1, 0, 0));
//==================================

// ЗАДАНИЕ 8
function countWater(hours) {
  return Math.floor(hours * 0.5);
}

console.log(countWater(2));
console.log(countWater(1.4));
console.log(countWater(12.3));
console.log(countWater(0.82));
console.log(countWater(11.8));
console.log(countWater(1787));
//==================================

// ЗАДАНИЕ 10
function playGuitar(name) {
  if (name.charAt(0) === "Р" || name.charAt(0) === "р") {
    return name + " играет на гитаре";
  } else {
    return name + " не играет на гитаре";
  }
}

console.log(playGuitar("Максим"));
console.log(playGuitar("Руслан"));
//==================================