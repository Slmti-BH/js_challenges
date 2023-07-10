function replicate(times, number) {
  let resArr = [];

  if (times <= 0) return [];

  resArr.push(number);

  let finalArr = [...resArr, ...replicate(times - 1, number)];

  return finalArr;
}
