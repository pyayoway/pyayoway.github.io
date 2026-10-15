# Lone Lone (လုံးလုံး) — brand migration checkpoint
Updated: 2026-10-15

## New public-facing brand
- Burmese: **လုံးလုံး**
- English: **Lone Lone**
- Campaign phrase: **တစ်ချက်ပဲ နှိပ်ပါ**
- Main operating area: Pyay, Myanmar
- Primary visual palette: yellow, black, red
- Official character reference: the user-approved yellow three-wheeler mascot with yellow cap, red scarf, black gloves and expressive friendly face. The website header icon/favicon and social preview now embed a compressed copy of the **user-approved 3D sticker image provided on 15 October 2026**. The website campaign gallery now shows four user-approved poster artworks provided on 15 October 2026, wrapped in SVG containers that embed optimized WebP images.

## GitHub Pages files already updated
- `index.html`: visible names, SEO/social metadata, mascot-inspired favicon/navbar, new poster gallery; Appwrite live stats code untouched.
- `social-preview.svg`: Lone Lone brand for share preview.
- `assets/lonelone-mascot.svg`: embedded copy of the user-approved Lone Lone mascot sticker image (responsive site header and favicon).
- `marketing/lonelone-poster-01.svg`: approved poster 1, embedded web-optimized raster image.
- `marketing/lonelone-poster-02.svg`: approved poster 2, embedded web-optimized raster image.
- `marketing/lonelone-poster-03.svg`: approved poster 3, embedded web-optimized raster image.
- Passenger & Driver privacy/deletion legal HTML pages: updated name, with former-name notice for existing users.
- `marketing/lonelone-poster-04.svg`: approved poster 4, embedded web-optimized raster image.
- `sitemap.xml`: added the relevant website/legal/four poster URLs.

## Deliberately retained (DO NOT bulk-replace)
- `https://pyayoway.github.io` and pathnames: currently used in the existing applications and Google Play preparations. Keep functioning until a domain migration with redirects.
- `loneloneoway@gmail.com`: user-requested support email for Lone Lone (mailbox access/delivery must be verified separately).
- Appwrite project IDs, database IDs, function IDs, secrets, API URLs, route names.
- Existing Android package IDs, signing keys and published/production app identifiers.
- Legal/company name **PYAY OWAY COMPANY LIMITED** unless corporate change is separately completed.
- Old brand name in **historical/transition notices** where needed to identify existing app versions.
- Current real app screenshots from earlier PYAY OWAY builds are not modified; updated screenshots must come from a real renamed build.

## Still to do outside this GitHub website repository
1. Update Passenger, Driver, and Admin Flutter **user-visible app branding** in their actual source trees; do not change underlying technical IDs simply to rebrand.
2. Verify screen text, app labels, launcher icons, notification channel labels, first-run terms, and in-app hyperlinks after rebuild.
3. Capture genuinely updated screenshots for Google Play; replace old promotional screenshots only after the app UIs match.
4. Verify Google Play app titles and all legal disclosure consistency before store submission.
5. Website icon/social preview now use the approved sticker image (web-optimized resolution). For additional large-format graphics, use the full-resolution original; existing campaign SVG illustrations are still stylized.
6. Re-check live GitHub Pages deployment and cache behavior; actual public deployment status has not been independently confirmed by browser in this handoff.
7. Conduct name/trademark clearance before treating Lone Lone as exclusively owned; do not add a registered-trademark symbol unless registered.

## Reversal
GitHub history retains each 2026-10-15 commit; revert the relevant branding commits if needed. No backend, Appwrite or production mobile app changes were made during this website rebrand.

## Support email change (2026-10-15)
- Website, legal pages, and preview pages now use `loneloneoway@gmail.com` for visible contact text and mailto links.
- Old address changed only in this GitHub Pages repository. App source, Appwrite Functions, Google Play Console and external services need independent review.

## Four approved promotional posters (2026-10-15)
- Replaced poster 01–03 and added poster 04 using the four images uploaded by the user in that order.
- Preserved original artwork (web-compressed to WebP, embedded in SVG so GitHub Pages serves it as SVG image content).
- Updated `index.html#posters` to display all four and refreshed sitemap; Appwrite integration and privacy links are untouched.
- Live GitHub Pages HTTP rendering may require additional verification; authenticated GitHub content reads confirm all poster assets and references.
