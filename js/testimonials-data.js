// ============================================================
// Testimonial content. videoSrc points at self-hosted mp4 files in
// assets/videos/ — no Google Drive dependency, plays as a plain
// <video> tag (see wireVideoCards() in main.js).
//
// Intentionally empty for WealthLink Media. renderTestimonials() draws
// labeled placeholder cards until real video entries and ids are added.
// ============================================================
window.TESTIMONIALS = [];

// Explainer video on the homepage and thank-you page. An empty videoSrc
// keeps the section visible as a labeled placeholder (see
// renderExplainerVideo() in main.js). Do not point this at a fake file.
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
