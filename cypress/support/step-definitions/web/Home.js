import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import Home from '../../pages/home.page'
import CarrinhoPage from '../../pages/Carrinho.page';

Given('que acesso o site Automation Exercise', () => {
    cy.visit('/')
    cy.log()
});

And('clico para Signup Login', () => {
    Home.acessarLoginCadastro()
});

And('retornar a tele inicial guardando o valor e o nome do produto', () => {
      CarrinhoPage.capturarDadosProduto()
});
