# Automação de Testes — Playwright

## Sobre o projeto

Projeto de automação de testes E2E desenvolvido com **Playwright e JavaScript**, com o objetivo de validar as funcionalidades de um sistema de consulta e gerenciamento de repositórios do GitHub.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Playwright
- Playwright Test

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) ou outra IDE de preferência.

## Como executar o projeto

**1. Clonar o repositório**

```bash
git clone https://github.com/geanvit0r/teste-ABC.git
```

**2. Acessar a pasta do projeto**

```bash
cd TESTE_TECNICO_ABC
```

**3. Instalar as dependências**

```bash
npm install
```

**4. Instalar os navegadores do Playwright**

```bash
npx playwright install
```

**5. Executar os testes**

```bash
npx playwright test
```

## Estrutura do projeto

Os testes manuais realizados e documentados estão na pasta EVIDÊNCIAS DOS TESTES, onde possui arquivos em pdf reportando os casos de teste e também os BUGS encontrados. Detalhe, que em alguns bugs contém sugestões de melhorias para o sistema visando aumentar a qualidade do produto.


## Cenários automatizados

A automação foi realizada para a função de filtro na tela de Outros Repositórios, onde os cenários mapeados foram:

- Pesquisar repositório pelo nome completo
- Pesquisar repositório por parte do nome
- Pesquisar por repositório inexistente
- Pesquisar por repositório sem preencher o campo Nome

Foi utilzado o modelo de Page Objects, com o objetivo de reutilização de código, manutenção facilitada, bem como a entrega de um código limpo.

## Autor

**Gean Vitor Lopes Leite**

[LinkedIn](https://linkedin.com/in/gean-vitor-lopes-leite/)