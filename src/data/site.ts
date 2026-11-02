/**
 * Business details and weekly schedule. Replace the values marked TODO.
 * Text for both languages lives in src/i18n/content.ts.
 */
export const site = {
  name: "So Soul Place",
  email: "hello@sosoulplace.com", // TODO: real email
  phone: "+30 690 000 0000", // TODO: real phone, or "" to hide it
  instagram: "https://instagram.com/", // TODO: real Instagram profile link
};

export type Level = "all" | "beginners" | "intermediate";

/**
 * Weekly classes. `day`: 0 = Sunday, 1 = Monday … 6 = Saturday.
 * Class names are given in Greek (el) and English (en).
 */
export const schedule: {
  day: number;
  time: string;
  name: { el: string; en: string };
  level: Level;
}[] = [
  { day: 1, time: "19:00", name: { el: "Vinyasa Flow", en: "Vinyasa Flow" }, level: "all" },
  { day: 2, time: "09:30", name: { el: "Ήπια Hatha", en: "Gentle Hatha" }, level: "beginners" },
  { day: 3, time: "19:00", name: { el: "Αργή ροή & αναπνοή", en: "Slow Flow & Breath" }, level: "all" },
  { day: 4, time: "18:00", name: { el: "Yin & αποκατάσταση", en: "Yin & Restore" }, level: "all" },
  { day: 6, time: "10:00", name: { el: "Ροή Σαββατοκύριακου", en: "Weekend Flow" }, level: "intermediate" },
];
