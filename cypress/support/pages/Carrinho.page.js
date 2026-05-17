export const Carrinho = {
  NOME_ITEM_TABLE: '.table tbody tr:eq(0) td:eq(1) > h4',
  VALOR_ITEM_TABLE: '.table tbody tr:eq(0) td:eq(2) > p',

  VALOR_ITEM: ':nth-child(4) > .product-image-wrapper h2:eq(0)',
  NOME_ITEM: ':nth-child(4) > .product-image-wrapper p:eq(0)',
  BOTAO_ADD_CARRINHO: ':nth-child(4) > .product-image-wrapper a:eq(0)',
}

// Variáveis globais
const dados = {
  nome: '',
  valor: '',
}

class CarrinhoPage {

  capturarDadosProduto() {

    cy.get(Carrinho.NOME_ITEM, { timeout: 10000 })
      .invoke('text')
      .then((texto) => {

        dados.nome = texto.trim()

        cy.log(`Nome capturado: ${dados.nome}`)
      })

    cy.get(Carrinho.VALOR_ITEM, { timeout: 10000 })
      .invoke('text')
      .then((texto) => {

        dados.valor = texto.trim()

        cy.log(`Valor capturado: ${dados.valor}`)
      })
  }

  clicarBotaoAddCarrinho() {
    cy.get(Carrinho.BOTAO_ADD_CARRINHO).click()
  }

  validarProdutoAdicionadoAoCarrinho() {

    cy.get(Carrinho.NOME_ITEM_TABLE)
      .invoke('text')
      .then((nomeCarrinho) => {

        expect(nomeCarrinho.trim()).to.equal(dados.nome)
      })

    cy.get(Carrinho.VALOR_ITEM_TABLE)
      .invoke('text')
      .then((valorCarrinho) => {

        expect(valorCarrinho.trim()).to.equal(dados.valor)
      })

    cy.log('Produto adicionado ao carrinho com sucesso')
  }
}

export default new CarrinhoPage()