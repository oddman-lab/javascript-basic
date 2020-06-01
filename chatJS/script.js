var messageTemplate = document.querySelector('#message-template').content;
var messageLayout = messageTemplate.querySelector('.chat-message');
var chatWindow = document.querySelector('.chat-content');
var form = document.querySelector('.chat-form');
var sendButton = document.querySelector('.chat-form-button');
var input = document.querySelector('.chat-form-input');

var messageArray = chatWindow.children;

var addCheckHandler = function (item) {
  var deleteMessage = item.querySelector('.chat-message-button');
  console.log(deleteMessage);
  deleteMessage.addEventListener('click', function () {
    item.remove();
});
}

for (var i = 0; i < messageArray.length; i++) {
  addCheckHandler(items[i]);
  console.log(item[i]);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var messageText = input.value
  var newMessage = messageLayout.cloneNode(true);
  var message = newMessage.querySelector('p');
  
  message.textContent = messageText;
  addCheckHandler(newMessage);
  
  chatWindow.appendChild(newMessage);
  input.value = '';
  
});


/*
Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.
*/

