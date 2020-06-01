// Реализуйте функцию reverse, которая переворачивает строку. 

const reverse = (str) => {
    let counter = 1;
    let result = '';
  
    while (counter <= str.length) {
      result = result + str[str.length - counter];
      counter = counter + 1;
    }
    return result;
  }
// Эталонное решение >>>

  const reverse = (str) => {
    let i = str.length - 1;
    let result = '';
  
    while (i >= 0) {
      result += str[i];
      i -= 1;
    }
  
    return result;
  };