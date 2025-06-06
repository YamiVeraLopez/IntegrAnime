import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BCkfWrbs.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_wfkKv-Uw.mjs';
import { $ as $$Card } from '../../chunks/Card_CWaF67Vr.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const totalPages = 10;
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: `${i + 1}` }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const pageID = Astro2.params.page ?? 1;
  let animeData = [];
  let pagination = {};
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?page=${pageID}&order_by=popularity&sort=asc`
    );
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const { data: animeList, pagination: apiPagination } = await response.json();
    animeData = animeList.map((anime) => ({
      id: anime.mal_id,
      title: anime.title,
      image: anime.images.webp.image_url,
      description: anime.synopsis,
      status: anime.status,
      genres: anime.genres.map((genre) => genre.name)
    }));
    pagination = apiPagination;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
  const genreSet = new Set(animeData.flatMap((anime) => anime.genres));
  const uniqueGenres = Array.from(genreSet).sort();
  return renderTemplate(_a || (_a = __template(["", `  <script>
	document.addEventListener("DOMContentLoaded", () => {
		// Elementos del DOM
		const searchInput = document.getElementById("anime-search");
		const genreCheckboxes = document.querySelectorAll(
			'input[name="genre"]'
		);
		const animeCards = document.querySelectorAll(".card");

		// Funci\xF3n para filtrar los animes/series
		function filterAnime() {
			const searchTerm = searchInput.value.toLowerCase();
			const selectedGenres = Array.from(genreCheckboxes)
				.filter((checkbox) => checkbox.checked)
				.map((checkbox) => checkbox.value.toLowerCase());

			animeCards.forEach((card) => {
				const title =
					card.dataset.title ||
					card
						.querySelector(".card__title")
						.textContent.toLowerCase();
				const genres = card.dataset.genres.toLowerCase();

				// Verificar coincidencia con el buscador
				const matchesSearch = title.includes(searchTerm);

				// Verificar coincidencia con los g\xE9neros seleccionados
				const matchesGenres = selectedGenres.every((genre) =>
					genres.includes(genre)
				);

				// Mostrar u ocultar la tarjeta seg\xFAn los filtros
				card.style.display =
					matchesSearch && matchesGenres ? "grid" : "none";
			});
		}

		// Event listeners para los filtros
		searchInput.addEventListener("input", filterAnime);
		genreCheckboxes.forEach((checkbox) => {
			checkbox.addEventListener("change", filterAnime);
		});

		// Aplicar filtros al cargar la p\xE1gina
		filterAnime();
	});



	document.addEventListener("DOMContentLoaded", () => {
		// Elementos del DOM
		const searchInput = document.getElementById("anime-search");
		const genreCheckboxes = document.querySelectorAll(
			'input[name="genre"]'
		);
		const animeCards = document.querySelectorAll(".card");
		const STORAGE_KEY = "myList";

		// Funci\xF3n para filtrar los animes
		function filterAnime() {
			const searchTerm = searchInput.value.toLowerCase();
			const selectedGenres = Array.from(genreCheckboxes)
				.filter((checkbox) => checkbox.checked)
				.map((checkbox) => checkbox.value.toLowerCase());

			animeCards.forEach((card) => {
				const title =
					card.dataset.title ||
					card
						.querySelector(".card__title")
						.textContent.toLowerCase();
				const genres = card.dataset.genres.toLowerCase();

				// Verificar coincidencia con el buscador
				const matchesSearch = title.includes(searchTerm);

				// Verificar coincidencia con los g\xE9neros seleccionados
				const matchesGenres = selectedGenres.every((genre) =>
					genres.includes(genre)
				);

				// Mostrar u ocultar la tarjeta seg\xFAn los filtros
				card.style.display =
					matchesSearch && matchesGenres ? "grid" : "none";
			});
		}

		// Event listeners para los filtros
		searchInput.addEventListener("input", filterAnime);
		genreCheckboxes.forEach((checkbox) => {
			checkbox.addEventListener("change", filterAnime);
		});

		// Sistema de favoritos 
		function getFavorites() {
			return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
		}

		function saveFavorites(favs) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
		}

		function toggleFavorite(malId) {
			const favs = getFavorites();
			const updatedFavs = favs.includes(malId)
				? favs.filter((id) => id !== malId)
				: [...favs, malId];
			saveFavorites(updatedFavs);
			updateFavoriteIcons();
		}

		function updateFavoriteIcons() {
			const favs = getFavorites();
			document.querySelectorAll(".card__favorite").forEach((btn) => {
				const malId = Number(btn.dataset.id);
				btn.innerHTML = favs.includes(malId)
					? '<img src="/heart-fill.svg" alt="Quitar de favoritos" width="20" height="20">'
					: '<img src="/heart.svg" alt="Agregar a favoritos" width="20" height="20">';
			});
		}

		// Delegaci\xF3n de eventos para los favoritos
		document.addEventListener("click", (e) => {
			if (e.target.closest(".card__favorite")) {
				const card = e.target.closest(".card");
				const malId = Number(card.dataset.id);
				toggleFavorite(malId);
			}
		});

		// Inicializar
		updateFavoriteIcons();
		filterAnime(); // Aplicar filtros al cargar la p\xE1gina
	});
<\/script>
-->`])), renderComponent($$result, "PageLayout", $$PageLayout, { "data-astro-cid-gcxirbdo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="header" data-astro-cid-gcxirbdo> <section class="header__filter" id="genre-filters" data-astro-cid-gcxirbdo> ${uniqueGenres.map((genre) => renderTemplate`<label class="header__filter__label" data-astro-cid-gcxirbdo> <input type="checkbox" name="genre"${addAttribute(genre, "value")} class="header__filter__input" data-astro-cid-gcxirbdo> <span class="header__filter__chip" data-astro-cid-gcxirbdo> ${genre} <span class="header__filter__check-icon" data-astro-cid-gcxirbdo></span> </span> </label>`)} </section> <section class="header__search" data-astro-cid-gcxirbdo> <div class="header__search__form" data-astro-cid-gcxirbdo> <form action="" data-astro-cid-gcxirbdo> <input type="search" id="anime-search" autocomplete="off" class="header__search__input" placeholder="Buscar anime..." aria-label="Buscar anime" data-astro-cid-gcxirbdo> </form> </div> </section> </header> <main class="list" data-astro-cid-gcxirbdo> <section class="list__series" id="anime-list" data-astro-cid-gcxirbdo> ${animeData.map((anime) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "id": anime.id, "title": anime.title, "image": anime.image, "description": anime.description, "status": anime.status, "genres": anime.genres, "data-astro-cid-gcxirbdo": true })}`)} </section> <section class="list__pagination" data-astro-cid-gcxirbdo> ${pagination.current_page > 1 && renderTemplate`<a${addAttribute(`/list/${pagination.current_page - 1}`, "href")} class="list__pagination__link" aria-label="Página anterior" data-astro-cid-gcxirbdo>
Anterior
</a>`} <span class="list__pagination__current" data-astro-cid-gcxirbdo>
Página ${pagination.current_page} de ${pagination.last_visible_page} </span> ${pagination.has_next_page && renderTemplate`<a${addAttribute(`/list/${pagination.current_page + 1}`, "href")} class="list__pagination__link" aria-label="Página siguiente" data-astro-cid-gcxirbdo>
Siguiente
</a>`} </section> </main> ` }));
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/list/[page].astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/list/[page].astro";
const $$url = "/list/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
