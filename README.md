# VUTTR - BossaBox

Feito por [Igor Gois](https://github.com/igorgoiis)

## **API desenvolvida para o desafio da plataforma BossaBox.**

 - **Foram utilizadas as seguintes tecnologias:**
	 - Node.js
	 - TypeScript
	 - Express
	 - JWT
	 - PostgreSQL 

- **Para padronização de código foi utilizado:**
	- ESlint
	- Prettier
	- EditorConfig
	
- **Ferramentas:**
	- Docker
	- TypeORM
	- API Blueprint
	- Git

## Instalação

**Pré-requisito**
Para a utilização você precisa ter o [Docker](https://docs.docker.com/engine/install/)  e o [Docker Compose](https://docs.docker.com/compose/install/) instalado na sua máquina.

1. **Clone o repositório:**

	    git clone https://github.com/igorgoiis/desafio-bossabox-backend.git

2. **Entre na pasta:**
		    
		cd desafio-bossabox-backend

3. **Vamos subir os containers:**

		docker-compose up -d
		
4. **Execute as migrations para criar todas as tabelas no banco de dados:**

		docker exec bossabox-backend yarn typeorm migrations:run

