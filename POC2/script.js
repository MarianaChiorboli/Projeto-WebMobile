    /*MAP*/
    /* A função Map, mapeia cada elemento do Array permitindo utilizar funções especificas para ela
    Obtendo um novo Array modificado */

const nossoArray = [1, 4, 5, 30, 50]

/* Função exemplo - Dobrar os valores de todos os elementos do Array*/

const dobrar = nossoArray.map(function(element){
    return element * 2;
});

/* Printar no Console Array modificado */
console.log(dobrar)

    /*SPREAD
    E um operador que serve para espelhar objetos como arrays onde conseguimos utilizar mais argumentos com facilidade*/

/*Exemplo*/
let ex1=[1, 2, 3]
let ex2=[4, 5, 6]

let ex3=[...ex1,...ex2]

/* Agora temos um objeto array com 6 elementos espelhado a partir do operador spread*/
console.log(ex3)

/* Tambem podemos transformar uma HTML Collection em uma array e trabalharmos
nela com mais funções JS ao inves deapenas funções HTML Collection*/

/* Estamos pedindo para o JS armazenar um HTML Collection da Tag Div do HTML porem utilizando o operador
spread e o transformando em uma Array*/
const objeto1 = [...document.getElementsByTagName("div")]

/* Vamos utilizar a função forEach por exemplo para retornar todos os elementos dentro do nosso array.
Caso for um HTML Collection essa função não poderia ser utilizada*/

objeto1.forEach(element => {
    console.log(element)
 });

console.log(objeto1)

    /*REDUCE
    O Reduce e uma função que reduz varias informações de uma Array, em apenas uma só, um exemplo e somar
    varios valores de um objeto*/


const grupo = [
    {Nome:"Thiago", Nota:10},
    {Nome:"Mariana", Nota:10},
    {Nome:"Murilo", Nota:10} ,
]

/* Utilizando a função reduce, passamos 3 parametros sendo duas Variaveis "ValorAnt" = Valor anterior a soma,
elem que vai receber as notas dos alunos, e no final 0 para ser o valor incial do argumento*/
const Soma_Nota = grupo.reduce((ValorAnt, elem )=> ValorAnt + elem.Nota, 0)
console.log(Soma_Nota)

    /*FILTER*/
    /* Como o nome já diz, iremos utilizar o filter para filtrar um elemento
     vamos usar a Array como exemplo, iremos remover elementos duplicados na Array*/

const Sem_filter = [1, 2, 3, 4, 6, 1, 3, 4, 2]

/* Vamos testar se um indice do array original e igual a o indice do elemento, Se o numero se repetir
ele será eliminado da array
Para isso você deve passar 3 Paremetros*/
const Com_filter = Sem_filter.filter((elem, indice, array) => array.indexOf(elem) === indice)
console.log(Com_filter)

/*Sort*/
/*O Sort e usado para ordenar arrays em JS sendo o padrao ordenando pela tabela unicode*/

const numeros = [5, 4, 3, 2, 1]

numeros.sort()
console.log(numeros)