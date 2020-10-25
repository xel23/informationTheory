const input = '01001';
const S_ = input.split('').reduce((acc, curVal, index) => acc += parseInt(curVal) * (index + 1), 0);
const modS = -S_ % (input.length + 2) >= 0 ? -S_ % (input.length + 2) : -S_ % (input.length + 2) + 7;
let res;
let counter = 0;
if (modS === 0) {
  res = input;
}
else if (S_ >= modS) {
  for (let i = input.length - 1; i >= 0; i--) {
    counter += input[i] === '1' ? 1 : 0;
    if (counter === modS) break;
  }
  res = input.slice(0, -counter) + '0' + input.slice(-counter, input.length);
} else {
  for (let i = input.length - 1; i >= 0; i--) {
    counter += input[i] === '0' ? 1 : 0;
    if (counter === modS) break;
  }
  res = input.slice(0, -counter) + '1' + input.slice(-counter, input.length);
}

console.log(res);
