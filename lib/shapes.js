// Base class for shapes
class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }

  generateLogo() {
    if (this.shape === "Circle") {
      return ` <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
        ${this.text}
      </text>
    </svg>`;
    } else if (this.shape === "Triangle") {
      return `<svg
     version="1.1"
     width="300"
     height="200"
     xmlns="http://www.w3.org/2000/svg"
   >
     <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">
       ${this.text}
     </text>
   </svg>`;
    } else {
      return ` <svg
       version="1.1"
       width="300"
       height="200"
       xmlns="http://www.w3.org/2000/svg"
     >
       <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />

       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
         ${this.text}
       </text>
     </svg>`;
    }
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="green" />`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, "Circle", shapeColor);
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, "Triangle", shapeColor);
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, "Square", shapeColor);
  }
}

module.exports = { Circle, Triangle, Square };
