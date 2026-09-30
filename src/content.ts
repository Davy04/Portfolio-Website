// All site copy lives here — update this file when the resume changes.

export const profile = {
  name: 'Davy Woolley Ramos',
  headline: 'Software Engineer',
  intro:
    'Software Engineer with 2+ years building real-time web applications in C#, used by 1,000+ daily users across 10+ production titles.',
  email: 'davywoolley@gmail.com',
  github: 'https://github.com/Davy04',
  linkedin: 'https://www.linkedin.com/in/davywoolley',
  location: 'Olinda, PE, Brazil',
  availability: 'GMT-3 · Open to remote',
  // Drop the PDF into public/ — BASE_URL adds the /Portfolio-Website/ prefix on GitHub Pages.
  resume: `${import.meta.env.BASE_URL}Davy_Woolley_Ramos_Resume_EN.pdf`,
}

// Big numbers strip under the hero.
export const impact = [
  { value: '-80%', label: 'WebGL build size', detail: '150 MB → 30 MB, runs on 3 GB RAM phones' },
  { value: '10+', label: 'production titles', detail: 'real-time WebGL games shipped' },
  { value: '1,000+', label: 'daily users', detail: 'playing what I build, every day' },
]

export const about = {
  paragraphs: [
    "Hey, I'm Davy. I got into programming through games, and I never really left: these days I build real-time web games in C# at Opa Games, used by 1,000+ people every day.",
    "My favorite kind of problem is the one that shouldn't work: squeezing a 150 MB WebGL build down to 30 MB so it runs on a cheap phone, or keeping a WebSocket connection alive when the network clearly wants to give up.",
    "I also like making the team faster: I built the localization tool every Opa Games title uses, and I mentored 3 interns as technical lead. Now I'm doing a postgrad in Software Engineering to keep leveling up.",
  ],
  facts: [
    ['LOCATION', 'Olinda, PE — Brazil (GMT-3)'],
    ['EXPERIENCE', '2+ years in production'],
    ['FOCUS', 'C#, real-time web, WebGL'],
    ['STUDYING', 'Postgrad in Software Engineering @ PUC Minas (2026–2027)'],
    ['DEGREE', 'BSc in Computer Science @ Uninassau (2022–2025)'],
  ],
}

export const experience = {
  company: 'Opa Games',
  url: 'https://www.opagames.com',
  role: 'Software Engineer',
  note: 'Unity Developer, promoted Junior → Mid-Level',
  period: 'May 2024 – Sep 2026',
  location: 'Olinda, PE, Brazil',
  highlights: [
    'Cut WebGL build sizes from 100–150 MB to 20–30 MB (up to 80% smaller) so games run in the browser on 3 GB RAM phones',
    'Built FineLocalization, adopted across all company titles: adding a language went from 1 week to 1 day',
    'Client-server integration over REST and WebSockets: connection lifecycle, reconnect, error handling',
    'MVC/MVVM architecture and CI/CD build pipelines',
    'Mentored 3 interns as technical lead',
  ],
}

// `image` = file in public/; `preview` = drawn in code when there is no screenshot.
export const projects = [
  {
    title: 'FineLocalization',
    badge: 'OPEN SOURCE',
    description:
      'Open-source Unity package for multi-language support: CSV-driven tables, runtime download for WebGL/mobile/desktop, TextMeshPro support, and automatic fallback for missing keys. Adopted across all Opa Games titles; cut the time to add a new language from 1 week to 1 day.',
    tags: ['C#', 'Unity', 'UPM', 'TextMeshPro'],
    preview: 'csv',
    links: [{ label: 'GitHub', href: 'https://github.com/NoTaskStudios/com.notask.finelocalization' }],
  },
  {
    title: 'Bullet Crash',
    badge: 'PLAYABLE',
    description:
      '2D bullet-heaven game in Unity/C#, built from a full design document (main menu, HUD, level-up, game-over systems).',
    tags: ['C#', 'Unity'],
    image: 'bullet-crash.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/bullet-crash' }],
  },
  {
    title: 'Opa Games titles',
    badge: 'PRODUCTION',
    description: '10+ production real-time WebGL games (NDA, details on request).',
    tags: ['C#', 'Unity', 'WebGL'],
    preview: 'titles',
    links: [{ label: 'opagames.com', href: 'https://www.opagames.com' }],
  },
  {
    title: 'Soccer Showdown',
    badge: 'PLAYABLE',
    description: 'Arcade 1v1 soccer with exaggerated physics, fast matches and special shots.',
    tags: ['C#', 'Unity', 'WebGL'],
    image: 'soccer-showdown.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/soccer-showdown' }],
  },
  {
    title: 'Apocalipse',
    badge: 'PLAYABLE',
    description: 'Top-down survival game with combat systems and enemy waves.',
    tags: ['C#', 'Unity', 'WebGL'],
    image: 'apocalipse.png',
    links: [{ label: 'Play on itch.io', href: 'https://davy04.itch.io/apocalipse' }],
  },
]

// `wide` cards take two columns in the skills grid.
export const skills = [
  { group: 'Languages', icon: '{ }', wide: true, items: ['C#', 'JavaScript'] },
  { group: 'Unity', icon: '▶', wide: true, items: ['Unity', 'DOTween', 'Spine', 'TextMeshPro'] },
  { group: 'Architecture', icon: '◆', items: ['OOP', 'MVC', 'MVVM', 'SOLID'] },
  { group: 'Networking', icon: '⇄', items: ['REST', 'WebSockets'] },
  { group: 'Web', icon: '</>', items: ['WebGL', 'React', 'Vite'] },
  { group: 'DevOps', icon: '$_', items: ['Git', 'GitHub', 'CI/CD'] },
  { group: 'AI tools', icon: '✦', wide: true, items: ['Claude Code', 'ChatGPT', 'Codex'] },
]
