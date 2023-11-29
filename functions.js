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

//Return all the palindromes in an array
let palindrome = (array) => {
  array.forEach((element) => {
    for (let i = 0; i < element.length / 2; i++) {
      // validate the first and last characters are same
      if (element[i] !== element[element.length - 1 - i]) {
        console.log("Its not a palindrome");
      } else {
        console.log("its is a palindrome " + element);
      }
    }
  });
};

palindrome(["hari", "madam"]);

//Remove duplicates from an array
let duplicates = (input) => {
  let unique = [];
  input.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
    return unique;
  });
  console.log(unique);
};

duplicates(["hari", "tharaney", "arun", "hari", "ranjani", "yaswanth", "arun"]);
