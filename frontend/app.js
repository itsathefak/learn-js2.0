// Factory Functions
// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}, and my age is ${this.age}`);
//     },
//   };
//   return person;
// }

// let p1 = personMaker("Athef", 24);
// let p2 = personMaker("Pandu", 25);

// New Operators

// Constructors

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, My Name is ${this.name}, and my age is ${this.age}`);
// };

// let p1 = new Person("Athiii", 24);
// let p2 = new Person("Pandu", 25);

// Using Classes - it always has a constructor inside it

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  talk() {
    console.log(`Hi, my Name is ${this.name}, and my age is ${this.age}`);
  }
}

let p1 = new Person("Athiii", 24);
let p2 = new Person("Pandu", 25);
