describe('Calculator App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the initial value as 0', () => {
    cy.get('[data-testid="output"]').should('have.text', '0');
  });

  it('should perform addition correctly', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="output"]').should('have.text', '3');
  });

  it('should perform subtraction correctly', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="output"]').should('have.text', '2');
  });

  it('should perform multiplication correctly', () => {
    cy.get('button').contains('4').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="output"]').should('have.text', '12');
  });

  it('should perform division correctly', () => {
    cy.get('button').contains('8').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="output"]').should('have.text', '4');
  });

  it('should clear the input when AC is pressed', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains('AC').click();
    cy.get('[data-testid="output"]').should('have.text', '0');
  });

  it('should delete the last digit when C is pressed', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('C').click();
    cy.get('[data-testid="output"]').should('have.text', '0');
  });

  it('should calculate percentage correctly', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('%').click();
    cy.get('[data-testid="output"]').should('have.text', '0.5');
  });

  it('should calculate square root correctly', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('√').click();
    cy.get('[data-testid="output"]').should('have.text', '3');
  });

  it('should handle decimal input correctly', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('[data-testid="output"]').should('have.text', '4');
  });
});