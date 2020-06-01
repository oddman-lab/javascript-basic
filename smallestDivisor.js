// Реализуйте тело функции smallestDivisor, используя итеративный процесс. 
// Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.
// Доп. условие: делитель должен быть больше единицы, за исключением случая, 
// когда аргументом является единица (наименьшим делителем которой является также единица).


//  Рекурсивный вариант 

const smallestDivisor = (num) => {
      const iter = (counter, acc) => {
      if (counter % acc === 0) {
              return acc;
          }
          else if (counter === 1) {
        return counter;
      } 
  
          return iter(counter, acc+1);
    }
      return iter(num, 2);
  };
  
// Итеративный вариант

const smallestDivisor = (num) => {
    if (num < 1) {
      return NaN;
    }
    if (num === 1) {
      return num;
    }
  
    let divisor = 2;
  
    while (num % divisor !== 0) {
      divisor = divisor + 1;
    }
  
    return divisor;
  };
   