import React from "react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  let mockHook;

  beforeEach(() => {
    mockHook = () => ({
      sendMessage: cy.stub().as("sendMessage"),
      contactError: null,
      contactSuccess: null,
    });
  });

  it("renders with all the required components", () => {
    cy.mount(<ContactForm useContactHook={mockHook} />);

    cy.get("form").should("exist");

    cy.get('input[name="username"]')
      .should("exist")
      .and("have.attr", "required");

    cy.get('input[name="email"]')
      .should("exist")
      .and("have.attr", "type", "email")
      .and("have.attr", "required");

    cy.get('textarea[name="message"]')
      .should("exist")
      .and("have.attr", "required");

    cy.get('button[type="submit"]').should("exist");
  });

  it("handles user input", () => {
    cy.mount(<ContactForm useContactHook={mockHook} />);

    cy.get('input[name="username"]').type("Test").should("have.value", "Test");
    cy.get('input[name="email"]')
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get('textarea[name="message"]')
      .type("Message")
      .should("have.value", "Message");
  });

  it("calls sendMessage on form submit", () => {
    cy.mount(<ContactForm useContactHook={mockHook} />);

    cy.get('input[name="username"]').type("John");
    cy.get('input[name="email"]').type("john@test.com");
    cy.get('textarea[name="message"]').type("Hello");

    cy.get("form").submit();

    cy.get("@sendMessage").should("have.been.calledOnce");
  });


    it("shows contact error when contactError is provided", () => {
    const errorHook = () => ({
      sendMessage: cy.stub(),
      contactError: "Помилка відправлення повідомлення",
      contactSuccess: null,
    });

    cy.mount(<ContactForm useContactHook={errorHook} />);

    cy.get(".contact-error")
      .should("exist")
      .and("contain.text", "Помилка відправлення повідомлення");
  });

    it("shows contact success when contactSuccess is provided", () => {
    const successHook = () => ({
      sendMessage: cy.stub(),
      contactError: null,
      contactSuccess: "Повідомлення успішно відправлено!",
    });

    cy.mount(<ContactForm useContactHook={successHook} />);

    cy.get(".contact-success")
      .should("exist")
      .and("contain.text", "Повідомлення успішно відправлено!");
  });

   it("clears form after successful submit", () => {
    const successHook = () => ({
      sendMessage: cy.stub().as("sendMessage").resolves({ success: true }),
      contactError: null,
      contactSuccess: null,
    });

    cy.mount(<ContactForm useContactHook={successHook} />);

    cy.get('input[name="username"]').type("John");
    cy.get('input[name="email"]').type("john@test.com");
    cy.get('textarea[name="message"]').type("Hello");

    cy.get("form").submit();

    cy.get('input[name="username"]').should("have.value", "");
    cy.get('input[name="email"]').should("have.value", "");
    cy.get('textarea[name="message"]').should("have.value", "");
  });

    it("does not clear form on unsuccessful submit", () => {
    const failHook = () => ({
      sendMessage: cy.stub().as("sendMessage").resolves({ success: false }),
      contactError: null,
      contactSuccess: null,
    });

    cy.mount(<ContactForm useContactHook={failHook} />);

    cy.get('input[name="username"]').type("John");
    cy.get('input[name="email"]').type("john@test.com");
    cy.get('textarea[name="message"]').type("Hello");

    cy.get("form").submit();


    cy.get('input[name="username"]').should("have.value", "John");
    cy.get('input[name="email"]').should("have.value", "john@test.com");
    cy.get('textarea[name="message"]').should("have.value", "Hello");
  });
});