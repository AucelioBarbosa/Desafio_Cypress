import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import CriarUsuarioViaAPI from "../../pages/API/CriarUsuarioViaAPI";


let responseCriacaoUsuario;

Given('que eu envie uma requis criação para criar usuário para a API', () => {
    CriarUsuarioViaAPI.criarUsuario()
})

Then('o status code retornado deve ser {string}' , (statusCodeEsperado) => {
     CriarUsuarioViaAPI.validarStatusCode()})

Then('a mensagem de sucesso deve ser {string}', (mensagemEsperada) => {
  CriarUsuarioViaAPI.validarMensagemDeUsuarioCriado(mensagemEsperada)
})

Then('valide a estrutura da resposta de criação do usuário', () => {
    CriarUsuarioViaAPI.validarEstruturaDaResponse()
})