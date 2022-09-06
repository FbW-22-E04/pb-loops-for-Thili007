// Exercise 01

console.log("-------------------------------------------Exercise 01");

let sum = 0;
for (let i = 0; i <= 20; i++) {
  sum += i;
}
console.log(sum);

// Exercise 02

console.log("-------------------------------------------Exercise 02");

for (let i = 1; i <= 5; i++) {
  if (i > 1) {
    console.log(`There are ${i} bottles of beer on the table`);
  } else {
    console.log(`There is ${i} bottle of beer on the table`);
  }
}

// Exercise 03

console.log("-------------------------------------------Exercise 03");

for (i = 0; i <= 20; i++) {
  //   console.log(i);
  if (i % 2 == 0) {
    console.log(`${i} --> is even`);
  } else {
    console.log(`${i} --> is odd`);
  }
}

// Exercise 04

console.log("-------------------------------------------Exercise 04");

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    const multiplier = i * j;
    let sum = `${j} * ${i} = ${multiplier}`;

    console.log(sum);
  }
}

// Exercise 05

console.log("-------------------------------------------Exercise 05");

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Exercise 06

console.log("-------------------------------------------Exercise 06");

let sumOf3And5 = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    sumOf3And5 += i;
  }
}
console.log(sumOf3And5);

// Exercise 07

console.log("-------------------------------------------Bonus Exercise 07");

console.log("-------------------------------------------Bonus Exercise 07:01");

for (let i = 1; i <= 1000 / 100; i++) {
  console.log(100 * i);
}

console.log("-------------------------------------------Bonus Exercise 07:02");

for (let i = 0; i <= 5; i++) {
  console.log(i * 2);
}

console.log("-------------------------------------------Bonus Exercise 07:03");

for (let i = 0; i <= 5; i++) {
  console.log(i * 3);
}

console.log("-------------------------------------------Bonus Exercise 07:04");

for (let i = 9; i >= 0; i--) {
  //   mines9 + i + "";
  console.log(i);
}

console.log("-------------------------------------------Bonus Exercise 07:05");

let num1 = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    num1 = num1 + i + " ";
  }
}
console.log(num1);

console.log("-------------------------------------------Bonus Exercise 07:06");

let num2 = "";

for (let j = 0; j < 3; j++) {
  for (let i = 0; i <= 4; i++) {
    num2 = num2 + i + " ";
  }
}

console.log(num2);

// Exercise 08

console.log("-------------------------------------------Bonus Exercise 08");

let isPalindrome = "madam";

for (let i = isPalindrome.length; i <= isPalindrome.length; i++) {
  let isPalindromeReverse = isPalindrome.split("").reverse().join("");
  console.log(isPalindrome === isPalindromeReverse ? "true" : "false");
}
