# Strefa Pracodawcy Szkoly Mistrzow

Statyczny serwis dla pracodawcow wspolpracujacych ze Szkola Mistrzow w modelu dualnym.

## Praca lokalna

```bash
npm install
npm run dev
```

## Publikacja

Projekt jest przygotowany pod GitHub Pages. Workflow `.github/workflows/deploy.yml` buduje strone po wypchnieciu zmian na `main`.

## Aktualizacja tresci

- Komunikaty: `src/data/announcements.json`
- Kalendarz: `src/data/events.json`
- Dokumenty: `src/data/documents.json` i pliki w `public/dokumenty`
- Kontakty: `src/data/contacts.json`
- Baza wiedzy: `src/data/knowledge.json`
