## Usando API em JS: Fetch
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

