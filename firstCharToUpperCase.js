
// Решение 

export default = (str) => {
    let result = '';
    for (let i = 0; i < length(str); i += 1) {
      if (str[i] !== ' ' && (str[i - 1] === ' ' || i === 0 )) {
        result += toUpperCase(str[i]);
      } else {
        result += str[i];
      }
    }
    return result;
  };

// 'hello, world!' -> Hello, World!

// Решение учителя

export default (str) => {
    let result = '';
    for (let i = 0; i < length(str); i += 1) {
      const shouldBeBig = (i === 0 || str[i - 1] === ' ');
      result += shouldBeBig ? toUpperCase(str[i]) : str[i];
    }
  
    return result;
  };

