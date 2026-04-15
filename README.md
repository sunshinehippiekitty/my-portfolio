# Clare's Online Portfolio Museum 🏛️

A personal portfolio website themed as an online museum, showcasing my projects, skills, experiences, and contact information.

**Live-ish demo:** Open `index.html` in your browser to get started.

---

## 📁 Project Structure

```
my-portfolio/
├── index.html          # Home / landing page
├── choose.html         # Exhibition selection menu
├── aboutMe.html        # About Me page
├── projects.html       # Projects gallery
├── skills.html         # Technical & soft skills
├── experience.html     # Experiences & achievements
├── contacts.html       # Contact page
├── fadeEffect.js       # Shared JS — fade-in animations & email tooltip
├── css/
│   ├── index.css       # Shared base styles (all pages)
│   ├── frame.css       # Centered frame layout (aboutMe, skills, contacts, choose)
│   └── scrollable.css  # Scrollable card grid layout (projects, experience)
└── package.json
```

---

## 🚀 Getting Started

No build step required — this is a static site. Just open `index.html` in any modern browser.

```bash
# Optional: clone the repo
git clone https://github.com/sunshinehippiekitty/my-portfolio.git
cd my-portfolio

# Then simply open index.html in your browser
```

---

## 🛠️ Built With

- **HTML5** — page structure
- **CSS3** — custom styling with a warm brown/gold museum aesthetic
- **JavaScript (Vanilla)** — fade-in scroll animations, email tooltip toggle
- **Bootstrap 5.3** — responsive grid and button utilities
- **Font Awesome 6** — social/contact icons
- **Google Fonts** — Chiron GoRound TC, Fraunces, Syne

---

## 📄 CSS Architecture

There are three CSS files, layered by page type:

| File | Purpose | Used by |
|------|---------|---------|
| `index.css` | Base styles — background, back button, typography, fade animation | All pages |
| `frame.css` | Centered frame layout with gold vintage frame decoration | `index`, `choose`, `aboutMe`, `skills`, `contacts` |
| `scrollable.css` | Scrollable page with 3-column card grid | `projects`, `experience` |

Each page links `index.css` first, then the relevant layout CSS.

---

## ✨ Features

- **Museum theme** — gold vintage picture frames around content and cards
- **Blurred background** — AI-generated background image with CSS blur effect
- **Fade-in animations** — elements animate in on load/scroll using `IntersectionObserver`
- **Email tooltip** — click the envelope icon on the Contacts page to reveal the email address
- **Responsive design** — mobile-friendly layouts via media queries and Bootstrap

---

## 📬 Contact

- **Email:** clarethia.25@ichat.sp.edu.sg
- **LinkedIn:** [Clare Thia](https://www.linkedin.com/in/clare-thia-567215361/)
- **GitHub:** [sunshinehippiekitty](https://github.com/sunshinehippiekitty)

---

*© 2026 Thia Le Xuan Clare. All rights reserved.*