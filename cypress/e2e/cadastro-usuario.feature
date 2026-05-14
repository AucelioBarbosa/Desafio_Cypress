#utf-8
#language: pt

Funcionalidade: Cadastrar usuario e validar que produto foi adicionado no carrinho
Cenario: Cadastrar usuário
Dado que acesso o site Automation Exercise
E clico para Signup Login
Quando realizo um novo cadastro de usuário
# Então devo visualizar o usuário logado com sucesso

# Cenario: Validar produto no carrinho
#     Dado que estou na tele inicial
#     E seleciono View Product ao localizar o produto "Men Tshirt"
#     E devo visualizar os detalhes de nome e preço do produto
#     E adiciono o produto ao carrinho
#     E devo visualizar a mensagem de sucesso ao adicionar produto
#     Quando clico em meu carrinho
#     Então devo validar os dados de nome e valor do produto no carrinho