# VUTTR - BossaBox

  
Made by [Igor Gois](https://github.com/igorgoiis)

## **API developed for the challenge of the BossaBox platform.**

 - **The following technologies were used:**
	 - Node.js
	 - TypeScript
	 - Express
	 - JWT
	 - PostgreSQL 

- **For code standardization it was used:**
	- ESlint
	- Prettier
	- EditorConfig
	
- **Tools:**
	- Docker
	- TypeORM
	- API Blueprint
	- Git
	- Insomnia

## Installation

**Prerequisite**
To use you need to have the [Docker](https://docs.docker.com/engine/install/)  and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

1. **Clone the repository:**

	    git clone https://github.com/igorgoiis/desafio-bossabox-backend.git

2. **Enter the folder:**
		    
		cd desafio-bossabox-backend

3. **Let's go up the containers:**

		docker-compose up -d
		
4. **Run the migrations to create all the tables in the database:**

		docker exec bossabox-backend yarn typeorm migrations:run
