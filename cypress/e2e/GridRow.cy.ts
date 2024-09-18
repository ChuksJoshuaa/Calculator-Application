describe('GridRow Component', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should render digit buttons', () => {
    const digits = [1];
    digits.forEach(digit => {
      cy.get(`[data-testid=button-${digit}]`, { timeout: 10000 }).should('exist');
    });
  });

  it('should render operation button', () => {
    cy.get('[data-testid=button-operation]', { timeout: 10000 }).should('exist');
  });
});
