# Portfolio · arico-dev

Portfolio personal brutalista de **arico-dev**, estudiante y aspirante a desarrollador web.

Construido con **Vue 3** (`<script setup>`), **Vite** y **Tailwind CSS v4**, con iconos **Phosphor**. Diseño brutalista/minimalista con modo claro y oscuro, responsive, soporte de `prefers-reduced-motion`, y bilingüe **español/inglés** con detección del idioma del navegador.

## Stack

- Vue 3 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- @phosphor-icons/vue
- vue-i18n v11 (traducciones es/en)
- IntersectionObserver para reveal-on-scroll
- Devicon (SVG) para los iconos de tecnología del hero

## Secciones

- Hero con identidad y estado
- Stack de tecnologías (iconos de marca con tooltip)
- Proyectos reales con botón **Preview** → pantalla de capturas por proyecto
- Sobre mí
- Contacto

## Estructura

- `src/i18n.js` — todos los textos visibles en `es` y `en`
- `src/data.js` — datos no traducibles (slugs, urls, stack, capturas)
- `src/App.vue` — layout, routing por hash (`#/preview/<slug>`) y toggles de tema/idioma
- `src/components/ProjectCard.vue` y `ProjectPreview.vue` — cards y pantalla de preview
- `public/projects/<slug>/` — capturas reales de cada proyecto (placeholder automático si falta el archivo)

## Idioma

Detecta `navigator.language` al inicio. Toggle manual en la navbar (persistido en `localStorage`). Para editar textos, actualizá ambas entradas (`es` y `en`) en `src/i18n.js`.

Los datos de proyectos se sincronizan con el perfil público de GitHub de arico-dev.