import { c as createComponent, a as createAstro, b as addAttribute, f as renderHead, g as renderSlot, r as renderTemplate } from './astro/server_BCkfWrbs.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
