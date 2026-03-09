/*Write code to check if a number (assign a variable n) is prime.

Print "Prime" if it is, "Not Prime" if not.

Use a for loop inside if statements.
*/
let num = 10;
let isPrime = true;

if (num < 2) {
  isPrime = false; // 0 and 1 are not prime
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false; // found a divisor
      break; // stop checking further
    }
  }
}

if (isPrime) {
  console.log('Prime');
} else {
  console.log('Not prime');
}
