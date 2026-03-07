/*
FizzBuzz Lite

Print numbers from 1 to 20:

If divisible by 3 → print "Fizz"

If divisible by 5 → print "Buzz"

If divisible by both 3 and 5 → print "FizzBuzz"

Else → print the number itself
 */

for (let i = 1; i <= 20; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
