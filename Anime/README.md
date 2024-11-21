# Anime - NextJS

Usando a estrutura fornecida para realizar o exercicio:

``` tsx
export function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Dados recebidos com sucesso!");
      callback(xhr.response);
    } else {
      console.log("Problema ao conectar com a API: " + xhr.status);
    }
  };
  xhr.send();
}

export function getHeroes(BASE_URL, code, callback) {
  var url = BASE_URL + code;
  getJSON(url, callback);
}
```

Usamos ele como o unico componente "api.js"

No arquivo page.tsx, criamos duas variaveis

animes e setAnimes: Estado para armazenar os dados dos animes. Inicialmente, é um array vazio.

animeIds: Array com os IDs dos animes que serão buscados na API.

``` tsx
export default function Home() {
  const [animes, setAnimes] = useState([]);
  const animeIds = [43608, 57334, 42897, 20];
```
Processo de busca:

Para cada ID no array, faz uma requisição HTTP (fetch) para a API.

Promise.all(fetchPromises):

Aguarda todas as requisições serem concluídas.

Converte as respostas em JSON.

Extrai os dados relevantes (campo data) de cada resposta e os armazena no estado animes.

Tratamento de erros:

Caso ocorra um erro na busca, ele será registrado no console.

``` tsx
useEffect(() => {
  const fetchPromises = animeIds.map((id) =>
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`).then((response) =>
      response.json()
    )
  );

  Promise.all(fetchPromises)
    .then((results) => {
      const animeData = results.map((result) => result.data);
      setAnimes(animeData);
    })
    .catch((error) => console.error("Error fetching anime data:", error));
}, []);
```

animes.map:

Itera sobre o array animes e renderiza um <article> para cada anime.

Estrutura renderizada para cada anime:

key={anime.mal_id}: Identificador único necessário para elementos em listas no React.

Exibe título, nota (score), ranking, número de episódios e uma imagem do anime.

A imagem é exibida com o atributo src apontando para anime.images.jpg.large_image_url.

``` tsx
return (
  <div id="anime" className="AnimeList">
    {animes.map((anime) => (
      <article key={anime.mal_id} className="Anime">
        <h2>{anime.title}</h2>
        <p>Score: {anime.score}</p>
        <p>Ranking: {anime.rank}</p>
        <p>Episodes: {anime.episodes}</p>
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="AnimeImages"
        />
      </article>
    ))}
  </div>
);
```

Resultado:
![image](https://github.com/user-attachments/assets/94d6540e-3d98-40d9-9fcc-b1ad592730db)


Mariana Agostinho Chiorboli Costa - 10435657

Thiago Kauã Pestana do Amaral - 10420686

Murilo Franciscon Miotto - 10438787

