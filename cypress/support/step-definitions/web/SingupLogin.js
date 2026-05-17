import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import SingupLogin from '../../pages/web/SingupLogin.page'

And('preencho os campos para cadastro', () => {
   SingupLogin.preencherCamposParaPrecadastro()
})


