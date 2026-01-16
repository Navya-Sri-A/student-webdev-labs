console.log('\n========== JavaScript Destructuring ==========\n');

const character = {
  first_name: 'Daenerys',
  last_name: 'Targaryen',
  house: 'Targaryen',
  culture: 'Valyrian',
  birth_year: '284 AC',
  long_name_for_place_of_birth: 'Dragonstone',
  parents: {
    mother: 'Queen Rhaella',
    father: 'King Aerys II',
  },
  dragons: ['Drogon', 'Rhaegal', 'Viserion'],
};

// Destructuring the 'first' name and the 'house'
const {
  first_name: first,
  house,
  long_name_for_place_of_birth: birth,
} = character;

console.log(`${first}'s place of birth is ${birth} and is in house ${house}`);

// Destructuring from the 'parents' object
const { mother, father } = character.parents;

console.log(`${first} of house ${house}, daughter of ${mother} and ${father}.`);
// Daenerys of house Targaryen, daughter of Queen Rhaella and King Aerys II.

const [__, dragon2, dragon3] = character.dragons;

console.log(`The two dragons who do not make it are ${dragon2} and ${dragon3}`);
// The two dragons who do not make it are Rhaegal and Viserion.

function printsSomething({ first_name: first, house }) {
  console.log(`${first} is in house ${house}`);
}

printsSomething(character);
