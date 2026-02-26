// Java Script method : ceil(), round(), floor()
// Usage : The math object when combined with .ceil(), .round(), .floor() helps in handling decimal numbers
// When : Can be used to convert decimal numbers to whole numbers

const calculatePerecentage = (input) => {
  const diffPercentage = input - Math.floor(input);

  if (diffPercentage >= 0.5) {
    return Math.ceil(input);
  } else {
    return Math.floor(input);
  }
};

console.log(calculatePerecentage(90.34));
// returns the value 90 as 90.34 is lesser than half of decimal point

console.log(calculatePerecentage(95.78));
// returns the value 96 as 95.78 is greater than half of decimal point

console.log(calculatePerecentage(98.5));
// returns the rounded off value 99 as 98.5 is half of decimal point
