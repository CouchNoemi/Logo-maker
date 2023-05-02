//const CLI = require("./lib/cli");

//new CLI().run();

const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("../lib/shapes");

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

  let updatedText = text ? text.slice(0, 3) : "SVG";
  let updatedTextColor = textColor ? textColor : "red";
  let updatedShapeColor = shapeColor ? shapeColor : "black";

  let LOGO;
  if (shape == "Square")
    LOGO = new Square(updatedText, updatedTextColor, updatedShapeColor);
  else if (shape == "Triangle")
    LOGO = new Triangle(updatedText, updatedTextColor, updatedShapeColor);
  else LOGO = new Circle(updatedText, updatedTextColor, updatedShapeColor);

  fs.writeFile("logo.svg", LOGO.generateLogo(), (err) => {
    if (err) console.log(er);
  });
});
