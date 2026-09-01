# Portfolio · arico-dev

Portfolio personal brutalista de **arico-dev** ([arico.is-a.dev](https://arico.is-a.dev)), estudiante y aspirante a desarrollador web.

Construido con **Vue 3** (`<script setup>`), **Vite** y **Tailwind CSS v4**, con iconos **Phosphor**. Diseño brutalista/minimalista con modo claro y oscuro, responsive, soporte de `prefers-reduced-motion`, y bilingüe **español/inglés** con detección del idioma del navegador.

Optimizado para velocidad: el header + hero se pre-renderizan como HTML estático en `index.html` (LCP sin esperar el JS) y la pantalla de preview de proyectos se divide en un chunk bajo demanda.

## Stack

- Vue 3 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- @phosphor-icons/vue
- vue-i18n v11 (traducciones es/en)
- IntersectionObserver para reveal-on-scroll
- Devicon (SVG) para los iconos de tecnología del hero

## Secciones

- Hero con identidad y estado; el nombre alterna entre alias y nombre real (hover en desktop, tap en móvil)
- Stack de tecnologías (iconos de marca con label en móvil y tooltip en desktop)
- Proyectos reales con botón **Preview** → pantalla de capturas por proyecto
- Formación
- Sobre mí
- Contacto

## Estructura

- `src/i18n.js` — todos los textos visibles en `es` y `en`
- `src/data.js` — datos no traducibles (slugs, urls, stack, capturas)
- `src/App.vue` — layout, routing por hash (`#/preview/<slug>`), toggles de tema/idioma, SEO dinámico (título, metadatos y `lang` por idioma)
- `src/components/ProjectCard.vue` y `ProjectPreview.vue` — cards y pantalla de preview (cargada bajo demanda)
- `public/favicon.svg` — favicon propio
- `public/projects/<slug>/` — capturas reales de cada proyecto (placeholder automático si falta el archivo)

> El hero estático dentro de `#app` en `index.html` es un espejo del render de Vue: pinta de inmediato y Vue lo reemplaza al montar sin parpadeo. Al editar el hero, actualizá también ese shell.

## Idioma

Detecta `navigator.language` al inicio. Toggle manual en la navbar (persistido en `localStorage`). Para editar textos, actualizá ambas entradas (`es` y `en`) en `src/i18n.js`.

Los datos de proyectos se sincronizan con el perfil público de GitHub de arico-dev.