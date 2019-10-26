# Desafio - Busca de notícias - New York Times

Este projeto é um desafio técnico e comportamental.

O entregável será um site de notícias. Para efeitos didáticos, usaremos como fonte de dados a API do site `The New York Times`.


## Desafio técnico:

  Fixar conhecimento em:

 * Javascript
 * HTML
 * CSS
 * Node
 * Express
    * Rotas
    * Views (hbs)
        * partials
        * layout

## Desafios comportamentais:

  * Organização;
  * Leitura e compreensão de Documentação de módulos;
  * Leitura de documentação de API;
  * Boas práticas de código JS;
  * Escrever documentação sobre projetos;
  * Aprender novos módulos.


## Pré-requisitos

- Antes de começar, você precisa ler este documento até o fim.

Para este projeto, você deverá utilizar:

- [Yarn](https://yarnpkg.com/lang/en/)
- Node.js
- Módulo [node-fetch](https://www.npmjs.com/package/node-fetch), para buscar dados da api;
- Módulo [dotenv](https://www.npmjs.com/package/dotenv), para ler suas variáveis de ambiente;
- `.gitignore` para evitar que alguns arquivos ou pastas sejam versionados; 
- [handlebars](https://handlebarsjs.com/), para as views;
- Api de notícias do `The New York Times`

## Instruções iniciais

Este projeto já vem com scripts de `pré-commit` e `pré-push` configurados para o [padrão de código utilizado pelo time do `Google`](https://google.github.io/styleguide/javascriptguide.xml). É uma excelente oportunidade de aprender e aplicar boas práticas de código. <3

#### Leia as documentações dos módulos

É extremamente importante que você leia e/ou tenha fácil acesso à documentação dos módulos  [node-fetch](https://www.npmjs.com/package/node-fetch) e [dotenv](https://www.npmjs.com/package/dotenv) antes de começar a colocar a mão na massa.

#### Proteja seus dados

Você deverá proteger suas credenciais. Elas não poderão aparecer em seu código versionado no github (em nenhum commit), para isso, utilize os arquivos:

- `.env` para guardar suas variáveis de ambiente e chaves.
- `.gitignore` para ignorar o arquivo e pasta de nomes `.env` e `node_modules` respectivamente.

## Credenciamento na api do NYT

Como usaremos a API do `The New York Times`, você precisará das credenciais de desenvolvedor para ter acesso aos dados do site. Para criar uma credencial de desenvolvedor, siga o passo a passo disponível no site abaixo:

https://developer.nytimes.com/get-started

## Documentação da API:
A documentação da API do NYT está disponível em:
https://developer.nytimes.com/docs/articlesearch-product/1/overview


# Instruções de layout e navegação:

O projeto deve ter as seguintes páginas:
 * Página inicial
 * Resultado de Busca
 * Notícias mais vistas hoje
 * Notícias mais compartilhadas por e-mail
 * Sobre este site

## Para todas páginas

Todas as páginas devem ter:
  - o selo do New York Times, conforme informado [na página de *branding* do jornal](https://developer.nytimes.com/branding).
  - Menu superior com logo e links para auxiliar a navegação
  - Rodapé com links para todas as páginas do site


## Página inicial:

A página inicial deve ter um formulário de busca centralizado na parte superior;
Logo abaixo do formulário de busca, deverá ser carregada uma lista com as 10 últimas notícias do site.

* O formulário de busca deve ter um campo de texto e um botão de "buscar". A página deverá seguir o padrão do site do jornal, mas você pode usar de sua criatividade para melhorar.
  * **Para o formulário**:

    - Usar o método `GET`;
    - O nome do campo de busca deve ser `q`, de "query".
    - Ao clicar no botão `buscar`, o usuário deve ser redirecionado para uma nova página `/search-results`

Abaixo do formulário, deverá ser exibida uma lista com as últimas notícias de hoje.

## Pagina de resultado de busca

  - A página `/search-results` deve conter o resultado da busca pela palavra chave digitada pelo usuário;
  - O visual do resultado de busca deve ser igual ao do [site oficial do The New York Times](https://www.nytimes.com/search?dropmab=true&query=brazil&sort=best)
  - Ao clicar em uma notícia, o usuário deverá ser direcionado para a notícia no site do The New York Times;
  - Caso a busca não tenha resultado, deverá retornar uma mensagem informando que não tem resultado, uma caixa de busca (identica a da página inicial) e, logo abaixo, a listagem das 10 últimas noticias de hoje.

## Página de noticias mais vistas hoje

Deverá exibir as últimas notícias de hoje, seguindo o mesmo formato do [site oficial na sessão "Trending"](https://www.nytimes.com/trending/)


## Página de noticias mais compartilhadas por e-mail

Deverá exibir as notícias mais compartilhadas por e-mail, seguindo o layout do [site oficial na sessão "Trending"](https://www.nytimes.com/trending/)

## Pagina "Sobre este site"

Esta página é para você se apresentar e dizer para o mundo como você fez este projeto e, claro, dar crédito para os módulos e ferramentas que você utilizou.


# Bônus:

Caso queira mostrar para o mundo o seu grande feito, siga os passos desta página:
https://devcenter.heroku.com/articles/git

Lembre-se de compartilhar o link com a gente. <3

