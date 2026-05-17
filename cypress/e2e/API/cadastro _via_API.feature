#utf-8
#language: pt

Funcionalidade: Cadastrar usuario e via API

Cenário: Criar um usuário via API com dados válidos
  Dado que eu envie uma requis criação para criar usuário para a API
  Quando o status code retornado deve ser "201"
  E a mensagem de sucesso deve ser "User created!"
  Então valide a estrutura da resposta de criação do usuário