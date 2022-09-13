// Sort an array from lowest to highest
const sortArr=(arr)=>{
  if(!arr.length){
    return arr;  
  }
  const pivot=arr[arr.length-1];
  const leftArr=[]; 
  const rightArr=[];
  
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      leftArr.push(arr[i])
    }else{
      rightArr.push(arr[i])
    }
  }
  return [...sortArr(leftArr),pivot,...sortArr(rightArr)]
};

const egQuick=[1,0,5,58,25,-200,30,21];
sortArr(egQuick);
// result [-200,0,1,5,21,25,30,58]



