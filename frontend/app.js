//  Inheritance

// Parent Class
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  talk() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

// Child class

class Student extends Person {
  //Student class is inheriting the functions and objects from parent class
  constructor(name, age, marks) {
    super(name, age); //Parent class constructor is being called
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let stu1 = new Student("Athiii", 24, 95);

let tea1 = new Teacher("Pandu", 25, "GIS");
