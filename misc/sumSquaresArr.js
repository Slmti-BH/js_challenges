function SumSquares(arr){
    let sum=0;

    for(let i=0; i<arr.length;i++){
        if(typeof arr[i]!=='object'){
            sum+=arr[i]*arr[i];
        }
        else{ sum+=SumSquares(arr[i])}
    }

    return sum;
}