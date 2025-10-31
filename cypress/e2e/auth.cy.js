describe("Navigation", () => {
  it("should redirect after logout", () => {
    cy.visit("http://localhost:3000/api/auth/signout");
    cy.get("#submitButton")
      .click()
      .then(() => {
        cy.url().should("eq", "http://localhost:3000/");
      });
  });
});
