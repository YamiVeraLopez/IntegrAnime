import { c as createComponent, a as createAstro, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BCkfWrbs.mjs';
import { $ as $$Layout } from './Layout_CHSLEJHG.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, title, image, description, status, genres } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-dohjnao5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="card"${addAttribute(id, "data-id")}${addAttribute(genres.join(", "), "data-genres")}${addAttribute(title.toLowerCase(), "data-title")} data-astro-cid-dohjnao5> <picture class="card__image" data-astro-cid-dohjnao5> <img${addAttribute(image, "src")}${addAttribute(`Poster de ${title}`, "alt")} loading="lazy" width="200" height="300" data-astro-cid-dohjnao5> </picture> <p class="card__status" data-astro-cid-dohjnao5>${status}</p> <h2 class="card__title" data-astro-cid-dohjnao5>${title}</h2> <p class="card__description" data-astro-cid-dohjnao5> ${description?.substring(0, 80) ?? "Sin descripci\xF3n"} </p> <div class="card__buttons" data-astro-cid-dohjnao5> <a${addAttribute(`/detail/${id}`, "href")} data-astro-cid-dohjnao5> <button class="card__buttons__button" data-astro-cid-dohjnao5> Ver más </button> </a> <button class="card__buttons__button card__favorite" aria-label="Agregar a favoritos" type="button"${addAttribute(id, "data-id")} data-astro-cid-dohjnao5> <span class="sr-only" data-astro-cid-dohjnao5>Favorito</span> </button> </div> </article> ` })}  ${renderScript($$result, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Card.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Card.astro", void 0);

export { $$Card as $ };
