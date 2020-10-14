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
      .then(($el) => {
        expect($el).to.not.be.false;
      });
    cy.contains("Discord").click();
    cy.url().should("include", "/#discord");

    cy.get("@discord").then(($el) => {
      expect($el).to.be.visible;
    });

    cy.get("@discord")
      .contains("Join the <Downfall> Discord here")
      .then(($el) => {
        expect($el).to.be.visible;
      });

    cy.get(".df-info__close").click();
    // cy.wait(500);
    cy.get("@discord", { timeout: 500 }).then(($el) => {
      expect($el).to.not.be.visible;
    });
  });
});
