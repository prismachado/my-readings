# my-readings
Segundo desafio da mentoria GoMobile

# Projeto React

Criar uma aplicação de estante de livros, onde podemos selecionar e classificar os livros que já lemos, estamos lendo ou vamos ler.

## Funcionalidades

Na tela inicial (home), é exibida uma lista (estante) de categorias, onde cada uma delas contém vários livros. As 3 estantes são:

- Currently Reading (lendo atualmente)
- Want to Read (quer ler)
- Read (já leu)

Cada livro tem um controle que permite selecionar uma estante para colocá-lo. Quando seleciona uma prateleira diferente, o livro é movido para ela, o valor padrão sempre deve ser a estante atual do livro.

Na "home" também deve ter um um link para busca.

Na pagina de busca deve haver um input de texto para buscar por um livro. Nos livros encontrados devem ter um controle para adicioná-los na biblioteca. 

Para manter uma interface consistente recomendamos reutilizar componentes usados anteriormente.

Quando um livro está na estante, ele deve ter o mesmo estado que na tela de busca.

A página de busca também deve ter um link para voltar para a home
