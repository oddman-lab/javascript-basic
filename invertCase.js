// Функция, которая принимает строку в любом регистре
// и меняет его на противоположный 

const invertCase = (str) => {
    let invertedStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        invertedStr += str[i].toLowerCase();
      } else if (str[i] === str[i].toLowerCase()) {
        invertedStr += str[i].toUpperCase();
      }
    }
  
    return invertedStr;
  };
  
  invertCase('Hello, World!'); // hELLO, wORLD!
  invertCase('I loVe JS');     // i LOvE js