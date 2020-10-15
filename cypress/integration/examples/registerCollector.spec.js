context("register page for collector", () => {
  it("pagina inicial carregada e virificação no header", () => {
    cy.visit("http://localhost:3000");
    //   check header in options
    cy.get(
      ":nth-child(2) > :nth-child(1) > .sc-fbIXFq > .sc-fXazxj > .sc-dvXXZy > :nth-child(3) > .sc-eKYRpg > path"
    ).click();
    cy.get(".sc-bTDODP > :nth-child(1)").click();

    cy.visit("http://localhost:3000");

    cy.get(
      ":nth-child(2) > :nth-child(1) > .sc-fbIXFq > .sc-fXazxj > .sc-dvXXZy > :nth-child(3) > .sc-eKYRpg > path"
    ).click();
    cy.get(".sc-bTDODP > :nth-child(2)").click();

    cy.visit("http://localhost:3000");

    cy.get(
      ":nth-child(2) > :nth-child(1) > .sc-fbIXFq > .sc-fXazxj > .sc-dvXXZy > .sc-hmbsMR > form > .sc-amjdv"
    ).type("Coca Cola");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .sc-fbIXFq > .sc-fXazxj > .sc-dvXXZy > .sc-hmbsMR > form > .sc-bXevSJ > .sc-jOFreG"
    ).click();

    cy.get(
      ":nth-child(2) > :nth-child(1) > .sc-fbIXFq > .sc-fXazxj > .sc-dvXXZy > .sc-jHNhIU"
    ).click();
  });

  it("pagina inicial verificada e modal testado", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Cadastre-se");
    cy.contains("IMPORTÂNCIA DA RECICLAGEM");
    cy.contains("NOSSA MISSÃO");
    //   cy.contains("Login");

    //   modal resgiter
    cy.get(".sc-ksluoS > .sc-jgPznn").click();
    cy.get('[name="nameFantasy"]').type("Alberto Junior");
    cy.get('[name="email"]').type("albertojr23@gmail.com");
    cy.get('[name="cnpj"]').type("45293458038953");
    cy.get('[name="cep"]').type("88122400");
    cy.get('[name="number"]').type("32");
    cy.get("#collector").click();
    cy.get(":nth-child(1) > .sc-fFSRdu").click();
    cy.get(":nth-child(2) > .sc-fFSRdu").click();
    cy.get(":nth-child(3) > .sc-fFSRdu").click();
    cy.get(":nth-child(4) > .sc-fFSRdu").click();
    cy.get(":nth-child(5) > .sc-fFSRdu").click();
    cy.get(":nth-child(6) > .sc-fFSRdu").click();
    cy.get(":nth-child(7) > .sc-fFSRdu").click();
    cy.get(":nth-child(8) > .sc-fFSRdu").click();
    cy.get(":nth-child(9) > .sc-fFSRdu").click();
    cy.get('[name="port"]').select("Microempresa");
    cy.get('[name="image"]').type(
      "https://2.bp.blogspot.com/-_ZJHfRE0ssE/WstEtcHtyGI/AAAAAAABCBo/QEY-2kOGEy8QG7AkIh3mFagXQIGoJaAZwCLcBGAs/s1600/cortes-de-cabelo-para-rosto-redondo-masculino%2B%25287%2529.jpg"
    );
    cy.get('[name="password"]').type("123456");
    cy.get('[name="confirmPassword"]').type("123456");
    cy.get('.sc-bqGHjH > [type="submit"]').click();

    cy.visit("http://localhost:3000");
  });
});
