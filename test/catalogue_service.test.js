const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});


describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
  });

  test("returns false if the book doesn't exist", () => {
    expect(catalogueService.checkBookByTitle("Fantastic Mr Goat")).toBe(false);
  });
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });

  test("Check if test fails if lowercase letter is provided.", () => {
    expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
  });
});

describe("catalogueService.getQuantity", () => {
  test("returns quantity of books by title. A Place of Greater Safety should return 11.", () => {
    expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
  });
});

describe("catalogueService.getBooksByAuthor", () => {
  test("returns an array of books by provided author.", () => {
    expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual(
      [
      { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 },
      { title: "2666", author: "Robert Bolaño", quantity: 17 }
      ]);
  });
});
