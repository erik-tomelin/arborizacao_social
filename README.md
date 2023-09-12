# Venda de Plantas Sob Demanda - Software Arborização Social

Este repositório contém o projeto de software para um sistema de venda de plantas sob demanda, utilizando Angular 13+ no frontend. O objetivo deste documento é fornecer uma visão geral da arquitetura do software, suas decisões arquiteturais e o processo de gestão relacionado.

## Arquitetura de Software

O documento de arquitetura de software tem como objetivo definir uma estratégia que permita aos componentes do software atingir os objetivos de negócio, garantindo a entrega dos atributos de qualidade e o cumprimento das restrições estabelecidas.

### Introdução

#### Objetivo
O objetivo deste software é oferecer aos usuários a capacidade de comprar plantas sob demanda de forma conveniente, eficiente e acessível financeiramente.

#### Escopo
O escopo abrange o desenvolvimento do frontend utilizando Angular 13+ e sua integração com os demais componentes do sistema.

#### Contexto
O sistema se insere no mercado de jardinagem e vendas online, visando atender a demanda por plantas de forma personalizada.

#### Restrições
- Utilização exclusiva de Angular 13+ no frontend.
- Contrução do backend (Possivelmente Java) com APIs.
- Uso da AWS com banco de dados.

## Visão Geral

O sistema consiste em um frontend desenvolvido em Angular 13+ que se conecta a APIs backend usando Java para realizar as operações de venda de plantas sob demanda. A integração será realizada via requisições HTTP, seguindo os padrões REST.

### Arquitetura de Decisões (ADR)

Os Documentos de Decisões Arquiteturais (ADR) são usados para registrar as decisões-chave tomadas durante o processo de design e desenvolvimento do sistema. Cada ADR seguirá o modelo abaixo:

**Título**: Título descritivo da decisão.
**Status**: Status atual da decisão (Proposta, Aceita, Rejeitada, Implementada, etc.).
**Alternativas**: Opções consideradas para a decisão.
**Decisão**: Escolha final e justificativa.
**Consequências**: Impacto da decisão no sistema e no negócio.

### Gestão de Configuração

#### Controle de Versão
O controle de versão será realizado através do Git, utilizando o GitHub como plataforma de hospedagem. Serão utilizados commits semânticos para um melhor rastreamento das alterações.

#### Fluxo de Controle
Será adotado o fluxo de controle baseado em GitFlow, com branches de *feature* e *master*.

#### Gestão de Demandas e Chamados
A gestão de demandas e chamados será feita através de (*issues*) no GitHub. Será utilizada a abordagem de *Kanban* para organizar e priorizar as demandas.

#### Publicação
A publicação será automatizada através da integração contínua (CI/CD). A cada nova versão, uma pipeline será acionada para realizar o build do frontend e implantá-lo em um ambiente de homologação. Após testes bem-sucedidos, a implantação ocorrerá no ambiente de produção.

## Considerações Finais

Este README fornece uma visão geral da arquitetura do projeto de venda de plantas sob demanda, detalhando as decisões arquiteturais, gestão de configuração e publicação. Mantendo esse documento atualizado e seguindo as diretrizes aqui definidas, o desenvolvimento e manutenção do sistema serão conduzidos de forma eficaz e alinhada aos objetivos de negócio.

## Diagramas 

### Entidade e Relacionamento (UML)

![casoDeUso(arborizacao) drawio](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/d536153b-4eb3-498b-a692-484f06410ada)

### Diagrama de classes

![class_diagram_PAS drawio](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/5e413ab6-295e-4760-a74b-493bc8c27d60)

## C4 model

![C4(2)](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/26d60e8a-29a0-42c1-98fb-4d99f4091f98)
![C4(1)](https://github.com/erik-tomelin/arborizacao_social/assets/63420907/959275a8-d7d4-4d91-a5da-af7297bd23b6)
