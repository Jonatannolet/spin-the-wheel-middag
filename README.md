# Spin The Wheel — 6 Stjernes Middag

En Hell's Kitchen-inspirert spin-the-wheel for å velge kveldens middag. Snurr hjulet og lag mat fra et tilfeldig land — komplett med Gordon Ramsay-energi, matmemes og insider-info om hvert kjøkken.

## Land

Italia · Spania · Tyrkia · Frankrike · India · Japan · USA · Vietnam · Argentina · Marocco · Etiopia/Eritrea

## Funksjoner

- Dramatisk Hell's Kitchen-tema (svart, rød, gull, flammer)
- 11-segments SVG-hjul med radiale gradients og lyspærer rundt kanten
- Ekte spinn-fysikk med tilfeldig landing
- Pop-up modal med signaturretter, insider-info og "Chef Ramsay sier"-meme per land
- Konfetti når du lander
- Fullt mobilvennlig (touch, scroll-lås, hover-gating, safe-area-inset)
- Reduced-motion respekt
- Tastatur: `Mellomrom` for å snurre, `Esc` for å lukke modal

## Kjør lokalt

Med Node:
```bash
npm start
```

Eller bare med Python:
```bash
python -m http.server 8000
```

Åpne http://localhost:3000 (Node) eller http://localhost:8000 (Python).

## Deploy til Railway

Repoet er klart for Railway. Push til GitHub, koble Railway til repoet, og deploy:

1. **railway.json** sier til Railway å bruke Nixpacks og kjøre `npm start`.
2. **server.js** er en bitteliten Node http-server (null avhengigheter) som lytter på `process.env.PORT`.
3. Railway gir automatisk en HTTPS-URL.

```bash
# Lokalt — verifiser at det starter:
PORT=3000 npm start
```

## Stack

Ren HTML, CSS og vanilla JS i frontend. Node http stdlib til server. Ingen build-steg, ingen runtime-avhengigheter utover Node.

## Inspirert av

- [spinthewheel.io](https://spinthewheel.io/) — funksjonalitet
- [Gordon Ramsay's Hell's Kitchen](https://www.gordonramsayrestaurants.com/en/us/hells-kitchen) — visuell stil
