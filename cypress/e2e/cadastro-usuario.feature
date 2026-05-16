#utf-8
#language: pt

Funcionalidade: Cadastrar usuario e validar que produto foi adicionado no carrinho
Cenario: Cadastrar usuário a dicionar produto ao carrinho
Dado que acesso o site Automation Exercise
E clico para Signup Login
E preencho os campos para cadastro
E realizo um novo cadastro de usuário na pagian dados do usuario
E visualizo o modal usuário criado com sucesso
# Quando retornar a tele inicial guardando o valor e o nome do produto 
# E adicionando Men Tshirt ao carrinho
# Então valido o nome e valor do produto no carrinho.