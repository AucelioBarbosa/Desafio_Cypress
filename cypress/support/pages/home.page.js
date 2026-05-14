import {elementoHome as el} from '../elements/elementsHome.js'

class Home {
    acessarLoginCadastro(){
        cy.get(el.CADASTRO_LOGIN).click()
    }
}
export default new Home()