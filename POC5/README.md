# React - NextJS

![React](https://github.com/user-attachments/assets/a9e7b86b-f18b-4dec-9bee-c462fc78038f)

Nesta POC 5 Iremos abordar o funcionamento dos seguintes conceitos do React:
- Estrutura de Projeto NextJS.
- Criação de componentes simples.
- Estilo CSS (global e módulo). 

## Estrutura do Projeto NextJS

A Estrutura padrão do NextJS são as seguintes:
- ```/app:``` Diretório de rotas e páginas, cada pasta ou arquivo dentro de /app representa uma rota (ex: app/about/page.js será /about).
- ```/components:``` Local onde ficam os componentes reutilizáveis.
- ```/public:``` Arquivos estáticos como imagens e ícones.
- ```next.config.js:``` Configurações específicas do Next.js, como suporte para imagens, redirecionamentos, etc.

Todos esses arquivos são encontrados na estrutura do projeto, cada um com a sua particularidade e sua função, sendo o ```App e Components``` os mais utilizados por nós desenvolvedores.

## Criação de Componentes

Para criar um componente no React primeiro criamos uma pasta dentro da pasta padrão ```/app``` com o nome da função que iremos criar, por exemplo ```SimpleComponent```

Neste componente criamos uma função que recebe um texto de parametro que retorna uma ```div``` com o texto fornecido, ao lado o resultado.

![image](https://github.com/user-attachments/assets/574ef51c-8421-49e7-ae90-e0b1d5fa3b86)

No arquivo ```page.tsx``` dentro da função HomePage padrão ao chamar a função ```SimpleComponent``` 

![image](https://github.com/user-attachments/assets/4d6410f9-e556-4352-ac9c-3205e368b03d)

