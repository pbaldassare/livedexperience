# Lived Experiences — sito web

Sito dell'associazione **Lived Experiences** (supporto tra pari), Via Moscati 17, 46043 Castiglione delle Stiviere (MN).

Sito statico: HTML + CSS + un po' di JavaScript, nessuna build. Font e immagini sono ospitati in locale.

## Vederlo in locale

```bash
python3 -m http.server 4321
```

Poi apri http://localhost:4321

## Pubblicarlo

Qualsiasi hosting statico va bene: GitHub Pages (Settings → Pages → branch `main`, cartella `/`), Netlify, Cloudflare Pages.

## Da completare prima di pubblicare

Tutti i dati segnaposto sono marcati nel codice con `data-placeholder="…"`:

| Dato | Dove |
|---|---|
| Telefono (`+39 000 000 0000`) | `index.html` (barra in alto, menu mobile, contatti, footer, barra mobile) |
| Email (`info@livedexperiences.it`) | `index.html` (contatti) e `assets/js/main.js` (`CONTACT_EMAIL`) |
| Quota associativa | `index.html`, sezione Partecipa |
| IBAN per le donazioni | `index.html`, sezione Partecipa |
| Codice fiscale (5×1000) | `index.html`, sezione Partecipa e footer; `privacy.html` |
| Informativa privacy | `privacy.html`: da far verificare |
| Etichette "da inserire / da confermare" | `index.html`, sezione Contatti: da rimuovere quando i dati sono reali |

I moduli (contatti, partecipa, newsletter) per ora validano i campi e aprono il programma di posta del visitatore con il messaggio già scritto. Per riceverli direttamente si può collegare un servizio come Formspree o Netlify Forms (vedi il commento in `assets/js/main.js`).

## Crediti

- Foto: [Unsplash](https://unsplash.com) (licenza Unsplash), ID: `1604881991720-f91add269bed`, `1783192485616-90cc518983f7`, `1777220750230-fb75fdf4cfb3`, `1555069855-e580a9adbf43`, `1573497620053-ea5300f94f21`, `1549057446-9f5c6ac91a04`, `1595238530567-c6acebcb8a2b`, `1640037984424-ac1a02cb742a`, `1511632765486-a01980e01a18`.
- Font: Bricolage Grotesque e Atkinson Hyperlegible Next (SIL Open Font License).
