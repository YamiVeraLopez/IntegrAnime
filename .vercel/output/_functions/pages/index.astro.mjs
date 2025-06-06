import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_BCkfWrbs.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_wfkKv-Uw.mjs';
import { $ as $$Home } from '../chunks/Home_BZ853DRf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/index.astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
