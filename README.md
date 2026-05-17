# 🚀 Desafio Cypress

Projeto de automação de testes desenvolvido com **Cypress** utilizando a arquitetura **Page Objects** e integração com **Cucumber (BDD)**.

O objetivo deste projeto é validar fluxos Web e API simulando cenários reais de cadastro de usuários, navegação e validações automatizadas.

---

## 📌 Sobre o Projeto

Este projeto foi criado como parte de um desafio prático de automação de testes com foco em:

- Automação de testes E2E
- Estrutura escalável com Page Objects
- Escrita de cenários em BDD utilizando Gherkin
- Integração de testes Web e API
- Organização de elementos, páginas e steps
- Boas práticas de automação com Cypress

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Cypress
- Cucumber / Gherkin
- Faker.js
- Node.js

---

## 📂 Estrutura do Projeto

```bash
Desafio_Cypress
│
├── cypress
│   ├── e2e
│   │   ├── API
│   │   └── web
│   │
│   ├── fixtures
│   │
│   ├── plugins
│   │
│   └── support
│       ├── elements
│       ├── pages
│       └── step-definitions
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## ✅ Funcionalidades Automatizadas

### 🌐 Testes Web

- Cadastro de usuário
- Navegação entre páginas
- Fluxo de login
- Interações com carrinho
- Validação de informações da conta

### 🔌 Testes de API

- Criação de usuário via API
- Validação de respostas
- Automação de requisições HTTP

---

## 🧱 Arquitetura Utilizada

O projeto segue o padrão **Page Object Model (POM)** para melhorar:

- Reutilização de código
- Organização dos testes
- Facilidade de manutenção
- Escalabilidade da automação

### Estrutura aplicada

| Camada | Responsabilidade |
|---|---|
| `elements` | Mapeamento de elementos da interface |
| `pages` | Regras e ações das páginas |
| `step-definitions` | Implementação dos passos do BDD |
| `e2e` | Cenários de testes |

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js (versão 18+ recomendada)
- npm ou yarn
- Git

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/AucelioBarbosa/Desafio_Cypress.git
```

Acesse a pasta do projeto:

```bash
cd Desafio_Cypress
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como Executar os Testes

### Abrir o Cypress em modo interface

```bash
npx cypress open
```

### Executar os testes em modo headless

```bash
npx cypress run
```

---

## 🧪 Cenários BDD

Os cenários estão escritos em **Gherkin** utilizando arquivos `.feature`.

Exemplo:

```gherkin
Funcionalidade: Cadastro de usuário

Cenário: Cadastro com sucesso
  Dado que o usuário acesse o sistema
  Quando preencher os dados obrigatórios
  Então o cadastro deve ser realizado com sucesso
```

---

## 📈 Boas Práticas Aplicadas

- Separação por responsabilidades
- Reutilização de componentes
- Estrutura limpa e escalável
- Organização por camadas
- Escrita legível de cenários BDD
- Uso de Faker para geração de dados dinâmicos

---

## 👨‍💻 Autor

### Aucélio Barbosa

QA Automation | Cypress | Testes Web & API

- GitHub: urlAucelioBarbosa GitHubhttps://github.com/AucelioBarbosa
- Projeto: urlDesafio_Cypress Repositoryhttps://github.com/AucelioBarbosa/Desafio_Cypress

---

## ⭐ Objetivo Profissional

Este projeto faz parte da minha evolução profissional na área de **Quality Assurance** com foco em:

- Automação de testes
- Qualidade de software
- Integração de testes Web e API
- Estruturação de projetos escaláveis
- Boas práticas em QA

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e de portfólio.

