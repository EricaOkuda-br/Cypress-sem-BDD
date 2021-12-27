/// <reference types="cypress" />

/* busca.spec.js
 *Funcionalidade: Formulário e submenu
 *#CenárioA1: Acessando Login
 *Dado que acesso a págia "Bem vindo ao Site de Automação do Batista.""
 *E clico em “Formulário”
 *Então devo visualizar as opções "Criar Usuário" e "Lista de Usuários"
 */

describe("Formulário", () => {
  context(
    "Dado que acesso a página do Bem vindo ao Site de Automação do Batista. ",
    () => {
      beforeEach(() => {
        cy.visit("https://automacaocombatista.herokuapp.com/treinamento/home")
        cy.get('.orange-text')
            .should('have.text', 'Bem vindo ao Site de Automação do Batista.')
        cy.get('a[class="collapsible-header "]')
            .click()
            .should("be.visible")
            .and("contain", "Formulário");
      
      });

      it("E clico em “Formulário” ", () => {
          cy.get('a[class="collapsible-header "]')
            .click()
            .should("be.visible")
            .and("contain", "Formulário");
        });
        
        it("Então devo visualizar as opções Criar Usuário e Lista de Usuários", () => {
          cy.get('a[href="/users/new"]')
            .should("be.visible")
            .and("contain.html", "Criar Usuários");
          cy.get('a[href="/users"]')
            .should("be.visible")
            .and("contain", "Lista de Usuários");
        });
      });
    }
  );

