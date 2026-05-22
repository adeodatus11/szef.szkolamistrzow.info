# Strefa Pracodawcy ZSZ5 Wrocław

Statyczny serwis dla pracodawców współpracujących ze Szkołą Mistrzów / Zespołem Szkół Zawodowych nr 5 we Wrocławiu w modelu dualnym.

Adres produkcyjny: https://szef.szkolamistrzow.info/

Repozytorium: https://github.com/adeodatus11/szef.szkolamistrzow.info

## Szybki Start

```bash
npm install
npm run dev
npm run build
```

## Publikacja

Projekt działa na GitHub Pages. Workflow `.github/workflows/deploy.yml` buduje stronę po każdym pushu do `main`.

Custom domain jest ustawiona przez `public/CNAME`:

```text
szef.szkolamistrzow.info
```

## Najważniejsze Foldery

```text
src/pages/              podstrony Astro
src/layouts/            wspólny layout, header, footer, wyszukiwarka, SEO
src/components/         komponenty współdzielone
src/data/               treści JSON edytowane bez CMS
src/styles/             globalny CSS
public/assets/logos/    logotypy i znaki
public/dokumenty/       pliki udostępniane pracodawcom
docs/                   dokumentacja projektu i kontekst dla AI
```

## Aktualizacja Treści

- Komunikaty: `src/data/announcements.json`
- Kalendarz: `src/data/events.json`
- Dokumenty: `src/data/documents.json` oraz pliki w `public/dokumenty/`
- Kontakty: `src/data/contacts.json`
- Baza wiedzy: `src/data/knowledge.json`
- Źródła i poradniki: `src/data/resources.json` oraz `src/data/sources.json`

## Dokumentacja

Przed większą zmianą przeczytaj:

- `AGENTS.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/SITE_STRUCTURE.md`
- `docs/DATA_MODEL.md`
- `docs/MAINTENANCE.md`
- `docs/AUDITS/subagents-2026-05-22.md`
