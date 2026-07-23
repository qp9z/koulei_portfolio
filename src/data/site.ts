// ─────────────────────────────────────────────────────────────
//  EDIT ME — this file is the whole portfolio's content.
//  Change text, projects, links here and the site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "koulei",
  name: "Abdulrhman Al-Smadi ",
  role: "Software Engineer · Flutter Developer",
  location: "Amman, Jordan",
  email: "contact@koulei.dev",
  url: "https://koulei.dev",
  available: true,
  availabilityText: "Open to freelance work & collaborations",
  resume: "/coming-soon", // TODO: point to /resume.pdf once the CV is ready
  tagline:
    "I build fast, beautiful cross-platform apps with Flutter — turning ideas into polished products that feel great to use.",
};

// Set these to your real profiles (or leave a link out by deleting the line).
export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/qp9z" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/koulei/" },
  { name: "X", icon: "x", url: "/coming-soon" },
  { name: "Email", icon: "mail", url: "mailto:contact@koulei.dev" },
];

export const about = {
  intro:
    "I'm a Freshman Software Engineering student at WISE University in Jordan, and a self-driven mobile developer. I specialize in building cross-platform apps with Flutter — obsessing over clean architecture, delightful UI, and shipping things that actually work.",
  extra:
    "Whether it's a mobile app, a web experience, or a weekend experiment, I care about the details: smooth interactions, sensible code, and interfaces people enjoy using.",
  facts: [
    { label: "Focus", value: "Flutter & Mobile" },
    { label: "Education", value: "B.Sc. Software Engineering — WISE University" },
    { label: "Based in", value: "Amman, Jordan" },
    { label: "Currently", value: "Learning, building & shipping" },
  ],
  stats: [
    { value: "3+", label: "Years coding" },
    { value: "2+", label: "Projects built" },
    { value: "5+", label: "Technologies" },
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
    name: "CAS",
    tagline: "Premium streaming app for Android",
    description:
      "A full-featured streaming app for Live TV & movies, built for speed and buttery playback. Instant startup with cached catalogs, an advanced video player (10-second skip, multiple screen-fit modes, subtitles), an animated 'Deep Space' UI, and secure family profiles with separate watch histories. Shipped v1.0.0.",
    tags: ["Flutter", "Dart", "Streaming", "Video Player"],
    featured: true,
    links: {
      code: "https://github.com/qp9z/CAS_mobile-release",
      demo: "https://github.com/qp9z/CAS_mobile-release/releases",
    },
  },
  {
    name: "koulei.dev",
    tagline: "This portfolio",
    description:
      "Designed and built from scratch with Astro for a fast, static, fully accessible experience — monochrome theme with a light/dark toggle, tasteful motion, and zero bloat.",
    tags: ["Astro", "TypeScript", "CSS"],
    featured: false,
    links: { code: "https://github.com/qp9z/koulei_portfolio", demo: "https://koulei.dev" },
  },
];

// Journey / what I've done. Newest first.
export const journey = [
  {
    period: "2025 — Present",
    title: "B.Sc. Software Engineering — WISE University",
    text: "Started my Software Engineering degree in Jordan, deepening the fundamentals: data structures, algorithms, and software design.",
    tag: "Education",
  },
  {
    period: "2024",
    title: "Went all-in on Flutter",
    text: "Focused on mobile development — building and shipping cross-platform apps, and getting comfortable with state management, clean architecture, and reliable media playback.",
    tag: "Mobile",
  },
  {
    period: "2023",
    title: "Started my coding journey",
    text: "Began with Python and web fundamentals, building small projects and falling for the craft of turning ideas into working software.",
    tag: "Foundations",
  },
];
