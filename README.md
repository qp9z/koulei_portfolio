<div align="center">

# koulei.dev

**Personal portfolio of Abdulrhman Al-Smadi** — Software Engineer · Flutter Developer, based in Amman, Jordan.

Fast, static, fully accessible. Monochrome theme with a light/dark toggle and tasteful motion — zero bloat.

[**Live site → koulei.dev**](https://koulei.dev)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-black)

</div>

---

## ✨ Features

- **Content in one place** — the entire site (bio, projects, skills, services, journey, socials) is driven from a single file: [`src/data/site.ts`](src/data/site.ts). Edit that, the site updates.
- **Static & fast** — built with Astro, ships almost no JavaScript.
- **Accessible** — semantic markup, keyboard-friendly, respects reduced motion.
- **Light / dark** — monochrome theme with a toggle.
- **Responsive** — looks right from phone to desktop.

## 🛠 Tech Stack

| Layer    | Tools                          |
| :------- | :----------------------------- |
| Framework| [Astro](https://astro.build)   |
| Language | TypeScript                     |
| Styling  | Plain CSS (`src/styles/global.css`) |
| Deploy   | Static hosting                 |

## 🚀 Getting Started

Requires **Node.js ≥ 22.12.0**.

```sh
# clone
git clone https://github.com/qp9z/koulei_portfolio.git
cd koulei_portfolio

# install
npm install

# run the dev server → http://localhost:4321
npm run dev
```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## 📂 Structure

```text
src/
├── components/   # Nav, Hero, About, Skills, Projects, Journey, Contact, Footer, Icon
├── data/
│   └── site.ts   # ← all portfolio content lives here
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── coming-soon.astro
└── styles/
    └── global.css
```

## ✏️ Make it yours

Everything editable lives in [`src/data/site.ts`](src/data/site.ts) — name, tagline, socials, projects, skills, and the journey timeline. No component edits needed for a content refresh.

## 📬 Contact

- **Web** — [koulei.dev](https://koulei.dev)
- **Email** — contact@koulei.dev
- **GitHub** — [@qp9z](https://github.com/qp9z)

## 📄 License

MIT — feel free to learn from it. Please don't ship it as your own portfolio.
