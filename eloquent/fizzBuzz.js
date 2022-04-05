//chapter 2 exe 2.2

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 == 0) output += 'Fizz';
  if (i % 5 == 0) output += 'Buzz';
  //if output holds a string it strue and returns left operand of or else returns the right one
  console.log(output || i);
}
