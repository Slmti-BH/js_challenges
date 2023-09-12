function nestedEvenSum(obj){
    let sum=0;

    for(var key in obj){
        if(typeof obj[key]==='number' && obj[key] % 2===0){
            sum+=obj[key];
        }
        else if(typeof obj[key]==='object'){
            sum+= nestedEvenSum(obj[key]);
        }
    }

    return sum;
}