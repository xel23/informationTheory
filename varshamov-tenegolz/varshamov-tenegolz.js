const input = '10001';
const S_ = input.split('').reduce((acc, curVal) => acc += parseInt(curVal), 0);

const modS = -S_ % (input.length + 1) >= 0 ? -S_ % (input.length + 1) : -S_ % (input.length + 1) + 7;

if (S_ >= modS) {
  
} else {
  
}
