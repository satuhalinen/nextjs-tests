describe("Navigate to Login and attempt login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
    cy.get("button").contains("Countries").click();
  });
  it("Login title should be visible", () => {
    cy.get("h1").should("contain", "Login");
  });
  it("Login with invalid credentials", () => {
    cy.get("input[placeholder='Email']").type("Something");
    cy.get("input[placeholder='Password']").type("something");
    cy.get('[data-id="login-button"]').click();
  });
  it("Login with valid credentials", () => {
    cy.get("input[placeholder='Email']").type("hijklm@hijklm.com");
    cy.get("input[placeholder='Password']").type("hijklm");
    cy.get('[data-id="login-button"]').click();
  });
});
