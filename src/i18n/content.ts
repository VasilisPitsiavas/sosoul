/**
 * Every piece of text on the site, in Greek (el) and English (en).
 * Edit the wording here. Both languages must have the same keys.
 * The Greek text follows the feedback document word for word.
 */

type Item = { title: string; subtitle?: string; text: string };
type Format = Item & { points: string[] };

const en = {
  langName: "English",
  switchTo: "Ελληνικά",
  switchShort: "ΕΛ",
  tagline: "Find your flow",
  skip: "Skip to content",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  nav: { home: "Home", about: "About", practice: "Practice", workshops: "Workshops", contact: "FAQ & Contact" },
  titles: {
    home: "So Soul Place — Find your flow",
    about: "About · So Soul Place",
    practice: "The practice · So Soul Place",
    workshops: "Workshops · So Soul Place",
    contact: "FAQ & contact · So Soul Place",
  },
  footer: {
    line: "SoSoul Place — A little space to breathe.",
    sub: "A space for everyone.",
    contactHeading: "Get in touch",
  },
  bookCta: "Book your spot",

  home: {
    eyebrow: "So Soul Place — Find your flow",
    title: "A space for everyone.",
    subtitle: "A little space to breathe.",
    lines: [
      "A small pause from the rhythm of everyday life.",
      "A little closer to what matters.",
    ],
    discover: "Discover SoSoul",
    body: [
      "Everyday life often fills up with obligations, thoughts, demands and fast rhythms. Somewhere in between, we lose touch with what really matters. SoSoul was born as a conscious answer to that noise. It is an open invitation to put down whatever weighs on us and make a little room for movement, rest, simplicity and real human connection.",
      "Through yoga, we want to create an environment where everyone can come as they are, follow their own rhythm and find the time they need for themselves.",
    ],
    formatsTitle: "Practice that adapts to your time and space",
    seePractice: "See the practices",
    ctaTitle: "Have a question, or want to book your first class?",
  },

  about: {
    title: "Our foundation",
    lead: "Calm is not a luxury, it is a need.",
    body: [
      "This effort was born as a conscious answer to the noise and speed of our time, putting calm first as a basic need for every person looking for relief from the weight of everyday life.",
      "Within this frame, inclusion and accessibility stop being formal words and become an act of care. We place respect at the core of an identity that rejects every form of exclusion, honouring each person's own rhythm, body and path.",
      "We believe in the truth of the simple, the imperfect and the handmade, far from the mass-produced and the impersonal. Recognising imperfection as an organic part of creation, we choose continuous, conscious growth and the move from the individual to the collective.",
    ],
    journeyTitle: "The SoSoul journey",
    journey:
      "Today, this vision takes shape, starting with yoga classes — a living seed, tended with love, meant to grow gradually into an open meeting place where movement will sit alongside simple, healthy food and the warmth of community.",
    meTitle: "A few words about me",
    me: "I'm Konstantina. My relationship with yoga began with the need to find a quiet place within the noise. In my classes we don't look for the “perfect” pose, but for a return to the breath, to acceptance and to relief. I look forward to meeting you and sharing the practice.",
    photoAlt: "Konstantina teaching yoga",
  },

  practice: {
    title: "Your own practice, your own rhythm.",
    lines: [
      "Every body is different.",
      "Every day is different.",
      "And every practice can be a new experience.",
    ],
    body: "In our yoga classes we focus on conscious movement, breath and personal growth, without comparisons and without pressure to perform. A space to get to know the practice and build your own relationship with it.",
    stylesTitle: "Our practices",
    styles: [
      {
        title: "Hatha Yoga",
        text: "The foundation of the practice. Poses (asanas) held with awareness and combined with the breath, to build stability, alignment, strength and inner focus.",
      },
      {
        title: "Vinyasa Flow",
        text: "Fluid movement in time with the breath, creating a moving meditation. A dynamic but mindful practice that wakes up the body and releases tension.",
      },
      {
        title: "Yin Yoga",
        text: "A slow, deep practice that focuses on the connective tissues and joints, holding poses for longer. Ideal for slowing down, acceptance and deep release.",
      },
      {
        title: "Yoga Nidra",
        subtitle: "Yogic sleep",
        text: "A guided meditation of deep relaxation, where the body rests completely while the mind stays in a calm, aware state. A true “lightening” for the nervous system.",
      },
      {
        title: "Gentle / Slow Flow",
        text: "A softer, gentler version of flow, ideal for beginners, for low-energy days, or for anyone looking for a more tender approach to movement.",
      },
      {
        title: "Breathwork & Meditation",
        text: "Simple breathing techniques and guided focus to quiet the noise of the mind and return to the present.",
      },
    ] as Item[],
    formatsTitle: "The practices adapt to your own time and space.",
    formats: [
      {
        title: "Group classes",
        text: "Small groups that encourage closeness, personal attention and the strength of practising together.",
        points: ["Small groups", "Personal attention", "The warmth of community"],
      },
      {
        title: "Private classes (1‑on‑1)",
        text: "Designed entirely around your needs, your body and your rhythm, at your place or at a partner studio.",
        points: ["Built around you", "At your place or a partner studio", "At your own rhythm"],
      },
      {
        title: "Online practice",
        text: "Live classes from the comfort and safety of your home, wherever you are.",
        points: ["Live classes", "Wherever you are", "A mat and a quiet corner are enough"],
      },
    ] as Format[],
    flipHint: "Learn more",
    flipBack: "Back",
  },


  workshops: {
    title: "Together, a little deeper into the practice.",
    body: [
      "Yoga doesn't stop at four walls or at regular classes. Through our workshops, we spend a little more time on special themes, on decompression practices, or on gatherings outside the studio.",
      "These moments are a chance to connect the breath with nature, to share a cup of hot tea after the mat, and to feel the warmth of community in its simplest form.",
    ],
    kindsTitle: "What a workshop can be",
    kindsText:
      "Some workshops give more time to a special theme — a style of practice, one part of the body, or the breath — so we can get to know it in depth. Others focus on decompression, with slow, restorative practices that help us let go of what we carry from the week and give the nervous system a rest. And sometimes we step outside the studio to practise in nature: by the sea, in a park or in the mountains, with nothing but the breath and the open sky.",
    upcomingTitle: "Upcoming workshops",
    noUpcoming: "Upcoming workshops are announced here and on Instagram.",
    askLine: "Want to know when we're preparing something special? Send me a message.",
    instagram: "Follow on Instagram",
    message: "Send me a message",
    galleryTitle: "Moments from our gatherings",
    homeTitle: "Workshops",
    homeText: "Special themes, decompression practices and gatherings outside the studio — with a cup of hot tea after the mat.",
    homeCta: "See the workshops",
  },
  contact: {
    faqTitle: "Before you come to the mat",
    faqEyebrow: "Frequently asked questions",
    faq: [
      {
        q: "I've never done yoga and I'm not flexible. Can I join?",
        a: "Of course. Flexibility isn't a requirement to start yoga — it's simply something that may come along the way. At SoSoul there are no “right” or “perfect” poses. We adapt the practice to what your own body can do and how it feels.",
      },
      {
        q: "Which kind of practice suits me?",
        a: "If you want something gentle and relaxing, Yin Yoga or Yoga Nidra are wonderful places to start. If you're looking for movement and strength, Hatha or Vinyasa will suit you better. If you're not sure, send me a message and we'll find together what you need right now.",
      },
      {
        q: "What do I need to bring?",
        a: "Comfortable clothes you can move and breathe freely in. If you're coming to a group or private class, let me know if you need a mat. For online classes, all you need is a quiet corner at home, a mat (or a blanket) and a good connection.",
      },
    ],
    title: "Come and say hello",
    intro:
      "Have a question, want to know the weekly schedule, or want to book your first class? Send me a message — I'd love to talk.",
    email: "Email",
    phone: "Phone / Viber / WhatsApp",
    instagram: "Instagram",
    calendly: "Pick a time (Calendly)",
    formTitle: "Contact form",
    name: "Name",
    message: "Message",
    placeholder: "Write your message…",
    send: "Send message",
    sending: "Sending…",
    sent: "Thank you — your message was sent.",
    error: "Something went wrong. Please try again or email",
    mailSubject: "Message from",
  },
};

