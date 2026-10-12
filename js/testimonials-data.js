// ============================================================
// Testimonial content. videoSrc points at self-hosted mp4 files in
// assets/videos/ — no Google Drive dependency, plays as a plain
// <video> tag (see wireVideoCards() in main.js).
//
// Intentionally empty for WealthLink Media. Widgets render nothing
// until real testimonials and videos are added here.
// ============================================================
window.TESTIMONIALS = [];

// Explainer video shown at the top of booking/thank-you pages
// ("Step 1: Watch This 2 Minute Video"). Empty videoSrc hides the
// player and its step heading (see renderExplainerVideo() in main.js).
window.EXPLAINER_VIDEO = {
  videoSrc: "",
  poster: "",
  caption: "",
};

// Landing page (index.html) hero testimonials, in order
window.HERO_TESTIMONIAL_IDS = [];
// Booking pages (book-tracked.html + book-untracked.html), "P.S. check out
// what our contractor clients have to say" section, in order
window.BOOKING_TESTIMONIAL_IDS = [];
// Homepage (index.html) "P.S. Check Out..." section, now that the booking
// flow lives on the homepage itself.
window.HOME_TESTIMONIAL_IDS = [];
// Thank-you page
window.THANK_YOU_TESTIMONIAL_IDS = [];

// Final single testimonial + "More Testimonials" button, on booking/thank-you pages.
// Null hides renderClosingTestimonial().
window.CLOSING_TESTIMONIAL = null;
