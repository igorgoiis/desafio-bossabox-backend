FORMAT: 1A
HOST: https://polls.apiblueprint.org/

# VUTTR

API desenvolvida para desafio do BossaBox

## Users [/users]
O user tem os seguintes atributos:
+ id
+ name
+ email
+ password

### Cadastrar um user [POST]

+ Request (application/json)
```
        {
            "name": "Pedro",
            "email": "user@exemplo.com",
            "password": "123456"
        }
```
+ Response 201 (application/json)
```
        [
            {
                "name": "Pedro",
                "email": "user@exemplo.com",
                "id": 1,
                "created_at": "2020-05-26T01:59:12.807Z",
                "updated_at": "2020-05-26T01:59:12.807Z"
            }
        ]
```

## Users [/users/:id]
Parâmetros:
+ id : id do usuário

### Deletar um usuário [DELETE]

+ Request

    + Headers

            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTA0NDUwOTYsImV4cCI6MTU5MDUzMTQ5Niwic3ViIjoiNCJ9.VhgEfW6K0V7XTQM-sMZU-RhjMBS4mbzXPuXFEUSuJ4E

+ Response 204

## Sessions [/sessions]
Cria uma nova seção e gera um token de autorização

### Criar uma nova seção [POST]

+ Request (application/json)
```
        {
            "email": "user@exemplo.com",
            "password": "123456"
        }
```
+ Response 200 (application/json)
```
        [
            {
                "user": {
                            "id": 1,
                            "name": "Pedro",
                            "email": "user@exemplo.com",
                            "created_at": "2020-05-26T01:59:12.807Z",
                            "updated_at": "2020-05-26T01:59:12.807Z"
                        },
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTA1NDY5OTUsImV4cCI6MTU5MDYzMzM5NSwic3ViIjoiNyJ9.wiGlHjdnEF3Wu5l6yXXOpJUwd-gfHxNF-8MRGHeujks"
            }
        ]
```

        A partir daqui todos as requisições devem conter o `token` no header

## Tools [/tools]

### Criar uma nova ferramenta [POST]

+ Request (application/json)
```
        {
            "title": "fastify",
            "link": "https://www.fastify.io/",
            "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            "tags": ["web", "framework", "node", "http2", "https", "localhost"]
        }
```
    + Headers

            Authorization: Bearer *token*


+ Response 200 (application/json)
```
        [
            {
                "title": "fastify",
                "link": "https://www.fastify.io/",
                "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                "tags": ["web", "framework", "node", "http2", "https", "localhost"],
                "id": 9
            }
        ]
```
### Listar todas as ferramenta [GET]

+ Request

    + Headers

            Authorization: Bearer *token*


+ Response 200 (application/json)
```
        [
            {
                "id": 1,
                "title": "Notion",
                "link": "https://notion.so",
                "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                "tags": ["organization", "planning", "collaboration", "writing", "calendar"]
            },

            {
                "id": 2,
                "title": "json-server",
                "link": "https://github.com/typicode/json-server",
                "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                "tags": ["api", "json", "schema", "node", "github", "rest"]
            }
        ]
```
## Tools [/tools?tag={filtro}]
Filtra os tools de acordo com a tag informada pela URL e são listados apenas as tools que contém essa tag.

### Filtar tools por tag [GET]

+ Request

    + Headers

            Authorization: Bearer *token*


+ Response 200 (application/json)
```
        [
            {
                "id": 2,
                "title": "json-server",
                "link": "https://github.com/typicode/json-server",
                "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                "tags": ["api", "json", "schema", "node", "github", "rest"]
            },

            {
                "id": 9,
                "title": "fastify",
                "link": "https://www.fastify.io/",
                "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                "tags": ["web", "framework", "node", "http2", "https", "localhost"]
            }
        ]
```
## Tools [/tools/:id]
Parâmetros:
* id: id da Tool

### Atualiza informações da Tool [PUT]

+ Request
```
        {
            "title": "json-server",
            "link": "https://github.com/typicode/json-server",
            "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            "tags": ["api","json","schema","node","github","rest", "insomnia"]
        }
```
    + Headers

            Authorization: Bearer *token*


+ Response 200 (application/json)
```
        [
            {
                "id": 2,
                "title": "json-server",
                "link": "https://github.com/typicode/json-server",
                "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                "tags": ["api", "json", "schema", "node", "github", "rest", "insomnia"]
            }
        ]
```
### Deleta uma Tool [DELETE]

+ Request

    + Headers

            Authorization: Bearer *token*

+ Response 204
