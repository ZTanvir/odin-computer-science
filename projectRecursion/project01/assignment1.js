// Fibonacci sequence with iteration
const fibs = (fibsN) => {
  let fibSeq = [0, 1];
  for (let i = 2; i <= fibsN; i++) {
    let fibI = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq = fibSeq.concat(fibI);
  }
  return fibSeq;
};
