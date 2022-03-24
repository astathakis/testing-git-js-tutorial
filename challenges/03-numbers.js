/* ## Numbers #3
1.Create score1,score2,score3 assign values 0-100
2.create total and avg and log them
3.create plates and people 20 and 7 calculate the remainder
4.add one to remaining plates

*/

const score = 20;
const score1 = 30;
const score2 = 50;

const total = score + score1 + score2;
const avg = total / 3;

// console.log(total);
// console.log(avg);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;

console.log(remainingPlates);

remainingPlates++;

console.log(remainingPlates);

let message = 'There are ' + remainingPlates + ' ' + 'plates available';
console.log(message);
