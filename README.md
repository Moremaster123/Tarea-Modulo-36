# Tarea M36 – Accesibilidad web (Café Aurora)

Sitio estático de una cafetería ficticia, construido para aplicar los principios de accesibilidad web.

## Estructura

- `index.html` – Inicio
- `productos.html` – Productos (3 imágenes y tabla de precios)
- `contacto.html` – Formulario de contacto
- `css/styles.css`, `js/contacto.js`, `img/`

Para verlo, abre `index.html` en el navegador.

## Puntos de accesibilidad aplicados

| Requisito | Dónde se aplica |
| --- | --- |
| Idioma de lectura | `<html lang="es">` en las tres páginas |
| Texto en otro idioma | `lang="en"` (*coffee break*, *flat white*, *cold brew*, *newsletter*), `lang="it"` (*il caffè è un piacere*, *espresso*) y `lang="fr"` (*croissant*) |
| HTML semántico | `header`, `nav`, `main`, `section`, `article`, `figure`, `blockquote`, `address`, `footer`, tabla con `caption` y `scope` |
| Estructura ordenada | Un solo `h1` por página y encabezados sin saltos de nivel (`h1` → `h2` → `h3`); enlace "Saltar al contenido principal" |
| Textos alternativos | Las 4 etiquetas `img` tienen un `alt` que describe la imagen |
| Formulario | Cada campo tiene su `label` con `for` ligado al `id`; grupos con `fieldset` y `legend`; ayuda con `aria-describedby` |
| Contraste | Todos los textos superan 4.5:1 (WCAG AA); los ratios medidos están comentados al inicio de `css/styles.css` |
| Aria roles | `role="img"` en la calificación con estrellas (`index.html`) y `role="status"` en el mensaje de resultado del formulario (`contacto.html`) |
| Aria-label | `aria-label="Navegación principal"` en el `nav`, `aria-label="Café Aurora, ir al inicio"` en el logo y `aria-label="Calificación: 5 de 5 estrellas"` en las estrellas |

Además: foco visible con teclado, `aria-current="page"` en el menú y `aria-invalid` en los campos con error.
