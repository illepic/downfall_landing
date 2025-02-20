describe("Downfall tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verifies title", () => {
    // cy.get('.df-expando').should('have.css', 'max-height', '0')
    cy.contains("Thank you, <Downfall>");
  });

  it("Opens Discord link", () => {
    cy.get(".df-info__article.discord").as("discord").should("not.be.visible");

    cy.contains("Discord").click();
    cy.url().should("include", "/#discord");

    cy.get("@discord", { timeout: 1500 }).should("be.visible");

    cy.get("@discord")
      .contains("Join the <Downfall> Discord here")
      .should("be.visible");

    cy.get(".df-info__close").click();

    cy.get("@discord", { timeout: 500 }).should("not.be.visible");
  });

  it("Opens Facebook link", () => {
    cy.get(".df-info__article.facebook")
      .as("facebook")
      .should("not.be.visible");

    cy.contains("Facebook").click();
    cy.url().should("include", "/#facebook");

    cy.get("@facebook", { timeout: 1500 }).should("be.visible");

    cy.get("@facebook").contains("Join us on Facebook").should("be.visible");

    cy.get(".df-info__close").click();

    cy.get("@facebook", { timeout: 500 }).should("not.be.visible");
  });

  it("Opens Archive link", () => {
    cy.get(".df-info__article.archive").as("archive").should("not.be.visible");

    cy.contains("Archive").click();
    cy.url().should("include", "/#archive");

    cy.get("@archive", { timeout: 1500 }).should("be.visible");

    cy.get("@archive")
      .contains("the old <Downfall> guild website")
      .should("be.visible");

    cy.get(".df-info__close").click();

    cy.get("@archive", { timeout: 500 }).should("not.be.visible");
  });

  it("Opens contact form", () => {
    cy.get(".df-info__article.contact").as("contact").should("not.be.visible");

    cy.contains("Contact").click();
    cy.url().should("include", "/#contact");

    cy.get("@contact", { timeout: 1500 }).should("be.visible");

    cy.get("@contact").contains("Keep in touch").should("be.visible");

    cy.get(".df-info__close").click();

    cy.get("@contact", { timeout: 500 }).should("not.be.visible");
  });

  it("Submits contact form", () => {
    cy.visit("#contact");
    cy.get(".df-info__article.contact").as("contact");

    // cy.contains("Contact").click();
    cy.url().should("include", "/#contact");

    cy.get("@contact", { timeout: 1500 }).should("be.visible");

    cy.get("@contact").contains("Keep in touch").should("be.visible");

    cy.get("#name").type("Cypress Test");
    cy.get("#name").should("have.value", "Cypress Test");

    cy.get("#email").type("valid@email.com");
    cy.get("#email").should("have.value", "valid@email.com");

    cy.get("#message").type("Hello this is a message.");
    cy.get("#message").should("have.value", "Hello this is a message.");

    // cy.get("#contact-submit").click(); // Figure out submitting only on prod

    cy.get(".df-info__close").click();

    cy.get("@contact", { timeout: 500 }).should("not.be.visible");
  });
});
