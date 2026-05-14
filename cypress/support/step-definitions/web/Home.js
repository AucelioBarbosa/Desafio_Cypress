import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import Home from '../../pages/home.page'

Given('que acesso o site Automation Exercise', () => {
    cy.visit('/')
    cy.log()
});

And('clico para Signup Login', () => {
    Home.acessarLoginCadastro()
});