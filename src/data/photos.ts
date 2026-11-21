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

/** About page, "A few words about me" — portrait (4:5) works best. */
export const aboutPhoto: Photo = {
  src: local("konstantina.jpg"),
  fallback: stock("photo-1552196563-55cd4e45efb3", 800, 1000),
  alt: { el: "Η Κωνσταντίνα διδάσκει γιόγκα", en: "Konstantina teaching yoga" },
  caption: { el: "", en: "" },
};

/** Big photos: events-1 = Home top banner, events-2 / events-3 = group & online cards, events-4 = About page banner. Landscape (3:2). */
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
    fallback: stock("photo-1510894347713-fc3ed6fdf539", 1600, 900),
    alt: { el: "Γιόγκα στα στρωματάκια", en: "Yoga on mats" },
    caption: { el: "Βραδινή ροή", en: "Evening flow" },
  },
];

/** studio-1 = private class card, studio-3 = Practice page banner, studio-2 is spare. 4:3. */
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

/** Workshops page — gallery of past workshops. Landscape (3:2). Add as many as you like. */
export const workshopPhotos: Photo[] = [
  {
    src: local("workshop-1.jpg"),
    fallback: stock("photo-1506126613408-eca07ce68773", 1200, 800),
    alt: { el: "Πρακτική yoga στη φύση", en: "Yoga practice in nature" },
    caption: { el: "", en: "" },
  },
  {
    src: local("workshop-2.jpg"),
    fallback: stock("photo-1593811167562-9cef47bfc4d7", 1200, 800),
    alt: { el: "Χαλάρωση με κρυστάλλινο μπολ", en: "Relaxation with a singing bowl" },
    caption: { el: "", en: "" },
  },
  {
    src: local("workshop-3.jpg"),
    fallback: stock("photo-1575052814086-f385e2e2ad1b", 1200, 800),
    alt: { el: "Στιγμή από workshop", en: "A moment from a workshop" },
    caption: { el: "", en: "" },
  },
];
