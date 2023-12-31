const os = require("os");

//info about the current user
console.log(os.userInfo());

//method returns the system uptime in seconds
console.log(`the system runs ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
