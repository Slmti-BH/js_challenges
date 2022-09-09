// Print all even numbers from 0 – 10
const printEvenNo = (a, b) => {
  //  assumption b>=a
  //   loop from a to b, print if %2 =0
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
printEvenNo(0, 10);
