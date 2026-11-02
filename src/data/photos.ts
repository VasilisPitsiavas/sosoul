/**
 * Website photos.
 *
 * HOW TO ADD YOUR OWN: put image files in `public/photos/` using the file
 * names below (e.g. public/photos/events-1.jpg). The site picks them up
 * automatically. Until a file exists, the stock photo (`fallback`) is shown.
 *
 * Want more or fewer photos? Add or remove entries in the lists below.
 */
const local = (file: string) => `${import.meta.env.BASE_URL}photos/${file}`;
const stock = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

type Text = { el: string; en: string };
export type Photo = { src: string; fallback: string; alt: Text; caption: Text };

/** Home page, "The story behind the mat" — portrait (4:5) works best. */
export const aboutPhoto: Photo = {
  src: local("konstantina.jpg"),
  fallback: stock("photo-1518611012118-696072aa579a", 800, 1000),
  alt: { el: "Η Κωνσταντίνα διδάσκει γιόγκα", en: "Konstantina teaching yoga" },
  caption: { el: "", en: "" },
};

/** Events page — landscape (3:2). */
export const eventPhotos: Photo[] = [
  {
    src: local("events-1.jpg"),
    fallback: stock("photo-1544367567-0f2fcb009e0b", 900, 600),
    alt: { el: "Εξάσκηση γιόγκα σε φωτεινό στούντιο", en: "Yoga practice in a bright studio" },
    caption: { el: "Μάθημα κοινότητας — ανοιξιάτικη συνάντηση", en: "Community class — spring gathering" },
  },
  {
    src: local("events-2.jpg"),
    fallback: stock("photo-1506126613408-eca07ce68773", 900, 600),
    alt: { el: "Στιγμή διαλογισμού", en: "Peaceful meditation moment" },
    caption: { el: "Μάθημα στην ύπαιθρο", en: "Outdoor session" },
  },
  {
    src: local("events-3.jpg"),
    fallback: stock("photo-1599901860904-17e6ed7083a0", 900, 600),
    alt: { el: "Ομαδικό μάθημα γιόγκα", en: "Group yoga class" },
    caption: { el: "Εργαστήριο Σαββατοκύριακου", en: "Weekend workshop" },
  },
  {
    src: local("events-4.jpg"),
    fallback: stock("photo-1518611012118-696072aa579a", 900, 600),
    alt: { el: "Γιόγκα στα στρωματάκια", en: "Yoga on mats" },
    caption: { el: "Βραδινή ροή", en: "Evening flow" },
  },
];

/** Studio page — 4:3. */
export const studioPhotos: Photo[] = [
  {
    src: local("studio-1.jpg"),
    fallback: stock("photo-1601925260368-ae2f83cf8b7f", 900, 700),
    alt: { el: "Λιτό εσωτερικό στούντιο γιόγκα", en: "Minimal yoga studio interior" },
    caption: { el: "Η κύρια αίθουσα", en: "Main practice room" },
  },
  {
    src: local("studio-2.jpg"),
    fallback: stock("photo-1571902943202-507ec2618e8f", 900, 700),
    alt: { el: "Βοηθήματα στο φυσικό φως", en: "Studio props and light" },
    caption: { el: "Βοηθήματα & φυσικό φως", en: "Props & natural light" },
  },
  {
    src: local("studio-3.jpg"),
    fallback: stock("photo-1599447421416-3414500d18a5", 900, 700),
    alt: { el: "Ήσυχη γωνιά του στούντιο", en: "Calm studio corner" },
    caption: { el: "Χώρος χαλάρωσης", en: "Rest area" },
  },
];
