// filepath: c:\Users\esteb\OneDrive\Escritorio\Programación\Curso IntegraTec\IntegrAnime\IntegrAnime\src\components\test.js

const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=10');
const json = await response.json();

// Define the Anime type for clarity (optional in JS, useful in TS)
/**
 * @typedef {Object} Anime
 * @property {string} title
 * @property {number} [members]
 */

// Map the data to the desired format
const animes = json.data.map(anime => ({
  nombre: anime.title,
  vistas: anime.members
}));

console.log(animes);