class CriarUsuarioViaAPI {

    criarUsuario() {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: {
                name: "João Silva",
                email: "joao.silva@email.com",
                password: "123456",
                title: "Mr",
                birth_date: "15",
                birth_month: "08",
                birth_year: "1995",
                firstname: "João",
                lastname: "Silva",
                company: "Empresa XYZ",
                address1: "Rua das Flores, 123",
                address2: "Apto 45",
                country: "Brazil",
                zipcode: "72870-000",
                state: "GO",
                city: "Macacos",
                mobile_number: "61999999999"
            },
            failOnStatusCode: false
        }).as('responseCriacaoUsuario')
    }

    validarStatusCode() {
        cy.get('@responseCriacaoUsuario').then((response) => {
            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(201)
        })
    }

    validarMensagemDeUsuarioCriado(mensagemEsperada) {
        cy.get('@responseCriacaoUsuario').then((response) => {
            const body = JSON.parse(response.body)
            expect(body.message).to.eq(mensagemEsperada)
        })
    }

    validarEstruturaDaResponse(response) {
        cy.get('@responseCriacaoUsuario').then((response) => {
            const body = JSON.parse(response.body)
            expect(body).to.have.property('responseCode')
            expect(body).to.have.property('message')
        })
    }
}
export default new CriarUsuarioViaAPI()