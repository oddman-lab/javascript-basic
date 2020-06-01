// Массив с числами numbers сортируется по возрастанию элементов. 
// На каждой итерации мы сравниваем minValue с остальными элементами массива. Если какой-то из них окажется меньше, чем minValue, он запишется в minValue, перезаписав старое значение, и переместится в начало массива. Переменная swap — вспомогательная переменная, с помощью, которой мы можем поменять элементы местами.
//

var numbers = [12, 3, 7, 9, 10, 5];

for (var i = 0; i <= numbers.length - 2; i++) {
  var minValue = numbers[i];

  for (var j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[j] < minValue) {
      minValue = numbers[j];
      var swap = numbers[i];
      numbers[i] = minValue;
      numbers[j] = swap;
    }
  }
}

console.log(numbers);
// Выведет: [3, 5, 7, 9, 10, 12];