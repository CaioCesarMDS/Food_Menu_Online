<br>
<p align="center">
  
  <img src="https://github.com/devpoint-oficial/food/blob/master/src/assets/logo.png" width="150">
</p>

<p align="center">
  Criando seus cardápios digitais de forma simples 🍟
</p>

<br>
<h1>Sobre o Projeto</h1>

<p>
  Este é um aplicativo de cardápio online desenvolvido com React no frontend e Node.js com SQLite no backend. Ele permite aos usuários visualizar o cardápio de uma lanchonete, adicionar     itens ao carrinho, finalizar pedidos e visualizar o histórico de pedidos
</p>
<br>

<h1>Pré-requisitos</h1>
<ul>
    <li>Node</li>
    <li>SQLite</li>
</ul> 
<p>
  
Se você não tiver o [Node](https://nodejs.org/en) <strong>(Recomendável versão LTS)</strong> <br>
Se você não tiver o [SQLite](https://sqlitestudio.pl/)
</p>

<br>

<h1>Instalação</h1>
<p>Para executar o projeto localmente, siga estas etapas no terminal:</p>

1 - Clone esse repositório em sua máquina local:

```
git clone https://github.com/CaioCesarMDS/Food_Menu_Online.git
```

2 - Navegue até o diretório do server:

```
cd server
```

3 - Instale as dependências do projeto:

```
npm install
```

4 - Em outra Aba, navegue até o diretório do frontend:

```
cd foodapp
```

6 - Instale as dependências:

```
npm install
```

<br>

<h1>Execução</h1>
<p>Para testar o projeto, siga esses passos:</p>

1 - Abra o SQLite, clique em adicionar um novo banco e no campo "file", procure pelo arquivo - *database.db* - dentro da pasta **server**.
<br>
<br>

2 - Na pasta **server**, vá até config/script.sql e popule o banco criado com os scripts do arquivo.
<br>
<br>

3 - Execute o servidor localmente:

```
npm run server
```
<br>

4 - Vá até a pasta **foodapp** e execute o frontend localmente:

```
npm run web
```

5 - Vá até "http://localhost:3000"


<br>

<h1>Funcionalidades</h1>
<p>
  1 - <strong>Visualização do Cardápio</strong>: os usuários podem visualizar os produtos disponíveis para compra na lanchonete, juntamente com suas descrições, preços e imagens.; 
  <br>
  <br>
  2 - <strong>Adição ao Carrinho</strong>: os usuários podem adicionar produtos ao carrinho de compras. Eles também podem especificar a quantidade desejada de cada produto.;
  <br>
  <br>
  3 - <strong>Finalização de Pedido</strong>: os usuários podem finalizar o pedido fornecendo suas informações pessoais e de entrega. O aplicativo enviará os detalhes do pedido para o servidor, que os armazenará no banco de dados.;
  <br>
  <br>
  4 - <strong>Histórico de Pedidos</strong>: os usuários podem visualizar o histórico de pedidos anteriores, incluindo o número do pedido, a data do pedido e o valor total.;
  <br>
  <br>
  <img src="https://github.com/devpoint-oficial/food/blob/master/src/assets/tela01.png">
</p>

<br>

<h1>Tecnologias</h1>
<p>Essas foram as principais tecnologias utilizadas no projeto:</p>

 <br>

<ul>
    <li><strong>Node.js</strong>: plataforma de desenvolvimento JavaScript do lado do servidor.</li>
    <br>
    <li><strong>React</strong>: biblioteca JavaScript para construção de interfaces de usuário.</li>
    <br>
    <li><strong>SQLite</strong>: sistema de gerenciamento de banco de dados relacional embutido.</li>
    <br>
    <li><strong>Express</strong>: framework web para Node.js usado para criar o servidor HTTP.</li>
    <br>
    <li><strong>Cors</strong>: middleware para Express.js que permite requisições de origens cruzadas.</li>
    <br>
    <li><strong>Axios</strong>: biblioteca para fazer requisições HTTP no cliente e no servidor.</li>
    <br>
    <li><strong>React Toastify</strong>: biblioteca para exibir notificações de forma elegante no React.</li>
</ul>

<br>

<h1>Autor</h1>
<p>Esse Projeto foi desenvolvido por <strong>Caio Cesar🔥</strong></p>
<br>

