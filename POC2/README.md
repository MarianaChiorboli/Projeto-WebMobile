# Tratamento de Arrays em JavaScript
A POC 2 tem o intuito de demonstrar o uso de diversas funções de como usar os arrays no JavaScript, incluindo as funções `map`, `spread`, `reduce`, `filter` e `sort`.

## Funcionalidades
- **HTML Básico:** Exibe três `divs` com o conteúdo "Mackenzie", "WebMobile", e "Projeto".
- **JavaScript:** Demonstra o uso de como manipular os arrays e seus diferentes tipos (que serão explicados a seguir para que serve cada tipo).
  
  **map**:
  - A função Map, mapeia cada elemento do Array permitindo utilizar funções especificas para ela. Obtendo um novo Array modificado.
  - exemplo de como funciona:
    const nossoArray = [1, 4, 5, 30, 50]
    const dobrar = nossoArray.map(function(element){
    return element * 2;
    console.log(dobrar)
    
  **spread**:
  - E um operador que serve para espelhar objetos como arrays onde conseguimos utilizar mais argumentos com facilidade.
  - exemplo de como funciona:
    let ex1=[1, 2, 3]
    let ex2=[4, 5, 6]

    let ex3=[...ex1,...ex2]
    console.log(ex3)
    
  **reduce**:
   - O Reduce e uma função que reduz varias informações de uma Array, em apenas uma só, um exemplo e somar vários valores de um objeto.
   - exemplo de como funciona:
     const grupo = [
    {Nome:"Thiago", Nota:10},
    {Nome:"Mariana", Nota:10},
    {Nome:"Murilo", Nota:10} ,
] 
    const Soma_Nota = grupo.reduce((ValorAnt, elem )=> ValorAnt + elem.Nota, 0)
console.log(Soma_Nota)
  
  **filter**:
   - Como o nome já diz, iremos utilizar o filter para filtrar um elemento
     vamos usar a Array como exemplo, iremos remover elementos duplicados no Array.
     - exemplo de como funciona:
        const Sem_filter = [1, 2, 3, 4, 6, 1, 3, 4, 2]
       const Com_filter = Sem_filter.filter((elem, indice, array) =>         
array.indexOf(elem) === indice)
console.log(Com_filter)
  
  **sort**:
   - O Sort e usado para ordenar arrays em JS sendo o padrao ordenando pela tabela unicode.
   - exemplo de como funciona:
     const numeros = [5, 4, 3, 2, 1]

      numeros.sort()
      console.log(numeros)
     
  

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
