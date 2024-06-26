// {/* <img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

// # JS-04 Arrays and Loops

//  <br/>
//  <br/>

// Open up a text editor of your choice and complete the following Javascript exercises.

// ### Exercise #3

// Write a JavaScript program to construct the following pattern, using a nested for loop.

// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

// console.log("*");
// console.log("* *");
// console.log("* * *");
// console.log("* * * *");
// console.log("* * * * *");

for (let i = 1; i < 6; i++) {
  console.log("* ".repeat(i));
}

// ### Exercise #4

// Write while loops to do the following:

// ```
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// ```
let x = 100;
while (x > 0) {
  console.log(x);
  x -= 0.5;
}

// ```
// - Print all the odd numbers between 1 - 100.
// ```

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

let numForOdd = 1;

while(numForOdd <= 100){
    if (numForOdd % 2 != 0) {
        console.log(numForOdd);
      }
      numForOdd++;
}

// ```
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// ```
let i = 1;
let n = 20;

while (i <= n) {
  console.log(`[${i}]`);
  i++;
}

// ```
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
// ```

let sum = 0;
let nSum = 19;
let iSum = 1;
while (iSum <= nSum) {
  sum += iSum;
  iSum++;
}

console.log(sum);
