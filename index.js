var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message1 = chalk.underline("Underline Hello") + chalk.yellow("World");
console.log(message1);

const error = chalk.bold.red;
console.log(error('Error!'));

var message3 = "Hello " + chalk.dim("World");
console.log(message3);

var message4 = "Hello " + chalk.bgYellow("Yellow");
console.log(message4);

var message5 = "Hello " + chalk.bgYellowBright("Bright Yellow");
console.log(message5);