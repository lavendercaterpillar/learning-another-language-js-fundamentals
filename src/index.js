// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

// const veggie = 'carrot';
// let veggie = 'onion';

//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

// let animals = ['tiger', 'panda', 'raccoon'];
// animals.push('opossum');
// console.log(animals);


// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True
// let dogs = {
//   name: 'Sprinkles',
//   age: 3
// };
// dogs['is friendly'] = true; //camelcase dash instead of underscore
// console.log(dogs);

//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

// for (let num = 0; num < 5; num++) {
//   console.log(num);
// };

// for animal in animals:
//    print(animal)

// for (const animal of animals) {
//   console.log(animal);
// };

// for k, v in dog.items():
//    print(f"{k}: {v}")
// for (let dog in dogs) {
//   console.log(dog,dogs[dog]);
// };

//
// ===================================
//       Ternary Operator
// ===================================
// rewrite the following code using ternary operator
// let temperature = 30;
// let temperatureStatus;

// if (temperature > 25) {
//   temperatureStatus = 'Hot';
// } else {
//   temperatureStatus = 'Cool';
// }

let temperature = 30;
const temperatureStatus = temperature > 25 ? 'Hot' : 'Cool';
console.log(temperatureStatus);

// ===================================
//       SWITCH STATEMENTS
// ===================================

//  Problem 2: Grade Evaluator
// Write a switch statement that takes a grade (A, B, C, D, F) and prints a message:

//  A → "Excellent"
//  B → "Good"
//  C → "Average"
//  D → "Below Average"
//  F → "Fail"
//  Any other input → "Invalid grade"

// let grade = 'B';
// switch (grade) {
// case 'A':
//   console.log('Excellent');
//   break;
// case 'B':
//   console.log('Good');
//   break;
// case 'C':
//   console.log('Average');
//   break;
// case 'D':
//   console.log('Below Average');
//   break;
// case 'F':
//   console.log('Fail');
//   break;
// default:
//   console.log('Invalid grade');
//   break;
// }


// // Prompt:
// // Given a color value (`"red"`, `"yellow"`, or `"green"`), print the action:

// //  red → "Stop"
// //  yellow → "Slow down"
// //  green → "Go"
// //  Any other → "Invalid color"

// let color = 'pink';

// switch (color) {
// case 'red':
//   console.log('Stop');
//   break;
// case 'yellow':
//   console.log('Slow Down');
//   break;
// case 'green':
//   console.log('Go');
//   break;
// default:
//   console.log('Invalid Color');
// }

//  Problem 4: Simple Calculator
// You are given two numbers and an operator. Write a switch statement that performs the correct operation:
// `+`, `-`, `*`, `/`
// If the operator is not recognized, print `"Invalid operator"`.

// Input Example

// ```javascript
// let num1 = 10;
// let num2 = 5;
// let operator = "*";
// ```


//
// ===================================
//       The ARRAY MAPPING
// ===================================

// 1. Given an array of numbers, use .map() to return a new array where each number is squared.
// const arr = [2, 4, 6, 8];
// const squareNum = arr.map((num) => num ** 2);

// console.log(squareNum);

// // 2. Convert Celsius to Farenheit
// const celsiusTemps = [0, 10, 20, 30];
// const fahrenheitTemps = celsiusTemps.map((x) => x * 1.8 + 32);
// // Results: [32, 50, 68, 86]

// console.log(fahrenheitTemps);
// celsiusTemps.map((x) => x * 1.8 + 32);  //Where does it go?!


// 3. Given an array of lowercase strings,
// return a new array with each word capitalized (first letter uppercase, rest lowercase).
//
const words = ['hello', 'world', 'javascript'];

const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();;
const capitalizeList = words.map(capitalizeWord);


console.log(capitalizeList);

// 4. Given an array of user names, return a new array of objects, each with a name and
// an automatically assigned id (starting from 1).
const users = ['Ali', 'Sara', 'Zahra'];

const usersDict = users.map((user,index) => ({id:index +1, name:user}));

console.log(usersDict);

// Expected output [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Zahra" }
// ]

// Example
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 }
];
const updatedPeople = people.map(person => {
  return {
    ...person,  // Check this line
    isAdult: person.age >= 18
  };
});

console.log(updatedPeople);

// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num


// Old way: Function Declaration
// const fizzBuzz = function(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   } else {
//     return num;
//   }
// };

//
// ES6 way: Function Expression
// const fizzBuzz = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   } else {
//     return num;
//   };
// };

// console.log(fizzBuzz(17));
//
// ======================
//       Arr.forEach()
// ======================
const names = ['Ali', 'Sara', 'Zahra'];

names.forEach((name, index) => {
  console.log(`#${index + 1}: ${name}`);
});


// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"
