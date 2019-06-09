const person = {
  name: "Chris",
  age: 47,
  // to make a function in an object, no '=>' or ':'
  // also need to use 'this'
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  hobby: "boxing"
};

console.log(person.age);
person.greet();
console.log(person.hobby);
