#  Node MVC Architecture API
API RESTful simples desenvolvida com Node.js, Express.js e SQLite, com foco em boas práticas de arquitetura de software. O projeto é simples e segue os padrões Model-View-Controller (MVC) e Repository Pattern, proporcionando uma estrutura modular, clara e de fácil manutenção.

A aplicação permite o gerenciamento de clientes, incluindo operações CRUD, contagem total de registros e busca por nome.

A lógica de acesso a dados é isolada por meio do Repository Pattern, enquanto a estrutura da aplicação é organizada com a arquitetura MVC, dividindo o projeto em modelos, controladores, serviços e rotas.

## Objetivos do Projeto
Este simples projeto foi desenvolvido com o propósito de consolidar conhecimentos fundamentais em arquitetura de software e desenvolvimento de APIs RESTful. Os principais objetivos incluem:

- Aplicar a arquitetura Model-View-Controller (MVC) para organização estrutural

- Implementar o Repository Pattern para abstração da camada de persistência

- Criar uma API funcional, modular e escalável com Node.js e Express

- Utilizar o Sequelize como ORM e o SQLite como banco local leve


---

## Endpoints

| Método | Rota                            | Ação                          |
|--------|----------------------------------|-------------------------------|
| POST   | `/clientes`                     | Criar novo cliente            |
| GET    | `/clientes`                     | Listar todos os clientes      |
| GET    | `/clientes/{id}`                | Buscar cliente por ID         |
| PATCH  | `/clientes/{id}`                | Atualizar cliente             |
| DELETE | `/clientes/{id}`                | Excluir cliente               |
| GET    | `/clientes/total`               | Contar número total de clientes |
| GET    | `/clientes/nome?nome=NomePesq`  | Buscar cliente por nome       |


---

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/jonathanprosso/desafio-finalarquiteto-de-software
cd desafio-finalarquiteto-de-software
```

### 2. Instale as dependências
```bash
npm install
```


### 3. Configure o arquivo .env

```bash
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
```

### 4. Execute o servidor
```bash
npm run dev
```


## Notas

Este projeto tem fins educacionais e foi desenvolvido como parte da pós-graduação em Arquitetura de Software.

A estrutura e os commits refletem o processo de aprendizado, com experimentações e práticas guiadas por boas práticas de desenvolvimento.