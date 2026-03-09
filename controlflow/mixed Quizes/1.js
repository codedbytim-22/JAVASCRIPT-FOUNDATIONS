/*
FizzBuzz Simple

Use a for loop from 1 to 15:

Divisible by 3 → print "Fizz"

Divisible by 5 → print "Buzz"

Divisible by both → print "FizzBuzz"

Otherwise → print the number
*/
for (let num = 1; num <= 15; num++) {
  if (num % 15 === 0) {
    console.log(`Fizzbuzz`);
  } else if (num % 3 === 0) {
    console.log(`Fizz`);
  } else if (num % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(num);
  }
}
