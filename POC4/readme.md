# Usando API em JS: Fetch
Para consumir APIs no Java Script é importante definir um endpoint na URL que retorne as informações necessarias em um JSON.
Nesta POC utilizamos ```https://hp-api.onrender.com/api/characters``` que retorna um objeto JSON com todos os personagens da Franquia Harry Potter, no JSON temos informações dos personagens como Nome, Genero e Casa na qual utilizamos no Projeto

``` json
  {
    "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    "name": "Harry Potter",
    "alternate_names": [
      "The Boy Who Lived",
      "The Chosen One",
      "Undesirable No. 1",
      "Potty"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
      "wood": "holly",
      "core": "phoenix tail feather",
      "length": 11
    },
```
## Fetch
No JavaScript criamos uma função assincrona que usa o await para esperar o retorno deste objeto JSON

``` javascript
async function buscarPersonagens() {
  const resposta = await fetch("https://hp-api.onrender.com/api/characters");
  return await resposta.json();
}
```

Com as informações do JSON tratamos ela em diversas funções, para mais detalhes o codigo está disponivel neste repositorio na pasta ```POC4```
Por fim criamos a função ```exibirInfoPersonagem``` para exibir na tela a foto, nome, genero e casa do personagem solicitado.

## Resultado

``` javascript
function exibirInfoPersonagem(personagem) {
  const personagemTraduzido = traduzirInfo(personagem);

  divInfoPersonagem.innerHTML = `
        <h2>${personagemTraduzido.name}</h2>
        <p>${
          personagemTraduzido.image !== "Imagem não disponível"
            ? `<img src="${personagemTraduzido.image}" alt="${personagemTraduzido.name}" style="width: 200px;">`
            : personagemTraduzido.image
        }</p>
        <p><strong>Espécie:</strong> ${personagemTraduzido.species}</p>
        <p><strong>Gênero:</strong> ${personagemTraduzido.gender}</p>
        <p><strong>Casa:</strong> ${personagemTraduzido.house}</p>
    `;
}
```
## Resultado no navegador 
![image](https://github.com/user-attachments/assets/f260b8f2-ac9a-472d-92ce-7c16754aac04)


