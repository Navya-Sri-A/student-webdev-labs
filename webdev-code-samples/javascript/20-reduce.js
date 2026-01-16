console.log('\n========== JavaScript reduce() ==========\n');

// Initial array
const array = [1, 2, 3, 4, 5, 6];

// Reducer function
const reducer = (acc, curr) => acc + curr;

// acc  |  curr
// ============
// 0    |   1       apply reducer function => 0 + 1 = 1
// 1    |   2                              => 1 + 2 = 3
// 3    |   3                              => 3 + 3 = 6
// 6    |   4                              => 6 + 4 = 10
// 10   |   5                              => 10 + 5 = 15
// 15   |   6                              => 15 + 6 = 21

// return value => 21

let result = array.reduce(reducer);

console.log(result);
// 21

sum = array.reduce(reducer, 50);

console.log(sum);
// 71

const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
  { id: 22, name: 'Jamie', house: 'Lannister' },
  { id: 23, name: 'Tyrion', house: 'Lannister' },
];

// Return the sum of all ids in the characters array
const ids = characters.reduce((acc, curr) => acc + curr.id, 0);

console.log(ids);
// 103

// Return the number of characters in each house
const houses = characters.reduce((acc, curr) => {
  acc.hasOwnProperty(curr.house) ? acc[curr.house]++ : (acc[curr.house] = 1);

  return acc;
}, {});

console.log(houses);
// { Stark: 5, Lannister: 2 }
