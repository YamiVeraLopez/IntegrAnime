import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BpQkF_NA.mjs';
import { manifest } from './manifest_BIRNRLcl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/detail/_id_.astro.mjs');
const _page2 = () => import('./pages/formulario.astro.mjs');
const _page3 = () => import('./pages/home.astro.mjs');
const _page4 = () => import('./pages/list/_page_.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/profile.astro.mjs');
const _page7 = () => import('./pages/register.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.9.0_@types+node@22._71fd28ca1a0dab589fc8812185744254/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/detail/[id].astro", _page1],
    ["src/pages/formulario.astro", _page2],
    ["src/pages/Home.astro", _page3],
    ["src/pages/list/[page].astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/profile.astro", _page6],
    ["src/pages/register.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d493cd88-9451-49cd-a72d-622b9461290a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
