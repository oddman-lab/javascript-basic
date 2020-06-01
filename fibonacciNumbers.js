var fibonacciNumbers = [1, 1];
var numbersQuantity = 7;

for (var i = 2; i < numbersQuantity + 2; i++) {
  fibonacciNumbers.push(fibonacciNumbers[i-1]+fibonacciNumbers[i-2]);
}

console.log(fibonacciNumbers);
console.log(fibonacciNumbers.length)