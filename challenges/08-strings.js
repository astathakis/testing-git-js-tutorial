/* 
## Strings #8

1.Create function fullName
2.accept two parameters "firstName","lastName"
3.add them together (concat) and return result in uppercase
4.invoke fullName and pass some values
5.log result
6.change the order of arguments
refactor to object parameter
*/

// function fullName(firstName, lastName) {
//   result = firstName + ' ' + lastName;
//   return result.toUpperCase();
// }
//console.log(fullName('tasos', 'stathakis'));
function fullName({ firstName, lastName }) {
  result = firstName + ' ' + lastName;
  return result.toUpperCase();
}

console.log(fullName({ lastName: 'Stathakis', firstName: 'tasos' }));
