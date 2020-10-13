context("login Page", () => {
  it("login com credenciais validas", () => {
    cy.visit("http://localhost:3000/login");

    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Remember-me?");
    cy.contains("Login");

    cy.get('[name="email"]').type("batatinha@batata.com");
    cy.get('[name="password"]').type("12345");
    cy.get(".sc-eCApGN").click();
  });
});
