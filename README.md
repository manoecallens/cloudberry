# Cloudberry – Awareness-campagne

> Periodeopdracht **Creative Automation**, Graduaat Digitale Vormgeving, Artevelde Hogeschool
> Ontwerper: Manoe Callens · Klant (fictief): docent Creative Automation

## Briefing in het kort

| | |
|---|---|
| **Merk** | Cloudberry (thee) |
| **Product** | Cafeïnevrije, kindvriendelijke thee voor het hele gezin |
| **Doelgroep** | Jonge ouders |
| **Doel** | Naamsbekendheid (awareness) |
| **Sfeer** | Vrolijk · fruitig · luchtig |
| **Hoofdkleur** | `hsl(265, 32%, 48%)` = `#7453A2` = `rgb(116, 83, 162)` |
| **Font** | Space Grotesk |

## Deliverables

Deadline: **dinsdag 10 november 2026, 23:59**. Volledige opdracht: `1. Briefing/1. Opdracht.md` · planning: `1. Briefing/4. Planning v02.md`.

1. **Projectfolder**: README.md, LOGBOEK.md, alle bron-, werk- en gegenereerde bestanden
2. **Geautomatiseerde assets**: Photoshop-action + batch
3. **Social varianten**: 20 posts (1:1), 20 stories (9:16) en 20 ads (4:5), in bulk uit één spreadsheet (Figma Buzz)
4. **AI-copy, -beelden en -video**: copy (Claude), beelden met Cloudberry-label en video ≥ 12 s (Adobe Firefly)
5. **E-mailflow**: sign-up form, 3 e-mails, 2 scenario's (MailerLite)
6. **Landingspagina**: vibe-coded met Claude Code, live via GitHub Pages, met embedded sign-up form
7. **Verslag**: A4-PDF met concept, overzicht, links, GDPR- en AI-transparantie

## Folderstructuur

Zeven hoofdmappen, genummerd in de volgorde van het project, maximaal 2 niveaus diep. Elke map en elk bestand begint met een nummer. Staan er in een map zowel submappen als losse bestanden, dan krijgen de bestanden de nummers na de submappen.

```
assets/                                  ← projectroot
├── README.md                            ← dit overzicht
├── LOGBOEK.md                           ← alle prompts (letterlijk) + resultaat, voor indiening
├── Design guidelines.md                 ← huisstijlregels: kleur, font, logo, foto, copy, formaten
│
├── 1. Briefing/                         ← 1. Opdracht · 2. Brandfiche · 3.–4. Planning v01/v02 · 5. Concept
│                                          6. Moodboard inspiratie (.html) · 7. Inventaris assets (.xlsx) · 8. Opdracht checklist
│
├── 2. Huisstijl/                        ← 1. Logo · 2. Logo wit · 3. Logo vervangen (.md)
│                                          4. Space Grotesk · 5.–6. Playfair Display (+ cursief) · 7. Fonts leesmij
│
├── 3. Fotografie/
│   ├── 1. Origineel licht/   (18)       ← originele packshots met CHATHÉ, nooit overschrijven
│   ├── 2. Origineel donker/  (41)
│   ├── 3. Bewerkt licht/     (18)       ← zelfde foto's, met Cloudberry (Space Grotesk)
│   ├── 4. Bewerkt donker/    (41)
│   ├── 5. Selectie/          (13)       ← gekozen foto's (bewerkte versie)
│   ├── 6. Vrijstaand/        (4)        ← de 4 dozen zonder achtergrond (PNG)
│   └── 7. Fotoanalyse.md · 8. Analyse.pdf · 9. Analyse.xlsx
│       10.–12. Contactsheet licht / donker / selectie (.jpg)
│
├── 4. AI-beelden/
│   ├── 1. Socials/           (25)       ← AI-beelden voor posts, stories en ads, per smaak 1. Groen › 5. Vier smaken:
│   │                                      enkel · bewerkt · bewerkt vuil · hand · gezin
│   ├── 2. Zonder achtergrond/ (25)      ← enkel · bewerkt · bewerkt vuil · hand: muur transparant via action + batch (20) · gezin (5): zonder batch
│   └── 3. Weave prompt.md · 4. Weave workflow (.png, 28 okt) + v2 (10 nov): screenshots van de Figma Weave-flow
│
├── 5. Automatisatie/
│   ├── 1. Label script/                 ← Python: CHATHÉ → Cloudberry (Space Grotesk) op foto's en AI-beelden (code)
│   ├── 2. Mockup script/                ← Python: vrijstaande dozen + mockups renderen
│   └── 3. Photoshop action/             ← 1. Cloudberry.atn · 2. Batch instellingen (.png) · 3. Leesmij · 4.–5. Action deel1/deel2 (.png)
│
├── 6. Outputs/
│   ├── 1. Socials/
│   │   ├── 1. Inspiratie/               ← 1. Idee schets · 2. Copy foto1 · 3.–10. mockups (post + story per smaak)
│   │   ├── 2. Sociale media.xlsx        ← tabel per beeld: titel, smaak, CTA (input voor Figma Buzz)
│   │   ├── 3.–5. Buzz vierkant / staand / story (.png) ← screenshots van de 3 × 20 assets in Figma Buzz
│   │   └── 6. Buzz bulk · 7. Buzz template (.png) ← Bulk edit-tabel en templates (Post, Story, Ad)
│   ├── 2. Landingspagina/               ← one-pager: index.html · style.css · script.js · fonts/ · images/ · README.md
│   │                                      1. GitHub repository (.png) · live: manoecallens.github.io/cloudberry
│   ├── 3. E-mailflow/        (10)       ← MailerLite: 1. Automations · 2.–3. Flow · 4.–6. Formulier · 7. Abonnees · 8.–10. Mails (PDF)
│   ├── 4. Video/             (10)       ← 1.–3. Clip A–C (Firefly Video) · 4. Clip D (geanimeerde foto) · 5. Video eindversie · 6.–10. Firefly-screenshots (prompts)
│   └── 5. Verslag/                      ← 1. Verslag Cloudberry.pdf (A4, 13 p.)
│
└── 7. Oplevering/                       ← finale bestanden voor de klant (kopie), per onderdeel van de opdracht:
                                           README · LOGBOEK · Design guidelines · 1. Verslag · 2. Photoshop · 3. Socials
                                           4. AI-beelden · 5. Video · 6. E-mailflow · 7. Landingspagina · 8. Links.md
```

