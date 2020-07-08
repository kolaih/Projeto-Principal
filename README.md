Passos a serem seguidos na criação desse projeto


instalar express, pg pg-hstore e sequelize
instalar sequelize-cli -D > nos da uma interface de linha de comando pra fazer alguns comandos no sequelize pra criação de migrations
sequelize -h > eu vejo todos os comandos que eu posso utilizar

instala o nodemon -D > toda vez que eu salvar a aplicação ela reinicia sozinha
criar script > test: nodemon src/server.js
criar folder src
criar 'server.js' dentro de src

criar um script simples: importar o express

primeira coisa a se fazer é criar um arquivo de rotas(tambem importa o express)
depois de criar as rotas, ai vou mandar o express usar essas rotas

agora eu crio uma pastinha chamada database com um arquivo index.js
database > index.js = onde farei minha conexão com o banco de dados

/* database > aqui é onde farei minha conexão com o banco de dados
como eu vou fazer essa conexão?
primeiro eu preciso ter um lugar pra eu armazenar as minhas credenciais de acesso da
 minha base de dados. entao eu vou criar uma pastinha config, e dentro dela criarei o arquivo 'database.js' que são as configurações da minha database

  --------------------------------------------------
  quando tentar instalar sequelize db:create vai aparecer um erro:
  >>>>>>>>>> ERROR: Error reading "config/config.json". Error: Error: Cannot find module '/home/leticia/Área de Trabalho/express_mongoDb/config/config.json' <<<<<<<<<<<<

  esse arquivo "config/config.json" ele é o arquivo padrao que o sequelize entende na hora de buscar as configurações da base de dados, pq quando a gente ta rodando esse sequelize-cli ele nao ta executando codigo da nossa aplicação, entao ele nao sabe as credenciais de acesso, só a nossa aplicação que sabe as credenciais de acesso, entao eu preciso informar pro sequelize quais sao as credenciais de acesso, entao eu crio um arquivo na raiz do meu projeto chamar ".sequelizerc"
  
  crio o arquivo '.sequelizerc' /* - nesse arquivo aqui eu formato para ser arquivo js
  e entao eu passo o caminho pro meu arquivo de configuração

depois de criar o arquivo .sequelizerc eu rodo o comando 'yarn sequelize db:create'
agora preciso criar a tabela do nosso banco de dados
-----------------------------------
pra criar a tabela dentro do db, usarei o conceito de migrations
dentro do .sequelizerc eu preciso dizer onde ele ira armazenar as migrations que ele criar

para criar uma tabela, utilizo o comando: yarn sequelize migration:create --name=create-pagador
depois de criar a tabela, roda o comando yarn sequelize db:migrate

---------------------------
quando estou trabalhando com ORM a primeira coisa que preciso fazer é criar meu MODEL
model é a representação de como que a nossa aplicação vai se comunicar com a nossa base de dados
entao vou criar um model pra usuario
model > user.js > aqui vamos determinar como que é formato do usuario dentro da base de dados
começo importando o model de dentro do nosso sequelize


-------------------------------
dentro do nosso index > database - vamos impportar o model

ja criamos o model, agora precisamos fazer o teste pra saber se esta funcional
criaremos uma rota de cadastro de informações

pra não ficar tudo dentro das rotas, eu crio um folder de CONTROLLER para receber as requisições
cria-se o arquivo PagadorController para lidar com as requisições
dentro do arquivo, cria-se o 'store' que serve pra armazenar a informação
quando criar o cadastro do pagador, a gente vai enviar atraves do corpo da requisicao (req.body), os campos da nossa tabela criada
depois de terminar o PagadorController, voce vai nas rotas e importa ele

--------------------------
no insomnia deu o erro > UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'length' of undefined < isso porque criamos a nossa conexão com a base de dados, mas nao importamos em lugar nenhum , entao o model nao sabe que se conectou com a base de dados, ele nao tem 'detalhes' da conexao com a base de dados, entao importamos a database no server.js


--------------
toda vez que cria um metodo tem que chamar ele