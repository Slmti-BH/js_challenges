//Create a function that reverses an array

const reverseArr = (arr) => {
  const resultArr = [];
  arr.forEach((e) => resultArr.unshift(e));
  return resultArr;
};
const egArr = [1, 2, 3, "b"];
reverseArr(egArr);
// result= ["b",3,2,1]
