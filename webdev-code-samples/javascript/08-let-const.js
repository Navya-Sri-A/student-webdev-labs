console.log('\n========== JavaScript let and const ==========\n');

console.log('\n========== var (must avoid using) ==========\n');
{
  console.log(quote, author);
  // undefined undefined

  var quote = 'And may the odds be ever in your favor.';
  console.log(quote);
  // And may the odds be ever in your favor.

  var author = 'Suzanne Collins';
  console.log(author);
  // Suzanne Collins

  var book = 'The Hunger Games';
  console.log(book);
  // The Hunger Games
}

console.log('\n========== let ==========\n');
{
  let quote = 'The past is not dead.';
  console.log(quote);
  // The past is not dead.

  quote = "The past is not dead. In fact, it's not even past.";
  console.log(quote);
  // The past is not dead. In fact, it’s not even past.

  let author;
  author = 'William Faulkner';
  console.log(author);
  // William Faulkner

  let book;
  console.log(book);
  // undefined
  book = 'Requiem for a Nun';
  console.log(book);
  // Requiem for a Nun
}

console.log('\n========== const ==========\n');

{
  const quote = 'My advice is, never do tomorrow what you can do today.';
  console.log(quote);
  // My advice is, never do tomorrow what you can do today.

  //   quote =
  //     'My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.';
  //   console.log(quote);
  // TypeError: Assignment to constant variable

  //   const author;
  //   console.log(author);
  //   author = 'Charles Dickens';
  // Uncaught SyntaxError: Missing initializer in const declaration

  // const book;
  // console.log(book);
  // Uncaught SyntaxError: Missing initializer in const declaration
  // book = 'David Copperfield';
  // console.log(book);
  // Uncaught SyntaxError: Missing initializer in const declaration
}

console.log('\n========== scope ==========\n');

{
  var author = 'Mary Shelley';
  let quote = 'Beware; for I am fearless, and therefore powerful.';
  const book = 'Frankenstein';
}

console.log(author);
console.log(quote);
console.log(book);

console.log('\n========== checkScope() ==========\n');

function checkScope() {
  var author = 'Victor Hugo';
  let quote = 'It is nothing to die; it is dreadful not to live.';
  const book = 'Les Miserables';

  console.log(author);
  console.log(quote);
  console.log(book);
}

checkScope();

console.log(author);
