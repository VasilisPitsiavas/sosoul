/**
 * Every piece of text on the site, in Greek (el) and English (en).
 * Edit the wording here. Both languages must have the same keys.
 */
const en = {
  langName: "English",
  switchTo: "Ελληνικά",
  switchShort: "ΕΛ",
  teacher: "Konstantina",
  tagline: "Find your flow",
  skip: "Skip to content",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  nav: { home: "Home", events: "Events", studio: "Studio", contact: "Contact" },
  titles: {
    home: "So Soul Place — Yoga with Konstantina",
    events: "Events · So Soul Place",
    studio: "The studio · So Soul Place",
    contact: "Book & contact · So Soul Place",
  },
  footer: { tagline: "yoga with Konstantina", contactHeading: "Say hello" },
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  levels: { all: "All levels", beginners: "Beginners", intermediate: "Intermediate" },
  home: {
    eyebrow: "So Soul Place · Find your flow",
    title: "A quiet space to come home to yourself.",
    intro:
      "Yoga with Konstantina—gentle strength, breath you can feel, and teaching that meets you where you are. Step in, soften your shoulders, and leave clearer than you arrived.",
    book: "Book a session",
    explore: "Explore classes",
    thisWeek: "This week",
    fullSchedule: "Full schedule",
    aboutTitle: "The story behind the mat",
    about1:
      "So Soul Place began as a simple wish: to offer a room where movement feels honest—never performative, never rushed. Konstantina teaches from the belief that your body already knows how to heal if you give it breath, patience, and kind attention.",
    about2:
      "Whether you are unwinding after long days at a desk, returning after time away, or curious for the very first time, you are welcome here. No mirrors required—just you, the floor, and a little more space than you had yesterday.",
    aboutQuote: "Showing up is already enough. The practice simply helps you remember.",
    servicesTitle: "How we practice together",
    servicesIntro:
      "Three ways to work with Konstantina—each designed to feel personal, grounded, and sustainable in real life.",
    services: [
      {
        title: "Private sessions",
        description:
          "One-to-one time on the mat tailored to your body, goals, and schedule—ideal for beginners or anyone deepening practice.",
        to: "/contact",
        cta: "Get in touch",
      },
      {
        title: "Group classes",
        description:
          "Shared energy, clear guidance, and room to breathe. Small groups so you never feel lost in the crowd.",
        to: "/#schedule",
        cta: "See the schedule",
      },
      {
        title: "Events & workshops",
        description:
          "Seasonal gatherings and longer immersions—community, learning, and a change of rhythm from weekly class.",
        to: "/events",
        cta: "Explore",
      },
    ],
    scheduleTitle: "This week on the mat",
    scheduleIntro: "Small groups, every level welcome. Message us to save your spot.",
    testimonialsTitle: "Voices from the room",
    testimonialsIntro: "Short words from people who share this practice.",
    testimonials: [
      {
        quote: "I leave every class feeling lighter—Konstantina holds the space with such warmth and clarity.",
        name: "Maria P.",
        role: "Group classes",
      },
      {
        quote: "Private sessions helped me rebuild confidence after an injury. Patient, precise, never rushed.",
        name: "Elena K.",
        role: "Private client",
      },
      {
        quote: "The studio feels like a deep breath. Finally a place where I can actually switch off.",
        name: "Sofia T.",
        role: "Workshop guest",
      },
    ],
    faqTitle: "Good to know",
    faq: [
      {
        q: "I have never done yoga. Can I join?",
        a: "Yes. Gentle Hatha is made for beginners, and every class offers simpler options. Tell Konstantina before class if you have any injuries.",
      },
      {
        q: "What should I bring?",
        a: "Comfortable clothes and water. Mats, blocks and blankets are provided — bring your own mat if you prefer.",
      },
      {
        q: "How do I book a class?",
        a: "Send a message through the contact page or on Instagram. Spots are limited so every student gets attention.",
      },
      {
        q: "What if I can't make it?",
        a: "Let us know at least 12 hours before and we will move you to another class.",
      },
    ],
    ctaTitle: "Ready for a practice that fits your real life?",
    ctaText: "Book a session or send a note—we will reply with times and next steps.",
    openCalendar: "Open calendar",
    orWrite: "Or write a message",
  },
  events: {
    title: "Events",
    intro:
      "Moments from workshops, retreats, and community classes. Follow along on Instagram for upcoming dates.",
  },
  studio: {
    title: "The studio",
    intro:
      "A calm room for practice—natural light, simple lines, and everything you need for a grounded session.",
    body: "We keep the space uncluttered so you can focus on breath and movement. Mats and props are available; you are welcome to bring your own mat if you prefer.",
    gallery: "Gallery",
  },
  contact: {
    title: "Book & contact",
    intro: "Send a short message with what you are looking for—we will get back to you with availability and next steps.",
    write: "Write a message",
    calendly: "Pick a time (Calendly)",
    email: "Email",
    phone: "Phone",
    instagram: "Instagram",
    instagramLink: "message us",
    formTitle: "Send a message",
    formIntro: "Name, email, and a few lines are enough—we will follow up by email.",
    name: "Name",
    message: "Message",
    placeholder: "Tell us what you are looking for (e.g. private session, group class, preferred days)…",
    send: "Send message",
    sending: "Sending…",
    sent: "Thank you — your message was sent.",
    error: "Something went wrong. Please try again or email",
    mailSubject: "Booking enquiry from",
  },
};

