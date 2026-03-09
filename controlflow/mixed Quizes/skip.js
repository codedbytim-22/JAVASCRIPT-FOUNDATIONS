//Task: Print 1–10 but skip multiples of 3
for (let num = 1; num <= 10; num++) {
  if (num % 3 === 0) {
    continue;
  }
  console.log(num);
}
