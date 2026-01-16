console.log('\n========== JavaScript Spread ==========\n');

const starks = ['Arya', 'Sansa', 'Jon', 'Bran'];

const copyOfStarks = [...starks];
console.log(copyOfStarks);
// [ 'Arya', 'Sansa', 'Jon', 'Bran' ]

const characters = ['Daenerys', ...starks, 'Cersei', 'Jaime', 'Tyrion'];
console.log(characters);
// [
//   'Daenerys',
//   'Arya',
//   'Sansa',
//   'Jon',
//   'Bran',
//   'Cersei',
//   'Jaime',
//   'Tyrion'
// ]
