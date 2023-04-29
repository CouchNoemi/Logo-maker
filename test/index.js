//const CLI = require("./lib/cli");

//new CLI().run();

const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    name: "text",
    message: "Enter up to three characters for the logo text:",
    type: "input",
  },
  {
    name: "textColor",
    message:
      "Enter the text color for your logo (color keyword OR a hexadecimal number):",
    type: "input",
  },
  {
    name: "shape",
    message: "Choose the shape for your logo:",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    message:
      "Enter the shape color for your logo (color keyword OR a hexadecimal number):",
    type: "input",
  },
];

inquirer.prompt(questions).then((data) => {
  const { text, textColor, shape, shapeColor } = data;
  fs.writeFile(
    "logoTest.svg",
    `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
  `,
    (err) => {
      if (err) console.log(er);
    }
  );
});
