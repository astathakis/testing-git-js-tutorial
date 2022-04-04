// Template literals - ES6+
// Interpolation ${} - insert expression(value)

const name = 'john';
const age = 25;
const sentence = "Hey it 's " + name + ' and he is ' + age;

const value = `hey it 's ${name} and he is ${age}. and here is some math ${
  4 + 4
}`;

console.log(value);
console.log(sentence);