## Werkafspraken

- **Design guidelines:** elke visual volgt `Design guidelines.md` (kleur, contrast, typografie, logo, fotografie, copyregels, formaten).
- **Logo altijd koppelen, nooit kopiëren:** gebruik een gekoppeld slim object in Photoshop, een component in Figma en een bestandspad in HTML, telkens naar `2. Huisstijl/1. Logo.svg` en `2. Logo wit.svg`. Zo is het logo later in één keer te vervangen (zie `2. Huisstijl/3. Logo vervangen.md`).
- **Originele foto's blijven onaangeroerd** (`3. Fotografie/1.` en `2. Origineel`). Bewerkte versies komen in `3.` en `4. Bewerkt`.
- **Finale versies** gaan als kopie naar `7. Oplevering/`.
- **Ordening van foto's:** per achtergrond (licht/donker). Binnen elke map: eerst groepsfoto's (Kleuren, Duo, Trio), dan per kleur in de volgorde van de lineup (Groen → Geel → Oranje → Rood), per kleur: voorkant → schuin → theezakje → geopend.
- **Naamgeving: alles een nummer, daarna maximaal 2 woorden** (mappen en bestanden), bv. `6. Groen voorkant.jpg`, `3. Groen post.png`, `5. Concept.md`.
  - Kleur = kleur van de band op de doos: `Groen` (Green Tea & Lemongrass), `Geel` (Chamomile & Honey), `Oranje` (Ginger & Turmeric), `Rood` (Rooibos & Forest Berries), `Kleuren` (alle 4), `Duo`/`Trio` (2 of 3 dozen).
  - Opstelling bij foto's: `voorkant`, `schuin`, `theezakje`, `geopend`, `perspectief`, `gestapeld`, `hand`, `detail`.
  - Een nieuwe versie krijgt `v1`, `v2`, … achteraan, bv. `4. Rood keuken v1.png`.
  - De omzettabel naar de oorspronkelijke `DSC_00..`-namen staat in `3. Fotografie/9. Analyse.xlsx` (laatste kolom).
  - Uitzondering: code (scripts en hun datafiles) houdt zijn eigen bestandsnamen, anders werkt hij niet meer.
- **Elke prompt** wordt letterlijk opgenomen in `LOGBOEK.md`, met tijdstip, resultaat en betrokken bestanden. Het logboek wordt mee ingediend bij de opdracht.

## Status

