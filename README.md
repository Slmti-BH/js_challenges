1.Problem: 1-Print all even numbers from 0 – 10


[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/printEvenNumbers.js)


2.Problem: Create a length converter function from kilometers to miles

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/lengthConverter.js)


3.Problem: Calculate the sum of numbers within an array

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/sumNoInArr.js)

4.Problem: Create a function that reverses an array

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/reverseArr.js)

5.Problem: Sort an array from lowest to highest

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/sortArr.js)

**FreeCodeCamp: JavaScript Algorithms and Data Structures**

6.Problem: Return the factorial of the provided integer. Only integers greater than or equal to zero will be supplied to the function.

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/factorializeNumber.js)

**Recursion exercises**

7.Problem: Given a multi-dimensional integer array, return the total number of integers, stored inside this array. 

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/arrTotalNoIntegers.js)

8.Problem:Write a function that sums squares of numbers in list that may contain more lists

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/sumSquaresArr.js)

9.Problem: You need to design a recursive function called replicate which will receive arguments times and number.

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/recursiveReplication.js)

10.Problem: Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/returnIndexOfNo.js)

11.Problem: Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/stringifyNumbersRecursion.js)

12.Problem: Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/nestedEvenSum.js)

13.Problem: write bubble sort algorithm

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/bubbleSort.js)

14.Problem: insertion sort

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/insertionSort.js)

15.Problem: selection sort

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/selectionSort.js)

16. Problem: Merge Sort

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/mergeSort.js)

17. Problem: Quick Sort

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/quickSort.js)

18.Problem: Singly Linked list: push method

[Solution](https://github.com/Slmti-BH/js_challenges/blob/main/misc/singlyLikedListPush.js)

19.Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string.
Solution:
function uncompress(str){
    let resArr=[];
    for(let i=0;i<str.length;i+=2){
        for(let j=1;j<=str[i+1];j++){
            resArr.push(str[i]);
        }
    }
    return resArr.join("");
}

20.Write a function tripletTrue that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.
Solution:
function tripletTrue(str){
    if(str.length<3) return false;
    for(let i=0; i<str.length-2;i++){
        if(str[i]===str[i+1] && str[i+1]===str[i+2]) return true;
        
    } 
    
    return false;
}
21.Write a function sillyString that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.
solution:
function sillyString(str){
    let resArr=[];
    let vow=['a','e','o','i','u']
    for(let i=0; i<str.length;i++){
        let char=str[i];
        if(vow.includes(str[i])){
           char=`${str[i]}b${str[i]}`
        }
        resArr.push(char);
    }
    return resArr.join('');
}
