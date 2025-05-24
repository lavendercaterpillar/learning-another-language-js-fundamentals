// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

const veggie = 'carrot';
let veggie = 'onion';

//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

let animals = ['tiger', 'panda', 'raccoon'];
animals.push('opossum');
console.log(animals);

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True
let dogs = {
  name: 'Sprinkles',
  age: 3
};
dogs['is friendly'] = true; //camelcase dash instead of underscore
console.log(dogs);

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

for (let num = 0; num < 5; num++) {
  console.log(num);
}

// for animal in animals:
//    print(animal)
for (const animal of animals) {
  console.log(animal);
}

// for k, v in dog.items():
//    print(f"{k}: {v}")
for (let dog in dogs) {
  console.log(dog,dogs[dog]);
}

//
//
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
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  };
};

console.log(fizzBuzz(17));
//
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
