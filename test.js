const { john, ram } = require("./test1.js");
const a = require("./test2.js");
const sayHi = (name) => {
  console.log(`my name is ${name}`);
};

sayHi(john);
sayHi(ram);
