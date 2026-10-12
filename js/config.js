// ============================================================
// RankFlow Funnel — Configuration
// Fill in every REPLACE_WITH_* value below before going live.
// Nothing else in the codebase needs to change once these are set.
// ============================================================
window.RANKFLOW_CONFIG = {
  // Meta (Facebook) Pixel ID — Events Manager > Data Sources > your pixel.
  // Intentionally blank: no pixel is installed for this site.
  META_PIXEL_ID: "",

  // Google Places API key. This is a browser key and is expected to be
  // visible client-side — it is safe as long as it stays restricted in
  // console.cloud.google.com > APIs & Services > Credentials to
  // (a) HTTP referrers = this site's exact domain(s), and (b) API
  // restriction = Maps JavaScript API only. If this key ever needs to be
  // rotated again, generate the new one, apply both restrictions, then
  // paste it here — that's it, nothing else to change.
  GOOGLE_PLACES_API_KEY: "AIzaSyB7VqEv9lQC71rLQmLlH2JOp9WSyhf9aTk",

  // GHL calendar embed URLs (GHL: Calendars > [calendar] > Embed > copy the
  // iframe src). TRACKED = the "main" calendar (25k+ revenue AND verified
  // GBP). UNTRACKED = everyone else who still qualifies (unverified/suspended
  // GBP at any qualifying revenue, or 10-25k revenue with a verified GBP).
  // Intentionally blank: calendars are not connected yet.
  GHL_CALENDAR_TRACKED_URL: "",
  GHL_CALENDAR_UNTRACKED_URL: "",

  // GHL inbound webhook. The qualifying-form answers are POSTed here the
  // instant the form is submitted, so the lead lands in GHL even if they
  // never make it to the calendar. Set up in GHL under
  // Automation > Workflows > trigger: Inbound Webhook.
  // Intentionally blank: the form must not POST anywhere until this is set.
  LEAD_WEBHOOK_URL: "",
};