*Laatst bijgewerkt: dinsdag 10 november 2026 (volledige controle van alle rijen, verslag, oplevering). Deadline: dinsdag 10 november 2026, 23:59.*

| Onderdeel | Status |
|---|---|
| Folderstructuur | ✅ vereenvoudigd naar 7 hoofdmappen (28 okt) |
| Fotoanalyse + selectie | ✅ klaar (13 foto's) |
| Label Cloudberry op de verpakking | ✅ **Space Grotesk Bold** (9 nov): 57 foto's, selectie, 4 vrijstaande dozen, 45 AI-beelden en 8 mockups. Niet aangepast: leeg decor, de foto waar een hand het woord bedekt, en de piepkleine labeltjes aan de theezakjes op de AI-beelden |
| Planning | ✅ v02 |
| Moodboard + 5 conceptvoorstellen | ✅ inspiratie klaar · `Moodboard_CallensManoe.png` staat in `EINDOPDRACHT/` (buiten `assets/`) |
| Logo | ⚠️ nog het tijdelijke woordmerk van 7 okt (`2. Huisstijl/1. Logo.svg`). Definitief logo nog niet in de projectmap |
| Concept + copy | ✅ concept "Cloudberry + één woord" als patroon achter het product, slogan "Thee voor het hele gezin.", copy voor socials (20 titels + CTA's), landingspagina en 3 e-mails met Claude |
| Photoshop-action + batch | ✅ action *Muur verwijderen* (12 stappen) + batch: muur transparant in `4. AI-beelden/2. Zonder achtergrond/`. Screenshots van action en batch in `5. Automatisatie/3. Photoshop action/` |
| AI-beelden | ✅ 25 beelden met Figma Weave (Gemini Image) in `4. AI-beelden/1. Socials/` (5 reeksen × 5 smaken), label gecorrigeerd met het label-script (Figma Weave voor beeld, zoals de checklist vraagt) |
| AI-video (Firefly, ≥ 12 s) | ✅ `5. Video eindversie.mp4`, 13,4 s, 9:16, clips A–C met Firefly Video + clip D als geanimeerde foto. Firefly-screenshots in `6. Outputs/4. Video/6.–10.`. Geen muziek of eindbeeld met logo |
| Mockups schets-stijl (4 smaken × post + story) | ✅ eerste versie, 28 okt |
| Posts in Figma (beelden + "Cloudberry." per smaak) | ✅ vervangen door de Figma Buzz-templates (zie hieronder) |
| Social assets (Figma Buzz) | ✅ minimum van de opdracht gehaald (20 posts, 20 stories, 20 ads): spreadsheet (`2. Sociale media.xlsx`) + 60 assets in Figma Buzz (20 posts 1080 × 1080, 20 ads 1440 × 1800, 20 stories 1080 × 1920). Screenshots in `6. Outputs/1. Socials/3.–7.`, de 60 exports in `7. Oplevering/3. Socials/1. Buzz/` |
| MailerLite-flow | ✅ gebouwd (9 nov): inschrijfformulier + succesbericht, "Cloudberry Welkomstflow" met 3 e-mails (Welkom › na 2 dagen Verdieping bij klik, anders Reminder). Screenshots en de 3 mails als PDF in `6. Outputs/3. E-mailflow/`. De automation staat op **Active** (10 nov) |
| Landingspagina (GitHub Pages) | ✅ live (10 nov): https://manoecallens.github.io/cloudberry/ · repository `manoecallens/cloudberry` · screenshot `6. Outputs/2. Landingspagina/1. GitHub repository.png`. Hero, verhaal, 4 smaken, gezinsmomenten, CTA + nieuwsbrief (MailerLite-formulier), FAQ; responsive; 14 beelden |
| Verslag (PDF) | ✅ `6. Outputs/5. Verslag/1. Verslag Cloudberry.pdf` (10 nov): A4, 22 pagina's, met screenshots, alle links, GDPR en AI-transparantie |
| Oplevering | ✅ `7. Oplevering/` gevuld (10 nov): per onderdeel van de opdracht een map, plus `8. Links.md` met alle links |

> Werk dat buiten deze map gebeurt (Figma, MailerLite, GitHub), staat hier pas als ✅ zodra de export of link in de projectmap staat.

### Aandachtspunten in de map

- In `4. AI-beelden/1. Socials/` komen de nummers 3 t.e.m. 6 dubbel voor (bv. `3. Oranje bewerkt` en `3. Oranje enkel`). Voorstel: de 4 "enkel"-beelden hernummeren naar `10.`–`13.`.
