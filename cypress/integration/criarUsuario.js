/// <reference types="cypress"/>

const criarUsuario = require("../fixtures/criarUsuario.json");

describe("Criar usuario", () => {
  beforeEach(() => {
    //! >>>>>> URL da pagina a ser testada <<<
    cy.visit("https://automacaocombatista.herokuapp.com/treinamento/home")
    cy.get('.orange-text')
        .should('have.text', 'Bem vindo ao Site de Automação do Batista.')
    cy.get('a[class="collapsible-header "]')
        .click()
        .should("be.visible")
        .and("contain", "Formulário");

  });

  criarUsuario.forEach((item, index) => {
    it(`${index + 1} - Cadastro de usuário`, () => {
      cy.get('a[href="/users/new"]')
      .should("be.visible")
      .and("contain.html", "Criar Usuários").click()
      cy.get("#user_name").type(item.nome);
      cy.get('#user_lastname').type(item.ultimoNome)
      cy.get('#user_email').type(item.email)
      cy.get('#user_address').type(item.endereco)
      cy.get('#user_university').type(item.universidade)
      cy.get('#user_profile').type(item.profissao)
      cy.get('#user_gender').type(item.genero)
      cy.get('#user_age').type(item.idade)

      cy.get('input[value="Criar"]').click()
      cy.get('.row.center').should('contain', 'Usuário Criado com sucesso')


    });

    });
  });

