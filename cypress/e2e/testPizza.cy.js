import pizzaData from "../../src/components/pizzaData";

describe("Pizza Sipariş Formu Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Sadece bir boyut mu seçili", () => {
    const sizes = pizzaData.sizeChoose;
    cy.get(`[data-cy=radio-${sizes[0]}]`).check();
    cy.get(`[data-cy=radio-${sizes[0]}]`).should("be.checked");
    for (let i = 1; i < sizes.length; i++) {
      cy.get(`[data-cy=radio-${sizes[i]}]`).should("not.be.checked");
    }
  });

  it("Sadece bir hamur kalınlığı seçili", () => {
    const sides = pizzaData.sideSelection;
    cy.get("#sideChoose").select(sides[0]);
    cy.get("#sideChoose").should("have.value", sides[0]);
    for (let i = 1; i < sides.length; i++) {
      cy.get("#sideChoose").should("not.have.value", sides[i]);
    }
  });

  it("Ad Soyad alanı doldurulduğunda hata mesajı görülmemeli", () => {
    cy.get("#isim").type("Alperen Mimarlar");
    cy.get("[data-cy=nameError]").should("not.exist");
  });

  it("Ad Soyad alanı boş bırakıldığında hata mesajı görülmeli", () => {
    cy.get("#isim").type("alperen").clear();
    cy.get("[data-cy=nameError]").should("exist");
  });

  it("En az 4 malzeme seçildiğinde hata mesajı görünmemeli", () => {
    const ingredients = pizzaData.ingredientsData;
    for (let i = 0; i < 4; i++) {
      const ingredient = ingredients[i];
      cy.get(`[data-cy=checkbox-${ingredient}]`).check({
        force: true,
      });
    }
    cy.get("[data-cy=ingredientsError]").should("not.exist");
  });

  it("ek malzeme seçilmediğinde sipariş ver butonu disabled olmalı", () => {
    cy.get(`[data-cy=radio-${pizzaData.sizeChoose[0]}]`).check();
    cy.get("#sideChoose").select(pizzaData.sideSelection[1]);
    cy.get("#isim").type("Alperen Mimarlar");
    cy.get("[data-cy=submit]").should("be.disabled");
  });

  it("Ek malzeme seçildiğinde sipariş ver butonu aktif olmalı", () => {
    const ingredients = pizzaData.ingredientsData;
    cy.get(`[data-cy=radio-${pizzaData.sizeChoose[1]}]`).check();
    cy.get("#sideChoose").select(pizzaData.sideSelection[2]);
    cy.get("#isim").type("Alperen Mimarlar");
    for (let i = 0; i < 4; i++) {
      const ingredient = ingredients[i];
      cy.get(`[data-cy=checkbox-${ingredient}]`).check({ force: true });
    }
    cy.get("[data-cy=submit]").should("not.be.disabled");
    cy.get("[data-cy=submit]").click();
  });
});
