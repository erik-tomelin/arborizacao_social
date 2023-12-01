# Venda de Plantas Sob Demanda - Software Arborização Social

O objetivo deste documento é fornecer uma visão geral da arquitetura do software e a contextualização do sistema, suas decisões arquiteturais e o processo de gestão relacionado.

## Contextualização

Esse software segue uma demanda de incentivo ao cultivo individu, pois vendemos as plantas por um preço mais barato por serem vendidas depois que ela jerminou. O site forcene informações importantes para entender como funciona o cultivo. No final da compra, o usuário é redirecionado para o Whatsapp para continuar com a compra, enviando os dados do site para a conversa do whatsapp, com os dados do nome da planta e o preço.

## Arquitetura de Software

O sistema foi desenvolvido em Typescript / Angular 14+ e para banco de dados e armazenamento de arquivos foi utilizado o Supabase. Para estilização, foi utilizado SCSS, Tailwind css e fontawesome para fonts.

O sistema é todo componentizado para facilitar a criação de um novo componente. 
Todas as funções de um componente ficam em sua respectiva pasta, onde cada pasta acompanha uma view (.html), um controller (.ts), um arquivo de estlização (.scss [Opcional]), arquivo de testes (.spec), uma model (.model.ts) e um service (.service.ts).
Na imagem abaixo tem toda a arquitetura do projeto, tendo da pasta src/app

![image](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/8fb7ce04-eb9c-4951-b1c5-7c3b7eea7bb7)

Abaixo tem os arquivos base de requisição para facilitar a contrução de novas requisições e o service que se conecta com o Supabase tal como na imagem abaixo

![image](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/b33ca393-b9e7-47b5-a912-e400a418839e)

### Gestão

#### Fluxo de Controle
Será adotado o fluxo de controle baseado em GitFlow, com branches de *feature* e *master*.

#### Gestão de Demandas e Chamados
Link do Trello publico abaixo.

https://trello.com/invite/b/6C7uAJdR/ATTI25913eaa049e86cfbba79371268d841bA6C56C20/software-arborizacao-social

#### Publicação
A publicação é automatizada através da integração com o Vercel (que usa CI/CD). A cada nova versão, uma pipeline é acionada e realiza o build do frontend no Ambiente de Homologação.

## Diagramas 

### Entidade e Relacionamento do banco do Supabse

Por conta da complexidade do projeto, não foi preciso muitos relacionamentos entre tabelas, seguindo também a ideia de ter o minimo de dados vinculados ao banco de dados.
![image](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/47912715-c9f4-42ff-a9a3-41511fdbcf1e)

## C4 model (Vizualição Simplificada do funcionamento do Software)

![C4(2)](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/26d60e8a-29a0-42c1-98fb-4d99f4091f98)
![C4(1)](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/959275a8-d7d4-4d91-a5da-af7297bd23b6)
