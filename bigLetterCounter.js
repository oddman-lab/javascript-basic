const bigLettersCount = (str) => {
    let res = ''; // чтобы мое решение было верным, мне было необходимо
                  // установить res не строкой, а int. 
                  // Кроме того, изменить и обновление этой переменной в инструкции if
    for (let i = 0; i <= str.length - 1; i += 1) {
      if (str[i] === str[i].toUpperCase() || str[i] === ' ') {
        // здесь ошибка в том, что я записывал непосредственно буквы,
        // подходящие в условие, а не кол-во выполненых условий 
        // инструкции if 
        // str[i] –– нужно заменить на res += 1;
        res += str[i];
      }
      return res.length;
    }
   
  };
  
bigLettersCount('dfwe r D');
bigLettersCount(' I FcKd');

// Эталонное решение учителя 
  
const bigLettersCount = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
      let char = str[i];
      if (char.toUpperCase() === char||" " === char) {
        result += 1;
      }
    }
    return result;
  };