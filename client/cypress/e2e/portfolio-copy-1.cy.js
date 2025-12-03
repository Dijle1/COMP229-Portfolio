describe("Portfolio Website E2E Test", () => {
  const url = "https://sprightly-nougat-088007.netlify.app";

  it("Loads the home page", () => {
    cy.visit(url);
    cy.contains("Home").should("be.visible");
  });

  it("Navigates to Projects page", () => {
    cy.visit(url);
    cy.contains("Projects").click();
    cy.url().should("include", "projects");
  });

  it("Navigates to Contact page", () => {
    cy.visit(url);
    cy.contains("Contact").click();
    cy.url().should("include", "contact");
  });
});
