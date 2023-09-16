function optimizedBubbleSort(arr) {
  let swapped = false;
  for (let j = 0; j < arr.length; j++) {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  if (!swapped) {
    return arr;
  }
}

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      let temp = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547];
let optimizedRes = optimizedBubbleSort(arr);
let res = bubbleSort(arr);
console.log(optimizedRes);
console.log(res);
