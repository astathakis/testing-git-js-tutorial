/* 
## Objects #6

1.create a car object
2.add make, model, year,colors(array),hybrid bool keys
3.add two methods drive and stop
4.in the function body setup log with random text
5.log make
6.log first color
7.invoke both methods

*/

const car = {
  make: 'bmw',
  model: 123,
  year: 1789,
  colors: ['red', 'green', 'yellow'],
  hybrid: true,
  drive() {
    console.log('driving ..');
  },
  stop() {
    console.log('stop car');
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
