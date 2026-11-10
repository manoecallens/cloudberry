# Landingspagina Cloudberry · leesmij

One-pager voor de awareness-campagne. Gemaakt met Claude (prompt 80 in `LOGBOEK.md`).

## Bekijken
Dubbelklik op `index.html`. De pagina werkt ook zonder internet (font en beelden zitten in de map).

## Bestanden
| Bestand | Inhoud |
|---|---|
| `index.html` | De pagina: navigatie, hero, ticker, verhaal, 4 smaken, gezinsmomenten, nieuwsbrief (CTA + formulier), FAQ, footer |
| `style.css` | Huisstijl en responsive opmaak: mobiel eerst, tablet vanaf 640 px, desktop vanaf 1024 px |
| `script.js` | Rijen "Cloudberry + woord" in de kaarten (zoals Figma Buzz), zacht verschijnen bij scrollen, voorbeeldformulier |
| `fonts/space-grotesk.ttf` | Kopie van `2. Huisstijl/4. Space Grotesk.ttf` (variabel, 300–700) |
| `images/` | Webversies (WebP) van de beelden, zie hieronder |

Webbestanden hebben korte namen zonder spaties of nummers. Dat is de uitzondering voor code uit `README.md`: spaties in bestandsnamen breken links op GitHub Pages.

## Beelden (alleen bijgesneden, niet bewerkt)
| Webbeeld | Bron |
|---|---|
| `hero-vier-smaken.webp` | `4. AI-beelden/2. Zonder achtergrond/5. Vier smaken enkel.png` |
| `smaak-groen/geel/oranje/rood.webp` | `4. AI-beelden/2. Zonder achtergrond/1.–4. … enkel.png` |
| `cta-vier-smaken.webp` | `4. AI-beelden/2. Zonder achtergrond/5. Vier smaken hand.png` |
| `verhaal-gezin.webp` | `4. AI-beelden/1. Socials/2. Geel gezin.png` |
| `moment-familie.webp` | `4. AI-beelden/1. Socials/5. Vier smaken gezin.png` |
| `moment-groen/oranje/rood-gezin.webp` | `4. AI-beelden/1. Socials/1., 3., 4. … gezin.png` |
| `moment-rood/oranje/geel-hand.webp` | `4. AI-beelden/1. Socials/4., 3., 2. … hand.png` |

## MailerLite-formulier
Het echte formulier *Cloudberry Inschrijvingsformulier* staat in de pagina (10 nov):
- **JavaScript snippet** in de `<head>` van `index.html` (MailerLite Universal).
- **HTML-code** in de nieuwsbriefsectie, tussen `MAILERLITE · STAP 2` en `EINDE MAILERLITE`.
- De opmaak in de huisstijl (Space Grotesk, ronde velden, witte knop, wit bedankt-vakje) staat onderaan `style.css`, onder "MailerLite-formulier in de huisstijl". De embed-code zelf is niet aangepast.
- De kop "Even pauze?" uit MailerLite is verborgen, want de sectie heeft al een titel en intro. Wil je hem terug: verwijder de regel `.ml-form-embedContent { display: none; }` in `style.css`.

**Testen:** inschrijven werkt alleen met internet. Een inschrijving komt in de groep *Cloudberry Nieuwsbrief* terecht. De welkomstmail volgt alleen als de automation *Cloudberry Welkomstflow* op **Active** staat in MailerLite.

**Formulier aangepast in MailerLite?** Teksten en velden worden niet vanzelf bijgewerkt: kopieer de nieuwe HTML-code en vervang het blok tussen `MAILERLITE · STAP 2` en `EINDE MAILERLITE`.

## Logo vervangen
Het logo in de navigatie en de footer is nu het tijdelijke woordmerk als tekst (Space Grotesk). Een SVG met tekst toont in een `<img>` het lettertype niet, daarom staat het als tekst in de HTML.
Komt het definitieve logo: overschrijf `images/logo.svg` en `images/logo-wit.svg`, en vervang in `index.html` de twee `<span>Cloudberry</span>` in `.logo` door `<img src="images/logo.svg" alt="Cloudberry" height="32">` (footer: `logo-wit.svg`).

## Publiceren op GitHub Pages
1. Maak op GitHub een nieuwe repository, bv. `cloudberry`.
2. Upload de **inhoud** van deze map (index.html, style.css, script.js, fonts/, images/) naar de hoofdmap van de repository.
3. Settings › Pages › Source: *Deploy from a branch* › branch `main`, map `/ (root)` › Save.
4. Na een minuutje staat de site op `https://<gebruikersnaam>.github.io/cloudberry/`. Zet die link in het verslag.

## Copyregels die gevolgd zijn
- Green Tea & Lemongrass: nooit "cafeïnevrij", wel "bevat cafeïne" en "voor de grote mensen".
- Geen gezondheidsclaims. "Kinderen", geen "baby's" (honing: niet voor kinderen jonger dan 1 jaar, vermeld in de FAQ).
- Footer vermeldt dat het merk fictief is en dat er AI-beelden gebruikt zijn (AI-transparantie).
