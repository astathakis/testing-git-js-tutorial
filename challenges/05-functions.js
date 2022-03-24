/*
## functions #5

1.Create calculateTotal
2.add two params subTotal, tax
3.rerurn sum of params

4.create 3 vars order123
5.call calculateResult, pass in some values and assign result to each order
6.log the orders
7.refactor function to function expression
*/

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

// function expression anonymous
const calculateTotalexp = function random(subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotalexp(2, 4);
const order2 = calculateTotalexp(3, 3);
const order3 = calculateTotalexp(4, 3);

const orders = [order1, order2, order3];

console.log(orders);
