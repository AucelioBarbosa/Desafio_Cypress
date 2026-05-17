import { elementoLogin as el } from '../../elements/elementoLogin';

class SingupLogin {

    preencherCamposParaPrecadastro() {
        this.incerirNome('Valentim')
        this.incerirEmail('valentim@example.com')
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