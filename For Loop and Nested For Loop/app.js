// For Loop

// Write a for loop that prints the numbers from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }


// Write a for loop that prints the even numbers from 1 to 20.

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 === 0){
//         document.write(i + "<br>")
//     }
// }


// Write a for loop that calculates the sum of the numbers from 1 to 100.

// var a = 0;
// for (var b = 1; b <= 100; b++) {
//     a += b;
// }
// document.write(a)


// Write a for loop that prints the square of each number from 1 to 5.

// for (var num = 1; num <= 5; num++) {
//     var square = num * num;
//         document.write("The square of " + num + " is: " + square + "<br>");
// }


// Write a for loop that prints the factorial of a given number.

// var number = 5;
// var factorial = 1;
// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }
// document.write("The factorial of " + number + " is: " + factorial);


// Write a for loop that counts the number of vowels in a given string.

// var string = prompt("Enter Any Word or Sentence");
// var vowelCount = 0;
// for (let i = 0; i < string.length; i++) {
//   var char = string[i].toLowerCase();
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     vowelCount++;
//   }
// }
// document.write("The number of vowels in the string is: " + vowelCount);


// Write a for loop that prints each character of a given string in reverse order.

// var string = prompt("Enter Any Word or Sentence");
// for (var i = string.length - 1; i >= 0; i--) {
//   document.write(string[i]);
// }


// Write a for loop that prints the elements of a list in reverse order.

// var myList = ["Apple", "Banana", "Orange", "Grapes", "Kiwi", "Mango", "Water Melon"];
// for (var i = myList.length - 1; i >= 0; i--) {
//   document.write(myList[i] + "<br>");
// }


// Write a for loop that finds the maximum value in a given list of numbers.

// var numbers = [54, 45,21,76,48,34,12,97,47,34,95,123];
// var max = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// document.write("The maximum value is: " + max);


// Write a for loop that checks if a given number is prime.

// var number = prompt("Enter any Number");
// var isPrime = true;
// if (number === 1) {
//   isPrime = false;
// } else {
//   for (var i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   document.write(number + " is a prime number.");
// } else {
//   document.write(number + " is not a prime number.");
// }


// Nested For Loop

// write a nested for loop that prints the numbers from 1 to 10 in the following pattern:

// for (var i = 1; i <= 4; i++) {
//     var pattern = "";
//     for (var j = 1; j <= i; j++) {
//       pattern += i + " ";
//     } 
//     document.write(pattern + "<br>");
// }
  

// Write a nested for loop that prints the multiplication table from 1 to 5, like this:

// for (var i = 1; i <= 5; i++) {
//     var row = "";
//     for (var j = 1; j <= 5; j++) {
//       row += (i * j) + " ";
//     }
//     document.write(row + "<br>");
// }
  

// Write a nested for loop that generates a triangle pattern of asterisks (*) with 5 rows, like this:

// for (var i = 1; i <= 5; i++) {
//     var pattern = "";
//     for (var j = 1; j <= i; j++) {
//       pattern += "*";
//     }
//     document.write(pattern + "<br>");
// }


// Write a nested for loop that prints the following pattern of numbers:

// for (var i = 1; i <= 4; i++) {
//     var pattern = "";
//     for (var j = 1; j <= i; j++) {
//       pattern += (i * j) + " ";
//     }
//     document.write(pattern + "<br>");
// }  



// Write a nested for loop that prints the prime numbers between 1 and 100.



// Write a nested for loop that generates a hollow square pattern of asterisks (*) with 6 rows and columns, like this:

// for (var i = 0; i < 6; i++) {
//     var line = "";
//     if (i === 0 || i === 5) {
//       line = "******";
//     } else {
//       line = "* &nbsp &nbsp &nbsp &nbsp*";
//     }
//     document.write(line + "<br>");
// }
  
// triangle pattern

// var i,j,k;
// for (i = 1; i <= 5; i++) {
//     for (k = 1; k <= (5-i); k++) {
//         document.write("&nbsp")
//     }
//     for (j = 1; j <= i; j++) {
//         document.write("* ")
//     }
//     document.write("<br>")
// }