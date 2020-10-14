const M = 4;
const N = Math.pow(2, M);
const H = [];
const curN = Math.floor(N / 2);
for (let i = 1; i < M + 1; i++) {
  let cur = [];
  let flag = false;
  for (let j = 0; j < N; j++) {
    if (j % Math.pow(2, M - i) === 0) {
      flag = !flag;
    }
    if (flag) {
      cur.push(0);
    } else {
      cur.push(1);
    }
  }
  cur.shift();
  H.push(cur)
}

console.log(H);
