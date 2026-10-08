# Customer Editing Guide — kerala-sands

This template is an emerald-and-gold themed Kerala wedding invitation featuring an animated curtain seal intro, couple hero portrait, countdown timer, event highlights, and venue map preview.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Profiles (Groom & Bride)
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`:
- `name`: Short first name ("Hrishikesh", "Anjana")
- `fullName`: Full ceremonial name ("Hrishikesh Madhavan", "Anjana T")
- `line`: Parentage line ("Son of Mr. C V Madhavan & Mrs. Sheeba Madhavan", "Daughter of Mr. Balachandran T & Mrs. Sajitha V")
- `note`: Personal blurb/bio
- `photo`: Path to portrait photo (`./editable/assets/groom.png`, `./editable/assets/bride.png`)

### Wedding Date & Times
Edit `wedding` block in `editable/wedding-data.js`:
- `dateISO`: Start time in ISO 8601 (`"2026-12-25T11:30:00+05:30"`)
- `endISO`: End time in ISO 8601
- `dateLabel`: Formatted date (`"Friday, 25 December 2026"`)
- `dateShort`: Short date (`"25 · 12 · 2026"`)
- `timeLabel`: `"11:30 AM onwards"`
- `muhurthamLabel`: `"Muhurtham · 11:30 AM"`
- `footerDateLocation`: Bottom signoff (`"25 · 12 · 2026 · Payyanur, Kerala"`)

### Venue & Maps
Edit `venue` block in `editable/wedding-data.js`:
- `name`: Venue display name (`"Ayodhya Auditorium"`)
- `address`: Full postal address (`"Subrahmanya Swami Temple Rd, Payyanur, Kerala 670307"`)
- `locationShort`: City/State for hero section (`"Payyanur, Kerala"`)
- `mapsUrl`: Google Maps link for directions button (`"https://maps.app.goo.gl/xgTCw5Teb2zMwd6D7?g_st=ipc"`)

### Images
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple hero photo: `editable/assets/couple-hero.png`
- Groom photo: `editable/assets/groom.png`
- Bride photo: `editable/assets/bride.png`
- Map preview image: `editable/assets/map-preview.jpg`
- Gallery images: `couple-1.jpg`, `couple-2.jpg`, `couple-3.jpg`, `couple-4.jpg`
