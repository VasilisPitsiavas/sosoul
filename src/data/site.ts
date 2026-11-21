/**
 * Business details. Replace the values marked TODO.
 * Text for both languages lives in src/i18n/content.ts.
 */
export const site = {
  name: "So Soul Place",
  email: "hello@sosoulplace.com", // TODO: real email
  phone: "+30 690 000 0000", // TODO: real phone (used for calls, Viber and WhatsApp), or "" to hide it
  instagram: "https://instagram.com/sosoulplace", // TODO: real Instagram profile link
  instagramHandle: "@sosoulplace", // TODO: real Instagram name
};

/**
 * Upcoming workshops, shown on the Workshops page (newest first).
 * Leave the list empty to show "announced here and on Instagram".
 * Example:
 *   {
 *     date: { el: "Σάββατο 14 Μαρτίου, 11:00", en: "Saturday 14 March, 11:00" },
 *     title: { el: "Yin & τσάι", en: "Yin & tea" },
 *     text: { el: "Δυόμισι ώρες αργής πρακτικής…", en: "Two and a half hours of slow practice…" },
 *   },
 */
type Text = { el: string; en: string };
export const upcomingWorkshops: { date: Text; title: Text; text: Text }[] = [];
