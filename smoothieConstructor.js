/* Техническое задание

Напиши программу, которая формирует заказ в виде строки.

Массив с вариантами основы для смузи записан в переменную liquids.

Массив с фруктами находится в переменной fruits.

Массив с зеленью записан в переменную greens.

Выбор посетителя записан в виде чисел в переменные chosenLiquid (индекс выбранной основы для смузи), chosenFruit (выбранный фрукт), chosenGreen (выбранная зелень).

Обрати внимание, что посетители выбирают пункты в электронном меню, где нумерация начинается с единицы, а не с нуля, как в массивах. Учти это при решении.

Собери строку с заказом посетителя вида 'Основа — ' + основа для смузи + ', фрукт — ' + выбранный фрукт + ', зелень — ' + выбранная зелень. Запиши результат в переменную order.

*/

// Состав смузи

var liquids = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
var fruits = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
var greens = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];


// Выбор посетителя

var chosenLiquid = 1;
var chosenFruit = 3;
var chosenGreen = 2;

// Заказ

// 
// 
// МОЕ РЕШЕНИЕ
// 
// 

liquids.unshift('sys');
fruits.unshift('sys');
greens.unshift('sys');
var iLiquid;
var iFruit;
var iGreen;

for (var i = 0; i <= liquids.length - 1; i++ ) {
  if (i === chosenLiquid) {
      iLiquid = `Основа — ${liquids[i]}, `;
    }
}

for (j = 0; j <= fruits.length - 1; j++) {
  if (j === chosenFruit) {
      iFruit = `фрукт — ${fruits[j]}, `;
  }
}

for (l = 0; l <= greens.length - 1; l++) {
  if (l === chosenGreen) {
      iGreen = `зелень — ${greens[l]}`;
  }
}

var order = iLiquid + iFruit + iGreen;

// ЭТАЛОННОЕ РЕШЕНИЕ

var order = 'Основа — ' + liquids[chosenLiquid -1] + ', фрукт — ' + fruits[chosenFruit -1] + ', зелень — ' + greens[chosenGreen -1];
console.log(order);