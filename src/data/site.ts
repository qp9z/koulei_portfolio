// ─────────────────────────────────────────────────────────────
//  EDIT ME — this file is the whole portfolio's content.
//  Change text, projects, links here and the site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "koulei",
  name: "Abdulrhman Al-Smadi",
  role: "Software Engineer · Flutter Developer",
  location: "Amman, Jordan",
  email: "abdulrhmansmadi@gmail.com",
  url: "https://koulei.dev",
  available: true,
  availabilityText: "Open to freelance work & collaborations",
  resume: "/resume.pdf", // drop a resume.pdf into /public to enable
  tagline:
    "I build fast, beautiful cross-platform apps with Flutter — turning ideas into polished products that feel great to use.",
};

// Set these to your real profiles (or leave a link out by deleting the line).
export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/koulei" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/koulei" },
  { name: "X", icon: "x", url: "https://x.com/koulei" },
  { name: "Email", icon: "mail", url: "mailto:abdulrhmansmadi@gmail.com" },
];

export const about = {
  intro:
    "I'm a first-year Software Engineering student at Wise University in Jordan, and a self-driven mobile developer. I specialize in building cross-platform apps with Flutter — obsessing over clean architecture, delightful UI, and shipping things that actually work.",
  extra:
    "Whether it's a mobile app, a web experience, or a weekend experiment, I care about the details: smooth interactions, sensible code, and interfaces people enjoy using.",
  facts: [
    { label: "Focus", value: "Flutter & Mobile" },
    { label: "Education", value: "B.Sc. Software Engineering — Wise University" },
    { label: "Based in", value: "Amman, Jordan" },
    { label: "Currently", value: "Learning, building & shipping" },
  ],
  stats: [
    { value: "3+", label: "Years coding" },
    { value: "6+", label: "Projects built" },
    { value: "12+", label: "Technologies" },
  ],
};

// What I offer.
export const services = [
  {
    icon: "phone",
    title: "Mobile App Development",
    text: "Cross-platform iOS & Android apps with Flutter — one codebase, native-quality feel, fast delivery.",
  },
  {
    icon: "sparkles",
    title: "UI / UX Implementation",
    text: "Pixel-accurate, responsive interfaces from Figma to production, with smooth motion and accessibility built in.",
  },
  {
    icon: "code",
    title: "Web Development",
    text: "Fast, static, SEO-friendly websites and landing pages built with Astro and modern web tooling.",
  },
];

export const skills = [
  { group: "Languages", items: ["Dart", "TypeScript", "JavaScript", "Python", "C++", "SQL"] },
  { group: "Mobile", items: ["Flutter", "Firebase", "REST APIs", "Riverpod / Provider", "Material 3"] },
  { group: "Web", items: ["Astro", "React", "HTML", "CSS", "Node.js"] },
  { group: "Tools", items: ["Git & GitHub", "VS Code", "Figma", "Postman", "Linux"] },
];

// featured: true → shows a highlight ring + appears first.
export const projects = [
  {
    name: "TaskFlow",
    tagline: "Cross-platform productivity app",
    description:
      "A to-do & habit tracker built with Flutter and Firebase — offline sync, smart reminders, and a clean Material 3 interface.",
    tags: ["Flutter", "Firebase", "Riverpod"],
    featured: true,
    links: { code: "https://github.com/koulei", demo: "" },
  },
  {
    name: "WeatherNow",
    tagline: "Sleek weather forecasts",
    description:
      "Location search, hourly & 7-day forecasts, and animated conditions, powered by the OpenWeather API and a tidy Dart architecture.",
    tags: ["Flutter", "REST API", "Dart"],
    featured: true,
    links: { code: "https://github.com/koulei", demo: "" },
  },
  {
    name: "koulei.dev",
    tagline: "This portfolio",
    description:
      "Designed and built from scratch with Astro for a fast, static, fully accessible experience — dark mode, motion, and zero bloat.",
    tags: ["Astro", "TypeScript", "CSS"],
    featured: false,
    links: { code: "https://github.com/koulei", demo: "https://koulei.dev" },
  },
  {
    name: "ShopEase",
    tagline: "Mini e-commerce app",
    description:
      "A product catalog, cart, and checkout flow built to practice clean architecture and predictable state management with Bloc.",
    tags: ["Flutter", "Bloc"],
    featured: false,
    links: { code: "https://github.com/koulei", demo: "" },
  },
  {
    name: "DevNotes",
    tagline: "Notes for developers",
    description:
      "A markdown notes app with syntax highlighting and tag-based organization, backed by a local SQLite store.",
    tags: ["Flutter", "SQLite"],
    featured: false,
    links: { code: "https://github.com/koulei", demo: "" },
  },
  {
    name: "Quizzly",
    tagline: "Trivia quiz game",
    description:
      "Category-based quizzes with timers and score tracking, consuming a public trivia API with graceful loading and error states.",
    tags: ["Flutter", "REST API"],
    featured: false,
    links: { code: "https://github.com/koulei", demo: "" },
  },
];

// Journey / what I've done. Newest first.
export const journey = [
  {
    period: "2025 — Present",
    title: "B.Sc. Software Engineering — Wise University",
    text: "Started my Software Engineering degree in Jordan, deepening the fundamentals: data structures, algorithms, and software design.",
    tag: "Education",
  },
  {
    period: "2024",
    title: "Went all-in on Flutter",
    text: "Focused on mobile development, shipping several cross-platform apps and getting comfortable with Firebase, state management, and clean architecture.",
    tag: "Mobile",
  },
  {
    period: "2023",
    title: "Started my coding journey",
    text: "Began with Python and web fundamentals, building small projects and falling for the craft of turning ideas into working software.",
    tag: "Foundations",
  },
];
