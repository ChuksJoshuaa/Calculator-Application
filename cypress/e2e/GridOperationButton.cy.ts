describe("GridDigitButton Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the operation button correctly", () => {
    cy.get('[data-testid="button-operation"]')
      .should("exist")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("ACC%/*-+√");
      });
  });
    
  it("should have the correct background color", function () {
    cy.get('[data-testid="button-operation"]').should("have.css", "background-color", "rgba(254, 241, 73, 0.1)");
  });
});
