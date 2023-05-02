const { Square, Triangle, Circle } = require("../lib/shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';

    const newCircle = new Circle("SUV", "red", "black");
    const result = `<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="100" r="80" fill="black" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">
       SUV
      </text>
    </svg>`;

    expect(newCircle.render()).toEqual(expectedSvg);
  });
  it("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
  });
});

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
  });
});

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
  });
});
