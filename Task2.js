function hasThree(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    num1 <= 0 ||
    num2 <= 0
  ) {
    return false;
  }
  const sum = num1 + num2;
  return num1 === 3 || num2 === 3 || sum.toString().includes('3');
}
console.log(hasThree(2, 5));
console.log(hasThree(-5, 8));
console.log(hasThree(12, 31));
module.exports = { hasThree };