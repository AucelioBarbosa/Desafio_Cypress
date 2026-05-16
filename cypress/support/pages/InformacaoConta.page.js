import { elementoInformacaoConta as inforUser } from "../elements/elementoInformacaoConta"
// import { UserDataFaker as userData } from "../Util/UserDataFaker"

const tipoSexo = 'male'

class InformacaoConta {

    preencherformularionNovoUser() {
        this.radioTipoSexo(tipoSexo)
        this.preencherCampoPassword(123456)
        this.preencherDataNascimento('10', 'May', '1990')
        this.preencherPrimeioNome('Valentim')
        this.preencherSegundoNome('Santos')
        this.preencherCampoAddress('Rua dos Bobos, 0')
        this.selecionarCampoCountry('United States')
        this.preencherCampoState('California')
        this.preencherCampoCity('Los Angeles')
        this.preencherCampoZipcode('90001')
        this.preencherCampoMobile('1234567890')
        this.clicarBotaoCreateAccount()
    }

    radioTipoSexo(sextype) {
        if (sextype === 'male') {
            cy.get(inforUser.RAIDO_MR).click()
        } else {
            cy.get(inforUser.RADIO_MRS).click()
        }
    }

    preencherCampoPassword(password) {
        cy.get(inforUser.CAMPO_SENHA)
            .type(password)
    }


    preencherDataNascimento(dia, mes, ano) {
        cy.get(inforUser.CAMPO_DIA_NACIMENTO).select(dia)
        cy.get(inforUser.CAMPO_MES_NACIMENTO).select(mes)
        cy.get(inforUser.CAMPO_ANO_NACIMENTO).select(ano)
    }

    preencherPrimeioNome(firstName) {
        cy.get(inforUser.CAMPO_PRIMEIO_NOME)
            .type(firstName)
    }

    preencherSegundoNome(lastName) {
        cy.get(inforUser.CAMPO_SOBRENOME)
            .type(lastName)
    }

    preencherCampoAddress(address) {
        cy.get(inforUser.CAMPO_ENDERECO)
            .type(address)
    }

    selecionarCampoCountry(country) {
        cy.get(inforUser.CAMPO_PAIS)
            .select(country)
    }


    preencherCampoState(state) {
        cy.get(inforUser.CAMPO_ESTADO).type(state)
    }

    preencherCampoCity(city) {
        cy.get(inforUser.CAMPO_CIDADE)
            .type(city)
    }

    preencherCampoZipcode(zipcode) {
        cy.get(inforUser.CAMPO_CODIGO_POSTAL).type(zipcode)
    }

    preencherCampoMobile(mobile) {
        cy.get(inforUser.CAMPO_NUMERO_CELULAR).type(mobile)
    }

    clicarBotaoCreateAccount() {
        cy.get(inforUser.BOTAO_CRIAR_CONTA)
            .click()
    }

    validarUsuarioCriado() {

        if (cy.get(inforUser.MENSAGEM_CONTA_CRIADA).should('be.visible')) {
            cy.log('Usuário criado com sucesso!')
            cy.get(inforUser.BOTAO_CONTINUAR)
                .click()
        } else {
            cy.log('Falha ao criar o usuário.')
            cy.close()
        }

    }
}
export default new InformacaoConta()