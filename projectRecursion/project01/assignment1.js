// Fibonacci sequence with iteration
const fibs = (fibsN) => {
  let fibSeq = [0, 1];
  for (let i = 2; i <= fibsN; i++) {
    let fibI = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq = fibSeq.concat(fibI);
  }
  return fibSeq;
};

// Fibonacci sequence with recursion
const fibsRec = (fibsN) => {
  let fibArr = [];

  for (let i = 0; i < fibsN; i++) {
    const fibNumber = (n) => {
      // base case
      if (n === 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      }
      //  recursive function
      else {
        return fibNumber(n - 1) + fibNumber(n - 2);
      }
    };
    fibArr = fibArr.concat(fibNumber(i));
  }
  return fibArr;
};
