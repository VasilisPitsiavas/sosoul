export const services = [
  {
    title: "Private sessions",
    description:
      "One-to-one time on the mat tailored to your body, goals, and schedule—ideal for beginners or anyone deepening practice.",
    to: "/contact",
    cta: "Enquire",
  },
  {
    title: "Group classes",
    description:
      "Shared energy, clear guidance, and room to breathe. Small groups so you never feel lost in the crowd.",
    to: "/events",
    cta: "View events",
  },
  {
    title: "Events & workshops",
    description:
      "Seasonal gatherings and longer immersions—community, learning, and a change of rhythm from weekly class.",
    to: "/events",
    cta: "Explore",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I leave every class feeling lighter—Konstantina holds the space with such warmth and clarity.",
    name: "Maria P.",
    role: "Group classes",
  },
  {
    quote:
      "Private sessions helped me rebuild confidence after an injury. Patient, precise, never rushed.",
    name: "Elena K.",
    role: "Private client",
  },
  {
    quote:
      "The studio feels like a deep breath. Finally a place where I can actually switch off.",
    name: "Sofia T.",
    role: "Workshop guest",
  },
] as const;
