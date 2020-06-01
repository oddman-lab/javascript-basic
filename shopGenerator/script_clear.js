var cardsData = [
    {
      inStock: true,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/choco.jpg',
      text: 'Сливочно-кофейное с кусочками шоколада',
      price: 310,
      isHit: true,
      specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
      inStock: false,
      imgUrl: 'https://htmlacademy.ru/assets/courses/219/gllacy/lemon.jpg',
      text: 'Сливочно-лимонное с карамельной присыпкой',
      price: 125,
      isHit: false
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

var createCard = function (product) {
  var listItem = makeElement('li', 'good');

  var title = makeElement('h2', 'good__description', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'good__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'good__price', product.price + "₽/кг");
  listItem.appendChild(price);

  var availabilityClass = 'good--available';
  if (!product.inStock) {
    availabilityClass = 'good--unavailable';
  }
  listItem.classList.add(availabilityClass);

  if (product.isHit) {
    listItem.classList.add('good--hit');
    var specialPrice = makeElement('p', 'good__special-offer', product.specialOffer);
    listItem.appendChild(specialPrice);
  }

  return listItem;
};

var renderCards = function(itemsData) {
  var box = document.querySelector('.goods');
  for(var i = 0; i<itemsData.length; i++) {
    var a = createCard(itemsData[i]);
    box.append(a);
  }
}

renderCards(cardsData);