function insertionSort(arr){
  
    for(let i=1;i<arr.length; i++){
    let currentValue=arr[i];
      for(let j=i-1;j>=0;j--){
        if(arr[j]>currentValue){
          arr[j+1]=arr[j];
          arr[j]=currentValue;
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
  let inputArr = [5, 2, 4, 6, 1, 3];
  
  insertionSort(inputArr);