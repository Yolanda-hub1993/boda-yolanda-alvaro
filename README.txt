# Web de boda — Yolanda & Álvaro (21·11·2026)

## 1) Abrir en tu ordenador
- Descarga este ZIP y descomprímelo.
- Abre `index.html` en tu navegador.


## 2) Publicar GRATIS en GitHub Pages
1. Crea un repositorio en GitHub (público), por ejemplo `boda-yolanda-alvaro`.
2. Sube `index.html`, `styles.css` y `script.js`.
3. Ve a **Settings → Pages**.
4. Selecciona: **Deploy from a branch**, rama **main**, carpeta **/**.

Tu web quedará en: `https://TUUSUARIO.github.io/boda-yolanda-alvaro/`

## 3) Conectar RSVP a Google Sheets
1. Crea un Google Sheet con pestaña `RSVP`.
2. En **Extensiones → Apps Script**, crea una Web App (doPost) que añada filas.
3. Copia la URL `/exec` y pégala en `script.js` en `RSVP_ENDPOINT`.

## 4) Qué puedes editar rápido
- Paradas del bus: `BUS_STOPS` en `script.js`.
- Hoteles: `HOTELS` en `script.js`.
- Enlaces dónde comer: `LINKS` en `script.js`.
