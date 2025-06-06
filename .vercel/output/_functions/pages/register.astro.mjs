import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BCkfWrbs.mjs';
import { $ as $$AuthForm } from '../chunks/AuthForm_DjEb9MVV.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_wfkKv-Uw.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '  <script>\n	document.addEventListener("DOMContentLoaded", () => {\n		const form = document.getElementById("register-form");\n		const usersKey = "animeAppUsers";\n\n		form.addEventListener("submit", (e) => {\n			e.preventDefault();\n			clearErrors();\n\n			// Obtener valores\n			const bannerUrl = document.getElementById("banner-url").value;\n			const avatarUrl = document.getElementById("avatar-url").value;\n			const username = document.getElementById("username").value.trim();\n			const password = document.getElementById("password").value;\n			const confirmPassword =\n				document.getElementById("confirm-password").value;\n\n			// Validaciones\n			let isValid = true;\n\n			if (!isValidUrl(bannerUrl)) {\n				showError(\n					"banner-error",\n					"Ingresa una URL v\xE1lida para el banner"\n				);\n				isValid = false;\n			}\n\n			if (!isValidUrl(avatarUrl)) {\n				showError(\n					"avatar-error",\n					"Ingresa una URL v\xE1lida para el avatar"\n				);\n				isValid = false;\n			}\n\n			if (username.length < 3) {\n				showError(\n					"username-error",\n					"El usuario debe tener al menos 3 caracteres"\n				);\n				isValid = false;\n			}\n\n			if (password.length < 6) {\n				showError(\n					"password-error",\n					"La contrase\xF1a debe tener al menos 6 caracteres"\n				);\n				isValid = false;\n			}\n\n			if (password !== confirmPassword) {\n				showError("confirm-error", "Las contrase\xF1as no coinciden");\n				isValid = false;\n			}\n\n			// Verificar si el usuario ya existe\n			const users = JSON.parse(localStorage.getItem(usersKey)) || [];\n			if (users.some((user) => user.username === username)) {\n				showError("username-error", "Este usuario ya est\xE1 registrado");\n				isValid = false;\n			}\n\n			if (isValid) {\n				// Guardar usuario\n				const newUser = {\n					bannerUrl,\n					avatarUrl,\n					username,\n					password, \n					createdAt: new Date().toISOString(),\n				};\n\n				users.push(newUser);\n				localStorage.setItem(usersKey, JSON.stringify(users));\n\n				// Guardar sesi\xF3n y redirigir\n				localStorage.setItem(\n					"animeAppCurrentUser",\n					JSON.stringify({\n						username,\n						avatarUrl,\n						bannerUrl,\n					})\n				);\n\n				window.location.href = "/";\n			}\n		});\n\n		function isValidUrl(string) {\n			try {\n				new URL(string);\n				return true;\n			} catch (_) {\n				return false;\n			}\n		}\n\n		function showError(id, message) {\n			const element = document.getElementById(id);\n			element.textContent = message;\n			element.style.display = "block";\n		}\n\n		function clearErrors() {\n			document.querySelectorAll(".error-message").forEach((el) => {\n				el.textContent = "";\n				el.style.display = "none";\n			});\n		}\n	});\n<\/script>'])), renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Registro", "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="auth-page" style="background-image: url(/ZeroTwo.jpg)" data-astro-cid-qraosrxq> <div class="overlay" data-astro-cid-qraosrxq></div> <div class="content" data-astro-cid-qraosrxq> <h1 data-astro-cid-qraosrxq>Crear Cuenta</h1> ${renderComponent($$result2, "AuthForm", $$AuthForm, { "mode": "register", "data-astro-cid-qraosrxq": true })} <p class="login-link" data-astro-cid-qraosrxq>
¿Ya tienes cuenta? <a href="/login" data-astro-cid-qraosrxq>Inicia sesión</a> </p> </div> </main> ` }));
}, "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/register.astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/ProyectoIntegrarTec/IntegrAnime/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Register,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
