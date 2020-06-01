const reverseInt = (num) => {
    let counter = 1;
    let result = '';
    let stringNum = num.toString();
    if (stringNum[0] === '-') {
      result += stringNum[0];
    }
    while (counter <= stringNum.length) {
      result = result + stringNum[stringNum.length - counter];
      counter += 1;
    }
    console.log(parseInt(result));
  }


reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98