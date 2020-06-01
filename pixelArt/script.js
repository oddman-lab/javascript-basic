// Мое решение не проходящее 1 из 4 тестов на 10 пикселе,
// хотя в ручную все работает

let pixels = document.querySelectorAll('.pixel');
let colorSelect = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');
let flag = false;

eraser.onchange = function () {
  if (eraser.checked) {
      flag = true;
    } else {
      flag = false;
      }
};


for (let pixel of pixels) {
  pixel.onclick = function () {
    if (flag === true) {
      pixel.style.backgroundColor = "white";
    } else if (flag === false) {
        pixel.style.backgroundColor = colorSelect.value;
      }; 
  };
};
/*

1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.

*/


// Альтернативное решение с прохождением ВСЕХ тестов

// let pixels = document.querySelectorAll('.pixel');
// let chosenColor = document.querySelector('.chosen-color');
// let eraser = document.querySelector('.eraser');

// for (let pixel of pixels) {
//   pixel.onclick = function () {
//     if (eraser.checked) {
//       pixel.style.backgroundColor = 'white';
//     } else {
//         pixel.style.backgroundColor = chosenColor.value;
//       }
//   };
// };
