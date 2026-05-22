# AI Handoff: Strefa Pracodawcy

Ten plik jest punktem startowym dla kolejnego modelu AI pracującego w repo.

## Cel Projektu

Strona `szef.szkolamistrzow.info` ma być praktycznym pulpitem dla pracodawców współpracujących ze Szkołą Mistrzów / ZSZ5 we Wrocławiu przy przygotowaniu zawodowym młodocianych pracowników.

Główne funkcje:

- komunikaty dla pracodawców,
- kalendarz roku szkolnego 2025/2026,
- biblioteka dokumentów,
- baza wiedzy oparta na oficjalnych źródłach,
- źródła i poradniki,
- kontakt do szkoły i kierownika szkolenia praktycznego.

## Technologia

- Astro, statyczny output.
- Dane w JSON, bez CMS.
- Hosting: GitHub Pages.
- Domena: `https://szef.szkolamistrzow.info/`.

Komendy:

```bash
npm install
npm run dev
npm run build
```

## Ważne Zasady Edycji

- Nie zmieniaj treści prawnych bez sprawdzenia w oficjalnych źródłach: PIP, gov.pl/MEN, ELI/Dziennik Ustaw, OHP, ORE/CKE.
- Nie usuwaj logotypów COVE Polska i UE ze stopki.
- Oznaczenie UE musi być na jasnym tle, bez przycinania i bez zmiany proporcji.
- Aktualizacje treści rób głównie w `src/data/*.json`.
- Dokumenty do pobrania trzymaj w `public/dokumenty/`.
- Po każdej zmianie uruchom `npm run build`.

## Najważniejsze Pliki

- `src/layouts/BaseLayout.astro` - layout, SEO, header, footer, wyszukiwarka.
- `src/pages/index.astro` - strona główna.
- `src/pages/kalendarz/index.astro` - interaktywny kalendarz.
- `src/components/DocumentList.astro` - lista dokumentów.
- `src/data/knowledge.json` - baza wiedzy.
- `src/data/documents.json` - metadane dokumentów.
- `src/data/events.json` - kalendarz.
- `src/data/resources.json` - zewnętrzne źródła i poradniki.

## Otwarte Decyzje

- Strona z listami pracodawców jest publiczna i indeksowalna. Jeśli dokumenty zawierają dane, które nie powinny trafiać do Google, rozważyć `noindex` dla `/dokumenty/pracodawcy/`.
- Newsletter jest obecnie schowany. Kod formularza został usunięty z widoku strony głównej; do wdrożenia potrzebna będzie docelowa lista Brevo i polityka zgód.
- W przyszłości warto rozbić bazę wiedzy na osobne artykuły SEO.
