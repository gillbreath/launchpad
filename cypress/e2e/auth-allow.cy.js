describe("Navigation", () => {
  const baseUrl = Cypress.config().baseUrl;

  beforeEach(()=>{
    cy.visit("/api/auth/signin");
    cy.get("#input-email-for-password-provider").type("test@example.com");
    cy.get("#input-password-for-password-provider").type("password");
    cy.get(`button[type="submit"]`).click();
  });

  it("should have a cookie after successful auth", () => {
    cy.getCookie("next-auth.callback-url").should("have.property", "value", "http%3A%2F%2Flocalhost%3A3000");
  });

  it("should return 200 from protected apis after successful auth", () => {
    cy.request({
      method: "GET",
      url: "/api/protected",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should not redirect protected routes after successful auth", () => {
    cy.visit("/dashboard");
    cy.url().should("eq", baseUrl + "/dashboard");
  });

});
