//arrays and for loop

const names = ['anna', 'susy', 'bob', 'johnc'];
const lastName = 'shakeandbake';
let newArray = [];

for (i = 0; i < names.length; ) {
  newArray.push(`${names[i]} ${lastName}`);
  i++;
}
console.log(newArray);

//functions, return, if,arrays,for loop

const gas = [20, 60, 10];
const food = [30, 60, 20];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}
calculateTotal(food); // pass an array remember

//build chess board
let grid = Number(prompt('enter the size', '8'));
console.log(grid);

//let gridSize = 8;
let gridSize = grid;
let board = ' ';
for (y = 0; y < gridSize; y++) {
  for (let x = 0; x < gridSize; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

//4onsole.log('this is \n new line');
console.log(board);
