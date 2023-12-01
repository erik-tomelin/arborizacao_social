# Venda de Plantas Sob Demanda - Software Arborização Social

O objetivo deste documento é fornecer uma visão geral da arquitetura do software e a contextualização do sistema, suas decisões arquiteturais e o processo de gestão relacionado.

## Contextualização

Este software segue a demanda de incentivo ao cultivo individual, pois vendemos as plantas por um preço mais barato após a germinação. O site fornece informações importantes para entender como funciona o cultivo. Ao final da compra, o usuário é redirecionado para o WhatsApp para dar continuidade à compra, enviando os dados do site para a conversa no WhatsApp, incluindo o nome da planta e o preço.

## Arquitetura de Software

O sistema foi desenvolvido em Typescript / Angular 14+ e para banco de dados e armazenamento de arquivos foi utilizado o Supabase. Para estilização, foram utilizados SCSS, Tailwind CSS e Font Awesome para ícones.

O sistema é totalmente componentizado para facilitar a criação de novos componentes. Todas as funções de um componente estão localizadas em sua pasta correspondente, na qual cada pasta contém uma view (.html), um controller (.ts), um arquivo de estilização (.scss [opcional]), um arquivo de testes (.spec), um modelo (.model.ts) e um serviço (.service.ts). Na imagem abaixo está representada toda a arquitetura do projeto, a partir da pasta src/app.

![image](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/8fb7ce04-eb9c-4951-b1c5-7c3b7eea7bb7)

Abaixo estão os arquivos base de requisição para facilitar a construção de novas requisições e o serviço que se conecta com o Supabase, conforme representado na imagem abaixo.

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

### Entidade e Relacionamento do banco de dados (Supabse)

Devido à complexidade do projeto, não foram necessários muitos relacionamentos entre tabelas, seguindo a ideia de minimizar os dados vinculados ao banco de dados.
![image](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/47912715-c9f4-42ff-a9a3-41511fdbcf1e)

## C4 model (Vizualição Simplificada do funcionamento do Software)

![C4(2)](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/26d60e8a-29a0-42c1-98fb-4d99f4091f98)
![C4(1)](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/959275a8-d7d4-4d91-a5da-af7297bd23b6)
