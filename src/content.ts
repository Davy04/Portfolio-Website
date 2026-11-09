// All site copy lives here — update this file when the resume changes.

export const profile = {
  name: 'Davy Woolley Ramos',
  headline: 'Software Engineer',
  intro:
    'I build real-time web games in Unity and C#, played by 1,000+ people every day, and full-stack products in TypeScript, from the database to the deploy.',
  email: 'davywoolley@gmail.com',
  github: 'https://github.com/Davy04',
  linkedin: 'https://www.linkedin.com/in/davywoolley',
  location: 'Olinda, PE, Brazil',
  // Drop the PDF into public/ — BASE_URL adds the /Portfolio-Website/ prefix on GitHub Pages.
  resume: `${import.meta.env.BASE_URL}Davy_Woolley_Ramos_Resume_EN.pdf`,
}

// Numbers row under the hero.
export const impact = [
  { value: '2+ years', label: 'shipping games in production' },
  { value: '10+', label: 'real-time WebGL titles' },
  { value: '−80%', label: 'WebGL build size, 150 → 30 MB' },
]

export const about = {
  paragraphs: [
    "Hey, I'm Davy. I got into programming through games, and I never really left: I build real-time web games in Unity and C#, played by 1,000+ people every day.",
    "My favorite kind of problem is the one that shouldn't work: squeezing a 150 MB WebGL build down to 30 MB so it runs on a cheap phone, or keeping a WebSocket connection alive when the network clearly wants to give up.",
    "Outside of games I ship full-stack products end to end, like Conectaluno, a multi-tenant school portal. Now I'm doing a postgrad in Software Engineering to keep leveling up.",
  ],
  facts: [
    ['Based in', 'Olinda, PE, Brazil (GMT-3)'],
    ['Focus', 'C#, Unity, real-time web, full-stack TypeScript'],
    ['Studying', 'Postgrad in Software Engineering, PUC Minas (2026–2027)'],
    ['Degree', 'BSc in Computer Science, Uninassau (2022–2025)'],
    ['Status', 'Open to remote'],
  ],
}

// Newest first.
export const experience = [
  {
    company: 'Opa Games',
    url: 'https://www.opagames.com',
    role: 'Unity Developer',
    type: 'Full-time',
    period: 'May 2024 – Sep 2026',
    location: 'Recife, PE, Brazil · On-site',
    highlights: [
      'Developed and maintained 2D iGaming titles in Unity for WebGL, with a strong focus on UI/UX and animation (TextMeshPro, DOTween, Spine)',
      'Implemented gameplay features and themes/skins for Mines and Crash-style games, working with product and design',
      'Integrated the client with backend services over REST and WebSockets for real-time communication and data flow',
      'Built a reusable spreadsheet-driven localization package with optional runtime updates: 10+ languages across games, and adding a language went from 1 week to 1 day',
      'Cut WebGL build sizes by up to 80% (150 MB → 30 MB) so games run in the browser on 3 GB RAM phones',
      'Mentored 3 interns as technical lead',
    ],
  },
  {
    company: 'Mediateam Arte Interativa',
    url: undefined,
    role: 'Software Engineer',
    type: 'Internship',
    period: 'Aug 2022 – Feb 2023',
    location: 'Pernambuco, Brazil',
    highlights: [
      'Front-end development of web interfaces with JavaScript, HTML and CSS',
      'Built interactive VR prototypes and experiences with Unity and C#',
    ],
  },
]

// `image` = file in public/; `preview` = drawn in code when there is no screenshot.
// The first project is featured next to the name in the hero.

type Project = {
  title: string
  badge: string
  description: string
  tags: string[]
  image?: string
  preview?: 'csv' | 'titles'
  links: { label: string; href: string }[]
  stats?: [string, string][]
}

