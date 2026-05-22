# Struktura Strony

## Podstrony

| URL | Plik | Cel |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Krótki pulpit: terminy, szybki dostęp, komunikaty |
| `/baza-wiedzy/` | `src/pages/baza-wiedzy/index.astro` | FAQ i wiedza dla pracodawców |
| `/kalendarz/` | `src/pages/kalendarz/index.astro` | Interaktywny kalendarz roku szkolnego |
| `/dokumenty/umowy/` | `src/pages/dokumenty/umowy/index.astro` | Umowy i załączniki |
| `/dokumenty/ubezpieczenia/` | `src/pages/dokumenty/ubezpieczenia/index.astro` | Dokumenty ubezpieczeniowe |
| `/dokumenty/pracodawcy/` | `src/pages/dokumenty/pracodawcy/index.astro` | Listy pracodawców według zawodów |
| `/programy-nauczania/` | `src/pages/programy-nauczania/index.astro` | Linki do podstaw programowych i egzaminów |
| `/zrodla/` | `src/pages/zrodla/index.astro` | Oficjalne źródła i poradniki |
| `/kontakt/` | `src/pages/kontakt/index.astro` | Kontakt do szkoły i kierownika szkolenia praktycznego |

## Wspólne Elementy

`src/layouts/BaseLayout.astro` zawiera:

- header,
- menu,
- przełącznik trybu ciemnego,
- wyszukiwarkę modalną,
- metadane SEO,
- JSON-LD,
- stopkę z logotypami COVE/UE.

## Interakcje

### Wyszukiwarka

Wyszukiwarka jest client-side. Dane są budowane w `BaseLayout.astro` z:

- podstron,
- `knowledge.json`,
- `documents.json`,
- `events.json`,
- `announcements.json`,
- `resources.json`.

### Kalendarz

Kalendarz używa `src/data/events.json`.

Funkcje:

- widok miesiąca,
- filtr typu wydarzenia,
- lista wydarzeń,
- modal z pełnym opisem wydarzenia,
- link do PDF kalendarza.

## Pliki Publiczne

Pliki w `public/` są kopiowane bezpośrednio do builda.

Najważniejsze:

- `public/CNAME` - domena GitHub Pages,
- `public/robots.txt`,
- `public/assets/logos/`,
- `public/dokumenty/`.
