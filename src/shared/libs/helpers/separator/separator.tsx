export const separator = (value: string | number) => {
  let stringValue = value.toString().split('');
  let separatorValue;
  if (stringValue.length > 3) {
    let separatorArr = [];
    stringValue.reverse();
    for (let i = 1; i <= stringValue.length; i++) {
      separatorArr.push(stringValue[i - 1]);
      if (i === 3 || i % 6 === 0) {
        separatorArr.push(' ');
      }
    }
    separatorValue = separatorArr.reverse().join('');
  } else {
    separatorValue = stringValue;
  }
  return separatorValue;
};
