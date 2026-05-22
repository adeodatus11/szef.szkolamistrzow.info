# Utrzymanie I Aktualizacja

## Aktualizacja Kalendarza

1. Edytuj `src/data/events.json`.
2. Zachowaj format dat `YYYY-MM-DD`.
3. Dla wydarzeń wielodniowych dodaj `endDate`.
4. Uruchom `npm run build`.
5. Sprawdź `/kalendarz/`.

## Dodanie Dokumentu

1. Dodaj plik do właściwego folderu w `public/dokumenty/`.
2. Dodaj rekord w `src/data/documents.json`.
3. Upewnij się, że `url` zaczyna się od `/dokumenty/...`.
4. Uruchom `npm run build`.

## Aktualizacja Bazy Wiedzy

1. Sprawdź oficjalne źródło: PIP, gov.pl/MEN, ELI, OHP, ORE lub CKE.
2. Dodaj albo popraw rekord w `src/data/knowledge.json`.
3. Jeżeli źródło jest nowe, dodaj je do `src/data/sources.json`.
4. Zachowaj ostrożny język: strona informuje, ale nie zastępuje porady prawnej.

## Aktualizacja Kontaktów

Kontakty edytuje się w `src/data/contacts.json`.

Aktualny główny kontakt:

```text
Arkadiusz Mocarski
kierownik szkolenia praktycznego
691 615 270
```

## Publikacja

Po zmianach:

```bash
npm run build
git status
git add .
git commit -m "Opis zmiany"
git push
```

GitHub Actions automatycznie opublikuje stronę na:

```text
https://szef.szkolamistrzow.info/
```

## Kontrola Przed Publikacją

Minimum:

- `npm run build` bez błędów,
- brak brakujących plików z `documents.json`,
- linki w `resources.json` działają,
- mobile nie ma poziomego przewijania,
- logo UE nie jest przycięte,
- stopka zawiera komunikat o finansowaniu UE.

## Rekomendowane Przyszłe Prace

- osobne artykuły SEO dla najważniejszych tematów bazy wiedzy,
- webowe wersje dużych logotypów COVE/UE,
- pełny focus trap w modalach,
- decyzja, czy `/dokumenty/pracodawcy/` ma być indeksowane.
