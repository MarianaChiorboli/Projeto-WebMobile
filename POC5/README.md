# React - NextJS

![React](https://github.com/user-attachments/assets/a9e7b86b-f18b-4dec-9bee-c462fc78038f)

Nesta POC 5 Iremos abordar o funcionamento dos seguintes conceitos do React:
- Estrutura de Projeto NextJS.
- Criação de componentes simples.
- Estilo CSS (global e módulo). 

## Estrutura do Projeto NextJS

A estrutura padrão do Next.js inclui os seguintes diretórios:

- ```/app:``` Diretório de rotas e páginas, cada pasta ou arquivo dentro de /app representa uma rota (ex: app/about/page.js será /about).
- ```/components:``` Local onde ficam os componentes reutilizáveis.
- ```/public:``` Arquivos estáticos como imagens e ícones.
- ```next.config.js:``` Configurações específicas do Next.js, como suporte para imagens, redirecionamentos, etc.

Esses arquivos e pastas formam a estrutura do projeto, cada um com sua particularidade e função. Os diretórios ```app``` e ```components``` são os mais utilizados por nós, desenvolvedores.

## Criação de Componentes

Para criar um componente no React, primeiro criamos uma pasta dentro da pasta padrão ```/app``` com o nome da função que iremos criar, por exemplo, ```SimpleComponent.```

Neste componente, criamos uma função que recebe um texto como parâmetro e retorna uma ```div``` com o texto fornecido.
``` tsx
import styles from "./SimpleComponent.module.css";

export default function SimpleComponent({ text }) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
}
```


No arquivo ```page.tsx``` dentro da função HomePage padrão ao chamar a função ```SimpleComponent``` com o texto de parametro e obtemos este resultado

![image](https://github.com/user-attachments/assets/0840af28-cb01-4b14-9f1a-6f30eaaaef61)

## Estilos CSS

O ```CSS``` Global e utilizado para componentes com estilização compartilhada ou em comum, como fontes, cores de fundo e etc.

### Exemplo
``` css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(214, 195, 195);
}

h1 {
  color: black;
  text-align: center;
  margin-top: 20px;
}
``` 

O ```CSS``` Modular é utilizado para estilização de componentes especificos evitando conflitos 

### Exemplo

``` css
.container {
  background-color: gainsboro;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-family: Arial, sans-serif;
}
```

Mariana Agostinho Chiorboli Costa - 10435657
Thiago Kauã Pestana do Amaral - 10420686
Murilo Franciscon Miotto - 10438787
