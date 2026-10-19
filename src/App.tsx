import { useState } from 'react'
import { profile, impact, about, experience, projects, skills } from './content'

const nav = [
  ['#about', 'About'],
  ['#experience', 'Experience'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#contact', 'Contact'],
]

const ext = { target: '_blank', rel: 'noopener noreferrer' }
const img = (file: string) => import.meta.env.BASE_URL + file

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-header">
          <span className="section-id" aria-hidden="true">// {n}</span>
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map(t => <li key={t}>{t}</li>)}
    </ul>
  )
}

// Drawn previews for projects without a screenshot.
function Preview({ kind }: { kind: string }) {
  if (kind === 'csv') {
    return (
      <div className="preview preview-csv" aria-hidden="true">
        <div className="csv-row csv-head"><span>key</span><span>en</span><span>pt-BR</span><span>es</span></div>
        <div className="csv-row"><span>play</span><span>Play</span><span>Jogar</span><span>Jugar</span></div>
        <div className="csv-row"><span>win</span><span>You win!</span><span>Você venceu!</span><span>¡Ganaste!</span></div>
        <div className="csv-row"><span>coins</span><span>Coins</span><span>Moedas</span><span className="csv-miss">→ en</span></div>
      </div>
    )
  }
  return (
    <div className="preview preview-titles" aria-hidden="true">
      <span className="big-num">10+</span>
      <span className="preview-label">REAL-TIME WEBGL TITLES</span>
    </div>
  )
}

// Hero panel for the project that has live numbers.
const featured = projects.find(p => p.stats)!

function FeaturedCard() {
  return (
    <article className="window featured" aria-labelledby="featured-title">
      <div className="window-bar">
        <i /><i /><i />
        <span>// FEATURED_PROJECT</span>
        <span className="live"><span className="dot" aria-hidden="true" /> LIVE</span>
      </div>
      <a href={featured.links[0].href} {...ext} className="featured-media" tabIndex={-1} aria-hidden="true">
        <img src={img(featured.image!)} alt="" />
      </a>
      <div className="featured-body">
        <div className="featured-top">
          <h2 id="featured-title">{featured.title}</h2>
          <a className="btn btn-sm" href={featured.links[0].href} {...ext}>Play ↗</a>
        </div>
        <dl className="featured-stats">
          {featured.stats!.map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo">DAVY<span className="accent">.DEV</span></a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <nav id="site-nav" aria-label="Main" className={menuOpen ? 'nav open' : 'nav'}>
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="grid-overlay" aria-hidden="true" />
          <div className="container hero-inner">
            <div>
              <p className="hero-label">// HELLO_WORLD</p>
              <h1 id="hero-title">
                DAVY WOOLLEY<br /><span className="accent">RAMOS</span>
              </h1>
              <p className="headline">&gt; {profile.headline}<span className="cursor" aria-hidden="true">_</span></p>
              <p className="intro">{profile.intro}</p>
              <div className="actions">
                <a className="btn btn-primary" href={profile.resume} {...ext}>&gt; RESUME.PDF</a>
                <a className="btn" href={profile.github} {...ext}>GITHUB →</a>
                <a className="btn" href={profile.linkedin} {...ext}>LINKEDIN →</a>
              </div>
              <p className="status">
                <span className="dot" aria-hidden="true" />
                OPEN TO REMOTE · {profile.location.toUpperCase()} · GMT-3
              </p>
            </div>
            <FeaturedCard />
          </div>

          <div className="container">
            <ul className="impact">
              {impact.map(i => (
                <li key={i.label}>
                  <span className="impact-value">{i.value}</span>
                  <span className="impact-label">{i.label}</span>
                  <span className="impact-detail">{i.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="about" n="01" title="About me">
          <div className="about">
            <div className="about-text">
              {about.paragraphs.map(p => <p key={p}>{p}</p>)}
            </div>
            <dl className="info-card">
              {about.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div>
                <dt>STATUS</dt>
                <dd className="online"><span className="dot" aria-hidden="true" /> Open to remote</dd>
              </div>
            </dl>
          </div>
        </Section>

        <Section id="experience" n="02" title="Experience">
          <article className="card xp">
            <div className="xp-head">
              <div>
                <h3>{experience.role}</h3>
                <p><a href={experience.url} {...ext} className="accent">@ {experience.company}</a> <span className="muted">· {experience.note}</span></p>
              </div>
              <p className="xp-when">{experience.period}<br /><span className="muted">{experience.location}</span></p>
            </div>
            <ul className="highlights">
              {experience.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </article>
        </Section>

        <Section id="projects" n="03" title="Projects">
          <div className="project-grid">
            {projects.map(p => (
              <article key={p.title} className="card project">
                <a href={p.links[0].href} {...ext} className="media" tabIndex={-1} aria-hidden="true">
                  {p.image ? <img src={img(p.image)} alt="" /> : <Preview kind={p.preview!} />}
                  <span className="media-overlay">→ VIEW PROJECT</span>
                </a>
                <div className="project-body">
                  <div className="project-top">
                    <h3>{p.title}</h3>
                    <span className="badge">{p.badge}</span>
                  </div>
                  <p className="muted">{p.description}</p>
                  <Tags items={p.tags} />
                  <div className="actions">
                    {p.links.map(l => (
                      <a key={l.href} className="btn btn-sm" href={l.href} {...ext}>{l.label} ↗</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" n="04" title="Skills">
          <div className="skills">
            {skills.map((s, i) => (
              <div key={s.group} className={`skill-card ${s.wide ? 'wide' : ''}`}>
                <div className="skill-head">
                  <span className="skill-icon" aria-hidden="true">{s.icon}</span>
                  <span className="skill-index" aria-hidden="true">0{i + 1}</span>
                </div>
                <h3>{s.group}</h3>
                <ul className={s.wide ? 'skill-list big' : 'skill-list'}>
                  {s.items.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" n="05" title="Contact">
          <p className="contact-big">LET'S BUILD<br /><span className="accent">SOMETHING.</span></p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>&gt; {profile.email}</a>
            <a className="btn" href={profile.linkedin} {...ext}>LINKEDIN →</a>
            <a className="btn" href={profile.github} {...ext}>GITHUB →</a>
          </div>
          <p className="status">
            <span className="dot" aria-hidden="true" />
            {profile.location.toUpperCase()} · {profile.availability.toUpperCase()}
          </p>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>DAVY<span className="accent">.DEV</span></span>
          <span>© 2026 {profile.name}</span>
        </div>
      </footer>
    </>
  )
}
