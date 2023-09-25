// first write function to merge 2 sorted arrays
// method 1
function mergeSortArrys(arr1, arr2) {
  let arr = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr.length < arr1.length + arr2.length) {
    if (
      !(arr1Index >= arr1.length) &&
      (arr2Index >= arr2.length || arr1[arr1Index] < arr2[arr2Index])
    ) {
      arr.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      arr.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return arr;
}

// method 2
function mergeSortedArr(arr1, arr2) {
  let arr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  return [...arr, ...arr1, ...arr2];
}

////////////////////////////////////
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return mergeSortedArr(mergeSort(leftArr), mergeSort(rightArr));
}
