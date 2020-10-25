const correct = '001100';
const input = '01100';


const S_ = input.split('').reduce((acc, curVal, index) => acc += parseInt(curVal) * (index + 1), 0);
console.log('S_:' + S_);
const a = input.split('').reduce((acc, curVal) => acc += parseInt(curVal), 0);
let counter = 0;
if (correct.length > input.length) {
  let res;
  const modS = -S_ % (correct.length + 1) >= 0 ? -S_ % (correct.length + 1) : -S_ % (correct.length + 1) + 7;
  console.log('modS:' + modS);
  if (modS === 0) {
    res = input + '0';
  }
  else if (a >= modS) {
    const index = getIndex(input, modS, '1');
    console.log('index:' + index);
    res = input.slice(0, index) + '0' + input.slice(index, input.length);
  } else {
    const index = getIndex(input, correct.length - modS, '0');
    console.log('index:' + index);
    res = index === input.length ? input + '1' : input.slice(0, index) + '1' + input.slice(index, input.length);
  }

  console.log(res);
} else if (correct.length < input.length) {
  let res;
  const T = S_ % (correct.length + 2);
  if (T === 0) {
    res = input.slice(0, input.length - 1);
  } else if (T === S_) {
    res = input.slice(1, input.length);
  } else if (T <= a) {
    const index = getIndex(input, T, '1');
    res = input.slice(0, -counter) + input.slice(-counter + 1, input.length);
  } else if (T > a) {
    for (let i = input.length - 1; i >= 0; i--) {
      counter += input[i] === '0' ? 1 : 0;
      if (counter === a) break;
    }
    res = input.slice(0, -counter) + input.slice(-counter + 1, input.length);
  } else {
    console.log('Ooops...');
  }
  
  console.log(res)
} else {
  console.log(correct === input ? input : 'Ooops...');
}


function getIndex(str, count, value) {
  if (count === 0) {
    return str.length;
  }
  let counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    counter += input[i] === value ? 1 : 0;
    if (counter === count) return i;
  }
}
