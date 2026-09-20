# Portfolio · arico-dev

Portfolio personal de **arico-dev** ([arico.is-a.dev](https://arico.is-a.dev)), estudiante y aspirante a desarrollador web.

Un sitio brutalista, minimalista y a lo grande: estética de estructura "industrial" con bordes duros, tipografía monoespaciada y un acento naranja. Tiene modo claro y oscuro, es totalmente responsive y está disponible en **español e inglés**.

## Qué encontrarás

- **Hero** con identidad propia: el nombre alterna entre el alias y el nombre real (al pasar el cursor en desktop, o al tocarlo en el móvil).
- **Stack de tecnologías** con las herramientas que uso (JavaScript, TypeScript, React, Next.js, Vue, Kotlin, Python y más).
- **Proyectos reales** desde mi GitHub, cada uno con botón de **Preview** para ver capturas de pantalla.
- **Formación**, **Sobre mí** y **Contacto** (por mail).

## Cómo está hecho

- **Vue 3** con **Vite**, **Tailwind CSS v4** y los iconos **Phosphor**.
- Diseño brutalista: radius 0, bordes de 2px, tipografía mono y acento naranja quemado.
- Tuve en cuenta la experiencia en móviles: el scroll se siente fluido y estable, respeta `prefers-reduced-motion` y el idioma se detecta solo.
- La primera pantalla carga rápido: el contenido principal se muestra de inmediato.

## Idioma

Detecta el idioma del navegador al entrar (español o inglés). Podés cambiar con el toggle de la barra superior y tu elección queda guardada.

## Deploy

Se publica automáticamente en **Vercel** (https://arico.is-a.dev) cada vez que hay un push a `main` en GitHub.

## Estructura

- `src/i18n.js` — todos los textos visibles en español e inglés
- `src/data.js` — datos de proyectos, stack y capturas
- `src/App.vue` — layout, secciones, navegación y lenguaje
- `src/components/` — componentes (cards, preview, reveal, tema)
- `public/projects/<slug>/` — capturas de cada proyecto
