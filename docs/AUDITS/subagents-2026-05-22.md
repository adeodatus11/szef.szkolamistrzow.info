# Raport Z Pracy Subagentów - 2026-05-22

## Subagenci

- DEBUG: Bohr
- SEO: Franklin
- Weryfikacja prawdziwości treści: McClintock
- Restrykcyjny audyt wizualny: Popper

## Wnioski DEBUG

Najważniejsze ustalenia:

- Build Astro przechodzi bez błędów.
- Live custom domain, sitemap, robots, PDF kalendarza i główne strony zwracają `HTTP 200`.
- Jeden link ORE był nieaktywny i wymagał podmiany.
- Wyszukiwarka używała `innerHTML` przy budowaniu wyników.
- Dane kontaktowe były wpisane ręcznie w stronie, mimo że README wskazywał `src/data/contacts.json`.
- Kalendarz miał sztywno ustawiony miesiąc startowy.
- Numer kierownika szkolenia praktycznego powinien być osobnym linkiem `tel:`.

Zastosowane działania:

- poprawiono link ORE,
- wyszukiwarka buduje wyniki przez `createElement` i `textContent`,
- strona kontaktu używa `src/data/contacts.json`,
- miesiąc startowy kalendarza jest wyliczany z najbliższego wydarzenia,
- numer telefonu jest osobnym linkiem.

## Wnioski SEO

Najważniejsze ustalenia:

- Techniczne SEO działa: title, description, canonical, robots, sitemap, H1 są obecne.
- Title były zbyt ogólne dla fraz: `młodociany pracownik`, `przygotowanie zawodowe`, `umowa o pracę`, `ZSZ5 Wrocław`.
- Sitemap była minimalna.
- Brakowało schema.org poza organizacją.
- Tytuły dokumentów bez polskich znaków osłabiały wyszukiwarkę i SEO.
- Strona z listami pracodawców wymaga decyzji, czy ma być indeksowana.

Zastosowane działania:

- poprawiono wybrane tytuły stron,
- dodano `WebSite` i `BreadcrumbList` do JSON-LD,
- dodano `lastmod` i `changefreq` do sitemap,
- poprawiono tytuły dokumentów,
- pozostawiono stronę pracodawców indeksowalną, ale decyzja jest odnotowana jako otwarta.

## Wnioski Merytoryczne

Najważniejsze ustalenia:

- Treści były zgodne kierunkowo, ale kilka sformułowań było zbyt skrótowych.
- Trzeba odróżniać przygotowanie zawodowe od prac lekkich.
- Umowa w celu przygotowania zawodowego co do zasady podlega regułom umowy na czas nieokreślony.
- Wyjątki od prac wzbronionych dotyczą młodocianych powyżej 16 lat i tylko w warunkach wskazanych przepisami.
- Refundacja OHP i dofinansowanie gminne to odrębne procedury.
- Słowo `aktualne` przy wzorach umów może sugerować zbyt daleką gwarancję.

Zastosowane działania:

- doprecyzowano wpisy w `knowledge.json`,
- zmieniono komunikat o wzorach umów na ostrożniejsze `udostępnione przez szkołę`,
- poprawiono link gov.pl do zawodów szkolnictwa branżowego.

## Wnioski Wizualne

Najważniejsze ustalenia:

- Mobile kalendarza miał zbyt małe klikalne obszary wydarzeń.
- Kontakt na mobile mógł powodować minimalne poziome przepełnienie.
- Logo ZSZ5 z napisem jest granicznie czytelne na mobile.
- Dokumenty na mobile traciły za dużo metadanych.
- Tagi miały za niski kontrast przy małym rozmiarze.
- H1 był zbyt landing-page'owy jak na roboczy serwis dla pracodawców.
- Duże logotypy COVE/UE warto docelowo zoptymalizować do wersji webowych.

Zastosowane działania:

- zwiększono klikalny obszar wydarzeń w kalendarzu mobile,
- dodano zabezpieczenia przed overflow w kartach i kontaktach,
- poprawiono widok dokumentów na mobile tak, aby meta nie znikały,
- zwiększono rozmiar i kontrast tagów,
- zmniejszono maksymalny rozmiar H1.

## Otwarte Zadania

- Pełny focus trap w wyszukiwarce i modalu wydarzeń.
- Webowe wersje logotypów COVE/UE z atrybutami `width` i `height`.
- Rozbicie bazy wiedzy na osobne artykuły SEO.
- Decyzja, czy listy pracodawców mają być indeksowane.
- Docelowe wdrożenie newslettera po wyborze narzędzia i treści zgód.
