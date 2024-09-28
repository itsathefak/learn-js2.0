// Factory Functions
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, my name is ${this.name}, and my age is ${this.age}`);
    },
  };
  return person;
}

let p1 = personMaker("Athef", 24);
let p2 = personMaker("Pandu", 25);