export const projects: Project[] = [
  {
    title: 'Conectaluno',
    badge: 'Live',
    description:
      'Multi-tenant student portal for high schools: each school gets its own subdomain, logo and brand color. Teachers enter grades and take attendance, students follow their report card, and the school office manages classes, schedules, calendar and announcements. Principals get analytics on at-risk students. Schools are isolated by PostgreSQL Row-Level Security, and a separate admin panel tracks usage, school health and revenue without ever seeing grades. Runs on a VPS with Docker, Cloudflare Tunnel, encrypted daily backups and automatic deploys.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Drizzle', 'Docker'],
    image: 'conectaluno.png',
    links: [{ label: 'Visit site', href: 'https://conectaluno.com.br' }],
  },
  {
    title: 'AutoFootball',
    badge: 'Live',
    description:
      'Football auto-battler card game for the browser. Build your squad in the shop, then watch a play-by-play match simulation decide the game against squads other players built at the same stage of their run. Installable PWA with a Node.js server, a balancing dashboard and Docker deploys through GitHub Actions.',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind', 'Node.js', 'Docker'],
    image: 'autofootball.webp',
    links: [{ label: 'Play in the browser', href: 'https://autofootball.com.br' }],
    stats: [
      ['2,000+', 'players'],
      ['7,900+', 'matches'],
      ['123K', 'impressions'],
    ],
  },
  {
    title: 'Sports Tower',
    badge: 'Playable',
    description:
      'Idle tycoon game for the browser: run a sports store tower where every floor is a different sport. Level up floors, open shelves, collect fan cards in an album with rare and holographic epics, complete missions and earn money while away. Prestige through franchises, English and Portuguese, progress saved in the browser.',
    tags: ['TypeScript', 'Vite', 'SVG'],
    image: 'sports-tower.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/sports-tower' }],
  },
  {
    title: 'Hexagonal API',
    badge: 'Open source',
    description:
      'Customer management REST API built with Hexagonal Architecture (Ports & Adapters): business rules live in a framework-free Java core, while REST, MongoDB, Kafka and an external ZIP-code API plug in through ports. CPF validation runs asynchronously over Kafka, and 33 ArchUnit rules fail the build if the architecture is broken.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'ArchUnit', 'Docker'],
    image: 'hexagonal.png',
    links: [{ label: 'View on GitHub', href: 'https://github.com/Davy04/hexagonal' }],
  },
  {
    title: 'FineLocalization',
    badge: 'Open source',
    description:
      'Unity package for multi-language support: CSV-driven tables, runtime download, TextMeshPro support and fallback for missing keys. Used across all Opa Games titles.',
    tags: ['C#', 'Unity', 'UPM'],
    preview: 'csv',
    links: [{ label: 'View on GitHub', href: 'https://github.com/NoTaskStudios/com.notask.finelocalization' }],
  },
  {
    title: 'Opa Games titles',
    badge: 'Production',
    description: '10+ real-time WebGL games in production (under NDA, details on request).',
    tags: ['C#', 'Unity', 'WebGL'],
    preview: 'titles',
    links: [{ label: 'opagames.com', href: 'https://www.opagames.com' }],
  },
  {
    title: 'Bullet Crash',
    badge: 'Playable',
    description: '2D bullet-heaven game built from a full design document: menu, HUD, level-up and game-over systems.',
    tags: ['C#', 'Unity'],
    image: 'bullet-crash.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/bullet-crash' }],
  },
  {
    title: 'Soccer Showdown',
    badge: 'Playable',
    description: 'Arcade 1v1 soccer with exaggerated physics, fast matches and special shots.',
    tags: ['C#', 'Unity', 'WebGL'],
    image: 'soccer-showdown.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/soccer-showdown' }],
  },
  {
    title: 'Apocalipse',
    badge: 'Playable',
    description: 'Top-down survival game with combat systems and enemy waves.',
    tags: ['C#', 'Unity', 'WebGL'],
    image: 'apocalipse.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/apocalipse' }],
  },
]

export const skills = [
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { group: 'Games', items: ['Unity', 'WebGL', 'DOTween', 'Spine', 'TextMeshPro'] },
  { group: 'Web', items: ['React', 'Next.js', 'Vite', 'Tailwind'] },
  { group: 'Backend', items: ['Node.js', 'Spring Boot', 'PostgreSQL', 'REST', 'WebSockets'] },
  { group: 'Architecture', items: ['MVC', 'MVVM', 'Hexagonal', 'SOLID'] },
  { group: 'DevOps', items: ['Git', 'GitHub Actions', 'Docker', 'CI/CD'] },
  { group: 'AI tools', items: ['Claude Code', 'ChatGPT', 'Codex'] },
]
