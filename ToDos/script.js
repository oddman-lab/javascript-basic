let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');
let flag = true; // = new Boolean();

priority.onclick = function () {
  priority.classList.toggle('is-important');
   if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
    flag = true;
  } else {
    priority.textContent = 'Обычная задача';
    flag = false;
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  //создаем новый элемент списка - новая задача
  let newTask = document.createElement('li');
 //Добавим класс is-important элементу списка
  if (flag === true) {
    newTask.classList.add('is-important');
  };
 //Записываем в список текст из формы
 newTask.textContent = input.value;
 //Очищаем поле ввода
 input.value = '';
 // вставить newTask в конец <ol> - переменная list
 list.append(newTask); 
 //Проверяем, что у нас там добавилось
console.log(list); //Элементы списка в формате тегов HTML
console.log(flag);
};