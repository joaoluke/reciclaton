context("login Page", () => {
    it("login com credenciais validas", () => {
      cy.visit("http://localhost:3000/login");
  
      cy.get('[name="email"]').type("joaolucas.deoliveira56@gmail.com");
      cy.get('[name="password"]').type("123456");
      cy.get(".sc-eCApGN").click();
      

      cy.visit("http://localhost:3000/profile/872");
    //   check profile
      cy.get('.sc-jcwofb > :nth-child(1)').click();
      cy.get('[name="nome"]').type("João");
      cy.get('[name="email"]').type("joao@gmail.com");
      cy.get('[name="foto"]').type("http://image.fromweb.com")
      cy.get('.sc-efHXLn').type("Ele é um pessimo profissional, não gostei do serviço dele.");
      cy.get('.sc-dPaNSN').click();

      
    });
  });
  