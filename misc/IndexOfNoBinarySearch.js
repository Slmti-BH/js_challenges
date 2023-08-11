function search(arr, number,start,end) {
  if (!arr.includes(number)) return -1;

  let med = Math.floor((start + end)/2);
  if (number===arr[med]) return med;
  
  else if (number > arr[med]) {
    return search(arr, number,med+1,arr.length-1);
  }
  else if (number < arr[med]) {
    return search(arr, number,start,med-1);
  } 
}

let res = search([1, 2, 3, 4, 5], 5,0,5);

console.log(res);
