# Model Danych

Projekt nie używa CMS. Treści są w plikach JSON.

## `src/data/announcements.json`

Komunikaty na stronie głównej.

Pola:

- `title` - tytuł komunikatu,
- `category` - kategoria,
- `date` - data,
- `priority` - etykieta widoczna w UI,
- `summary` - krótki opis.

## `src/data/events.json`

Kalendarz roku szkolnego.

Pola:

- `title` - nazwa wydarzenia,
- `type` - typ używany do filtrowania i kolorów,
- `date` - data startu w formacie `YYYY-MM-DD`,
- `endDate` - opcjonalna data końca,
- `audience` - kogo dotyczy,
- `description` - pełny opis w modalu.

## `src/data/documents.json`

Metadane dokumentów z `public/dokumenty/`.

Pola:

- `title` - tytuł widoczny w bibliotece,
- `category` - kategoria, np. `umowy`, `zalaczniki`, `ubezpieczenia`,
- `schoolYear` - rok szkolny,
- `trade` - zawód lub grupa,
- `format` - PDF/DOCX,
- `updated` - data dodania lub ostatniej weryfikacji w serwisie,
- `url` - publiczna ścieżka pliku.

Uwaga: `updated` nie zawsze oznacza merytoryczną aktualność dokumentu. UI pokazuje je jako `Dodano`.

## `src/data/knowledge.json`

Baza wiedzy dla pracodawców.

Pola:

- `title` - pytanie lub temat,
- `category` - obszar,
- `summary` - zwięzła odpowiedź,
- `sourceIds` - lista identyfikatorów ze `src/data/sources.json`.

Każda zmiana merytoryczna powinna być weryfikowana w źródłach oficjalnych.

## `src/data/sources.json`

Źródła używane przy bazie wiedzy.

Pola:

- `id` - stabilny identyfikator,
- `name` - nazwa źródła,
- `url` - link.

## `src/data/resources.json`

Podstrona `Źródła i poradniki`.

Pola:

- `category` - grupa źródeł,
- `description` - opis grupy,
- `items[]` - linki z tytułem, URL i notatką.

## `src/data/contacts.json`

Kontakty na stronie `/kontakt/`.

Pola:

- `name`,
- `role`,
- `group`,
- `phone`,
- `phoneHref`,
- `email`,
- `emailHref`,
- `note`.
