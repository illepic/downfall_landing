describe("Downfall tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verifies title", () => {
    cy.contains("Thank you, <Downfall>");
  });

  it("Opens Discord link", () => {
    cy.get(".df-info__article.discord")
      .as("discord")
      .should('not.be.visible')

    cy.contains("Discord").click();
    cy.url().should("include", "/#discord");

    cy.get("@discord", {timeout: 1500}).should('be.visible')

    cy.get("@discord")
      .contains("Join the <Downfall> Discord here")
      .should('be.visible')

    cy.get(".df-info__close").click();

    cy.get("@discord", { timeout: 500 }).should('not.be.visible')
  });
});
