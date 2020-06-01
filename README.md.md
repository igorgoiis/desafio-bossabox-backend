---


---

<h1 id="vuttr---bossabox">VUTTR - BossaBox</h1>
<p>Feito por <a href="https://github.com/igorgoiis">Igor Gois</a></p>
<h2 id="api-desenvolvida-para-o-desafio-da-plataforma-bossabox."><strong>API desenvolvida para o desafio da plataforma BossaBox.</strong></h2>
<ul>
<li>
<p><strong>Foram utilizadas as seguintes tecnologias:</strong></p>
<ul>
<li>Node.js</li>
<li>TypeScript</li>
<li>Express</li>
<li>JWT</li>
<li>PostgreSQL</li>
</ul>
</li>
<li>
<p><strong>Para padronização de código foi utilizado:</strong></p>
<ul>
<li>ESlint</li>
<li>Prettier</li>
<li>EditorConfig</li>
</ul>
</li>
<li>
<p><strong>Ferramentas:</strong></p>
<ul>
<li>Docker</li>
<li>TypeORM</li>
<li>API Blueprint</li>
<li>Git</li>
</ul>
</li>
</ul>
<h2 id="instalação">Instalação</h2>
<p><strong>Pré-requisito</strong><br>
Para a utilização você precisa ter o <a href="https://docs.docker.com/engine/install/">Docker</a>  e o <a href="https://docs.docker.com/compose/install/">Docker Compose</a> instalado na sua máquina.</p>
<ol>
<li>
<p><strong>Clone o repositório:</strong></p>
<pre><code> git clone https://github.com/igorgoiis/desafio-bossabox-backend.git
</code></pre>
</li>
<li>
<p><strong>Entre na pasta:</strong></p>
<pre><code> cd desafio-bossabox-backend
</code></pre>
</li>
<li>
<p><strong>Vamos subir os containers:</strong></p>
<pre><code> docker-compose up -d
</code></pre>
</li>
<li>
<p><strong>Execute as migrations para criar todas as tabelas no banco de dados:</strong></p>
<pre><code> docker exec bossabox-backend yarn typeorm migrations:run
</code></pre>
</li>
</ol>

