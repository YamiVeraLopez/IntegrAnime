import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCkfWrbs.mjs';
import { $ as $$AuthForm } from '../chunks/AuthForm_DjEb9MVV.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_wfkKv-Uw.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '  <script>\n	document.addEventListener("DOMContentLoaded", () => {\n		const form = document.getElementById("login-form");\n		const usersKey = "animeAppUsers";\n\n		form.addEventListener("submit", (e) => {\n			e.preventDefault();\n			clearErrors();\n\n			const username = document.getElementById("username").value.trim();\n			const password = document.getElementById("password").value;\n\n			// Validaciones b\xE1sicas\n			let isValid = true;\n\n			if (username.length === 0) {\n				showError("username-error", "Ingresa tu usuario");\n				isValid = false;\n			}\n\n			if (password.length === 0) {\n				showError("password-error", "Ingresa tu contrase\xF1a");\n				isValid = false;\n			}\n\n			if (isValid) {\n				const users = JSON.parse(localStorage.getItem(usersKey)) || [];\n				const user = users.find((u) => u.username === username);\n\n				if (!user) {\n					showError("username-error", "Usuario no encontrado");\n					return;\n				}\n\n				if (user.password !== password) {\n					showError("password-error", "Contrase\xF1a incorrecta");\n					return;\n				}\n\n				// Iniciar sesi\xF3n\n				localStorage.setItem(\n					"animeAppCurrentUser",\n					JSON.stringify({\n						username: user.username,\n						avatarUrl: user.avatarUrl,\n						bannerUrl: user.bannerUrl,\n					})\n				);\n\n				window.location.href = "/dashboard";\n			}\n		});\n\n		function showError(id, message) {\n			const element = document.getElementById(id);\n			element.textContent = message;\n			element.style.display = "block";\n		}\n\n		function clearErrors() {\n			document.querySelectorAll(".error-message").forEach((el) => {\n				el.textContent = "";\n				el.style.display = "none";\n			});\n		}\n	});\n<\/script>'])), renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Iniciar Sesi\xF3n", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="auth-page" style="background-image: url(/ZeroTwo.jpg)" data-astro-cid-sgpqyurt> <div class="overlay" data-astro-cid-sgpqyurt></div> <div class="content" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Iniciar Sesión</h1> ${renderComponent($$result2, "AuthForm", $$AuthForm, { "mode": "login", "data-astro-cid-sgpqyurt": true })} <p class="register-link" data-astro-cid-sgpqyurt>
¿No tienes cuenta? <a href="/register" data-astro-cid-sgpqyurt>Regístrate</a> </p> </div> </main> ` }));
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/login.astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
