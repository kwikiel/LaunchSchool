const isOdd = function(num) {
  if (Math.abs(num) % 2 === 1) {
    return true;
  }
  return false;
};

for (let i = 1; i <= 99; i++ ) {
  if (isOdd(i)) {
    console.log(i);
  }
}
