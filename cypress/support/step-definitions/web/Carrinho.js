import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import CarrinhoPage from '../../pages/web/Carrinho.page'
import Home from '../../pages/web/home.page'


And('adicionando Men Tshirt ao carrinho',()  =>{
     CarrinhoPage.clicarBotaoAddCarrinho()
     Home.validarModalProdutoAdicionadoAcessarCarrinho()
})

Then('valido o nome e valor do produto no carrinho', () => {
    CarrinhoPage.validarProdutoAdicionadoAoCarrinho()
})