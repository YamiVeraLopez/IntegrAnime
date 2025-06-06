import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, g as renderSlot } from './astro/server_BCkfWrbs.mjs';
import { $ as $$Layout } from './Layout_CHSLEJHG.mjs';
/* empty css                        */

const $$Astro$6 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Home;
  const { height, width, fill, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")} viewBox="0 -960 960 960"${addAttribute(width, "width")}${addAttribute(fill, "fill")}${addAttribute(className, "class")}><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z"></path></svg>`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/icons/Home.astro", void 0);

const $$Astro$5 = createAstro();
const $$AddList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AddList;
  const { height, width, fill, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")} viewBox="0 -960 960 960"${addAttribute(width, "width")}${addAttribute(fill, "fill")}${addAttribute(className, "class")}><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z"></path></svg>`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/icons/AddList.astro", void 0);

const $$Astro$4 = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$User;
  const { height, width, fill, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")} viewBox="0 -960 960 960"${addAttribute(width, "width")}${addAttribute(fill, "fill")}${addAttribute(className, "class")}><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"></path></svg>`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/icons/User.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav class="navbar" data-astro-cid-3ef6ksr2> <ul class="navbar__list" data-astro-cid-3ef6ksr2> <li class="navbar__list__item" title="Añadir serie" data-astro-cid-3ef6ksr2> <a href="/formulario" data-astro-cid-3ef6ksr2> <picture data-astro-cid-3ef6ksr2> ${renderComponent($$result2, "AddList", $$AddList, { "height": "40", "width": "40", "fill": "#666666", "className": "icon", "data-astro-cid-3ef6ksr2": true })} </picture> </a> </li> <li class="navbar__list__item" title="Inicio" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <picture data-astro-cid-3ef6ksr2> ${renderComponent($$result2, "Home", $$Home, { "height": "40", "width": "40", "fill": "#666666", "className": "icon", "data-astro-cid-3ef6ksr2": true })} </picture> </a> </li> <li class="navbar__list__item" title="Mi perfil" data-astro-cid-3ef6ksr2> <a href="/profile" data-astro-cid-3ef6ksr2> <picture data-astro-cid-3ef6ksr2> ${renderComponent($$result2, "User", $$User, { "height": "40", "width": "40", "fill": "#666666", "className": "icon", "data-astro-cid-3ef6ksr2": true })} </picture> </a> </li> </ul> </nav> </header> ` })} `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$LinkedinLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedinLogo;
  const { height, width, fill, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")} viewBox="0 0 24 24"${addAttribute(width, "width")}${addAttribute(fill, "fill")}${addAttribute(className, "class")}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/icons/LinkedinLogo.astro", void 0);

const $$Astro$2 = createAstro();
const $$GithubLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GithubLogo;
  const { height, width, fill, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")} viewBox="0 0 24 24"${addAttribute(width, "width")}${addAttribute(fill, "fill")}${addAttribute(className, "class")}><path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path></svg>`;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/icons/GithubLogo.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFooter;
  const { img = "https://i.pinimg.com/736x/6e/4c/41/6e4c411c9c1a3843af3d402e03a966ad.jpg", name, linkLinkedin, linkGithub } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-xlnpbl63": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="card-footer" data-astro-cid-xlnpbl63> <picture class="card-footer__img" data-astro-cid-xlnpbl63> <img${addAttribute(img, "src")}${addAttribute(name, "alt")} data-astro-cid-xlnpbl63> </picture> <h5 class="card-footer__name" data-astro-cid-xlnpbl63>${name}</h5> <section class="card-footer__social" data-astro-cid-xlnpbl63> <a${addAttribute(linkLinkedin, "href")} class="card-footer__social--linkedin" target="_blank" rel="noopener noreferrer" data-astro-cid-xlnpbl63> ${renderComponent($$result2, "LinkedinLogo", $$LinkedinLogo, { "height": "25", "width": "25", "fill": "#0a66c2", "className": "icon", "data-astro-cid-xlnpbl63": true })} </a> <a${addAttribute(linkGithub, "href")} class="card-footer__social--github" target="_blank" rel="noopener noreferrer" data-astro-cid-xlnpbl63> ${renderComponent($$result2, "GithubLogo", $$GithubLogo, { "height": "25", "width": "25", "fill": "#333333", "className": "icon", "data-astro-cid-xlnpbl63": true })} </a> </section> </article> ` })} `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/CardFooter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <h2 class="footer__title" data-astro-cid-sz7xmlte>Hecho con 💖 por:</h2> <section class="footer__cards" data-astro-cid-sz7xmlte> ${renderComponent($$result2, "CardFooter", $$CardFooter, { "name": "Benjam\xEDn Centurion", "linkLinkedin": "", "linkGithub": "", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result2, "CardFooter", $$CardFooter, { "name": "Edgardo De la Cruz", "linkLinkedin": "", "linkGithub": "", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result2, "CardFooter", $$CardFooter, { "img": "https://avatars.githubusercontent.com/u/113394062?s=400&u=c0cc15c6fb0ce53ff64bb336843422feff4dd322&v=4", "name": "Esteban Karaputny", "linkLinkedin": "https://www.linkedin.com/in/esteban-karaputny", "linkGithub": "https://github.com/estebankaraputny", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result2, "CardFooter", $$CardFooter, { "img": "https://i.pinimg.com/736x/24/28/9b/24289bdb727560a932b42cdebaa098e2.jpg", "name": "Yamila Vera L\xF3pez", "linkLinkedin": "https://www.linkedin.com/in/yamila-vera-lopez-6b3910362/", "linkGithub": "https://github.com/YamiVeraLopez", "data-astro-cid-sz7xmlte": true })} </section> </footer> ` })} `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-3zbxo6iv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid__container" data-astro-cid-3zbxo6iv> <header class="header" data-astro-cid-3zbxo6iv> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-3zbxo6iv": true })} </header> <section class="main" data-astro-cid-3zbxo6iv> ${renderSlot($$result2, $$slots["default"])} </section> <footer class="foot" data-astro-cid-3zbxo6iv> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-3zbxo6iv": true })} </footer> </div> ` })} `;
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
