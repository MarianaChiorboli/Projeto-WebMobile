"use client";
import { getAnime } from "https://api.jikan.moe/v4/anime/{id}/full";
import { useEffect, useState } from "react";
import styles from "./globals.css";

export default function Home() {
  const [animes, setAnimes] = useState([]);

  const animeIds = [43608, 57334, 42897, 20];

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

  if (animes.length === 0) {
    return <div>Loading...</div>;
  }

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
}
