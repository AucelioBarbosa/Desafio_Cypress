import elementoHome,{elementoHome, produtoSelecionado}  from '../elements/elementsHome.js'

class Home {
    acessarLoginCadastro() {
        cy.get(el.CADASTRO_LOGIN)
        .click()
    }

    guardarValorENomeDoProduto() {
        cy.get(produtoSelecionado.NOME_ITEM).invoke('text').as('nomeProduto')
        cy.get([produtoSelecionado.VALOR_ITEM]).invoke('text').as('valorProduto')
    }

    clicarBotaoAddCarrinho() {
        cy.get(produtoSelecionado.BOTAO_ADD_CARRINHO).click()
    }

    validarModalProdutoAdicionadoAcessarCarrinho(){
        cy.get(produtoSelecionado.MODAL_TITLE).should('contain', 'Added!')
        cy.get(produtoSelecionado.BOTAO_ACC_CART_MODAL).click()
    }
}
export default new Home()