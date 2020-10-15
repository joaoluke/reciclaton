context("register page for company", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
      })
    
      it('testes com as dimençoes da tela', () => {
        // https://on.cypress.io/viewport

        cy.viewport(320, 480)
    
    
        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999)
    
        // cy.viewport() accepts a set of preset sizes
        // to easily set the screen to a device's width and height
    
        // We added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)
    
        cy.viewport('macbook-15')
        cy.wait(200)
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.wait(200)
        cy.viewport('ipad-mini')
        cy.wait(200)
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.wait(200)
        cy.viewport('iphone-4')
        cy.wait(200)
        cy.viewport('iphone-3')
        cy.wait(200)
    
        // cy.viewport() accepts an orientation for all presets
        // the default orientation is 'portrait'
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)
    
        // The viewport will be reset back to the default dimensions
        // in between tests (the  default can be set in cypress.json)
      })
    it("pagina inicial executada", () => {
      cy.visit("http://localhost:3000");
  
      cy.contains("Cadastre-se");
      cy.contains("IMPORTÂNCIA DA RECICLAGEM");
      cy.contains("NOSSA MISSÃO");
    //   cy.contains("Login");
  
    
    //   modal resgiter
      cy.get(".sc-ksluoS > .sc-jgPznn").click();
      cy.get('[name="nameFantasy"]').type("The Coca-Cola Company");
      cy.get('[name="email"]').type("cocacola@comercial.com.br");
      cy.get('[name="cnpj"]').type("45997418000153");
      cy.get('[name="cep"]').type("22250040");
      cy.get('[name="number"]').type("4098");
      cy.get('#company').click();
      cy.get('[name="branch"]').select('Industria');
      cy.get('[name="port"]').select('Empresa de Grande Porte');
      cy.get('[name="site"]').type("https://www.cocacolabrasil.com.br/");
      cy.get('[name="image"]').type("https://www.trabalhosescolares.net/wp-content/uploads/2014/05/Coca-Cola.jpg");
      cy.get('[name="password"]').type("Coca123+_Cola");
      cy.get('[name="confirmPassword"]').type("Coca123+_Cola");
      cy.get('.sc-bqGHjH > [type="submit"]').click();
    });
  });
  