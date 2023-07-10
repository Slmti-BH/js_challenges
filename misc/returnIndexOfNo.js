function search(arr, number) {
  if (!arr.includes(number)) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) return i;
  }
}


