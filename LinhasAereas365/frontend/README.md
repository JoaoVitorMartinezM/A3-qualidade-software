# 365 Linhas Aéreas - Frontend - Squad 1
## Introdução
Projeto final do programa de formação DEVinHouse. 
Desenvolvido por:
- Bruno Da Silva Cunha (https://github.com/BdSCunha)
- Danilo Paes Ribeiro (https://github.com/danilopaes)
- João Vitor Martinez Marcelino (https://github.com/JoaoVitorMartinezM)
- Marina Hoffmann (https://github.com/marina-hoffmann)
- Rafael Montalvao de Brito (https://github.com/RafaelMontalvao)

Contexto: A empresa 365 Linhas Aéreas entrou em operação com uma aeronave
para atender a um grupo seleto de clientes que fazem o trecho Florianópolis -
São Paulo diariamente. A empresa está expandindo sua atuação
e precisa estruturar melhor o sistema de gerenciamento de passageiros do voo
para atender a demanda. Este repositório contempla o front-end do sistema que consume API presente [neste repositório](https://github.com/Devin-ilog/M3P2-BackEnd-Squad1).

## Tecnologias & Versões
- **React** - versão 18.2.0;
- **Styled Components** - versão 5.3.2;
- **Vite** - versão 4.3.9;
- **React Icons** - versão 4.10.1;
- **React Router DOM** - versão 6.14.1;
- **Axios** - versão 1.4.0;

## Como executar
Antes de tudo é preciso clonar o repositório (comando abaixo) contendo a API e rodar o arquivo principal da aplicação.

// git clone + caminho do repositório no github.

```git clone https://github.com/Devin-ilog/M3P2-BackEnd-Squad1.git```

Depois disso este repositório deve ser clonado

```git clone https://github.com/Devin-ilog/M3P2-FrontEnd-Squad1.git```

Para instalar as dependencias é preciso executar o comando npm install:

// Acessar a pasta do projeto

```cd LinhasAereas365```

// Instalar as dependencias do projeto

```npm install```

// Executar aplicação

```npm run dev```

// Acessar aplicação no navegador

http://localhost:5173/

## Páginas
### Consulta de Passageiros
Rota responsável pela consulta de todos os passageiros cadastrados no voo.
Deve retornar os dados atualizados de todos os passageiros.

HTTP GET → http://localhost:5173/listagem

### Consulta de Confirmação
Rota responsável por retornar os dados da confirmação (e-ticket) informada.
Basta inserir o código do e-ticket no campo de busca.

HTTP GET → http://localhost:5173/eticket

### Realização de Confirmação (check-in)
Rota responsável por registrar uma confirmação para determinado passageiro.
O usuário deve selecionar o passageiro, um assento disponível e informar se deseja despachar mala.
Caso a solicitação não infrinja nenhuma regra de negócio, um cartão de confirmação
é gerado.

HTTP GET → http://localhost:5173/checkin