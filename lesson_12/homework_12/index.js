let arrayProcessor = (inputArray, operatorOnArray) => {
  let stringArray = [];
  for (let element of inputArray) {
    stringArray.push(String(element));
  }

  return operatorOnArray(stringArray);
};

let getUpperCaseArray = (initialArray) => {
  let upperCaseStringArray = [];
  for (let stringElement of initialArray) {
    let upperElement = stringElement.toUpperCase();
    upperCaseStringArray.push(upperElement);
  }

  return upperCaseStringArray;
};

let getSumArrayLength = (initialArray) => {
  let sum = 0;

  for (let stringElement of initialArray) {
    sum += stringElement.length;
  }

  return sum;
};

let exampleArray = [
  "Red",
  "Green",
  "Black",
  23,
  undefined,
  null,
  " ",
  ["Blue"],
];

let upperCaseResult = arrayProcessor(exampleArray, getUpperCaseArray);
let arraySumResult = arrayProcessor(exampleArray, getSumArrayLength);

console.log(upperCaseResult);
console.log(arraySumResult);
