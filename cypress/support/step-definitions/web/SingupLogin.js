import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import SingupLogin from '../../pages/SingupLogin.page'

When('realizo um novo cadastro de usuário', () => {

   SingupLogin.preencherCamposParaCadastro()

});