export type Content = typeof en;

const el: Content = {
  langName: "Ελληνικά",
  switchTo: "English",
  switchShort: "EN",
  tagline: "Find your flow",
  skip: "Μετάβαση στο περιεχόμενο",
  menuOpen: "Άνοιγμα μενού",
  menuClose: "Κλείσιμο μενού",
  nav: { home: "Αρχική", about: "Σχετικά", practice: "Η Πρακτική", workshops: "Workshops", contact: "Ερωτήσεις & Επικοινωνία" },
  titles: {
    home: "So Soul Place — Find your flow",
    about: "Σχετικά · So Soul Place",
    practice: "Η Πρακτική · So Soul Place",
    workshops: "Workshops · So Soul Place",
    contact: "Συχνές ερωτήσεις & επικοινωνία · So Soul Place",
  },
  footer: {
    line: "SoSoul Place — A little space to breathe.",
    sub: "Ένας χώρος για όλους.",
    contactHeading: "Επικοινωνία",
  },
  bookCta: "Κλείσε τη θέση σου",

  home: {
    eyebrow: "So Soul Place — Find your flow",
    title: "Ένας χώρος για όλους.",
    subtitle: "A little space to breathe.",
    lines: [
      "Μια μικρή παύση από τον ρυθμό της καθημερινότητας.",
      "Λίγο πιο κοντά σε όσα έχουν σημασία.",
    ],
    discover: "Ανακάλυψε το SoSoul",
    body: [
      "Η καθημερινότητα συχνά γεμίζει με υποχρεώσεις, σκέψεις, απαιτήσεις και γρήγορους ρυθμούς. Κάπου ανάμεσα σε όλα αυτά, χάνουμε την επαφή με όσα πραγματικά έχουν σημασία. Το SoSoul γεννήθηκε ως μια συνειδητή απάντηση σε αυτόν τον θόρυβο. Είναι μια ανοιχτή πρόσκληση να αφήσουμε κάτω ό,τι μας βαραίνει και να κάνουμε λίγο χώρο για κίνηση, ξεκούραση, απλότητα και ουσιαστική ανθρώπινη επαφή.",
      "Μέσα από τη yoga, θέλουμε να δημιουργήσουμε ένα περιβάλλον όπου ο καθένας μπορεί να έρθει όπως είναι, να ακολουθήσει τον δικό του ρυθμό και να βρει τον χρόνο που χρειάζεται για τον εαυτό του.",
    ],
    formatsTitle: "Η πρακτική προσαρμόζεται στον δικό σου χρόνο και χώρο",
    seePractice: "Δες τις πρακτικές",
    ctaTitle: "Έχεις κάποια απορία ή θέλεις να κλείσουμε το πρώτο σου μάθημα;",
  },

  about: {
    title: "Η Ιδεολογική μας Βάση",
    lead: "Η ηρεμία δεν είναι πολυτέλεια, αλλά ανάγκη.",
    body: [
      "Η προσπάθεια αυτή γεννήθηκε ως μια συνειδητή απάντηση στον θόρυβο και την ταχύτητα της εποχής μας, προτάσσοντας την ηρεμία ως θεμελιώδη ανάγκη για κάθε άνθρωπο που αναζητά την ελάφρυνση από το βάρος της καθημερινότητας.",
      "Μέσα σε αυτό το πλαίσιο, η συμπερίληψη και η προσβασιμότητα παύουν να είναι τυπικές λέξεις και μετατρέπονται σε πράξη φροντίδας. Τοποθετούμε τον σεβασμό στον πυρήνα μιας ταυτότητας που αρνείται κάθε μορφή αποκλεισμού, τιμώντας τον προσωπικό ρυθμό, το σώμα και τη διαδρομή του κάθε ανθρώπου.",
      "Πιστεύουμε στην αλήθεια του απλού, του ατελούς και του χειροποίητου, μακριά από το μαζικό και το απρόσωπο. Αναγνωρίζοντας την ατέλεια ως οργανικό κομμάτι της δημιουργίας, επιλέγουμε τη συνεχή, συνειδητή εξέλιξη και τη μετάβαση από το ατομικό στο συλλογικό.",
    ],
    journeyTitle: "Το ταξίδι του SoSoul",
    journey:
      "Σήμερα, το όραμα αυτό παίρνει σάρκα και οστά ξεκινώντας από τα μαθήματα yoga — έναν ζωντανό σπόρο που καλλιεργείται με αγάπη, με σκοπό να εξελιχθεί σταδιακά σε έναν ανοιχτό χώρο συνάντησης, όπου η κίνηση θα συνυπάρχει με την απλή, υγιεινή τροφή και τη ζεστασιά της κοινότητας.",
    meTitle: "Λίγα λόγια για μένα",
    me: "Είμαι η Κωνσταντίνα. Η σχέση μου με τη yoga ξεκίνησε από την ανάγκη να βρω έναν χώρο ησυχίας μέσα στον θόρυβο. Στα μαθήματά μου δεν αναζητούμε την «τέλεια» στάση, αλλά την επιστροφή στην αναπνοή, την αποδοχή και την ελάφρυνση. Σε περιμένω να γνωριστούμε και να μοιραστούμε την πρακτική.",
    photoAlt: "Η Κωνσταντίνα διδάσκει yoga",
  },

  practice: {
    title: "Η δική σου πρακτική, ο δικός σου ρυθμός.",
    lines: [
      "Κάθε σώμα είναι διαφορετικό.",
      "Κάθε ημέρα είναι διαφορετική.",
      "Και κάθε πρακτική μπορεί να είναι μια νέα εμπειρία.",
    ],
    body: "Στα μαθήματα yoga δίνουμε έμφαση στη συνειδητή κίνηση, στην αναπνοή και στην προσωπική εξέλιξη, χωρίς συγκρίσεις και χωρίς πίεση για επίδοση. Ένας χώρος για να γνωρίσεις την πρακτική και να δημιουργήσεις τη δική σου σχέση μαζί της.",
    stylesTitle: "Οι Πρακτικές μας",
    styles: [
      {
        title: "Hatha Yoga",
        text: "Η βάση της πρακτικής. Στάσεις (asanas) που κρατάμε με επίγνωση, συνδυασμένες με την αναπνοή, για να καλλιεργήσουμε σταθερότητα, ευθυγράμμιση, δύναμη και εσωτερική συγκέντρωση.",
      },
      {
        title: "Vinyasa Flow",
        text: "Ρευστή κίνηση που συγχρονίζεται με την αναπνοή, δημιουργώντας έναν κινούμενο διαλογισμό. Μια δυναμική αλλά συνειδητή πρακτική που ξυπνά το σώμα και ελευθερώνει την ένταση.",
      },
      {
        title: "Yin Yoga",
        text: "Μια αργή, βαθιά πρακτική που εστιάζει στους συνδετικούς ιστούς και τις αρθρώσεις, κρατώντας τις στάσεις για περισσότερη ώρα. Ιδανική για επιβράδυνση, αποδοχή και βαθιά αποσυμπίεση.",
      },
      {
        title: "Yoga Nidra",
        subtitle: "Γιογκικός Ύπνος",
        text: "Ένας καθοδηγούμενος διαλογισμός βαθιάς χαλάρωσης, όπου το σώμα ξεκουράζεται πλήρως ενώ ο νους παραμένει σε μια ήρεμη, συνειδητή κατάσταση. Μια πραγματική «ελάφρυνση» για το νευρικό σύστημα.",
      },
      {
        title: "Gentle / Slow Flow",
        text: "Μια πιο ήπια, απαλή εκδοχή της ροής, ιδανική για αρχάριους, για ημέρες με χαμηλή ενέργεια ή για όσους αναζητούν μια πιο τρυφερή προσέγγιση στην κίνηση.",
      },
      {
        title: "Breathwork & Meditation",
        subtitle: "Αναπνοή & Διαλογισμός",
        text: "Απλές τεχνικές αναπνοής και καθοδηγούμενης συγκέντρωσης για να ησυχάσει ο θόρυβος του μυαλού και να επιστρέψουμε στο παρόν.",
      },
    ],
    formatsTitle: "Οι πρακτικές προσαρμόζονται στον δικό σου χρόνο και χώρο.",
    formats: [
      {
        title: "Ομαδικά Τμήματα",
        text: "Ολιγομελή γκρουπ που ευνοούν την οικειότητα, την προσωπική φροντίδα και τη δύναμη της κοινής πρακτικής.",
        points: ["Μικρές ομάδες", "Προσωπική φροντίδα", "Η ζεστασιά της κοινότητας"],
      },
      {
        title: "Ατομικά Μαθήματα (1‑on‑1)",
        text: "Σχεδιασμένα αποκλειστικά πάνω στις δικές σου ανάγκες, το σώμα και τον ρυθμό σου, στον χώρο σου ή σε συνεργαζόμενο στούντιο.",
        points: ["Στα μέτρα σου", "Στον χώρο σου ή σε στούντιο", "Στον δικό σου ρυθμό"],
      },
      {
        title: "Online Πρακτικές",
        text: "Ζωντανά μαθήματα από την άνεση και την ασφάλεια του σπιτιού σου, όπου κι αν βρίσκεσαι.",
        points: ["Ζωντανά μαθήματα", "Όπου κι αν βρίσκεσαι", "Αρκεί ένα στρωματάκι και μια ήσυχη γωνιά"],
      },
    ],
    flipHint: "Μάθε περισσότερα",
    flipBack: "Πίσω",
  },


  workshops: {
    title: "Μαζί, λίγο πιο βαθιά στην πρακτική.",
    body: [
      "Η yoga δεν σταματά στους τέσσερις τοίχους ούτε στα συνηθισμένα μαθήματα. Μέσα από τα workshops μας, αφιερώνουμε λίγο παραπάνω χρόνο σε ειδικές θεματικές, σε πρακτικές αποσυμπίεσης ή σε συναντήσεις εκτός στούντιο.",
      "Αυτές οι στιγμές είναι μια ευκαιρία να συνδέσουμε την αναπνοή με τη φύση, να μοιραστούμε μια κούπα ζεστό τσάι μετά το στρωματάκι και να ζήσουμε τη ζεστασιά της κοινότητας στην πιο απλή της μορφή.",
    ],
    kindsTitle: "Τι μπορεί να είναι ένα workshop",
    kindsText:
      "Κάποια workshops αφιερώνουν περισσότερο χρόνο σε μια ειδική θεματική — ένα είδος πρακτικής, ένα σημείο του σώματος ή την αναπνοή — για να τη γνωρίσουμε σε βάθος. Άλλα εστιάζουν στην αποσυμπίεση, με αργές, αναζωογονητικές πρακτικές που μας βοηθούν να αφήσουμε ό,τι κουβαλάμε από την εβδομάδα και να ξεκουραστεί το νευρικό σύστημα. Και κάποιες φορές βγαίνουμε εκτός στούντιο, για πρακτική μέσα στη φύση: δίπλα στη θάλασσα, σε ένα πάρκο ή στο βουνό, με την αναπνοή και τον ανοιχτό ουρανό.",
    upcomingTitle: "Επόμενα workshops",
    noUpcoming: "Τα επόμενα workshops ανακοινώνονται εδώ και στο Instagram.",
    askLine: "Αν θέλεις να μάθεις πότε ετοιμάζουμε κάτι ξεχωριστό, στείλε μου ένα μήνυμα.",
    instagram: "Δες μας στο Instagram",
    message: "Στείλε μου μήνυμα",
    galleryTitle: "Στιγμές από τις συναντήσεις μας",
    homeTitle: "Workshops",
    homeText: "Ειδικές θεματικές, πρακτικές αποσυμπίεσης και συναντήσεις εκτός στούντιο — με μια κούπα ζεστό τσάι μετά το στρωματάκι.",
    homeCta: "Δες τα workshops",
  },
  contact: {
    faqTitle: "Πριν έρθεις στο στρωματάκι",
    faqEyebrow: "Συχνές ερωτήσεις",
    faq: [
      {
        q: "Δεν έχω ξανακάνει yoga και δεν έχω ευλυγισία. Μπορώ να συμμετάσχω;",
        a: "Φυσικά. Η ευλυγισία δεν είναι προϋπόθεση για να ξεκινήσεις yoga — είναι απλώς κάτι που μπορεί να προκύψει στην πορεία. Στο SoSoul δεν υπάρχουν «σωστές» ή «τέλειες» στάσεις. Προσαρμόζουμε την πρακτική στις δυνατότητες και την αίσθηση του δικού σου σώματος.",
      },
      {
        q: "Ποιο είδος πρακτικής μου ταιριάζει;",
        a: "Αν θέλεις κάτι ήπιο και χαλαρωτικό, η Yin Yoga ή η Yoga Nidra είναι υπέροχες αφετηρίες. Αν αναζητάς κίνηση και ενδυνάμωση, η Hatha ή η Vinyasa θα σου ταιριάξουν περισσότερο. Αν δεν είσαι σίγουρος/η, στείλε μου ένα μήνυμα και θα βρούμε μαζί αυτό που χρειάζεσαι αυτή την περίοδο.",
      },
      {
        q: "Τι χρειάζεται να έχω μαζί μου;",
        a: "Άνετα ρούχα στα οποία μπορείς να κινείσαι και να αναπνέεις ελεύθερα. Αν έρθεις σε ομαδικό ή ατομικό μάθημα, ενημέρωσέ με αν χρειάζεσαι στρωματάκι. Για τα online μαθήματα, αρκεί μια ήσυχη γωνιά στο σπίτι σου, ένα στρωματάκι (ή μια κουβέρτα) και καλή σύνδεση.",
      },
    ],
    title: "Έλα να γνωριστούμε",
    intro:
      "Έχεις κάποια απορία, θέλεις να μάθεις το εβδομαδιαίο πρόγραμμα ή να κλείσουμε το πρώτο σου μάθημα; Στείλε μου ένα μήνυμα — θα χαρώ πολύ να τα πούμε από κοντά.",
    email: "Email",
    phone: "Τηλέφωνο / Viber / WhatsApp",
    instagram: "Instagram",
    calendly: "Διάλεξε ώρα (Calendly)",
    formTitle: "Φόρμα επικοινωνίας",
    name: "Όνομα",
    message: "Μήνυμα",
    placeholder: "Γράψε το μήνυμά σου…",
    send: "Στείλε μήνυμα",
    sending: "Αποστολή…",
    sent: "Ευχαριστώ — το μήνυμά σου στάλθηκε.",
    error: "Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε email στο",
    mailSubject: "Μήνυμα από",
  },
};

export const content = { el, en };
