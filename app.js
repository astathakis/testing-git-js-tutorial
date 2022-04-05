//find
//returns single instance - in this case object
//returns first match,if no match undefined
//great for getting unique values

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'desighmer', id: 2 },
  { name: 'susy', age: 30, position: 'the boss', id: 3 },
  { name: 'sara', age: 40, position: 'cleaner', id: 4 },
];
//function by default return undefined
const names = ['bob', 'peter', 'anna'];
const person1 = names.find(function (name) {
  return name === 'zelda';
});

console.log(person1);

const person = people.find(function (per) {
  return per.id === 5;
});

console.log(person);

const person2 = people.filter(function (person) {
  return person.id === 3;
});
console.log(person2[0].name);
