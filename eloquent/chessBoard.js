//chapter2 exe2.3

let size = 8;
let xString = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      xString += ' ';
    } else xString += '#';
  }
  xString += '\n';
}
console.log(xString);
