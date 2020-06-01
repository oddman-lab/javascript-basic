// Мое решение не до конца работащее 
// Не работоспособность заключается в том, что
// Если после первой проверки число > 2 символов -- повторного сложения не происходит 

const addDigits = (num) => {
  let numToString = num.toString();
  let result = 0;

  for (let i = 0; i < numToString.length; i++) {
    console.log('Берем цифры из числа: ', numToString[i]);
    result += parseInt(numToString[i]);
    }
  
  let checkResult = result.toString();
  let newResult = 0;

  console.log('Получаем результат: ', result, typeof(result));

  if (checkResult >= 2) {
    for (let i = 0; i < checkResult.length; i++) {
      newResult += parseInt(checkResult[i]);
      console.log(typeof(checkResult[i]));
    }
    console.log(newResult);
  }
};

addDigits(123); // -> 6
addDigits(34567); // -> 7  
addDigits(2134); // -> 1
addDigits(2135); // -> 2
addDigits(51231); // -> 3
addDigits(598997686567); // -> 4 
// ^ в моем случае получается 13 т.к. не происходит повторного суммирования

// Эталонное решение учителя

const sum = (str) => {
    let result = 0;
    for(let i = 0; i < str.length; i++) {
      result += Number(str[i]);
    }
    
    return result;
  }
  
  const addDigits = (num) => {
    let result = num;
    while(result >= 10) { // Не до конца ясно, какого ляда используется такое условие while
      result = sum(result.toString());
    }
    return result;
  }

  