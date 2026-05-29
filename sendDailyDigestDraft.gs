function sendDailyDigestDraft() {
  const PREFIX = "Alignment Digest";   // matches "Alignment Digest — YYYY-MM-DD"
  const SENT_LABEL = "DigestSent";

  let label = GmailApp.getUserLabelByName(SENT_LABEL);
  if (!label) label = GmailApp.createLabel(SENT_LABEL);

  const drafts = GmailApp.getDrafts();
  let sentCount = 0;

  for (const draft of drafts) {
    const subject = (draft.getMessage().getSubject() || "").trim();
    if (subject.indexOf(PREFIX) !== 0) continue;

    // Skip if this thread was already sent/labeled (dedup guard)
    const alreadySent = draft.getMessage().getThread()
      .getLabels().some(l => l.getName() === SENT_LABEL);
    if (alreadySent) continue;

    const sentMsg = draft.send();
    sentMsg.getThread().addLabel(label);
    sentCount++;
  }

  Logger.log(sentCount + " digest draft(s) sent.");
}

function listDraftSubjects() {
  GmailApp.getDrafts().forEach(d => Logger.log(d.getMessage().getSubject()));
  Logger.log("Active user: " + Session.getActiveUser().getEmail());
}
