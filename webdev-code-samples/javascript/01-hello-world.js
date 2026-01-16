console.log('\n========== JavaScript Hello World ==========\n');
console.log('Hello there 👋');

// Can we call printDate() on line 5?
// printDate();

function printDate() {
  const today = new Date();
  console.log(`Today's date is ${today}`);
}

printDate();

// Can we call todaysDate() on line 15?
// todaysDate();

const todaysDate = function printTodaysDate() {
  console.log(`Today's date is ${new Date()}`);
};

todaysDate();
