import { c as createComponent, a as createAstro, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BCkfWrbs.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_wfkKv-Uw.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const { data } = await res.json();
  return data.slice(0, 10).map((anime) => ({
    params: { id: anime.mal_id.toString() },
    props: { anime }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { anime } = Astro2.props;
  const title = anime.title;
  const description = anime.synopsis;
  const image = anime.images.jpg.large_image_url;
  const genres = anime.genres.map((g) => g.name).join(", ");
  const year = anime.year || "Desconocido";
  const episodes = anime.episodes || "N/A";
  const duration = anime.duration || "N/A";
  const trailerUrl = anime.trailer?.url;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "data-astro-cid-mxye7ggd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="detalle" data-astro-cid-mxye7ggd> <div class="detalle__container" data-astro-cid-mxye7ggd> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="detalle__imagen" data-astro-cid-mxye7ggd> <div class="detalle__contenido" data-astro-cid-mxye7ggd> <h1 data-astro-cid-mxye7ggd>${title}</h1> <p class="detalle__descripcion" data-astro-cid-mxye7ggd>${description}</p> <p class="detalle__autor" data-astro-cid-mxye7ggd>Escrito por Tsugumi Ohba</p> <button id="calificacionBtn" data-astro-cid-mxye7ggd>Calificación</button> <div id="estrellas" style="display: none;" data-astro-cid-mxye7ggd>⭐️⭐️⭐️⭐️⭐️</div> <div class="detalle__botones" data-astro-cid-mxye7ggd> <button id="episodiosBtn"${addAttribute(episodes, "data-episodios")} data-astro-cid-mxye7ggd>Cant. epi</button> <button id="duracionBtn"${addAttribute(duration, "data-duracion")} data-astro-cid-mxye7ggd>Min. total</button> </div> <div class="detalle__botones-secundarios" data-astro-cid-mxye7ggd> <button id="miLista" data-astro-cid-mxye7ggd>Añadir a mi lista</button> ${trailerUrl && renderTemplate`<a${addAttribute(trailerUrl, "href")} target="_blank" data-astro-cid-mxye7ggd> <button data-astro-cid-mxye7ggd>Ver trailer</button> </a>`} </div> <div class="detalle__extras" data-astro-cid-mxye7ggd> <button data-astro-cid-mxye7ggd>${genres}</button> <button data-astro-cid-mxye7ggd>${year}</button> </div> </div> </div> </div> ` })}  ${renderScript($$result, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/detail/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/detail/[id].astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/detail/[id].astro";
const $$url = "/detail/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
