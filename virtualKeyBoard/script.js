
/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

При клике на кнопку очистки весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');


for (let key of keys) {
    key.onclick = function () {
      display.append(key.textContent);
      // console.log(key.textContent);
    }; 
  }

clearButton.onclick = function () {
  display.textContent = '';
}
