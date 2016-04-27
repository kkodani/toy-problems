function reverseInteger (n) {
  var reverse = 0;
  while(n !== 0) {
    reverse = reverse * 10;
    reverse = reverse + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverse;
}
