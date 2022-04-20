const SpiderMan = require("./../app/spiderman");

describe("Unit Tests for Spiderman class", () => {
  test("1) Create an Spiderman object", () => {
    const andrewGarfield = new SpiderMan(
      "Spiderman Sony",
      31,
      "Andrew Garfield",
      2,
      "Sony"
    );
    expect(andrewGarfield.nombre).toBe("Spiderman Sony");
    expect(andrewGarfield.edad).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.numPeliculas).toBe(2);
    expect(andrewGarfield.estudio).toBe("Sony");
  });
  test("2) Use the method getInfo()", () => {
    const tomHolland = new SpiderMan(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
  });
});
