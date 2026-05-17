import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import InformacaoConta from '../../pages/web/InformacaoConta.page'

And ('realizo um novo cadastro de usuário na pagian dados do usuario', () => {
    InformacaoConta.preencherformularionNovoUser()
})

And('visualizo o modal usuário criado com sucesso', () => {
    InformacaoConta.validarUsuarioCriado()
})