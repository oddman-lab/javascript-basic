// Костыль-нога

var getSortedArray = function (arrayOfObjects, key) {
    var swap;
    for (var i = 0; i < arrayOfObjects.length - 1; i ++) {
      
      for (var j = i + 1; j < arrayOfObjects.length; j ++) {
        if (arrayOfObjects[j][key] < arrayOfObjects[i][key]) {
          swap = arrayOfObjects[i];
          arrayOfObjects[i] = arrayOfObjects[j];
          arrayOfObjects[j] = swap;
        }
      }
      
    }
    return (arrayOfObjects);
  };
  
  getSortedArray([{"name":"Василий","age":6},{"name":"Виктор","age":4},{"name":"Пётр","age":8},{"name":"Иннокентий","age":1}], 'age');


  // Эталон
// const getSortedArray = (array, key) => array.sort((a,b) => a[key] - b[key]);