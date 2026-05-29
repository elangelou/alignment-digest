# Alignment Digest

A daily, automated briefing of new AI-alignment research from arXiv, delivered to my inbox as a clean, inline-styled HTML email.

Every morning the task scans arXiv (cs.AI / cs.LG) for alignment-relevant papers from the past 24 hours, deduplicates against prior digests, writes short summaries, and groups them by research sub-area and importance. The result is one email per day — short enough to read over coffee.

## How it works

The pipeline has two halves:

1. **Digest generation (scheduled task).** Each day at 8:00 AM, an agent checks arXiv for new alignment-relevant papers, removes any already covered in previous digests, summarizes each one (what's new, why it matters, one caveat or open question), ranks and categorizes them, and writes the whole thing as a single inline-styled HTML document. It then creates a **Gmail draft** with the subject `Alignment Digest — YYYY-MM-DD`.

2. **Sending (Google Apps Script).** A companion Apps Script (`sendDailyDigestDraft.gs`) runs on its own time-based trigger, finds the newest unsent `Alignment Digest` draft, sends it, and labels the thread `DigestSent` so it's never sent twice.

Splitting generation from sending keeps a human-reviewable draft in the loop while still automating delivery.

## Repository contents

| File | Purpose |
| --- | --- |
| `alignment-briefing/SKILL.md` | The task definition — schedule, content rules, and exact email format. |
| `sendDailyDigestDraft.gs` | Google Apps Script that sends the newest digest draft and dedup-labels it. |
| `alignment-digest-YYYY-MM-DD.html` | Archived copies of each day's generated digest. These double as the dedup record — each run greps prior files for arXiv IDs already covered. |

## Email format

Each digest follows a consistent structure:

- A `🧭 Alignment Digest` eyebrow, an H1 with the weekday and date.
- A morning greeting and a lesser-known quotation from the history and philosophy of science.
- A one-sentence `📌 Today's headline` highlight box.
- Ranked, categorized items — each with a topic label, a linked title, a metadata line, 2–3 sentences of summary, and one `⚠️` caveat or `❓` open question.
- A `👀 Skim list` of notable papers seen but not featured, plus a sources footnote.

## Setup

**Scheduled task.** The task is defined in `alignment-briefing/SKILL.md` and runs daily at 8:00 AM. It requires access to a web/arXiv search capability and the Gmail connector's `create_draft` tool.

**Apps Script trigger.**

1. Open [script.google.com](https://script.google.com) and create a new project.
2. Paste in the contents of `sendDailyDigestDraft.gs`.
3. Add a time-driven trigger (Triggers → Add Trigger → `sendDailyDigestDraft`, day timer, set for shortly after 8:00 AM).
4. Authorize the script's Gmail access on first run.

Use `listDraftSubjects()` to verify the script can see your drafts.

## Notes

- Deduplication relies on the archived HTML files, so keep them in the repo.
- The digest is generated as a draft on purpose — review before it sends, or let the Apps Script send it automatically.

## License

See [`LICENSE`](LICENSE). (MIT recommended if public; omit for a private repo.)
