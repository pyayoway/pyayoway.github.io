# Lone Lone (လုံးလုံး) — brand migration checkpoint
Updated: 2026-10-15

## New public-facing brand
- Burmese: **လုံးလုံး**
- English: **Lone Lone**
- Campaign phrase: **တစ်ချက်ပဲ နှိပ်ပါ**
- Main operating area: Pyay, Myanmar
- Primary visual palette: yellow, black, red
- Official character reference: the user-approved yellow three-wheeler mascot with yellow cap, red scarf, black gloves and expressive friendly face. The website vector icon and SVG poster artwork are stylized derivatives, **not an exact reproduction of the original approved 3D mascot**.

## GitHub Pages files already updated
- `index.html`: visible names, SEO/social metadata, mascot-inspired favicon/navbar, new poster gallery; Appwrite live stats code untouched.
- `social-preview.svg`: Lone Lone brand for share preview.
- `assets/lonelone-mascot.svg`: lightweight stylized web icon.
- `marketing/lonelone-poster-01.svg`: “လုံးလုံး — တစ်ချက်ပဲ နှိပ်ပါ”.
- `marketing/lonelone-poster-02.svg`: “လုံးလုံး — ခရီးသွားဖို့ လွယ်ကူစေမယ်”.
- `marketing/lonelone-poster-03.svg`: “လုံးလုံး — ပြည်မြို့နဲ့အတူ”.
- Passenger & Driver privacy/deletion legal HTML pages: updated name, with former-name notice for existing users.
- `sitemap.xml`: added the relevant website/legal/poster URLs.

## Deliberately retained (DO NOT bulk-replace)
- `https://pyayoway.github.io` and pathnames: currently used in the existing applications and Google Play preparations. Keep functioning until a domain migration with redirects.
- `pyayoway@gmail.com`: existing verified support mailbox.
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
5. Replace stylized website promotional icon with the exact approved high-resolution official Lone Lone mascot asset when the image is available in the GitHub repository. No false claim of matching the approved mascot exactly.
6. Re-check live GitHub Pages deployment and cache behavior; actual public deployment status has not been independently confirmed by browser in this handoff.
7. Conduct name/trademark clearance before treating Lone Lone as exclusively owned; do not add a registered-trademark symbol unless registered.

## Reversal
GitHub history retains each 2026-10-15 commit; revert the relevant branding commits if needed. No backend, Appwrite or production mobile app changes were made during this website rebrand.
