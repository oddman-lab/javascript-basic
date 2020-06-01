var cardsData = [
    {
      inStock: true,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/choco.jpg',
      text: 'Сливочно-кофейное с кусочками шоколада',
      price: 310,
      isHit: false,
      specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
      inStock: true,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/lemon.jpg',
      text: 'Сливочно-лимонное с карамельной присыпкой',
      price: 125,
      isHit: true,
      specialOffer: 'Юлька-красотулька!'
    },
    {
      inStock: true,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/cowberry.jpg',
      text: 'Сливочное с брусничным джемом',
      price: 170,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/cookie.jpg',
      text: 'Сливочное с кусочками печенья',
      price: 250,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/creme-brulee.jpg',
      text: 'Сливочное крем-брюле',
      price: 190,
      isHit: false
    }
  ];
  
  var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    
    if (text) {
      element.textContent = text;
    }
    
    return element;
  };
  
  var renderCards = function(dataArray) {
    var goodItem = makeElement('li','good');
    var goodTitle = makeElement('h2', 'good__description', dataArray.text);
    
    goodItem.appendChild(goodTitle);
    
    var goodPic = makeElement('img', 'good__image');
    goodPic.src = dataArray.imgUrl;
    goodPic.alt = dataArray.text;
    
    goodItem.appendChild(goodPic);
    
    var goodPrice = makeElement('p', 'good__price', dataArray.price + '₽/кг');
    goodItem.appendChild(goodPrice);
    
    var availabilityClass = 'good--available';
    if (!dataArray.inStock) {
      availabilityClass = 'good--unavailable';
    }
    
    goodItem.classList.add(availabilityClass);
    
    if (dataArray.isHit) {
      goodItem.classList.add('good--hit');
      var specialPrice = makeElement('p', 'good__special-offer', dataArray.specialOffer);
      goodItem.appendChild(specialPrice);
    }
    
    return goodItem;
  }
  
  var goodsList = document.querySelector('.goods');
  
  
  
  for (var i = 0; i < cardsData.length; i++) {
    var cardItem = renderCards(cardsData[i]);;
    goodsList.appendChild(cardItem);  
  }
  
/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
<li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
</li>
...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.
*/