/*
Создайте функцию getZippedArrays.
У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
Функция должна собирать из этих двух массивов объект и возвращать его. 

Каждому элементу из массива ключей соответствует элемент из массива значений.

*/

// Мое решение

const getZippedArrays = (keyArray, valueArray) => {
    let obj = {};
    
    for (let i = 0; i < keyArray.length; i++) {
      obj[keyArray[i]]++;
      for (let j = 0; j < valueArray.length; j++) {
        if (i === j) {
          obj[keyArray[i]] = valueArray[j];
        }
      }
    }
    
    return obj;
  }


// Мое решение отличается от эталонного тем, что я не додумался и упустил важную 
// деталь из условия аздачи, а именно то, что каждому эл-ту массива с ключами
// соответствует элемент из массива значений. 
// Два цикла в задаче ни к чему, т.к. массивы равны обойтись можно одним циклом.

// Эталонное решение 

const getZippedArrays = function(keysArray, valuesArray) {
    let obj = {};
    for (let i = 0; i < keysArray.length; i++) {
      obj[keysArray[i]] = valuesArray[i];
    }  
    return obj;
  }
  
getZippedArrays(["name","surname","address"], ["Асисяй","Котовий","Йошкар-Ола"]);


keysArray = ["name","surname","address"];
valuesArray = ["Асисяй","Котовий","Йошкар-Ола"];

keys = ["country","city","month","arrivalDay","departureDay"];
values =["Португалия","Синтра","июль","5","10"];

// Используем метод forEach

function getZippedArrays2(keysArray, valuesArray) {
  let obj = {};
  keysArray.forEach( (prop, i) => obj[prop] = valuesArray[i] );
  return obj;
}

getZippedArrays2(keysArray, valuesArray);



// Используем метод reduce()

const getZippedArrays = (keys, values) =>
  keys.reduce(
    (acc, cur, i) => {
      acc[cur] = values[i];
      return acc;
    }, {});

getZippedArrays(keys, values)

