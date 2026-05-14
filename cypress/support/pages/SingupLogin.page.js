import { elementoLogin as el } from '../elements/elementoLogin.js'
class SingupLogin {


    preencherCamposParaCadastro() {
        this.incerirNome('jose')
        this.incerirEmail('jj.neto@testqa.com.br')
        this.clicarBotaoSingup()
    }

    incerirNome(nome) {
        cy.get(el.NOME).type(nome)
    }

    incerirEmail(email) {
        cy.get(el.ENDERECO_EMAIL).type(email)
    }

    clicarBotaoSingup() {
        cy.get(el.BOTAO_CADASTRO).click()
    }

}
export default new SingupLogin()