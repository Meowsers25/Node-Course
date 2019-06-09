const name = "Chris";
var age = 47;
const hasHobbies = true;

// examples of arrow functions
const user = (name, age, hasHobbies) => {
  return (
    "User " + name + " is " + age + " years old. Has hobbies: " + hasHobbies
  );
};

console.log(user(name, age, hasHobbies));

// same line when only using one return statement
const add = (a, b) => a + b;

console.log(add(2, 3));

// if you use only 1 parameter, no parens
const addOne = a => a + 1;
console.log(addOne(3));
