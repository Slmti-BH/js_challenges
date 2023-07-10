function realSize(arrays){
    let count=0;
    
    for(let l=0;l<arrays.length;l++){
      if(typeof arrays[l]==='object'){
     count+= realSize(arrays[l]);
      }
     else count++;
    }
    return count
  }

//   { "input": [], "expected": 0 },
//       { "input": [[]], "expected": 0 },
//       { "input": [1, [1]], "expected": 2 },
//       { "input": [1, [], 2, [], 3, []], "expected": 3 },
//       { "input": [0, [1, [5, [4, 3], 1], 1]], "expected": 7 },
//       { "input": [[[5], 3], 0, 2, [], [4, [5, 6]]], "expected": 7 }