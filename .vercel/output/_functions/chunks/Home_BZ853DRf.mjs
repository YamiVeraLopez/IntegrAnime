import { c as createComponent, m as maybeRenderHead, g as renderSlot, r as renderTemplate, d as renderComponent, e as renderScript } from './astro/server_BCkfWrbs.mjs';
/* empty css                        */
import { $ as $$Card } from './Card_CWaF67Vr.mjs';

const $$Carrusel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="carrusel" data-astro-cid-sxgvwazn> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Carrusel.astro", void 0);

const $$CardList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-p3vyftr4> <h2 class="title__list" data-astro-cid-p3vyftr4>Mi lista</h2> <div class="content__card-list" data-astro-cid-p3vyftr4> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/CardList.astro", void 0);

const $$Tendencias = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity");
  if (!res.ok) {
    throw new Error("Error al cargar las tendencias");
  }
  const data = await res.json();
  const tendencias = data.data.slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<section class="tendencias" data-astro-cid-bvqr7yoo> <h2 data-astro-cid-bvqr7yoo>Tendencias</h2> <ul class="tendencias-list" data-astro-cid-bvqr7yoo> ${tendencias.map((anime) => renderTemplate`<li class="tendencia-item" data-astro-cid-bvqr7yoo> ${renderComponent($$result, "Card", $$Card, { "id": anime.mal_id, "title": anime.title, "image": anime.images.jpg.image_url, "description": anime.synopsis?.substring(0, 80) ?? "Sin descripci\xF3n", "status": anime.status, "genres": anime.genres.map((genre) => genre.name), "data-astro-cid-bvqr7yoo": true })} </li>`)} </ul> </section> `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Tendencias.astro", void 0);

const $$Finalizados = createComponent(async ($$result, $$props, $$slots) => {
  let finalizados = [];
  try {
    const res = await fetch("https://api.jikan.moe/v4/anime?status=complete&order_by=popularity");
    if (!res.ok) {
      throw new Error("Error al cargar los finalizados");
    }
    const data = await res.json();
    finalizados = data.data.filter((anime) => anime.status === "Finished Airing").slice(0, 6);
  } catch (error) {
    finalizados = [];
  }
  return renderTemplate`${maybeRenderHead()}<section class="finalizados" data-astro-cid-yn5yx2cp> <h2 data-astro-cid-yn5yx2cp>Finalizados</h2> <ul class="finalizados-list" data-astro-cid-yn5yx2cp> ${finalizados.map((anime) => renderTemplate`<li class="finalizado-item" data-astro-cid-yn5yx2cp> ${renderComponent($$result, "Card", $$Card, { "id": anime.mal_id, "title": anime.title, "image": anime.images.jpg.image_url, "description": anime.synopsis?.substring(0, 80) ?? "Sin descripci\xF3n", "status": anime.status, "genres": anime.genres.map((genre) => genre.name), "data-astro-cid-yn5yx2cp": true })} </li>`)} </ul> </section> `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Finalizados.astro", void 0);

const $$EnEmision = createComponent(async ($$result, $$props, $$slots) => {
  let enEmision = [];
  try {
    const res = await fetch("https://api.jikan.moe/v4/anime?status=airing&order_by=popularity&sort=asc&limit=6");
    if (!res.ok) {
      throw new Error("Error al cargar los animes en emisi\xF3n");
    }
    const data = await res.json();
    enEmision = data.data.filter((anime) => anime.status === "Currently Airing").slice(0, 6);
  } catch (error) {
    enEmision = [];
  }
  return renderTemplate`${maybeRenderHead()}<section class="finalizados" data-astro-cid-aw62ipbr> <h2 data-astro-cid-aw62ipbr>En emisión</h2> <ul class="finalizados-list" data-astro-cid-aw62ipbr> ${enEmision.map((anime) => renderTemplate`<li class="finalizado-item" data-astro-cid-aw62ipbr> ${renderComponent($$result, "Card", $$Card, { "id": anime.mal_id, "title": anime.title, "image": anime.images.jpg.image_url, "description": anime.synopsis?.substring(0, 80) ?? "Sin descripci\xF3n", "status": anime.status, "genres": anime.genres.map((genre) => genre.name), "data-astro-cid-aw62ipbr": true })} </li>`)} </ul> </section> `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/EnEmision.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-cygrgcmh> <!-- Carrusel --> ${renderComponent($$result, "Carrusel", $$Carrusel, { "data-astro-cid-cygrgcmh": true }, { "default": ($$result2) => renderTemplate` <img class="img-carrusel" src="public/assets/image/dragon-ball-fighterz-goku-gt_0.webp" alt="" data-astro-cid-cygrgcmh> <img class="img-carrusel" src="public/assets/image/chain.jpg" alt="" data-astro-cid-cygrgcmh> <img class="img-carrusel" src="public/assets/image/nezuko.jpg" alt="" data-astro-cid-cygrgcmh> <img class="img-carrusel" src="public/assets/image/shingeki.jpeg" alt="" data-astro-cid-cygrgcmh> <img class="img-carrusel" src="public/assets/image/heroacademy.jpg" alt="" data-astro-cid-cygrgcmh> ` })} <!-- Mis listas --> <section data-astro-cid-cygrgcmh> ${renderComponent($$result, "CardList", $$CardList, { "data-astro-cid-cygrgcmh": true }, { "default": ($$result2) => renderTemplate` <div class="card__list" data-astro-cid-cygrgcmh> <h3 data-astro-cid-cygrgcmh>Total</h3> <p data-astro-cid-cygrgcmh>50</p> </div> <div class="card__list" data-astro-cid-cygrgcmh> <h3 data-astro-cid-cygrgcmh>Pendientes</h3> <p data-astro-cid-cygrgcmh>35</p> </div> <div class="card__list" data-astro-cid-cygrgcmh> <h3 data-astro-cid-cygrgcmh>Vistos</h3> <p data-astro-cid-cygrgcmh>15</p> </div> ` })} </section> <!-- Tendencias --> ${renderComponent($$result, "Tendencias", $$Tendencias, { "data-astro-cid-cygrgcmh": true })} <!-- Finalizados --> ${renderComponent($$result, "Finalizados", $$Finalizados, { "data-astro-cid-cygrgcmh": true })} <!-- En emisión --> ${renderComponent($$result, "EnEmision", $$EnEmision, { "data-astro-cid-cygrgcmh": true })} </main> ${renderScript($$result, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/Home.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/Home.astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/Home.astro";
const $$url = "/Home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Home as $, _page as _ };
