describe("Portfolio Website E2E Test", () => {
  it("Loads the home page", () => {
    cy.visit("https://sprightly-nougat-088007.netlify.app");
    cy.contains("DA").should("exist");
  });

  it("Navigates to Projects page", () => {
    cy.get("a").contains("Projects").click();
    cy.url().should("include", "/projects");
  });

  it("Navigates to Contact page", () => {
    cy.get("a").contains("Contact").click();
    cy.url().should("include", "/contact");
  });
});
