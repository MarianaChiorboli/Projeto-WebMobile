# Tratamento de Arrays em JavaScript
A POC 2 tem o intuito de demonstrar o uso de diversas funções de como usar os arrays no JavaScript, incluindo as funções `map`, `spread`, `reduce`, `filter` e `sort`.

## Funcionalidades
- **HTML Básico:** Exibe três `divs` com o conteúdo "Mackenzie", "WebMobile", e "Projeto".
- **JavaScript:** Demonstra o uso de como manipular os arrays e seus diferentes tipos (que serão explicados a seguir para que serve cada tipo).
  
  **map**:
  - A função Map, mapeia cada elemento do Array permitindo utilizar funções especificas para ela. Obtendo um novo Array modificado.
    
  **spread**:
  - E um operador que serve para espelhar objetos como arrays onde conseguimos utilizar mais argumentos com facilidade.
    
  **reduce**:
   - O Reduce e uma função que reduz varias informações de uma Array, em apenas uma só, um exemplo e somar vários valores de um objeto.
  
  **filter**:
   - Como o nome já diz, iremos utilizar o filter para filtrar um elemento
     vamos usar a Array como exemplo, iremos remover elementos duplicados no Array.
  
  **sort**:
   - O Sort e usado para ordenar arrays em JS sendo o padrao ordenando pela tabela unicode.
  

## Estrutura do Projeto

### HTML
O HTML possui três divs básicas e um script externo que realiza o tratamento do DOM e dos arrays.

```html
<!DOCTYPE html>
<html lang="br">
<head>
    <meta charset="UTF-8">
    <title>Arrays</title>
</head>
<body>
    <div>Mackenzie</div>
    <div>WebMobile</div>
    <div>Projeto</div>
</body>
    <script src="script.js"></script>
</html>
