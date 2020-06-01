/* Техническое задание

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.

Исходный массив записан в переменную numbers.

Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().

*/

var numbers = [1, 4, 5, 9, 2, 5, 1];
var uniqueNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

