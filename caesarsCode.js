
// Алфавит
var symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Смещение
var shift = 10;

// Закодированное сообщение
var encodedMessage = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

var encodedMessage = [62,28,31,56,42,40,43,27,23,56,37,28,56,25,51,39,40,38,41,32,48,52,56,40,51,24,34,43,56,43,56,45,38,31,55,32,37,23,57];

// Раскодированное сообщение
var decodedMessage = '';
var alphabet = 61;

for (var i = 0; i <= encodedMessage.length; i++) {
  for (var j = 0; j <= symbols.length; j++) {
    if (encodedMessage[i] < alphabet && encodedMessage[i] === j) {
      decodedMessage += symbols[j+shift];
    } else if (encodedMessage[i] > alphabet && encodedMessage[i] === j) {
       decodedMessage += symbols[j-alphabet];
    }
  };
};

console.log(decodedMessage);

// Решение в две строчки

for (var i = 0; i <= encodedMessage.length - 1; i++) {
    decodedMessage += symbols[(encodedMessage[i]+shift) % symbols.length]
  }
  