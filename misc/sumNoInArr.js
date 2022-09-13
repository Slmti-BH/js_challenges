//Calculate the sum of numbers within an array

const arrSum = (arr) => {
  let sum = 0;
  arr.forEach((e) => (sum = sum + e));
  return sum;
};
const egArr = [0, 1, 4, 5];
arrSum(egArr);
// result:10
