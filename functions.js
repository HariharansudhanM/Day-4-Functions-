//Print odd numbers in an array
(function oddNumber(n) {
  var array = [];
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0) {
    } else {
      array.push(i);
    }
  }
  console.log(array);
})(10);

//Convert all the strings to title caps in a string array

let str = ["hari", "haran"];

let titleCaps = function (array) {
  array.forEach((element) => {
    let title = element[0].toUpperCase() + element.slice(1);
    console.log(title);
  });
};

titleCaps(str);

// Sum of all numbers in an array

let input = [1, 15, 23, 81];

let output = input.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log(output);

//Return all the prime numbers in an array
let prime = [];
let primeNumber = (number) => {
  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (i % 2 == 0) {
      } else {
        // console.log(`${i} is a prime number`);
        prime.push(i);
      }
    }
  }
  console.log(prime);
};

primeNumber(21);
