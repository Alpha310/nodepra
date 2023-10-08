const { readFile, writeFile } = require("fs");

/*const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync("./content/first1.txt", `Here is the result ${first},${second}`);*/

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error");
  }
  console.log(result);
});

writeFile("./content/subfolder/second1.txt", "Hi sandhya", (err, data) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Hi sandhya");
  }
});
