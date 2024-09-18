describe("GridDigitButton Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the digit button correctly", () => {
    cy.get('[data-testid="button-1"]')
      .should("exist")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("7894561230.");
      });
  });

  it("should have the correct background color", function () {
    cy.get('[data-testid="button-1"]').should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );
  });
});
