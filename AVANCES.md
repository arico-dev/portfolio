# Avances — Portfolio (arico-dev)

Site en vivo: **https://arico.is-a.dev** (Vercel, auto-deploy desde `main`).
Repo público: **https://github.com/arico-dev/portfolio**.
Stack: Vue 3 + Vite + Tailwind CSS v4. Diseño brutalista (radius 0, bordes 2px, mono, acento naranja quemado).

---

## Sesión actual (2026-09-02) — audit de diseño + iteración del stack

### Audit con la skill `design-taste-frontend` (anti-slop)
- **Pasa**: contraste AA (CTA 5.12:1, texto-soft 8.5:1 en ambos modos), nav 1 línea / 66px, 0 em-dashes, sin overflow desktop/móvil, hero cabe en viewport, dark mode + reduced-motion, sin "AI tells" (sin Inter, sin marquee, sin version footers, 1 accent lockeado, sin listeners de scroll).
- **Fallos corregidos**: subtext del hero tenía 27 palabras (límite 20); el stack vivía dentro del hero (logo-wall en hero, hero >4 elementos); el anchor `Proyectos` funcionaba como scroll-cue; sin `scroll-padding-top` los anchors caían tapados por el header sticky.
- **Pendiente señalado por el skill (no aplicado por decisión de diseño)**: el sitio es 100 % textual (0 imágenes reales) — el skill lo marca como "trabajo incompleto".

### Cambios aplicados (commit `5492384`, último push)
1. **Subtext del hero → 20 palabras exactas** (`i18n.js`):
   ES: *"Aún no soy desarrollador, pero es lo que me gusta hacer: web con React, Next.js y Vue; móvil con Kotlin."*
   EN: *"Not yet a developer, but it's what I love doing: web with React, Next.js and Vue; mobile with Kotlin."*
2. **Stack movido al fondo del hero** (donde estaba el cue `Proyectos`): fila centrada en desktop con tooltip hover, cuadrícula 5×2 con labels en móvil. Se quitó la franja seccionada con bordes y el cue redundante (el nav ya cubre "Proyectos").
3. **Stack descubrible**: entrada "Stack" en el nav (desktop: `Stack · Proyectos · Sobre`; también en menú móvil) con `id="stack"`. El orden del skill "logo-wall fuera del hero" se reabrió intencionalmente por preferencia de diseño.
4. **`scroll-padding-top: 90px`** en `style.css`: todos los anchors aterrizan justo bajo el header sticky (verificado a top 90px).
5. **Shell LCP regenerado** desde el build real (header + hero + stack, ~13 KB): LCP local 156 ms.

### Sesión anterior (mismo día)
- **Fix overflow móvil**: hero `flex-col` en móvil (bodyScrollWidth 507 → 375).
- **H1 responsive**: base `text-4xl` en móvil para que "Anthony Allen" no desborde.
- **Nombre por tap**: toggle universal `nameToggled` (tap/Enter/Espacio siempre; hover como extra en desktop) — robusto en dispositivos táctiles.
- **LCP 904 → 300 ms** (luego 132→156 ms con cada iteración del shell): shell estático del header+hero dentro de `#app` en `index.html` + `ProjectPreview` como chunk lazy (`defineAsyncComponent`).
- **Stack en móvil ordenado**: grid 5×2 con labels `text-[10px]` bajo cada icono; desktop con tooltip hover.
- **Repo GitHub**: homepage → `https://arico.is-a.dev` (`gh repo edit`).
- **README** actualizado (deploy, formación, stack móvil, SEO, nota de sincronizar el shell).
- **Favicon**: cache-buster `?v=2` (el logo de Vue era caché del navegador; el `a/` brutalista se servía bien).

### Trabajo previo (resumen)
- i18n es/en (vue-i18n, `pf-locale`), toggle de idioma, SEO por idioma.
- Routing por `location.hash` (`#/preview/<slug>`), pantalla de preview con galería + placeholders.
- Sección Formación, Sobre corregido (estudiante, aún no desarrollador), limpieza de CTAs duplicados.
- Fix del reveal de Proyectos en `useReveal.js` (observer contra `document` + fallback).
- Offuscado `allen.are@proton.me` (`atob`).

---

## Estado técnico actual

- **Nav**: `Stack · Proyectos · Sobre` (+ Contacto en botón separado). Menú móvil con hamburguesa.
- **Hero**: eyebrow + H1 con toggle de nombre + subtext (20 palabras) | caja de Estado (Estudiante/Repos/Enfoque) | fila de stack al fondo.
- **Stack**: dentro del hero, `id="stack"`, devicon SVGs con `invert(1)` en dark (`.stack-icon-invert`).
- **LCP**: shell estático minificado en `index.html` dentro de `<div id="app">`; enlazar a regeneración manual.
- **ETI**: una sola fuente (propia, no Inter), 1 accent (`#c4401e` / claro, `#e2583e` / oscuro), bordes 2px, radius 0.

---

## Gotchas (importantes para retomar)

- **Tailwind v4**: las utilities `translate-*` usan la propiedad CSS `translate`, NO `transform`. Verificar con `getComputedStyle(el).translate`.
- **i18n**: `t()` no devuelve arrays → usar `tm()` para credenciales/listas. `|` es delimitador de plural en vue-i18n → usar `│` (U+2502) en `site.title`.
- **Shell LCP**: al editar cualquier cosa que renderice el header/hero, hay que regenerar el shell (build → `setsid npm run preview -- --port 4174` → capturar `header` + primer `section` de `#contenido` → minificar → inyectar en `index.html`). Vue lo reemplaza al montar.
- **NUNCA** `pkill -f "vite preview"` — mata la sesión del shell. Usar puertos nuevos (4174/4175).
- **Playwright**: `/home/are/.npm/_npx/e41f203b7505f1fb/node_modules/playwright`; dev en 5173.
- `gh` 2.98.0 auth como `arico-dev`. Vercel CLI no instalado (deploy automático por push).
- Menú móvil usa el mismo array `nav` que el desktop (cambiar en un solo lugar).

---

## Pendientes

1. **Imágenes reales de preview** en `public/projects/<slug>/` (rutas documentadas en PENDIENTES.md). El skill marca el sitio 100 % textual como "incompleto".
2. Confirmar visualmente en navegador incógnito tras deploy (favicon ya con cache-buster).
3. Opcional: revisar balance de eyebrows («Hola, soy», «Estado», «¿Un proyecto en mente?») — dentro de presupuesto si «Estado» se cuenta como label de caja.

## Cómo retomar

- Dev: `npm run dev` (http://localhost:5173)
- Commit: `git add -A && git commit -m "..." && git push` → auto-deploy Vercel.
- Este archivo, AGENTS.md y PENDIENTES.md son notas locales (no se publican).