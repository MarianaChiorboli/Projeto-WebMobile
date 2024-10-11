const entradaPersonagem = document.getElementById("character-input");
const divSugestoes = document.getElementById("suggestions");
const botaoBuscar = document.getElementById("search-button");
const divInfoPersonagem = document.getElementById("character-info");

async function buscarPersonagens() {
  const resposta = await fetch("https://hp-api.onrender.com/api/characters");
  return await resposta.json();
}

async function exibirSugestoes(query) {
  const personagens = await buscarPersonagens();
  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.name.toLowerCase().startsWith(query.toLowerCase())
  );

  divSugestoes.innerHTML = personagensFiltrados
    .map((personagem) => `<div class="suggestion">${personagem.name}</div>`)
    .join("");
}

async function buscarDadosPersonagem(nomePersonagem) {
  const personagens = await buscarPersonagens();
  const personagem = personagens.find(
    (p) => p.name.toLowerCase() === nomePersonagem.toLowerCase()
  );
  return personagem;
}

function traduzirInfo(personagem) {
  const traducaoEspecie = {
    human: "Humano",
    "half-blood": "Meio-Sangue",
    "pure-blood": "Sangue-Puro",
    squib: "Cepatorta",
    ghost: "Fantasma",
    elf: "Elfo",
    werewolf: "Lobisomem",
    vampire: "Vampiro",
    hippogriff: "Hipogrifo",
    giant: "Gigante",
    troll: "Troll",
  };

  const traducaoCasa = {
    Gryffindor: "Grifinória",
    Hufflepuff: "Lufa-Lufa",
    Ravenclaw: "Corvinal",
    Slytherin: "Sonserina",
  };

  const traducaoGenero = {
    male: "Masculino",
    female: "Feminino",
    unknown: "Desconhecido",
  };

  return {
    ...personagem,
    gender: traducaoGenero[personagem.gender] || "Desconhecido",
    house: traducaoCasa[personagem.house] || "Não disponível",
    species: traducaoEspecie[personagem.species] || "Espécie não disponível",
    image: personagem.image || "Imagem não disponível",
  };
}

entradaPersonagem.addEventListener("input", async () => {
  const query = entradaPersonagem.value;
  if (query.length < 1) {
    divSugestoes.innerHTML = "";
    return;
  }
  await exibirSugestoes(query);
});

divSugestoes.addEventListener("click", async (e) => {
  if (e.target.classList.contains("suggestion")) {
    const nomePersonagem = e.target.innerText;
    entradaPersonagem.value = nomePersonagem;
    divSugestoes.innerHTML = "";

    const dadosPersonagem = await buscarDadosPersonagem(nomePersonagem);
    exibirInfoPersonagem(dadosPersonagem);
  }
});

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
