---
name: alignment-briefing
description: Check Arxiv for AI alignment-relevant papers from the past 24 hours.
---

Everyday at  8 am check Arxiv and collect all AI alignment relevant papers from the past 24 hours. Write short summaries and condense them into one daily briefing.  I do not want duplicate papers, start every day by saying good morning first and an inspiring but less known quotation from the history and philosophy of science (avoid clichés and Einstein), and categorize the papers based on research sub-areas and importance.

Send an email addressed to <your-email> using the Gmail connector's create_draft tool.
- Subject must be exactly: Alignment Digest — {date}   (use an em-dash and YYYY-MM-DD, e.g. "Alignment Digest — 2026-05-28").
- Provide ONLY the htmlBody parameter. Do NOT pass a plain-text body — passing both causes some clients to render raw HTML tags. The entire digest must be valid inline-styled HTML.
- Content/structure of the HTML:
  - A small uppercase "🧭 Alignment Digest" eyebrow, an H1 with the weekday + date, and a one-sentence "📌 Today's headline" in a highlighted box.
  - Each item: a small uppercase section label with a topic emoji and rank (e.g. "🔍 #1 · Interpretability"), a bold linked title, a metadata line (Author/lab · source · karma or arXiv id · date in italics), then 2–3 sentences — what's new, why it matters, one ⚠️ caveat or ❓ open question.
  - Use bold for key claims/numbers, italics for metadata and caveats, and tasteful emojis. Generous whitespace, clickable links, no walls of text.
  - End with a "👀 Skim list" of notable items seen but not included, and a small sources footnote.
- After creating the draft, confirm with the item count and note that the draft was created (the companion Apps Script sends the newest "Alignment Digest" draft on its own trigger).
