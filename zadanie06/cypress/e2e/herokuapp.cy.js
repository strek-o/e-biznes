describe("## Zadanie 6", () => {
  it("Should load the main page", () => {
    cy.visit("/");
    cy.get("h1.heading").should("contain.text", "Welcome to the-internet");
  });

  // ---

  it("Should add elements when clicking the 'Add Element' button", () => {
    cy.visit("/add_remove_elements/");
    cy.get("button[onclick='addElement()']").click().click().click();
    cy.get(".added-manually").should("have.length", 3);
  });

  it("Should remove elements when clicking the 'Delete' button", () => {
    cy.visit("/add_remove_elements/");
    cy.get("button[onclick='addElement()']").click().click();
    cy.get(".added-manually").should("have.length", 2);
    cy.get(".added-manually").first().click();
    cy.get(".added-manually").should("have.length", 1);
  });

  // ---

  it("Should check the first checkbox", () => {
    cy.visit("/checkboxes");
    cy.get('input[type="checkbox"]').first().should("not.be.checked").check();
    cy.get('input[type="checkbox"]').first().should("be.checked");
  });

  it("Should uncheck the second checkbox", () => {
    cy.visit("/checkboxes");
    cy.get('input[type="checkbox"]').eq(1).should("be.checked").uncheck();
    cy.get('input[type="checkbox"]').eq(1).should("not.be.checked");
  });

  // ---

  it("Should select 'Option 1' from the dropdown", () => {
    cy.visit("/dropdown");
    cy.get("#dropdown").select("Option 1");
    cy.get("#dropdown").should("have.value", "1");
  });

  it("Should select 'Option 2' from the dropdown", () => {
    cy.visit("/dropdown");
    cy.get("#dropdown").select("Option 2");
    cy.get("#dropdown").should("have.value", "2");
  });

  // ---

  it("Should remove the checkbox when clicking the 'Remove' button", () => {
    cy.visit("/dynamic_controls");
    cy.get("#checkbox").should("exist");
    cy.get("#checkbox-example button").click();
    cy.get("#checkbox", { timeout: 10000 }).should("not.exist");
  });

  it("Should enable the input field when clicking the 'Enable' button", () => {
    cy.visit("/dynamic_controls");
    cy.get("#input-example input").should("be.disabled");
    cy.get("#input-example button").click();
    cy.get("#input-example input", { timeout: 10000 }).should("be.enabled");
  });

  // ---

  it("Should log in with valid credentials and redirect to the secure area", () => {
    cy.visit("/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/secure");
    cy.get("#flash").should("contain.text", "You logged into a secure area!");
  });

  it("Should log out of the secure area correctly", () => {
    cy.visit("/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get(".button.secondary").click();
    cy.url().should("include", "/login");
    cy.get("#flash").should(
      "contain.text",
      "You logged out of the secure area!",
    );
  });

  it("Should display an error when logging in with an invalid username", () => {
    cy.visit("/login");
    cy.get("#username").type("admin");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get("#flash").should("contain.text", "Your username is invalid!");
  });

  it("Should display an error when logging in with an invalid password", () => {
    cy.visit("/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("admin");
    cy.get('button[type="submit"]').click();
    cy.get("#flash").should("contain.text", "Your password is invalid!");
  });

  // ---

  it("Should display user information when hovering over a figure", () => {
    cy.visit("/hovers");
    cy.get(".figure").first().trigger("mouseover");
    cy.get(".figure").first().find("h5").should("contain.text", "name: user1");
  });

  // ---

  it("Should input a number into a number input field", () => {
    cy.visit("/inputs");
    cy.get('input[type="number"]').type("2137");
    cy.get('input[type="number"]').should("have.value", "2137");
  });

  // ---

  it("Should display a JavaScript alert when clicking the 'JS Alert' button", () => {
    cy.visit("/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.get("#result").should(
      "contain.text",
      "You successfully clicked an alert",
    );
  });

  it("Should dismiss the JavaScript confirmation dialog when clicking 'Cancel'", () => {
    cy.visit("/javascript_alerts");
    cy.on("window:confirm", () => false);
    cy.get("button[onclick='jsConfirm()']").click();
    cy.get("#result").should("contain.text", "You clicked: Cancel");
  });

  it("Should display a JavaScript prompt when clicking the 'JS Prompt' button", () => {
    cy.visit("/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("qwerty");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("contain.text", "You entered: qwerty");
  });

  // ---

  it("Should detect the pressing of the 'X' key", () => {
    cy.visit("/key_presses");
    cy.get("#target").type("{X}");
    cy.get("#result").should("contain.text", "You entered: X");
  });

  // ---

  it("Should display information for a 200 status code", () => {
    cy.visit("/status_codes");
    cy.contains("a", "200").click();
    cy.get("p").should("contain.text", "This page returned a 200 status code");
  });
});