export type Content = typeof en;

const el: Content = {
  langName: "Ελληνικά",
  switchTo: "English",
  switchShort: "EN",
  teacher: "Κωνσταντίνα",
  tagline: "Βρες τη ροή σου",
  skip: "Μετάβαση στο περιεχόμενο",
  menuOpen: "Άνοιγμα μενού",
  menuClose: "Κλείσιμο μενού",
  nav: { home: "Αρχική", events: "Εκδηλώσεις", studio: "Στούντιο", contact: "Επικοινωνία" },
  titles: {
    home: "So Soul Place — Γιόγκα με την Κωνσταντίνα",
    events: "Εκδηλώσεις · So Soul Place",
    studio: "Το στούντιο · So Soul Place",
    contact: "Κράτηση & επικοινωνία · So Soul Place",
  },
  footer: { tagline: "γιόγκα με την Κωνσταντίνα", contactHeading: "Επικοινωνία" },
  days: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
  daysShort: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  levels: { all: "Όλα τα επίπεδα", beginners: "Αρχάριοι", intermediate: "Μεσαίο επίπεδο" },
  home: {
    eyebrow: "So Soul Place · Βρες τη ροή σου",
    title: "Ένας ήσυχος χώρος για να επιστρέψεις στον εαυτό σου.",
    intro:
      "Γιόγκα με την Κωνσταντίνα — ήπια δύναμη, αναπνοή που τη νιώθεις και διδασκαλία που σε συναντά εκεί που βρίσκεσαι. Έλα, χαλάρωσε τους ώμους σου και φύγε με περισσότερη διαύγεια απ' ό,τι ήρθες.",
    book: "Κλείσε μάθημα",
    explore: "Δες τα μαθήματα",
    thisWeek: "Αυτή την εβδομάδα",
    fullSchedule: "Όλο το πρόγραμμα",
    aboutTitle: "Η ιστορία πίσω από το στρωματάκι",
    about1:
      "Το So Soul Place ξεκίνησε από μια απλή επιθυμία: να υπάρχει ένας χώρος όπου η κίνηση είναι αληθινή — ποτέ επιδεικτική, ποτέ βιαστική. Η Κωνσταντίνα διδάσκει με την πεποίθηση ότι το σώμα σου ήδη ξέρει πώς να θεραπευτεί, αν του δώσεις αναπνοή, υπομονή και τρυφερή προσοχή.",
    about2:
      "Είτε θέλεις να ξεφορτώσεις μετά από μεγάλες μέρες στο γραφείο, είτε επιστρέφεις ύστερα από ένα διάλειμμα, είτε δοκιμάζεις για πρώτη φορά, εδώ υπάρχει χώρος για σένα. Δεν χρειάζονται καθρέφτες — μόνο εσύ, το πάτωμα και λίγος περισσότερος χώρος απ' ό,τι είχες χθες.",
    aboutQuote: "Το να έρθεις είναι ήδη αρκετό. Η πρακτική απλώς σε βοηθά να το θυμηθείς.",
    servicesTitle: "Πώς εξασκούμαστε μαζί",
    servicesIntro:
      "Τρεις τρόποι να δουλέψεις με την Κωνσταντίνα — προσωπικοί, γειωμένοι και βιώσιμοι στην καθημερινότητα.",
    services: [
      {
        title: "Ιδιαίτερα μαθήματα",
        description:
          "Χρόνος ένας προς έναν στο στρωματάκι, προσαρμοσμένος στο σώμα, τους στόχους και το πρόγραμμά σου — ιδανικό για αρχάριους ή για όσους θέλουν να εμβαθύνουν.",
        to: "/contact",
        cta: "Επικοινώνησε",
      },
      {
        title: "Ομαδικά μαθήματα",
        description:
          "Κοινή ενέργεια, σαφής καθοδήγηση και χώρος να αναπνεύσεις. Μικρές ομάδες, ώστε να μη χάνεσαι ποτέ μέσα στο πλήθος.",
        to: "/#schedule",
        cta: "Δες το πρόγραμμα",
      },
      {
        title: "Εκδηλώσεις & εργαστήρια",
        description:
          "Εποχικές συναντήσεις και μεγαλύτερα εργαστήρια — κοινότητα, μάθηση και μια αλλαγή ρυθμού από το εβδομαδιαίο μάθημα.",
        to: "/events",
        cta: "Εξερεύνησε",
      },
    ],
    scheduleTitle: "Το πρόγραμμα της εβδομάδας",
    scheduleIntro: "Μικρές ομάδες, όλα τα επίπεδα ευπρόσδεκτα. Στείλε μας μήνυμα για να κρατήσεις θέση.",
    testimonialsTitle: "Φωνές από την αίθουσα",
    testimonialsIntro: "Λίγα λόγια από ανθρώπους που μοιράζονται αυτή την πρακτική.",
    testimonials: [
      {
        quote: "Φεύγω από κάθε μάθημα πιο ελαφριά — η Κωνσταντίνα κρατά τον χώρο με τόση ζεστασιά και καθαρότητα.",
        name: "Μαρία Π.",
        role: "Ομαδικά μαθήματα",
      },
      {
        quote: "Τα ιδιαίτερα με βοήθησαν να ξαναβρώ την αυτοπεποίθησή μου μετά από τραυματισμό. Υπομονετική, ακριβής, ποτέ βιαστική.",
        name: "Έλενα Κ.",
        role: "Ιδιαίτερα μαθήματα",
      },
      {
        quote: "Το στούντιο είναι σαν μια βαθιά ανάσα. Επιτέλους ένα μέρος όπου μπορώ πραγματικά να αποσυνδεθώ.",
        name: "Σοφία Τ.",
        role: "Εργαστήριο",
      },
    ],
    faqTitle: "Καλό να ξέρεις",
    faq: [
      {
        q: "Δεν έχω κάνει ποτέ γιόγκα. Μπορώ να έρθω;",
        a: "Φυσικά. Η Ήπια Hatha είναι φτιαγμένη για αρχάριους και κάθε μάθημα προσφέρει πιο απλές εκδοχές. Πες στην Κωνσταντίνα πριν το μάθημα αν έχεις κάποιον τραυματισμό.",
      },
      {
        q: "Τι να φέρω;",
        a: "Άνετα ρούχα και νερό. Στρωματάκια, τουβλάκια και κουβέρτες υπάρχουν στο στούντιο — μπορείς να φέρεις και το δικό σου στρωματάκι αν προτιμάς.",
      },
      {
        q: "Πώς κλείνω θέση;",
        a: "Στείλε μήνυμα από τη σελίδα επικοινωνίας ή στο Instagram. Οι θέσεις είναι περιορισμένες, ώστε κάθε μαθητής να έχει την προσοχή που χρειάζεται.",
      },
      {
        q: "Τι γίνεται αν δεν μπορώ να έρθω;",
        a: "Ενημέρωσέ μας τουλάχιστον 12 ώρες πριν και θα σου βρούμε θέση σε άλλο μάθημα.",
      },
    ],
    ctaTitle: "Θέλεις μια πρακτική που χωράει στην αληθινή σου ζωή;",
    ctaText: "Κλείσε μάθημα ή στείλε ένα μήνυμα — θα σου απαντήσουμε με διαθέσιμες ώρες και τα επόμενα βήματα.",
    openCalendar: "Άνοιξε το ημερολόγιο",
    orWrite: "Ή γράψε ένα μήνυμα",
  },
  events: {
    title: "Εκδηλώσεις",
    intro:
      "Στιγμές από εργαστήρια, retreats και μαθήματα της κοινότητας. Ακολούθησέ μας στο Instagram για τις επόμενες ημερομηνίες.",
  },
  studio: {
    title: "Το στούντιο",
    intro:
      "Ένας ήρεμος χώρος για εξάσκηση — φυσικό φως, απλές γραμμές και ό,τι χρειάζεσαι για ένα γειωμένο μάθημα.",
    body: "Κρατάμε τον χώρο λιτό, ώστε να εστιάζεις στην αναπνοή και την κίνηση. Υπάρχουν στρωματάκια και βοηθήματα· μπορείς επίσης να φέρεις το δικό σου στρωματάκι.",
    gallery: "Φωτογραφίες",
  },
  contact: {
    title: "Κράτηση & επικοινωνία",
    intro: "Στείλε ένα σύντομο μήνυμα με αυτό που ψάχνεις — θα επανέλθουμε με διαθεσιμότητα και τα επόμενα βήματα.",
    write: "Γράψε μήνυμα",
    calendly: "Διάλεξε ώρα (Calendly)",
    email: "Email",
    phone: "Τηλέφωνο",
    instagram: "Instagram",
    instagramLink: "στείλε μας μήνυμα",
    formTitle: "Στείλε μήνυμα",
    formIntro: "Όνομα, email και λίγες γραμμές αρκούν — θα σου απαντήσουμε με email.",
    name: "Όνομα",
    message: "Μήνυμα",
    placeholder: "Πες μας τι ψάχνεις (π.χ. ιδιαίτερο μάθημα, ομαδικό, μέρες που σε βολεύουν)…",
    send: "Αποστολή μηνύματος",
    sending: "Αποστολή…",
    sent: "Ευχαριστούμε — το μήνυμά σου στάλθηκε.",
    error: "Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε email στο",
    mailSubject: "Αίτημα κράτησης από",
  },
};

export const content = { el, en };
